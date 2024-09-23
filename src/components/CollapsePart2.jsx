import '../Styles/navBar.scss';
import '../Styles/propos.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";
//className={`${showText ? "visibility" : "non_visibility"}`}

export default function CollapseItem({title, content}){
    
    const[showText, setShowText] = useState(false);

    const funcVisibility = () => {
        setShowText(item => !item)
    }

    return(<div>
                <div className='box2'><span>{title}</span><span className='collapseSpan' onClick={funcVisibility}><FontAwesomeIcon  style={showText ? {'transform' : 'rotate(180deg)', 'transition': '0.5s'} : {'transition': '0.5s'}}  icon={faAngleUp} /></span></div>
                <p style={showText ? {'minHeight' : '20px' } : {'overflow' : 'hidden', 'maxHeight': '0'}} className={`para_modified`}>{content}</p>
            </div>)
}
