

function Navbar() {
    return (
        <>
            <div className="flex justify-center items-center space-x-14 m-4 p-4 bg-gray-600 text-white text-lg">
                <div className="cursor-pointer hover:text-blue-300"><a href="/">Home</a></div>
                <div className="cursor-pointer hover:text-blue-300"><a href="/inventory">Inventory</a></div>
                <div className="cursor-pointer hover:text-blue-300"><a href="/request">Request</a></div>
            </div>
        </>
    )
}


export default Navbar;