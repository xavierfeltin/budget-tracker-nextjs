import { useEffect, useState } from "react";
import { IAccountLine, ITagBudget, TBudget, aggregateByTags } from "../Data/Bank";
import { TagBudgetConsumptionChart } from "../Charts/TagBudgetConsumptionChart";

export interface InputRangeProps {
    accountLines: IAccountLine[];
    budgets: TBudget;
    tag: string;
}

export function Budget({
        accountLines,
        budgets,
        tag
    }: InputRangeProps) {

    const [tagBudgets, setTagBudgets] = useState<ITagBudget[]>([]);

    useEffect(() => {

        const tagBudgets: ITagBudget[] = [];
        const taggedLines = tag === "" ? accountLines : accountLines.filter((line) => line.tags.indexOf(tag) !== -1);
        const groupByTag = aggregateByTags(taggedLines, -1, tag);
        const tags = Object.keys(groupByTag).sort();

        for (let i = 0; i < tags.length; i++) {
            const tag = tags[i];
            if (budgets[tag]) {
                const lines = taggedLines.filter((line) => line.tags.indexOf(tag) !== -1);

                let debit = 0;
                let credit = 0;
                for (let i = 0; i < lines.length; i++) {
                    debit += lines[i].debit ?? 0;
                    credit += lines[i].credit ?? 0;
                }

                const tagBudget: ITagBudget = {
                    tag: tag,
                    allowed: budgets[tag],
                    consumed: debit,
                    lines: lines
                }
                tagBudgets.push(tagBudget);
            }
        }
        setTagBudgets(tagBudgets);
    }, [accountLines, budgets, tag])

    return (
        <div className="chart-container">
            {
                tagBudgets.map((budget, idx) => {
                    return (
                        <TagBudgetConsumptionChart key={"chart-" + idx} allowedAmount={budget.allowed} accountLines={budget.lines} tag={budget.tag}></TagBudgetConsumptionChart>
                    )
                })
            }
        </div>
    )
}