import LeftContent from "./LeftContent";

const Content = () => {
    return (
      <div className="flex mx-auto">
        <div className="w-1/4">
            <LeftContent></LeftContent>
        </div>
        <div className="w-1/2">3</div>
        <div className="w-1/4">2</div>
      </div>
    );
};

export default Content;