import {Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

import {doPost} from "../backend-services.js"
import {useNavigate} from "react-router-dom";


function Register() {

        const navigate = useNavigate();

        const[formData, setFormData] =useState({
            email:"",
            name:"",
            password:"",
            role:""
        });

        const [loading, setLoading] = useState(false)

        const handleChange= (event) => {
            const { name, value } = event.target;
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
            // alert(`${formData.name}  ${formData.email} ${formData.password} ${formData.role}`)
        }

        const handleSubmit = async (event) => {
            event.preventDefault()
            console.log(formData.email + "  " + formData.name + "    " + formData.role + "   " + formData.password)
            try {
                const response = await doPost("/v1/users", {
                    name: formData.name,
                    email: formData.email,
                    role: formData.role.toUpperCase() // ✅ Convert role to uppercase
                })

                setLoading(true)
                if(response.data.resCd === 200) {
                    console.log(response.data.resCd)
                    alert("Register Success!!")
                    navigate("/login")
                }
                console.log("Success:", response.data);
            } catch (error) {
                console.error("Error:", error.response ? error.response.data : error.message);
            }
        }

        if(loading) return  <p>loading....</p>


    return (
        <>
            <Container>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create an account
                                </h1>
                            </div>
                                <Form className="m-4 p-2" onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control name="email" type="email" placeholder="Enter email" value={formData.email} onChange={handleChange}/>
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicRole">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Select name="role" type="text" value={formData.role} onChange={handleChange}>
                                            <option value="USER">User</option>
                                            <option value="ADMIN">Admin</option>
                                            <option value="MANAGER">Manager</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}


export default Register;