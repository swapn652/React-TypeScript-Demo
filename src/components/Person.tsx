import React from 'react'
import PersonProps from './Person.types'


const Person = (props: PersonProps) => {

  return (
    <div>
        <h1>{props.name.firstName} {props.name.lastName}</h1>
    </div>
  )
}

export default Person