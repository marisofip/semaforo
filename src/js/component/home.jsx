import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	
	const [enabled , setEnabled] = useState("")
	
	return (
		<>
		<div className="stick">  </div>
		<div className="blackbox">
		<div className={"luz roja brillando" + (enabled === "roja" ? "brillo" : " " )} onClick={() => setEnabled(rojo)}></div>
		<div className={"luz amarilla brillando" + (enabled === "amarilla" ? "brillo" : " " )} onClick={() => setEnabled(amarilla)}></div>
		<div className={"luz verde brillando" + (enabled === "verde" ? "brillo" : " " )} onClick={() => setEnabled(verde)}></div>
		</div>
		
		</>
	);
};



export default Home;
