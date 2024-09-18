import { NavLink } from 'react-router-dom';
import '../Styles/navBar.scss';
import logo from '../assets/images/LOGO.png';

export default function Navbar(){
    return (
    <div>
        <div>    
            <nav>
                <div className='navBar'>
                    <h1><img src={logo} alt="Logo"/></h1>
                    <div className='navBar_element'>
                        <NavLink to="/"><p className='element_p_nav'>Accueil</p></NavLink>
                        <NavLink to="/apropos"><p className='element_p_nav'>A Propos</p></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    )
}