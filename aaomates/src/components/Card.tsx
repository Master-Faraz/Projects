
const Card = ({ name, address ,state,city,phone}: any) => {
    return (
        <div className="bg-white shadow-sm rounded-full">
            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{name}</h3>
                <p className="text-gray-600 line-clamp-3">{address} {city} {state} </p>
                <p className="text-gray-600 line-clamp-3">{phone}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md">Check here</a>
            </div>
        </div>
    )
}

export default Card