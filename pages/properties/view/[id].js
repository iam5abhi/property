import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Carousel from '../../../components/carousel/Carousel';

const SinglePropert = () => {
    const router = useRouter()
    const {id} = router.query
    const [contact, setContact] = useState()

    const getContactData = () => {
        fetch("/api/property/get-singleproperty", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        })
          .then((res) => {
            // Check if the response status is okay (2xx status code)
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json(); // Parse the JSON data
          })
          .then((data) => {setContact(data)})
          .catch((error) => {
            // Handle any errors that occurred during the fetch or JSON parsing
            console.error("Error fetching or parsing data:", error);
            // You can set the category state to a default value or handle the error in another way
          });
      };

    useEffect(() => {
        getContactData();
    }, [id])

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
                         <p href="#" className="text-sm pb-3">                            
                         <a href="#" className="font-normal text-gray-500 ">{contact.PricePerSQFT}</a>
                         </p>
                       
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
                         <div className='grid grid-cols-2 md:grid-cols-3 '>
                             {contact.Amenities.map((data,id)=>{
                                return <a href="#" className="pb-6 text-center">{
                                data.includes("Swimming Pool")?<i className="fa-solid fa-person-swimming fa-2xl text-blue-400"></i>
                                :data.includes("Internal Street Lights")?<i className="fa-solid fa-traffic-light fa-2xl text-blue-400"></i>
                                :data.includes("24x7 Security")?<i className="fa-solid fa-person-rifle fa-2xl text-blue-400"></i>
                                :null} <span className='text-xs md:text-lg'>{data}</span> </a>
                            })}
                        </div>
                    </div>
                </article>
            </section>
        </div>
        </>
    )
}

export default SinglePropert