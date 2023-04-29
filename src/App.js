
import Mainmenu from './component/mainmenu';
import ResultPage from './component/ResultPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Mainmenu/>} />
      <Route path="/result/:country/:state" element={<ResultPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
