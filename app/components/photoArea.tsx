type PhotoProps = {
    imageSrc: string;
}

function PhotoArea({imageSrc}: PhotoProps) {
    return (

        < div className="rounded-xl overflow-hidden w-[46.5vw] h-[90vh] border-4 border-dashed border-amber-900 p-6 bg-green-300">

            <img src={imageSrc}/>

        </div>
    )
}

export default PhotoArea


