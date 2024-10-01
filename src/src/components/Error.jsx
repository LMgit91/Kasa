import { Link } from "react-router-dom"
import '../Styles/error.scss'


export default function Error(){
    
        return (
            <div className="height_error">
                <div className="main-contain">
                    <h1 className="contain_error1">404</h1>
                    <p className="contain_error2">Oups La page que vous demandez n'existe pas</p>
                    <Link to="/"><p className="contain_error3">Retourner sur la page d'accueil</p></Link>
                </div>
            </div>
        )
    }
