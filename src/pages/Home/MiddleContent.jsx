import facebook from '../../assets/facebook.png'
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import name from "../../assets/name.png";
import img from "../../assets/img.png";
import apple from '../../assets/apple.png'
import Sidebar from './Sidebar';
import Dropdoun from './Dropdoun';

const MiddleContent = () => {
    return (
      <section>
        <div className='lg:hidden block mb-3'>
          <Dropdoun></Dropdoun>
        </div>
        
        <div className="bg-white rounded-xl p-5">
          <div className="flex lg:flex-row flex-col">
            <div className="space-y-6 mt-10 lg:block hidden">
              <img src={facebook} />
              <img src={linkedin} />
              <img src={twitter} />
              <img src={name} />
            </div>

            <div className="flex-1 lg:ml-5 lg:max-w-screen-lg w-full h-auto lg:max-h-screen">
              <h2 className="text-2xl lg:text-4xl font-extrabold">
                Health benefits of an avocado
              </h2>
              <h3 className="lg:my-2  mt-6 text-xl font-bold">
                Supports eye health:{" "}
              </h3>
              <p className="">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.
              </p>
            </div>

            <div className="flex-1 mt-6 lg:mt-0 lg:ml-4 ml-0 lg:w-[520px] w-full">
              <img src={img} />
            </div>
          </div>

          <div>
            <div className="mt-10 ml-0 lg:ml-10">
              <h2 className="lg:text-xl text-sm font-bold  mb-2 lg:mb-4">
                Supports eye health:{" "}
              </h2>
              <p className="text-justify">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration..
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration..
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-11  mt-10  w-full lg:max-w-[1030px] lg:min-h-full">
            <div className="flex-1">
              <img src={apple} className="" />
            </div>
            <div className="flex-1 mt-4">
              <h2 className="font-bold text-sm lg:text-xl">
                Supports eye health:{" "}
              </h2>
              <p className="text-justify">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration.. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision.
              </p>
            </div>
          </div>

          <div className="lg:ml-10 ml-0 mt-10">
            <h2 className="lg:font-extrabold text-sm font-bold lg:text-xl mb-2">
              Was this helpful?
            </h2>
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

          <div className="flex gap-5 mt-6 lg:hidden">
            <img src={facebook} />
            <img src={linkedin} />
            <img src={twitter} />
            <img src={name} />
          </div>
        </div>

        <div className="lg:hidden block">
          <Sidebar></Sidebar>
        </div>

      </section>
    );
};

export default MiddleContent;