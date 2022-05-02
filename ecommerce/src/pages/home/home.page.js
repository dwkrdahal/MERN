import React from "react";
import { App } from "../../components/app.components";
import { TableComponent } from "../../components/table.component";
import { BannerComponent } from "../../components/banner.component";
import "bootstrap/dist/css/bootstrap.css"
export class Home extends React.Component{

    constructor(props){
        super(props);
    }
    render = () =>{
        console.log(this.props);
        return (
            <>
            
                <App {...this.props}></App>
                <TableComponent/>
                <BannerComponent/>

            </>
        );
    }
}