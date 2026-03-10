import { Bar, Doughnut } from "react-chartjs-2";

import {
Chart,
BarElement,
ArcElement,
CategoryScale,
LinearScale
} from "chart.js";

Chart.register(
BarElement,
ArcElement,
CategoryScale,
LinearScale
);

export default function Charts({pipeline}){
const stages = Object.keys(pipeline || {})
const values = Object.values(pipeline || {})

const barData = {
labels: stages.length ? stages : ["New","Contacted","Interested","Visit","Negotiation","Closed"],

datasets:[
{
label:"Pipeline",

data: values.length ? values : [4,3,2,1,1,1],

backgroundColor:[
"#22c55e",
"#3b82f6",
"#f59e0b",
"#a855f7",
"#06b6d4",
"#ef4444"
]
}
]
}

const sourceData={
labels:["Website","WhatsApp","Social","Phone","Form"],

datasets:[
{
data:[3,3,3,3,3],

backgroundColor:[
"#60a5fa",
"#f97316",
"#9333ea",
"#f43f5e",
"#22c55e"
]
}
]
}

return(

<div className="charts">

<div className="chart-box">

<h3>Pipeline Stages</h3>

<Bar data={barData}/>

</div>

<div className="chart-box">

<h3>Lead Sources</h3>

<Doughnut data={sourceData}/>

</div>

</div>

)

}