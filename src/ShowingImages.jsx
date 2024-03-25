export {ShowingImages}
import spaceImg1 from "./assets/images/spaceImg1.jpg";


function ShowingImages (name) {
    
    
    return (
        <div>
            <img src={name} alt="space image" height={200} width={200} />
        </div>
    )
}