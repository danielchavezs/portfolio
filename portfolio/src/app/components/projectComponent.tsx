'use client'
import { useState } from "react";
import { ProjectImage } from "../assets/images";
import { ProjectType } from "../assets/types";


export default function ProjectComponent({ id, name, images, description }: ProjectType) {
    
    const [img, setImg] = useState(images[0]);
    const [buttonName, setButtonName] = useState("Mobile View");

    const changeImage = () => {
        console.log("ejecutando botón de cambio de vista");
        if (img === images[0]) {
            setImg(images[1]);
            setButtonName("Desktop View");
        } else {
            setImg(images[0]);
            setButtonName("Mobile View");
        }
    };
    console.log(img, buttonName);

    return (
        <div className="m-6 border-2">
            <h3 className="font-semibold text-xl text-center">{id} - {name}</h3>
            <div>
                <ProjectImage alt={name} src={img}/>
                <button onClick={changeImage} className="bg-slate-500 rounded-md p-2 ml-6 hover:bg-slate-400">
                    {buttonName}
                </button>
                {/* <ProjectImage alt={name} src={img2}/> */}
            </div>
            <p><strong>Description: </strong>{description}</p>
            
        </div>
    )
};