import React from 'react';

const Rank = ({name ,entries}) => {

	return (
<div className="ce">
	<div className="white f3">
	'{name} ,Your Rank is...'  
	</div>
	<div className="white f1">
		{entries}
	</div>

</div>
		);
}

export default Rank;