
import { useState } from 'react';
import AddMovie from './add';
import './App.js';
import Counter from './Counter';

function App() {


const [show,setShow]=useState(false)
const [movies,setMovies]=useState([{title:"hey"}])

// const toggleshow=()=>{ this.setState({show:! this.state.show })  }

const toggleshow=()=>{setShow(!show)}

console.log(show)

  return (
  
    <div className="App">

      <button  onClick={toggleshow}   >   show</button>
      {show &&   <Counter/> }
      <AddMovie  movies={movies}  setMovies={setMovies}   ></AddMovie>

    </div>
  );
}

export default App;
