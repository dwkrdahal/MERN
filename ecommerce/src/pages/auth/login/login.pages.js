import { useState } from "react";
import { Col, Container, Row, Form, Button} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";

import { postItem } from "../../../service/axios.service";

let defaultData = {
    email: '',
    password: '',
    remember_me: ''
}

export function LoginPage(){

    let [data, setData] = useState(defaultData);
    let [err, setErr] = useState(defaultData);
    let navigate = useNavigate();

    const handleChange = (ev) => {
        let {name, value, type, checked} = ev.target;

        setData ((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })

        validateForm(name, value);
    }

    const validateForm = (field, value) => {
        let errMsg ='';

        // switch(field) {
        //     case "email":
        //         if(data['email']){
        //             errMsg= '';
        //             if(!(data['email'].includes('@'))){
        //                 errMsg = 'Email is not valid';
        //             }
        //         } else{
        //             errMsg = 'Email is required';
        //         }
        //         break;

        //     case "password":
        //         if(data['password']){
        //             errMsg= '';
        //             if(data['password'].length <= 8){
        //                 errMsg = 'Password must be atleast 8 characters';
        //             }
        //         } else{
        //             errMsg = 'Password is required';
        //         }
        // }

        switch(field) {
            case "email":
                errMsg = value? (value.includes('@') ? '' : "Invalid Email Format") : 'Email field is required';

                break;
            case "password": 
                errMsg = value? (value.length  < 8 ? 'Password must be atleast 8 characters' : '') : 'Password is required'
        }

        setErr((pre) => {
            return {
                ...pre,
                [field]: errMsg
            }
        })
    }

    const handleFormSubmit = (ev) => {
        ev.preventDefault();

        postItem('auth/login', data)
        .then((response) => {
            if(typeof response != 'object'){
                response = JSON.parse(response);
            }

            if(response.status == 200){
                let data = response.data;
                let token = data.result.token;
                let user = data.result.user;

                // to store token and user in sessionstorage
                sessionStorage.setItem('token',token);
                sessionStorage.setItem('user',JSON.stringify({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    role: user.role,
                    status: user.status
                }))

                // to store token and user in local storage
                localStorage.setItem('token',token);
                localStorage.setItem('user',JSON.stringify({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    role: user.role,
                    status: user.status
                }))

                toast.success("Welcome to admin panel")
                navigate("/admin");
            }else{
                toast.error("Invalid credentials");
            }
        })
        .catch((error) => {
            toast.error("Invalid credentials");
        })
    }

    return(<>

        <ToastContainer>

        </ToastContainer>
        <Container>
            <Row className="mt-3">
                <Col>
                    <h4 className="text-center"> Login Page</h4>
                </Col>    
            </Row>   
            <hr></hr> 

            <Row>
                    <Col>
                        
                        <Form onSubmit={handleFormSubmit} >
                            {/* <form action="path" method="post"> */}
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                {/* <div className="form-group row mb-3"> */}
                                <Form.Label column sm={2}>
                                    {/* <label className="form-label col-sm-2" for="formHorizontalEmail"> */}
                                    Email
                                </Form.Label>
                                {/* </label> */}
                                <Col sm={10}>
                                    {/* <div className="col-sm-10"> */}
                                    <Form.Control onChange={handleChange} name="email" required type="email" placeholder="Email" />
                                    <span className="text-danger">
                                        {err.email}
                                    </span>
                                    {/* <input id="formHorizontalEmail" type="email" placeholder="Email" class="form-control" */}
                                </Col>
                                {/* </div> */}
                            </Form.Group>
                            {/* </div> */}

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control onChange={handleChange}  name="password" required type="password" placeholder="Password" />
                                    <span className="text-danger">
                                        {err.password}
                                    </span>
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check  onChange={handleChange} name="remember_me" label="Remember me" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Log in</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            
        </Container>    
    
    </>)
}