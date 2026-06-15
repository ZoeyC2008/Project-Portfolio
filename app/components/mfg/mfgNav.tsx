import {Link} from "react-router";

export default function MfgNav() {
    return (
        <nav className="flex items-center justify-between items-center w-full bg-red-300 mb-4 text-orange-950 font-mono text-lg">


            <Link to={"/"}
                  className={"font-mono bg-fuchsia-300 rounded-tr-md rounded-br-md p-2 pr-[2.5vw] pl-[2.5vw] hover:text-cyan-700"}>
                Home
            </Link>


            <ul className="flex flex-wrap pr-[2.5vw]">
                <li className="">
                    <Link to={"/manufacturing/softJaws"}
                          className={"font-mono pr-4 border-r-2 border-orange-950 hover:text-cyan-700"}>
                        Soft Jaws
                    </Link>
                </li>

                <li>
                    <Link to={"/manufacturing/cad"}
                    className={"font-mono pl-2 pr-4 border-r-2 border-orange-950 hover:text-cyan-700"}>
                        CAD
                    </Link>
                </li>

                <li>
                    <Link to={"/manufacturing/pen"}
                          className={"font-mono pl-4 pr-4 border-r-2 border-orange-950 hover:text-cyan-700"}>
                        Fountain Pen
                    </Link>
                </li>

                <li>
                    <Link to={"/manufacturing/vice"}
                          className={"font-mono pl-4 pr-4 border-r-2 border-orange-950 hover:text-cyan-700"}>
                        Vice
                    </Link>
                </li>

                <li>
                    <Link to={"/manufacturing/cnc"}
                          className={"font-mono pl-4 pr-4 border-orange-950 hover:text-cyan-700"}>
                        Belt Buckle
                    </Link>
                </li>
            </ul>
        </nav>
    )
}