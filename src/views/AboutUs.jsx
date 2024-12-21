import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us container mt-4">
            <div>
                <h3>Our mission</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
                </p>
            </div>

            <div>
                <h3>Our history</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
                </p>
            </div>

            {/*team*/}
            <div>
                <h3>Our team</h3>
                <div className="team-grid">
                    <div className="team-member">
                        <div className="member-photo">
                            <img src="https://images.surferseo.art/4c30b9e3-a27a-45a6-a2fc-5d6106d31dca.jpeg" alt="Bob Doe" />
                        </div>
                        <p></p>
                        <p>Owner and CEO</p>
                    </div>
                    <div className="team-member">
                        <div className="member-photo">
                            <img src="https://img.freepik.com/free-photo/portrait-anthropomorphic-cat-dressed-human-clothes_23-2151107462.jpg" alt="Bob Doe" />
                        </div>
                        <p>Ragannito Biral</p>
                        <p>HR</p>
                    </div>
                    <div className="team-member">
                        <div className="member-photo">
                            <img src="https://www.chaincatcher.com/upload/image/20241121/1732179135181-73610.webp" alt="Bob Doe" />
                        </div>
                        <p>Chill Guy</p>
                        <p>Head of Department of Chill</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default AboutUs;
