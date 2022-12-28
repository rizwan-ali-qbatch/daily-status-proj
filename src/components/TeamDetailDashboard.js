import React from 'react';

import Navbar from './Navbar';
import SideBar from './SideBar';
import Footer from './Footer';
import TeamDetailPage from './TeamDetailPage';

export default function TeamDetailDashboard() {
  return (
    <>
      <Navbar />
      <SideBar />
      <TeamDetailPage />
      <Footer />
    </>
  );
}
