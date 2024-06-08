import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivateRoutes from './PrivateRoute';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Signup from './pages/Signup';
import Headings from './components/PageNotFount/PageNotFount';
import ProfileStatistics from './pages/TeachersCard';
import TimeTable from './pages/TimeTable';
import Courses from './pages/Courses';
import Chat from './Chating';

// Profile
import StudentProfile from './components/StudentProfile';
import TeacherProfile from './components/TeacherProfile';
import TeacherControlTab from './components/TeacherControlTab';
import AnnounceLecture from './pages/AnnounceLecture';
import AnnounceMarquee from './pages/AnnounceMarquee';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<><AnnounceMarquee/><Home /></>} />
        {/* <Route path='/resources' element={<Resources />} /> */}
        <Route path='/faqs' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Teachers' element={<ProfileStatistics />} />
        <Route path='/timetable' element={<><TimeTable /> <Courses /></>} />
        {/* Athenticated Users */}
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<div className="Dashboard-main-container">okies</div>} />
          <Route path='/student-pro' element={<StudentProfile />} />
          <Route path='/teacher-pro' element={<><TeacherProfile /><TeacherControlTab /><AnnounceLecture/></>} />
        </Route>
        <Route path='/chat' element={<Chat />} />
        <Route path="*" element={
          <div className='404Page'>
            <Headings
              title="Oops, we couldn't find that page."
              text="Sorry, it seems like you've wandered off the beaten path. Explore our mission elsewhere on our site, or navigate back to discover more about our initiatives and goals."
              link="/Home"
              linkText="Qario home page"
            />
          </div>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
