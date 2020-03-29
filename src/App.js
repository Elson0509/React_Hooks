import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import ClassCounterTwo from './components/ClassCounterTwo';
import HookCounterThree from './components/HookCounterThree';

const App = () => {
  return (
    <div className="App">
      {/*<ClassCounter/>*/} {/*Counter using Class*/}
      {/*<HookCounter/>*/}{/*Counter using Hook*/}
      {/*<HookCounterTwo/>*/}{/*Counter using Hook with previousState*/}
      {/*<ClassCounterTwo/>*/}{/*Counter using class with previousState*/}
      {/*<HookCounterThree/>*/}{/*useState with objects*/}
    </div>
  );
}

export default App;
