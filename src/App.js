import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { CodeForIntrview } from './components/CodeForIntrview';
import { AddUser } from './components/AddUser';
import { AllUsers } from './components/AllUsers';
import { EditUser } from './components/EditUser';
import { BrowserRouter ,Route ,Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<CodeForIntrview/>}/>
          <Route path='/all' element={ <AllUsers/>}/>
          <Route path='/add' element={<AddUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
