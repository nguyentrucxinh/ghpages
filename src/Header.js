import React from 'react';
import avatar from './img/avatar.png';
import './App.css';

function Header() {
    return (
        <header>
            <div class="container">
                <h1>&lt;Nguyen Truc Xinh /&gt;</h1>
                <p class="diamond-container"><img class="diamond" src={avatar} alt="Hairy Diamond" /></p>
                <nav class="contact">
                    <ul>
                        <li><a href="mailto:nguyentrucxinh@outlook.com" title="Email" target="_blank"><i class="fa fa-envelope"></i></a></li>
                        <li><a href="https://twitter.com/nguyentrucxinh" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/nguyentrucxinh" title="LinkedIn" target="_blank"><i class="fa fa-linkedin-square"></i></a></li>
                        <li><a href="https://github.com/nguyentrucxinh" title="Github" target="_blank"><i class="fa fa-github"></i></a></li>
                    </ul>
                </nav>

                <p class="diamond-container">
                    <a href="https://docs.google.com/viewer?url=https://raw.githubusercontent.com/nguyentrucxinh/Awesome-CV/master/my-cv/my-cv.pdf" class="buttonDownload" target="_blank">Download My CV</a>
                </p>

                <nav class="sections">
                    <ul>
                        <li><a href="#summary">Summary</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#side-projects">Side Projects</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
