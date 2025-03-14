import {Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


function Login() {

    const [formData, setFormData] = useState( {
        email:"",
        password: "",
    })
    const handleChange = (event) => {
        const {name,value} = event.target;

        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    }

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {
            email: "test",
            role:"ADMIN",
            isLogin: true
        }

        console.log('storeLclStorage : ' + user)

        localStorage.setItem("user", JSON.stringify(user));

        navigate("/home")
    }

    return (
        <>
            <Container>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Login
                                </h1>
                            </div>
                            <Form className="mx-4 mb-4" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}


export default Login;