import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Text = () => {
  const text = useSelector(state => state.text)
  const dispatch = useDispatch()

  return (<div><p>{text}</p>
  <button onClick={() => dispatch({type: 'DELETE_TEXT'})}>delete</button></div>)
};

export default Text;