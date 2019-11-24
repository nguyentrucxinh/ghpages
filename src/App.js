import React from 'react';
import './App.css';
import Header from './Header';
import Summary from './Summary';
import Skill from './Skill';
import Experience from './Experience';
import Education from './Education';
import Project from './Project';
import SideProject from './SideProject';
import Quote from './Quote';

function App() {
  return (
    <div>
      <Header />
      <Summary />
      <Skill />
      <Experience />
      <Education />
      <Project />
      <SideProject />
      <Quote />
    </div>
  );
}

export default App;
