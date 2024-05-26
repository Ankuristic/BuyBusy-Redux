import {NavLink,Outlet} from  "react-router-dom"


export  const Navbar = () =>{
    return (
        <div>
            <nav className = "navbar">
            <h1> Busy Buy </h1>
                <NavLink is activeclassName =".active" to ="/"> Home </NavLink>
                <NavLink is activeclassName =".active" to ='/SignIn'> Sign In </NavLink>
                <NavLink is activeclassName =".active" to ="/SignOut"> Sign out </NavLink>
            </nav>
            <Outlet />
        </div>
    )

}