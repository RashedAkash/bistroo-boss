import img from '../../../assets/menu/pizza-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Menu = () => {
  return (
    <div className='bg-img my-16 bg-fixed '>
       <div className='bg-black bg-opacity-50 py-10 text-white '>
        <SectionTitle  heading='FROM OUR MENU' subHeading='---Check it out---'/>
      </div>
      <div className="hero h-full pb-16 bg-black bg-opacity-50 ">
       
  <div className="hero-content flex-col lg:flex-row">
          <div className=' w-1/2'>
            <img src={ img} className=" rounded-lg shadow-2xl" />
    </div>
    <div className='  text-white w-1/2 text-start'>
      <h1 className="text-xl">March 20, 2023 <br />
WHERE CAN I GET SOME?
</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
      <button className="btn btn-outline border-0 btn-secondary e border-b-2">Read More</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Menu;