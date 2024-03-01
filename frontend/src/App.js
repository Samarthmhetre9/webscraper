import './App.css';
import ProductDetails from './Pages/ProductDetails';
import Startpage from './Pages/Startpage';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Nvbar from './components/Nvbar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Searchpage from './Pages/Searchpage';
import Sidebar from './components/Sidebar';


function App() {
  return (
      <BrowserRouter>
        <Nvbar />
        <Routes>
          < Route path='/' element={ <Startpage /> }/>
          < Route path='/product/:id' element={ <ProductDetails /> }/>
          < Route path='/login' element={ <Login /> }/>
          < Route path='/signup' element={ <Signup /> }/>
          < Route path='/search' element={ <Searchpage /> }/>
          < Route path="/sidebar" element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
