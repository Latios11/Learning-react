import UserContext from "../context/Usercontext"
import React, {useContext} from 'react'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login</div>
  return (
    <div>
      Welcome {user.username}
    </div>
  )
}

export default Profile