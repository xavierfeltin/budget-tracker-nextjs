import { useState } from "react";

export interface GoogleFile {
    id: string;
    name: string;
}

export interface InputRangeProps {
    files: GoogleFile[];
    handleSelection: (files: {id: string, name: string}[]) => void,
}

export function AccountFilesSelector({
    files,
    handleSelection
    }: InputRangeProps) {


    const [selectedFiles, setSelectedFiles] = useState<{id: string, name: string}[]>([]);
    const handleOnSubmit = () => {
        handleSelection(selectedFiles);
    }

    return (
        <div>
            {files.length > 0 &&
                <>
                {files.map((file: {id: string, name: string}, idx: number) => {
                    return (
                        <div key={"div-select-files-" + idx}>
                            <input name={"check-file-" + idx} type="checkbox" id={"check-file-" + idx} onChange={(e) => {
                                if (e.currentTarget.checked) {
                                    setSelectedFiles((selected: {id: string, name: string}[]) => {
                                        return [...selected, file];
                                    })
                                }
                                else {
                                    setSelectedFiles((selected: {id: string, name: string}[]) => {
                                        const idx = selected.map((f) => f.id).indexOf(file.id);
                                        const tmp = [...selected];
                                        tmp.splice(idx, 1);
                                        return tmp;
                                    })
                                }
                            }}/>
                            <label htmlFor={"check-file-" + idx}>{file.name}</label>
                        </div>
                    )})
                }
                <div>
                    <button type="submit" onClick={handleOnSubmit}>Load files</button>
                </div>
                </>
            }
        </div>
    )
}