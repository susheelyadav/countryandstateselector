import { useParams,useNavigate } from 'react-router-dom';
import "./ResultPage.css";

function ResultPage() {
  const { country, state } = useParams();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  }

  return (
    <div className='displayresult'>
      <p>Selected Country: {country}</p>
      <p>Selected State: {state}</p>
      <button onClick={handleReturn} className='rebtn'>Return</button>
    </div>
  );
}


export default ResultPage;