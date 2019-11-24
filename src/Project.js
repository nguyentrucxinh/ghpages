import React from 'react';
import './App.css';

function Project() {
    return (
        <section id="projects" class="section projects">
            <div class="container">
                <h2>Projects</h2>

                <section class="project">
                    <h3>Web application for transport management</h3>
                    <h3>& Web application for vending machine management</h3>
                    <p>Based on:</p>
                    <ul>
                        <li>PHP/Laravel</li>
                        <li>RESTful Web Service</li>
                        <li>JWT</li>
                        <li>MySQL</li>
                        <li>Angular</li>
                        <li>Typescript</li>
                    </ul>
                </section>

                <section class="project">
                    <h3>Software for clinic management</h3>
                    <p>Based on:</p>
                    <ul>
                        <li>C#</li>
                        <li>Windows Forms</li>
                        <li>DevExpress</li>
                        <li>MSSQL</li>
                    </ul>
                </section>
            </div>
        </section>
    );
}

export default Project;
