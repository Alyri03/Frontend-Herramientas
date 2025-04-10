import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-cover bg-center blur-lg"></div>
      
      <div className="relative z-10 p-8">
        <h1 className="text-3xl font-bold underline text-center mt-10">
          Hello world!
        </h1>
      </div>
    </div>
  );
}

export default App;
