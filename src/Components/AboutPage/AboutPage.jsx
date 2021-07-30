import React, { Component } from 'react'
import './AboutPage.scss'
import linkedin from './../../logos/linkedin.png'
import github from './../../logos/github.png'
import portfolio from './../../logos/portfolio.png'
import profile from './../../Photos/photo.jfif'
export class AboutPage extends Component {
    render() {
        return (
            <div className="container-page">
                          
                <div className="card-page">
                    <div className="left">
                        <img src={profile}  alt="" className="profile" />
                        <div className="flex-row">
          <a href="https://github.com/BaltacMihai"><img src={github} alt="GitHub" className="logo"/></a>
            <a href="https://baltacmihai.github.io/"><img src={portfolio} alt="Portfolio" className="logo"/></a>
            <a href="https://www.linkedin.com/in/baltac-mihai-cristian/">
              <img src={linkedin} alt="LinkedIn" className="logo"/></a>
           
                        </div>
                    </div>
                    <div className="right">
                        <h1>Baltac Mihai-Cristian</h1>
                        <p>Hi, I'm Mihai, the creator of this blog. I am a student at the Bucharest Academy of Economic Studies. Future fullstack developer, teacher and trainer. My mission is to help young people who are at the beginning of their career to find and get the job of their dreams & the success they want. Because, at the moment, there are a lot of wrong things on the internet about what success means and trying to find a definition of it, many young people drop out of school and invest money in fake entrepreneurs who promise you success. Because, we are in the age of speed, many people want success overnight, this is very unlikely. My goal is for my readers to enjoy the process and the progress.</p>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default AboutPage
