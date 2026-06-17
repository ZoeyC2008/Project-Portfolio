import MfgNav from "~/components/mfg/mfgNav";

export default function Pen() {
    return (
        <div>
            <MfgNav/>

            <div className={"flex flex-col items-center justify-center pt-5 pb-5"}>

                <div className={"flex justify-center gap-10 items-start"}>

                    <div className={"flex flex-col justify-center gap-5"}>
                        <div
                            className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">
                            <img className={"rounded-xl"} src={"/manufacturing/penFull.jpg"} alt={"Assembled fountain pen"}/>
                        </div>

                        <div
                            className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">
                            <img className={"rounded-xl"} src={"/manufacturing/penPieces.jpg"} alt={"Disassembled fountain pen"}/>
                        </div>

                        {/*<div*/}
                        {/*    className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">*/}
                        {/*    <img className={"rounded-xl"} src={"/manufacturing/yiSangToolpath.png"} alt={"Yi Sang toolpath"}/>*/}
                        {/*</div>*/}
                    </div>


                    <div className={"flex flex-col justify-center gap-5"}>

                        <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                            <p className="font-bold text-xl mb-2">Machined Fountain Pen</p>

                            <p className="mb-2">Goal: Design and create functional fountain pen.</p>
                        </div>

                        <div className={"grid grid-cols-2 gap-5 w-[46.5vw]"}>

                            <div
                                className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                                <p className="font-semibold">Tools:</p>
                                {/* Added list-disc and pl-5 */}
                                <ul className="list-disc pl-5">
                                    <li>Fusion 360</li>
                                    <li>Horizontal Band Saw</li>
                                    <li>Lathe</li>
                                    <li>Manual tap and die</li>
                                    <li>45 degree engraving bit</li>
                                    <li>Bambu Studio</li>
                                    <li>Bambu P1S printer</li>
                                </ul>
                            </div>
                            <div
                                className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                                <p className="font-semibold">Materials:</p>
                                {/* Added list-disc and pl-5 */}
                                <ul className="list-disc pl-5 ">
                                    <li>6061 aluminum</li>
                                    <li>Brass</li>
                                    <li>PLA</li>
                                    <li>Nib, feed, and section from an Amazon Basics fountain pen</li>
                                </ul>
                            </div>

                        </div>


                        <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                            <p className="font-semibold">Process:</p>
                            <ul className="list-disc pl-5 mb-">
                                <li>Design parts of the fountain pen (barrel, cap, barrel finial, and cap finial) and print out drawings</li>
                                <li>Cut tapers, and chamfer tap the ends of the barrel and the cap with aluminum</li>
                                <li>Cut threads on brass and then make a fixture to hold it in the lathe</li>
                                <li>Cut an approximate arc with brass and sand it down to be closer to an arc</li>
                                <li>Run out of time to make a second finial, so it get 3D printed and press fitted in</li>
                            </ul>

                        </div>

                        <div className={"rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-violet-300"}>
                            <p className={"font-semibold mb-2"}>
                                Challenges:
                            </p>
                            <p>There were so many challenges! But the primary one: Amazon's threads aren't standard, so we couldn't exactly match the thread size and had to go with the closest match of 3/8-24, and even that had to be drilled out with a T size drill bit.</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}