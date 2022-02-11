const Reset = ({ handleReset }) => {
    return (
        <div id="reset">
           <input type="button"
                className="reset-button" 
                value="RESET" 
                onClick={handleReset}
            />
        </div>
    )
}

export default Reset;