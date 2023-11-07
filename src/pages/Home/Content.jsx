import LeftContent from "./LeftContent";
import MiddleContent from "./MiddleContent";

const Content = () => {
    return (
      <div className="flex mx-auto">
        <div className="w-1/4 hidden lg:block">
            <LeftContent></LeftContent>
        </div>
        <div className="w-10/12 mx-4">
          <MiddleContent></MiddleContent>
        </div>
        <div className="w-1/4">2</div>
      </div>
    );
};

export default Content;