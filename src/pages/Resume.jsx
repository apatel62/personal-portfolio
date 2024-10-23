//imports my resume pdf from assets
import resume from '../assets/resume.pdf';
export default function Resume() {
    //returns the html DOM for the resume section
    return (
        <div>
            {/* banner right below the header */}
            <section className="hero-banner">
            </section>
            <main>
            <section className="page-wrapper">
                <div className="page-section">
                    {/* Resume section where the user can download my resume and see which programming languages I am proficient in */}
                    <h2 id="me">Resume</h2>
                    <div>
                        {/* hyperlink that downloads my resume when the user clicks on it */}
                        <a href={resume} download target="_blank">Download my Resume</a>
                        <p style={{ marginTop: '10px' }}>Click on the link above to download my resume. Below I list out my proficiencies as a developer.</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Nodejs</li>
                            <li>Express</li>
                            <li>Vite</li>
                            <li>Postgres SQL</li>
                            <li>Python</li>
                            <li>ROS</li>
                            <li>MATLAB</li>
                        </ul>              
                    </div>
                </div>
            </section>
            {/* footer section with icons to my GitHub, Linkedin, and Instagram profiles */}
            <footer>
                <a href="https://github.com/apatel62" target="_blank" title="GitHub Profile">
                    <i className="fab fa-github fa-2x" style ={{ color: 'rgba(146, 204, 206, 1)' }}></i>  
                </a>
                <a href="https://www.linkedin.com/in/arjun-patel-899952252" target="_blank" title="LinkedIn Profile" className="icon2">
                    <i className="fab fa-linkedin fa-2x" style = {{ color: 'rgba(146, 204, 206, 1)' }}></i>
                </a>
                <a href="https://www.instagram.com/arjun_patel1219" target="_blank" title="Instagram Profile" className="icon2">
                    <i className="fab fa-instagram fa-2x" style = {{ color: 'rgba(146, 204, 206, 1)' }}></i>
                </a>
            </footer>
            </main>
        </div>
    );

}