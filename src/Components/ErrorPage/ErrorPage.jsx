import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Opps!!! <br />
                page not found.
            </h2>
            <NavLink to='/'><button>Go Back To Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;