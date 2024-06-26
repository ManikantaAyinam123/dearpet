import React from 'react'
import controls from './Import'
const PuppyPedia = () => {
  return (
    <controls.Grid container justifyContent={'center'}>
        <controls.Grid item width="98%">
          <img src="https://cdn.shopify.com/s/files/1/0531/2475/9744/files/top_banner.jpg?v=1627904505" width="100%" height="auto"></img>
       </controls.Grid>
       '<controls.Grid item width="80%" textAlign={'center'} marginTop={'10px'}>
        <controls.Typography sx={{fontSize:{xs:'16px',sm:'22px',md:'24px'},fontFamily:'Source Sans Serif',lineHeight:'1.4',color:'#2232323'}}>Dogs in their puppy stage are too fragile to handle rough & tough situations, especially when it comes to food. Therefore it is crucial to opt for a tailor-made diet which can fill their nutrition charts & help them grow healthy.</controls.Typography>

       </controls.Grid>
    </controls.Grid>
  )
}

export default PuppyPedia
