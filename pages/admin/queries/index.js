import { useRouter } from 'next/router';
import React,{useState,useEffect} from 'react'
import PrivateRoute from '../../../PrivateRoute/PrivateRoute';
import AddQuery from '../../../components/Admin/AddQuery/AddQuery';

const Index = () => {
    const router = useRouter();
    const [queries,setQueries]=useState([])
    const [open,setOpen]=useState(false)
    
    const SearchHandler = async (event)=>{
        const query = event.target.value.toLowerCase();
        if (query === '') {
            getQueriesData();
        } else {
            const filteredList = queries.filter((item) => {
                return item.name.toLowerCase().includes(query);
            });
            setQueries(filteredList);
        }
    }

    const getQueriesData = ()=>{
        fetch("/api/queryForm/get-query", { 
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {return res.json()}
          ).then((res) => setQueries(res))
    }

    useEffect(() => {
        getQueriesData();
    }, [])
    return (
        <>
           <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className='px-2 flex justify-between'>
                    <h2 className="text-2xl font-semibold leading-tight">Queries</h2>
                    <div className='flex gap-2'>
                        <input type="text" name='email' onChange={SearchHandler} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1" placeholder='Search' />
                        <h2 onClick={()=>setOpen(true)} className="cursor-pointer text-lg font-semibold  leading-tight bg-gradient-to-r from-[#4216AA] to-[#F8AF0B] hover:bg-gradient-to-l shadow-md text-white rounded-full shadow px-5 py-1">Add Queries</h2>
                    </div>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full m leading-normal ">
                            <thead>
                                <tr>
                                    <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                       Sr
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                       name
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                       phone number
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Property Name
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Expacted Budget
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                         Status
                                    </th>
                                    <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Actions
                                    </th> 
                                </tr>
                            </thead>
                            <tbody>
                                {!queries?"loading....":queries.map((data,index)=>{
                                    return <tr key={index+1}>
                                    <td className="px-5 py-5 bg-white text-sm">
                                         {index+1}. 
                                    </td>
                                    <td className="text-center px-5 py-5 bg-white text-sm">
                                        {data.name}  
                                    </td>
                                    <td className="text-center px-5 py-5 bg-white text-sm">
                                        {data.phoneNumber}
                                    </td>
                                    <td className="text-center px-5 py-5 bg-white text-sm">
                                        {data.ProjectName}
                                    </td>
                                    <td className="text-center px-5 py-5 bg-white text-sm">
                                        {data.budget}
                                    </td>
                                    <td className="text-center px-5 py-5 bg-white text-sm">
                                        {data.expactedBudget}
                                    </td>  
                                    <td className="text-center px-5 py-5 bg-white text-sm">
                                        <span className="mr-3 cursor-pointer relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                                            <span className="relative">{data.status}</span>
                                        </span>
                                    </td>  
                                    <td className="text-center px-5 py-5 bg-white text-sm">
                                        <span onClick={()=>router.push(`/admin/queries/${data.id}`)} className="mr-3 cursor-pointer relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                            <span aria-hidden className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full" />
                                            <span className="relative">Update</span>
                                        </span>
                                    </td> 
                                </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <AddQuery setOpen={setOpen} open={open} getQueriesData={getQueriesData} />
        </>
    )
}

export default PrivateRoute(Index)