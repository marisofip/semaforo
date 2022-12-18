import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	
	const [enabled , setEnabled] = useState("");
	const boton = () => {
		//alert("hola");
		enabled === "" ? setEnabled("roja") : " ";
		enabled === "roja" ? setEnabled("amarilla") : " ";
		enabled === "amarilla" ? setEnabled("verde") : " ";
		enabled === "verde" ? setEnabled("roja") : " ";
		
	}

		 
	
	return (
			<>
		<div className="container">
			<div className= "stick position-absolute top-0"> | </div>
					<div className="blackbox">
		<div className={"luz roja " + (enabled === "roja" ? "brillo" : " " )} onClick={() => setEnabled("roja")}></div>
		<div className={"luz amarilla " + (enabled === "amarilla" ? "brillo" : " " )} onClick={() => setEnabled("amarilla")}></div>
		<div className={"luz verde " + (enabled === "verde" ? "brillo" : " " )} onClick={() => setEnabled("verde")}></div>
		</div>
		</div>		
		<button type="button" className="btn btn-success"  onClick = {boton} >Success</button>
		</>
	);

	
};




export default Home; 


