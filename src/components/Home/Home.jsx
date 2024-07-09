import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div>
            <h2>THis is Home</h2>
        </div>
    );
};

export default Home;