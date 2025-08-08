import React from 'react'

const TotalCount = ({totalCount}:any) => {
    
  return (
    <div>
        <h2 className="text-2xl font-bold text-center mb-6">
            Total Count Component
        </h2>
        <p className="text-lg text-gray-700">
            This component will display the total count from all counters.
        </p>
        <p className="text-xl font-semibold text-blue-600 mt-4">
            Total Count: <span className="text-red-500">{totalCount}</span>
        </p>
    </div>
  )
}

export default TotalCount