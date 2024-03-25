export { Gallery }
import { RenderImages } from "./RenderImages"

function Gallery() {
    return (
        <section>
            <h2>Images of Space</h2>
            <RenderImages/>
            <RenderImages/>
            <RenderImages/>
        </section>
    )
}