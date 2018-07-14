import React, { Component } from 'react';
import './Resume.css';
import downloadIcon from '../../assets/if_download_1055068.png';



class Resume extends Component {
    render() {
        return (
            <div className='resume'>
                <img src={downloadIcon} />
                <div className='flex mt20'>
                    <div>
                        <div className='bold name'>Gaurav Sharma</div>
                        <div>Address - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                    </div>
                    <div>
                        <div>Mobile No. - +91-XXXXXXXXXX</div>
                        <div>gaurav.min.js@gmail.com</div>
                    </div>
                </div>
                <div className='mt20'>
                    <div className='bold underline'>Career Summary</div>
                    <div className='flex'>
                        <div className='flex column lh35 p15 justified'>
                            Senior Software Engineer with 5 years of experience who provides the experience and critical thinking necessary to successfully
                            create feature rich seamless user interfaces. Specialised in web application development using javascript
                            libraries like ReactJS and frameworks like AngularJS. Learning enthusiast. Knowledgeable about various tools
                            needed for rapid and robust web applications development. Experienced with leading team of engineers to deliver
                            complex applications on time. Enhanced the performance and scalability of web applications by using techniques
                            like server side rendering. Developed electron based application. Hands on with web technologies like indexedDB,
                            websockets, webRTC.
            </div>
                    </div>
                </div>
                <div className='mt20'>
                    <div className='bold underline'>Qualifications</div>
                    <div className='flex'>
                        <div className='flex column lh35 p15'>
                            <span>Bachelor of Engineering (2009-2013)</span>
                            <span>Class 12th (2009)</span>
                            <span>Class 10th (2007)</span>
                        </div>
                        <div className='flex column lh35 p15'>
                            <span>University of Pune</span>
                            <span>Army Public School, Ambala Cantt, Haryana</span>
                            <span>Army Public School, Tezpur, Assam</span>
                        </div>
                        <div className='flex column lh35 p15'>
                            <span>64%</span>
                            <span>85%</span>
                            <span>87%</span>
                        </div>
                    </div>
                </div>
                <div className='mt20'>
                    <div className='bold underline'>Work Experience</div>
                    <div className='flex'>
                        <div className='flex column lh35 p15'>
                            <span>Paytm - &nbsp; Senior Software Engineer (Jan 2016 to Present)</span>
                            <span>Sapient - &nbsp;Associate Technology L2 (Sep 2013 - Jan 2016)</span>
                        </div>
                    </div>
                </div>
                <div className='mt20'>
                    <div className='bold underline'>Technical Skills Set</div>
                    <div className='flex'>
                        <div className='flex column lh35 p15'>
                            <span>
                                Programming Language - Javascript, Python.
                </span>
                            <span>
                                Database - MySQL.
                </span>
                            <span>
                                Modern Web Libraries/Frameworks - ReactJS, Redux, AngularJS, NodeJS, Electron, Vue.
                </span>
                            <span>
                                Web Technology Stack - HTTP, WebSockets, assets loading/caching, REST APIs, Browser storages, WebRTC.
                </span>
                            <span>
                                Web Development Tools - Webpack, Babel, SASS, Eslint, Flow.
                </span>
                            <span>
                                Experience with - VCSs, UNIX environment, AWS services.
                </span>
                        </div>
                    </div>
                </div>
                <div className='mt20'>
                    <div className='bold underline'>Projects</div>
                    <div className='flex'>
                        <div className='flex column lh35'>
                            <div className='flex'>
                                <div className='projectDescription'>
                                    <span>
                                        <span className='projects'>POS (Point of sale application)</span>
                                    </span>
                                    <div className='projectIntro'>
                                        https://boxoffice-pos.paytm.com - An application being used at cinema counters for sale of movie tickets
                        </div>
                                    <div>
                                        &#183; Took project from scoping requirements to actual launch of the project within 2 months hence enabling the rural cinemas
                                        to sell system generate tickets.
                        </div>
                                    <div>
                                        &#183; Got opportunity to lead front end team of 5 members enriching the code review, tasks planning and leadership skills.
                        </div>
                                    <div>
                                        &#183; Integrated some of the most complex modules like payment integration with Paytm, webRTC etc to make the POS application
                                        stand out of league.
                        </div>
                                    <div>
                                        &#183; Optimized IndexedDB transactions in order to make the application perform faster even in case of large amount of data
                                        stored in it.
                        </div>
                                </div>
                                <div className='projectTools'>
                                    <span className='toolsTitle'>Tools & Technology</span>
                                    <div>ReactJS, Redux, IndexedDB, Service workers, Web sockets, WebRTC, SCSS</div>
                                    <div>Webpack, Babel, ESLint, stylelint, Flow</div>
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='projectDescription'>
                                    <span>
                                        <span className='projects'>Box-Office</span>
                                    </span>
                                    <div className='projectIntro'>
                                        https://boxoffice.paytm.com - An inhouse cinema provider of paytm, being used as cinema back office management tool
                        </div>
                                    <div>
                                        &#183; Worked closely with, and incorporate requirements from PMs, designers and other engineers.
                        </div>
                                    <div>
                                        &#183; Developed rich user experience web application for cinema merchants and operations team.
                        </div>
                                    <div>
                                        &#183; Delivered highly stable multi-functional complex application within limited time.
                        </div>
                                </div>
                                <div className='projectTools'>
                                    <span className='toolsTitle'>Tools & Technology</span>
                                    <div>ReactJS, AngularJS, SCSS</div>
                                    <div>Babel, ESLint, stylelint, Grunt</div>
                                </div>
                            </div>


                            <div className='flex'>
                                <div className='projectDescription'>
                                    <span>
                                        <span className='projects'>Paytm.com / Paytmmall.com</span>
                                    </span>
                                    <div className='projectIntro'>
                                        https://paytm.com, https://paytmmall.com/ - One of the leading e-commerce site in country
                        </div>
                                    <div>
                                        &#183; Migrated entire application from AngularJS to ReactJS.
                        </div>
                                    <div>
                                        &#183; Optimized applications load time from ~10 secs to ~2 secs.
                        </div>
                                    <div>
                                        &#183; Developed verticals like hotels, movies etc. while implementing solid coding practices including peer code reviews,
                                        unit testing, while following agile development.
                        </div>
                                </div>
                                <div className='projectTools'>
                                    <span className='toolsTitle'>Tools & Technology</span>
                                    <div>ReactJS, Redux, Service workers, SCSS</div>
                                    <div>Webpack, Babel, ESLint, stylelint, Flow.</div>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='projectDescription'>
                                    <span>
                                        <span className='projects'>Other Projects (Sapient)</span>
                                    </span>
                                    <div className='projectIntro'>
                                        Other projects done while working with sapient for Royal Bank of Scotland (RBS)
                        </div>
                                    <div>
                                        &#183; Responsible for developing UI components of regulatory compliance applications - G&amp;E (Gifts and Entertainment),
                                        OBI(Outside Business Interests), PAD(Personal Account Dealing). Deployment of these applications
                                        lead to accurately identify conflicts of interest, divided loyalty or an improper attempt to
                                        influence business decisions.
                        </div>
                                    <div>
                                        &#183; Independently developed front end side of multiple trading applications under RAD (Rapid Application Development),
                                        and delivered 3 micro applications in 2 months frame.
                        </div>
                                    <div>
                                        &#183; Gained valuable technical (Java EE) as well as financial domain knowledge by undergoing GMI training conducted by
                                        sapient.
                        </div>
                                    <div>
                                        &#183; Wrote end to end test cases using jasmine and used karma as a test case runner, increasing the code coverage and avoiding
                                        the application from breaking.
                        </div>
                                    <div>
                                        &#183; Streamlined deployment process by setting up continuous integration tools like teamcity and various ARM tools, which
                                        led to reduced overhead and consistency across build processes.
                        </div>
                                </div>
                                <div className='projectTools'>
                                    <span className='toolsTitle'>Tools & Technology</span>
                                    <div>AngularJS, Bootstrap, jQuery</div>
                                    <div>Karma, Jasmine, Teamcity, ARM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt20'>
                    <div className='bold underline'>Achievements and Co-curricular Activities</div>
                    <div className='flex'>
                        <div className='flex column lh35 p15'>
                            <span>
                                Participated, conducted and also won some of the robotics events in college fests.
                </span>
                            <span>
                                Received
                    <i>You make a difference</i> recognition while working for Sapient.
                </span>
                            <span>
                                Topped Sapient's inhouse training programme GMI (Global market institute), which got a big cash award.
                </span>
                            <span>
                                Topped contest which had people across all the designations, which led to onsite opportunity in London.
                </span>
                            <span>
                                Likes reading technical texts, blogs, videos, weeklies and stay updated on the technical front.
                </span>
                            <span>
                                Love playing sports - favourite being volleyball.
                </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;