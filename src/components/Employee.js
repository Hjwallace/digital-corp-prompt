import { Component } from 'react';


class Employee extends Component {
  render() {

    var borderStyle = '';
    var pictureLink = '';
    var teamFiltered = '';

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
        default:
            break;
    }

    //Handler for if the employee does not have a picture
    if (this.props.image == null){
        pictureLink = require("./Placeholder.png");
    } else {
        pictureLink = this.props.image;
    }

    //Fix & display issue
    if(this.props.team.includes('&amp;')){
        teamFiltered = this.props.team.replace('&amp;','&');
    } else {
        teamFiltered = this.props.team;
    }   

    return(

        <div key={this.props.id} className="flex-item"> 

                <div>
                  <img src={pictureLink} style={borderStyle} className="profilePicture"/>
                </div>
                
                <div className='employeeText'>
                  <h5 style={{textAlign: 'center', margin: 0, padding:0}}>{this.props.name}</h5>
                
                  <p style={{textAlign: 'center', margin: 0, padding:0, fontSize: 15}}>{teamFiltered + " Team"}</p>
                </div>
        </div>

    );
  }
}

export default Employee;