import GlobalStyles from 'globalStyles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Layout from 'components/Layout/Layout';
// import Home from 'pages/Home/Home';
// import About from 'pages/About/About';
// import Users from 'pages/Users/Users';
// import Client from 'pages/Client/Client';
// import Company1 from 'pages/Client/Company1/Company1';
// import Company2 from 'pages/Client/Company2/Company2';
// import Company3 from 'pages/Client/Company3/Company3';

import Weather from 'pages/Weather/Weather';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/client" element={<Client />} />
          <Route path="/clients/company1" element={<Company1 />} />
          <Route path="/clients/company2" element={<Company2 />} />
          <Route path="/clients/company3" element={<Company3 />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout> */}

      <Weather />
    </BrowserRouter>
  );
}

export default App;
