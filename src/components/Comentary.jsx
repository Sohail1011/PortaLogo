/* eslint-disable react/prop-types */
import { MdOutlineStar } from 'react-icons/md';
import Client from "../assets/images/Client.jpg";

export const Comentary = ({ paragraph, name, inc }) => {
    return (
        <section className="card">
            {paragraph}
            <div className="profile">
                <div className="info-picture">
                    <img src={Client} alt={name} />
                </div>
                <div className="info-description">
                    <div>
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                    </div>
                    {name}
                    {inc}
                </div>
            </div>
        </section>
    )
}
