import controls from './Import'
import { auth } from '../firebase';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserExists = () => {
  const [formClose, setFormClose] = controls.useState(false);
  const [username,setUserName] =controls.useState('');

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out successfully.');
        localStorage.removeItem('accessToken');
        setFormClose(true); 
        toast.success('Signout Successfully!', {
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
      .catch((error) => {
        console.error('Error signing out:', error);
      });
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
    if (formClose) {

      window.location.reload();
  }
   }, [formClose]);

  return (

  <>
    {!formClose && (
      <controls.Grid sx={{ minWidth: 400, padding: '15px 30px 100px 30px', position: 'relative', marginTop: {} }}>
        <controls.Box sx={{ display: 'flex', position: 'absolute', top: '20px', right: '30px', marginBottom: '50px', fontWeight: 700 }}> <controls.IconButton onClick={() => setFormClose(true)}> <controls.Icon icon="iconoir:cancel" width="18" height="18" /><controls.Typography sx={{ fontSize: '12px', fontWeight: 500, ml: '2px' }}>
          CLOSE</controls.Typography></controls.IconButton></controls.Box>
        <controls.Box sx={{ mt: '50px' }}> <controls.Typography sx={{ fontSize: '13px', fontWeight: 700,textTransform:'uppercase',letterSpacing:'0.5px' }}>{username}</controls.Typography></controls.Box>
        <controls.Divider sx={{ mt: 2 }} />
        <controls.Typography sx={{ textAlign: 'center',marginTop:'20px' }}>My Account </controls.Typography>

        <controls.Button onClick={handleSignOut}variant="outlined"sx={{marginTop:'15px',display: 'flex',alignItems: 'center',justifyContent: 'center',width: '353px',height: '34px',backgroundColor: '#232323',color: '#FFFFFF',border: '1px solid #000000',fontWeight:'700'}}>
          LOG OUT
        </controls.Button>
        
     </controls.Grid>
   )}
    <ToastContainer />
    </>
    
   
    
  
  );
};


export default UserExists;
