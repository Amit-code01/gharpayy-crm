import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Settings from "./pages/Settings"
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Visits from "./pages/Visits";
import Agents from "./pages/Agents"


function App(){

return(

<BrowserRouter>

<div className="layout">

<Sidebar/>

<div className="content">

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/leads" element={<Leads/>}/>
<Route path="/visits" element={<Visits/>}/>
<Route path="/agents" element={<Agents />} />
<Route path="/settings" element={<Settings/>}/>

</Routes>

</div>

</div>

</BrowserRouter>

)

}

export default App