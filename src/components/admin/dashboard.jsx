import React from 'react'
import SIdeBar from './sideBar.jsx'
import { Route } from 'react-router-dom'
import Users from './users.jsx'
import Posts from './posts.jsx'

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SIdeBar />
      <Route path='/admin/users' component={Users} />
      <Route path='/admin/posts' component={Posts} />
    </div>
  )
}

export default Dashboard
