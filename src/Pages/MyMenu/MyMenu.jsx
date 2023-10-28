
import useMenus from '../../Hooks/useMenu';
import Cover from '../../components/SectionTitle/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'

const MyMenu = () => {
  const {menus} = useMenus();
  console.log(menus);
  return (
    <div>
      <Cover img={menuImg} title='OUR MENU' pra='Would you like to try a dish?'/>
    </div>
  );
};

export default MyMenu;