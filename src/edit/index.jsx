import React from 'react';

class Edit extends React.Component{

    componentDidCatch(){
        console.log("UNMOUNTED ACCIDENTLY");
    }

    render(){
        return(
            <>
                <h1>Edit Screen</h1>
            </>
        )
    }
}

export default Edit;