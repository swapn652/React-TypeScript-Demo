import React, {useReducer} from 'react'

const initialState = {count: 0}

type StateProps = {
    count: number
}


type UpdateAction = {
    type: 'INCREMENT' | 'DECREMENT',
    payload: number
}


type ResetAction = {
  type: 'RESET'
}

// type actionProps = {
//     type: string,
//     payload?: number
// }


function reducer(state: StateProps, action: UpdateAction | ResetAction) {
    switch(action.type){
        case 'INCREMENT': return {count: state.count+action.payload}
        case 'DECREMENT': return {count: state.count-action.payload}
        case 'RESET': return initialState
        default: return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
        <button onClick={()=>dispatch({type: 'INCREMENT', payload: 10})}>+</button>
        <button onClick={()=>dispatch({type: 'DECREMENT', payload: 10})}>-</button>
        <button onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
    </>
  )
}

export default Counter
