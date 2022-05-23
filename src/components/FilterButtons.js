import { Component } from 'react';

class FilterButtons extends Component {

    render(){

        function Filter(position){

            ShowAll();

            const divs = document.getElementsByClassName('flex-item');

            
            for (let x = 0; x < divs.length; x++) 
            {
                const div = divs[x];              

                if (div.textContent.indexOf(position) <= 0){
                    div.style.display = "none";
                }

            }
        }

        function ShowAll(){

            const divs = document.getElementsByClassName('flex-item');
            for (let x = 0; x < divs.length; x++) 
            {
                const div = divs[x];
               
                div.style.display = "block";
                
            }

        }
    

        return(

            <div className='buttonContainer'>

                <p style={{display:"inline", color:"#FFFFFF", marginRight: 10}} className="filterText">Filter:</p>
                
                <button onClick={() => ShowAll()} className="allButton">All</button>
                <button onClick={() => Filter("Admin")} className="adminButton">Admin &amp; PM</button>
                <button onClick={() => Filter("Communication")} className="commButton">Comm</button>
                <button onClick={() => Filter("Design")} className="designButton">Design</button>
                <button onClick={() => Filter("Development")} className="devButton">Dev</button>
                <button onClick={() => Filter("UX")} className="uxButton">UX</button>
                <button onClick={() => Filter("Video")} className="videoButton">Video</button>

            </div>


        );
    }
}

export default FilterButtons;