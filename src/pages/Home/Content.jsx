import Dropdoun from "./Dropdoun";
import LeftContent from "./LeftContent";
import MiddleContent from "./MiddleContent";
import RightContent from "./RightContent";

const Content = () => {
    return (
      <div className="flex mx-auto">
        <div className="w-1/4 hidden lg:block">
          <LeftContent></LeftContent>
        </div>
   
        <div className="lg:w-1/2 lg:mx-4 mx-0 w-full">
          <MiddleContent></MiddleContent>
        </div>
        <div className="w-1/4 hidden lg:block">
          <RightContent></RightContent>
        </div>
      </div>
    );
};

export default Content;