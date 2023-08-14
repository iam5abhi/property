import React, { useEffect, useState } from 'react'

const index = () => {
    const [data, setData] = useState([])

    const getData = () => {
        fetch("/api/details/get-details", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => { return res.json() }
        ).then((res) => setData(res))
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
        <div>
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white">
                <figure className="flex flex-col items-center justify-center p-4  border-b border-gray-200 rounded-tr-lg ">
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                        <h2 className="text-7xl font-semibold text-gray-900 ">
                            Welcome
                        </h2>
                        <p className="my-4 text-[#000]">
                            We are the third generation entrepreneurs with over two decades of family experience as an investor in the real estate , aiming to disrupt the unethical business practices followed by the property agents while selling or purchasing some property due to lack of right information on the part of ultimate seller or buyer which leads to the manipulated pricing resulting in the end buyer or/and seller taking the hit .
                        </p>
                    </blockquote>
                    <div className="grid gap-2 md:gap-x-10 grid-cols-2 md:grid-cols-2">
                        <div className="grid1">
                            <div className="md:px-14 rounded-full bg-[#F8AF0B] shadow-md">
                                <div className="md:p-5 p-3">
                                    <a href="#">
                                        <h5 onClick={() => router.push('/properties/buy')} className="text-center text-white text-xl md:text-3xl font-semibold tracking-tight uppercase">Buy</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid2">
                                <div className="max-w-sm rounded-full bg-[#4216aa] shadow-md">
                                    <div className="md:p-5 p-3">
                                        <a href="#">
                                            <h5 onClick={() => router.push('/properties/lease')} className="text-center text-white text-xl md:text-3xl font-semibold tracking-tight uppercase">Lease</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div />
                    </div>
                    </figure>
                <figure className="flex flex-col items-center justify-center p-4 text-center   border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg">
                    <figcaption className="flex items-center justify-center">
                        {/* <img className="h-auto max-w-full" src="/Images/1png.png" alt="profile picture" /> */}
                    </figcaption>
                </figure>
            </div>
            {data.map((data)=>{
                return <div key={data.id} className="grid grid-cols-6 md:grid-cols-8 sm:grid-cols-2 gap-8 px-4 ">
                <div className="col-span-1" />
                <article className="col-span-6 my-4 px-2">
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow ">
                        <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex ">
                            <li className="w-full cursor-pointer text-lg font-semibold  leading-tight bg-gradient-to-r from-[#4216AA] to-[#F8AF0B] hover:bg-gradient-to-l shadow-md text-white  shadow px-3 py-3">
                                <button type="button" className>Contact Us</button>
                            </li>
                        </ul>
                        <div className="p-4 bg-white rounded-lg md:p-8" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <div className="bg-white   px-2">
                                <div className="bg-white  px-2">
                                    <div scope="row" className=" font-medium text-gray-900 whitespace-nowrap float-left ">
                                        <i className="fa-solid fa-map-pin" />
                                    </div>
                                    <div className="ml-10 ">2511,  Sector 82 A, IT City Road, Mohali (Opp. Amity University)</div>
                                </div>
                                <div className="bg-white  px-2">
                                    <div scope="row" className=" font-medium text-gray-900 whitespace-nowrap float-left">
                                        <i className="fa-solid fa-phone" />
                                    </div>
                                    <div className=" ml-10">{data.phoneNumber}</div>
                                </div>
                                <div scope="row" className=" font-medium text-gray-900 whitespace-nowrap float-left">
                                    <i className="fa-regular fa-envelope" />
                                </div>
                                <div className=" ml-10 ">{data.email}</div>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-lg md:p-8 hidden" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                            ..........
                        </div>
                    </div>
                </article>
            </div>
            })}
        </div>
        </>
    )
}

export default index
