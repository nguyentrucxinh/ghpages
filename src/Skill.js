import React from 'react';
import './App.css';

function Skill() {
    return (
        <section id="skills" class="section skills">
            <div class="container">
                <h2>Skills</h2>

                <section class="skill">
                    <h3>Frontend Web Development</h3>
                    <p>I make use of my skills to craft visually pleasing and accessible dynamic content for the modern web.</p>
                    <ul>
                        <li>ES6 (ES2015).</li>
                        <li>React / Redux.</li>
                        <li>Angular / Typescript.</li>
                        <li>HTML5 / CSS3 / JS.</li>
                        <li>Pug (Jade).</li>
                        <li>Bootstrap.</li>
                        <li>jQuery (Datatable, Lodash, MomentJS).</li>
                    </ul>
                </section>

                <section class="skill">
                    <h3>Backend Web Development</h3>
                    <p>I have a wealth of experience in modern backend programming languages with experience of architecting both APIs and bespoke solutions.</p>
                    <ul>
                        <li><pre>Node.js / Express.js.</pre></li>
                        <li><pre>MongoDB / Mongoose.</pre></li>
                        <li><pre>Object-oriented programming (OOP).</pre></li>
                        <li><pre>Java SE / Java EE.</pre></li>
                        <li><pre>Spring Framework.</pre></li>
                        <li><pre>Hibernate.</pre></li>
                        <li><pre>MySQL / MSSQL.</pre></li>
                        <li><pre>PHP / Laravel.</pre></li>
                    </ul>
                </section>

                <section class="skill">
                    <h3>General Programming</h3>
                    <p>With over 2 years of web development experience, I have a firm grasp on the professional methods of software development.</p>
                    <ul>
                        <li><pre>Principles:             SOLID, DRY, KISS, YAGNI</pre></li>
                        <li><pre>Design patterns:        IoC/DI, Repository, Singleton, Observer</pre></li>
                        <li><pre>Web services:           REST / SOAP</pre></li>
                        <li><pre>Authentication:         JWT / OAuth2</pre></li>
                        <li><pre>Version control:        Git / SVN</pre></li>
                        <li><pre>Build tools:            Maven / Gradle</pre></li>
                        <li><pre>Application servers:    Tomcat, TomEE, GlassFish, WildFly</pre></li>
                    </ul>
                </section>

                <section class="skill">
                    <h3>Operations</h3>
                    <p>I believe that an understanding of how my code functions in its natural environment will improve my skills as a developer.</p>
                    <ul>
                        <li>Google Cloud Platform (PaaS).</li>
                        <li>Docker (CaaS).</li>
                        <li>Linux platforms (Debian-based / RHEL-based / Arch-based).</li>
                    </ul>
                </section>

                <section class="skill">
                    <h3>Languages</h3>
                    <p>My love of languages doesn't end with programming. Whenever I travel, I like to learn enough of the language that I can communicate basic needs.</p>
                    <ul>
                        <li>Vietnamese. (Fluent)</li>
                        <li>English. (Basic communication)</li>
                    </ul>
                </section>
            </div>
        </section>
    );
}

export default Skill;
