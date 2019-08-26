import React from 'react';
import './App.css';
import SlideView from './components/SlideView';

function App() {
  return (
      <div>
        <div className="container">

          <h1 class="display-4 text-center"> Un mensaje para vos</h1>
          <SlideView></SlideView>    
        </div>
      </div>
      );
}

export default App;
