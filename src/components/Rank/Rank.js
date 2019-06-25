import React from 'react';

const Rank = ({ users }) => {
	return(
		 <div>
     <ul className="ma1" style={{ listStyleType: "none"}}>
     {users.map(user => <li key={user.id}>{user.name} mit {user.entries} entries</li>)}
		 </ul>
     </div>
);
}

export default Rank;