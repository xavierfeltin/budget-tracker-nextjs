import { useCallback, useEffect, useState } from 'react';
import { AccountFilesSelector } from '../Components/AccountFilesSelector';
import { EDocumentType } from '../Data/Bank';

export interface InputRangeProps {
    //listedFiles: {id: string, name: string}[];
    documentType: EDocumentType;
    handleFiles: (files: File[], documentType: EDocumentType) => void;
}

const getFormIdFromDocumentType = (type: EDocumentType): string => {
    switch (type) {
        case EDocumentType.ACCOUNT:
            return "load-account";
        case EDocumentType.MAPPING:
            return "load-mapping";
        case EDocumentType.BUDGET:
            return "load-budget";
        default:
            return "";
    }
}

const getQueryFilterFromDocumentType = (folderId: string, type: EDocumentType): string => {
    switch (type) {
        case EDocumentType.ACCOUNT:
            return "'" + folderId + "' in parents and mimeType='text/csv' and not name contains 'mapping'";
        case EDocumentType.MAPPING:
            return "'" + folderId + "' in parents and mimeType='text/csv' and name contains 'mapping'";
        case EDocumentType.BUDGET:
            return "'" + folderId + "' in parents and mimeType='text/csv' and name contains 'budget'";
        default:
            return "";
    }
}

export function GoogleCSVUploader({
    documentType,
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

    const listFilesInFolder = useCallback(async (folderId: string) => {
        let response;
        try {
            //@ts-ignore
            response = await gapi.client.drive.files.list({
            'pageSize': 10,
            'corpora': 'user',
            'includeItemsFromAllDrives': true,
            'supportsAllDrives': true,
            'orderBy': 'name',
            'q': getQueryFilterFromDocumentType(folderId, documentType),
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
    }, [documentType]);

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
        handleFiles(files, documentType);
    };

    useEffect(() => {
        getAccountFolderId().then((folderId: string) => {
            listFilesInFolder(folderId);
        });
    }, [listFilesInFolder])

    return (
        <AccountFilesSelector formId={getFormIdFromDocumentType(documentType)} files={listedFiles} handleSelection={handleSelection}></AccountFilesSelector>
    )
}