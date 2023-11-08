const images = [
    {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUau1wvCr1pi2dIfVWInJOD5N39lPPcs3daRpWQU3ihGt9DqYSsw5tIVTcYwPMHLbizW0&usqp=CAU" ,alt: "Neymar"},
    {src: "https://cdn.vox-cdn.com/thumbor/0LeSpWQ5343aGdf5h7bM1gPkO7I=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16327590/1152488213.jpg.jpg",alt: "Hazard"},
    {src: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt55a2164ef2e7b908/63bc3d9e08ea795d3f5d03e4/bale.jpg?auto=webp&format=pjpg&width=3840&quality=60", alt: "bele"},
]
 export default function Images() {
     return (
         <>
             <div className=" bg-slate-500 w-full flex flex-row justify-evenly">
                 {images.map(image => {
                     return <img className="object-contain h-48 w-96 p-2"
                                 src={image.src}
                                 alt={image.alt}/>
                 })}
             </div>
         </>
     )
 }