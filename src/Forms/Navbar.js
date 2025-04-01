//import R, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from './themecontext';
const Navbar = () => {
  const { theme, toggleTheme,isDark}=useTheme()
  //console.log(theme,toggleTheme,isDark);
  return (
    <div>
      <Link to='/login'>LOGIN</Link>
      <Link to='/'>Signup</Link>
      <button onClick={toggleTheme}>{isDark ? "DRAK":"LIGHT"}</button>
    </div>
  )
}

export default Navbar
