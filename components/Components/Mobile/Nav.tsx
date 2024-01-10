import { IAccountPeriod, getAccountPeriodStr } from "@/components/Data/Bank";
import "./Nav.css"
import { useState } from "react"

export interface InputRangeProps {
    periods: IAccountPeriod[];
    handleNavSelection: (navAction: string, period?: IAccountPeriod) => void
}


//tutorial: https://www.youtube.com/watch?v=hmoavRdx4YM
export function Nav({
    periods,
    handleNavSelection}: InputRangeProps) {

        const [showLinks, setShowLinks] = useState<boolean>(false);

        const handleShowLinks = (navAction: string, period?: IAccountPeriod) => {
            setShowLinks(!showLinks);

            if (navAction) {
                handleNavSelection(navAction, period);
            }
        }

        return (
        <nav className={`navbar ${showLinks ? "navbar show-nav" : "hide-nav"}`}>
            <button className="navbar__burger" onClick={() => handleShowLinks("")}>
                <span className="burger-bar"></span>
            </button>
            <div className="navbar__links"></div>
            <ul className="navbar__links">
                <li className="navbar__item slideInDown-1">
                    <button className="navbar__link burger-item" onClick={() => handleShowLinks("Load")}>
                        Load accounts
                    </button>
                </li>

                {periods.map((account, idx)=> {
                    const nbUntaggedLines = account.lines.filter((line) => line.tags.length === 0).length;

                    return <li key={"navbar-item-" + getAccountPeriodStr(account)} className="navbar__item slideInDown-2">
                        <button  className="navbar__link burger-item"  onClick={() => handleShowLinks("DisplayAccount", account)}>
                            {getAccountPeriodStr(account)} {nbUntaggedLines > 0 ? "(lines to tag " + nbUntaggedLines + ")" : ""}
                        </button>
                    </li>
                })}
            </ul>
        </nav>
    )
}