import React, { useState } from 'react';
import '../styles/ShowHideSection.css';


export default function ShowHideSection(props) {
    let [show, setShow] = useState(false);

    function showHide() {
        show ? setShow(false) : setShow(true);
    };

    return (
    <div className="ShowHideContainer" onClick={showHide}>
        <div className="ShowHidePanel"> Show { show ? "less" : "more" } 
            <img src="/icons/arrowIcon.svg" width="6" height="9" className={show.toString()}/>
        </div>
        {show && 
            <div className={"displaySection"+show.toString()}>
                <h4>Key learnings:</h4>
                <ul>
                    <slot>{props.children}</slot>
                </ul>
            </div>
        }
    </div>
    )
  }