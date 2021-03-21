import React from 'react';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Page from '../components/page/Page';

function MainLayout() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Page></Page>
    </React.Fragment>
  );
}
export default MainLayout;
