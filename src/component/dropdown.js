import { useState } from "react"
import { useNavigate } from 'react-router-dom';


function Dropdown({ props, onChange,states }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const[isstate,setIsState] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedCountry(option);
    onChange(option);
    setIsOpen(false);
    setIsState(true);
  };

  const handleoptionstate = (option) =>{
    setSelectedState(option)
    setIsOpen(false);
  }

  const displayvalue=()=>{
    if(selectedCountry && selectedState){
      navigate(`/result/${selectedCountry}/${selectedState}`);
    }
    else{
      alert("select a country and state")
    }
   
  }
 
  

  return (
    <>
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedCountry ? selectedCountry : 'Select a Country'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {props.map((option,key) => (
            <li key={key} onClick={() => handleOptionClick(option.country)}>
              {option.country}
            </li>
          ))}
        </ul>
      )}
    </div>
    
    {isstate && <div className="dropdown">
       <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
         {selectedState ? selectedState : 'Select a State'}
       </button>
       {isOpen && (
         <ul className="dropdown-menu">
           {states.map((option,key) => (
             <li key={key} onClick={() => handleoptionstate(option)}>
               {option}
             </li>
           ))}
         </ul>
       )}
     </div>
     }
     <input type="button" className="button" onClick={displayvalue} value="submit"></input>
     </>
           
 );
  }
export default Dropdown;