import GlobalStyles from 'globalStyles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Users from 'pages/Users/Users';

import Consultation12 from 'consultations/Consultation12/Consultation12';

function App() {
  return (
    <Consultation12/>
    // <BrowserRouter>
    //   <GlobalStyles />
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/users" element={<Users />} />
    //       <Route path="*" element="Page Not Found" />
    //     </Routes>
    //   </Layout>
    // </BrowserRouter>
  );
}

export default App;
