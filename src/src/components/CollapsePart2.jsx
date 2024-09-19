import '../Styles/navBar.scss';
import '../Styles/propos.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
//{showText ? <FontAwesomeIcon style={{'cursor': 'pointer'}} icon={faAngleDown} /> : <FontAwesomeIcon  style={{'cursor': 'pointer'}}  icon={faAngleUp} />}
//This function is the collapse, when you click on the arrow the text will appear or disappear.
export default function CollapseItem({title, content}){
    
    const[showText, setShowText] = useState(false);

    const funcVisibility = () => {
        setShowText(item => !item)
    }

    return(<div>
                <div className='box2'><span>{title}</span><span className='collapseSpan' onClick={funcVisibility}><FontAwesomeIcon  style={showText ? {'transform' : 'rotate(180deg)', 'transition': '0.5s'} : {'transition': '0.5s'}}  icon={faAngleUp} /></span></div>
                <p className={`para_modified ${showText ? "visibility" : "non_visibility"}`}>{content}</p>
            </div>)
}