import { Link } from 'react-router-dom'

import React from 'react'

export default function sideBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/admin/users'>Users</Link>
        </li>
        <li>
          <Link to='/admin/posts'>Posts</Link>
        </li>
      </ul>
    </div>
  )
}
