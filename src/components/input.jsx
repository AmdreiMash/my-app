import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultState from '../store/defaultState';

const Input = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const changeText = (e) => {
    dispatch({type: 'ADD_TEXT', payload: e.target.value})
  }
  return (<div><input onInput={(e)=> changeText(e)} placeholder='entre your text' value={state.text}/></div>)
}

export default Input;