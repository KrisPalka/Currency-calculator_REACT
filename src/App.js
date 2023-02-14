import "./App.css";
import InputData from "./Components/InputData.js";
import Logo from "./Components/Logo.js";
import DisplayCalculation from "./Components/DisplayCalculation";
import {useState, useEffect} from "react";
import {fetchCurrency} from "./Services/apiCurrencies";

function App() {
    const [currency, setCurrency] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState("EUR");

    useEffect(() => {
        fetchCurrency(selectedCurrency).then((data) => setCurrency(data.rates));
    }, [selectedCurrency]);

    const calculate = () => {
        const result = (inputValue * currency[0].mid).toFixed(2);
        if (inputValue < 0) {
            alert("Please enter positive number");
            setInputValue("");
        } else {
            setResultValue(result);
        }
    };
    return (
        <div>
            <Logo />
            <div className="componentPositioning">
                <InputData
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setSelectedCurrency={setSelectedCurrency}
                    selectedCurrency={selectedCurrency}
                />
                <DisplayCalculation calculate={calculate} calResult={resultValue} />
            </div>
            <div className="line"></div>
        </div>
    );
}
export default App;
