import { Title } from "../../widgets/Title"
import "./main.scss"
import { ExchangesChild } from "./ui/ExchangesChild"

export const Exchanges = () => {
    return (
       <div className="app-main-field__other_exchanges">
            <div className="app-main-field__other_exchanges-head">
                <Title contentText="List of active crypto exchanges in the app" countChild={5}/>
            </div>  

            <div className="app-main-field__other_exchanges-list">
                <ExchangesChild url="/icons/svg/exchanges/binance.svg"/>
                <ExchangesChild url="/icons/svg/exchanges/bybit.svg"/>
            </div>
       </div>
    )
}