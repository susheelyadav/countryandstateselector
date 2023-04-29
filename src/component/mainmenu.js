import { useState } from "react";
import Dropdown from "./dropdown"
import "./dropmenu.css";
import countriesname from "./gistfile1.json";



// console.log(countriesname.countries[0].country)

const Mainmenu=()=>{

    const [selectedstates,setSelectedState] = useState("")
   const options = countriesname.countries.map((value)=>value)

    const handleChange=(values)=>{
        const selected = options.filter((option)=> option.country === values)[0].states
        setSelectedState(selected)
    }

    return(
        <>
        <Dropdown props={options}  states={selectedstates} onChange={handleChange} ></Dropdown>
        </>    
    )
}

export default Mainmenu;