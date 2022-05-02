import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { getItems } from "../../service/axios.service";

export function UserList(){

    let [data, setData] = useState();

    useEffect(() => {
        getItems('/user')
        .then((response) => {
            setData(response.data.result);
        })
        .catch((error) => {
            toast.error(error);
       })
        
    }, [])
    return (
        <>
            <ToastContainer>

            </ToastContainer>

            <Container>
                <Row className="mt-3">
                    <Col>
                        <h4 className="text-center"> User List</h4>
                    </Col>    
                </Row>   
                
                <hr></hr> 

                <Row>
                    <Col>
                        <Table responsive striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                    <th>Image</th>
                                    <th>Shipping Address</th>
                                    <th>Billing Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.map((o, i) => (
                                        <tr key = {i}>
                                            <td>{o._id}</td>
                                            <td>{o.name}</td>
                                            <td>{o.email}</td>
                                            <td>{o.role}</td>
                                            <td>{o.status}</td>
                                            <td>{o?.image}</td>
                                            <td>{o?.address?.shipping?.location} - {o?.address?.shipping?.ward}</td>
                                            <td>{o?.address?.billing?.location} - {o.address?.billing?.ward}</td>
                                            
                                        </tr>
                                        ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}