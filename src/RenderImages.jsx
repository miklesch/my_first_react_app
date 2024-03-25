export {RenderImages}
import spaceImg1 from "./assets/images/spaceImg1.jpg";




function RenderImages () {
    return (
        <div>
            <img src={spaceImg1} alt="space image" height={200} width={200} />
        </div>
    )
}