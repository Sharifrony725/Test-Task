import Header from "../../shared/Header/Header";
import home_icon from '../../assets/home-01.png';
import dashboard from "../../assets/dashboard-circle.png";
import frame from "../../assets/Frame.png";
import more1 from "../../assets/more-01.png";
import vedio from "../../assets/video-replay.png";
import Content from './Content';

const Home = () => {
    return (
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="mt-20 hidden lg:block">
          <div className="flex flex-col-reverse gap-10 ml-7 mt-20">
            <div className="rounded border[#1010101A] border-2 bg-[#1010101A] p-2">
              <img src={dashboard} />
            </div>
            <div className="rounded border[#1010101A] border-2 bg-[#1010101A] p-2">
              <img src={frame} />
            </div>
            <div className="rounded border[#1010101A] border-2 bg-[#1010101A] p-2">
              <img src={vedio} />
            </div>
            <div className="rounded border[#1010101A] border-2 bg-[#1010101A] p-2">
              <img src={more1} />
            </div>
            <div className="rounded border-[#E655271A] border-2 bg-[#E6551A1A] p-2">
              <img src={home_icon} />
            </div>
          </div>
        </div>

        {/* Main Content */}

        <div className="flex-1 w-full">
          <nav>
            <Header></Header>
          </nav>
          {/* Page Content */}
          <div className="bg-[#EEF0F2] p-5 rounded-2xl rounded-b-none	 ml-7 mt-7">
            <Content></Content>
          </div>
        </div>
      </div>
    );
};

export default Home;