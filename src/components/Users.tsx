import React, {useState} from 'react'

type AuthUser = {
    name: string,
    email: string
}

const Users = () => {
  // const [user, setUser] = useState<AuthUser | null>(null)
  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () =>{
    setUser({name: 'Swapnil Pant', email: 'timepass'})
  }

  const handleLogout = () =>{
    setUser({} as AuthUser)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Welcome {user.name}</div>
      <div>Your email is {user.email}</div>
    </div>
  )
}

export default Users
