import React, { useState } from 'react';

export default function ShowHideSection() {
    let [show, setShow] = useState(false);

    function showHide() {
        show ? setShow(false) : setShow(true);
    };

    return (
    <div>
        <button onClick={showHide}> Show { show ? "less" : "more" }</button>
        {show && <h2> This is a hidden section. </h2>}
    </div>
    )
  }