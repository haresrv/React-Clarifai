import React from 'react';
import './FaceRecognition.css';

class FaceRecognition extends React.Component{
render(){

	return (
		<div className='center ma'>
			<div className="absolute mt2">
			
				<img id='img' src={this.props.imageUrl} alt="logo" width="500px" height="auto"/>
				<div className="bounding-box" style={{top:this.props.box.topRow,right:this.props.box.rightCol ,bottom:this.props.box.bottomRow,left:this.props.box.leftCol }} />
				
			</div>

		</div>

		);



	/*
https://image.freepik.com/free-photo/model-face_23-2147639426.jpg
https://dxs1x0sxlq03u.cloudfront.net/sites/default/files/article-image/eminence-organics-acne-face-mapping.jpg
https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAxNy83OTAvb3JpZ2luYWwvdW5ldGhpY2FsLW1hbi0xMTA3MDUuanBn
	*/

}
}
export default FaceRecognition;

