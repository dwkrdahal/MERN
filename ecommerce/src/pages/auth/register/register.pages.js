import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";
import { uploader } from "../../../service/axios.service";

let defaultState = {
    name: '',
    email: '',
    password: '',
    role: '',
    status: 'inactive',
    image: '',
    address: {
        shipping: {
            location: '',
            ward: ''
        },
        billing: {
            location: '',
            ward: ''
        }
    }
}

class RegisterPageComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            validated: false,
            data: defaultState,
            error: defaultState,
            uploadImage: null
        }
    }

    submitForm = (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
            this.setState({
                validated: true
            }) 
        } else {
           uploader('post', 'auth/register', this.state.data, [this.state.uploadImage] )
           .then((success) => {
                if(success.status){
                    toast.success(success.msg);
                    this.props.navigate('/login');
                } else{
                    toast.error(success.msg)
                }
            })
           .catch((error) => {
               toast.error("Error! Try Again")
               console.log(error);
           })
        }
    }

    handleChange = (ev) => {
        let { value, name, type, files } = ev.target;

        if(type == 'file'){
            // let images=[];
            // for(let image of files){
            //     images.push(image);
            // }
            this.setState((pre) => {
                return {
                    ...pre,
                    //multiple
                    //uploadImage: images 
                    //single
                    uploadImage: files[0]
                }
            })
        }

        this.setState((pre) => {
            return {
                data: {
                    ...pre.data,
                    [name]: value
                }
            }
        }, () => {
            this.validateData(name, value);
        })
    }

    validateData = (field, value) => {
        //
        let data = this.state.data;
        let errMsg = '';

        switch (field) {
            case "role":
                errMsg = data['role'] != "customer" || data['role'] != "seller" ? 'Role is either seller or customer' : '   ';
                break;
                
            case "password": 
                errMsg = value ? (value.length  < 8 ? 'Password must be atleast 8 characters' : '') : 'Password is required';
                break;

            case "confirm_password":
                errMsg = data['confirm_password'] ? ( data['password'] != data['confirm_password'] ? 'Password doesnot match' : '') : 'Required field';

        }

        this.setState((pre) => {
            return {
                ...pre,
                // validated: true,
                error: {
                    [field]: errMsg
                }
            }
        })

        this.setState({
            validated: true
        })
    }

    render = () => {
        return (<>
            <ToastContainer />
            <Container>
                <Row className="mt-3">
                    <Col>
                        <h4 className="text-center"> Register Page</h4>
                    </Col>
                </Row>
                <hr></hr>

                <Row>
                    <Col>
                        <Form noValidate validated={this.state.validated} onSubmit={this.submitForm}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        onChange={this.handleChange}
                                        size="sm"
                                        name="name"
                                        required
                                        type="text"
                                        placeholder="First name"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Name is Required</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        onChange={this.handleChange}
                                        size="sm"
                                        name="email"
                                        required
                                        type="email"
                                        placeholder="Email"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Invalid Email Format</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                    <Form.Label>Passoword</Form.Label>
                                    <Form.Control
                                        onChange={this.handleChange}
                                        size="sm"
                                        name="password"
                                        
                                        type="password"
                                        placeholder="Password"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">{this.state.error['password']}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                    <Form.Label>Confirm Passoword</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        onChange={this.handleChange}
                                        name="confirm_password"
                                        required
                                        type="password"
                                        placeholder="Confirm Password"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">{this.state.error['confirm_password']}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Select
                                        size="sm"
                                        aria-label="Role"
                                        name="role"
                                        onChange={this.handleChange}
                                    >
                                        <option value="seller">Seller</option>
                                        <option value="customer">Customer</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">{this.state.error['role'] ?? ''}</Form.Control.Feedback>
                                    <Form.Control.Feedback >{this.state.error['role'] ?? ''}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="9" controlId="validationCustom06">
                                    <Form.Label>Billing Address</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        onChange={this.handleChange}
                                        type="text"
                                        name="billing[location]"
                                        placeholder="Billing Location"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Address.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationCustom07">
                                    <Form.Label>Ward</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        onChange={this.handleChange}
                                        type="number"
                                        name="billing[ward]"
                                        placeholder="Ward No."
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid ward Number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="9" controlId="validationCustom08">
                                    <Form.Label>Shipping Address</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        onChange={this.handleChange}
                                        type="text"
                                        name="shipping[location]"
                                        placeholder="Shipping Location"
                                        required
                                    />                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid Address.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="3" controlId="validationCustom09">
                                    <Form.Label>Ward</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        onChange={this.handleChange}
                                        type="number"
                                        name="address[shipping[ward]]"
                                        placeholder="Ward No."
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid ward Number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="9">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        onChange={this.handleChange}
                                        type="file"
                                        name="image"     
                                    />
                                </Form.Group>

                                <Col md="3">
                                {
                                    this.state.uploadImage ? <img className="img img-fluid" src={URL.createObjectURL(this.state.uploadImage)}></img> : ''
                                }

                                </Col>
                            </Row>


                            <Button type="submit">Submit form</Button>
                        </Form>
                    </Col>
                </Row>


            </Container>
        </>)
    }

}

export function RegisterPage(){
    let navigate =useNavigate();
    return(
        <RegisterPageComponent navigate = {navigate}>  </RegisterPageComponent>
    )
}