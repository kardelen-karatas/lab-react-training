import React from 'react'

function IdCard(props) {
    return <div className="idCard">
        <img alt="" src={props.picture}/>
        <div className="rigth-side">
                <p><strong>First name: </strong>{props.firstName}</p>
                <p><strong>Last name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height.toString()}</p>
                <p><strong>Birth: </strong>{props.birth.toString()}</p>
        </div>
    </div>
}

export default IdCard;