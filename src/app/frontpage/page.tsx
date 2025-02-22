import AnimatedBeam from "@/components/animata/background/animated-beam";
import {redirect} from "next/navigation";
import React from "react";
import Link from "next/link";
import AboutMe from "@/components/custom/about-me";
import Projects from "@/components/custom/projects";
import Technology from "@/components/custom/technology";

export default function Home() {
    return (
        <div className="mb-44">
            <div
                className="w-[90vw] h-[95vh] opacity-30 z-[-10] absolute rounded-sm border-[#f2f4f3] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            </div>
            <div className="w-screen h-screen flex justify-center items-center flex-col">
                <div className="grid grid-cols-1 items-center h-full">
                    <div className="row-start-2">
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl font-semibold font-sans">
                                Stian Sundkvist
                            </h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="text-xl font-semibold font-sans">
                                Backend Developer
                            </p>
                        </div>
                    </div>
                    <div className="row-start-3 flex justify-center">
                        <div className="grid grid-cols-3 gap-12 items-end text-3xl opacity-75 md:text-4xl md:gap-16">
                            <Link href={"https://www.linkedin.com/in/stian-sundkvist"}><i className="fa fa-linkedin"
                                                                                          aria-hidden="true"></i></Link>
                            <Link href={"https://github.com/StianHaSu"}><i className="fa fa-github"
                                                                           aria-hidden="true"></i></Link>
                            <Link href={"https://www.instagram.com/szhtian/"}><i className="fa fa-instagram"
                                                                                 aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <AboutMe/>
            </div>
            <div className="flex justify-center">
                <Projects/>
            </div>
            <div className="flex justify-center mt-24">
                <Technology />
            </div>
        </div>

    )
}