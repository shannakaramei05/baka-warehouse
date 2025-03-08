import {useEffect, useState} from "react";
import {doGet} from "../backend-services.js"

function UserList() {
    const [warehouses, setWarehouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false)

    useEffect(() => {
        const fetchData = async ()=> {
            try{
                const response = await doGet("/v1/warehouse");
                setWarehouses(response.data.content)
                setLoading(false)
            }catch (err) {
                setLoading(false)
                console.log(err)
            }
        }
        fetchData()
    }, []);

    if (loading) return <p>loading....</p>
    if(error) return <p>Error when fetching data</p>
    return(
        <>
            <h1 className="font-bold text-2xl text-center">Warehouse LIST</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Warehouse Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            SKU
                        </th>
                        <th scope="col" className="px-6 py-3">
                            QUANTITY
                        </th>
                        <th scope="col" className="px-6 py-3">
                            MIN_STOCK
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ADDR_WR
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {warehouses.length < 0 ? <p>No Data Found</p> :
                        warehouses.map(
                            (warehouse) => (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {warehouse.NAME}
                                    </th>
                                    <td className="px-6 py-4">
                                        {warehouse.SKU}
                                    </td>
                                    <td className="px-6 py-4">
                                        {warehouse.QUANTITY}
                                    </td>
                                    <td className="px-6 py-4">
                                        {warehouse.MIN_STOCK}
                                    </td>
                                    <td className="px-6 py-4">
                                        {warehouse.ADDR_WR}
                                    </td>
                                </tr>
                            )

                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserList;