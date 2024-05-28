import styled from "styled-components";
import logo from "../assets/react.svg";
import { v } from "../styles/Variables";
import { AiOutlineLeftCircle, AiOutlineHome, AiOutlineApartment, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md"
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const ModSidebarOpen = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const {setTheme, theme} = useContext(ThemeContext)
    const CambiarTheme = () => {
        setTheme((theme)=>(theme==="light"?"dark":"light"))
      }
    const { pathname } = useLocation();
    const isActivate = location.pathname;
    return (
        <Container isOpen={sidebarOpen}>
            <button className="Sidebarbutton" onClick={ModSidebarOpen}>
                <AiOutlineLeftCircle/>
            </button>
            <div className="Logocontent">
                <div className="imgcontent">
                    <img src={logo} />
                </div>
                <h2>Instructor</h2>
            </div>
            {linkArray.map(({icon, label, to}) => (
                <div className="LinkContainer" key={"label"}>
                    <NavLink to={to} className={({isActivate})=>`Links${isActivate?` active`:``}`}>
                        <div className="Linkicon">
                            {icon}
                        </div>
                        {sidebarOpen && (
                            <span>{ label }</span>
                        )   
                        } 
                    </NavLink>

                </div>
            ))}
            {/* aqui vendria un dividot el cual lo dejo en mi papelera */}
        {/* En esta parte va lo qu esta en mi cha privado de whaps a las 10:30 pm , es la comfiguracion del logo del sena que se encuenar en la parte inferior */}
            {/* aqui vemdira el divisor de la parte final */}
            <div className="Themecontent">
                {sidebarOpen && <span>Dark mode</span>}
                <div className="Togglecontent">
                    <div className="grid theme-content">
                        <div className="content">
                            <div className="demo">
                                <label className="switch">
                                    <input type="checkbox" className="theme-swither" onClick={CambiarTheme}>  
                                    </input>

                                </label>

                            </div>

                        </div>
                    </div>

                </div>
                

            </div>
        </Container>
    );
}
//#region DATA LINKS
const linkArray = [
    {
        label: "Home", // Hay que cambiar el el nombre por la uqe se encuenra en el proyecto el cual es INICIO en mayusculas
        icon: <AiOutlineHome />,
        to: "/"
    },
    {
        label: "Estadisticas",  //Asi mismo ha que qyue el home de arriba hay que cambiar por REPORTES
        icon: <MdOutlineAnalytics />,
        to: "/estadisticas"
    },
    {
        label: "Reportes",  //Asi mismo ha que qyue el home de arriba hay que cambiar por FICHA
        icon: <AiOutlineApartment />,
        to: "/reportes"
    },

];
const secondarylinkArray = [
    {
        label: "Sena", // aqui se coloca el logo del sena
        icon: <AiOutlineSetting />,
        to: "/"
    },


];
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
color:${(props) => props.theme.text};
background:${(props) => props.theme.bg};
position:sticky;
padding-top:20px;
.Sidebarbutton{
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background:${(props) => props.theme.btgderecha};
    box-shadow: 0 0 40px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-apacing: inherit;
    font-size: inherit;
    text-aling: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
}
.Logocontent{
    display:flex;
    justify-content:center;
    align-items:center;
    padding-bottom: ${v.lgSpacing};
    .imgcontent{
        display: flex;
        img{
            max-width: 100%;
            height: auto;
        }
        cursor:pointer;
        transition: all 0.3s;
        transform: ${({isOpen}) => (isOpen?`scale(0.7)`: `scale(1.5)`)};
    }
    h2{
        display:${({ isOpen }) => (!isOpen ? `block`:`none`)};
    }
}
.LinkContainer{
    margin: 8px 0;
    padding: 0 15%;
    :hover{
        background:${(props) => props.theme.bg3};
        color:${(props) => props.theme.text};
        
    }
    .Links{
        display: flex;
        align-items: center;
        text-decoration: none;
        padding:calc(${v.smSpacing}-2PX) 0;
        color:${(props) => props.theme.body};
        .Linkicon{
            padding: &{v.smSpacing} &{v.mdSpacing};
            display: flex;
            svg{
                font-size: 25px;
                color:${(props) => props.theme.text};
            }
        }
        &.active{
            .Linkicon{
                speak-as:${(props) => props.theme.text};
                svg{
                    color:${(props) => props.theme.text};
                }
            }
        }
    }
}
`;

//#endregion
