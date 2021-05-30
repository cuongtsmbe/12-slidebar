import react,{useContext} from 'react';
import {AppContext} from './../contexts/index';
function Home() {
	const data=useContext(AppContext);
  return (
    <div className="container_Home">
    	<div className="slidebar-but">
    			<button onClick={()=>data.OpenShowSlide()}>show bar</button>
    	</div>
    	<div className="model-but">
    			<button onClick={()=>data.OpenShowModel()}>show model</button>
    	</div>
    </div>
  );
}

export default Home;
