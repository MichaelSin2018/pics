import React from 'react';
import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

//1.functional declaration
class App extends React.Component {
  state = { images: []}
  //1. Promise
  // onSearchSubmit(term) {
  //   axios.get('https://api.unsplash.com/search/photos', {
  //     params: { query: term },
  //     headers: {
  //       Authorization: 'Client-ID 8c8e60e1c03338a4b95e265573822824fcdfed56d9e43d42c2d1a5f177b4412c'
  //     }  
  //   })
  //   .then(response => {
  //     console.log(response.data.results);
  //   })
  //   // console.log(term);
  // }

  //2. async await
  onSearchSubmit = async term => {
    const response = await unsplash
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        // headers: {
        //   Authorization: 'Client-ID 8c8e60e1c03338a4b95e265573822824fcdfed56d9e43d42c2d1a5f177b4412c'
        // }  
      })
    
    this.setState({ images: response.data.results });
  
    console.log('onSearchSubmit this : ', this)

    // console.log('results', response.data.results);

    // console.log(term);
  }    
    render() {
      console.log('App this.state: ', this.state)
      return (
        <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      );
    }
}

//2. class declaration
// const App = () => {
    
//   return (
//     <div className="ui container" style={{marginTop: '10px'}}>
//       <SearchBar />
//     </div>
//   );
// };

export default App;