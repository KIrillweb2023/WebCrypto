import { useState } from "react"

export const Profit = () => {
    const [disableMenu, setDisableMenu] = useState(false);

    const toggleMenu = () => {
        setDisableMenu(!disableMenu);
    }

    return (
        <button className="app-main-header__attributes_profit" onClick={toggleMenu}>
            <h3 className="profit-text">Profit: 0.1%</h3>
            <img className={`profit-icon ${disableMenu ? "profit-icon-active" : ""}`} src="/icons/svg/arrow-profit.svg" alt="" />

            {
                disableMenu ? 
                 <ul className="app-main-header__attributes_profit-disable">
                    <li className="app-main-header__attributes_profit-disable_li">Profit: 0.5%</li>
                    <li className="app-main-header__attributes_profit-disable_li">Profit: 1%</li>
                    <li className="app-main-header__attributes_profit-disable_li">Profit: 2%</li>
                </ul>
                : null
            }
        </button>
    )
}