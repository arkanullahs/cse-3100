import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us container mt-4">
            <h2>About Purrfect Adoption</h2>
            <p>
                Welcome to Purrfect Adoption! We are dedicated to connecting loving
                families with adorable cats in need of forever homes. Our mission is to
                ensure every cat gets a second chance at life filled with love, care,
                and happiness.
            </p>
            <h3>Our Vision</h3>
            <p>
                We envision a world where every cat has a safe, nurturing environment
                to thrive. Through community support, awareness, and compassion, we aim
                to reduce the number of homeless cats and increase successful adoptions.
            </p>
            <h3>What We Do</h3>
            <ul>
                <li>Rescue and rehabilitate stray or abandoned cats.</li>
                <li>Work closely with local shelters to find suitable homes.</li>
                <li>Provide education and resources for cat care.</li>
            </ul>
            <p id='shesh'>
                Thank you for supporting Purrfect Adoption. Together, we can make a
                difference, one paw at a time.
            </p>
        </section>
    );
};

export default AboutUs;
