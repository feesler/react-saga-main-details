import { Routes, Route } from 'react-router-dom';
import ServiceList from './components/ServiceList.jsx';
import ServiceDetails from './components/ServiceDetails.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={ServiceList} />
        <Route path="/:id/details" Component={ServiceDetails} />
      </Routes>
    </div>
  );
}

export default App;
