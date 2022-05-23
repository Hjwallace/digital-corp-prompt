
import './App.css';
import React from 'react';
import backupPicture from './duck.jpg';

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
                <div>
                  <img src={item.image} onError={(e)=>{e.target.onerror = null; e.target.src={backupPicture}}}  style={{width: 'auto', height: 200}} className="photoBorder"/>
                </div>
                
                <div className='employeeText'>
                  <h5 style={{textAlign: 'center', margin: 0, padding:0}}>{item.name}</h5>
                
                  <p style={{textAlign: 'center', margin: 0, padding:0, fontSize: 15}}>{item.team}</p>
                </div>

               

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
