import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import '../Styles/locationList.scss';
import CollapsePart2 from "./CollapsePart2";
import Caroussel from "./Caroussel";
import Host from "./Host";
import Rating from "./Rating";
import NameInfo from "./NameInfo";
//This function expose the element when you choose an appartment.
export default function LocationList({dataAppartement}){
    const param = useParams();
    const userId =  param.id.slice(1);
    const navig = useNavigate();
    const [dataDetails] = useState(dataAppartement)
    useEffect(() => {
        const urlLocation = dataDetails.find((item) => userId === item.id );
        if(urlLocation === undefined){
           return navig("/error404");
        }
    }, [userId]);
    
    const urlLocation1 = dataDetails.find((item) => userId === item.id);
        
    for(let i = 0; i < dataAppartement.length; i++){
          if(dataAppartement[i].id === userId){
            var valueLocation = dataAppartement[i];
          }
        }
        
    const tags = valueLocation && valueLocation.tags.map((item, index) => <span className="circle_details" key={index}>{item}</span>);
    const equipement = valueLocation && valueLocation.equipments.map((item1, index1) =><span className="spanEquipmentAdjustement" key={index1}>{item1}</span>); 
          
        
    return(<div>
                <div className="box_contain">
                    <div className="location_main_container">
                        <Caroussel dataStorage={valueLocation} />
                    </div>
                    <div className="small_bloc_ajustment_one">
                        <div className="small_bloc_ajustment_two">
                                <NameInfo dataStorage={valueLocation} />
                            <div className="hostAdjustment">
                                <Host dataStorage={valueLocation} />
                            </div>
                            <div className="circle_contain">
                                {tags}  
                            </div>
                            <div className="star_contain">
                                <Rating dataStorage={valueLocation} />
                            </div>
                        </div>
                    </div>
                    <div className="contain_description_equipement">
                        <div className="contain_description_equipement2">
                            <div className="bloc_description">    
                                <CollapsePart2 title = "Description" content={valueLocation && valueLocation.description} />
                            </div>
                            <div className="bloc_equipement">
                                <CollapsePart2 title= "Équipements" content={equipement} />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>);
}