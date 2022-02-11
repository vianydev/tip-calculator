import "./Tip.css";

const Tip = ({handleTip, tip}) => {
    return (
        <div id="tip-container">
            <h3>Select tip %</h3>
            <div id="tip-box">
                <button id="tipPercentage" 
                    value=".05"
                    onClick={handleTip}
                    >5%</button>
                <button id="tipPercentage" 
                    value=".1"
                    onClick={handleTip}
                    >10%</button>
                <button id="tipPercentage" 
                    value=".15"
                    onClick={handleTip}
                    >15%</button>
                <button id="tipPercentage" 
                    value=".25"
                    onClick={handleTip}
                    >25%</button>
                <button id="tipPercentage" 
                    value=".50"
                    onClick={handleTip} 
                    >50%</button>
                <input id="tipPercentageCustom" 
                    type="number" 
                    placeholder="Custom"
                    onChange={handleTip}
                    value={tip < 1 ? "" : tip}
                />
            </div>
        </div>
    )
}

export default Tip;