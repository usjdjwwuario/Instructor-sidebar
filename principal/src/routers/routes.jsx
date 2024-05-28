import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "../pages/Home";
import { Estadisticas } from "../pages/Estadisticas";
import { Reportes } from "../pages/Reportes";
import {Sidebar} from "../components/Sidebar"
export function MyRoutes() {
    return (
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/estadisticas" element={<Estadisticas />} /> 
        </Routes>
    );
}
/// Se toma nota de lo ue se debe dd cambiar para poder tener las mismas variables las cuales tiene el proyecto que se encuentra en figma

///aqui se cambia por el lo que s enecuntra en el proyecto que se encuentar en el figma, este seria Home por INICIO
///aqui se cambia por el lo que s enecuntra en el proyecto que se encuentar en el figma, este seria  Estadisticas por Reportes
///aqui se cambia por el lo que s enecuntra en el proyecto que se encuentar en el figma, este seria  Productos por Fichas 

// const Container = styled.div``;