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
            buttonName: "Mobile View"
        }
    });

    const changeImage = () => {
        if (showing.view.img === images[0]) {
            setShowing({
                ...showing,
                view: {
                    img: images[1],
                    buttonName: "Desktop View",
                }, 
            });
        } else {
            setShowing({
                ...showing,
                view: {
                    img: images[0],
                    buttonName: "Mobile View",
                }, 
            });
        }
    };

    return (
        <div 
            className="flex flex-col p-4 rounded-md border-slate-500 hover:border-2 w-full"
            onMouseEnter={() => setShowing((prev) => ({ ...prev, description: { ...prev.description, visible: true } }))}
            onMouseLeave={() => setShowing((prev) => ({ ...prev, description: { ...prev.description, visible: false } }))}
        >
            <div className="space-y-3">
                <h3 className="font-semibold text-xl text-center">{name}</h3>
                <div className="flex justify-center">
                    <ProjectImage alt={name} src={showing.view.img} href={href}/>
                </div>
                    <button onClick={changeImage} className="text-xs bg-slate-500 rounded-md p-1 hover:bg-slate-400">
                        {showing.view.buttonName}
                    </button>
            </div>

            <div className={`mt-4 transition-all duration-700 ease-in-out ${showing.description.visible ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <p>{description}</p>
            </div>
        </div>
    )
};