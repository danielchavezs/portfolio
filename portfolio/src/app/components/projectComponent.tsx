'use client'
import { useState } from "react";
import { ProjectImage } from "../assets/images";
import { ProjectType } from "../assets/types";

export default function ProjectComponent({ id, name, images, description, href }: ProjectType) {

    const [showing, setShowing] = useState({
        description: {
            visible: false,
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
        <div 
            className="flex flex-col p-4 rounded-md border-slate-800 w-full hover:border-0 hover:bg-gradient-to-dark"
            onMouseEnter={() => setShowing((prev) => ({ ...prev, description: { ...prev.description, visible: true } }))}
            onMouseLeave={() => setShowing((prev) => ({ ...prev, description: { ...prev.description, visible: false } }))}
        >
            <div className="space-y-3">
                <h3 className="font-semibold text-xl text-center">{name}</h3>
                <div className="flex justify-center">
                    <ProjectImage alt={name} src={showing.view.img} href={href}/>
                </div>
                    <button onClick={changeImage} className="text-xs font-semibold bg-slate-600 rounded-md p-1 px-2 hover:bg-slate-500">
                        {showing.view.buttonName}
                    </button>
            </div>

            <div className={`mt-4 transition-all duration-700 ease-in-out ${showing.description.visible ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <p>{description}</p>
            </div>
        </div>
    )
};