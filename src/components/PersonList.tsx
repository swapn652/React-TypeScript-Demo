import React from 'react'
import NameProps from './Name.types'

type PersonListProps = {
    // nameList: {
    //     firstName: string,
    //     lastName: string
    // }[]
    nameList: NameProps[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <>
    {props.nameList.map((person)=>{
        return(
                <h1>{person.firstName} {person.lastName}</h1>
        )
    })}
    </>
  )
}

export default PersonList
