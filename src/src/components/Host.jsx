import '../Styles/locationList.scss';
export default function Host({dataStorage}){
    return(<div className="location_name_bloc2">
        <p className="location_name_bloc2_p">{dataStorage && dataStorage.host.name}</p>
        <div> <img className="picture_ownner" src={`${dataStorage.host.picture}`} alt={`${dataStorage.host.name}`}/></div>
    </div>)
}