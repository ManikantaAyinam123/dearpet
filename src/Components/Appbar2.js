import controls from './Import'
import Authentication from './Authentication';
import MenuContent from './MenuContent';
import Dog from './Dog';
import Cat from './Cat';
import UserExists from './UserExists';
import '../App.css';


const Appbar2 = () => {
  const [isSticky, setIsSticky] = controls.useState(false);
  const [drawerOpen, setDrawerOpen] = controls.useState(false);
  const [userDrawerOpen, setUserDrawerOpen] = controls.useState(false);
  const [userExists, setUserExists] = controls.useState(false);
  const [hoveredTab, setHoveredTab] = controls.useState(-1);

  controls.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleShowDrawer = (value) => {
    setDrawerOpen(value);
  };

  const toggleUserDrawer = (value) => {
    setUserDrawerOpen(value);
  };

  const toggleUserExistsDrawer = (value) => {
    setUserExists(value);
  };

  const handleDrawer = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      toggleUserExistsDrawer(true);
    } else {
      toggleUserDrawer(true);
    }
  };

  const handleTabMouseOver = (index) => {
    setHoveredTab(index);
  };

  const handleTabMouseOut = () => {
    setHoveredTab(-1);
  };

  return (
    <div>
      <controls.AppBar position="static" className={isSticky ? 'sticky-appbar1' : 'static-appbar1'}>

      </controls.AppBar>
      <controls.AppBar position={isSticky ? "fixed" : "static"} className={isSticky ? 'sticky-appbar2' : 'static-appbar2'}>
        <controls.Grid container backgroundColor={'#FFFFFF'} display="flex" direction="row" padding={'5px'}>
          <controls.Grid item sx={{ marginLeft: { xs: 4, lg: 10 } }}>
            <controls.Link to="/">
              <controls.Box component="img" src="https://dearpet.in/cdn/shop/files/logo.png?v=1617976255" sx={{ width: { xs: 30, lg: 45 }, height: { xs: 30, lg: 45 }, marginRight: 0 }} alt="logo" />
            </controls.Link>
          </controls.Grid>

          <controls.Grid item sx={{ marginLeft: 45, display: { xs: 'none', lg: 'block' }, padding: 0 }} onMouseLeave={handleTabMouseOut}>
            <controls.Box sx={{ position: 'relative', }}>
              <controls.Box>
                <controls.Tabs value={-1} aria-label="basic tabs example">
                  <controls.Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="DOG" href="/DogPage" onMouseOver={() => handleTabMouseOver(0)} />
                  <controls.Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="CAT" onMouseOver={() => handleTabMouseOver(1)} />
                  <controls.Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="GROOMING" onMouseOver={() => handleTabMouseOver(2)} />
                  <controls.Tab sx={{ fontSize: '14px', color: "#232323", fontWeight: 550 }} className='Tab' label="BLOG" onMouseOver={() => handleTabMouseOver(3)} />
                </controls.Tabs>
              </controls.Box>
              {(hoveredTab === 0 || hoveredTab === 1) && (
                <controls.Box
                  sx={{
                    position: 'fixed',

                    left: 0,
                    width: '100%',
                    color: 'black',
                    backgroundColor: '#EEEEEE',
                    padding: '30px',
                    zIndex: 9999,
                  }}
                >
                  {hoveredTab === 0 && <Dog />}
                  {hoveredTab === 1 && <Cat />}
                </controls.Box>
              )}
            </controls.Box>
          </controls.Grid>

          <controls.Grid item sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }} >
            <controls.Box sx={{ marginRight: '15px' }}>
              <controls.IconButton sx={{ color: 'black' }}><controls.Icon icon="gridicons:search" width="27" height="27" /></controls.IconButton>
            </controls.Box>
            <controls.Box sx={{ display: { xs: 'none', lg: 'block', marginRight: '15px' } }}>
              <controls.IconButton onClick={handleDrawer} sx={{ color: 'black' }}> <controls.Icon icon="pajamas:user" width="23" height="23" /> </controls.IconButton>
            </controls.Box>

            <controls.Drawer
              anchor="right"
              open={userDrawerOpen}
              onClose={() => toggleUserDrawer(false)}
            >
              <Authentication />
            </controls.Drawer>
            <controls.Drawer
              anchor="right"
              open={userExists}
              onClose={() => toggleUserExistsDrawer(false)}
            >
              <UserExists />
            </controls.Drawer>
            <controls.Box sx={{ marginRight: { xs: '13px', lg: '100px' } }}>
              <controls.IconButton sx={{ color: 'black' }}><controls.Icon icon="flowbite:shopping-bag-outline" width="27" height="27" /></controls.IconButton>
            </controls.Box>
            <controls.Box sx={{ marginRight: { xs: '18px' }, display: { lg: 'none' }, }}>
              <controls.IconButton onClick={() => toggleShowDrawer(true)} sx={{ color: 'black' }} > <controls.Icon icon="iconoir:menu" width="27" height="27" /></controls.IconButton>
            </controls.Box>
            <controls.Drawer open={drawerOpen} onClose={() => toggleShowDrawer(false)}>
              <MenuContent />
            </controls.Drawer>
          </controls.Grid>
        </controls.Grid>
      </controls.AppBar>
    </div>
  );
}

export default Appbar2;
