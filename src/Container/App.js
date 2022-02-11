import React, { useState, useEffect } from "react";
import Logo from "../Components/Logo/Logo";
import Bill from "../Components/Bill/Bill";
import Tip from "../Components/Tip/Tip";
import People from "../Components/People/People";
import TipAmount from "../Components/TipAmount";
import Total from "../Components/Total";
import Reset from "../Components/Reset";
import "./App.css";


function App(){
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState("");
    const [people, setPeople] = useState("");
    const [tipAmount, setTipAmount] = useState("0.00");
    const [total, setTotal] = useState("0.00");

    const handleBill = (e) => {
        if (e.target.value >= 0) {
        setBill(e.target.value);
    }
    }

    const handleTip = (e) => {
        if(e.target.value.length < 4 && e.target.value >= 0){
            setTip(e.target.value);
        }
    }

    const handlePeople = (e) => {
        if( e.target.value >= 0 ){
            setPeople(e.target.value);
        }
    }

    const handleReset = (e) => {
        console.log("click");
        setBill("");
        setTip("");
        setPeople("");
        setTipAmount("0.00");
        setTotal("0.00");
    }

    // Replace strings for numbers
    const getTip = (tip) => {
        if(tip.includes('.')){
           return parseFloat(tip);
        } else if (!tip.includes('.')){
            return parseFloat("." + tip)
        }else {
           return parseInt(tip);
        }
    }

    const getBill = (bill) => {
        if(bill.includes('.')){
           return parseFloat(bill);
        } else {
           return parseInt(bill);
        }
    }

    const getPeople = (people) => {
        return parseInt(people);
    }

    // show total tip
    useEffect(()=>{
        let numberTip = getTip(tip);
        let numberBill = getBill(bill);
        let result = numberTip * numberBill;
     
        if (tip && bill) {
            setTotal(result.toFixed(2).toString());
        } 
    }, [tip, bill])   

    // show tip amount / people
    useEffect(()=>{
        let numberTip = getTip(tip);
        let numberBill = getBill(bill);
        let numberPeople = getPeople(people);
        let result = (numberTip * numberBill) / numberPeople;

        if (tip && bill && people) {
            setTipAmount(result.toFixed(2).toString());
        }
    }, [tip, bill, people])    
    
    return (
        <div id="container" >
            <div className="tc pa4">
                <Logo />
            </div>
            <section id="card-container" className="shadow-5" >
                <div className="card">
                    <Bill 
                        handleBill={handleBill}
                        bill={bill} />
                    <Tip 
                        handleTip={handleTip}
                        tip={tip} />
                    <People 
                        handlePeople={handlePeople}
                        people={people} />
                </div>
                <div className="card green-card" >
                    <div>
                        <TipAmount tipAmount={tipAmount}  />
                        <Total total={total} />
                    </div>
                    <Reset handleReset={handleReset} />
                </div>
            </section>
            <footer className="pa5"></footer>
        </div>
    )
}

export default App;