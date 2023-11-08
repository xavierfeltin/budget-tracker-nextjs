import { useEffect, useState } from 'react';
import { AccountFilesSelector } from '../Components/AccountFilesSelector';

export interface InputRangeProps {
    //listedFiles: {id: string, name: string}[];
    handleFiles: (files: File[]) => void;
}

export function GoogleCSVUploader({
    //listedFiles,
    handleFiles} : InputRangeProps) {

    const [listedFiles, setListedFiles] = useState<{id: string, name: string}[]>([]);

    const getAccountFolderId = async () => {
        let response;
        try {
            //@ts-ignore
            response = await gapi.client.drive.files.list({
            'pageSize': 2,
            'corpora': 'user',
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true,
            'orderBy': 'name',
            'q': "name='Comptes' and mimeType = 'application/vnd.google-apps.folder'",
            'fields': 'files(id, name)'
            });
        } catch (err) {
            console.error(err);
            return "";
        }
        const files = response.result.files;
        if (!files || files.length == 0) {
            console.warn('No files found');
            return "";
        }

        if (files.length > 1) {
            console.warn('Too many folders found');
            return "";
        }

        return files[0].id;
    }

    const listFilesInFolder = async (folderId: string) => {
        let response;
        try {
            //@ts-ignore
            response = await gapi.client.drive.files.list({
            'pageSize': 10,
            'corpora': 'user',
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true,
            'orderBy': 'name',
            'q': "'" + folderId + "' in parents and mimeType='text/csv'",
            'fields': 'files(id, name)'
            });
        } catch (err) {
            console.error(err);
            return;
        }
        const files: {id: string, name: string}[] = response.result.files;
        if (!files || files.length == 0) {
            console.warn('No files found');
            return;
        }
        setListedFiles(files);
    }

    const getCSVFileContent = async (file: {id: string, name: string}) => {
        console.log("Get content for id " + file.id + ", name: " + file.name);

        let response;
        try {
          //@ts-ignore
          response = await gapi.client.drive.files.get({
            'fileId': file.id,
            supportAllDrives: true,
            'alt': 'media'
          });
        } catch (err) {
          console.error(err);
          return;
        }

        console.log(JSON.stringify(response.body));
        const content: string = response.body as string;
        const blob = new Blob([content]);
        const f = new File([blob], file.name)

        return f;
    }

    const handleSelection = async (selectedFiles: {id: string, name: string}[]) => {
        const files: File[] = [];
        console.log("Handle Selection: " + JSON.stringify(selectedFiles));

        for (let i = 0; i < selectedFiles.length; i++) {
            console.log("Get: " + JSON.stringify(selectedFiles[i]));
            const file = await getCSVFileContent(selectedFiles[i]);
            if (file) {
                files.push(file);
            }
        }

        console.log("All files have been loaded");
        handleFiles(files);
    };

    useEffect(() => {
        getAccountFolderId().then((folderId: string) => {
            listFilesInFolder(folderId);
        });
    }, [])

    return (
        <AccountFilesSelector files={listedFiles} handleSelection={handleSelection}></AccountFilesSelector>
    )
}