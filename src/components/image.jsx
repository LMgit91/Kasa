import '../Styles/NavBar.scss';
import image2 from '../assets/images/ImageSource2.png';
import '../Styles/propos.scss';

export default function Image(){
    
    return(<div>            
                <div className='navBar_element2'>
                    <img className= "image_2" src={image2} alt="image" />
                </div>
            </div>)
}