import LeftContent from "./LeftContent";
import MiddleContent from "./MiddleContent";
import RightContent from "./RightContent";

const Content = () => {
    return (
      <div className="flex mx-auto">
        <div className="w-1/4 hidden lg:block">
          <LeftContent></LeftContent>
        </div>
        <div className="w-1/2 mx-4">
          <MiddleContent></MiddleContent>
        </div>
        <div className="w-1/4 hidden lg:block">
          <RightContent></RightContent>
        </div>
      </div>
    );
};

export default Content;