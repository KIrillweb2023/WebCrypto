import "./main.scss"
import { OnOff } from "./ui/OnOff/onoff"
import { PageTitle } from "./ui/PageTitle/pagetitle"
import { Profit } from "./ui/Profit/profit"
import { Status } from "./ui/Status/status"

export const HeaderApp = () => {
    return (
        <div className="app-main-header">
            <div className="app-main-header__wrapper">
                <PageTitle/>

                <div className="app-main-header__attributes">
                    <Status/>
                    <Profit/>
                    <OnOff/>
                </div>
            </div>
        </div>
    )
}