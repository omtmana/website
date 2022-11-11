import '../src/styles/App.css'
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About  from './components/About';
import Home from './components/Home';
import Production from './components/Production';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Code from './components/Code';
import Picture from './components/Picture';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/production' element={<Production />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/code' element={<Code />}/>
            <Route path='/blog' element={<Blog />} />
            <Route path='/picture' element={<Picture />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
