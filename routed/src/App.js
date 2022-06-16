import logo from './logo.svg';
import './App.css';
import Dog from './Dog'
import Contact from './Contact'
import About from './About'
import { Routes, Route, NavLink } from 'react-router-dom';
import Food from './patterns/Food'
import Meal from './patterns/Meal'
import Error from './patterns/Error';
import FoodSearch from './patterns/FoodSearch';
import Navbar from './exercise/Navbar'
// import { dogs } from './exercise/props'
import whiskey from './imgs/whiskey.jpg'
import tubby from './imgs/tubby.jpg'
import hazel from './imgs/hazel.jpg'
import DogList from './exercise/DogList';
import DogDetails from './exercise/DogDetails';

/* Section 23: Router exercise */
function App({ dogs }) {

  return (
    <div className="App">

      <Navbar dogs={dogs} />

      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
        <Route exact path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      </Routes>


    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: [
        "Hazel has soooo much energy!",
        "Hazel is highly intelligent.",
        "Hazel loves people more than dogs."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is not the brightest dog",
        "Tubby does not like walks or exercise.",
        "Tubby loves eating food."
      ]
    }
  ]
}

export default App;
