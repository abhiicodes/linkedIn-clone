import React from "react";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';

function App() {
  return (
    <div className="app">
     
      {/* Header */}
      <Header/>



      
      {/* app body */}
      <div className="app__body">
      <Sidebar/>
      <Feed/>
      </div>
      {/* sidebar */}

      
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
