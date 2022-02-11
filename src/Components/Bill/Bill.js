import iconDollar from "./icon-dollar.svg";

const Bill = ({handleBill, bill}) => {
    return (
        <div id="input-container">
            <h3>Bill</h3>
            <div className="input-box">
                <img className="input-icon" src={iconDollar} alt="icon-person" />
                <input id="input" 
                type="number"
                onChange={handleBill}
                value={bill} />
            </div>
        </div>
    )
}

export default Bill;