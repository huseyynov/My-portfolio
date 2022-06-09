import shekil from '../wall-and-laptop-background.jpeg'
import Typed from 'react-typed';

const Header = () => {
  return (
	 <div className="header-wrapper">
	 	<div className="main-info">
		  <h1>Ali Huseynov MTA</h1>
		  <Typed
		  		className='typed-text'
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed>
 			<a href={shekil} className="downloadcv" download>Download CV</a>
	 </div>
	 
</div>
  )
}

export default Header