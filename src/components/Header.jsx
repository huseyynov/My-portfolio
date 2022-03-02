import shekil from '../wall-and-laptop-background.jpeg'

const Header = () => {
  return (
	 <div className="header-wrapper">
	 	<div className="main-info">
		  <h1>Web development and website services</h1>
 <a href={shekil} className="downloadcv" download>Download CV</a>
	 </div>
	 
</div>
  )
}

export default Header