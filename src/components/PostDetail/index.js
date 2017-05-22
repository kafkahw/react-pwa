
import React from 'react'

import Post from '../Post'

const PostDetail = (props) => (
  <div>
    <Post {...props.post} />
  </div>
)

export default PostDetail
