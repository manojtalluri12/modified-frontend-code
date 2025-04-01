
import { useState,createContext } from 'react';
import Login from './Forms/Login.js';
import Myprofile from './Forms/Myprofile.js';
import Navbar from './Forms/Navbar.js';
import Signup from './Forms/Signup.js';
import { Route,Routes } from 'react-router-dom';
import { ThemeProvider } from './Forms/themecontext.js';
export const store =createContext()
function App() {
  const [token,settoken]=useState(null)
 
  return (
  
      <ThemeProvider>
      <store.Provider value={[token,settoken]}>
        {
          token ?  <h1>My page</h1> : <Navbar/>
        }
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Myprofile/>}/>
      </Routes>
      </store.Provider>
      </ThemeProvider>
    
  );
}

export default App;
