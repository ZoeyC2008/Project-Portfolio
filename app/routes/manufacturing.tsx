import PhotoArea from "~/components/photoArea";
import TextArea from "~/components/textArea";
import MfgNav from "~/components/mfg/mfgNav";

export default function manufacturing() {
    const yumiText: string = "Yumi and the Nightmare Painter is a Cosmere novel set on Komashi. It is the third secret project and the second book in the series Hoid's Travails which are about Hoid's stories that he tells in the space age. It can be deduced that Hoid is talking to a Rosharan due to the uses of the words Nimi, Veden, etc. It is likely this Rosharan will be a main character in mistborn era 4 and are unlikely to be part of the main cast of Stormlight as of right now, due to being centuries in the future."

    return (
        <div>
            <div>
                <MfgNav/>
            </div>

            <div className={"flex justify-center gap-[2.5vw]"}>
                <PhotoArea imageSrc={"/manufacturing/Yumi_Back_Endpaper_by_Aliya_Chen.jpg"}/>

                <div className={"flex flex-col items-center gap-5"}>
                    <div
                        className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                        <p>Zoey Z. Chen</p>
                        <p>Manufacturing Portfolio</p>
                        <p>Earl of March Secondary School · Grade 12 · TMJ4M · Mr. Kellar</p>
                    </div>

                    <div
                        className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                        <p>About Me:</p>
                        <p>Zoey is a high school student who spends her time ping ponging between her two interests: engineering and english. One of her courses in the spring semester of the 2025-26 school year is a manufacturing class where she has worked on both the lathe and in welding booths, with her favourite being the lathe. She also helped organize the 2026 Earl of March Summit Expo, an exhibition dedicated to the future of STEM and all that can be.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}