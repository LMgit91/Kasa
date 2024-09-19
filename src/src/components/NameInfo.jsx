
export default function NameInfo({dataStorage}){
    return(
        <div className="location_name_bloc1">
            <p className="detail_aboutlocation">{dataStorage && dataStorage.title}</p>
            <p className="localisation_detail">{dataStorage && dataStorage.location}</p>
        </div>
    )
}