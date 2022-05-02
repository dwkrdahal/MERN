import React from "react";

export class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name: "Test Name"
        }
    }

    render = () => {
        return(
            <> 
                <p> This is a paragraph</p>
            
                <p>
                    {
                        this.state?.name
                    },
                    {
                        this.props?.name
                    }
                </p>
            </>
        );
    }
}