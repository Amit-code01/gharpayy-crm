export default function ActivityCard({name,status,time}){

return(

<div className="activity-card">

<div>

<b>{name}</b>

<p>{status}</p>

</div>

<span className="activity-time">
No activity {time}
</span>

</div>

)

}