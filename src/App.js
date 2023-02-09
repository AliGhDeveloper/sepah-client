import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import Header from "./pages/Dashboard/Header";
import DashboardLayout from './components/layout/DashboardLayout'
import Intro from "./pages/Dashboard/Intro";
import HomeLayout from './components/layout/HomeLayout';
import Home from "./pages/Home";
import Dash from "./pages/Dashboard/Dashboard";
import TicketRegister from './pages/Ticket/TicketRegister'
import TicketLogin from './pages/Ticket/TicketLogin'
import TicketLayout from './components/layout/TicketLayout';
import Ticket from './pages/Ticket/Ticket';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Aboutme from "./pages/Aboutme";
import ContactUs from "./pages/ContactUs";
import AcNumber from "./pages/AccountNumber";
import { useSelector, useDispatch } from 'react-redux';
import LatestNews from './pages/Dashboard/MainPage/LatestNews';
import Description from './pages/Dashboard/MainPage/Description';
import NewsArchive from './pages/newsarchive';
function App() {
  const date = new Date().getFullYear('fa-IR')
  console.log(date)
  const sidebar = useSelector(state => state.sidebar);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if(!e.target.closest('.sidebar')){
      if(sidebar.open){
        dispatch( { type: "SIDEBAR", payload : {...sidebar, open : false}})
      }
    }
  }

  return (
    <Router>
      <div className="App" onClick={(e) => handleClick(e)}>
        <Routes>
          <Route path="/ticket/register" element={<TicketRegister />} />
          <Route path="/ticket/login" element={<TicketLogin />} />
          <Route path="/ticket" element={<TicketLayout />}>
            <Route path="/ticket/:userid" element={<Ticket />}/>
          </Route>
          <Route path="/" element={<HomeLayout />}>
              <Route path="/accountnumbers" element={<AcNumber />} />
              <Route path="/" element={<Home />} />
              <Route path="/aboutme" element={<Aboutme />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/newsarchive" element={<NewsArchive />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard/siteheader" element={<Header />} />
            <Route path="/dashboard/intro" element={<Intro />} />
            <Route path="/dashboard/mainpage">
              <Route path="/dashboard/mainpage/latestnews" element={<LatestNews />} />
              <Route path="/dashboard/mainpage/description" element={<Description />} />
            </Route>
            <Route path="/dashboard/desc" element={<Dash />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
