import './TagList.css';
import { useEffect, useState } from "react";
import { IAccountLines, ITag, extractMainTagsWithCount, extractTagsWithCount, extractTagsWithCount2, filterLinesByTags } from "../Data/Bank";

export interface InputRangeProps {
    account: IAccountLines;
    onTagSelect: (tag: string) => void;
}

export function TagList({
        account,
        onTagSelect,
    }: InputRangeProps) {

    const [tagsWithCount, setTagsWithCount] = useState<ITag[]>([])
    const [subTagsWithCount, setSubTagsWithCount] = useState<ITag[]>([])
    const [selectedTag, setSelectedTag] = useState<string>("");
    const [breadCrumbs, setBreadCrumbs] = useState<string[]>(["Tous"]);

    useEffect(() => {
        const listWithCount = extractMainTagsWithCount(account.lines); //extractTagsWithCount(account.lines, undefined)
        setTagsWithCount([{tag: "Tous", count: account.lines.length, frequency: 1}, ...listWithCount]);
    }, [account])

    useEffect(() => {
        console.log("selected tag: " + selectedTag);
        if (selectedTag === "") {
            setSubTagsWithCount([]);
        }
        else {
            // Maybe improve here to take into account all the bread crumbs ?
            //const taggedLines = account.lines.filter((line) => line.tags.indexOf(selectedTag) !== -1);
            const taggedLines = filterLinesByTags(account.lines, breadCrumbs.slice(1).join(">"));
            const listWithCount = extractTagsWithCount2(taggedLines, breadCrumbs.slice(1).join(">"));
            setSubTagsWithCount(listWithCount);
        }
    }, [selectedTag, account, breadCrumbs])


    return (
        <div>
            <span>
            {breadCrumbs.map((tag, idx) => (
                <>
                <button key={"btn-breadcrumb-" + tag} id={"btn-breadcrumb-" + tag} name={"btn-breadcrumb-" + tag} className={"button-link-breadcrumb"}
                    onClick={() => {
                        const selectedCrumb = breadCrumbs[idx];
                        const mappedTag = selectedCrumb === "Tous" ? "" : selectedCrumb;
                        setSelectedTag(selectedCrumb);
                        setBreadCrumbs((old) => old.slice(0, old.indexOf(selectedCrumb) + 1));
                        //onTagSelect(breadCrumbs.slice(1).join(">"));
                        onTagSelect(breadCrumbs.slice(0, breadCrumbs.indexOf(selectedCrumb) + 1).slice(1).join(">"));
                    }}>
                    {tag}
                </button>
                {idx < (breadCrumbs.length - 1) &&
                    <span> {">"} </span>
                }
                </>
            ))}
            </span>

            <div className='section-wrapper-border'>
            {breadCrumbs.length > 1 &&
                <>
                {subTagsWithCount.map((tag, idx) => (
                    <button key={"btn-subtag-" + tag.tag} id={"btn-subtag-" + tag.tag} name={"btn-subtag-" + tag.tag} className={"btn-link "}
                        onClick={() => {
                                setSelectedTag(subTagsWithCount[idx].tag);
                                setBreadCrumbs((old) => [...old, subTagsWithCount[idx].tag]);
                                /*onTagSelect(subTagsWithCount[idx].tag);*/
                                onTagSelect([...breadCrumbs, subTagsWithCount[idx].tag].slice(1).join(">"));
                            }}>
                        {tag.tag + "(" + Math.floor(tag.frequency * 100) + "%)"}
                    </button>
                ))}
                </>
            }

            {breadCrumbs.length === 1 &&
                <>
                {tagsWithCount.map((tag, idx) => {
                    const buttons: JSX.Element[] = [];
                    if (tag.tag !== "Tous") {
                        const button = <button key={"btn-" + tag.tag} id={"btn-" + tag.tag} name={"btn-" + tag.tag} className={(selectedTag === tag.tag || (tag.tag === "Tous" && selectedTag === "")) ? "btn-link-selected " : "btn-link "}
                            onClick={() => {
                                setSelectedTag(idx === 0 ? "" : tagsWithCount[idx].tag);
                                setBreadCrumbs(idx === 0 ? ["Tous"] : ["Tous", tagsWithCount[idx].tag]);
                                /*onTagSelect(idx === 0 ? "" : tagsWithCount[idx].tag);*/
                                onTagSelect([...breadCrumbs, tagsWithCount[idx].tag].slice(1).join(">"));
                            }}>
                            {tag.tag === "Tous" ? tag.tag : tag.tag + "(" + Math.floor(tag.frequency * 100) + "%)"}
                        </button>
                        buttons.push(button);
                    }
                    return buttons;
                })}
                </>
            }
            </div>
        </div>
    )
}