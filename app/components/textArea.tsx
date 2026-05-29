type TextProps = {
    text: string;
}

function PhotoArea({text}: TextProps) {
    return (

        < div className="rounded-xl overflow-hidden w-[46.5vw] h-[90vh] border-4 border-dashed border-amber-900 p-6 bg-blue-300">

            <p>{text}</p>

        </div>
    )
}

export default PhotoArea

// bg-gradient-to-r from-[#28d32c] via-blue-300 to-[#fc33f2], one of the many gradients that can ease the trauma for Claire, to make it worse substitute blue-300 for neon blue