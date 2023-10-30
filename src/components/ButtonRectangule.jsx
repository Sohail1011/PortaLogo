/* eslint-disable react/prop-types */
export const ButtonRectangule = ({ text = 'Undefined', habit = 'button' }) => {
    return (
        <button type={habit}>{text}</button>
    )
}
