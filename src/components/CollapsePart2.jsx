import '../Styles/NavBar.scss';
import '../Styles/propos.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export default function CollapseItem({title, content}){
    
    const[showText, setShowText] = useState(false);

    const funcVisibility = () => {
        setShowText(item => !item)
    }

    return(<div>
                <div className='box2'><span>{title}</span><span onClick={funcVisibility}>{showText ? <FontAwesomeIcon style={{'cursor': 'pointer'}} icon={faAngleDown} /> : <FontAwesomeIcon style={{'cursor': 'pointer'}}  icon={faAngleUp} />}</span></div>
                <p className={`para_modified ${showText ? "visibility" : "non_visibility"}`}>{content}</p>
            </div>)
}