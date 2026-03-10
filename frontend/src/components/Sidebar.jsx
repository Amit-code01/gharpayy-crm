import { Link, useLocation } from "react-router-dom";
import { simulateLead } from "../services/api";
import { FiHome, FiUsers, FiCalendar, FiUser, FiSettings } from "react-icons/fi";
import { useState } from "react";

export default function Sidebar(){

const location = useLocation()
const [open,setOpen] = useState(true)

const handleSimulate = async ()=>{

try{

await simulateLead()

alert("Lead created successfully")

window.dispatchEvent(new Event("leadCreated"))

}
catch(err){

alert("Error creating lead")

}

}

return(

<div className={`sidebar ${open ? "open" : "collapsed"}`}>

{/* Toggle button */}

<button 
className="sidebar-toggle"
onClick={()=>setOpen(!open)}
>
☰
</button>

{/* Logo */}

<div className="logo">

<div className="logo-circle">G</div>

<div>
<h3>Gharpayy</h3>
<p>Lead Management CRM</p>
</div>

</div>

<p className="menu-title">MAIN</p>

<nav>

<Link 
to="/" 
className={location.pathname === "/" ? "active" : ""}
>
<FiHome/> Dashboard
</Link>

<Link 
to="/leads"
className={location.pathname === "/leads" ? "active" : ""}
>
<FiUsers/> Leads
</Link>

<Link 
to="/visits"
className={location.pathname === "/visits" ? "active" : ""}
>
<FiCalendar/> Visits
</Link>

<Link 
to="/agents"
className={location.pathname === "/agents" ? "active" : ""}
>
<FiUser/> Agents
</Link>

</nav>

<div className="sidebar-bottom">

<button
className="simulate-btn"
onClick={handleSimulate}
>
Simulate Lead
</button>

<Link 
to="/settings" 
className="settings-btn"
>
<FiSettings/> Settings
</Link>

</div>

</div>

)

}