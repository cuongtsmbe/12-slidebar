import {links,social} from './../data';
import logo from '../logo.svg';
import { FaTimes } from 'react-icons/fa';
import react,{useContext} from 'react';
import {AppContext} from './../contexts/index';
function SlideBar() {
	const data=useContext(AppContext);
	const renderLinks=()=>{
		return links.map((e,index)=>{
			return (
				<div className="Item" key={e.id}>
					<div className="icon">
					   {e.icon}
					</div>
					<div className="textName">
					   <p> <a href={e.url}>{e.text}</a></p>
					</div>
				</div>
				);
		});
	};

	const renderSocial=()=>{
		return social.map((e,index)=>{
	    			return <a href={e.url} key={e.id}>{e.icon}</a>
    	});
	}
  return (
    <div className={data.isShowSlide?"container-slidebar":"closeSlide"}>
    	<div className="icon-item-button">
	    	<div className="icon-closebutton">
	    		<div className="icon-slidebar">
	    			  <img src={logo} className='logo' alt='coding addict' />
	    		</div>
	    		<div className="button-close">
	    			<button onClick={()=>{data.CloseShowSlide()}}><FaTimes/></button>
	    		</div>
	    	</div>
			{renderLinks()}
		</div>
    	<div className="footer-icon">
    		<div className="Item-icon">
    			{renderSocial()}

    		</div>
    	</div>
    </div>
  );
}

export default SlideBar;