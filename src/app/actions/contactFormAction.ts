// const { MAIL_ACCESS_KEY } = process.env;
import { MAIL_ACCESS_KEY } from "@/app/assets/utils";

export default async function contactFormAction (name: string, prefix: number, phone: number, contactedBy: string, coName: string, message: string){
    // const MAIL_ACCESS_KEY = "eaa633cc-efd4-4234-ad1f-60f07519b9d5"
    if (!name || !prefix || !phone || !contactedBy || !message){
        throw new Error ("Please complete all required fields before submitting.")
    };
    console.log("MAIL KEY:", MAIL_ACCESS_KEY)
    try {
        if (!MAIL_ACCESS_KEY) {
            throw new Error("API access key is not defined.");
        };

        const formData = {name, prefix, phone, contactedBy, coName, message, access_key: MAIL_ACCESS_KEY};
        const json = JSON.stringify(formData);
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        // const response = {}
        const result = await response.json();
        if (result.success){
            console.log("Result in sever side: ", result);
            // window.alert("Success!");
            return result
        } else {
            console.error("Error on server side:", result);
            throw new Error("Failed to submit the form.");
          }
    } catch (error) {
        console.error(error);
        return false;
    }
};

// export default function contactFormAction(name: string, prefix: number, phone: number, contactedBy: string, coName: string){
//     if (!name || !prefix || !phone || !contactedBy){
//         throw new Error ("Please complete all required fields before submitting.")
//     };
//     try {
//         console.log("Action successfull", {
//             name,
//             prefix,
//             contactedBy,
//             phone,
//             coName
//         });
//         window.alert("Success!")
//         return true;
//     } catch (error) {
//         console.error(error);
//         return false;
//     }
// };
