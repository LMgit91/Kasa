import Data from '../locations.json';
import '../Styles/fetchData.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FetchData(){
    
const [data, setData] = useState(Data);

    
    return(<div>
                <div className="container_main">
                    <section className='container_main2'>
                        <div className='container_article'>
                            {data.map((item) => <Link key={item.id} to={`/location/:${item.id}`} className='card' style={{background: `linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(0,0,0,0.3)) ,url(${item.cover})`, "objectFit": "cover"}}><span >{item.title}</span></Link>)}
                        </div>
                    </section>
                </div>
            </div>);
}