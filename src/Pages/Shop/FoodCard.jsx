import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
import useCarts from '../../Hooks/useCarts';

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const {refetch} = useCarts()
  const { name, recipe, price, image } = item;
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (user) {
      axios.post('http://localhost:5000/carts', {
    name,price,image,email:user.email
  })
  .then(function (response) {
    console.log(response);
    refetch()
    	Swal.fire({
  icon: "success",
  title: "Congratulation",
  text: "You are add product successfully",
  
      });
   
  })
  .catch(function (error) {
    console.log(error);
  });
    } else {
      Swal.fire({
  title: "Are you new this website?",
  text: "You must login first!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, login it!"
}).then((result) => {
  if (result.isConfirmed) {
    navigate('/login')
  }
});
    }
  }
  return (
    <div>
       <div>
      <div className="card h-[400px] bg-[#F3F3F3] shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className=" flex flex-col justify-center items-center space-y-2 text-center">
            <h2 className="card-title mt-2">{name }</h2>
            <p className='text-center '>{ recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={handleAddToCart} className="btn btn-outline btn-secondary border-0 border-b-2">ADD TO Cart</button>
    </div>
  </div>
</div>
      
      
      
    </div>
    </div>
  );
};

export default FoodCard;