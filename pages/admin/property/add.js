/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";

const AddContact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    ProjectName:'', //done
    Sector:'', //done
    ProjectPhotos:'',
    ProjectBrochure:'', 
    PriceStartsfrom:'', //done
    PricePerSQFT:'', //done
    AboutProject:'',
    Nooffloors:'', //done
    BasicAmenities:'', //done
    AvailableFrom:'', //done
  });

  const onChangeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/property/add-property", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => router.push("/admin/property"));
  };

  return (
    <>
      <div className="max-w-screen mx-auto">
        <div className="container mx-auto py-10">
          <div className="p-4">
            <div className="w-full mx-auto md:w-[50%]">
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl py-14 rounded-lg p-5"
              >
                <h1 className="font-bold text-3xl mb-8 text-center">
                  Property Add
                </h1>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="mt-8 space-y-4">
                  <div className="mb-4">
                    <label htmlfor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Project Name</label>
                    <input type="text" id="name" name='ProjectName' onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Project Name" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Sector</label>
                    <input type="text" id="name" name='Sector' onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Sector" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Price Start from</label>
                    <input type="text" id="number" name="PriceStartsfrom" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Price Start from" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="Nooffloors" className="block mb-2 text-sm font-medium text-gray-900 ">No Of Floors</label>
                    <input type="text" id="number" name='Nooffloors' onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="No Of Floors" required />
                  </div>
                  <div className="mb-4 flex gap-5">
                    <label htmlfor="link" className="block mb-2 text-sm font-medium text-gray-900 ">Price Per SQFT?</label>
                    <div className="flex gap-1">
                        <input type="radio" id="name" name='PricePerSQFT' value="yes" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Yes</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="radio" id="name" name='PricePerSQFT' value="no" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">No</label>
                    </div>
                  </div>
                  <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Basic Amenities</label>
                  <div className="mb-4 grid grid-cols-3">
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="buy" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Swimming Pool</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="RainWaterHarvesting" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Rain Water Harvesting</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="Security" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">24x7 Security</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="ClubHouse" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Club House</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="WaterSupply" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">24/7 Water Supply</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="Lifts" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Lift(s)</label>
                    </div> 
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="CarParking" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Car Parking</label>
                    </div> 
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="Internal Street Lights" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Internal Street Lights</label>
                    </div> 
                    <div className="flex gap-1">
                        <input type="checkbox" id="name" name='requirement' value="Fire Fighting Systems" onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 " required />
                        <label htmlfor="specialization" className="block text-sm font-medium text-gray-900 ">Fire Fighting Systems</label>
                    </div> 
                  </div> 
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Select an option
                    </label>
                    <select
                      id="AvailableFrom"
                      name="AvailableFrom"
                      onChange={onChangeHandler}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    >
                      <option value="">Choose</option>
                      <option value="">2024</option>
                      <option value="">2025</option>
                      <option value="">2026</option>
                      <option value="">2027</option>
                      <option value="">2028</option>
                      <option value="">2029</option>
                      <option value="">2030</option>
                    </select>
                  </div>
                  <div className="text-center mb-6">
                    <button
                      type="submit"
                      className="rounded-full cursor-pointer flex w-[30%] mx-auto justify-center 
                      rounded-full bg-gradient-to-r from-[#4216AA] to-[#F8AF0B] hover:bg-gradient-to-l shadow-md py-2 px-4 text-lg 
                      font-medium text-white"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivateRoute(AddContact);
