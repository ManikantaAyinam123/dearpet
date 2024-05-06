import controls from './Import'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth,google,github } from '../firebase';
import {signInWithPopup} from 'firebase/auth'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Authentication = (props) => {
    const [formClose, setFormClose] = controls.useState(false);
    const [signindata, setSigninData] = controls.useState({ email: '', password: '' });
    const [errors, setErrors] = controls.useState({ email: '', password: '' });
    const navigate = controls.useNavigate();
    // const dbref=ref(db);


    const handleInputChange = (e) => {
        setSigninData({ ...signindata, [e.target.name]: e.target.value });
    };

//Login
    const handleLogin = async() => {
        let dataIsValid = true;
        const errormsgs = { email: '', password: '', isUserExist: '' };
        console.log(signindata);
        if (!signindata.email.trim()) {
            errormsgs.email = 'Email is required';
            dataIsValid = false;
        }
        if (!signindata.password.trim()) {
            errormsgs.password = 'Password is required';
            dataIsValid = false;
        }
        if (!dataIsValid) {
            setErrors(errormsgs);
            toast.error('Please Fill All Details', {
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
            return;
        }

       try{
        const userCredential = await signInWithEmailAndPassword(auth, signindata.email, signindata.password)
        console.log("User login sucesssfully:", userCredential.user);

        const token = await userCredential.user.getIdToken();
        
        localStorage.setItem('accessToken', token);
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
        setFormClose(true);
       
       
       }
       catch(error){
        console.log("Error", error.message);
        console.log("Error", error.code);
        toast.error(error.code, {
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
       }
        
         
    }
    //Google Authentication
    const handleGoogleAuthentication =()=>{
        signInWithPopup(auth,google)
        .then((userCredential)=>{
           
            const token = userCredential.user.getIdToken();
        
            localStorage.setItem('accessToken', token);
            console.log(token);
            console.log("google data",userCredential);
           
            setFormClose(true);
            toast.success('Login Successfully!', {
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
        })
       .catch((error)=>{
        console.log("Error google Sign in",error);
       })
    }
//Github Authentication
 const handelGithubAuthentication=()=>{
    signInWithPopup(auth,github)
    .then((userCredential)=>{
        const token =userCredential.user.getIdToken();
        console.log("github user",userCredential.user);
        localStorage.setItem('accessToken',token);
        console.log("token github",token);
        setFormClose(true);
        toast.success('Login Successfully!', {
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
    })
 }
 controls.useEffect(() => {
        if (formClose) {

            window.location.reload();
        }
    }, [formClose]);


    return (
        <>
            {!formClose &&
                <controls.Grid sx={{ minWidth: 400, padding: '15px 30px 100px 30px',border:'1px solid black',postion:'absolute', marginTop: {} }}>
                    <controls.Grid item sx={{ display: 'flex',justifyContent:'end', top: '0px', right: '0px', marginBottom: '0px', fontWeight: 700 }}> <controls.IconButton onClick={() => setFormClose(true)}> <controls.Icon icon="iconoir:cancel" width="18" height="18" /><controls.Typography sx={{ fontSize: '12px', fontWeight: 700, ml: '2px' }}>
                        CLOSE</controls.Typography></controls.IconButton></controls.Grid>
                    <controls.Box sx={{ mt: '40px' }}> <controls.Typography sx={{ fontSize: '13px', fontWeight: 700, }}>CUSTOMER LOGIN:</controls.Typography></controls.Box>
                    <controls.Divider sx={{ mt: 2 }} />
                    <controls.Grid container sx={{ display: 'flex', flexDirection: 'column' }}>

                        <controls.Typography sx={{ marginTop: { md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}> Email Address<controls.Box component="span" sx={{ color: '#F1152F' }}>*</controls.Box></controls.Typography>
                        <controls.TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0 } }} placeholder='Email Adress' name="email" type="email" onChange={handleInputChange} />
                        {errors.email && <controls.Typography color="error">{errors.email}</controls.Typography>}

                        <controls.Typography sx={{ marginTop: { md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Password <controls.Box component="span" sx={{ color: '#F1152F' }}>*</controls.Box></controls.Typography>
                        <controls.TextField InputProps={{ sx: { width: '40ch', height: '38px', borderRadius: 0 } }} placeholder='Password' name="password" type="password" onChange={handleInputChange} />
                        {errors.password && <controls.Typography color="error">{errors.password}</controls.Typography>}
                        <controls.Grid >

                            <controls.Button
                                onClick={handleLogin}
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '353px',
                                    height: '34px',
                                    backgroundColor: '#FFFFFF',
                                    color: '#000000',
                                    border: '1px solid #000000',
                                    fontWeight: 550,
                                    marginTop: '20px',
                                    '&:hover':{backgroundColor:'black',color:'white'}
                                }}

                            >
                                LOGIN
                            </controls.Button>
                            {errors.isUserExist && <controls.Typography color="error">{errors.isUserExist}</controls.Typography>}
                        </controls.Grid>
                        <controls.Grid item sx={{ mt: 2 }}>
                            <controls.Box sx={{ display: 'flex', justifyContent: 'center' }}> <controls.Typography>Forgot your password?</controls.Typography></controls.Box>
                        </controls.Grid>
                        <controls.Grid sx={{ mt: 2 }}>
                            <controls.Button onClick={() => navigate('/CreateAccountPage')}
                                variant="outlined"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '353px',
                                    height: '34px',
                                    backgroundColor: '#232323',
                                    color: '#FFFFFF',
                                    border: '1px solid #000000',
                                    '&:hover':{color:'black',backgroundColor:'#FFFFFF',border:' 1px solid black'}
                                
                                }}
                            >
                                CREATE AN Account
                            </controls.Button>
                        </controls.Grid>
                        <controls.Grid item sx={{display:'flex',alignItems:'center',marginTop:'20px'}}>
                        <controls.Divider sx={{ flexGrow: 0.5, backgroundColor: { xs: '#FFFFFF'},marginRight:'10px' }} />
                        <controls.Typography sx={{fontSize:'20px'}}>or</controls.Typography>
                        <controls.Divider sx={{ flexGrow: 0.5, backgroundColor: { xs: '#FFFFFF'},marginLeft:'10px' }} />

                        </controls.Grid>
                        <controls.Button onClick={handleGoogleAuthentication} sx={{marginTop:'30px',width:'350px',border:'1px solid black' ,color:'black',letterSpacing:'0.1em',gap:'10px',}}><controls.Icon sx={{marginLeft:'20px !important'}} icon="flat-color-icons:google" width="24" height="24" /><span sx={{marginLeft:'10px !important'}}>Continue With Google</span></controls.Button>
                        <controls.Button onClick={handelGithubAuthentication} sx={{marginTop:'30px',width:'350px',border:'1px solid black' ,color:'#FFFFFF',letterSpacing:'0.1em',gap:'10px',backgroundColor:'black','&:hover':{color:'black'}}}><controls.Icon icon="mdi:github" width="24" height="24" />Continue With Github</controls.Button>
                    </controls.Grid>

                </controls.Grid>
            }
            <ToastContainer />
        </>
    )
}

export default Authentication
