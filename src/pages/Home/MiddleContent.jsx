import facebook from '../../assets/facebook.png'
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import name from "../../assets/name.png";
import img from "../../assets/img.png";
import apple from '../../assets/apple.png'

const MiddleContent = () => {
    return (
      <div className="bg-white rounded-xl p-5">
        <div className="flex">
          <div className="space-y-6 mt-10">
            <img src={facebook} />
            <img src={linkedin} />
            <img src={twitter} />
            <img src={name} />
          </div>

          <div className="flex-1 ml-5 max-w-screen-lg max-h-screen">
            <h2 className="text-4xl font-extrabold">
              Health benefits of an avocado
            </h2>
            <h3 className="my-2 text-xl font-bold">Supports eye health: </h3>
            <p className="">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
          </div>

          <div className="flex-1 ml-4 w-[520px]">
            <img src={img} />
          </div>
        </div>

        <div>
          <div className="mt-10 ml-10">
            <h2 className="text-xl font-bold mt-4">Supports eye health: </h2>
            <p>
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.. Spinach contains high levels of vitamin A
              and other antioxidants that help maintain healthy vision and
              protect against age-related macular degeneration.. Spinach
              contains high levels of vitamin A and other antioxidants that help
              maintain healthy vision and protect against age-related macular
              degeneration.. Spinach contains high levels of vitamin A and other
              antioxidants that help maintain healthy vision and protect against
              age-related macular degeneration.. Spinach contains high levels of
              vitamin A and other antioxidants that help maintain healthy vision
              and protect against age-related macular degeneration.. Spinach
              contains high levels of vitamin A and other antioxidants that help
              maintain healthy vision and protect against age-related macular
              degeneration.. Spinach contains high levels of vitamin A and other
              antioxidants that help maintain healthy vision and protect against
              age-related macular degeneration..
            </p>
          </div>
        </div>

        <div className="flex gap-11 ml-10 mt-10 max-w-[1030px] min-h-full">
          <div className="flex-1">
            <img src={apple} className="" />
          </div>
          <div className="flex-1 mt-4">
            <h2 className="font-bold text-xl">Supports eye health: </h2>
            <p className="align-text-top">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.. Spinach contains high levels of vitamin A
              and other antioxidants that help maintain healthy vision.
            </p>
          </div>
        </div>

        <div className="ml-10 mt-10 ">
          <h2 className="font-extrabold text-xl mb-2">Was this helpful?</h2>
          <div className="rating ">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#E55527]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#E55527]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#E55527]"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#E55527]"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-[#E55527]"
            />
          </div>
        </div>
      </div>
    );
};

export default MiddleContent;