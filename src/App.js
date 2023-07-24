import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import CatoTest from './components/CatoPage/CatoTest';
import LandingPg from './components/LandingPage/LandingPg';
import Landing from './components/LandingPage/test';
import TeamTest from './components/TeamPage/teamtest';
import PeriTest from './components/PeriPage/PeriTest';
import { useScrollDirection } from './ScrollDirection';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const appRef = useRef()

  const scrollDir = useScrollDirection(appRef)

  return (
    <div ref={appRef}>
    <Landing/>
    <CatoTest classNames={classNames} scrollDir={scrollDir}/>
    <PeriTest classNames={classNames} scrollDir={scrollDir}/>
    <TeamTest/>
    </div>
  );
}

export default App;
