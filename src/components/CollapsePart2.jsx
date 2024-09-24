import '../Styles/navBar.scss';
import '../Styles/propos.scss';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";


export default function CollapseItem({title, content}){
    
    const[showText, setShowText] = useState(false);
    const [heightCollapse, setHeightCollapse] = useState();

    const variableHeight = useRef()

    useEffect(() => {
        setHeightCollapse(`${variableHeight.current.scrollHeight}px`)
    }, [])

    const funcVisibility = () => {
        setShowText(item => !item)
    }

    return (
        <div className="box1">

            <button 
            onClick={funcVisibility}
            className="box2">
                <span>{title}</span>
                <FontAwesomeIcon className='iconStyle' style={showText ? {'transform' : 'rotate(180deg)', 'transition': '0.5s'} : {'transition': '0.5s'}} icon={faAngleUp} />
            </button>
            
            <div 
            className={showText ? "para_modified animated" : "para_modified"}
            style={{height: showText ? `${heightCollapse}` : "0px"}}
            ref={variableHeight}
            >
                <p aria-hidden={showText ? "true" : "false"}>
                    {content}
                </p>
            </div>
            
        </div>
    )

}
