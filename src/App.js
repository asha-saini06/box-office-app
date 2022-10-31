import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/">
        This is Home Page
      </Route>

      <Route exact path="/starred">
        This is Starred
      </Route>

      <Route>This is 404 page</Route>
    </Routes>
  );
}

export default App;
