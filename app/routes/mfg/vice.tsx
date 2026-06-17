import MfgNav from "~/components/mfg/mfgNav";

export default function Vice() {
    return (
        <div>
            <MfgNav/>

            <div className={"flex flex-col items-center justify-center pt-5 pb-5"}>

                <div className={"flex justify-center gap-10 items-start"}>

                    <div className={"flex flex-col justify-center gap-5"}>
                        <div
                            className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">
                            <img className={"rounded-xl"} src={"/manufacturing/vice.jpg"} alt={"Vise"}/>
                        </div>

                        <div className={"rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-violet-300"}>
                            <p className={"font-semibold mb-2"}>
                                Challenges:
                            </p>
                            <p className={""}>Aiming the welder and making pretty weld, though this has been a perpetual problem with my welding even since Grade 9.</p>
                        </div>
                    </div>


                    <div className={"flex flex-col justify-center gap-5"}>

                        <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                            <p className="font-bold text-xl mb-2">Vise</p>

                            <p className="mb-2">Goal: Weld together a functional vise.</p>
                        </div>

                        <div className={"grid grid-cols-2 gap-5"}>

                            <div
                                className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                                <p className="font-semibold">Tools:</p>
                                {/* Added list-disc and pl-5 */}
                                <ul className="list-disc pl-5">
                                    <li>Mig Welder</li>
                                    <li>Horizontal Band Saw</li>
                                    <li>Drill Press</li>
                                    <li>Mill</li>
                                    <li>Grinder</li>
                                </ul>
                            </div>
                            <div
                                className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                                <p className="font-semibold">Materials:</p>
                                {/* Added list-disc and pl-5 */}
                                {/* Added list-disc and pl-5 */}
                                <ul className="list-disc pl-5 ">
                                    <li>Mild steel
                                        {/* Added nested spacing and bullets */}
                                        <ul className="list-circle pl-5">
                                            <li>Angle iron</li>
                                            <li>Square tubing</li>
                                        </ul>
                                    </li>
                                    <li>Washers and nuts</li>
                                </ul>
                            </div>

                        </div>


                        <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                            <p className="font-semibold">Process:</p>
                            <ul className="list-disc pl-5 mb-">
                                <li>Prepare the material to be welded, such as by drilling holes in it and cutting it to
                                    length
                                </li>
                                <li>Assemble the prepared parts together following the procedural plan</li>
                            </ul>

                            <details>
                                <summary className="cursor-pointer font-semibold mb-2 mt-4">Detailed Procedural Plan:
                                </summary>

                                {/* Added list-decimal and pl-5 */}
                                <ol className="list-decimal pl-5 space-y-4">
                                    <li>Weld the ‘frame’ (two 8” angle irons and the two 4” angle irons without the
                                        square
                                        tubing) together using the jig
                                        {/* Added nested list-decimal for sub-steps */}
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>Align pieces using a square</li>
                                            <li>Secure with locking pliers</li>
                                            <li>Tack weld in each of the four corners</li>
                                            <li>Remove from jig</li>
                                            <li>Finish welds along the bottom of the piece</li>
                                            <li>(optional) grind off the tack welds</li>
                                        </ol>
                                    </li>

                                    <li>Weld feet (two 1 ¾” angle irons) to the frame
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>They should be positioned 1.5” from the edge of the frame on either side
                                            </li>
                                            <li>They should be held using a clamp (either two smaller ones or one big
                                                one, I
                                                elected to use the big one)
                                            </li>
                                            <li>Clamp the piece to the welding booth such that the places that need to
                                                be
                                                welded
                                                are facing up and finish welds can be directly applied
                                            </li>
                                        </ol>
                                    </li>

                                    <li>Weld nuts to the threaded rod
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>With the threaded rods through all three nuts and there being a space
                                                between
                                                the later two nuts, having a bit of loose space and washers between
                                                them,
                                                add a
                                                total of four tack welds with two on each nut 180 degrees from each
                                                other
                                            </li>
                                        </ol>
                                    </li>

                                    <li>Weld spacer to the bottom of the moving jaw
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>With the jaw clamped against the non-moving jaw, clamp the spacer
                                                against
                                                the
                                                jaw
                                            </li>
                                            <li>Apply two finish welds</li>
                                        </ol>
                                    </li>

                                    <li>Weld bottom washers
                                        <ol className="list-decimal pl-5 space-y-1">
                                            <li>Add a piece of paper under the moving jaw</li>
                                            <li>Clamp the two washers in their correct positions</li>
                                            <li>Weld along the middle of the spacers</li>
                                        </ol>
                                    </li>
                                </ol>
                            </details>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}