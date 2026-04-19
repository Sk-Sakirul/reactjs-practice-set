// /* Question - 14 */
import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CardGrid from "@/components/CardGrid";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">
          <CardGrid />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
