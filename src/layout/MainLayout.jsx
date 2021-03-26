import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

function MainLayout() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Page />
    </React.Fragment>
  );
}
export default MainLayout;
