import {useEffect, useState} from "react";
import {doGet} from "../backend-services.js"

function ConsumerRequestList() {
    const [consumerRequests, setConsumerRequest] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const fetchData = async ()=> {
            try{
                const response = await doGet(`/v1/users/consumers/list-request?page=${page}&size=5`);
                setConsumerRequest(response.data.data)
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
            <h1 className="font-bold text-2xl text-center">Consumer Request Products</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            PRODUCT CODE
                        </th>
                        <th scope="col" className="px-6 py-3">
                            QUANTITY
                        </th>
                        <th scope="col" className="px-6 py-3">
                            REQUESTED_BY
                        </th>
                        <th scope="col" className="px-6 py-3">
                            VERIFY_BY
                        </th>
                        <th scope="col" className="px-6 py-3">
                            APPROVED_BY
                        </th>
                        <th scope="col" className="px-6 py-3">
                            WR_ID
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {consumerRequests.length < 0 ? <p>No Data Found</p> :
                        consumerRequests.map(
                            (request) => (
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {request.PRODUCT_CD}
                                    </th>
                                    <td className="px-6 py-4">
                                        {request.QUANTITY}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request.REQUESTED_BY}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request.VERIFY_BY == null ? "" : request.VERIFY_BY}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request.VERIFY_BY == null ? "" :request.VERIFY_BY}
                                    </td>
                                    <td className="px-6 py-4">
                                        {request.WR_ID}
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

export default ConsumerRequestList;