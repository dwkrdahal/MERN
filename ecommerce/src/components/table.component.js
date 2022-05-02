import React from "react";

export class TableComponent extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }

    componentDidMount = () => {
        // TODO: Axios call
        this.setState((preState) => (
            {
                data: [
                    {
                        name: "User One",
                        email: "userone@gmail.com",
                        address: "Ktm",
                        phone: "45"
                    },
                    {
                        name: "User Two",
                        email: "two@gmail.com",
                        address: "Ktmcty",
                        phone: "45"
                    }
                ]
            }
            
        ))
    }

    componentDidUpdate = () => {
        //
    }

    componentWillUnmount = () => {
        //
    }

    render = () => {
        console.log("Data: ",this.state)
        return (
            <>
                <div>
                    <table border="1" cellSpacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>S.N</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state?.data && this.state.data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            Edit/Delete
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}