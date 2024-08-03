import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Notes() {
    let [data, setData] = useState([])
    async function getData() {
        // let result = await axios.get('http://localhost:3002/api/getData')
        // setData(result.data)
    }
    useEffect(() => {
        getData()
    }, [])

    async function deleteData(id){
        let flag  =  confirm("Are U sure to delete")
        // console.log(flag)
        // if(flag == true){
        //  await axios.delete(`http://localhost:4000/api/productDelete/${id}`)
        //  getData()
        // }
    }

    return (
        <>
            <section className="relative top-[4rem] mx-auto h-screen w-full pl-[20%] px-8 py-8 bg-bgColor">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Notes</h2>
                        <p className="mt-1 text-sm text-gray-700">This is a list of all Notes. You can view , edit or delete existing ones.</p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-12 py-3.5 text-left text-sm font-normal text-gray-700">Course</th>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Title</th>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Price</th>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Preview</th>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">View</th>
                                            <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {/* {data.map((user) => ( */}
                                            <tr>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                        BCA
                                                            {/* <div className="text-sm font-medium text-gray-900">{product.productName}</div> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-sm text-gray-900 ">React</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        Rs. 49
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                    link1
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                    link2
                                                </td>

                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                    <button type="button" onClick={()=>{deleteData()}} className="rounded-md bg-red-600 mx-4 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button>
                                                </td>
                                            </tr>
                                        {/* ))} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
