import { Routes, Route } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import ServiceDetails from './components/ServiceDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact>
          <ServiceList />
        </Route>
        <Route path="/:id/details" exact>
          <ServiceDetails />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
