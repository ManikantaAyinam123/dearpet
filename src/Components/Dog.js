import React from 'react'
import controls from './Import'
const Dog = () => {

  const navigate=controls.useNavigate();
 
  return (
   <controls.Grid container sx={{width:'100%',display:'flex',justifyContent:'space-around',cursor:'pointer'}}>
       <controls.Grid item>
        <controls.Typography  sx={{fontSize:'11px',fontWeight:550, }}>Dog Food</controls.Typography>
        <controls.Typography  sx={{mt:3,mb:3,fontSize:'11px',fontWeight:550}} >Dog Toys</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:550}}>Hygiene & Care</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Oral Care</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Strains & Odour Control</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Litter Training</controls.Typography>
       
       </controls.Grid>
       <controls.Grid item>
       <controls.Typography onClick={()=> {navigate('/DogTabsPage/dogaccessories')}} sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Dog Accessories</controls.Typography>
       <controls.Typography onClick={()=> {navigate('/DogTabsPage/collar,leash&harness')}}  sx={{mb:1,fontSize:'11px',fontWeight:300}}>Collar,Leash&Harness</controls.Typography>
       <controls.Typography  sx={{mb:1,fontSize:'11px',fontWeight:300}}>Bow Tie</controls.Typography>
       <controls.Typography  sx={{fontSize:'11px',fontWeight:550,mt:3,mb:3 }}>Travel & Utilities</controls.Typography>
       <controls.Typography  sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Dear Pet Collections</controls.Typography>
       <controls.Typography  sx={{mb:1,fontSize:'11px',fontWeight:300}}>Double Trouble Collection</controls.Typography>
       <controls.Typography  sx={{mb:1,fontSize:'11px',fontWeight:300}}>Something's Fishy Collection</controls.Typography>
       <controls.Typography  sx={{mb:1,fontSize:'11px',fontWeight:300}}>Classic Collection</controls.Typography>
      
       </controls.Grid>
       <controls.Grid item>
        <controls.Typography  sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Dog Beds & Crates</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Beds & Crates</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Furniture & Scratcher</controls.Typography>
        <controls.Typography  sx={{ mt:3,mb:1,fontSize:'11px',fontWeight:550, }}>Dear Pet Fav's</controls.Typography>
        <controls.Typography sx={{fontSize:'11px',fontWeight:300}}>Twin with your Pet</controls.Typography>
        <controls.Typography  sx={{mb:1, mt:3,fontSize:'11px',fontWeight:550, }}>Winter Collection</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Jackets</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Sweaters</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Mufflers</controls.Typography>
       </controls.Grid>
       <controls.Grid item>
        <controls.Typography sx={{ mb:1,fontSize:'11px',fontWeight:550, }}>Dog Bowls</controls.Typography>
        <controls.Typography sx={{ mt:3,mb:1,fontSize:'11px',fontWeight:550, }}>Dog Gromming</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Syhampoos & Conditioners</controls.Typography>
        <controls.Typography sx={{mb:1,fontSize:'11px',fontWeight:300}}>Brushes & Combs</controls.Typography>
        <controls.Typography sx={{fontSize:'11px',fontWeight:300}}>Towels & Wipes</controls.Typography>
       </controls.Grid>

   </controls.Grid>

  )
}

export default Dog
