import React, {useState} from "react";

const inputContainer = {
    width: '200px',
    padding: '6px 0'
}

function CustomInput(props) {
    const [data,
        setData] = useState();
    function handleChange({target: {
            value
        }}) {
        if (value > 5000) 
            return false
        setData(value)
        props.amountChange(value, "AMOUNT")
    }
    return (
        <div>
            <input
                type="text"
                style={inputContainer}
                name="amount"
                min="100"
                max="5000"
                onChange={handleChange}
                value={data}/>
            <div style={{
                'fontSize': 10
            }}>*** Maximum allowed amount 5000 INR</div>

        </div>
    )
}

export default CustomInput