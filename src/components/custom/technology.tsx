import Image from "next/image";

export default function Technology() {
    return (
        <div className="h-screen space-y-24">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-sans font-thin">The technology I frequently use</h2>
                <div className="grid grid-cols-2 gap-2 md:gap-4 items-center lg:grid-cols-3 w-full mt-8">
                    <Image className="mx-auto invert" width={100} height={50} src="/quarkus-logo.png"
                           alt="Image of the Quarkus logo"></Image>
                    <Image className="mx-auto invert" width={100} height={50} src="/kubernetes-logo.png"
                           alt="Image of the Kotlin logo"></Image>
                    <Image className="mx-auto " width={75} height={50} src="/postgres-logo.webp"
                           alt="Image of the Kotlin logo"></Image>
                    <Image className="mx-auto invert" width={100} height={50} src="/kotlin-logo.png"
                           alt="Image of the Kotlin logo"></Image>
                    <Image className="mx-auto invert" width={150} height={50} src="/java-logo.gif"
                           alt="Image of the Kotlin logo"></Image>
                    <Image className="mx-auto " width={100} height={50} src="/gcloud-logo.png"
                           alt="Image of the Kotlin logo"></Image>
                    <Image className="mx-auto invert" width={100} height={50} src="/terraform-logo.png"
                           alt="Image of the Kotlin logo"></Image>
                    <Image className="mx-auto invert" width={100} height={50} src="/github-logo.png"
                           alt="Image of the Kotlin logo"></Image>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-sans font-thin">Technology I use mostly for fun</h2>
                <div className="grid grid-cols-2 gap-2 md:gap-4 items-center lg:grid-cols-3 w-full mt-8">
                    <Image className="mx-auto invert" width={100} height={50} src="/nextjs-logo.webp"
                           alt="Image of the Quarkus logo"></Image>
                    <Image className="mx-auto" width={100} height={50} src="/vue-logo.webp"
                           alt="Image of the Kotlin logo"></Image>
                    <Image className="mx-auto invert" width={75} height={50} src="/tailwind-logo.webp"
                           alt="Image of the Kotlin logo"></Image>
                </div>
            </div>
        </div>
    );
}