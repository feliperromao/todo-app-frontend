import 'modules/bootstrap/dist/css/bootstrap.min.css'


import React from 'react'
import Todo from '../todo/todo'
import Menu from '../template/menu'
export default props => (
  <div className='container'>
    <Menu />
    <Todo />
  </div>
)