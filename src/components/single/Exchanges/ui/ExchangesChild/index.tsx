export const ExchangesChild = ({ url }: { url: string }) => {
    return (
        <div className="app-main-field__other_exchanges-item">
            <img className="app-main-field__other_exchanges-item-logo" src={url} alt="" />
            <div className="app-main-field__other_exchanges-item-status">
                <div className="status-exchange"></div>
                <p className="status-text">Active</p>
            </div>
        </div>
    )
}