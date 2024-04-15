import React from 'react';
import Appbar1 from '../Components/Appbar1';
import Appbar2 from '../Components/Appbar2';
import Homecarousel1 from '../Components/Homecarousel1';
import Homeshopfordogs from '../Components/Homeshopfordogs';
import Homecustomable from '../Components/Homecustomable';
import Homeshopessentials from '../Components/Homeshopessentials';
import Homecustomisable2 from '../Components/Homecustomisable2';
import Homecustomerfavouries from '../Components/Homecustomerfavouries';
import Homedearpetrecomndations from '../Components/Homedearpetrecomndations';
import Homecollections from '../Components/Homecollections';
import Homeonlinepet from '../Components/Homeonlinepet';
import HomeBrand from '../Components/HomeBrand';
import Homeshop from '../Components/Homeshop';
import Homenewsletter from '../Components/Homenewsletter';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://dearpet.in/cdn/shop/files/newsletter_2_2048x.jpg?v=1613583588")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh', 
     
    }}>
      <Appbar1 />
      <Appbar2 />
      <Homecarousel1 />
      <Homeshopfordogs />
      <Homecustomable />
      <Homeshopessentials />
      <Homecustomisable2 />
      <Homecustomerfavouries />
      <Homedearpetrecomndations />
      <Homecollections />
      <Homeonlinepet />
      <HomeBrand />
      <Homeshop />
      <Homenewsletter />
      <Footer/>
    </div>
  );
};

export default HomePage;
