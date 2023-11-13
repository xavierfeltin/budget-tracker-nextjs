import { useState } from "react";

export interface GoogleFile {
    id: string;
    name: string;
}

export interface InputRangeProps {
    files: GoogleFile[];
    formId: string;
    handleSelection: (files: {id: string, name: string}[]) => void,
}

export function AccountFilesSelector({
    files,
    formId,
    handleSelection
    }: InputRangeProps) {


    const [selectedFiles, setSelectedFiles] = useState<{id: string, name: string}[]>([]);
    const handleOnSubmit = () => {
        handleSelection(selectedFiles);
    }

    return (
        <div id={"div-" + formId} style={{lineHeight: "200%"}}>
            {files.length > 0 &&
                <>
                {files.map((file: {id: string, name: string}, idx: number) => {
                    return (
                        <div key={"div-select-files-" + formId + "-" + idx}>
                            <input name={"check-file-" + formId + "-" + idx} type="checkbox" id={"check-file-" + formId + "-" + idx} onChange={(e) => {
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
                            <label style={{wordBreak: "break-all"}} htmlFor={"check-file-" + formId + "-" + idx}>{file.name}</label>
                        </div>
                    )})
                }
                <div>
                    <button type="submit" id={"button-" + formId} onClick={handleOnSubmit} className="button-18">Load files</button>
                </div>
                </>
            }
        </div>
    )
}