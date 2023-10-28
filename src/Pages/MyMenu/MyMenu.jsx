
import useMenus from '../../Hooks/useMenu';
import Cover from '../../components/SectionTitle/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const MyMenu = () => {
  const [menus] = useMenus();
  
  const offerItem = menus.filter(menu => menu.category === 'offered');
  const dessertsItem = menus.filter(menu => menu.category === 'dessert');
  const pizzaItem = menus.filter(menu => menu.category === 'pizza');
  const saladsItem = menus.filter(menu => menu.category === 'salad');
  const soupItem = menus.filter(menu => menu.category === 'soup');
 
  
  
  return (
    <div className='py-10'>
      <Cover img={menuImg} title='OUR MENU' pra='Would you like to try a dish?' />


      
      {/* offerItem */}

      <div className='py-10'>
        <SectionTitle heading='TODAY OFFER' subHeading='---Do not miss---'/>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
           {
          offerItem.map(item => <MenuItem key={item._id} item={item}/>)
        }
       </div>
      </div>


      {/* dessertsItem */}
      <div>
        <Cover img={dessertImg} title='DESSERTS' pra='Would you like to try a dish?' />
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 py-10'>
          
           {
          dessertsItem.map(item => <MenuItem key={item._id} item={item}/>)
        }
       </div>
      </div>
      
      {/* pizzaItem */}
       <div>
        <Cover img={pizzaImg} title='PIZZA' pra='Would you like to try a dish?' />
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 py-10'>
          
           {
          pizzaItem.map(item => <MenuItem key={item._id} item={item}/>)
        }
       </div>
      </div>
      {/* saladsItem */}
       <div>
        <Cover img={saladImg} title='SALADS' pra='Would you like to try a dish?' />
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 py-10'>
          
           {
          saladsItem.map(item => <MenuItem key={item._id} item={item}/>)
        }
       </div>
      </div>
      {/* soupsItem */}
       <div>
        <Cover img={soupImg} title='SOUPS' pra='Would you like to try a dish?' />
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 py-10'>
          
           {
          soupItem.map(item => <MenuItem key={item._id} item={item}/>)
        }
       </div>
      </div>
    </div>

  );
};

export default MyMenu;