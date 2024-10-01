import Header from '../components/Header';
import Collapse from '../components/Collapse';
import Nav from '../components/Banner';
import FetchData from '../components/FetchData';
import Footer from './Footer';
import Error from './Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LocationList from './LocationList';
import Data from '../locations.json';
import Image from './image';


const dataAppartement = Data;

const structureData = [
    {
        title : "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totales, les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        title : "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
    },
    {
        title : "Service",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"
    },
    {
        title : "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos h^tes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela nous permet à nos équipes de vérifier que les standards soient bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <><header><Nav /> <Header /></header><main><FetchData /></main><footer><Footer /></footer></>,
        errorElement: <><header><Nav /></header><main><Error /></main><footer><Footer /></footer></>
    },
    {
        path: '/apropos',
        element:<><header><Nav /> <Image /></header> <main><Collapse data={structureData}/></main> <footer><Footer /></footer></>,
    },
    {
        path: '/location/:id',
        element:<><header><Nav /></header><main><LocationList dataAppartement={dataAppartement} /></main><footer><Footer /></footer></>,
        errorElement: <><header><Nav /></header><Error /><footer><Footer /></footer></>
    },
    {
        path: '/error404',
        element: <><header><Nav /></header><Error /><footer><Footer /></footer></>,
       
    },
    
]);

export default function App(){
   return(<div>
            <RouterProvider router={router} />
        </div>); 
}