
import useMenus from '../../Hooks/useMenu';
import Cover from '../../components/SectionTitle/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const MyMenu = () => {
  const [menus] = useMenus();
  
  const offerItem = menus.filter(menu => menu.category === 'offered');
  
  return (
    <div className='py-10'>
      <Cover img={menuImg} title='OUR MENU' pra='Would you like to try a dish?' />
      <div className='py-10'>
        <SectionTitle heading='TODAY OFFER' subHeading='---Do not miss---'/>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
           {
          offerItem.map(item => <MenuItem key={item._id} item={item}/>)
        }
       </div>
      </div>
    </div>

  );
};

export default MyMenu;