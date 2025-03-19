import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Auth/Signup';
import SignIn from './pages/Auth/SignIn';
import Home from './pages/Home';
import Visitor from './pages/Visitors/Visitor';
import Complaints from './pages/Complaint/Complaints';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ViewVisitors from './pages/Visitors/ViewVisitors';
import Residents from './pages/Residents';
import ComplaintList from './pages/Complaint/ComplaintList';
import Announcement from './pages/Announcement';
import AnnouncementList from './pages/AnnouncementList';

import AdminDashboard from './pages/AdminDashboard';
import Homem from './pages/Homem';
import AdminRoute from './utils/adminRoute'
import UserRoute from './utils/userRoute'
import UserDetails from './pages/UserDetails';
import OwnComplaint from './pages/Complaint/OwnComplaint';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AdminRoute />}>
          <Route path='/adminhome' element={<AdminDashboard />} />
          <Route path='/complaintList' element={<ComplaintList />} />
          <Route path='/viewVisitors' element={<ViewVisitors />} />
          <Route path='/residents' element={<Residents />} />
          <Route path='/create' element={<Announcement />} />
        </Route>

        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Homem />} />

        <Route element={<UserRoute />}>
          <Route path='/home' element={<Home />} />
         
          <Route path='/viewAnnouncement' element={<AnnouncementList />} />
          <Route path='/visitor' element={<Visitor />} />
          <Route path='/complaints' element={<Complaints />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user' element={<UserDetails/>} />
          <Route path='/user/complaint' element={<OwnComplaint/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
