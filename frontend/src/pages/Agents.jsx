import {useEffect,useState} from "react"
import {getAgents} from "../services/api"

export default function Agents(){

const [agents,setAgents]=useState([])

useEffect(()=>{

getAgents().then(res=>{

setAgents(res.data || [])

})

},[])

return(

<div>

<h1 className="page-title">Agents</h1>

<table className="table">

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
</tr>
</thead>

<tbody>

{agents.map(a=>(
<tr key={a._id}>
<td>{a.name}</td>
<td>{a.email}</td>
<td>{a.phone}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}