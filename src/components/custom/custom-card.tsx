'use client';
import {Card, CardFooter, Image, Button} from "@heroui/react";
import {redirect} from "next/navigation";

export default function CustomCard() {
    return (
        <Card isFooterBlurred className="border-none" radius="lg">
            <Image
                alt="Two glasses of beer smiling and high fiving."
                className="object-cover"
                height={200}
                src="pilspal-frontpage.png"
                width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-medium font-semibold text-black/80">Pils Pal</p>
                <Button
                    onPress={() => open("https://pilspal.no")}
                    className="text-tiny text-black bg-black/5 px-1"
                    color="default"
                    radius="lg"
                    size="sm"
                    variant="flat"
                >
                    Check it out <i className="fa fa-external-link" aria-hidden="true"></i>
                </Button>
            </CardFooter>
        </Card>
    );
}
