import logoFooter from '../assets/images/LOGO_blanc.png';
import '../Styles/footer.scss'

export default function Footer(){
    return(<div>
                <div className='footer_main'>
                    <p><img className='custom_image' src={logoFooter} alt="Logo"/></p>
                    <p className='custom_p'>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>);
}