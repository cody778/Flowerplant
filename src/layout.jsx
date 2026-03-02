import { Outlet }  from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';

export default function Layout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}