import React, {useState} from "react";

const radioContainer = {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-between'
}

const radioWrapper1 = {
    width: '150px'
}

const radioWrapper2 = {
    width: '150px'
}

const radioStyle = {
    display: 'block',
    padding: '5px',
    margin: '0 0 8px 0',
    border: '1px solid #CCC',
    cursor: 'pointer'
}
const radioCardStyle = {
    display: 'block',
    padding: '5px',
    cursor: 'pointer'

}
const radio = {
    opacity: '0.01',
    'z-index': 100
}

function CheckboxCmp(props) {

    const [data] = useState({
        users: [
            'USER-A', 'USER-B', 'USER-C'
        ],
        cards: ['America Express', 'VISA', 'DBS Paylah']
    })

    function selectedUser(e) {
        props.onItemClick(e.target.value, "USER")
    }

    function selectedCard(e) {
        props.onItemClick(e.target.value, "CARD")
    }

    return (
        <div style={radioContainer}>
            <div style={radioWrapper1}>
                {data
                    .users
                    .map(d => (

                        <label style={radioStyle}>
                            <input
                                type="radio"
                                style={radio}
                                onClick={selectedUser}
                                id={d}
                                name="user"
                                value={d}/> {d}
                        </label>

                    ))
}
            </div>
            <div style={radioWrapper2}>
                {data
                    .cards
                    .map(d => (
                        <label style={radioCardStyle}>
                            <input type="radio" onClick={selectedCard} id={d} name="card" value={d}/> {d}
                        </label>

                    ))
}
            </div>

        </div>
    );
}
export default CheckboxCmp;
