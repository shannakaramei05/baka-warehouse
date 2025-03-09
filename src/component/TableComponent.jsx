

function TableComponent({columns, data, onEdit}){
    return (
        <>
            <div className="container ml-12 overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            {columns.map((col) =>(
                                <th key={col.key} className="py-2 px-2 border-b text-left">
                                    {col.label}
                                </th>
                            ))}
                            <th className="py-2 px-2 border-b text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row,index) => (
                            <tr key={index} className="hover:gray=100">
                                {columns.map((col) => (
                                    <td key={col.key} className="py-2 px-4 border-b">
                                        {row[col.key]}
                                    </td>
                                ))}
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                        onClick={() => onEdit(row)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableComponent;