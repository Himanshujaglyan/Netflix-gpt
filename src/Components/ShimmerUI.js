 function ShimmerEffect() {
    return (
      <div className="space-y-10 p-5 bg-black">
        {/* Large shimmer block */}
        <div className="h-[500px] w-full bg-gray-800 animate-pulse rounded-md"></div>
  
        {/* Small shimmer cards */}
        <div className="flex space-x-4">
          {Array(20).fill(0).map((_, index) => (
            <div key={index} className="h-32 w-24 bg-gray-700 animate-pulse rounded-md"></div>
          ))}
        </div>
      </div>
    );
  }
  export default ShimmerEffect;