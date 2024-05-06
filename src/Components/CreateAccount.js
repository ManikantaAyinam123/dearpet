import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import controls from './Import'

const CreateAccount = () => {
  const [formdata, setFormdata] = controls.useState({ name: '', lastname: '', email: '', password: '' });
  const [errors, setErrors] = controls.useState({ name: '', lastname: '', email: '', password: '', dataExist: '' });
  const [username,setUserName] =controls.useState('');
  const navigate = controls.useNavigate();
  const token=localStorage.getItem('accessToken');
  console.log("create account",token);

 

  const handleInputChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmission = async () => {
    let formIsValid = true;
    const newErrors = { name: '', lastname: '', email: '', password: '', dataExist: '' };

    if (!formdata.name.trim()) {
      newErrors.name = 'First name is required';
      formIsValid = false;

    } else if (!isNaN(formdata.name)) {
      newErrors.name = 'First name should not contain numbers';
      formIsValid = false;
    }

    if (!formdata.lastname.trim()) {
      newErrors.lastname = 'Last name is required';
      formIsValid = false;
    } else if (!isNaN(formdata.lastname)) {
      newErrors.lastname = 'First name should not contain numbers';
      formIsValid = false;
    }

    if (!formdata.email.trim()) {
      newErrors.email = 'Email is required';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = 'Email is invalid';
      formIsValid = false;
    }

    if (!formdata.password.trim()) {
      newErrors.password = 'Password is required';
      formIsValid = false;
    } else if (formdata.password.length < 6) {
      newErrors.password = 'Password should contain at least 6 characters';
      formIsValid = false;
    }

    if (!formIsValid) {
      toast.error('please fill all details', {
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
      setErrors(newErrors);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formdata.email, formdata.password);
      console.log("User created successfully:", userCredential.user);
      updateProfile(userCredential.user, { displayName: formdata.name + " " + formdata.lastname })

      const token = await userCredential.user.getIdToken();

      localStorage.setItem('accessToken', token);

      
      navigate('/');
      toast.success('Signed Up Sucessfully', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

      
    } catch (error) {
      console.error("Error creating user:", error);
      newErrors.dataExist = 'User already exists';
      setErrors(newErrors);
    }
  };

  controls.useEffect(() =>{
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        setUserName(user.displayName);
        if (user.displayName === null) {
          const userEmail = user.email;
          const username = userEmail.split("@")[0];
          console.log(username);
          setUserName(username);
        }
      }

    });
   
   }, []);

  return (
    <>
    {!token ?(
      <controls.Grid container sx={{ justifyContent: 'center' }}>

      <controls.Grid item sx={{ width: '85%', justifyContent: 'center', marginTop: { xs: '20px', md: '20px' }, marginBottom: { xs: '10px' } }}>
        <controls.Typography sx={{ marginBottom: { xs: '10px' }, fontSize: { xs: '10px', sm: '12px' }, fontWeight: '200' }}>
          <controls.Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</controls.Link> {'>'} CreateAccount
        </controls.Typography>
        <controls.Typography sx={{ fontSize: { xs: '15px', md: '23px' }, fontWeight: { xs: '700', md: '700' } }}>CREATE AN ACCOUNT</controls.Typography>
        <controls.Divider sx={{ marginTop: { xs: '20px', md: '20px' } }} />
        <controls.Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { xs: '15px' } }}>Sign up for a free account at Dearpet.</controls.Typography>
        <controls.Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>First Name</controls.Typography>
        <controls.TextField InputProps={{ sx: { width: { xs: '30ch', md: '40ch' }, height: '38px', borderRadius: 0 } }} name="name" type="text" value={formdata.name} onChange={handleInputChange} />
        {errors.name && <controls.Typography color="error">{errors.name}</controls.Typography>}
        <controls.Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Last Name</controls.Typography>
        <controls.TextField InputProps={{ sx: { width: { xs: '30ch', md: '40ch' }, height: '38px', borderRadius: 0 } }} name="lastname" type="text" value={formdata.lastname} onChange={handleInputChange} />
        {errors.lastname && <controls.Typography color="error">{errors.lastname}</controls.Typography>}
        <controls.Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Your Email Address</controls.Typography>
        <controls.TextField InputProps={{ sx: { width: { xs: '30ch', md: '40ch' }, height: '38px', borderRadius: 0 } }} name="email" type="email" value={formdata.email} onChange={handleInputChange} />
        {errors.email && <controls.Typography color="error">{errors.email}</controls.Typography>}
        <controls.Typography sx={{ marginTop: { xs: '20px', md: '20px' }, fontSize: { md: '13px' }, marginBottom: { md: '10px' } }}>Password</controls.Typography>
        <controls.TextField InputProps={{ sx: { width: { xs: '30ch', md: '40ch' }, height: '38px', borderRadius: 0 } }} name="password" type="password" value={formdata.password} onChange={handleInputChange} />
        {errors.password && <controls.Typography color="error">{errors.password}</controls.Typography>}
        <controls.Box sx={{ marginTop: { xs: '20px', md: '20px' }, color: 'black' }}>{errors.dataExist && <controls.Typography color="error">{errors.dataExist}</controls.Typography>} <controls.Button onClick={handleSubmission} sx={{ color: 'black', fontWeight: 700, borderColor: 'black' }} variant='outlined'> CREATE AN ACCOUNT</controls.Button></controls.Box>
      </controls.Grid>
    </controls.Grid>
    ):(<controls.Grid container sx={{justifyContent:'center',marginTop:'15px'}}>
       <controls.Grid item width={'90%'} >
        <controls.Typography sx={{fontSize:'18px',fontWeight:'700',color:'#070112',letterSpacing:'0.4px',marginTop:'15px'}}>MY ACCOUNT</controls.Typography>
        <controls.Typography sx={{fontSize:'15px',fontWeight:'700',color:'#070112',letterSpacing:'0.6px',marginTop:'50px'}}>ORDER HISTORY</controls.Typography>
        <controls.Divider sx={{marginTop:'8px'}}></controls.Divider>
        <controls.Typography sx={{marginTop:'20px'}}>You haven't placed any orders yet.</controls.Typography>
        <controls.Typography sx={{fontSize:'15px',fontWeight:'700',color:'#070112',letterSpacing:'0.4px',marginTop:'50px'}}>ACCOUNT DETAILS</controls.Typography>
        <controls.Divider sx={{marginTop:'8px'}}></controls.Divider>
         <controls.Typography sx={{fontSize:'13px',letterSpacing:'0.7px',marginTop:'20px'}}>{username}</controls.Typography>
         <controls.Typography sx={{fontSize:'14px',letterSpacing:'0.7px',marginTop:'20px'}}>India</controls.Typography>
         <controls.Button sx={{backgroundColor:'#070112',fontWeight:'bold',letterSpacing:'0.7px',color:'#FFFFFF',borderRadius:'0px',marginTop:'50px',marginBottom:'50px'}}>VIEW ADDRESS{' (1)'}</controls.Button>

       </controls.Grid>
    </controls.Grid>)}
    
     <ToastContainer />
     </>
  );
};

export default CreateAccount;
