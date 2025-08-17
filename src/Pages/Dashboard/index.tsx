// import React from 'react';
import SecretDeatails from "./Components/SecretDeatails"
import SecretListArea from "./Components/SecretListArea"
import TopBar from "./Components/topBar"

export default function DashboardPage() {
    return(
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <TopBar />
            <div style={{border: '1px solid #beb3b3ff', flex: 1, display: 'flex', flexDirection: 'row'}}>
                {/* Left Column */}
                <SecretListArea />
                {/* Right Column */}
                <div style={{height: '100%', flexGrow:1}}>
                    <SecretDeatails/>
                </div>
            </div>
        </div>
    )
}