import React from 'react';
import Homecarousel1 from '../Components/HomeCarousel1';
import Homeshopfordogs from '../Components/HomeShopForDogs';
import Homecustomable from '../Components/HomeCustomable';
import Homeshopessentials from '../Components/HomeShopEssentials';
import Homecustomisable2 from '../Components/HomeCustomisable2';
import Homecustomerfavouries from '../Components/HomeCustomerFavouries';
import Homedearpetrecomndations from '../Components/HomeDearpetRecomndations';
import Homecollections from '../Components/HomeCollections';
import Homeonlinepet from '../Components/HomeOnlinepet';
import HomeBrand from '../Components/HomeBrand';
import Homeshop from '../Components/HomeShop';
import Homenewsletter from '../Components/HomeNewsletter';
import Layout from '../Components/Layout';


const HomePage = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://dearpet.in/cdn/shop/files/newsletter_2_2048x.jpg?v=1613583588")',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',

    }}>

      <Layout>
        <div>

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
         

        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
