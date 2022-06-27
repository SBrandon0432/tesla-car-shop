import React from 'react';
import ThreeD from '../components/ThreeD';
import Color from '../components/Color';
import * as THREE from 'three'

function App() {
  const handleClick = (e) => {
    console.log('working')
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(e.target.style.Background);
  }

  return (
    <div className='App'>
      <Color handleClick={handleClick}/>
      <ThreeD />
    </div>
  );

}

export default App;
