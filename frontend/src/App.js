import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import axios from "axios";
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Login from './pages/Admin/Login';
const apiUrl = process.env.REACT_APP_API_URL;
function App() {
  const {loading,portfolioData, reloadData} = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(`${apiUrl}/api/portfolio/get-portfolio-data`);
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  }

  useEffect(() => {
    if(!portfolioData){
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if(reloadData){
      getPortfolioData();
    }
  }, [reloadData]);
  
  return (
    <BrowserRouter>
    {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-login' element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
