import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import SignInSide from './signin';
import Landingpage from './landingpage';
import SearchPage from './joblistings';
import CreateResume from './resume';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './user';


const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signin" element={<SignInSide/>}/>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/joblistings" element={<SearchPage/>}/> 
      <Route path="/resume" element={<CreateResume/>}/> 

    </Routes>
  </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

