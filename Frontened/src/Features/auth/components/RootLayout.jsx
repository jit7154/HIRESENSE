import { Outlet } from "react-router";
import Navbar from "./Navbar"; // Adjust path to where you saved it

const RootLayout = () => {
  return (
    <div>
      {/* The Navbar stays at the top of EVERY page */}
      <Navbar />
      
      {/* The actual page content (Home, Login, etc.) will render inside this main tag */}
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default RootLayout;