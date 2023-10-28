import { Gallery } from "./Gallery"
import '../styles/Work.css'
import Abstract from "../assets/images/Abstract.jpg";
import BookRed from "../assets/images/BookRed.jpg";
import Collection from "../assets/images/Collection.jpg";
import Name from "../assets/images/Name.jpg";
import Orirgin from "../assets/images/Origin.jpg";
import Page from "../assets/images/Page.jpg";


export const Work = () => {

    const galleries = [
        { id: 1, image: Abstract },
        { id: 2, image: BookRed },
        { id: 3, image: Collection },
        { id: 4, image: Name },
        { id: 5, image: Orirgin },
        { id: 6, image: Page },
    ]

    return (
        <article className="workers">
            <h2>Latest Work</h2>
            <div className="album">
                {
                    galleries.map((g) => (
                        <Gallery key={g.id} picture={g.image} text="Project title" information="UI, Art direction" />
                    ))
                }
            </div>
        </article>
    )
}
