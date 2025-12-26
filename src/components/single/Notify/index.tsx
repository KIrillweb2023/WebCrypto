import { Title } from "../../widgets/Title"
import "./main.scss"

export const Notify = () => {
    return (
       <div className="app-main-field__other_notify">
            <div className="app-main-field__other_notify-head">
                <Title contentText="My notifycation" countChild={0}/>
            </div>
       </div>
    )
}