import controls from './Import'
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';

const DetailsCustomerReviews = () => {
  const [value, setValue] = controls.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <controls.Grid container sx={{mt:'50px',justifyContent:'center',display:{xs:'none',sm:'flex'} }}>
        <controls.Grid  item sx={{width:'85%',}}>
       
        <controls.Tabs value={value} onChange={handleChange} aria-label="Tabs">
        <controls.Tab sx={{ border: '1px solid #EEEEEE', backgroundColor: value === 0 ? 'transparent' : '#FAFAFA', borderBottom: value === 0 ? 'none' : undefined }} label="Description" />
        <controls.Tab sx={{ border: '1px solid #EEEEEE', backgroundColor: value === 1 ? 'transparent' : '#FAFAFA',borderBottom: value === 1 ? 'none' : undefined }} label="Features" />
        <controls.Tab sx={{ border: '1px solid #EEEEEE', backgroundColor: value === 2 ? 'transparent' : '#FAFAFA', borderBottom: value === 2 ? 'none' : undefined }} label="Customer Reviews" />
        <controls.Tab sx={{ border: '1px solid #EEEEEE', backgroundColor: value === 3 ? 'transparent' : '#FAFAFA', borderBottom: value === 3 ? 'none' : undefined }} label="FAQs" />
        </controls.Tabs>
      
     
        {value === 0 && (
          <controls.Box sx={{mt:'20px'}}>
            <controls.Typography sx={{fontSize:'15px',lineHeight:'1.6'}} >
      DearPet Ear Muffs – Your Pet's Anxiety-Proof Shield!
      <br />
      Is your dog scared of loud noises?
      Fireworks, thunderstorms, noisy neighbours?
      Say goodbye to your furry friend's anxiety and hello to calm and comfort with our revolutionary PupComfy Ear Muffs!
      <br /><br />
      Noise Reduction:Enjoy peace and quiet while your dog stays calm.<br />
      Weatherproof:Shield your pup from the stress of storms and sudden downpours.<br />
      Happy Neighbors: No more barking and howling—keep the neighbourhood peace.<br />
      Stress-Free Walks: Ensure a comfortable experience for your pup on bustling city streets.<br />
      Better Sleep: Help your dog get a good night's rest without disruptions.<br /><br />
      Your dog deserves a life free from fear and stress. Give them the gift of PupComfy Ear Muffs, and enjoy the harmony it brings to your home.
    </controls.Typography>
          </controls.Box>
        )}
        {value === 1 && (
         <></>
        )}
        {value === 2 && (
         <controls.Grid sx={{border:'1px solid #EEEEEE',mt:'20px'}}>
          <controls.Box sx={{padding:'40px',}}>
          <controls.Typography sx={{color:'#4C4C4C',fontSize:'20px'}}>Customer Reviews</controls.Typography>
          <controls.TextField sx={{borderRadius:'none',color:'A9A8A8',width:'370px'}} size="small" id="outlined-basic" label="Write a review" variant="outlined" />
          <controls.Box sx={{display:'flex'}}>
          <controls.Icon icon="bitcoin-icons:star-outline" width="22" height="22"  style={{color:'#ffcc2d' }} />
          <controls.Icon icon="bitcoin-icons:star-outline" width="22" height="22"  style={{color:'#ffcc2d' }} />
          <controls.Icon icon="bitcoin-icons:star-outline" width="22" height="22"  style={{color:'#ffcc2d' }} />
          <controls.Icon icon="bitcoin-icons:star-outline" width="22" height="22"  style={{color:'#ffcc2d' }} />
          <controls.Icon icon="bitcoin-icons:star-outline" width="22" height="22"  style={{color:'#ffcc2d' }} />
           <controls.Typography sx={{color:'#000000',fontSize:'14px',m:'1px 5px'}}>Be the first to write a reveiw</controls.Typography>

          </controls.Box>
          </controls.Box>
          
          </controls.Grid>
        )}
         <controls.Divider sx={{marginTop:'50px'}}></controls.Divider>
        </controls.Grid>
       
      </controls.Grid>
    </ThemeProvider>
  );
}

export default DetailsCustomerReviews;
