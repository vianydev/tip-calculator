const TipAmount = ({tipAmount, handleTipAmount}) => {
    return (
        <div id="tip-amount-container">
            <div className="box">
                <h3 className="white">Tip Amount</h3>
                <p className="subtitle">/ person</p>
            </div>
            <div className="box">
                <p className="big-number" onChange={handleTipAmount} ><span>$</span>{tipAmount === "0"  ? "0.00" : tipAmount}</p>
            </div>
        </div>
    )
}

export default TipAmount;