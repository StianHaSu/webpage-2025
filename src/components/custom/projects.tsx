import CustomCard from "@/components/custom/custom-card";

export default function Projects() {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center items-center flex-col">
                <h3 className="text-lg font-sans font-thin text-center max-w-[250px] md:max-w-[500px] md:text-xl lg:text-2xl">
                    Most recent project
                </h3>
                <div className="flex justify-center mt-12">
                    <CustomCard />
                </div>
            </div>
        </div>
    )
}