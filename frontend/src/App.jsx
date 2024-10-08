import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CreateCompanies from './components/admin/CreateCompanies';
import CompanySetUp from './components/admin/CompanySetUp';
import AdminJobs from './components/admin/AdminJobs';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/aboutus',
    element:<AboutUs/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },


  {
    path:'/admin/companies',
    element:<Companies/>
  },
  {
    path:'/admin/companies/create',
    element:<CreateCompanies/>
  },
  {
    path:'/admin/companies/:id',
    element:<CompanySetUp/>
  },
  {
    path:'/admin/jobs',
    element:<AdminJobs/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
