import Header from "./Header/Header";
import Heropage from "./HeroSection/Heropage";
import LoginPage from "./LoginPage/LoginPage";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";
function App() {
  return (
    <>
      <LoginPage />
      {/* <Navbar />
      <Header />
      <div className="flex flex-row">
        <div className="basis-1/6 md:basis-1/ bg-slate-600">
          <Sidebar />
        </div>
        <div className="basis-5/6 md:basis-1/ bg-slate-500">
          <Heropage />
        </div>
      </div> */}
    </>
  );
}

export default App;
