import "./main.scss"
import { Accaunt } from "./ui/Accaunt"
import { Logout } from "./ui/Logout"
import { Navigate } from "./ui/Navigate"

export const Aside = () => {
    return (
        <div className="app-aside">
            <div className="app-aside-wrapper">
                <Accaunt/>
                <Navigate/>
                <Logout/>
            </div>
        </div>
    )
}