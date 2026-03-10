import { useEffect, useState } from "react";
import API, { getLeads } from "../services/api";
import PipelineBoard from "../components/PipelineBoard"
export default function Leads() {

const [leads, setLeads] = useState([]);

useEffect(() => {
fetchLeads();
}, []);
useEffect(()=>{

loadLeads()

const refresh = ()=>loadLeads()

window.addEventListener("leadCreated",refresh)

return ()=>window.removeEventListener("leadCreated",refresh)

},[])

const loadLeads = async ()=>{

const res = await getLeads()

setLeads(res.data)

}

const fetchLeads = async () => {
try{
const res = await getLeads();
setLeads(res.data);
}catch(err){
console.error("Error loading leads",err);
}
};


// update lead status
const updateStatus = async (id,status) => {

try{

await API.put(`/leads/${id}/status`,{status});

setLeads(prev =>
prev.map(l =>
l._id === id ? { ...l, status } : l
)
);

alert("Lead status updated");

}catch(err){

console.error(err);
alert("Error updating status");

}

};


// schedule visit
const scheduleVisit = async (leadId) => {

try{

await API.post("/visits",{
leadId,
property:"Demo Property",
visitDate:new Date()
});

alert("Visit Scheduled");

}catch(err){

console.error(err);
alert("Error scheduling visit");

}

};

return (

<div>

<h1 className="page-title">Leads</h1>
<PipelineBoard leads={leads} setLeads={setLeads}/>

<table className="table">

<thead>

<tr>

<th>Name</th>
<th>Phone</th>
<th>Status</th>
<th>Actions</th>

</tr>

</thead>

<tbody>

{leads.map(l => (

<tr key={l._id}>

<td>{l.name}</td>

<td>{l.phone}</td>

<td>

<select
value={l.status}
onChange={(e)=>updateStatus(l._id,e.target.value)}
>

<option value="New">New</option>
<option value="Contacted">Contacted</option>
<option value="Interested">Interested</option>
<option value="Visit">Visit</option>
<option value="Closed">Closed</option>

</select>

</td>

<td>

<button
className="visit-btn"
onClick={()=>scheduleVisit(l._id)}
>

Schedule Visit

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}