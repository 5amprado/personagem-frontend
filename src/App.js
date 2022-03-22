import './App.css';
import PersonagemComponent from './component/PersonagemComponent';
import AddPersonagemComponent from './component/AddPersonagemComponent'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <div className="container">
        <Routes>
          <Route path='/' element={<PersonagemComponent/>}/>
          <Route path='/personagens' element={<PersonagemComponent/>}/>
          <Route path='/add-personagem' element={<AddPersonagemComponent/>}/>
          <Route path='/edit-personagem/:id' element={<AddPersonagemComponent/>}/>
        </Routes>


        </div>

      </Router>
    </div>
    
  );
}

export default App;
