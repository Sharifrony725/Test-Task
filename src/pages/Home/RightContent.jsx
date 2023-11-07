import icon from '../../assets/up_icon.png'
const RightContent = () => {
    return (
      <div className="bg-white rounded-2xl p-2">
      <div className="bg-white rounded-xl border-2 p-2">
        <div className=" p-2 ">
          <div className="flex justify-between items-center">
            <div className="border flex items-center font-bold border-[#E55527] text-[#E55527] w-5 h-5 rounded-lg">
              <span className="ml-1 mr-2">T</span>
              <span className="ml-2 font-bold">Settings</span>
            </div>
            <div>
              <img src={icon} />
            </div>
          </div>
        </div>
        <div className="flex justify-between  mt-6">
          <h2 className="font-bold">Paragraph font size</h2>
          <p className="text-[#E55527]">19</p>
        </div>
        <progress
          className="progress progress-error w-42 "
          value="70"
          max="100"
        ></progress>

        <div className="mt-5">
          <h2 className="font-bold mb-2">Choose Vitamin Type</h2>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
          >
            <div className="collapse-title text-xl font-medium">
              All Vitamin
            </div>
          </div>
        </div>

        <div className="ml-2 mt-5 flex justify-between">
          <h2 className="font-medium">Turn Off Subtitle</h2>
          <input type="checkbox" className="toggle" disabled />
        </div>

      </div>
      </div>
    );
};

export default RightContent;