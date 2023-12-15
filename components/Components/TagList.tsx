import './TagList.css';
import { useEffect, useState } from "react";
import { IAccountLines, ITag, extractTagsWithCount } from "../Data/Bank";

export interface InputRangeProps {
    account: IAccountLines;
    onTagSelect: (tag: string) => void;
}

export function TagList({
        account,
        onTagSelect,
    }: InputRangeProps) {

    const [tagsWithCount, setTagsWithCount] = useState<ITag[]>([])
    const [selectedTag, setSelectedTag] = useState<string>("");

    useEffect(() => {
        const listWithCount = extractTagsWithCount(account.lines)
        setTagsWithCount([{tag: "Tous", count: account.lines.length, frequency: 1}, ...listWithCount]);
    }, [account])

    return (
        <div>
            <h1> Tags </h1>

            {tagsWithCount.map((tag, idx) => (
                <button key={"btn-" + tag.tag} id={"btn-" + tag.tag} name={"btn-" + tag.tag} className={(selectedTag === tag.tag || (tag.tag === "Tous" && selectedTag === "")) ? "btn-link-selected " : "btn-link "} onClick={() => {setSelectedTag(idx === 0 ? "" : tagsWithCount[idx].tag); onTagSelect(idx === 0 ? "" : tagsWithCount[idx].tag);}}>
                    {tag.tag === "Tous" ? tag.tag : tag.tag + "(" + Math.floor(tag.frequency * 100) + "%)"}
                </button>
            ))}
        </div>
    )
}