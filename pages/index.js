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
        <div className="container mx-auto flex flex-wrap ">
            {data.map((data) => {
                return <>
                    <section className="w-full flex flex-col items-center px-3">
                    <article className="flex flex-col shadow my-4 px-2 px-2"> {/*--Profile*/}
                        <div className="bg-white flex flex-col justify-start ">
                            <div className="rounded-lg bg-slate-100 my-6 shadow-md border border-gray-200 py-5 flex md:gap-x-24 gap-x-4 text-slate-700" id="inquiry-banner">
                                <div className="flex-none">
                                    <img className="md:w-44 w-20 rounded-full" src={data.logo} alt />
                                </div>
                                <div className="flex-1">
                                    <div>
                                        <a href="#" className="md:text-3xl text-base text-gray-800 font-bold  pb-4">Bestech Business
                                            Tower</a>
                                    </div>
                                    <div className="text-sm text-gray-500 ">
                                        <a href="#" className="md:font-normal md:text-sm text-xs text-gray-500 "><i className="fa-solid fa-location-dot" />&nbsp;Sector 66,
                                            Mohali</a>
                                    </div>
                                </div>
                                <div className="flex-none self-center">
                                    <button type="button" className="text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none
       focus:ring-emerald-700 font-medium rounded-lg md:text-sm text-xs md:px-4 px-2 py-2 text-center
        md:mr-3 mr-0 ">Contact us</button>
                                </div>
                            </div>
                        </div>
                    </article>
                    <hr />
                    <article className="flex flex-col shadow my-4 px-4 py-6 border border-gray-200 rounded">{/*--About*/}
                        <div className="bg-white flex flex-col justify-start ">
                            <a href="#" className="text-2xl text-gray-800 font-bold  pb-4">About</a>
                            {/* 
      <p href="#" class="text-sm pb-3">
          <a href="#" class="font-normal text-gray-500 "><i
                  class="fa-solid fa-location-dot"></i>&nbsp;Sector 66,
              Mohali</a>
      </p> */}
                            <a href="#" className="pb-6">{data.about}</a>
                        </div>
                        <div className="bg-white rounded-lg hidden" id="overs" role="tabpanel" aria-labelledby="overs-tab">
                            <a href="#" className="text-2xl text-gray-800 font-bold  pb-4">Overview</a>
                            <dl className="grid max-w-screen-xl my-4  border border-gray-200 rounded grid-cols-2 md:grid-cols-3 gap-8 p-4 mx-auto text-gray-900   sm:p-8">
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2  text-gray-800 font-bold">Total Project Area</dt>
                                    <dd className="text-gray-500 ">13 acres (52.61K sq.m.)</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2  text-gray-800 font-bold">Floors</dt>
                                    <dd className="text-gray-500 ">9</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2 text-gray-800 font-bold">Towers</dt>
                                    <dd className="text-gray-500 ">2</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2 text-gray-800 font-bold">Project Type</dt>
                                    <dd className="text-gray-500 ">Commercial</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <dt className="mb-2  text-gray-800 font-bold">Open Area</dt>
                                    <dd className="text-gray-500 ">50 %</dd>
                                </div>
                            </dl>
                        </div>
                    </article>
                </section>
                </>
            })}
        </div>
        </>
    )
}

export default index