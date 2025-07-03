import React from 'react'

function Cards() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {[1, 2, 3, 4, 5, 6,7,8].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                    <img
                        src={`https://picsum.photos/300/200?random=${item}`}
                        alt={`Card ${item}`}
                        className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">Card Title {item}</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            ))}
        </div>  
        <div className="text-center mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Load More
            </button>
    </div>
    </div>
  )
}

export default Cards