import React from 'react';
import { AboutDrawerParagraph, AboutDrawerParagraphHeading } from './AboutDrawerTextComponents';
import joePic from 'assets/joePic.jpg';
import styles from './AboutDrawerContent.scss';


export default function AboutDrawerContent() {

  
  return (
    <section className={`comp-about-drawer-content ${styles.AboutDrawerContent} disable-scrollbars`}>
      <img src={joePic} alt="Joe" />
      <article className="paragraphs">
        <AboutDrawerParagraphHeading headerText={'TL:DR'} styles={{ marginTop: '0px' }} />
        <p>
          {'Hi! My name is Joe, and I\'m applying to be the newest member of your development team. Most recently, I was a Senior Front End Engineer for the Digital Marketing Department at Sprinklr building their '}
          <a
            href="https://www.sprinklr.com/"
            target="_blank"
            rel="noopener noreferrer">
            {'.com site'}
          </a>
          {', and through a deep sense of teamwork, empathy, willingness to learn, laughter, process, and work ethic I quickly rose to Team Lead. I am excited to be a new addition to your team and company, and I look forward to speaking with you further!'}
        </p>
  
        <AboutDrawerParagraphHeading headerText={'Independent Contributor as a Senior Front End Engineer'} />
        <AboutDrawerParagraph text={'At Sprinklr, I was initially hired to work on a codebase that was migrated from a Wordpress site to an AWS deployed Gatsby/Contentful site. This migration had taken place three months before I was brought on, and was completed by 20 developers over the course of one week. As you can imagine, the scalability and durability of the code was not deeply considered. Nor was the purpose of a digital marketing site: to be the funnel that drives leads to sales. The SEO score plummeted to single digits, and the site health score was not much higher.'} />
        <AboutDrawerParagraph text={'When I was brought on, the Gatsby/Contentful tech stack was new to everyone on the team. My Team Lead tasked me with architecting/building the company\'s new “Resources” and “Events” sections of the site that would support our top-of-funnel leads. I quickly caught on to the patterns necessary to build this out, and helped my manager and teammates think about creating the new components and their data structures to be reusable in other yet-to-be-built areas of the site. In shaping these epics, I became a mentor to my peers, owning the project management and helping the developers who were working on them.'} />
        <AboutDrawerParagraph text={'The Team Lead also tasked me with the AWS deployment of the site, becoming his go-to person for the more dev-ops related tasks whenever he was unavailable. I became familiar with our deployment structure (CodePipeline, CodeBuild, s3, and CloudFront) as well as creating a number of @edgeLambda functions to help with blanket redirects and other data manipulations. I also spearheaded the development efforts to localize our site, integrating 3rd party libraries, and collaborating with the Localization, Content Authoring, and Content Production teams to develop cross-team processes which enabled us to launch our site in 8 different languages.'} />
        
        <AboutDrawerParagraphHeading headerText={'Lead of the Digital Marketing Department\'s Web Development Team'} />
        <AboutDrawerParagraph text={'When the Team Lead left the company, I was asked to move into his position. My first job was hiring four new developers, transitioning two previously contracted employees to full-time positions, and conducting the search for two more. After reviewing 400 applications, interviewing 20 candidates, and bringing six of them in front of my team, we hired two new developers which rounded out our team\'s abilities.'} />
        <AboutDrawerParagraph text={'As a Technical Lead, I spent hours a day working directly with my engineers. We engaged in weekly sprints, daily stand ups, pair and mob programing, peer review of all branches, and group backlog grooming sessions. I encouraged everyone to work together, to learn from each other, and to build deep bonds of trust and understanding. There were never arguments. When we disagreed on approaches, we talked out the possibilities and gave our opinions, eventually deciding as a group which direction we wanted to go. I did my best to slowly nurture each individual programmer with gradually increasing projects of scope, helping them to build new skill sets, and solidifying more familiar ones.'} />
        <AboutDrawerParagraph text={'As a People Leader in the broader marketing department, I helped shape the priorities and projects with our immediate stakeholders. I spent time understanding the nuances of digital marketing, and helped our SEO strategist to improve our SEO and site-health score to the mid-90\'s! I worked with the Digital Marketing Director and Marketing-Ops to identify unsupported areas of our marketing funnel. During my tenure as Lead, our department nailed every quarterly Verified Opportunity target that was set, at a pace of 30% growth quarter over quarter!'} />
        <AboutDrawerParagraph text={'I spent a lot of time working with our designers and project stakeholders to create new components that were specific enough to meet the business requirements necessary for the specific project, while flexible enough to be re-used in other scenariors. This enabled a 1000+ page website to be built without a constant need for development support, freeing up my team to work on maintaining our codebase and building out new initiatives. It also streamlined the cross-team effort to get a stakeholder’s project from speculation to deployment.'} />
        <AboutDrawerParagraph text={'Twice I was brought into the Marketing Department People Leader off-site meetings. As a team of 20, we worked together to make our remote marketing department more efficient, effective, and fun. I helped to develop the process of passing our SDRs specific and useful information from our product marketers about the specific campaign that brought in any particular lead. I also became one of the lead voices on the “Make Marketing Fun Again” inter-marketing-department team.'} />
        
        <AboutDrawerParagraphHeading headerText={'Everything is Impermanent'} />
        <AboutDrawerParagraph text={'As the US Marketing jobs of Sprinklr were put on ice, being replaced overseas, the processes that were created and put in place started to fracture. It became my main priority to insulate my engineers from this chaos, and continue to deliver them well-thought-out problems to solve. The entire Digital Marketing team, as well as 60 other US Marketing employees were let go due to “budgetary considerations”. I was given a two-day warning, and while on PTO elected to be the person to lay off my team. Our development team is still connected, continuing to support each other as we all find other work.'} />
        
        <AboutDrawerParagraphHeading headerText={'Giving Back to the Coding Community'} />
        <p>
          {'In gratitude to my coding bootcamp, '}
          <a
            href="https://www.alchemycodelab.com/"
            target="_blank"
            rel="noopener noreferrer">
            {'Alchemy Code Lab'}
          </a>
          {', I offer my skills as a teacher and mentor to the current and graduating students. I do quarterly mock interviews with graduates, and deliver a monthly presentation, guiding each cohort to better communicate code to non-developers by translating code into narratives: seeing how the verbs (functions), nouns (objects etc), and adjectives (async etc) of code lend themselves to storytelling, and how transversing the code from a top-level down to the details (encapsulation) gives a clearer thread of the story. I spend time working on developing a personal style of semantic naming conventions, and share with them the five coding principals that shape everything I do:'}
        </p>
        <ul>
          <li>{'Good code is written for people to read'}</li>
          <li>{'Always be editing'}</li>
          <li>{'See the data move across the network'}</li>
          <li>{'Find the simple, straight-forward solution'}</li>
          <li>{'Have a plan'}</li>
        </ul>

        <AboutDrawerParagraphHeading headerText={'Joe Outside of Work'} />
        <p>
          {'Aside from coding, I am a professional classical trumpet player, performing with many high-level orchestras and chamber ensembles in and around the Pacific North West (see '}
          <a
            href="https://www.rosecitybrasscompany.com/"
            target="_blank"
            rel="noopener noreferrer">
            {'The Rose City Brass Company'}
          </a>
          {' and '}
          <a
            href="https://www.musicwithjoe.com/"
            target="_blank"
            rel="noopener noreferrer">
            {'Music With Joe'}
          </a>
          {' for more details). I teach trumpet and chamber music at Reed College and Clackamas Community College. I also have a small, but dedicated private studio of students.'}
        </p>
        <p>
          {'I am a founder and part owner of an ice cream sandwich business, '}
          <a
            href="https://www.peacepieworld.com/"
            target="_blank"
            rel="noopener noreferrer">
            {'Peace Pie'}
          </a>
          {', which my family and I built from a farmers market stand into a three-state, six-store chain. It continues to thrive to this day.'}
        </p>
        <AboutDrawerParagraph text={'I love to hike, eat, swim, climb, read, love my cats, and laugh. I find joy in bringing others joy. I do my best to always be working towards a better version of my self.'} />
        
        <AboutDrawerParagraphHeading headerText={'Moving Forward'} />
        <AboutDrawerParagraph text={'At this point in my career, I am excited to join a company whose mission is to better the world. Whether that is for the humans, the plants, the animals, or the globe, I want to spend my life energy bettering our “pale blue dot”. I want to be in a working environment that supports the lives of its employees: employees that work to live, not live to work. At the same time, I am looking for a team that is passionate, hardworking, curious, supportive, and fearless; a place where all of me, and all of everyone else, is welcomed and radically empowered. As an engineer, as a co-worker, and as a People Leader, I have so much room to grow. I\'m excited to believe in a company that believes in me.'} />
        <AboutDrawerParagraph text={'Problem domains fascinate me; I keep myself open to learning from everyone around me, incorporate as much knowledge as I can so that I can help to synthesize problem solving efforts from my unique viewpoint. I bring this mentality to all areas of my life, and I feel it is one of my greatest strengths as a teammate.'} />
        <AboutDrawerParagraph text={'Prior to my time at Sprinklr, I had no experience in digital marketing. But within a short time, I was making decisions right along side people that have been in that area for their entire career. I\'m excited to find a new problem domain to sink my teeth into, and in doing so make the world, myself, and my team “Bigger; Better; Best”.'} />
      </article>
    </section>
  );
}
