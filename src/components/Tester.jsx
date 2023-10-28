import { Comentary } from "./Comentary"
import '../styles/Testimonial.css'

export const Tester = () => {

  const comentries = [
    { id: 1, description: <p>This is a template Figma file, <br /> turned into code using Anima. <br /> Learn more at AnimaApp.com</p>, author: <h3>Gemma Nolen</h3>, company: <h4>Google</h4> },
    { id: 2, description: <p>This is a template Figma file, <br /> turned into code using Anima. <br /> Learn more at AnimaApp.com</p>, author: <h3>Gemma Nolen</h3>, company: <h4>Google</h4> },
    { id: 3, description: <p>This is a template Figma file, <br /> turned into code using Anima. <br /> Learn more at AnimaApp.com</p>, author: <h3>Gemma Nolen</h3>, company: <h4>Google</h4> },
    { id: 4, description: <p>This is a template Figma file, <br /> turned into code using Anima. <br /> Learn more at AnimaApp.com</p>, author: <h3>Gemma Nolen</h3>, company: <h4>Google</h4> },
    { id: 5, description: <p>This is a template Figma file, <br /> turned into code using Anima. <br /> Learn more at AnimaApp.com</p>, author: <h3>Gemma Nolen</h3>, company: <h4>Google</h4> },
    { id: 6, description: <p>This is a template Figma file, <br /> turned into code using Anima. <br /> Learn more at AnimaApp.com</p>, author: <h3>Gemma Nolen</h3>, company: <h4>Google</h4> }
  ]

  return (
    <article className="publishing">
      <h2>Testimonial</h2>
      <div className="rectangle">
        {
          comentries.map((comentary) => (
            <Comentary key={comentary.id} paragraph={comentary.description} name={comentary.author} inc={comentary.company} />
          ))
        }
      </div>
    </article>
  )
}
