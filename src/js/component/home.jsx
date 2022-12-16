import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {
	const [enabled , setEnabled] = useState(true)
	
	const brillo = { boxShadow : "0 0 20px yellow"
	}
	
	
	return (
		<>
		<div className="stick">  </div>
		<div className="blackbox">
		<div className="luz roja" ></div>
		<div className="luz amarilla" ></div>
		<div className="luz verde" ></div>
		</div>

</>
	);	
};



export default Home;
