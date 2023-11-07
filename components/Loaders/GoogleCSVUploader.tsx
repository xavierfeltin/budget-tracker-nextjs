import { AccountFilesSelector } from '../Components/AccountFilesSelector';

export interface InputRangeProps {
    listedFiles: {id: string, name: string}[];
    handleFiles: (files: File[]) => void;
}

export function GoogleCSVUploader({
    listedFiles,
    handleFiles} : InputRangeProps) {

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

    return (
        <AccountFilesSelector files={listedFiles} handleSelection={handleSelection}></AccountFilesSelector>
    )
}