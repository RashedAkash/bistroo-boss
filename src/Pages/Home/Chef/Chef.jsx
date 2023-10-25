import img from '../../../assets/menu/soup-bg.jpg';
import img2 from '../../../assets/menu/salad-bg.jpg';
import img3 from '../../../assets/menu/pizza-bg.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Chef = () => {
  return (
    <div className='py-16'>
      <div>
        <SectionTitle heading='CHEF RECOMMENDS' subHeading='---Should Try---'/>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16'>
      <div className="card  bg-[#F3F3F3] shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className=" flex flex-col justify-center items-center space-y-2 text-center">
    <h2 className="card-title mt-2">Caeser Salad!</h2>
    <p className='text-center '>ILettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline btn-secondary border-0 border-b-2">ADD TO Cart</button>
    </div>
  </div>
</div>
      <div className="card  bg-[#F3F3F3] shadow-xl">
  <figure><img src={img2} alt="Shoes" /></figure>
  <div className=" flex flex-col justify-center items-center space-y-2 text-center">
    <h2 className="card-title mt-2">Caeser Salad!</h2>
    <p className='text-center '>ILettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline btn-secondary border-0 border-b-2">ADD TO Cart</button>
    </div>
  </div>
</div>
      <div className="card  bg-[#F3F3F3] shadow-xl">
  <figure><img src={img3} alt="Shoes" /></figure>
  <div className=" flex flex-col justify-center items-center space-y-2 text-center">
    <h2 className="card-title mt-2">Caeser Salad!</h2>
    <p className='text-center '>ILettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-outline btn-secondary border-0 border-b-2">ADD TO Cart</button>
    </div>
  </div>
</div>
      
    </div>
    </div>
  );
};

export default Chef;