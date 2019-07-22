import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onInputChange , onSubmitChange}) => {

	return (
<div className="f3">

		
	<p className="white f4"> Detective@work. Enter any image to detect face </p>
		
		<div className="center">
		 <div className="center pa4 br3 shadow-5 form">
		 	<input className="f4 pa2 w-100 center" type="text" onChange={onInputChange}/>
		 	<button className="w-40 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onSubmitChange}> Detect </button>
		 </div>

		</div>
</div>
		);
}

export default ImageLinkForm;