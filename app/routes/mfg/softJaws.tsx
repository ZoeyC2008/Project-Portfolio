import MfgNav from "~/components/mfg/mfgNav";

export default function SoftJaws() {
    return (
        <div>
            <MfgNav/>

            <div className={"flex flex-col items-center justify-center pt-5 pb-5"}>

                <div className={"flex justify-center gap-10 items-start"}>

                    <div className={"flex flex-col justify-center gap-5"}>
                        <div
                            className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">
                            <img className={"rounded-xl"} src={"/manufacturing/softjaws.png"} alt={"Soft jaws prototype model in Fusion 360."}/>
                        </div>
                    </div>


                    <div className={"flex flex-col justify-center gap-5"}>

                        <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                            <p className="font-bold text-xl mb-2">Vise Soft Jaws Prototype</p>

                            <p className="mb-2">Goal: Prototype soft jaws to fit onto a vise and protect a piece from being marked up by it.</p>
                        </div>

                        <div className={"grid grid-cols-2 gap-5"}>

                            <div
                                className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                                <p className="font-semibold">Tools:</p>
                                {/* Added list-disc and pl-5 */}
                                <ul className="list-disc pl-5">
                                    <li>Fusion 360</li>
                                    <li>Bambu studio</li>
                                    <li>Bambu P1S printer</li>
                                </ul>
                            </div>
                            <div
                                className="rounded-xl border-4 border-dashed border-amber-900 p-4 bg-blue-300">

                                <p className="font-semibold">Materials:</p>
                                {/* Added list-disc and pl-5 */}
                                <ul className="list-disc pl-5 ">
                                    <li>PLA</li>
                                </ul>
                            </div>

                        </div>


                        <div className="rounded-xl w-[46.5vw] border-4 border-dashed border-amber-900 p-4 bg-blue-300">
                            <p className="font-semibold">Process:</p>
                            <ul className="list-disc pl-5 mb-">
                                <li>Determine vise dimensions</li>
                                <li>Design a prototype in Fusion 350</li>
                                <li>Slice and print using Bambu studio and the P1S</li>
                                <li>Iterate</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}