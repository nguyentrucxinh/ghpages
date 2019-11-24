import React from 'react';
import './App.css';

function SideProject() {
    return (
        <section id="side-projects" class="section side-projects">
            <div class="container">
                <h2>Side Projects</h2>

                <section class="side-project">
                    <h3>Express.js Starter Kit</h3>
                    <p>An open source project to practice & improve my skill with <a href="#" title="Node.js/Express & MongoDB/Mongoose." target="_blank">Node.js/Express & MongoDB/Mongoose</a>.</p>
                    <p class="small-nav"><i class="fa fa-github"></i> <a href="https://github.com/nguyentrucxinh/expressjs-starter-kit" title="Express.js Starter Kit." target="_blank">Repository on Github. &rarr;</a></p>
                </section>

                <section class="side-project">
                    <h3>Eximbank ATM Finder</h3>
                    <p>An open source project to practice & improve my skill with <a href="#" title="React/Redux." target="_blank">React/Redux</a>.</p>
                    <p class="small-nav"><i class="fa fa-github"></i> <a href="https://github.com/nguyentrucxinh/eximbank-atm-finder" title="Eximbank ATM Finder." target="_blank">Repository on Github. &rarr;</a></p>
                </section>

                <section class="side-project">
                    <h3>Food menu list</h3>
                    <p>An open source project to practice & improve my skill with <a href="#" title="JavaEE/Spring, Angular & Google Cloud." target="_blank">JavaEE/Spring, Angular & Google Cloud</a>.</p>
                    <p class="small-nav"><i class="fa fa-github"></i> <a href="https://github.com/nguyentrucxinh/food-menu-list" title="Food menu list." target="_blank">Repository on Github. &rarr;</a></p>
                </section>

                <section class="side-project">
                    <h3>Spring Boot architecture for application monolithic</h3>
                    <p>An open source project to practice & improve my skill with <a href="#" title="JavaEE/Spring." target="_blank">JavaEE/Spring</a>.</p>
                    <p class="small-nav"><i class="fa fa-github"></i> <a href="https://github.com/nguyentrucxinh/spring-boot-monolithic" title="Spring Boot architecture for application monolithic." target="_blank">Repository on Github. &rarr;</a></p>
                </section>
            </div>
        </section>
    );
}

export default SideProject;
