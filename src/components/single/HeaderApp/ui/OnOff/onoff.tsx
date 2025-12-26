import { useState } from "react"

export const OnOff = () => {
    const [stateArb, setStateArb] = useState<boolean>(false);

    const toogleStateArb = () => {
        setStateArb(!stateArb)
    };

    
    return (
        <div className={`app-main-header__attributes_onoff ${stateArb ? "app-main-header__attributes_onoff-active" : ""}`} onClick={toogleStateArb}>
            <h3 className="onoff-text">{stateArb ? "Enable" : "Disable"} arbitrage</h3>
        </div>
    )
}