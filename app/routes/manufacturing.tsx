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

            <div className={"flex flex-col justify-center items-center"}>


                <div className={"flex justify-center gap-[2vw]"}>
                    < div
                        className="rounded-xl overflow-hidden w-[46.5vw] border-4 border-dashed border-amber-900 p-6 bg-green-300">

                        <img className={"rounded-xl"} src={"/manufacturing/Yumi_Back_Endpaper_by_Aliya_Chen.jpg"}
                             alt={"Yumi"}/>

                    </div>

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
                            <p>Zoey is a high school student who spends her time ping ponging between her two interests:
                                engineering and english, being on the FRC team and part of the book club. One of her courses in the spring semester of the 2025-26 school
                                year is a manufacturing class where she has worked on both the lathe and in welding
                                booths, with her favourite being the lathe. She also helped organize the 2026 Earl of
                                March
                                Summit Expo, an exhibition dedicated to the future of STEM and all that can be.</p>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-3 w-[75vw] h- border-gray-500 m-4"/>

                <div
                    className={"rounded-xl w-[95vw] border-4 border-dashed border-amber-900 mb-5 bg-violet-300 flex flex-col p-5"}>

                    <div className={"flex items-center justify-center"}>
                        <p className={"font-semibold text-xl"}>Career Plans: Industrial Engineer</p>
                    </div>

                    <p className={"font-semibold mt-2"}>Role:</p>

                    <ul className="list-disc pl-5 ">
                        <li>Industrial engineering (IE) is concerned with the design, improvement and installation of
                            integrated systems of people, materials, information, equipment and energy
                        </li>
                        <li>Oversee a company's current production process and determine how to improve it
                        </li>
                        <li>Work in various industries (e.g. health care, manufacturing, aerospace, etc.)
                        </li>
                    </ul>


                    <p className={"font-semibold mt-2"}>Requirements:</p>
                    <ul className="list-disc pl-5 ">
                        <li>Bachelor's degree is the minimum educational requirement</li>
                        <li>The degree should be in industrial engineering or a related field (e.g. mechanical engineering, electrical engineering, manufacturing engineering etc.)</li>
                        <li>Licences aren't needed for entry level positions</li>
                        <li>More experienced engineers can consider a Professional Engineer license, which lets them sign off on the work of others, and other such responsibilities</li>
                        <li>In high school, take all the typical engineering-oriented courses (calc, chem, physics, etc.)</li>
                        <li>As with all engineering positions, soft skills are an important factor</li>
                    </ul>

                    <p className={"font-semibold mt-2"}>Sources:</p>
                    <ul className="list-disc pl-5 ">
                        <li> <a href="https://ca.indeed.com/career-advice/finding-a-job/how-to-become-industrial-engineer" className={"text-blue-500 underline"}> How to Become an Industrial Engineer</a></li>
                        <li> <a href="https://www.bls.gov/ooh/architecture-and-engineering/industrial-engineers.htm" className={"text-blue-500 underline"}>Industrial Engineering: Occupational Outlook Handbook</a></li>
                        <li> <a href="https://ab.jobbank.gc.ca/marketreport/requirements/22441/ON;jsessionid=2C34B5DF76E19D8728BE6C7D13EC139A.jobsearch77" className={"text-blue-500 underline"}> Industrial Engineer in Canada</a></li>
                    </ul>




                </div>


            </div>

        </div>
    )
}