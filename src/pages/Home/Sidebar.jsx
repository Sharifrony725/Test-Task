import home_icon from "../../assets/home-01.png";
import dashboard from "../../assets/dashboard-circle.png";
import frame from "../../assets/Frame.png";
import more1 from "../../assets/more-01.png";
import vedio from "../../assets/video-replay.png";
const Sidebar = () => {
  return (
    <div className="lg:mt-80 bg-white max-w-full p-5 lg:p-0 mt-5">
      <div className="flex flex-row gap-2 lg:flex-col-reverse justify-between lg:gap-10 lg:ml-7 lg:mt-20">
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
  );
};

export default Sidebar;
