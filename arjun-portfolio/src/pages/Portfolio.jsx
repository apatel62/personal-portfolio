export default function Portfolio() {
    //opens both GitHub repo & deployed page for Project-1
    const openLinksProject = (event) => {
        event.preventDefault();
        window.open('https://github.com/apatel62/Project-1', '_blank');
        window.open('https://apatel62.github.io/Project-1/', '_blank');
    };

    //opens both GitHub repo & deployed page for weather module challenge
    const openLinksWeather = (event) => {
        event.preventDefault();
        window.open('https://github.com/apatel62/weather-site-forecast', '_blank');
        window.open('https://weather-site-forecast.onrender.com/', '_blank');
    };
    return (
        <div>
            <section className="hero-banner">
            </section>
            <main>
                <section className="page-wrapper">
                    {/* Portfolio section with titled images of 6 of my applications on GitHub. When clicking a tile, they will redirect you the my GitHub repo. Two tiles have deployed websites so clicking on them will open two tabs: one for the GitHub repo and the other for the deployed site */}
                    <div className="page-section">
                        <h2 id="portfolio">Work</h2>
                        <div className="flex-container">
                            <a href="#"  onClick={openLinksProject} className="flex-item machine">
                                <div>
                                    <h3>Machine Downtime Tracker</h3>
                                    <h4>Javascript, HTML, CSS</h4>
                                </div>
                            </a>
                            <a  href="#"  onClick={openLinksWeather} className="flex-item weather">
                                <div>
                                    <h3>Weather Site Forecast</h3>
                                    <h4>Typescript, Express, Vite</h4>
                                </div>
                            </a>
                            <a href="https://github.com/apatel62/vehicle-builder-ts"  target="_blank" className="flex-item vehicle">
                                <div>
                                    <h3>Vehicle Builder</h3>
                                    <h4>Typescript</h4>
                                </div>
                            </a>
                            <a  href="https://github.com/apatel62/employee-manager"  target="_blank" className="flex-item employee">
                                <div>
                                    <h3>Employee Manager</h3>
                                    <h4>Postgres SQL, Javascript</h4>
                                </div>
                            </a>
                            <a  href="https://github.com/apatel62/README-Generator"  target="_blank" className="flex-item readme">
                                <div>
                                    <h3>README Generator</h3>
                                    <h4>Node.js, Javascript</h4>
                                </div>
                            </a>
                            <a  href="https://github.com/apatel62/prework-study-guide"  target="_blank" className="flex-item study">
                                <div>
                                    <h3>Prework Study Guide</h3>
                                    <h4>HTML, CSS, Javascript</h4>
                                </div>
                            </a>
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