//imports my image from assets
import arjunImage from '../assets/images/Arjun.jpg';
export default function Home() {
    //returns the html DOM for the homepage
    return (
        <div>
            <section className="hero-banner">
            </section>
            <main>
                <section className="page-wrapper">
                    {/* About me section */}
                    <div className="page-section">
                        <h2 id="me">About Me</h2>
                        <div>
                            {/* image of me along with a brief welcome to my website */}
                            <img src={arjunImage} alt="Picture of Arjun Patel" width="388" height="300" style={{ marginBottom: '10px' }} />
                            <p>Welcome to my website! This is where I showcase the projects I have worked on so far since joining the bootcamp. You can see my work by selecting Portfolio is the navigation bar. The Resume section will display my experiences so far. You can contact me by filling out the form in the Contact section. Finally, you can visit my GitHub, Linkedin, and Instagram profiles by clicking on the corresponding icons below. Thank you for visiting! 
                            </p>              
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