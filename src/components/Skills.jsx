import SemiCard from "../assets/SemiCard.png";
import SkillsCard from "../assets/SkillsCard.png";
import VectorCard from "../assets/VectorCard.png";

export const Skills = () => {

    const articlesIMG = [
        { id: 1, image: SkillsCard, title: 'Product Design', description: <p>This is a template Figma file, turned <br /> into code using Anima. Learn more at <br /> AnimaApp.com</p> },
        { id: 2, image: SemiCard, title: 'Visual Design', description: <p>This is a template Figma file, turned <br /> into code using Anima. Learn more at <br /> AnimaApp.com</p> },
        { id: 3, image: VectorCard, title: 'Art Design', description: <p>This is a template Figma file, turned <br /> into code using Anima. Learn more at <br /> AnimaApp.com</p> }
    ]

    return (
        <article className="barskills">
            {
                articlesIMG.map((article) => (<section key={article.id}>
                    <img src={article.image} height={'117px'} width={'117px'} alt={article.title} />
                    <h2>{article.title}</h2>
                    {article.description}
                </section>))
            }
        </article>
    )
}
