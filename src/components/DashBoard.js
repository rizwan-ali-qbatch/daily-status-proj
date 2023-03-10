import React from 'react';
import '@fontsource/lato';

import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import Content from './Content';

// import TeamDetailPage from './TeamDetailPage';

export default function DashBoard() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Content />
      {/* <TeamDetailPage /> */}
      <Footer />
    </>
  );
}
