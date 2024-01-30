import { useEffect, useState } from "react";
import { IAccountLine, filterLinesByTags } from "../Data/Bank";

export interface InputRangeProps {
    accountLines: IAccountLine[];
    tag: string;
}

export function Lines({
        accountLines,
        tag
    }: InputRangeProps) {

    const [lines, setLines] = useState<IAccountLine[]>([])

    useEffect(() => {
        const taggedLines = tag === "" ? accountLines : filterLinesByTags(accountLines, tag);
        //const taggedLines = tag === "" ? accountLines : accountLines.filter((line) => line.tags.indexOf(tag) !== -1);
        setLines(taggedLines);
    }, [accountLines, tag])

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th> Date </th>
                    <th> Label </th>
                    <th> Debit </th>
                    <th> Credit </th>
                </tr>
                </thead>
                <tbody>
                {lines.map((line, idx) => {
                    return <tr key={"tr-" + idx}>
                        <td key={"td-date" + idx}>
                            {line.date.toLocaleString("fr-FR", {year: 'numeric', month: 'numeric', day: 'numeric'})}
                        </td>
                        <td key={"td-label" + idx}>
                            {line.label}
                        </td>
                        <td key={"td-debit" + idx}>
                            {line.debit?.toFixed(2)}
                        </td>
                        <td key={"td-credit" + idx}>
                            {line.credit?.toFixed(2)}
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}