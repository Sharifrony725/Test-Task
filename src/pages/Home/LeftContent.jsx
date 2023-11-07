import search from '../../assets/search.png';
import fruit1 from '../../assets/fruits1.png'
import fruit2 from '../../assets/fruits2.png'
import fruit3 from '../../assets/fruits3.png'

const LeftContent = () => {
    return (
      <div className="bg-white rounded-2xl p-4">
        <div className="border-2 border-pink-100 flex rounded-2xl justify-between p-2">
          <div className="text-[#E55527] bg-pink-100 rounded font-semibold px-4 py-1">
            Fruits
          </div>
          <div className="px-4 py-1">Vegetables</div>
        </div>
        {/* search */}
        <div className="border-2 border-[#F0F2F4]  rounded-2xl justify-between flex items-center p-2 my-4">
          <input type="text" placeholder="Search by Fruits Name" />
          <img src={search} className="bg-pink-100 rounded p-2" />
        </div>
        <div>
          <h2 className="font-medium">Fruits List</h2>
          <div className="flex gap-4 mt-3 border p-2 rounded-2xl border-[#E55527]">
            <img src={fruit1} />
            <div>
              <h2 className="font-medium">Oranges</h2>
              <p>Vitamin C</p>
            </div>
          </div>
          <div className="flex gap-4 mt-3 p-2">
            <img src={fruit2} />
            <div>
              <h2 className="font-medium">Apples</h2>
              <p>Vitamin C</p>
            </div>
          </div>
          <div className="flex gap-4 mt-3 p-2">
            <img src={fruit3} />
            <div>
              <h2 className="font-medium">Avocado</h2>
              <p>Vitamin B6</p>
            </div>
          </div>
          <div className="flex gap-4 mt-3 p-2">
            <img src={fruit3} />
            <div>
              <h2 className="font-medium">Avocado</h2>
              <p>Vitamin B6</p>
            </div>
          </div>
          <div className="flex gap-4 mt-3 p-2">
            <img src={fruit3} />
            <div>
              <h2 className="font-medium">Avocado</h2>
              <p>Vitamin B6</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LeftContent;