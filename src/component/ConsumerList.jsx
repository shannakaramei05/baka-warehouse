import {useEffect, useState} from "react";
import {doGet} from "../backend-services.js"

function ConsumerList() {
    const [consumers, setConsumers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false)

    useEffect(() => {
        const fetchData = async ()=> {
            try{
                const response = await doGet("/v1/consumers");
                setConsumers(response.data.content)
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
            <h1 className="font-bold text-2xl text-center">Consumer List</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Company Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {consumers.length < 0 ? <p>No Data Found</p> :
                        consumers.map(
                            (c) => (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {c.NAME}
                                    </th>
                                    <td className="px-6 py-4">
                                        {c.CONTACT}
                                    </td>
                                    <td className="px-6 py-4">
                                        {c.ADDRESS}
                                    </td>
                                    <td className="px-6 py-4">
                                        {c.COMP_TY == null ? "" : c.COMP_TY}
                                    </td>
                                    <td className="px-6 py-4">
                                        {c.IS_VERIFY === 1 ? "VERIFIED" : "UNVERIFIED"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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

export default ConsumerList;