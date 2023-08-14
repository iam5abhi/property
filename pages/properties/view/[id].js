import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Carousel from '../../../components/carousel/Carousel';

const SinglePropert = () => {
    const router = useRouter()
    const {id} = router.query
    const [contact, setContact] = useState()

    console.log(contact,"contact")
    const getCategotyData = () => {
        fetch("/api/property/get-singleproperty", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id:id }),
        }).then((res) => {if (!res.ok) {throw new Error("Network response was not ok")}
            return res.json();
          }).then((res) => setContact(res))
    }

    useEffect(() => {
        getCategotyData();
    }, [])

    if(!contact){
        return false;
    }

    return (
        <>
        <div className="container mx-auto flex flex-wrap py-6">
            <section className="w-full items-center px-3">
                <article className="flex flex-col shadow my-4">
                    <div className="flex flex-col items-center py-2">
                        <Carousel banner={contact.projectPhotos} />
                    </div>
                </article>
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-3xl text-gray-800 font-bold  pb-4">{contact.ProjectName}</a>
                        <p href="#" className="text-sm pb-3">
                            <a href="#" className="font-normal text-gray-500 "><i className="fa-solid fa-location-dot" />&nbsp;{contact.Sector}</a>
                        </p>
                        <a href="#" className="pb-6"></a>
                    </div>
                </article>
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-3xl  text-gray-800 font-bold  pb-4">Download Broucher</a>
                        <a href={contact.ProjectBrochure} target='_blank' className="pb-6 text-blue-600">Download</a>
                    </div>
                </article>
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-3xl  text-gray-800 font-bold  pb-4">Rise Price List</a>
                        <a href="#" className="pb-6">{contact.PriceStartsfrom} rupees.</a>
                    </div>
                </article>
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-3xl  text-gray-800 font-bold  pb-4">About </a>
                        <a href="#" className="pb-6" dangerouslySetInnerHTML={{__html:contact.AboutProject}}></a>
                    </div>
                </article>
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-3xl text-gray-800 font-bold  pb-4">Amenties</a>
                        <div className='flex justify-around'>
                            {contact.Amenities.map((data,id)=>{
                                return <a href="#" className="pb-6">{id+1}. {
                                data.includes("Swimming Pool")?<i className="fa-solid fa-person-swimming fa-lg text-blue-400"></i>
                                :data.includes("Internal Street Lights")?<i className="fa-solid fa-traffic-light fa-lg text-blue-400"></i>
                                :data.includes("24x7 Security")?<i className="fa-solid fa-person-rifle fa-lg text-blue-400"></i>
                                :null} {data}</a>
                            })}
                        </div>
                    </div>
                </article>
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-3xl text-gray-800 font-bold  pb-4">About Developers</a>
                        <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu
                            iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                    </div>
                </article>
                <article className="flex flex-col shadow my-4">
                    <div className="bg-white flex flex-col justify-start p-6">
                        <a href="#" className="text-3xl text-gray-800 font-bold  pb-4">Top Advertisers</a>
                        <a href="#" className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu
                            iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..</a>
                    </div>
                </article>
            </section>
        </div>

        </>
    )
}

export default SinglePropert