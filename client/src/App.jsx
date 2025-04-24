import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Sell from './pages/Sell';
import Rent from './pages/Rent';
import Blog from './pages/Blog';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Header from './components/Header';


function App() {
  
  return (
    <BrowserRouter>
    
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App;