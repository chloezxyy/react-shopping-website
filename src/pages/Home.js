import React from 'react';
import Navbar from '../components/Navbar';
import useNavigation from '../hooks/useNavigation';
import navigationData from '../data/navigation'

function Home() { 
    const { currentRoute, setCurrentRoute } = useNavigation() 
    return (
        <div className="text-3xl font-bond underline">
            <Navbar 
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
        </div>
    )
}

export default Home;