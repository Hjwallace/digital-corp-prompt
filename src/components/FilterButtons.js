import { Component } from 'react';
import '../App.css';

class FilterButtons extends Component {

    render(){

        function Filter(position){

            ShowAll();

            const divs = document.getElementsByClassName('flex-item');

            
            for (let x = 0; x < divs.length; x++) 
            {
                const div = divs[x];
                const content = div.textContent.trim();
              

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

            <div>
                
                <button onClick={() => ShowAll()} className="adminButton">All</button>
                <button onClick={() => Filter("Admin")}>Admin &amp; PM</button>
                <button onClick={() => Filter("Communication")}>Communication</button>
                <button onClick={() => Filter("Design")}>Design</button>
                <button onClick={() => Filter("Development")}>Development</button>
                <button onClick={() => Filter("UX")}>UX</button>
                <button onClick={() => Filter("Video")}>Video</button>

            </div>


        );
    }
}

export default FilterButtons;