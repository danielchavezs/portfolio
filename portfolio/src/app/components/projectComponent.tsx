'use client'
import { useState } from "react";
import { ProjectImage } from "../assets/images";
import { ProjectType } from "../assets/types";


export default function ProjectComponent({ id, name, images, description }: ProjectType) {

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
        console.log("ejecutando botón de cambio de vista");
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

    const showDescription = () => {
        if(showing.description.visible === false){
            setShowing({
                ...showing,
                description: {
                    visible: true,
                    buttonName: "Hide Description"
                }
            },)
        } else {
            setShowing({
                ...showing,
                description: {
                    visible: false,
                    buttonName: "Show Description"
                }
            })
        };
    };

    return (
        <div className="flex flex-row p-4 rounded-md space-x-2 border-slate-500 hover:border-2">
            <div className="space-y-3">
                <h3 className="font-semibold text-xl text-center">{id} - {name}</h3>
                <div>
                    <ProjectImage alt={name} src={showing.view.img}/>
                    {/* <ProjectImage alt={name} src={img2}/> */}
                </div>
                <button onClick={changeImage} className="bg-slate-500 rounded-md p-2 hover:bg-slate-400">
                    {showing.view.buttonName}
                </button>
                <button onClick={showDescription} className="ml-2 bg-slate-500 rounded-md p-2 hover:bg-slate-400">
                    {showing.description.buttonName}
                </button>
            </div>
            <div className={showing.description.visible ? "" : "hidden"}>
                <h4><strong>Description: </strong></h4>
                <p>{description}</p>

            </div>
        </div>
    )
};