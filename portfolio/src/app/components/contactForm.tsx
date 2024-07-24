'use client'
import { useState } from "react";
import contactFormAction from "../actions/contactFormAction";
import { Errors, Parameters } from "../types";

export default function ContactForm() {
    const [parameters, setParameters] = useState({
      name: "",
      prefix: "",
      phone: "",
      contactedBy: "",
      coName: "",
    });
  
    const [error, setError] = useState({
      name: false,
      prefix: false,
      phone: false,
      contactedBy: false,
      coName: false,
      count: 0
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const property = event.target.name;
      let value = event.target.value;
      setParameters({ ...parameters, [property]: (value) });
    };
    
    const resetErrors = () => {
      setError({
        name: false,
        prefix: false,
        phone: false,
        contactedBy: false,
        coName: false,
        count: 0
      });
    };
    
    const resetAll = () => {  
      setParameters({
        name: "",
        prefix: "",
        phone: "",
        contactedBy: "",
        coName: "",
      });
  
      resetErrors();
    };
    
    const validateForm = async () => {
      resetErrors();
      const requiredFields: (keyof Parameters)[] = ["name", "prefix", "phone", "contactedBy", "coName"];
      let fieldsCompleted = true;
      
      const newErrors = {name: false, prefix: false, phone: false, contactedBy: false, coName: false, count: 0};
      for (const key of requiredFields) {
        if (parameters[key] === "") {
          if(key === "coName" && parameters.contactedBy === "person"){
            console.log("Exception case: when contacted by person, there is no organization name.")
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
        const { name, contactedBy, coName } = parameters;
        const phone = Number(parameters.phone);
        const prefix = Number(parameters.prefix)
  
        const res = contactFormAction(name, prefix, phone, contactedBy, coName);
        // setResults(res);
      } catch (err) {
        window.alert(error);
      }
    };

    // console.log("PARAMETERS CATCHED: ", parameters);
    return (
        <div className="bg-sky-300 mt-10 flex flex-col items-center w-fit h-fit p-8 rounded-xl">
            <h1 className="flex font-bold text-xl mb-5">Contact me:</h1>
            {/* <div className="bg-white flex lg:flex-row md:flex-col md:rounded-2xl sm:flex-col max-w-fit shadow-2xl lg:rounded-2xl"> */}
    
              <div className="flex justify-between">

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="font-medium text-black">
                            Name
                        </label>
                        <input
                            className="px-2 pb-1 mt-1 w-full font-bold text-black"
                            id="name"
                            type="text"
                            name="name"
                            value={parameters.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-row justify-between space-x-8">
                      <div className="flex flex-col">
                          <label className="font-medium text-black">
                              Prefix
                          </label>
                          <input
                              className="px-2 pb-1 mt-1 w-20 font-bold text-black"
                              id="prefix"
                              type="number"
                              name="prefix"
                              value={parameters.prefix}
                              onChange={handleChange}
                          />
                      </div>

                      <div className="flex flex-col">
                          <label className="font-medium text-black">
                              Phone
                          </label>
                          <input
                              className="px-2 pb-1 mt-1 w-full font-bold text-black"
                              id="phone"
                              type="number"
                              name="phone"
                              value={parameters.phone}
                              onChange={handleChange}
                          />
                      </div>
                    </div>


                    <div className="my-4">
                      <label className="">
                        Contact as:
                      </label>
  
                      <div className="flex flex-col items-start">
                        <label className=""
                          // {parameters.contactedBy === "person" ? radioSelectedLabel: radioLabels}
                        >
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

                        <label className=""
                          // {parameters.contactedBy === "organization" ? radioSelectedLabel: radioLabels}
                        >
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
                      <span className={error.contactedBy? "text-xs text-red": "hidden"}>This field is required</span>
                    </div>

                    <div className={parameters.contactedBy === "organization" ? "" : "hidden"}>
                        <label className="font-medium text-black">
                            Company´s Name 
                            {/* <span className="text-xs text-gray-700">(optional)</span> */}
                        </label>
                        <input
                            className="px-2 pb-1 mt-1 w-full font-bold text-black"
                            id="coName"
                            type="text"
                            name="coName"
                            value={parameters.coName}
                            onChange={handleChange}
                        />
                    </div>

                  {/* <div className=""> */}
                    <button
                      type="submit"
                      className="lg:w-60 md:w-64 mt-8 flex font-bold text-sm bg-yellow-300 py-2 pl-12 pr-6 sm:place-content-center sm:px-0 rounded-3xl hover:bg-ligthlime sm:w-full"
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