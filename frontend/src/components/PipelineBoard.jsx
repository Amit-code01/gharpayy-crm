import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import API from "../services/api";

const stages = [
"New",
"Contacted",
"Interested",
"Visit",
"Closed"
];

export default function PipelineBoard({leads,setLeads}){

const groupLeads = () => {

const map = {};

stages.forEach(s => map[s] = []);

leads.forEach(l=>{
map[l.status]?.push(l);
});

return map;

};

const [columns,setColumns] = useState({});

useEffect(()=>{
setColumns(groupLeads());
},[leads]);

const onDragEnd = async(result)=>{

if(!result.destination) return;

const leadId = result.draggableId;
const newStatus = result.destination.droppableId;

try{

await API.put(`/leads/${leadId}/status`,{
status:newStatus
});

const updated = leads.map(l =>
l._id === leadId ? {...l,status:newStatus} : l
);

setLeads(updated);

}catch(err){
console.error(err);
}

};

return(

<DragDropContext onDragEnd={onDragEnd}>

<div className="pipeline-board">

{stages.map(stage=>(

<Droppable droppableId={stage} key={stage}>

{provided=>(

<div
className="pipeline-column"
ref={provided.innerRef}
{...provided.droppableProps}
>

<h3>{stage}</h3>

{columns[stage]?.map((lead,index)=>(

<Draggable
key={lead._id}
draggableId={lead._id}
index={index}
>

{provided=>(

<div
className="lead-card"
ref={provided.innerRef}
{...provided.draggableProps}
{...provided.dragHandleProps}
>

<p>{lead.name}</p>
<small>{lead.phone}</small>

</div>

)}

</Draggable>

))}

{provided.placeholder}

</div>

)}

</Droppable>

))}

</div>

</DragDropContext>

);

}