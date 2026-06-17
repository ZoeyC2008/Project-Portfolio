import MfgNav from "~/components/mfg/mfgNav";

export default function CNC() {
    return (
        <div>
            <MfgNav/>

            <div className={"flex flex-col items-center justify-center pt-5 pb-5"}>

                <div className={"flex justify-center gap-10 items-start"}>

                    <div className={"flex flex-col justify-center gap-5"}>
                        <div
                            className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">
                            <img className={"rounded-xl"} src={"/manufacturing/beltFront.jpg"} alt={"Belt buckle front"}/>
                        </div>

                        <div
                            className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">
                            <img className={"rounded-xl"} src={"/manufacturing/beltBack.jpg"} alt={"Belt buckle back"}/>
                        </div>

                        {/*<div*/}
                        {/*    className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">*/}
                        {/*    <img className={"rounded-xl"} src={"/manufacturing/yiSangToolpath.png"} alt={"Yi Sang toolpath"}/>*/}
                        {/*</div>*/}
                    </div>


                    <div className={"flex flex-col justify-center gap-5"}>

                        <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                            <p className="font-bold text-xl mb-2">CNC Belt Buckle</p>

                            <p className="mb-2">Goal: Design and program an engraving on a belt buckle.</p>
                        </div>

                        <div className={"grid grid-cols-2 gap-5 w-[46.5vw]"}>

                            <div
                                className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                                <p className="font-semibold">Tools:</p>
                                {/* Added list-disc and pl-5 */}
                                <ul className="list-disc pl-5">
                                    <li>Fusion 360</li>
                                    <li>Horizontal Band Saw</li>
                                    <li>Tormach 5-axis CNC</li>
                                    <li>Tormach desktop CNC</li>
                                    <li>45 degree engraving bit</li>
                                    <li>Sandpaper</li>
                                </ul>
                            </div>
                            <div
                                className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                                <p className="font-semibold">Materials:</p>
                                {/* Added list-disc and pl-5 */}
                                <ul className="list-disc pl-5 ">
                                    <li>6061 aluminum</li>
                                </ul>
                            </div>

                        </div>


                        <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                            <p className="font-semibold">Process:</p>
                            <ul className="list-disc pl-5 mb-">
                                <li>Trace design in Fusion 360, which results in a sketch that can be exported as a DXF</li>
                                <li>In the manufacture tab, program what tool to use, the feeds and speeds, and where the machine should cut</li>
                                <li>On the 5-axis-CNC, cut out a blank (i.e. it has the general shape, but no engraving)</li>
                                <li>On the desktop CNC, run the program made in Fusion to engrave a design</li>
                            </ul>

                        </div>

                        <div className={"rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-violet-300"}>
                            <p className={"font-semibold mb-2"}>
                                Challenges:
                            </p>
                            <p>Using conversational with the desktop CNC's to write multi-line text, especially because line height included the ascending and descending parts of letters, so the actual font size wouldn't be the same depending on the letters on that line, so I had to eyeball the size of the letters and pray they were similar-ish.</p>
                        </div>

                        <div className={"rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-violet-300"}>
                            <p className={"font-semibold mb-2"}>
                                Other notes:
                            </p>
                            <p>The toolpath I ran wasn't very complicated, so I included an additional toolpath screenshot on classroom to show that I am capable of programming it in Fusion.</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}