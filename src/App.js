
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }


  componentDidMount() {
    fetch('https://digitalcorps.s3.amazonaws.com/students.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.students,
        })
      });
  }



  render() 
  {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } 
    else {
      return (
        <div className="App">
          <header className="App-header">


            <div className="container">

            {items.map(item => (

              <div key={item.id} className="flex-item">   

                <img alt='Photo Not Available' src={item.image} style={{width: 200, height: 200}} className="photoBorder"/>
                <h5 style={{margin: 0, padding:0}}>{item.name}</h5>
                <p style={{textAlign: 'center',margin: 0, padding:0}}>{item.team}</p>
              </div>

              ))}

            </div>
             
            <p>Data Has Been Loaded</p>
          </header>
        </div>
      );
    }

    
  }

  }

export default App;
