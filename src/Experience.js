import React from 'react';
import './App.css';

function Experience() {
    return (
        <section id="experience" class="section experience">
            <div class="container">
                <h2>Experience</h2>

                <section class="job">
                    <h3>Sutrix Solutions <span class="date">2017 - Current</span></h3>
                    <span class="title">Java Developer</span>
                    <p>Named the leading crowd-funder for investment following a record-breaking start to 2017, according to latest market data from Beauhurst.</p>
                    <ul>
                        <li>Acting as solutions architect for the development unit.</li>
                        <li>Line-managed various teams within the department.</li>
                        <li>Led a number of SCRUM sprints throughout various teams.</li>
                        <li>General development experience in a number of different languages.</li>
                        <li>Reporting directly to the CTO.</li>
                        <li>Assisted in the interview and hiring process.</li>
                        <li>Responsible for DevOps for 6 months.</li>
                        <li>Enhanced departmental workflows to increase productivity.</li>
                    </ul>
                </section>

                <section class="job">
                    <h3>Tin Tan Software Company <span class="date">2016 &ndash; 2017</span></h3>
                    <span class="title">Full Stack Web Developer</span>
                    <p>Index ventures backed sharing economy startup for parking spaces in the United Kingdom.</p>
                    <ul>
                        <li>Built a full development team from scratch.</li>
                        <li>Led the department, reporting directly to the CEO.</li>
                        <li>Led a number of projects using SCRUM.</li>
                        <li>Directly responsible for delivery of projects.</li>
                        <li>Built and maintained our automated systems and operations. (DevOps)</li>
                    </ul>
                </section>
            </div>
        </section>
    );
}

export default Experience;
