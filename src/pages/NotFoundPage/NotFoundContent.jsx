import not_found from "../../assets/not_found.png";

const NotFoundContent = () => {
  return (
    <div className="bg-white rounded-xl p-5 max-w-full h-auto">
      <div className="w-[520px] h-[500px] mx-auto mt-20">
        <img src={not_found} />
        <h2 className="text-3xl font-bold mt-11 text-center">This page is empty</h2>
      </div>
    </div>
  );
};

export default NotFoundContent;
