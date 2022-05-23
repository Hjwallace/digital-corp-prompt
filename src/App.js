
import './App.css';
import React from 'react';
import Employee from './components/Employee.js';
import logo from './components/Logo.png';
import FilterButtons from './components/FilterButtons.js';


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

            <header className='headerBar'>

              <div style={{float:"left"}}>
                <img src={logo}/>
              </div>

              <FilterButtons />

            </header>


            <div className="container">

            {items.map(item => (

              <Employee id={item.id} image={item.image} name={item.name} team={item.team} />
              
            ))}

            </div>
            
          </header>
        </div>
      );
    }

    
  }

  }

export default App;
