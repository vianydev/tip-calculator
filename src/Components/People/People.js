import iconPerson from "./icon-person.svg";

const People = ({ handlePeople, people }) => {
    return (
        <div id="input-container">
            <h3 className="">Number of people</h3>
            <div className="input-box">
                <img className="input-icon" src={iconPerson} alt="icon-person" />
                <input id="input" 
                onChange={handlePeople}
                value={people} 
                type="number"
                step="1"
                 />
            </div>
        </div>
    )
}

export default People;