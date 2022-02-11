const Total = ({ total }) => {
    return (
        <div id="tip-amount-container">
            <div className="box">
                <h3 className="white">Total</h3>
                <p className="subtitle">/ person</p>
            </div>
            <div className="box">
                <p className="big-number">
                    <span>$</span>{ total }</p>
            </div>
        </div>
    )
}

export default Total;