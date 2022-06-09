
import './App.css';
import Navbar from './components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Contactme from './components/Contactme';
import Experience from './components/Experience';
function App() {
  return (
	  <div className='container-fluid'>
  <Navbar />

	<Header />
  <Experience />
  <Contactme />
  
	</div>
  );
}

export default App;
