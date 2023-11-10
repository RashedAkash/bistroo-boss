import { Tab, Tabs, TabList, TabPanel, } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenus from '../../Hooks/useMenu';
import FoodCard from './FoodCard';
import { useState } from 'react';

const Shop = () => {
     
  const [menus] = useMenus()
   const [tabIndex, setTabIndex] = useState(0);
  
  const dessertsItem = menus.filter(menu => menu.category === 'dessert');
  const pizzaItem = menus.filter(menu => menu.category === 'pizza');
  const saladsItem = menus.filter(menu => menu.category === 'salad');
  const soupItem = menus.filter(menu => menu.category === 'soup');
  return (
        <div className='py-10'>
             
              <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    
    <TabList>
      <Tab>SALAD</Tab>
      <Tab>PIZZA</Tab>
      <Tab>SOUPS</Tab>
      <Tab>DESSERTS</Tab>
      <Tab>DRINKS</Tab>
      
    </TabList>

    <TabPanel>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
            {
            saladsItem.map(item => <FoodCard key={item._id} item={item} />)
      }
          </div>
    </TabPanel>
    <TabPanel>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
            {
            pizzaItem.map(item => <FoodCard key={item._id} item={item} />)
      }
          </div>
    </TabPanel>
    <TabPanel>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
            {
            soupItem.map(item => <FoodCard key={item._id} item={item} />)
      }
          </div>
    </TabPanel>
    <TabPanel>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
            {
            dessertsItem.map(item => <FoodCard key={item._id} item={item} />)
      }
          </div>
    </TabPanel>
    <TabPanel>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
            {
            saladsItem.map(item => <FoodCard key={item._id} item={item} />)
      }
          </div>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Shop;