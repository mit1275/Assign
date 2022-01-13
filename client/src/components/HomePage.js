import * as React from 'react';

import ProfileCard from './ProfileCard';
import Header from './Header';
export default function HomeScreen()
{
    return (
        <>
         <Header/>
        <p style={{alignItems:'center',justifyContent:'center',display:'flex'}}><ProfileCard/></p>
        </>
    )
};
