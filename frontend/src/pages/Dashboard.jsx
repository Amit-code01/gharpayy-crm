import { useEffect, useState } from "react";
import { getDashboard, getLeads, getVisits } from "../services/api";

import ActivityCard from "../components/ActivityCard";
import Charts from "../components/Charts";

export default function Dashboard(){

const [pipeline,setPipeline] = useState({})
const [leads,setLeads] = useState([])
const [visits,setVisits] = useState([])

useEffect(()=>{



loadDashboard()

},[])
useEffect(()=>{

loadDashboard()

const refresh = ()=>loadDashboard()

window.addEventListener("leadCreated",refresh)

return ()=>window.removeEventListener("leadCreated",refresh)

},[])

const loadDashboard = async ()=>{

try{

const dash = await getDashboard()
setPipeline(dash.data?.pipeline || {})

const leadData = await getLeads()
setLeads(leadData.data || [])

const visitData = await getVisits()
setVisits(visitData.data || [])

}catch(err){

console.error("Dashboard error",err)

}

}

const totalLeads = leads.length
const interested = leads.filter(l=>l.status==="Interested").length
const closed = leads.filter(l=>l.status==="Closed").length
const totalVisits = visits.length

return(

<div>

<h1 className="page-title">Dashboard</h1>

{/* KPI Cards */}

<div className="kpi-grid">

<div className="kpi-card">
<h3>Total Leads</h3>
<p>{totalLeads}</p>
</div>

<div className="kpi-card">
<h3>Interested</h3>
<p>{interested}</p>
</div>

<div className="kpi-card">
<h3>Visits</h3>
<p>{totalVisits}</p>
</div>

<div className="kpi-card">
<h3>Closed</h3>
<p>{closed}</p>
</div>

</div>

<div className="dashboard">

<div className="activity">

<h3>Recent Lead Activity</h3>

{leads.slice(0,5).map(l=>(
<ActivityCard
key={l._id}
name={l.name}
status={l.status}
time="recent"
/>
))}

</div>

<Charts pipeline={pipeline}/>

</div>

</div>

)

}