
import { FaTimes } from 'react-icons/fa';
import react,{useContext} from 'react';
import {AppContext} from './../contexts/index';
function Model() {
	const data=useContext(AppContext);
  return (
    <div className="container-model">
    	<div className="del-title">
    		<div>
    		</div>
    		<div className="title">
    			<p>Context Model</p>
    		</div>
    		<button onClick={()=>data.CloseShowModel()}>
    			<FaTimes/>
    		</button>
    	</div>
    </div>
  );
}

export default Model;