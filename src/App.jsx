import '../src/styles/App.css'
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About  from './components/About';
import Home from './components/Home';
import Production from './components/Production';
import Contact from './components/Contact';

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
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;