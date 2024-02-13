import { NavLink } from "react-router-dom"


const Header = () =>{
    return(
       
        <header className="p-4 shadow-lg bg-gray-100">
            <ul className="flex items-center">

           <li className="text-xl ">Bookkadee.ir</li>
           <li><NavLink to='/' className="mx-5 text-gray-400">home</NavLink></li>
           <li> <NavLink to='/todos'  className=" text-gray-400">todos</NavLink></li>
            </ul>
        </header>

    )
}
export default Header