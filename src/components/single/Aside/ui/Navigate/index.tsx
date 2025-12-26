import { Link } from "react-router-dom"

export const Navigate = () => {
    return (
        <ul className="app-aside-navigate">
            <li className="app-aside-navigate__item">
                <Link to={"/"} className="app-aside-navigate__item_link">
                    <img src="/icons/svg/home.svg" alt="" className="app-aside-navigate__item_icon" />
                    <h4 className="app-aside-navigate__item_text">Home</h4>
                </Link>
            </li>
            <li className="app-aside-navigate__item">
                <Link to={"/accaunt"} className="app-aside-navigate__item_link">
                    <img src="/icons/svg/accaunt.svg" alt="" className="app-aside-navigate__item_icon" />
                    <h4 className="app-aside-navigate__item_text">Accaunts</h4>
                </Link>
            </li>
            <li className="app-aside-navigate__item">
                <Link to={"/cards"} className="app-aside-navigate__item_link">
                    <img src="/icons/svg/payment.svg" alt="" className="app-aside-navigate__item_icon" />
                    <h4 className="app-aside-navigate__item_text">Cards</h4>
                </Link>
            </li>
            <li className="app-aside-navigate__item">
                <Link to={"/settings"} className="app-aside-navigate__item_link">
                    <img src="/icons/svg/settings.svg" alt="" className="app-aside-navigate__item_icon" />
                    <h4 className="app-aside-navigate__item_text">Settings</h4>
                </Link>
            </li>
          
        </ul>
    )
}