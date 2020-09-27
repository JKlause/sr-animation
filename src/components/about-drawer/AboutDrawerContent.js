import React from 'react';
import joeImg from '../../assets/joeImg.jpg';
import styles from './AboutDrawerContent.scss';


export default function AboutDrawerContent() {

  return (
    <section className={`${styles.AboutDrawerContent} disable-scrollbars`}>
      <img src={joeImg} alt="Joe's Picture" />
      <article className="paragraphs">
        <p>
          {'TL;DR == I\'m a fun, funny, passionate, creative, musical, business oriented team player who is super excited to be a part of the Sprinklr team here in PDX.'}
        </p>
        <p>
          {'Hey everyone. My name is Joe. And I\'m applying to become a new member of your team. I got into coding a little over a year ago when I attending Alchemy Code Lab. It was there that I met Megan and Anna who recommended me for this position, and whom I am grateful to! '}
        </p>
        <p>
          {'My journey to coding is a circuitous one. I started at the age of four as a classical musician. After many years of study, I attended the Juilliard School, the New England Conservatory of Music, and the Longy School of Music. I spent most of my time studying the trumpet, and specifically playing orchestral and chamber music. In this capacity I really developed my skill of communication: being able to freely flow ideas (both musically and verbally) as well as receiving subtle (and not so subtle) data from others.'}
        </p>
        <p>
          {'After school I started an ice cream sandwich business with my family. My father and I built it from a farmers market stand into a 6-store chain spanning from Florida to New Jersey. The website is PeacePieWorld.com if you are interested in having your mouth water (I didn\'t build this site). This got old though; if anyone has been in food services, you probably know what it feels like to be a cog in the machine. And after awhile, well, that just got boring to me. I am still an owner of this company, and participate in overall business decisions.'}
        </p>
        <p>
          {'I had been playing with Eugene Symphony since the end of my schooling (I lived in Eugene for about six months, and kept getting calls to come out to sub with the orchestra). I decided it was time to make the great journey West. I spent about a two years being a freelance musician in the PNW. I made it work, and have developed a lot of amazing playing and teaching opportunities. '}
        </p>
        <p>
          {'I am a member of the Eugene and the Portland Columbia Symphonies. I sub with the Oregon Ballet Theatre and Portland Opera. I am also working my way onto the sublist of the Oregon Symphony, and regularly (pre-covid) get called to play musicals. I also play with many chamber groups, including one of my biggest pet projects the Rose City Brass Quintet. I teach trumpet at Reed College and Clackamas Community College. I also have a number of private students out of my home (or on zoom due to covid times). If you\'re interested, you can check out these exploits at RoseCityBrassCompany.com and MusicWithJoe.com (both are square space sites so they don\'t count… and my MusicWithJoe hasn\'t been updated in a minute).'}
        </p>
        <p>
          {'Anyway, after a few years of running around like a chicken missing it\'s head (see important wiki article), I decided to find something that fulfilled my love of problem solving, systems management, math, community, and stability while also leaving me time to continue to pursue what brings joy to my heart. The answer: coding.'}
        </p>
        <p>
          {'In the six months that I spent at Alchemy, I managed to maintain a perfect GPA while continuing all of my musical commitments and drinking lots of coffee. I then moved into a contract position working with a Chinese language learning company. Since the beginning of this year, I have been building their first app/updated website. This involves building a full-stack MERN app, as well as migrating a sql database to a mongoDB. As the only developer on the team (and the team being very small), I\'m acting as their CTO: speaking to the needs of the business, and how those needs have to be reflected in the code that I write. I am responsible for managing myself through this massive undertaking. It\'s great. But it\'s not why I got into coding. I don\'t have PTO, I don\'t have vacation time, I don\'t have benefits, and most importantly I don\'t have a team.'}
        </p>
        <p>
          {'I learn best from others. I work best with others. I want to feel inspired by my teammates. I want to grow with them. I want to collaborate. I want to build a team identity. And I want to get shit done with them (excusez mon français, I curse with the fluency of a person born in New Jersey).'}
        </p>
        <p>
          {'As a deeply spiritual person (I vibe with crystals, Buddah, Jesus, Grandma Spider, my ancestral guides, the moon, the fire gods, etc…), I believe that in this time we must be the light in the world. I believe that we do this, not in what we do, but in how we do it. Sprinklr\'s vision is "to be the world\'s most loved enterprise software company, ever." That is how the world changes, by people and entities striving, not to be the best, but to be the most loved and loving. I want to put my creative and mental energy behind an initiative like that. And on the way, write the World Health Organization\'s home page. Let\'s do this yo!'}
        </p>
      </article>
    </section>
  );
}
