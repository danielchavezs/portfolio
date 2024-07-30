'use client'
import { useState, useEffect  } from "react";
import contactFormAction from "../actions/contactFormAction";
import { Errors, Parameters } from "../assets/types";
// const { MAIL_ACCESS_KEY } = process.env;
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactForm() {
  const [parameters, setParameters] = useState({
    name: "",
      email: "",
      prefix: "",
      phone: "",
      contactedBy: "",
      coName: "",
      message: ""
    });
  
    const [error, setError] = useState({
      name: false,
      email: false,
      prefix: false,
      phone: false,
      contactedBy: false,
      coName: false,
      message: false,
      count: 0
    });
  
    useEffect(() => {
        AOS.init({
          // Configuración opcional
          duration: 1000,
        });
      }, []);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const property = event.target.name;
      let value = event.target.value;
      setParameters({ ...parameters, [property]: (value) });
    };
    
    const resetErrors = () => {
      setError({
        name: false,
        email: false,
        prefix: false,
        phone: false,
        contactedBy: false,
        coName: false,
        message: false,
        count: 0
      });
    };
    
    const resetAll = () => {  
      setParameters({
        name: "",
        email: "",
        prefix: "",
        phone: "",
        contactedBy: "",
        coName: "",
        message: "",
      });
  
      resetErrors();
    };
    
    const validateForm = async () => {
      resetErrors();
      const requiredFields: (keyof Parameters)[] = ["name", "email", "prefix", "phone", "contactedBy", "coName", "message"];
      let fieldsCompleted = true;
      
      const newErrors = {name: false, email: false, prefix: false, phone: false, contactedBy: false, coName: false, message: false, count: 0};
      for (const key of requiredFields) {
        if (parameters[key] === "") {
          if(key === "coName" && parameters.contactedBy === "person"){
            console.log("Exception case: when contacted by person, there is no organization name required.")
          } else{
            newErrors[key] = true;
            fieldsCompleted = false;
            newErrors.count++
          }
        };
      };
      setError(newErrors)
      return fieldsCompleted;
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isValid = await validateForm();
      console.log(isValid)
      
      if (!isValid) {
        console.log("ERRORS REGISTERED:", error);
        alert("Please complete all required fields before submiting.");  // remember to improve ir with sweetalert2
        return false;
      };
      try {
        const { name, contactedBy, coName, message } = parameters;
        const phone = Number(parameters.phone);
        const prefix = Number(parameters.prefix)
  
        const res = await contactFormAction(name, prefix, phone, contactedBy, coName, message);
        console.log("Results in client side: ", res);

        if(res.success){
          window.alert(res.message);
        };
      } catch (err) {
        window.alert(error);
      }
    };
    // console.log("PARAMETERS CATCHED: ", parameters);
    return (
        <div className="bg-slate-700 mt-10 flex flex-col items-center w-fit h-fit p-8 rounded-xl" data-aos="zoom-out">
            {/* <h1 className="flex font-bold text-xl mb-5 ">Contact me:</h1> */}
            {/* <div className="bg-white flex lg:flex-row md:flex-col md:rounded-2xl sm:flex-col max-w-fit shadow-2xl lg:rounded-2xl"> */}
    
              <div className="flex justify-between">

                <form onSubmit={handleSubmit}>
                <div className="flex justify-between mb-8">
                  <h2 className="text-xl font-extrabold"> Contact Me </h2>
                  <button
                    className="text-gray-200 font-semibold underline text-xs"
                    type="button"
                    onClick={resetAll}
                  >
                    {" "}
                    Clear All
                  </button>
                </div>

                    <div className="mb-4">
                        <label className="font-medium ">
                            Name
                        </label>
                        <input
                            className="px-2 pb-1 mt-1 w-full font-bold text-black rounded-sm"
                            id="name"
                            type="text"
                            name="name"
                            value={parameters.name}
                            onChange={handleChange}
                        />
                        <span className={error.name? "text-xs font-semibold text-red-500": "hidden"}>This field is required</span>
                    </div>

                    <div className="mb-4">
                        <label className="font-medium ">
                            e-mail
                        </label>
                        <input
                            className="px-2 pb-1 mt-1 w-full font-bold text-black rounded-sm"
                            id="email"
                            type="email"
                            name="email"
                            value={parameters.email}
                            onChange={handleChange}
                        />
                        <span className={error.email? "text-xs font-semibold text-red-500": "hidden"}>This field is required</span>
                    </div>

                    <div className="flex md:flex-row sm:flex-col justify-between md:space-x-8 sm:space-x-0 sm:space-y-2 md:space-y-0">
                      <div className="flex flex-col">
                          <label className="font-medium ">
                              Prefix
                          </label>
                          <input
                              className="px-2 pb-1 mt-1 w-20 font-bold text-black rounded-sm"
                              id="prefix"
                              type="number"
                              name="prefix"
                              value={parameters.prefix}
                              onChange={handleChange}
                          />
                          <span className={error.prefix? "text-xs font-semibold text-red-500": "hidden"}>This field is required</span>
                      </div>

                      <div className="flex flex-col">
                          <label className="font-medium ">
                              Phone
                          </label>
                          <input
                              className="px-2 pb-1 mt-1 w-full font-bold text-black rounded-sm"
                              id="phone"
                              type="number"
                              name="phone"
                              value={parameters.phone}
                              onChange={handleChange}
                          />
                          <span className={error.phone? "text-xs font-semibold text-red-500": "hidden"}>This field is required</span>
                      </div>
                    </div>


                    <div className="my-4">
                      <label className="">
                        Contact as:
                      </label>
  
                      <div className="flex flex-col items-start">
                        <label className="">
                          <input
                            type="radio"
                            className="form-radio"
                            name="contactedBy"
                            value="person"
                            checked={parameters.contactedBy === "person"}
                            onChange={handleChange}
                            id="person"
                          />
                          <span className="ml-2 text-sm font-bold">Person</span>
                        </label> 

                        <label className="">
                          <input
                            type="radio"
                            className="form-radio"
                            name="contactedBy"
                            value="organization"
                            checked={parameters.contactedBy === "organization"}
                            onChange={handleChange}
                            id="organization"
                          />
                          <span className="ml-2 text-sm font-bold">Organization</span>
                        </label>
                      </div>
                      <span className={error.contactedBy? "text-xs font-semibold text-red-500": "hidden"}>This field is required</span>
                    </div>

                    <div className={parameters.contactedBy === "organization" ? "mb-4" : "hidden"}>
                        <label className="font-medium ">
                            Company´s Name 
                            {/* <span className="text-xs text-gray-700">(optional)</span> */}
                        </label>
                        <input
                            className="px-2 pb-1 mt-1 w-full font-bold text-black rounded-sm"
                            id="coName"
                            type="text"
                            name="coName"
                            value={parameters.coName}
                            onChange={handleChange}
                        />
                        <span className={error.coName? "text-xs font-semibold text-red-500": "hidden"}>This field is required</span>
                    </div>

                    <div className="mb-4">
                        <label className="font-medium ">
                            Message
                        </label>
                        <textarea
                            className="px-2 mt-1 w-full min-h-24 h-fit font-bold text-black rounded-sm"
                            id="message"
                            name="message"
                            value={parameters.message}
                            onChange={handleChange}
                        />
                        <span className={error.message? "text-xs font-semibold text-red-500": "hidden"}>This field is required</span>
                    </div>

                  {/* <div className=""> */}
                    <button
                      type="submit"
                      className="bg-slate-500 rounded-md p-2 hover:bg-slate-400"
                    >
                      {/* <CalculatorIcon/> puede ser un logo de mail */}
                      {" "}
                      Send Message{" "}
                    </button>
                  {/* </div> */}

                </form>
              </div>

        </div>

    )
};
