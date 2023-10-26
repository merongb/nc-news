import { Link } from "react-router-dom"

export function UnknownPage () {

    return (
        <section>
        <h2>OOPS! Page Not Found!</h2>
        <p>Return to <button><Link to="/"> Home</Link></button></p>  
        </section>
    )
}
