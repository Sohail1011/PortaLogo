/* eslint-disable react/prop-types */
export const Gallery = ({ picture = "disconneted", text, information }) => {
    return (
        <section className="baul">
            <img src={picture} alt={text} />
            <h3>{text}</h3>
            <p>{information}</p>
        </section>
    )
}
