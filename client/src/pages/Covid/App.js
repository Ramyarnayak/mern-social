import './App.css';

import React from "react"
import { useLocation } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import Topbar from '../../components/topbar/Topbar';
import Page from './screens/Page'


const Covid = () => {
  const darkMode = useDarkMode(true);
  const location = useLocation();

  return (
  <div>
<Topbar/>
<Page></Page>

  </div>
  );
};

export default Covid;
