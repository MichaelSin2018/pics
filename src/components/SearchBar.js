import React from 'react';

class SearchBar extends React.Component {
  //1.  
  state = { term: '' }; 
  // onFormSubmit = this.onFormSubmit.bind(this)
  
  //2.
  // constructor(props) {
  //   super(props)
  //   this.state = { term: ''}
  //   this.onFormSubmit = this.onFormSubmit.bind(this)
  // }

  //1.
  onFormSubmit(event) {
    event.preventDefault(); //What is 'preventDefault'?

    console.log('onFormSubmit : ', this); //Why is this cause error?
  }

  
  //2.arrow function declaration
  onFormSubmit = (event) => {
    event.preventDefault(); //What is 'preventDefault'?
    this.props.onSubmit(this.state.term)

    console.log('onFormSubmit : ', this); //Why does this cause error?
  }
  
    render() {
      console.log('SearchBar this.state', this)
      return (
        <div className="ui segment">
          <form                          // How does form tag function?  
            //1.
            // onSubmit={(e)=>this.onFormSubmit(e)} //I can't feel what difference of having this is...
            //2.
            onSubmit={this.onFormSubmit} //I can't feel what difference of having this is...
            className="ui form"
          >
            <div className="field">
              <label>Image Search</label>
              <input 
                type="text" 
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value})} 
              />
            </div>
          </form>
        </div>
      )
  }
  

}

export default SearchBar;