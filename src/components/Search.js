import React from 'react';

class Search extends React.Component{
  constructor(props) {
    super()
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <h4>Movie title</h4>
        <form onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleChange} value={this.state.search} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Search
