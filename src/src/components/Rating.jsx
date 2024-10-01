import '../Styles/locationList.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default function Rating({dataStorage}){
    return(
        <div className="star_element">
            {dataStorage && [...Array(5)].map((item, index) =>{
                const rate = dataStorage && parseInt(dataStorage.rating);
                return <FontAwesomeIcon key={index} className={`span_star ${rate <= index ? 'star_rating2' : 'star_rating'}`} style={{'fontSize': 30}}  icon={faStar} />
            })}
        </div>)
}