import './AccountList.css';
import { useState } from "react";
import { IAccountPeriod, getAccountPeriodStr } from "../Data/Bank";

export interface InputRangeProps {
    periods: IAccountPeriod[];
    onAccountSelect: (account: IAccountPeriod) => void;
}

export function AccountList({
    periods,
    onAccountSelect
    }: InputRangeProps) {

    const [selectedPeriod, setSelectedPeriod] = useState<number>(0);

    return (
        <div>
            <h1>Available Periods</h1>
            <div  className="vertical-menu">
                {periods.map((account, idx)=> {
                    const nbUntaggedLines = account.lines.filter((line) => line.tags.length === 0).length;

                    return <button id={"btn-" + getAccountPeriodStr(account)}
                            name={"btn-" + getAccountPeriodStr(account)}
                            className={(selectedPeriod === idx) ? "btn-link-selected vertical-menu" : "btn-link vertical-menu"}
                            onClick={() => {setSelectedPeriod(idx); onAccountSelect(periods[idx])}}>
                        {getAccountPeriodStr(account)} {nbUntaggedLines > 0 ? "(lines to tag " + nbUntaggedLines + ")" : ""}
                    </button>
                })}
            </div>
        </div>
    )
}