import React from 'react'

type GreetProps = {
    name: string,
    messageCount: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
        {props.isLoggedIn && 
            <h1>Hello {props.name}! {props.messageCount} messages waiting to be read! </h1>
}
    </div>
  )
}

export default Greet