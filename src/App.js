import Blogdetail from './components/Blogdetail';
import Creat from './components/Creat';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
function App() {
 
  return (
    <Router>
    <div className="App">
      <Navbar/>
     <div className="content">
      <Routes>
         <Route  path ="/" element={ < Home/>}/>
          <Route path ="/create" element={<Creat/>}/>
          <Route path ="/blogs/:id" element={<Blogdetail/>}/>
          <Route path ="*" element={<NotFound/>}/>
        </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
