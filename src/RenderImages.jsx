export {RenderImages}
import spaceImg1 from "./assets/images/spaceImg1.jpg";
import spaceImg2 from "./assets/images/spaceImg2.jpg";
import spaceImg3 from "./assets/images/spaceImg3.jpg";

const imagesList = [
    {
        id: 1,
        src: spaceImg1,
        alt: "image 1",
    },
    {
        id: 2,
        src: spaceImg2,
        alt: "image 2",
    },
    {
        id: 3,
        src: spaceImg3,
        alt: "image 3",
    }

]
function RenderImages () {
    return (
        <div>
            {imagesList.map((image) => (
                <img key={image.id} 
                src={image.src} 
                alt={image.alt} 
                className ="gallery-image"/>
            ))}
        </div>
    )
}