import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Create.css"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate()


const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ username, email, phone, password})

    const newUser = {
        username: username,
        email: email,
        phone: phone,
        password: password
    };

    fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log("User saved:", data)
        alert("Account created successfully!")
        navigate("/")
    })
    .catch(err => console.error(err))
}

return (
    <>
    <section id="created">
    <div className="register-page">
        <h2>Create Account</h2>

        <form action="" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            />

            <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            />

            <input 
            type="phone" 
            placeholder="Phone number" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            />

            <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Create Account</button>
            <p>Already have an Account? <Link to="/login">Log in</Link></p>
        </form>
    </div>
    </section>
    </>
)
}

export default Register;