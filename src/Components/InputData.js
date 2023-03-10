const InputData = ({onInputValueChange, onCurrencySelect}) => {
    return (
        <div className="section_container">
            <div className="main_container">
                <div className="data_container">
                    <div className="common input_val">
                        <input
                            id="amount_input"
                            onChange={onInputValueChange}
                            type="number"
                            className="input"
                            min="0"
                            placeholder="value"
                        />
                    </div>
                    <div className="common currency">
                        <select className="currencySelect" onChange={onCurrencySelect}>
                            <option className="curOption" value="EUR">
                                EUR
                            </option>
                            <option className="curOption" value="USD">
                                USD
                            </option>
                            <option className="curOption" value="CHF">
                                CHF
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default InputData;
