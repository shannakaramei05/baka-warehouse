import UserList from "../component/UserList.jsx";
import ConsumerList from "../component/ConsumerList.jsx";
import Warehouse from "../component/Warehouse.jsx";


function Home() {
    return (
        <>
            <UserList/>
            <br/>
            <ConsumerList/>
            <br/>
            <Warehouse/>
        </>
    )
}


export default Home
