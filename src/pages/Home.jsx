import UserList from "../component/UserList.jsx";
import ConsumerList from "../component/ConsumerList.jsx";
import Warehouse from "../component/Warehouse.jsx";
import ConsumerRequestList from "../component/ConsumerRequest.jsx";
import TableComponent from "../component/TableComponent.jsx";
import {useState} from "react";


function Home() {

    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
    ];

    const [users, setUsers] = useState([
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
    ]);

    const handleEdit = (user) => {
        console.log(user)
        alert(`Editing user: ${user.name}`);
    };
    return (
        <>
            {/*<UserList/>*/}
            {/*<br/>*/}
            {/*<ConsumerList/>*/}
            {/*<br/>*/}
            {/*<Warehouse/>*/}
            {/*<br/>*/}
            {/*<ConsumerRequestList/>*/}
            <br/>
           <section>
               <TableComponent data={users} columns={columns} onEdit={handleEdit}/>
           </section>
        </>
    )
}


export default Home
