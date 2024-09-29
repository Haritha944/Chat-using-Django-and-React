import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import PrivateRoute from "./utils/PrivateRoute"
import {AuthProvider} from './context/AuthContext'
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Register from './views/Register';
import Login from './views/Login';
import Navbar from './views/Navbar'
import Message from './views/Message'
function App() {
  return (
    
    <Router>
      <AuthProvider>
      <div>
       <Navbar/>
       <Routes>
        <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/inbox" element={<Message />} />
            </Routes>
      </div>
      </AuthProvider>
    </Router>
 
  );
}

export default App;
