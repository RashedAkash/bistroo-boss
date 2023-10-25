import React from 'react';
import Banner from './Banner/Banner';
import Order from './Order/Order';
import BistroBoss from './BistroBoss/BistroBoss';
import Menu from './Menu/Menu';
import Call from './Call/Call';
import Chef from './Chef/Chef';

const Home = () => {
  return (
    <div>
      <Banner />
      <Order />
      <BistroBoss />
      <Call />
      <Chef />
     <Menu />
    </div>
  );
};

export default Home;