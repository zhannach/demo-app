import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const Home = lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignIn />}></Route>
          <Route path="/main" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
