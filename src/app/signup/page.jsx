import Footer from "../components/Footer";
import Header from "../components/Header";

export default function SignUp(){
    return(
        <div>
        <Header />
        <h2>Sign Up</h2>
        <form>
                <label>Email:</label>
                <input type="email"  required />
                <label>Password:</label>
                <input type="password" required />
                <button type="submit">Login</button>
            </form>
        <Footer />
    </div>
    )
}