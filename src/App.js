import React, { Component } from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'

import Login from './pages/login';
import Admin from './pages/admin';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Admin/>}></Route>
        </Routes>
      </HashRouter>
    )
  }

}

