import Data from '../locations.json';
import '../Styles/fetchData.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
//This is the function which make us see appartments.
//{data.map((item) => <Link key={item.id} to={`/location/:${item.id}`} className='card' style={{background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(0,0,0,0.3)) ,url(${item.cover})`, "objectFit": "cover"}}><span >{item.title}</span></Link>)}
export default function FetchData(){
    
const data = useState(Data);

    
    return(<div>
                <div className="container_main">
                    <section className='container_main2'>
                        <div className='container_article'>
                            {data.map((item) => <Link  className='linkAdjustment' key={item.id} to={`/location/:${item.id}`}><figure><img src={`${item.cover}`} alt={`${item.title}`}/><figcaption className='adjusFigcaption'>{item.title}</figcaption></figure></Link>)}
                        </div>
                    </section>
                </div>
            </div>);
}