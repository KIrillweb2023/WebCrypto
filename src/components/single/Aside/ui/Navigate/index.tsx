import { Link } from "react-router-dom"
import { HomeIcon } from "../../../../Svg/HomeIcons"
import { AccauntIcon } from "../../../../Svg/AccauntIcon"
import { PaymentIcon } from "../../../../Svg/PaymentIcon"
import { SettingsIcon } from "../../../../Svg/SettingsIcon"

export const Navigate = () => {
    return (
        <ul className="app-aside-navigate">
            <li className="app-aside-navigate__item">
                <Link to={"/"} className="app-aside-navigate__item_link">
                    <HomeIcon/>
                    <h4 className="app-aside-navigate__item_text">Home</h4>
                </Link>
            </li>
            <li className="app-aside-navigate__item">
                <Link to={"/accaunt"} className="app-aside-navigate__item_link">
                    <AccauntIcon/>
                    <h4 className="app-aside-navigate__item_text">Accaunts</h4>
                </Link>
            </li>
            <li className="app-aside-navigate__item">
                <Link to={"/cards"} className="app-aside-navigate__item_link">
                    <PaymentIcon/>
                    <h4 className="app-aside-navigate__item_text">Cards</h4>
                </Link>
            </li>
            <li className="app-aside-navigate__item">
                <Link to={"/settings"} className="app-aside-navigate__item_link">
                    <SettingsIcon/>
                    <h4 className="app-aside-navigate__item_text">Settings</h4>
                </Link>
            </li>
          
        </ul>
    )
}