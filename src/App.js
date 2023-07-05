import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Edit from './Edit';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
