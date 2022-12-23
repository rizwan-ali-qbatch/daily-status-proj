import React from 'react';
import '@fontsource/lato';

import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import Content from './Content';

export default function DashBoard() {
  return (
    <>
      <div style={{ position: 'relative' }}>Hello</div>
      <Navbar />
      <SideBar />
      <Content />
      <Footer />
    </>
  );
}
