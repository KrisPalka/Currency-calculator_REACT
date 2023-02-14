const DisplayCalculation = ({calculate, calResult}) => {
    return (
        <>
            <div className="section_container">
                <div className="main_container">
                    <div className="data_container">
                        <button className="btn" onClick={() => calculate()}>
                            Calculate
                        </button>
                        <p className="to">TO</p>
                        <div className="output">
                            <span className="result">{calResult}</span>
                            <span className="outputCncy">PLN</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default DisplayCalculation;
