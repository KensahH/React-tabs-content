import React from "react";
import "./style.css";
import {useState} from "react";

export default function App() {

const[toggle, setToggle] = useState(1)


function updateToggle(id){
setToggle(id)


}


  return (
    <div>
      <h2> Tabs Content</h2>
      <ul  className="tabs">

<li onClick={()=>updateToggle(1)}>Html</li>
<li onClick ={()=> updateToggle(2)}>Css</li>
<li onClick={()=> updateToggle(3)}>Js</li>


      </ul>
      


<div className={ toggle === 1 ?"showContent" : "content" }>

<h3>Html</h3>
<p> html is a standard markup language for web pages .with html you can create your own websites. it stands for hypertext markup language</p>


</div>

<div className= { toggle === 2? "showContent" : "content"}>
<h3> Css</h3>
<p> css is the language we use to style an html document .it describes how html elements should be displayed. </p>


</div>
<div className={ toggle ===3? "showContent" :"content"}>
<h3> Js</h3>
<p> javascript is a programming language that is one of the core technologies of the world  wide Web alongside html and css. website use javascript on the client side. </p>

</div>



    </div>
  );
}
