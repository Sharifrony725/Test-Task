import menu1 from '../../assets/menu-01.png'
const Dropdoun = () => {
    return (
      <div className="collapse collapse-arrow bg-white rounded-lg">
        <input type="radio" />
        <div className="collapse-title flex gap-2 items-center text-xl font-medium">
          <img src={menu1} />
          <h2 className='font-semibold'> Select Food Item</h2>
        </div>
        <div className="collapse-content">
          <p>Food</p>
        </div>
      </div>
    );
};

export default Dropdoun;