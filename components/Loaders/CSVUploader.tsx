import { useRef } from 'react';
import './CSVUploader.css';

export interface InputRangeProps {
    searchMapping: boolean;
    formId: string;
    actionLabel: string;
    handleFiles: (files: File[], useMapping: boolean) => void;
}

export function CSVUploader({
    searchMapping,
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
        handleFiles(files, searchMapping);
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