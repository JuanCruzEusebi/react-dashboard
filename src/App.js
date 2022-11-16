import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import ContentRowTop from "./components/ContentRowTop";
import './assets/css/App.css';

const App = () => {
  return (
    <div id='wrapper'>
      <Sidebar />
      
      <div id='content-wrapper' className='d-flex flex-column'>
        
        <div id='content'>
          
          <Topbar />
          
          <ContentRowTop />
          
        </div>
        
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
