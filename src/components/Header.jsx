import { Content } from "./Content"
import { HeaderImage } from "./HeaderImage"
import '../styles/Header.css'

export const Header = () => {
    return (
        <article className="advert">
            <Content />
            <HeaderImage />
        </article>
    )
}
