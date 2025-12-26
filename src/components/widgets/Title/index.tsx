import "./main.scss";

export const Title = ({ contentText, countChild }: { contentText: string; countChild: number }) => {
    return (
        <div className="custom-title">
            <h3 className="custom-title__text">{contentText}</h3>
            <div className="custom-title__count">
                <p className="custom-title__count_text">{countChild}</p>
            </div>
        </div>
    )
}