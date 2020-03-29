import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';

const App = () => {
  return (
    <div className="App">
      {/*<ClassCounter/>} {/*Counter using Class*/}
      {/*<HookCounter/>}{/*Counter using Hook*/}
      {/*<HookCounterTwo/>}{/*Counter using Hook with previousState*/}
      {/*<ClassCounterTwo/>}{/*Counter using class with previousState*/}
      {/*<HookCounterThree/>}{/*useState with objects*/}
      {/*<HookCounterFour/>}{/*useState with array*/}
      {/*<ClassCounterOne/>}{/*class with componentDidMount and componentDidUpdate*/}
      {/*<HookCounterOne/>}{/*hook using useEffect*/}
      {/*<ClassMouse/>}{/*class setting up a component only once with componentDidMount*/}
      {/*<HookMouse/>}{/*hook calling useEffect only once*/}
      {/*<IntervalClassCounter/>}{/*Incrementation every second with class*/}
      {/*<IntervalHookCounter/>}{/*Incrementation every second with hook*/}
      {<DataFetching/>}{/*Fetching data with useEffect*/}
    </div>
  );
}

export default App;
