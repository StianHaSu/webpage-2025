import CustomCard from "@/components/custom/custom-card";
import about_me_en from "@/app/content/english/about-me.json"
import about_me_no from "@/app/content/norwegian/about-me.json"
import { LanguageState, useLanguageStore } from "@/state/state-store";

const calculateAge = () => {
    const birthDate = new Date('2000-04-04');
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);
    return Math.abs(age.getUTCFullYear() - 1970);
}

interface AboutMe {
    employment: string[];
    stereotype: string;
}

export default function AboutMe () {
    const language = useLanguageStore((state: LanguageState) => state.language)
    const aboutMeContent: AboutMe = language == "en" ? about_me_en : about_me_no;

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="space-y-8 lg:space-y-24">
                <div className="flex justify-center items-center flex-col">
                    <h3 className="text-xl font-sans font-thin text-center max-w-[250px] md:max-w-[450px] md:text-3xl lg:text-4xl ">
                        {aboutMeContent.employment[0]} {calculateAge()} {aboutMeContent.employment[1]}
                    </h3>
                    <img className="mt-4 max-w-[150px] md:max-w-[350px] md:mt-6" src="/kahoot-logo-full.png"
                         alt="The kahoot logo with K and !"></img>
                </div>
                <div className="flex justify-center flex-col items-center">
                    <h3 className="text-xl font-sans font-thin text-center top-0 max-w-[250px] md:max-w-[450px] md:text-3xl lg:text-4xl ">
                        {aboutMeContent.stereotype}
                    </h3>
                    <a href="https://stereotype.no" target="_blank">
                        <img className="invert mt-8 max-w-[150px] md:max-w-[350px] md:mt-6" src="/stereotype-hvit-transparent.png"
                            alt="Logo of Stereotype AS">
                        </img>
                    </a>
                </div>
            </div>
        </div>
    )
}