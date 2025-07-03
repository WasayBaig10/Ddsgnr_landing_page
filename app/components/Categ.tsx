import React from "react";

export default function CardGrid() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="p-4">
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((item) => (
          <div key={item} className="relative rounded-lg overflow-hidden shadow-lg">
            {/* Image */}
            <img
              src={`https://picsum.photos/300/200?random=${item}`}
              alt={`Card ${item}`}
              className="w-full h-48 object-cover"
            />

            {/* Blurred Footer */}
            <div className="absolute bottom-2 left-2 right-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex justify-between items-center z-10 shadow-md">
              <p className="text-xs text-white/80">Card #{item}</p>
              <button className="text-xs text-white bg-black/20 px-3 py-1 rounded-lg hover:bg-black/30 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}



// import React from 'react'

// function Categ() {
//   return (
//     <div>
        
//       <div className="relative w-64 rounded-lg overflow-hidden shadow-lg">
//       {/* Card Image */}
//       <img
//         src="https://heroui.com/images/hero-card.jpeg"
//         alt="Woman listening to music"
//         className="object-cover w-full h-52"
//       />

//       {/* Blurred Footer */}
//       <div className="absolute bottom-2 left-1 right-1 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex justify-between items-center z-10 shadow-md">
//         <p className="text-xs text-white/80">Available soon.</p>
//         <button className="text-xs text-white bg-black/20 px-3 py-1 rounded-lg hover:bg-black/30 transition">
//           Notify me
//         </button>
//       </div>
//     </div>
//     </div> 

//   )
// }

// export default Categ