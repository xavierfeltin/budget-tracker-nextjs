import { useRef } from 'react';
import './CSVUploader.css';
import { EDocumentType } from '../Data/Bank';

export interface InputRangeProps {
    documentType: EDocumentType;
    formId: string;
    actionLabel: string;
    handleFiles: (files: File[], documentType: EDocumentType) => void;
}

export function CSVUploader({
    documentType,
    formId,
    actionLabel,
    handleFiles} : InputRangeProps) {

    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const nbFiles = e.currentTarget.files?.length || 0;
        console.log(e.currentTarget.files);
        const files: File[] = [];
        if (e.currentTarget.files) {
            for (let i = 0; i < nbFiles; i++) {
                console.log("handleOnChange: " + e.currentTarget.files[i]);
                files.push(e.currentTarget.files[i]);
            }
        }
        console.log("CSV Uploaded nb files: " + files.length);
        handleFiles(files, documentType);
    };

    return (
        <div style={{marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 32}}>
            <form>
                <label htmlFor={formId} className="button-18">{actionLabel}</label>
                <input
                    type={"file"}
                    id={formId}
                    accept={".csv"}
                    onChange={handleOnChange}
                    multiple={true}
                    ref={hiddenFileInput}
                    style={{display: 'none'}}
                />
            </form>
        </div>
    )
}