/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";

const UpdateContact = () => {
  const router = useRouter();
  const { id } = router.query;
  const [projects,setProjects]=useState([])
  const [formData, setFormData] = useState({
    ProjectID:'',  
    phoneNumber:'', 
    name:'', 
    email:'', 
    expactedBudget:'',
    budget:'',
    status:''
  });

  const onChangeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/queryForm/update-query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData,id:id}),
    }).then(() =>router.push("/admin/queries") );
  };

  const getContactData = () => {
    fetch("/api/queryForm/get-singlequery", {
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
      .then((data) => {
        // Data is the parsed JSON object
        setFormData({
          ProjectID:data.ProjectID, 
          phoneNumber:data.phoneNumber, 
          name:data.name, 
          email:data.email, 
          expactedBudget:data.expactedBudget,
          budget:data.budget,
          status:data.status
        });
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch or JSON parsing
        console.error("Error fetching or parsing data:", error);
        // You can set the category state to a default value or handle the error in another way
      });
  };

  const getProjectData = ()=>{
    fetch("/api/property/get-property", { 
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {return res.json()}
      ).then((res) => setProjects(res))
  }

  useEffect(() => {
    getProjectData()
    getContactData();
  }, [id]);

  return (
    <>
      <div className="max-w-screen mx-auto">
        <div className="container mx-auto py-10">
          <div className="p-4">
            <div className="w-full mx-auto md:w-[35%]">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl py-14 rounded-lg p-5"
              >
                <h1 className="font-bold text-3xl mb-8 text-center">
                  Property Queries
                </h1>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="mt-8 space-y-4 ">
                  <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900"> Select an option </label>
                    <select id="AvailableFrom" value={formData.ProjectID} name="ProjectID" onChange={onChangeHandler}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
                      <option value="">Choose Project</option>
                      {projects.map((data)=><option value={data.id}>{data.ProjectName}</option>)}
                      
                    </select>
                  </div>
                  <div className="mb-4">
                    <label htmlfor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                    <input type="text" id="name" name='name' value={formData.name} onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Name" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="ask_price" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                    <input type="text" id="number" name='email' value={formData.email} onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone</label>
                    <input type="text" id="number" name="phoneNumber" value={formData.phoneNumber} onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Phone" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="link" className="block mb-2 text-sm font-medium text-gray-900 ">Expacted Budget</label>
                    <input type="link" id="ask_price"  name='expactedBudget' value={formData.expactedBudget} onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Expacted Budget" required />
                  </div>
                  <div className="mb-4">
                    <label htmlfor="link" className="block mb-2 text-sm font-medium text-gray-900 ">Budget</label>
                    <input type="link" id="ask_price"  name='budget' value={formData.budget} onChange={onChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Budget" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900"> Select an Staus </label>
                    <select id="AvailableFrom" value={formData.status} name="status" onChange={onChangeHandler}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
                      <option value="">Choose Status</option>
                      <option value="newlead">New Lead</option>
                      <option value="converted">Converted</option>
                      <option value="rejected">Rejected</option>
                      <option value="onhold">OnHold</option>
                      <option value="calldate">Call Date</option>
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

export default PrivateRoute(UpdateContact);
