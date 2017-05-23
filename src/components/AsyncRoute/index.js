import React, { Component } from 'react'

class AsyncRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount () {
    this.props.loading.then(module => {
      this.component = module.default
      this.setState({loaded: true})
    })
  }

  render () {
    if (this.state.loaded) {
      return <this.component {...this.props} />
    }
    return <h2>Loading...</h2>
  }
}

export default AsyncRoute
