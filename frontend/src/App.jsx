import React from 'react'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import { ToDo } from './components/ToDo'
import GetTodo from './components/GetTodo.jsx'

const App = () => {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/getTodo' element={<GetTodo></GetTodo>}></Route>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App