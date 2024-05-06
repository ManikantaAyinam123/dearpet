import * as React from 'react';
import controls from './Import'


export default function MenuContent() {
    const navigate = controls.useNavigate();
    const token = localStorage.getItem('accessToken');
    const [drawerClose, setDrawerClose] = controls.useState(false);
    const [drawerOpen, setDrawerOpen] = controls.useState(false);
    const [dogAccessoriesDrawerOpen, setDogAccessoriesDrawerOpen] = controls.useState(false);
    const handleClick = () => {
        setDrawerOpen(true);
    };
    const handleClose = () => {
        setDrawerOpen(false);
    };
    const handleDogAccessoriesDrawerOpen = () => {
        setDogAccessoriesDrawerOpen(true);
    };
    const handleDogAccessoriesDrawerClose = () => {
        setDogAccessoriesDrawerOpen(false);
    };


    const handleSignOut = () => {
        localStorage.removeItem('accessToken');
        setDrawerClose(true);
    }
    controls.useEffect(() => {
        if (drawerClose) {
           window.location.reload();
        }
    }, [drawerClose]);

    return (
        <>
            {!drawerClose && (

                <controls.Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <controls.Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <controls.Grid item >
                            <controls.Typography sx={{ fontSize: '13px', fontWeight: 700 }}>DOG</controls.Typography>
                        </controls.Grid>
                        <controls.Grid item >

                            <controls.IconButton onClick={handleClick} size="small">
                               <controls.Icon icon="eva:arrow-ios-forward-outline" width="22" height="22" />
                            </controls.IconButton>

                        </controls.Grid>
                    </controls.Grid>
                    <controls.Divider />
                    <controls.Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <controls.Grid item >
                            <controls.Typography sx={{ fontSize: '13px', fontWeight: 700 }}>CAT</controls.Typography>
                        </controls.Grid>
                        <controls.Grid item >

                            <controls.IconButton onClick={handleClick} size="small">
                                {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                                <controls.Icon icon="eva:arrow-ios-forward-outline" width="22" height="22" />
                            </controls.IconButton>

                        </controls.Grid>
                    </controls.Grid>
                    <controls.Divider />
                    <controls.Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <controls.Grid item >
                            <controls.Typography sx={{ fontSize: '13px', fontWeight: 700 }}>GROMMING</controls.Typography>
                        </controls.Grid>

                    </controls.Grid>
                    <controls.Divider />
                    <controls.Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <controls.Grid item >
                            <controls.Typography sx={{ fontSize: '13px', fontWeight: 700 }}>BLOG</controls.Typography>
                        </controls.Grid>
                        <controls.Divider />
                    </controls.Grid>
                    <controls.Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <controls.Grid item >
                            {!token ? (
                                <controls.Link to="/SignInMobilePage" style={{ textDecoration: 'none' }}>
                                    <controls.Typography sx={{ fontSize: '13px', textDecoration: 'none !important', color: 'black' }}>
                                        Sign In
                                    </controls.Typography>
                                </controls.Link>
                            ) : (<controls.Button onClick={handleSignOut} sx={{ color: 'black', fontSize: '12px', paddingLeft: '0px' }}>Log Out</controls.Button>)}

                        </controls.Grid>

                    </controls.Grid>
                    <controls.Grid sx={{ minWidth: 280, padding: '10px' }} container justifyContent="space-between" alignItems="center">
                        <controls.Grid item >
                            {!token ? (<controls.Link to="/CreateAccountPage" style={{ textDecoration: 'none' }}>
                                <controls.Typography sx={{ fontSize: '13px', textDecoration: 'none !important', color: 'black' }}>
                                    Create an account
                                </controls.Typography>
                            </controls.Link>) : (<controls.Link to="/CreateAccountPage" style={{ textDecoration: 'none' }}> <controls.Typography sx={{ fontSize: '13px', textDecoration: 'none !important', color: 'black' }}>
                                My Account
                            </controls.Typography></controls.Link>)}
                        </controls.Grid>

                    </controls.Grid>

                    <controls.Drawer
                        open={drawerOpen}
                        onClose={handleClose}
                    >
                        <controls.Grid container justifyContent={'center'}>
                            <controls.Grid item width='280px' height='1000px'>
                                <controls.Box sx={{ display: 'flex', padding: '10px 10px', backgroundColor: '#F8F8F8', }}>
                                    <controls.Icon onClick={handleClose} icon="uil:angle-left-b" width="20" height="20" style={{ color: 'black' }} />
                                    <controls.Typography sx={{ marginLeft: '87px', fontSize: '15px', fontWeight: '700' }}>DOG</controls.Typography>
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px' }}  >
                                    <controls.Typography sx={{ fontSize: '12px' }}>ALL DOG</controls.Typography>
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', }}>DOG FOOD</controls.Typography>
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '5px 20px 5px 25px', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DOG ACCESSORIES</controls.Typography>
                                    <controls.IconButton onClick={handleDogAccessoriesDrawerOpen} size="small" >
                                        <controls.Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                    </controls.IconButton>
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DOG BEDS&CRATES</controls.Typography>
                                    <controls.Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', }}>DOG BOWLS</controls.Typography>
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', }}>DOG TOYS</controls.Typography>
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DOG GROMMING</controls.Typography>
                                    <controls.Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>HYGIENE & CARE</controls.Typography>
                                    <controls.Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', }}>TRAVEL & UTILITIES</controls.Typography>
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DEAR PET FAV'S</controls.Typography>
                                    <controls.Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>DEAR PET COLLECTIONS</controls.Typography>
                                    <controls.Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px', justifyContent: 'space-between', display: 'flex' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', letterSpacing: '0.5px' }}>WINTER COLLECTIONS</controls.Typography>
                                    <controls.Icon icon="eva:arrow-ios-forward-outline" width="20" height="20" style={{ color: 'grey' }} />
                                </controls.Box>
                                <controls.Divider />



                            </controls.Grid>
                        </controls.Grid>
                    </controls.Drawer>
                    <controls.Drawer

                        open={dogAccessoriesDrawerOpen}
                        onClose={handleDogAccessoriesDrawerClose}
                    >
                        <controls.Grid container>
                            <controls.Grid item width={'280px'}>
                                <controls.Box sx={{ display: 'flex', padding: '10px 10px', backgroundColor: '#F8F8F8', }}>
                                    <controls.Icon onClick={handleDogAccessoriesDrawerClose} icon="uil:angle-left-b" width="20" height="20" style={{ color: 'black' }} />
                                    <controls.Typography sx={{ marginLeft: '50px', fontSize: '15px', fontWeight: '700' }}>DOG ACCESSORIES</controls.Typography>
                                </controls.Box>
                                <controls.Divider />
                                <controls.Box sx={{ padding: '10px 25px' }}  >
                                    <controls.Typography onClick={()=> {navigate('/DogTabsPage/dogaccessories')}} sx={{ fontSize: '12px', }}>All Dog Accessories</controls.Typography>
                                </controls.Box>
                                <controls.Box sx={{ padding: '10px 25px' }}  >
                                    <controls.Typography onClick={()=> {navigate('/DogTabsPage/collar,leash&harness')}} sx={{ fontSize: '12px', }}>Collar, Leash & Harness</controls.Typography>
                                </controls.Box>
                                <controls.Box sx={{ padding: '10px 25px' }}  >
                                    <controls.Typography sx={{ fontSize: '12px', }}>Bow Tie</controls.Typography>
                                </controls.Box>
                              

                            </controls.Grid>

                        </controls.Grid>
                    </controls.Drawer>
                </controls.Box>

            )}
        </>
    );
}
