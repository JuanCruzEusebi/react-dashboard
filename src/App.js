import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import ContentRowTop from "./components/ContentRowTop";
import ContentWrapper from "./components/ContentWrapper";
import './assets/css/App.css';


const App = () => {
  return (
    <div id='wrapper'>
      <Sidebar />
      
      <ContentWrapper top={<Topbar />} main={ <ContentRowTop />} footer={<Footer />} />
    </div>
  );
}

export default App;
