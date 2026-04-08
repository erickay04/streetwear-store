import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Create.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();

        fetch("http://localhost:5000/users")
        .then((res) => res.json())
        .then((users) => {
            const user = users.find(
                (u) => u.email === email && u.password === password
            )

            if (user) {
                setError("")
                navigate("/")
            } else {
                setError("Wrong email or password")
            }
        })
        .catch((err) => console.error(err))
    }

    return (
        <>
            <section id="created">
            <div className="register-page">
                <h2>Login</h2>

                <form action="" onSubmit={handleLogin}>
                    <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: error ? "red" : "#ccc"}} 
                    />

                    <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ borderColor: error ? "red" : "#ccc"}} 
                    />

                    {error && <h6 style={{ color: "red", marginTop: "5px", fontSize: "15px"}}>{error}</h6>}
                    <button type="submit">Login</button>
                    <p>Don't have an account? <Link to="/create">Create Account</Link></p>
                </form>
            </div>
            </section>
        </>
    )
}

export default Login;