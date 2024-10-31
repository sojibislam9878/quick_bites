import React from 'react'

const TransactionDetail = ({data}) => {

    const stats = [
        {
          data: "200" , // Accessing the length of the result array
          title: "Customers",
        },
        {
          data: "40+",
          title: "Countries",
        },
        {
          data: "30M+",
          title: "Total Revenue",
        },

      ];
    
  return (
    <section className="py-12 bg-white text-gray">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-600 text-3xl font-semibold sm:text-4xl">
                All Transaction History
            </h3>
        
        </div>
        <div className="mt-12">
            <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                {
                    stats.map((item, idx) => (
                        <li key={idx} className="w-full text-center bg-[#fb5200]  text-white px-12 py-4 rounded-lg sm:w-auto">
                            <h4 className="text-4xl text-white font-semibold">{item.data} </h4>
                            <p className="mt-3 text-white font-medium">{item.title}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
</section>
  )
}

export default TransactionDetail