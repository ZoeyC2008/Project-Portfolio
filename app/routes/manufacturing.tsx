import PhotoArea from "~/components/photoArea";
import TextArea from "~/components/textArea";
import MfgNav from "~/components/mfgNav";

export default function manufacturing() {
    const yumiText: string = "Yumi and the Nightmare Painter is a Cosmere novel set on Komashi. It is the third secret project and the second book in the series Hoid's Travails which are about Hoid's stories that he tells in the space age. It can be deduced that Hoid is talking to a Rosharan due to the uses of the words Nimi, Veden, etc. It is likely this Rosharan will be a main character in mistborn era 4 and are unlikely to be part of the main cast of Stormlight as of right now, due to being centuries in the future."

    return (
        <div>
            <div>
                <MfgNav/>
            </div>

            <div className={"flex justify-center gap-[2.5vw]"}>
                <PhotoArea imageSrc={"/manufacturing/Yumi_Back_Endpaper_by_Aliya_Chen.jpg"}/>
                <TextArea text={yumiText} />
            </div>

        </div>
    )
}