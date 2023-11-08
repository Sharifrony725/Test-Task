import Header from "../../shared/Header/Header";
import Content from './Content';
import Sidebar from "./Sidebar";
// import Sidebar from './Sidebar';

const Home = () => {
    return (
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="hidden lg:block">
          <Sidebar></Sidebar>
        </div>
        {/* Main Content */}
        <div className="flex-1 w-full mx-auto">
          <nav>
            <Header></Header>
          </nav>
          {/* Page Content */}
          <div className="bg-[#EEF0F2] p-4 rounded-2xl rounded-b-none ml-0	 lg:ml-7 mt-7">
            <Content></Content>
          </div>
        </div>
        
      </div>
    );
};

export default Home;