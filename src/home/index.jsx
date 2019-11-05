import React from 'react';

class Home extends React.Component{

    componentDidCatch(){
        console.log("UNMOUNTED ACCIDENTLY");
    }

    render(){
        return(
            <>
                <h1>Home Component</h1>
            </>
        )
    }
}

export default Home;