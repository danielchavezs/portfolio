export default function contactFormAction(name: string, prefix: number, phone: number, contactedBy: string, coName: string){
    if (!name || !prefix || !phone || !contactedBy){
        throw new Error ("Please complete all required fields before submitting.")
    };
    try {
        console.log("Action successfull", {
            name,
            prefix,
            contactedBy,
            phone,
            coName
        });
        window.alert("Success!")
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};