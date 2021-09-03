import React from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Todos from './components/Todos'
import './index.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Todos />
      <Footer/>
    </div>
  );
}

export default App;
