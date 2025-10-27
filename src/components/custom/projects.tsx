import CustomCard from "@/components/custom/custom-card";
import { LanguageState, useLanguageStore } from "@/state/state-store";
import project_content_en from "@/app/content/english/projects.json"
import project_content_no from "@/app/content/norwegian/projects.json"


interface Projects {
    recent: string;
}

export default function Projects() {
    const language = useLanguageStore((state: LanguageState) => state.language)
    const projectContent = language == "en" ? project_content_en : project_content_no;

    return (
        <div className="flex justify-center">
            <div className="flex justify-center items-center flex-col">
                <h3 className="text-lg font-sans font-thin text-center max-w-[250px] md:max-w-[500px] md:text-xl lg:text-2xl">
                    {projectContent.recent}
                </h3>
                <div className="flex justify-center mt-12">
                    <CustomCard />
                </div>
            </div>
        </div>
    )
}