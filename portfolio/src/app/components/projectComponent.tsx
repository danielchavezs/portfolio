'use client'
import { useState } from "react";
import { ProjectImage } from "../assets/images";
import { ProjectType } from "../assets/types";

export default function ProjectComponent({ id, name, images, description, href }: ProjectType) {

    const [showing, setShowing] = useState({
        description: {
            visible: true,
            buttonName: "Show Description"
        },
        view: {
            img: images[0],
            buttonName: "View Mobile"
        }
    });

    const changeImage = () => {
        if (showing.view.img === images[0]) {
            setShowing({
                ...showing,
                view: {
                    img: images[1],
                    buttonName: "View Desktop ",
                }, 
            });
        } else {
            setShowing({
                ...showing,
                view: {
                    img: images[0],
                    buttonName: "View Mobile",
                }, 
            });
        }
    };

    return (
        <div className="flex md:flex-row sm:flex-col gap-4 p-4 rounded-md border-slate-800 w-full hover:border-0 hover:bg-gradient-to-dark">
            <div className="space-y-3 lg:w-1/3 md:w-2/5 sm:w-full">
                <h3 className="font-semibold md:text-lg sm:text-base text-center">{name}</h3>
                <div className="flex justify-center">
                    <ProjectImage alt={name} src={showing.view.img} href={href}/>
                </div>
            </div>

            <div className={`flex flex-col lg:pl-10 px-0 py-auto space-y-3 lg:w-2/3 md:w-3/5 sm:w-full transition-all duration-700 ease-in-out`}>
                <p className="lg:text-base text-sm my-auto">{description}</p>
                <button onClick={changeImage} className="text-xs w-fit font-semibold bg-slate-600 rounded-md p-1 px-2 hover:bg-slate-500">
                    {showing.view.buttonName}
                </button>
            </div>
        </div>
    )
};