import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../routers/ProtectedRoute';
import { Suspense } from 'react';
import { Dashboard } from '../views/Dashboard';

//const DefaultLayout = React.lazy(() => import('../layout/DefaultLayout'));
const RegisterPage = React.lazy(() => import('../views/register/RegisterPage'));
const IndexPage = React.lazy(() => import('../views/Index/IndexPage'));


function App() {
  return (
    <Suspense fallback={ <div class="flex items-center justify-center min-h-screen bg-primary">
    <div class="spinner-border animate-spin inline-block w-24 h-24 border-4 rounded-full text-white" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>}>
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/login' element={<h1>Login</h1>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route exact path='/dashboard' element={<ProtectedRoute />}>
          <Route
            exact
            path='/dashboard'
            name='Dashboard'
            element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>

  );
}

export default App;
