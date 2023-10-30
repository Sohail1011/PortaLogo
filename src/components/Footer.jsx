import { IoLogoBehance, IoLogoDiscord, IoLogoInstagram } from 'react-icons/io5'
import { IoLogoFacebook } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { ButtonRectangule } from "../components/ButtonRectangule";

export const Footer = () => {
    return (
        <footer className="footpage">
            <article className='text-description'>
                <h2>Lets work together</h2>
                <section className="info-footer">
                    <p>This is a template Figma file, turned into code using Anima. Learn <br /> more at AnimaApp.com This is a template Figma file, turned into <br /> code using Anima. Learn more at AnimaApp.com</p>
                </section>
                <section className='info-links'>
                    <IoLogoDiscord size={'2.25rem'} />
                    <IoLogoFacebook size={'2.25rem'} />
                    <RiGlobalLine size={'2.25rem'} />
                    <IoLogoInstagram size={'2.25rem'} />
                    <IoLogoBehance size={'2.25rem'} />
                </section>
            </article>
            <article className='auto-complete'>
                <form>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <ButtonRectangule habit='submit' text='Submit' />
                </form>
            </article>
        </footer>
    )
}
