import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import './App.css';
import HomeScreen from './components/HomePage';
import { BrowserRouter, Link, Switch } from "react-router-dom";
import CreateProfile from './components/CreateProfile';
import { initialState, reducer } from './reducer/UseReducer';

// crete context
export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
    <userContext.Provider value={{ state, dispatch }}>
      <>
        
        <main>
          <Switch>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/createprofile' component={CreateProfile} exact/>
          </Switch>
        </main>
      </>
      </userContext.Provider>
    </BrowserRouter>
     
      

      
   
  );
}

export default App;
