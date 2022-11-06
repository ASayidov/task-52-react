import "./App.css"
import { Card } from "./Card"


function App() {
return (
<div className="App">
 <h1 style={{color: "DarkSlateGrey"}}>HTML/CSS Project ideas</h1>
 <Card cardTitle = <i>Card first</i>  color = "red"/>
 <Card cardTitle = <i>Card second</i> color = "blue"/>
 <Card cardTitle = <i>Card third</i>  color = "green"/>
 </div>
)
}

export default App