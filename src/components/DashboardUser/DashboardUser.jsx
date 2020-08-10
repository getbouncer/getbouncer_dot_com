import React from 'react'

const DashboardUser = (authUser, signOut) => (
  <div>
    <div>
      { authUser.email }
    </div>
    <button
      type="button"
      onClick={() => {
        signOut()
      }}
    >
      Logout
    </button>
    <input type="text" placeholder="Organization OID" />
    <button type="submit">Add Organization</button>
    <input type="text" placeholder="Organization Name" />
    <button type="submit">Create Organization</button>
  </div>
)

export default DashboardUser
