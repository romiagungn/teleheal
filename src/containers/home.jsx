import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import Content from '../components/Home';
import TabBar from '../components/TabBar';
import CircularProgress from '../components/CircularProgress';

function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }
    }, [isLoading]);
    return (
        <>
            {isLoading ? (
                <>
                    <CircularProgress />
                </>
            ) : (
                <>
                    <AppBar />
                    <Content />
                    <TabBar />
                </>
            )}
        </>
    );
}

export default Home;
