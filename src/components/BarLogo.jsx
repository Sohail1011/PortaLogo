import { AdidasSvg } from "../assets/AdidasSvg";
import { AppleSvg } from "../assets/AppleSvg";
import { GoogleSvg } from "../assets/GoogleSvg"
import { NikeSvg } from "../assets/NikeSvg";
import { SamsungSvg } from "../assets/SamsungSvg";

export const BarLogo = () => {

    const LogoCollection = [
        { id: 1, img: <GoogleSvg /> },
        { id: 2, img: <NikeSvg /> },
        { id: 3, img: <SamsungSvg /> },
        { id: 4, img: <AppleSvg /> },
        { id: 5, img: <AdidasSvg /> }
    ];

    return (
        <article className="bar">
            {
                LogoCollection.map((logo) => (
                    <section key={logo.id}>{logo.img}</section>
                ))
            }
        </article>
    )
}
