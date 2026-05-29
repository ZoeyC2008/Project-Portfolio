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
                    <Link to={"/"}
                          className={"font-mono pr-2 border-r-2 border-orange-950 hover:text-cyan-700"}>
                        SoftJaws
                    </Link>
                </li>

                <li>
                    <Link to={"/"}
                    className={"font-mono pl-2 pr-2 border-r-2"}>
                        CAD
                    </Link>
                </li>

                <li>
                    Fountain Pen |
                </li>

                <li>
                    Vice
                </li>

                <li>
                    Belt Buckle
                </li>

                <li>
                    Candle Holder
                </li>

                <li>
                    Maze?
                </li>

            </ul>
        </nav>
    )
}