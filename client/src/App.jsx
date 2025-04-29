import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/publicPages/Home';
import Sell from './pages/publicPages/Sell';
import Rent from './pages/publicPages/Rent';
import Blog from './pages/publicPages/Blog';
import Team from './pages/publicPages/Team';
import Contact from './pages/publicPages/Contact';
import Header from './components/clientLayout/Header';
import Create from './pages/AdminPages/Create';
import SearchEngine from './components/SearchEngine';
import AdminHeader from './components/adminLayout/AdminHeader';
import AdminPage from './pages/AdminPages/AdminPage';
import Dashboard from './pages/AdminPages/Dashboard';

function App() {
  
  return (
    <BrowserRouter>
    
     
      {/* <SearchEngine /> */}
      <Routes>

    <Route  element={ <Header />}>
        <Route path='/' element={<Home />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
    </Route>   
       
    <Route path='/admin' element={ <AdminHeader />}>
        <Route  index element={<AdminPage />} />
        <Route path='create' element={<Create />} />
        <Route path='dashboard' element={<Dashboard />} />
    </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App;