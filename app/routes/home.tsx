import type {Route} from "./+types/home";
import {NavLink, Link} from "react-router";

export default function Home() {
    return (
        <div>

            <div>
                <Link
                    to="/manufacturing"
                    className={"font-bold text-xl"}
                >
                    manufacturing
                </Link>
            </div>

            <div>
                <Link
                    to="/eng/doorway"
                    className={"font-bold text-xl"}
                >
                    doorway poem
                </Link>
            </div>
        </div>
    )
}
