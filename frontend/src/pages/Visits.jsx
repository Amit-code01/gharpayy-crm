import { useEffect, useState } from "react";
import API, { getVisits } from "../services/api";

export default function Visits() {

const [visits, setVisits] = useState([]);
const [filter, setFilter] = useState("All");

useEffect(() => {
loadVisits();
}, []);

const loadVisits = async () => {

try{

const res = await getVisits();
setVisits(res.data || []);

}catch(err){

console.error("Error loading visits", err);

}

};

const updateVisitStatus = async (id, status) => {

try{

await API.put(`/visits/${id}`, { status });

setVisits(prev =>
prev.map(v =>
v._id === id ? { ...v, status } : v
)
);

alert("Visit updated");

}catch(err){

console.error(err);
alert("Error updating visit");

}

};

const filtered =
filter === "All"
? visits
: visits.filter(v => v.status === filter);

return (

<div>

<h1 className="page-title">Visits</h1>

<div className="visit-filters">

<button onClick={() => setFilter("All")}>All</button>
<button onClick={() => setFilter("Interested")}>Interested</button>
<button onClick={() => setFilter("Completed")}>Completed</button>
<button onClick={() => setFilter("Cancelled")}>Cancelled</button>

</div>

<div className="visit-grid">

{filtered.length === 0 && <p>No visits found</p>}

{filtered.map(v => (

<div key={v._id} className="visit-card">

<p><b>Lead:</b> {v.leadId?.name || "Unknown"}</p>

<p><b>Property:</b> {v.property}</p>

<p><b>Status:</b> {v.status}</p>

<p>
<b>Date:</b>{" "}
{v.visitDate
? new Date(v.visitDate).toLocaleDateString()
: "N/A"}
</p>

<div className="visit-actions">

<button
onClick={() => updateVisitStatus(v._id, "Interested")}
>
Interested
</button>

<button
onClick={() => updateVisitStatus(v._id, "Completed")}
>
Completed
</button>

<button
onClick={() => updateVisitStatus(v._id, "Cancelled")}
>
Cancel
</button>

</div>

</div>

))}

</div>

</div>

);

}