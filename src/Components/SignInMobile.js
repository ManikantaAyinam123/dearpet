import controls from './Import'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInMobile = () => {
    const [signindata, setSigninData] = controls.useState({ email: '', password: '' });
  
    let navigate = controls.useNavigate();
    const handleInputChange = (e) => {
        setSigninData({ ...signindata, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {


        console.log(signindata);


        try {
            const userCredential = await signInWithEmailAndPassword(auth, signindata.email, signindata.password)
            console.log("User login sucesssfully:", userCredential.user);

            const token = await userCredential.user.getIdToken();

            localStorage.setItem('accessToken', token);
            console.log(localStorage.getItem('accessToken'))
            toast.success('Signed In Sucessfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
            navigate('/');

        }
        catch (error) {
            console.log("Error", error.message);
            console.log("Error", error.code);
            
        }


    }
    return (
        <>
       
              <controls.Grid container sx={{ justifyContent: 'center' }}>

              <controls.Grid item sx={{ width: '85%', justifyContent: 'center', border: '', marginTop: { xs: '15px', md: '20px' } }}>
                  <controls.Typography sx={{ marginBottom: { xs: '10px' }, fontSize: { xs: '10px', sm: '12px' }, fontWeight: '200' }}>
                      <controls.Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</controls.Link> {'>'} CreateAccount
                  </controls.Typography>
                  <controls.Typography sx={{ fontSize: { xs: '20px' }, fontWeight: '550', letterSpacing: '0.5px' }}>Account</controls.Typography>
                  <controls.Typography sx={{ textAlign: 'center', padding: '15px', marginTop: { xs: '15px' }, fontSize: { xs: '18px' }, fontWeight: { xs: '700' }, letterSpacing: '0.5px', backgroundColor: '#FAFAFA', borderBottom: '1px solid #e0e0e0', borderTop: '1px solid #e0e0e0' }}>RETURNING CUSTOMER</controls.Typography>
                  <controls.Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { xs: '10px', md: '10px' } }}> Email Address<controls.Box component="span" sx={{ color: '#F1152F' }}>*</controls.Box></controls.Typography>
                  <controls.TextField InputProps={{ sx: { width: { xs: '30ch' }, height: '38px', borderRadius: 0 } }} placeholder='Email Adress' name="email" type="email" onChange={handleInputChange} />
  
  
                  <controls.Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { xs: '10px', md: '10px' } }}>Password <controls.Box component="span" sx={{ color: '#F1152F' }}>*</controls.Box></controls.Typography>
                  <controls.TextField InputProps={{ sx: { width: { xs: '30ch' }, height: '38px', borderRadius: 0 } }} placeholder='Password' name="password" type="password" onChange={handleInputChange} />
  
                  <controls.Grid >
                      <controls.Button onClick={handleLogin} variant="outlined" sx={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30%', height: '34px', backgroundColor: '#FFFFFF', color: '#000000', border: '1px solid #000000', fontWeight: 550, marginTop: '20px'
                      }}>
                          LOGIN
                      </controls.Button>
  
                  </controls.Grid>
                  <controls.Typography sx={{fontSize:'13px',marginTop:{xs:'10px'}}}>Forget password? or return to store</controls.Typography>
                  <controls.Typography sx={{ textAlign: 'center', padding: '15px', marginTop: { xs: '15px' }, fontSize: { xs: '18px' }, fontWeight: { xs: '700' }, letterSpacing: '0.5px', backgroundColor: '#FAFAFA', borderBottom: '1px solid #e0e0e0', borderTop: '1px solid #e0e0e0' }}>NEW CUSTOMER</controls.Typography>
                  <controls.Typography sx={{fontSize:{xs:'13px'},marginTop:{xs:'15px'}}}>Register with us for a faster checkout,to track the status of your order and more.</controls.Typography>
                  <controls.Grid container sx={{justifyContent:'center'}}><controls.Button onClick={() => navigate('/CreateAccountPage')}variant="outlined"
                       sx={{display: 'flex',alignItems: 'center',borderRadius:'0px',justifyContent: 'center',width: '200px',height: '34px',backgroundColor: '#232323',color: '#FFFFFF',marginTop:'20px',marginBottom:'20px'}}>
                                  CREATE AN Account
                  </controls.Button>
                  </controls.Grid>
  
              </controls.Grid>
          </controls.Grid>
    
      
        <ToastContainer />
        </>
    )
}

export default SignInMobile
