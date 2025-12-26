import type { IDeal } from "../../../../../types/IDeal.types"

export const Deal = ({ 
    urlMarkCoin, markCoin, exchangeBuyUrl, exchangeBuyName, exchangeBuyLastName, 
    buyPrice, buyProzent, exchangeSellUrl, exchangeSellName, exchangeSellLastName, sellPrice, sellProzent 
}: IDeal) => {
    
    return (
        <div className="app-main-field__transaction_deals-item">
            <div className="app-main-field__transaction_deals-item-block block-name">
                <img className="block-name-icon" src={urlMarkCoin} alt="" />
                <span className="block-name-text">{markCoin}</span>
            </div>
            <div className="app-main-field__transaction_deals-item-block">
                <div className="block-buyIndex">
                    <img className="block-buyIndex-icon" src={exchangeBuyUrl} alt="" />
                    <div className="block-buyIndex-text">
                        <h3 className="block-buyIndex-text__name">{exchangeBuyName}</h3>
                        <p className="block-buyIndex-text__lastname">{exchangeBuyLastName}</p>
                    </div>
                </div>
                <div className="block-info">
                    <p className="block-info-price">${buyPrice}</p>
                    <div className="block-info-prozent prozent-down">
                        <img className="block-info-prozent__icon" src="/icons/svg/Triangle-down.svg" alt="" />
                        <p className="block-info-prozent__text">{buyProzent}%</p>
                    </div>
                </div>
            </div>
            <div className="app-main-field__transaction_deals-item-block">
                <div className="block-buyIndex">
                    <img className="block-buyIndex-icon" src={exchangeSellUrl} alt="" />
                    <div className="block-buyIndex-text">
                        <h3 className="block-buyIndex-text__name">{exchangeSellName}</h3>
                        <p className="block-buyIndex-text__lastname">{exchangeSellLastName}</p>
                    </div>
                </div>
                <div className="block-info">
                    <p className="block-info-price">${sellPrice}</p>
                    <div className="block-info-prozent prozent-up">
                        <img className="block-info-prozent__icon" src="/icons/svg/Triangle-up.svg" alt="" />
                        <p className="block-info-prozent__text">{sellProzent}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}