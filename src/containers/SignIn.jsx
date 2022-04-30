import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../components/login';
import Signup from '../components/signup';
import CircularProgress from '../components/CircularProgress';

const SignInOutContainer = () => {
    const [value, setValue] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 2500);
        }
    }, [isLoading]);

    const paperStyle = { width: 340, height : "100%", margin: '225px auto' };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role='tabpanel'
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}>
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <>
            {isLoading ? (
                <>
                    <CircularProgress />
                </>
            ) : (
                <Paper elevation={20} style={paperStyle}>
                    <Tabs
                        value={value}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='fullWidth'
                        onChange={handleChange}
                        aria-label='disabled tabs example'>
                        <Tab label='Sign In' />

                        <Tab label='Sign Up' />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Login handleChange={handleChange} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Signup />
                    </TabPanel>
                </Paper>
            )}
        </>
    );
};

export default SignInOutContainer;
