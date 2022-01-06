import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
    const visitPage = () => {
        window.location = "https://www.codechef.com/users/nkpnrj26";
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/rx1729ishot/image/upload/v1641484994/mypics/MyPic_fi1sw1.jpg"
                            alt="Founder"
                        />
                        <Typography>Neeraj Kumar Pathak</Typography>
                        <Button onClick={visitPage} color="primary">
                            CodeChef Profile
                        </Button>
                        <span>
                            This is Full Stack Mern Project named as E-Comm. This website is having user and admin modes with complete eccommerce functionalities.
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a
                            href="https://www.linkedin.com/in/nkpathak/"
                            target="blank"
                        >
                            <LinkedInIcon className="youtubeSvgIcon" />
                        </a>

                        <a href="https://github.com/Nucleoo" target="blank">
                            <GitHubIcon className="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;