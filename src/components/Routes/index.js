import React from 'react'
import { Route, Switch } from 'react-router'

import AsyncRoute from '../AsyncRoute'
import posts from '../../../blog-posts.json'


const Routes = () => (
  <Switch>
    <Route exact path='/' component={() => <AsyncRoute posts={posts.posts} loading={import(/* webpackChunkName: "Home" */'../Home')} />} />
    <Route path='/about' component={() => <AsyncRoute loading={import(/* webpackChunkName: "About" */'../About')} />} />
    <Route path='/post/:slug' component={({match}) => {
      const post = posts.posts.filter(post => match.params.slug === post.slug)
      return <AsyncRoute post={post[0]} loading={import(/* webpackChunkName: "PostDetail" */'../PostDetail')} />
    }} />
    <Route component={() => <AsyncRoute loading={import(/* webpackChunkName: "NotFound" */'../NotFound')} />} />
  </Switch>
)

export default Routes
