import React from 'react'


function Keyboard() {
    return (
        <div className="keyboard">
            <img className="rec" id="rec1" alt="Rectangle" src={require("../img/Rectangle.png")} />
            <img className="rec" id="rec2" alt="Rectangle" src={require("../img/Rectangle.png")} />
            <img className="rec" id="rec3" alt="Rectangle" src={require("../img/Rectangle.png")} />
            <img className="rec" id="rec4" alt="Rectangle" src={require("../img/Rectangle.png")} />
        </div>
    )
}

export default Keyboard
