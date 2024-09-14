import '../Styles/navBar.scss';
import '../Styles/propos.scss';
import CollapsePart2 from './CollapsePart2'

export default function Collapse({data}){
    return(
        <div style={{'height': '57vh'}}>
            <div className='main_container'>
                <div className='container'>   
                    {
                        data.map((item, index) => (<CollapsePart2 key={index} {...item} />))
                    }
                </div>   
            </div>    
        </div> 
)
}
