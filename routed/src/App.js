import logo from './logo.svg';
import './App.css';
import Dog from './Dog'
import Contact from './Contact'
import About from './About'
import { Routes, Route, NavLink } from 'react-router-dom';
import Food from './patterns/Food'

/* Section 20 Intro to routers */
// function App() {
//   return (
//     <div className="App">
//       <nav className='App-nav'>
//         <NavLink className={({ isActive }) => (isActive ? "active-link" : '')} to='/dog'>Dog</NavLink>
//         <NavLink className={({ isActive }) => (isActive ? "active-link" : '')} to='/contact'>Contact</NavLink>
//         <NavLink className={({ isActive }) => (isActive ? "active-link" : '')} to='/'>About</NavLink>
//       </nav>

//       <Routes>
//         <Route exact path="/dog" element={<Dog name="Muffins" />} />
//         <Route exact path="/contact" element={<Contact />} />
//         <Route exact path="/" element={<About />} />
//       </Routes>

//     </div>
//   );
// }

/* Section 22: Patters */
function App() {
  return (
    <div className="App">
      {/* <nav className='App-nav'>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : '')} to='/dog'>Dog</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : '')} to='/contact'>Contact</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active-link" : '')} to='/'>About</NavLink>
      </nav> */}

      <Routes>
        <Route exact path="/food/:name" element={<Food />} />
      </Routes>

    </div>
  );
}

export default App;
