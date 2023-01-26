import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Text = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  return (<div><p>{state.textReduser.text}</p> <p>{state.countReduser.count}</p>
  <button onClick={() => dispatch({type: 'DELETE_TEXT'})}>delete</button></div>)
};

export default Text;