import { Component } from 'react';


class Employee extends Component {
  render() {

    var borderStyle = '';
    var pictureLink = '';

    switch(this.props.team) {
        case "Admin &amp; PM":
            borderStyle = {width:200,height: 200, border: '3px solid #CF8D62'}
            break;
        case "Communication":
            borderStyle = {width:200 , height: 200, border:'3px solid #A60006'}
            break;
        case "Design":
            borderStyle = {width:200 , height: 200, border:'3px solid #D9CB00'};
            break;
        case "Development":
            borderStyle = {width:200 , height: 200, border:'3px solid #0071DD'};
            break;
        case "UX":
            borderStyle = {width:200 , height: 200, border:'3px solid #15A245'};
            break;
        case "Video":
            borderStyle = {width:200 , height: 200, border:'3px solid #6600AA'};
            break;
    }


    if (this.props.image == null){
        pictureLink = require("./Placeholder.png");
    } else {
        pictureLink = this.props.image;
    }
   

    return(

        <div key={this.props.id} className="flex-item">   
                <div>
                  <img src={pictureLink} style={borderStyle} className="photoBorder"/>
                </div>
                
                <div className='employeeText'>
                  <h5 style={{textAlign: 'center', margin: 0, padding:0}}>{this.props.name}</h5>
                
                  <p style={{textAlign: 'center', margin: 0, padding:0, fontSize: 15}}>{this.props.team}</p>
                </div>
        </div>

    );
  }
}

export default Employee;