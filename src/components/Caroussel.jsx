import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import '../Styles/locationList.scss';
export default function Caroussel({dataStorage}){
    const [currentIndex, setCurrentIndex] = useState(0);
    const buttonLeft = () => {
        const firstValue = currentIndex === 0;
        const newValue = firstValue ?  dataStorage.pictures.length - 1 : currentIndex -1;
        setCurrentIndex(newValue);
     }
     const buttonRight = () => {
         const firstValue = currentIndex === dataStorage.pictures.length - 1;
         const newValue = firstValue ? 0 : currentIndex + 1;
         setCurrentIndex(newValue); 
     }

    return(
            <div className="slide_container" style={dataStorage && {backgroundImage: `url(${dataStorage.pictures[currentIndex]})`}}>
                <span onClick={buttonLeft} className="button_slider"> {dataStorage.pictures.length > 1 && <FontAwesomeIcon  icon={faAngleLeft} />}</span>
                <span className="numberAdjustment"> { dataStorage.pictures.indexOf(dataStorage.pictures[currentIndex]) + 1}/{dataStorage.pictures.length}</span>
                <span onClick={buttonRight} className="button_slider">{dataStorage.pictures.length > 1 &&<FontAwesomeIcon icon={faAngleRight} />}</span>
            </div> 
    )
}