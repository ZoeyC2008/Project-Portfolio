import MfgNav from "~/components/mfg/mfgNav";
import {useState} from "react";

const imagePairs = [
    {left: "/manufacturing/cad/bevelGearSupport.png", right: "/manufacturing/cad/bevelGearSupport-1.jpg"},
    {left: "/manufacturing/cad/bracket.png", right: "/manufacturing/cad/bracket-1.jpg"},
    {left: "/manufacturing/cad/fixtureFrame.png", right: "/manufacturing/cad/fixtureFrame-1.jpg"},
    {left: "/manufacturing/cad/pivotPiece.png", right: "/manufacturing/cad/pivotPiece-1.jpg"},
    {left: "/manufacturing/cad/saddlePlate.png", right: "/manufacturing/cad/saddlePlate-1.jpg"},
    {left: "/manufacturing/cad/slottedFixture.png", right: "/manufacturing/cad/slottedFixture-1.jpg"},
    {left: "/manufacturing/cad/starterBracket.png", right: "/manufacturing/cad/starterBracket-1.jpg"},
];

export default function CAD() {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex(i => Math.max(0, i - 1));
    const next = () => setIndex(i => Math.min(imagePairs.length - 1, i + 1));

    const {left, right} = imagePairs[index];

    return (
        <div>
            <MfgNav/>

            <div className="flex flex-col items-center justify-center pt-5 pb-5 gap-10">


                    <div
                        className="rounded-xl overflow-hidden w-[95vw] flex items-center justify-center border-4 border-dashed border-amber-900 p-6 bg-green-300">
                        <img className="rounded-xl" src={left} alt=""/>
                    </div>
                    <div
                        className="rounded-xl overflow-hidden w-[95vw] flex items-center justify-center border-4 border-dashed border-amber-900 p-6 bg-green-300">
                        <img className="rounded-xl" src={right} alt=""/>
                    </div>

                    <div className="flex w-full">
                        <div className="w-1/2 flex items-center justify-center">
                            <div
                                onClick={prev}
                                className={`rounded-xl w-50 p-4 text-center border-2 font-semibold border-yellow-400 bg-green-300 hover:bg-green-600 hover:cursor-pointer ${index === 0 ? "opacity-40 pointer-events-none" : ""}`}
                            >Prev
                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <div
                                onClick={next}
                                className={`rounded-xl w-50 p-4 text-center border-2 font-semibold border-yellow-400 bg-green-300 hover:bg-green-600 hover:cursor-pointer ${index === imagePairs.length - 1 ? "opacity-40 pointer-events-none" : ""}`}
                            >Next
                            </div>
                        </div>
                    </div>



                <div className={"grid grid-cols-2 grid-rows-2 gap-5"}>

                    <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                        <p className="font-bold text-xl mb-2">CAD Unit</p>

                        <p className="mb-2">Goal: Learn to make part designs in Fusion.</p>
                    </div>

                    <div className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                        <p className="font-semibold">Process:</p>
                        <ul className="list-disc pl-5 mb-">
                            <li>Look at the drawing...</li>
                        </ul>

                    </div>

                    <div
                        className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                        <p className="font-semibold">Tools:</p>
                        {/* Added list-disc and pl-5 */}
                        <ul className="list-disc pl-5">
                            <li>Fusion 360</li>
                        </ul>
                    </div>
                    <div
                        className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                        <p className="font-semibold">Materials:</p>
                        {/* Added list-disc and pl-5 */}
                        <ul className="list-disc pl-5 ">
                            <li>n/a</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}