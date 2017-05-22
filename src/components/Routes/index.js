import React from 'react'
import { Route, Switch } from 'react-router'

import About from '../About'
import Home from '../Home'
import NotFound from '../NotFound'
import PostDetail from '../PostDetail'
import posts from '../../../blog-posts.json'

const Routes = () => (
  <Switch>
    <Route exact path='/' render={() => <Home posts={posts.posts} />} />
    <Route path='/about' component={About} />
    <Route path='/post/:slug' render={({match}) => {
      const post = posts.posts.filter(post => match.params.slug === post.slug)
      return <PostDetail post={post[0]} />
    }} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
