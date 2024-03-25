export { Gallery }
import { RenderImages } from "./RenderImages"

function Gallery() {
    return (
        <div className="image-gallery">
            <h2>Images of Space</h2>
            <div className="gallery">
                <RenderImages />
            </div>
        </div>
    )
}