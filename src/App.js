import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/starred" element={<Starred />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
      {/* <Route>
          <div>Not Found</div>
        </Route> */}
    </Routes>
  );
}

export default App;
