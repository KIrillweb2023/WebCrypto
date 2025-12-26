import { LastCheck } from "../../widgets/Lastcheck"
import { ShowAll } from "../../widgets/ShowAll"
import { Title } from "../../widgets/Title"
import "./main.scss"
import { Deal } from "./ui/Deal"
import { TopBoard } from "./ui/TopBoard"

export const Transactions = () => {
    return (
       <div className="app-main-field__transaction">
        <div className="app-main-field__transaction_head">
             <Title contentText="List of arbitration transactions" countChild={10}/>
             <LastCheck/>
             <ShowAll/>
        </div>

       <TopBoard/>

        <div className="app-main-field__transaction_deals">
            <Deal 
                urlMarkCoin={"/icons/svg/exchanges/Bitcoin.png"} 
                markCoin={"BTCN"} 
                exchangeBuyUrl={"/icons/png/microsoft-icon.png"} 
                exchangeBuyName={"Microsoft Corp"} 
                exchangeBuyLastName={"MSFT"} 
                buyPrice={123.5} 
                buyProzent={2.6} 
                exchangeSellUrl={"/icons/png/apple-icon.png"} 
                exchangeSellName={"Apple inc"} 
                exchangeSellLastName={"AAPL"} 
                sellPrice={125.4} 
                sellProzent={3.3}
            />
        </div>

       </div>
    )
}