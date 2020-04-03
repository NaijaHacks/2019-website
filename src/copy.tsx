import React from "react";
import { Link, Text } from "@hackthenorth/north";
import {
  // Sponsors & Partners
  SketchLogoImg,
  NexmoLogoImg,
  ZoneTechLogoImg,
  CovenantLogoImg,
  AWSLogoImg,
  BizzSkillsLogoImg,
  SponsorIllustrationImg,
  OnePassword,
  XYZDomains,
  TheIndigene,
  DevCareer,
  Crowdcast,
  Dexon,
  Gridcode,
  Feva,
  Pepsi,
  Popcentral,
  // About section imgs
  PlayIconImg,
  WhyStarted,
  CloseIconImg,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  LightbulbBalloonCloudsIllustrationImg,
  SocialFacebookImg,
  SocialFacebookImgDark,
  SocialInstaImg,
  SocialInstaImgDark,
  SocialTwitterImg,
  SocialTwitterImgDark,
  SocialEmailImg,
  Sam,
  Deji,
  Tope,
  Ara,
  Sola,
  Nelly,
  Kevin,
  Doug,
  Chude,
  Chris,
  Banke,
  Tunde,
  Funto,
  Sefunmi,
  Samson,
  Namnso,
  Shedrack,
  Kevwe,
  Christine,
  Adaohh,
  Stanley,
  Victor,
  Muyiwa,
  Uchendu,
  IK,
  TopeA,
  Tobi,
  Tolu,
  Ihunaya,
  Jackye,
  Jaja,
  Ekene,
  Barry,
  Femi,
  Bukky,
  Mayo,
  Oluchi,
  Segun,
  Yinka,
  Nikky,
  Muna,
  Lola,
  // Team
  Hillary,
  Toni
} from "static/img";

interface Sponsor {
  name: string;
  tier:
    | "bronze"
    | "silver"
    | "gold"
    | "startup"
    | "partner"
    | "gaming"
    | "media"
    | "startup";
  imgSrc: string;
  link: string;
  feature?: {
    text: string;
    link: string;
    linkLabel: string;
  };
}

const previousSponsors: Sponsor[] = [
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/24hwoman.png",
    link: "https://www.twentyfourhourwoman.com/",
    tier: "silver",
    name: "24Hour Woman"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/tech.png",
    link: "https://get.tech/",
    tier: "silver",
    name: ".Tech Domains"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/afriqcan.png",
    link: "http://www.afriqcan.com/",
    tier: "silver",
    name: "AfriqCan"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/bellanaija.png",
    link: "https://www.bellanaija.com/",
    tier: "silver",
    name: "Bella Naija"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/balsamiq.png",
    link: "https://balsamiq.com/",
    tier: "silver",
    name: "Balsamiq"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/cerchy.png",
    link: "https://cerchy.com/",
    tier: "silver",
    name: "Cerchy Community"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/codelagos.png",
    link: "https://codelagos.org/",
    tier: "silver",
    name: "CodeLagos"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/digiclan.png",
    link: "https://digiclanhub.com/",
    tier: "silver",
    name: "DigiClan"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/digitalocean.png",
    link: "https://digitalocean.com/",
    tier: "silver",
    name: "DigitalOcean"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/eiinspire.png",
    link: "http://eiinspire.com",
    tier: "silver",
    name: "EIInspire"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/gimme.png",
    link: "/",
    tier: "silver",
    name: "Gimme"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/hemcloth.png",
    link: "https://hemcloth.com",
    tier: "silver",
    name: "Hem Cloth"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/ingressive.png",
    link: "https://ingressive.co/",
    tier: "silver",
    name: "Ingressive"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/isabiplay.png",
    link: "https://isabiplay.com/",
    tier: "silver",
    name: "iSabiPlay"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/ivorymark.png",
    link: "http://ivorymark.com/",
    tier: "silver",
    name: "IvoryMark NG"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/jetbrains.png",
    link: "http://jetbrains.com/",
    tier: "silver",
    name: "Jetbrains"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/keoyo.png",
    link: "http://www.keoyo.com/",
    tier: "silver",
    name: "Keoyo"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/linode.png",
    link: "https://www.linode.com/",
    tier: "gold",
    name: "Linode"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/lushplans.png",
    link: "https://lushplans.com",
    tier: "silver",
    name: "Lush Plans"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/mlh.png",
    link: "https://mlh.io",
    tier: "silver",
    name: "MLH"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/nicson.png",
    link: "https://nicsonafrica.com",
    tier: "silver",
    name: "Nicson"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/ntel.png",
    link: "https://ntel.com.ng",
    tier: "silver",
    name: "Ntel"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/nugget.ai.png",
    link: "https://nugget.ai",
    tier: "silver",
    name: "Nugget AI"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/ondo.png",
    link: "https://www.ondostate.gov.ng/",
    tier: "silver",
    name: "Ondo State Government"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/printivo.png",
    link: "https://www.printivo.com/",
    tier: "silver",
    name: "Printivo"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/redcarpetontv.png",
    link: "https://redcarpetontv.com",
    tier: "silver",
    name: "Red Carpet On TV"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/seso.png",
    link: "https://seso.global",
    tier: "silver",
    name: "Seso Global"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/stemhubfoundation.png",
    link: "https://stemhubfoundation.com",
    tier: "silver",
    name: "StemHub Foundation"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/stickergiant.png",
    link: "https://www.stickergiant.com/",
    tier: "silver",
    name: "Stickergiant"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/stickermule.png",
    link: "https://mule.to/NaijaHacks",
    tier: "silver",
    name: "Stickermule"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/stickeryou.png",
    link: "https://stickeryou.com",
    tier: "silver",
    name: "StickerYou"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/techher.png",
    link: "https://techherng.com/",
    tier: "silver",
    name: "TechHer"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/trippy.png",
    link: "https://www.instagram.com/trippy_socks/",
    tier: "silver",
    name: "Trippy Socks"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/twilio.png",
    link: "https://www.twilio.com/",
    tier: "silver",
    name: "Twilio"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/wolfram.png",
    link: "https://www.wolfram.com/",
    tier: "silver",
    name: "Wolfram"
  }
];

const sponsors: Sponsor[] = [
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/linode.png",
    link: "https://www.linode.com/",
    tier: "gold",
    name: "Linode"
  },
  {
    imgSrc: NexmoLogoImg,
    link: "https://nexmo.com",
    tier: "gold",
    name: "Nexmo"
  },
  {
    imgSrc: AWSLogoImg,
    link: "https://www.aws.com/",
    tier: "gold",
    name: "Amazon"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/balsamiq.png",
    link: "https://balsamiq.com/",
    tier: "silver",
    name: "Balsamiq"
  },
  {
    name: "Dotts Media",
    tier: "media",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0KgyfriU19DYyDnhmd4NMRXUeNhz4q5olRvZEifPF_pvXmnk",
    link: "https://dottsmediahouse.com/"
  },
  {
    name: "BizSkills Academy",
    tier: "startup",
    imgSrc: BizzSkillsLogoImg,
    link: "https://www.bizskillsacademy.com/"
  },
  {
    tier: "gaming",
    imgSrc: "https://naijahacks.com/2018/res/sponsors/isabiplay.png",
    link: "https://isabiplay.com/",
    name: "iSabiPlay"
  },
  {
    imgSrc:
      "https://dka575ofm4ao0.cloudfront.net/pages-transactional_logos/retina/2661/r0mjZTxOTjmP9vbv2Ypl",
    link: "https://particle.io",
    tier: "silver",
    name: "Particle"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/stemhubfoundation.png",
    link: "https://stemhubfoundation.com",
    tier: "silver",
    name: "StemHub Foundation"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/ivorymark.png",
    link: "http://ivorymark.com/",
    tier: "silver",
    name: "IvoryMark NG"
  },
  {
    imgSrc: Gridcode,
    link: "https://findgridcode.com/",
    tier: "silver",
    name: "Gridcode"
  },
  {
    imgSrc: Popcentral,
    link: "https://www.popcentraltv.com/",
    tier: "silver",
    name: "Popcentraltv"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/twilio.png",
    link: "https://www.twilio.com/",
    tier: "bronze",
    name: "Twilio"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/stickermule.png",
    link: "https://mule.to/NaijaHacks",
    tier: "bronze",
    name: "Stickermule"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/jetbrains.png",
    link: "http://jetbrains.com/",
    tier: "silver",
    name: "Jetbrains"
  },
  {
    imgSrc: Crowdcast,
    link: "https://www.crowdcast.io/",
    tier: "silver",
    name: "Crowdcast"
  },
  {
    imgSrc: SketchLogoImg,
    link: "https://www.sketch.com",
    tier: "silver",
    name: "Sketch"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/trippy.png",
    link: "https://www.instagram.com/trippy_socks/",
    tier: "silver",
    name: "Trippy Socks"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/wolfram.png",
    link: "https://www.wolfram.com/",
    tier: "silver",
    name: "Wolfram"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/lushplans.png",
    link: "https://lushplans.com",
    tier: "silver",
    name: "Lush Plans"
  },
  {
    imgSrc:
      "https://stories.pitchdrive.xyz/wp-content/uploads/2019/09/TechCabal-1.png",
    link: "https://techcabal.com",
    tier: "bronze",
    name: "TechCabal"
  },
  {
    imgSrc: "https://cdn.worldvectorlogo.com/logos/axure-2.svg",
    link: "https://www.axure.com/",
    tier: "silver",
    name: "Axure"
  },
  {
    imgSrc: ZoneTechLogoImg,
    link: "zonetechpark.co",
    tier: "silver",
    name: "Zone Tech Park"
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/eggheadio/egghead-brand/master/Egghead-Logo-Dark.png",
    link: "https://egghead.io",
    tier: "silver",
    name: "Egghead.io"
  },
  {
    imgSrc: Pepsi,
    link: "https://twitter.com/Pepsi_Naija",
    tier: "silver",
    name: "Pepsi"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/techher.png",
    link: "https://techherng.com/",
    tier: "silver",
    name: "TechHer"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/digiclan.png",
    link: "https://digiclanhub.com/",
    tier: "silver",
    name: "DigiClan"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/digitalocean.png",
    link: "https://digitalocean.com/",
    tier: "silver",
    name: "DigitalOcean"
  },
  {
    imgSrc: XYZDomains,
    link: "https://gen.xyz/",
    tier: "silver",
    name: ".XYZ Domains"
  },
  {
    imgSrc: DevCareer,
    link: "https://devcareer.io/",
    tier: "silver",
    name: "DevCareer"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/printivo.png",
    link: "https://www.printivo.com/",
    tier: "silver",
    name: "Printivo"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/gimme.png",
    link: "/",
    tier: "silver",
    name: "Oh Woh popcorn"
  },
  {
    imgSrc: TheIndigene,
    link: "https://www.instagram.com/the_indigene/",
    tier: "silver",
    name: "The Indigene"
  },
  {
    imgSrc:
      "https://4.bp.blogspot.com/-sn_1frB-tto/W_eevs6kyzI/AAAAAAAANhE/ZPlkvH6ysTAMuBJlbtYsSxkC28xaRrZugCLcBGAs/s1600/PCBWay%2BTlogo.png",
    link: "https://pcbway.com",
    tier: "silver",
    name: "PCBWay"
  },
  {
    imgSrc: Feva,
    link: "http://www.fevatv.com/",
    tier: "silver",
    name: "Feva TV"
  },
  {
    imgSrc: CovenantLogoImg,
    link: "https://covenantuniversity.edu.ng/",
    tier: "silver",
    name: "Covenant University"
  },
  {
    imgSrc: OnePassword,
    link: "1Password.com",
    tier: "bronze",
    name: "1Password"
  },
  // {
  //   imgSrc:
  //     "https://uploads-ssl.webflow.com/5bddf05642686caf6d17eb58/5cf52c37420081eec94ed662_VF_Logo_Black.png",
  //   link: "https://voiceflow.com",
  //   tier: "silver",
  //   name: "Voiceflow"
  // },
  {
    imgSrc: Dexon,
    link: "https://www.instagram.com/dexongroup",
    tier: "silver",
    name: "Dexon"
  }
];

const team = [
  {
    text: "Uchi Uchibeke",
    alt: "Uchi Uchibeke",
    img: "https://naijahacks.com/2018/res/team/uchi.png",
    title: "Founder"
  },
  {
    text: "Blessing Thomas",
    alt: "Blessing Thomas",
    img: "https://naijahacks.com/2018/res/team/blessing.jpeg",
    title: "Co-chair"
  },
  {
    text: "Abdulsalam Daud",
    alt: "Abdulsalam Daud",
    img: "https://naijahacks.com/res/team/abdulsalam.jpg"
  },
  {
    text: "Hillary Masha",
    alt: ". . .",
    img: Hillary
  },
  {
    text: "Toni Ogunmade",
    alt: ". . .",
    img: Toni
  },
  {
    text: "Mohammed Bayero Yayandi",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/mohammed.jpg"
  },
  {
    text: "Ifeanyichukwu Nwabuokei ",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/ify.jpg"
  },
  {
    text: "Adekanye Francisca",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/cisca.jpg"
  },
  {
    text: "Andrew Miracle",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/andrew.jpg"
  },
  {
    text: "Adeniyi Adedamola ",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/adeniyi.jpg"
  },
  {
    text: "Richard",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/ganihu.jpg"
  },
  {
    text: "Ahmed Olanrewaju O.",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/ahmed.jpeg"
  },
  {
    text: "Daniel Enemchukwu",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/daniel_e.jpg"
  },
  {
    text: "Chidiebere Onyegbuchulem",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/chidi.jpg"
  }
];

export default {
  nav: {
    logo: {
      light: "https://naijahacks.com/guide/img/favicon.png",
      dark: "https://naijahacks.com/guide/img/favicon.png"
    },
    sections: ["About", "Participants", "Judges", "Sponsors", "FAQ", "2018"],
    socialLinks: [
      {
        name: "twitter",
        icons: {
          light: SocialTwitterImg,
          dark: SocialTwitterImgDark
        },
        link: "https://twitter.com/naijahacks"
      },
      {
        name: "instagram",
        icons: {
          light: SocialInstaImg,
          dark: SocialInstaImgDark
        },
        link: "https://www.instagram.com/naijahacks"
      },
      {
        name: "facebook",
        icons: {
          light: SocialFacebookImg,
          dark: SocialFacebookImgDark
        },
        link: "https://www.facebook.com/naijahacks"
      }
    ],
    sponsorButton: {
      text: "Become a Campus Ambassador"
    }
  },
  hero: {
    firstLine: "This is a movement of ",
    secondLine: "This is NaijaHacks.",
    thirdLine: "Africa's Biggest Hackathon.",
    keyWords: ["Leaders.", "Makers.", "Disruptors."],
    subtitle: "Online Dec 7 - 14 \nDemo day Dec 17, 2019  \n@ Zone Tech Park",
    emailNotif: " has been added to our mailing list.",
    emailPlaceholder: "Enter your email address for updates",
    emailDupe: "This email is already on the mailing list!",
    emailError: "Error! Please try again."
  },
  sponsorsSection: {
    heading: "Support Innovation",
    desc: (
      <>
        <Text variant="sectionText">
          Each year, sponsors from around the world join us to empower young
          Nigerian's to build solutions that make a difference for them, their
          families and for the world. Stay tuned as we confirm more sponsors for
          NaijaHacks 2019.
        </Text>
        <Text variant="sectionText" as="p">
          Interested in sponsoring? Email us at{" "}
          <Link href="mailto:team@naijahacks.com">team@naijahacks.com</Link>
        </Text>
      </>
    ),
    cta: {
      link: "mailto:team@naijahacks.com",
      label: "Become a sponsor"
    },
    illustration: SponsorIllustrationImg,
    sponsors,
    previousSponsors
  },
  about: {
    title: "Africa's biggest hackathon",
    sentence1:
      "Join 1,300+ participants, 50+ sponsors and judges from 8+ countries at NaijaHacks 2019 to build solutions for Education, Housing, Job Creation and Citizen Safety",
    sentence2:
      "NaijaHacks is not just a hackathon in Nigeria. The #NaijaHacks2019 experience starts online and continues in a demo day and award ceremony at Zone Tech Park. Unlike other Hackathons, we follow up, match participants to companies and mentor and fund the projects that come out of NaijaHacks.",
    gears: [
      {
        name: "speakers",
        // body: "Speakers and Judges from 5 countries",
        body: "CITIZEN SAFETY",
        images: [],
        delay: 2000,
        gradient: { id: "speakerGradient", url: Circle1 }
      },
      {
        name: "activities",
        body: "EDUCATION",
        images: [],
        delay: 4000,
        gradient: { id: "activityGradient", url: Circle2 }
      },
      {
        name: "hackers",
        // body:
        //   "Meet and network with 1,300+ hackers from all around the the country",
        body: "HOUSING",
        images: [],
        delay: 6000,
        gradient: { id: "hackerGradient", url: Circle3 }
      },
      {
        name: "hardware",
        // body: "Win Millions of Naira in cash and prizes",
        body: "JOB CREATION",
        images: [],
        delay: 8000,
        gradient: { id: "hardwareGradient", url: Circle4 }
      }
    ],
    videoButton: {
      icon: PlayIconImg,
      text: "Watch our recap video",
      background: "black"
    },
    engineering: {
      logo: "",
      illustration: WhyStarted,
      text:
        "We started NaijaHacks to inspire a new generation of Nigerians and Africans to be makers, leaders and diruptors. After attending over 50 Hackathons and seeing the impact that they made in our lives and careers, we decided to bring a Hackathon, built for Africa, from the lessons we learned at Harvard, MIT, Stanford, Waterloo, Princeton and others. NaijaHacks is built by Africans for Africans and powered by supporters from over 8 countries."
    },
    video: {
      url: "https://www.youtube.com/watch?v=QaAzvrL-Qb4",
      closeIcon: CloseIconImg
    }
  },
  storiesSection: {},
  faq: {
    title: "Frequently asked questions",
    body: [
      {
        question: "What is NaijaHacks?",
        answer:
          "Started in 2018, NaijaHacks is Africa's largest Hackathon, where 1,300+ young Nigerians of different skill levels come together and create unique software or hardware projects from scratch. We empower and enable teams to make something great by providing an abundance of resources like workshops, mentors, sponsors, challenges and prizes."
      },
      {
        question: "Who can participate?",
        answer:
          "Anyone of any education level from anywhere in Africa are eligible to apply for NaijaHacks!"
      },
      {
        question: "How much does it cost to attend NaijaHacks?",
        answer:
          "Admission to NaijaHacks is completely free. We also provide food and some travel reimbursement!"
      },
      {
        question: "How do I get to NaijaHacks?",
        answer:
          "Actual building and workshops happen remotely. For teams invited to demo in Lagos, we will be partnering with transportation companies to provide travel discounts to participants. We are also working on providing reimbursements for travel expenses."
      },
      {
        question: "How many people can be on a team?",
        answer:
          "You can form teams of up to 4 people. There are no restrictions for who they can be, so you can team up with hackers from any school, country, or experience level. Teams can be formed before or during the event."
      },
      {
        question: "What if I’m new to programming?",
        answer:
          "That's okay! A hackathon is a great place to gain valuable experience. There will be tutorials, workshops and mentors to help throughout the event!"
      },
      {
        question: "What if I've never been to a hackathon before?",
        answer:
          "NaijaHacks welcomes participants of all skill levels. We’ll have talks, mentors and workshops to help you with your project; hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people. Check out our Hacker Guide!"
      },
      {
        question: "Can I start working on my hack before the event?",
        answer:
          "No. In the interest of fairness, participants should not be working on their projects before NaijaHacks begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand!"
      },
      {
        question: "When will applications for NaijaHacks 2019 open?",
        answer:
          "Applications for NaijaHacks opened October 5, 2019 and will close November 30, 2019 - follow us on social media to learn more!"
      },
      {
        question: "What if I can't find a team?",
        answer:
          "Don't worry! The team formation session on the first day of NaijaHacks is a great place to find teammmates!"
      },
      {
        question: "What can I win?",
        answer:
          "Over 30 Prizes worth over $100,000 will be won at NaijaHacks. Stay tunned for prize announcements!"
      },
      {
        question: "Is there a Code of Conduct?",
        answer: (
          <>
            Yes! Hackers are expected to adhere to the{" "}
            <Link
              href="https://drive.google.com/file/d/1L00oPvBuFytYs2KIvFLkH0TYJ3nd_01X/view?usp=sharing"
              newTab
            >
              NaijaHacks Code of Conduct.
            </Link>
            .
          </>
        )
      },
      {
        question: "404: Question Not Found",
        answer: (
          <>
            If your question is not listed here, please feel free to reach out
            to us at{" "}
            <Link href="mailto:team@naijahacks.com">team@naijahacks.com</Link>{" "}
            or on{" "}
            <Link href="https://www.twitter.com/naijahacks" newTab>
              Twitter
            </Link>
            .
          </>
        )
      }
    ]
  },
  footer: {
    img: "",
    cta: "Fun Makers • Creative Leaders • Norm Disruptors • #NaijaHacks2019 ",
    links: [
      {
        text: "About NaijaHacks",
        hyperlink: "/#about",
        newTab: false
      },
      {
        text: "Code of Conduct",
        hyperlink:
          "https://drive.google.com/file/d/1L00oPvBuFytYs2KIvFLkH0TYJ3nd_01X/view?usp=sharing",
        newTab: true
      }
    ],
    socials: [
      {
        name: "Email",
        img: SocialEmailImg,
        link: "mailto:team@naijahacks.com"
      },
      {
        name: "Twitter",
        img: SocialTwitterImg,
        link: "https://twitter.com/naijahacks"
      },
      {
        name: "Instagram",
        img: SocialInstaImg,
        link: "https://www.instagram.com/naijahacks/"
      },
      {
        name: "Facebook",
        img: SocialFacebookImg,
        link: "https://www.facebook.com/naijahacks"
      }
    ],
    team: team, // shuffle(team),
    // defaultOrganizerText: "Originally made with 💛 in Waterloo 🇨🇦"
    defaultOrganizerText: "By #TeamNaijaHacks 🇳🇬. Originally made in 🇨🇦"
  },
  leaders: {
    title: "Judges & Speakers",
    desc: (
      <Text className="desc" variant="sectionText">
        Tech and Business leaders from 5 countries judge, speak and mentor at
        NaijaHacks. We will be announing more amazing Judges, Mentors and
        Speakers in the coming weeks.
      </Text>
    ),
    img: LightbulbBalloonCloudsIllustrationImg,
    leaders2018: [
      {
        name: "Adeola D. Olubamiji, Ph.D.",
        title: "Founder, STEMHub Foundation",
        img: "https://naijahacks.com/2018/res/bosses/adeola.png"
      },
      {
        name: "Charles St.Louis",
        title: "Co-Founder, HealthBlock Identity (HBI)",
        img: "https://naijahacks.com/2018/res/bosses/charles.jpeg"
      },
      {
        name: "Allan Kerr",
        title: "Snr. Software Engineer, Classified",
        img: "https://naijahacks.com/2018/res/bosses/allan.JPG"
      },
      {
        name: "Obafunto AyinOluwa",
        title: "Snr. Manager, Royal Bank of Canada",
        company: "Royal Bank of Canada",
        img: "https://naijahacks.com/2018/res/bosses/funto.png"
      },
      {
        name: "Shedrack Akintayo ",
        title: "Software Developer, Legal Robot Inc ",
        img: "https://naijahacks.com/2018/res/bosses/shedrack.png"
      },
      {
        name: "Ifeanyi Anazodo",
        title: "Co-founder and VP, Data & Intelligence, Farmcrowdy",
        img: "https://naijahacks.com/2018/res/bosses/ifeanyi.png"
      },
      {
        name: "Tiwalola Olanubi Jnr",
        title: "Creative Director, Dotts Media House",
        img: "https://naijahacks.com/2018/res/bosses/tj.png"
      },
      {
        name: "Chidera Muoka ",
        title: "Editor, Guardian Life, The Guardian Newspapers ",
        img: "https://naijahacks.com/2018/res/bosses/chidera.jpg"
      },
      {
        name: "Ali El-Shayeb",
        title: "Founder/CEO, Nugget.ai",
        img: "https://naijahacks.com/2018/res/bosses/ali.png"
      },
      {
        name: "Winfrey Okolo",
        title: "Barrister/Presenter, Silverbird Television",
        img: "https://naijahacks.com/2018/res/bosses/winfrey.png"
      },
      {
        name: "Chioma Agwuegbo",
        title: "Program Manager for Africa, Reboot",
        img: "https://naijahacks.com/2018/res/bosses/chioma.png"
      },
      {
        name: "Namnso Ukpanah",
        title: "Lead Designer Advocate, Figma Africa",
        img: "https://naijahacks.com/2018/res/bosses/namnso.jpg"
      },
      {
        name: "Ngowari Diminas",
        title: "Founder, CAFEW",
        img: "https://naijahacks.com/2018/res/bosses/ngowari.png"
      },
      {
        name: "Kevin Eligwe",
        title: "Designer, Hemcloth",
        img: "https://naijahacks.com/2018/res/bosses/kevin.jpg"
      },
      {
        name: "Muyiwa Aleshinloye",
        title: "Head, Digital Media, Starcom Media Perspectives",
        img: Muyiwa
      },
      {
        name: "Victory Oomotayo",
        title: "Owner & Founder, Twenty-Four Hour Woman",
        img: "https://naijahacks.com/2018/res/bosses/victory.png"
      },
      {
        name: "Toni Akinwumi",
        title: "Communications Specialist, Shopify",
        img: "https://naijahacks.com/2018/res/bosses/toni.png"
      },
      {
        name: "Adeloye Olanrewaju",
        title: "CEO, Babymigo",
        img: "https://naijahacks.com/2018/res/bosses/lanre.png"
      },
      {
        name: "Rosemary Ajuka",
        title: "Media Entrepreneur,Cerchy Community ",
        img: "https://naijahacks.com/2018/res/bosses/rosemary.png"
      },
      {
        name: "Phillips Tunde",
        title: "Lead, Digital Marketing, Printivo.com",
        img: "https://naijahacks.com/2018/res/bosses/tunde.png"
      },
      {
        name: "Dayo Olawo",
        title: "Senior Product Strategist, Google",
        img: "https://naijahacks.com/2018/res/bosses/dayo.png"
      },
      {
        name: "Temitope Ekundayo",
        title: "Head of Growth & Partnership, Printivo.com",
        img: "https://naijahacks.com/2018/res/bosses/tope.jpg"
      },
      {
        name: "Ejike Anih",
        title: "Founder & CEO, IfeanHealth",
        img: "https://naijahacks.com/2018/res/bosses/ejike.png"
      },
      {
        name: "Doug Gould",
        title: "Partnerships, Microsoft",
        img: "https://naijahacks.com/2018/res/bosses/doug.png"
      },
      {
        name: "Rahman Oloritun",
        title: "Analytics & DevOps, Reach ltd",
        img: "https://naijahacks.com/2018/res/bosses/rahman.png"
      },
      {
        name: "Funbi Makinde",
        title: "UX Researcher, Shopify",
        img: "https://naijahacks.com/2018/res/bosses/funbi.png"
      },
      {
        name: "Banke Alawaye",
        title: "Program Manager, CodeLagos",
        img: "https://naijahacks.com/2018/res/bosses/banke.png"
      },
      {
        name: "Ara Sadiq",
        title: "Business Development Lead, FinConecta",
        img: "https://naijahacks.com/2018/res/bosses/ara.png"
      }
    ],
    leaders: [
      {
        name: "Adeola D. Olubamiji, Ph.D.",
        title: "Founder, STEMHub Foundation",
        img: "https://naijahacks.com/2018/res/bosses/adeola.png",
        bio: `
        `
      },
      {
        name: `Sam "SuperGeek" Uduma`,
        title: "Serial Entepreneur/Investor",
        img: Sam,
        bio: `Sam is a seasoned entrepreneur, who has ventured into both hardware and software tech startups in Nigeria. With a Penchant for innovation and technology for solutions, Sam has launched several investment vehicles geared towards activating the knowledge capacity of Nigerians, promote our technology and culture and equipping the industry as a whole.
        `
      },
      {
        name: `Doug Gould`,
        title: "Startup Business Development, Amazon Web Services",
        img: Doug,
        bio: `Doug is a startup advisor and angel investor. He's spent his career working in the developer tools and cloud space with startups Cloudability and Xamarin. In addition, he's been on teams both at Microsoft and AWS working on emerging technologies. He's also spent time working at venture firm Kairos Society supporting entrepreneurs around the world. 
        `
      },
      {
        name: `Obafunto AyinOluwa`,
        title:
          "Snr. Manager, Portfolio Planning & Strategy, Royal Bank of Canada",
        img: Funto,
        bio: `"Obafunto AyinOluwa is accountable to provide leadership for the entire Core Banking and Systems Modernization portfolio in the areas of portfolio analysis, communication, strategy development and research. 

        Obafunto has proven experience in consulting, design thinking, agile, risk management, governance and compliance. In his previous role at Strategy and Transformation, he facilitated and supported the Technology and Operations strategy cycle from how our strategy is designed, to how it is implemented, and how our results are delivered and measured.
        
        Obafunto holds a BSc degree in Banking and Finance from Covenant University and a Master’s degree in Management Innovation and Entrepreneurship from Queen’s University.
        
        He is also the co-founder of Smile Care Initiative with extensive involvement in community and social leadership activities.
        
        "
        `
      },
      {
        name: `Christine Dikongué`,
        title:
          "National Director, Young Entrepreneurs & Strategic Partnerships, Canadian Black Chamber of Commerce",
        img: Christine,
        bio: `"Christine Dikongué was born in Douala, Cameroon, raised between three continents and in 6 different countries.


        She has been living in Toronto for a decade now. Christine has experience in various disciplines (international economics, project management, marketing and technology).
        
        
        Christine draws on her personal experience and cross-cultural knowledge to raise awareness of issues related to access to quality education (SDG 4) and gender equality (SDG 5), while representing youth and marginalized communities.
        
        
        With her expertise in youth Mentoring , capacity building & strategic Partnerships, Christine is a member of the Board of Directors of the United Nations Association in Canada ( Toronto Branch) and the Canadian Black Chamber of Commerce.
        
        
        More recently, she was a youth ambassador for Barack Obama’s Canada2020 Conference. You can find her on the Most Influential People of African Descent ‘s Global Top 100 under 40, in recognition of the UN International Decade for People of African Decent and amongst  the Top 100 Black Women to Watch in Canada.
        "
        `
      },
      {
        name: `Femi Taiwo`,
        title: "Executive Director, LEAP Africa",
        img: Femi,
        bio: `Femi is the Executive Director of LEAP Africa- one of Africa’s leading youth-focused leadership development organisations. In this role, he leads the organization’s fund-raising, strategy implementation, and programme delivery in six African countries. A 2018 Aspen Institute IdeasFest Scholar and a member of the inaugural class of the Obama Africa Leader's Program, Femi serves on the Board of Global Compact Network of Nigeria (United Nations Global Compact). Prior to this position at LEAP, he was the founding Executive Director of Eagles HOPE Foundation. Femi holds a MSc degree in Innovation Management & Entrepreneurship from Manchester Business School, where he focused his research on Social Innovation and Entrepreneurship. He completed his Bachelor’s degree at Covenant University, where he earned a first class degree in Computer Science..
        `
      },
      {
        name: `Stanley Chukwuma`,
        title: "CEO, Bankspace Corp. Canada",
        img: Stanley,
        bio: `
        `
      },
      {
        name: `Ekundayo Temitope`,
        title: "Chief of Growth, Printivo",
        img: Tope,
        bio: `"Temitope leads the growth team at Printivo.com, an online print and design company focused on helping SMEs and Multinationals print marketing collaterals with top quality, speed and convenience making it one of the fastest growing Startups today.

        He also manages Promostack, an SBU under the Printivo group focused on gifts, merchandise and souvenirs to serve your everyday gift needs.
        
        Tope is an astute business strategist with a wide background in business development, sales, marketing, growth hacking, product and process development, technology, operations and creative ad roles with over 10 years experience. 
            
           
        He is the Founder of Endava Interactive(www.endava.com.ng), an SMB Consultancy and design Agency focused on growing Startups by providing strategies that move them from 0 to 1.
        
        He is also an Alumni of AIESEC a Global organisation of change makers and leaders present in 122 countries worldwide and he was Local lead where he started projects  centred on on Cancer/HIV Awareness that impacted over 5000 men/women across 15 communities in Rivers State in 2011.
        
        He enjoys creating business models , helping scale startups and preach about focus on driving growth within the ecosystem, he is also an aspiring Chef and Food connoisseur.
            
        He can be reached on twitter at @sinzubaba as well as Medium https://medium.com/@sinzubaba/shadow-titan-the-beloxxi-case-study-c4cf93e4fa12
        "
        `
      },
      {
        name: `Jackye Madu`,
        title: "Co-founder TCMN, Convrsah & DBA,	The Content Man Network",
        img: Jackye,
        bio: `"Jackye popularly called the Tech Queen is the co founder of The Content Man Network, a Software development and media company, the parent company behind Convrsah and DBA. She is also referred to as the AI girl because of her strong advocacy for AI while she was in the Big Brother house. Jackye strongly believes that technology is the gateway out of poverty for anyone who taps into it.

        Jackye is also a model, TV host and an ex beauty queen. She is what I'll call ""Jack of all trades master of all"" I guess that's why her name is Jackye 😜"
        `
      },
      {
        name: "Tiwalola Olanubi Jnr",
        title: "Creative Director, Dotts Media House",
        img: "https://naijahacks.com/2018/res/bosses/tj.png",
        bio: `
        `
      },
      {
        name: `Oluwasola Obagbemi`,
        title: "Senior Comms Mgr., Africa, Andela",
        img: Sola,
        bio: `"Oluwasola Obagbemi (29years)

        Since she started her career as a PR, Event and Media Consultant ten years ago, Sola has steadily climbed through the corporate ladder to become the Senior Manager, Marketing and Communications for Andela, overseeing the brand’s marketing communications across Africa. She first joined the Andela team as the Communications Manager for Nigeria, and in her first 6 months, she led strategic PR efforts that saw to a significant increase in brand visibility and awareness - hence the promotion to lead and build the Comms and Marketing team in Africa (Uganda, Kenya, Rwanda, Egypt and Nigeria)
        
        Before her move to Andela, Sola was the Deputy Chief Operating Officer at Red Media Africa and was also the Senior Account Manager for Facebook, Union Bank, Uber Africa, HP, Intel WestAfrica, Maltina, Heineken, British Council, 33’Export, Life Beer and Pepsodent. During this time, Sola coordinated the publicity and press viewing event of Mark Zuckerberg’s 2016 visit to Nigeria. In 2015, she worked with Waggener Edstrom Communication in South Africa where she handled projects and PR activities on Microsoft, Intel Africa, and Samsung in 2015.
        
        She graduated with a B.A Degree in Dramatic Arts from Obafemi Awolowo University and holds a Master's degree in Communications Studies from the University of Ghana, Accra Ghana (2012-2013) with a major in Public Relations and Advertising. Sola is also a certified member of the Nigerian Institute of Public Relations (NIPR).
        
        Sola is very passionate about the girl child and has championed causes, geared towards promoting equality and inclusion for women. She is also an advocate for women rising to the peak of their career while having work-life-balance."
        `
      },
      {
        name: `Yinka Obebe`,
        title: "MD/CEO, Popcentral TV",
        img: Yinka,
        bio: `Yinka is the founder and CEO of popcentral, a Pop culture General entertainment channel on Dstv ch189 and Pophub Lagos, a content co-creation hub. A tv director and producer. Yinka founded and served as CEO for Redboxafrica a creatives and production company known for producing television commercials and channel branding prior to launching Popcentral on Dstv. He is an enabler, always avant-garde and committed to using technology to drive the African stories and engagement.
        `
      },
      {
        name: `Ada OHH`,
        title: "OAP/Producer, FEVA TV",
        img: Adaohh,
        bio: `Ada Onianwah aka Ada Ohh, is one of the freshest faces in the Media and
        Entertainment Industry in Canada. She is a media creator, but best
        known for her work as a radio personality on VIBE 105.5 FM as well as
        her work on Television with FEVA TV.  Ada finished her
        Bachelor's degree at Ryerson University in the Radio and Television
        Arts Program (RTA). She's always been inspired by music and television
        and has been active in her career since she was a teenager. With her
        resilient work ethic, elite connections, and her personality
        brand, she is a force to be reckoned with.
        `
      },
      {
        name: `Nelly Mesik`,
        title: "Creative Director, Nelly Mesik Consultancy/Vanguard Allure",
        img: Nelly,
        bio: `"My name is Nelly Mesik ,30years of age ... I am a graduate of Marketing from the Nnamdi Azikiwe University, Awka ... Graduated in 2011... I worked with different media houses as a writer and on some tv shows between 2012 and 2014, in 2014 I became the youngest Creative Director for Vanguard Newspaper.

        In 2015 I started Nelly Mesik Consultancy which is a photography and talent consultancy firm .
        
        I enjoy hanging out when I can ; cause am mostly an indoors when am not working ,I also love movies ,games and cooking "
        `
      },
      {
        name: `Samson Opaleye`,
        title: "COO/Managing Partner, Dotts Media House",
        img: Samson,
        bio: `Samson Opaleye is the Chief Operating Officer and Managing Partner of Dotts Media House, Nigeria’s foremost digital media agency for leading brands in Africa. Samson’s passion for solving problems for brands through digital media marketing and business development has led him to work with global brands like Pepsi, HP, Dano Milk Nigeria, SPAR Nigeria, Intel, Lufthansa Airlines, World Economic Forum and many more. He is a thought leader in digital marketing.
        `
      },
      {
        name: `Ayodeji Razaq`,
        title: "Marketing and Experiential Events Lead, Riquesa Africa ",
        img: Deji,
        bio: `Ayodeji is the Co-Founder of Riquesa Africa - A Premium Experiential and Activations Hub, with offices in Lagos and Ghana. He is a Fellow of the Chartered Institute of Management. Ayodeji has built a career in creating and executing signature events for Top Brands (Dano, HP, Intel, PZ, Oracle, Google, Microsoft, Unity Bank to name a few. Some of his more prominent executions include setting a new Guinness World Record for a brand in 2018. An Alumni of the University of Lagos, he began an amazing career in marketing by being the First Blackberry Ambassador in Lagos. 
        `
      },
      {
        name: `Ara Sadiq`,
        title: "Business Development Lead, Finconecta",
        img: Ara,
        bio: `Ara is an innovation enthusiast who started her career in banking over a decade ago, and now works as Business Development Lead for Africa with Finconecta - a Miami-based fintech. She acquired her MBA from Lagos Business School and Master of Advanced Management from Yale School of Management, where she led stakeholder gatherings and executed research projects in innovation and digital finance. Ara is excited about technology, product design and the possibilities that come with these.
        `
      },
      {
        name: `Kevin Eligwe`,
        title: "Creative Director & Designer, Hemcloth",
        img: Kevin,
        bio: `Kevin is a designer in the clothing and architecture industry in Fort Lauderdale, Florida, US. Co-founder at Hemcloth, a brand focused on sharing messages through clothing and unifying cultures by wearing them. In Architectural design he is Experienced in Commercial, Residential, 3D Modeling and Interior design all over South Florida. A business enthusiast and a creative at heart,  focused on solving problems through design.
        `
      },
      {
        name: "Muyiwa Aleshinloye",
        title: "Head, Digital Media, Starcom Media Perspectives",
        img: Muyiwa,
        bio: `
        `
      },
      {
        name: `Namnso Ukpanah`,
        title: "Product Designer, Flutterwave",
        img: Namnso,
        bio: `Namnso is a Product Designer with great experience designing hospitality and financial SaaS applications for both web and mobile platforms. He also builds and maintains design systems as well as growing one of the largest design communities in Africa.
        `
      },
      {
        name: `Banke Alawaye`,
        title: "Digital Transformation Specialist, Independent Consultant",
        img: Banke,
        bio: `"Banke Alawaye is a digital transformation specialist and business analyst based in Lagos Nigeria. With over 20 years of work experience with many businesses, she has been helping personal brands and organisations make the best of digital tools for years.

        Banke is a Chartered Management Consultant. She holds a B.Sc in Computer Science, a Masters in Business Administration from Edinburgh Business School, Scotland and a Certificate in Entrepreneurial Management from Pan African University’s Enterprise Development Centre. 
        
        She is an Independent consultant working with Government and Private Sector clients on digital transformation projects. She was the pioneer program manager CodeLagos – an initiative to train 1 million Lagos residents to code. She’s on the advisory board for Girl Code Academy and founder, Girls-in-Glasses – a community for women in tech which seeks to improve access to opportunities and ultimately the success of women in tech.
        
        She’s a passionate advocate for women in technology and was recognised as Digital Frontier Woman by DecadeOfWomen."
        `
      },
      {
        name: `Tolu Akinwumi`,
        title: "Manager, Supply Programs and Sustainability Engineering, Lyft",
        img: Tolu,
        bio: `
        Tolu Akinwumi is a Nigerian-born, US Professional Engineer, who has delivered billion dollar projects and commercial deals for Shell and Tesla. He is currently leading manufacturing programs and technical sustainability efforts for Lyft's micro-mobility division. He is passionate about capital and the environment, and currently working on a stealth venture focused on improving capital in Africa. 
        `
      },
      {
        name: `Oghenekevwe Olukemi Omotosho `,
        title: "Founder, Isabiwork",
        img: Kevwe,
        bio: `"Oghenekevwe Omotosho is a graduate of computer engineering. She obtained her B.Eng. at the Enugu State University of Science and Technology, Enugu, Nigeria in 2008. Kevwe is a creative thinker and serial entrepreneur.

        Kevwe is the founder of Isabiwork, which is an app that bridges the digital divide between service providers and clients. She emerged the winner of the Top Female Entrepreneur award for Nigeria, at the 2018-2019 Total Startupper of the Year challenge organized by Total Exploration and Production Limited and held simultaneously in 55 countries as a result of which she was among the set of entrepreneurs that represented Nigeria in Paris, France in March 2019 
        
        Kevwe is also a social reformer with a passion to restore the dignity of labour for African artisans and local service providers. She believes that no handwork or skill should be discriminated against, on any basis.
        
        Her goal is to reduce unemployment by encouraging skills acquisition and proper certification, branding and representation of artisans and local service providers to better themselves and present their services for more visibility and income generation.
        
        She is also the CEO of the brand “Oh Wow Popcorn and Events” which specialises in popcorn, ice cream and cotton candy catering for weddings, birthdays and corporate organisations.
        
        I hope it's not too long. Feel free to suggest any type of editing."
        `
      },
      {
        name: `Tobi Akinwumi`,
        title: "Product Manager, SOCAN Canada",
        img: Tobi,
        bio: `Tobi is an experienced Product Manager and full stack web developer.  Also the founder/CPO of Crowdsmint. 
        `
      },
      {
        name: `Tope Adenola`,
        title: "Photographer, HORPLOAD WORKS",
        img: TopeA,
        bio: `"Tope Adenola is a Portrait & Lifestyle Photographer based in Lagos - Nigeria, and leader of his team at Horpload Works Photography.

        Known for his versatility, creative drive, and being one of the most sought-after youth photographers in Nigeria, Tope has earned multiple recognitions which include the TES2016 Entrepreneurship Award, and the Legacy TV Ingenious Photographer Award (2017). In addition to these, his photographs have been published in prestigious editorial magazines including Complete Fashion, Genevieve Magazine, Wow Magazine and Guardian Life.
        
        His portfolio consists of works with reputable individuals and companies in/of Africa such as Aliko Dangote, Mitchell Elegbe, Onyeka Onwenu, Interswitch, Dangote Group, MoneyGram, Konamii Africa, amongst a host of others. Tope was also one of a selected few photographers to participate in the 2019 Presidential Campaign photo-shoot for Nigeria’s President Muhammadu Buhari.
        
        Being a big believer of giving back to the society, Tope is currently running a programme which offers free photography training across African countries, and he is an Associate of the Unabashed Photography Project in Nigeria."
        `
      },
      {
        name: `Ihunanyachi Thompson`,
        title: "Founder,	Bubble Innovation Hub",
        img: Ihunaya,
        bio: `Ihunanyachi is the founder of Bubble Innovation Hub, He is an entrepreneur who is also an experienced software developer. He founded the Bubble Innovation Hub formally known as the Bubble Coworking to support young tech start-up who needed affordable office space with great facility to grow their idea. Now Bubble Innovation Hub, preferably known as just Bubble is a leading talent outsourcing/Hiring company focused on helping companies/organizations hire world-class developers quickly.
        `
      },
      {
        name: `Olumayokun Okunnu`,
        title: "CEO, BodyRox Fitness Studios",
        img: Mayo,
        bio: `Mr Okunnu is the creator of the fitness concept of BodyRox Fitness Studio. A remarkable feat considering his non-athletic formative years. He finished secondary education at Loyola Jesuit College, Abuja Nigeria before proceeding to obtain his University education at University of Sunderland.
        His foray into the fitness world began while studying chemical and Pharmaceutical science/pharmacology at the University of Sunderland, UK. He took up mixed martial arts and dedicated his time towards understanding the human body and with the scientific mind, catalyzed his approach towards health and fitness. He facilitated his first BodyRox studio in space in 2013 within fitness 2000 gym in Sunderland and in just over a year opened a second fitness studio at the Silverbird center, Abuja.
        `
      },
      {
        name: `Shedrack Akintayo`,
        title: "Frontend Engineer, Reliance HMO",
        img: Shedrack,
        bio: `Shedrack Is a Javascript Engineer and a strong lover of community building. He spends his free time playing soccer and also is a huge fan of Open Source Development.
        `
      },
      {
        name: `Phillips Tunde`,
        title: "Brand Engagement Manager, Printivo",
        img: Tunde,
        bio: `A graduate of Economics from the University of Lagos. Tunde started out as a digital marketing associate at Printivo.com before moving to becoming the brand engagement manager of the same company 2 years later. He is a member of the Chattered institute of Marketing and was among the Judges at the 2018 edition of Naijahacks Hackathon.
        `
      },
      {
        name: `Sefunmi Osinaike`,
        title:
          "Sefunmi Osinaike, Co-founder @doing.a.thing, Product Lead Dot Health",
        img: Sefunmi,
        bio: `Sefunmi is passionate about using technology to solve human problems and has made that his mission that directs his life. With a background in electrical engineering and entrepreneurship from the University of Waterloo, he got the opportunity to work on his own start-up, Pave, and intern for companies like Apple and Microsoft. He is currently the Product Lead at Dot Health, where he is focused on building experiences to empower Canadians with their health information. Before Dot, he led the software product development for the thermostat product at ecobee. On the side, he is working on doing a thing which includes writing a book on how to transition into a product management role in technology from outside the industry and building a community of do-ers to encourage one another in enjoying the process of creating something exciting. 
        `
      },
      {
        name: `Uchendu Onyekachi`,
        title: "Cloud Engineer, Amazon Web Services",
        img: Uchendu,
        bio: `Onyekachi is a Cloud Engineer in Amazon Web Service, a subject matter expert in enterprise grade network and Cloud Infrastructure with vast experience covering wide-range of functional areas in organizations including consulting and integration services, IT Architecture, Network Engineering & Management and Cybersecurity.He has held various Tech roles across different sectors including Telecommunication, Consulting, Financial services. He holds a Masters Degree in Information Technology from the Prestigious University of Lagos. 
        
        He enjoys spending leisure time playing video games and spending time with his family.
        `
      },
      {
        name: `Jasper Jaja`,
        title: "Digital Media Consultant, The Norris Campbell Company",
        img: Jaja,
        bio: `With experience spanning FMCG, health and fintech startups, and politics, Jaja helps brands and organisations formulate and execute digital media strategies.
        `
      },
      {
        name: `Segun Maleghemi`,
        title:
          "Co-founder, Director of Incubation, The Nest Innovation Technology Park ",
        img: Segun,
        bio: `
        "Nigerian Entrepreneur and Steve Huckvale Scholar, ‘Segun, is passionate about helping people maximize their potentials. A multiple award winner with over 15 years’ experience, he was until recently the Regional Sales Manager for NEC Africa. There he led Business development, Strategy and Project management activities in 14 West African countries and closed Sales of over $60 Million. 

          ‘Segun is one of the Co-Founder of The Nest Innovation Technology Park. In his role as Director of Incubation, he helps startups improve on the MVP and build market traction. Between 2018 and now, he has supported over 1000 Tony Elumelu Foundation Entreprenuers from 54 different countries and helped them develop their business plans and improve on their business strategy

          Segun has an MSc from the University of Bath, UK in Innovation and Technology Management, and a BSc. from  Obafemi Awolowo University, Ile-Ife. He has also attended several leadership, strategy, management and technical courses across 5 different continents. 

          His favorite words are “If I can’t add value to you, I am of no value to you”. Olusegun Maleghemi is all about leadership and growth. He strongly believes that technology start-ups should engage “under-served"" markets and solve social issues while evolving to become sustainable businesses. He is bored by the Regular, excited by Passion."`
      },
      {
        name: `Bukonla Adebakin`,
        title: "Chief Operating Officer, RED,	RED / For Africa",
        img: Bukky,
        bio: `
        
        `
      },
      {
        name: `Oluchi Anyagaligbo`,
        title: "Lawyer,	Private Practice",
        img: Oluchi,
        bio: `Oluchi Anyagaligbo is a recent graduate from The George Washington Law School. She desires for her legal career to inspire the youth to pursue their creative talents and career goals.  
        `
      },
      {
        name: `Barry Vopnu`,
        title: "Founder,	BvB Digital",
        img: Barry,
        bio: `
        `
      },
      {
        name: `Munachi Nwoke-Ekpo`,
        title: "Head, Operations, Anakle",
        img: Muna,
        bio: `Munachi has 8 years experience in marketing/advertising strategy and execution and has overseen the growth of value driven offerings to Anakle’s numerous clients
        `
      },
      {
        name: `Nikky Samuel`,
        title: "Marketing Strategist & Social Media Creative",
        img: Nikky,
        bio: `Nikky Samuel currently works for Kantar, a Market Research firm; based out of NY. She also aims to maintain an Instagram feed curating content around travel, events, life and food. 
        `
      },
      {
        name: `Lola Idowu`,
        title: "Release coordinator, Toronto Hydro",
        img: Lola,
        bio: `Lola is an Industrial Engineering graduate from Ryerson University, with experience working in large organizations such as --- Loblaw Companies Limited, Nestle Canada and Toronto Hydro, to name a few. She is excited about up and coming innovative tech in Toronto, and is looking forward to see what the brilliant minds of Nigeria has to offer the tech world.
        `
      },
      {
        name: `Opeoluwa Victor Babasanmi`,
        title: "Cloud Engineer, Amazon Web Services",
        img: Victor,
        bio: `Victor is a Cloud Engineer at Amazon Web Services, passionate about Cloud computing and helping businesses solve complex technology challenges. His expertise covers Cloud, Cybersecurity, Network Engineering and DevOps. He holds a BEng. in Electrical/Electronics Engineering from Covenant University.
        
        When he isn't lost in the cloud, you may find him playing soccer/tennis, debating social science issues with friends, or off to some new adventure somewhere.
        `
      },
      {
        name: `Ekene Eze`,
        title: "Developer Advocate, Flutterwave ",
        img: Ekene,
        bio: `Ekene is a Software Developer Advocate at Flutterwave. His passion for growing the technology ecosystem in Africa has led him to write technical articles, mentor upcoming developers and speak at conferences to help power the next generation of software developers in Africa. 
        `
      },
      {
        name: `Ik Obi`,
        title: "Integrations Lead,	Paystack",
        img: IK,
        bio: `Ik leads the Integration team at Paystack.
        `
      }
    ]
  },
  team,
  keynote: {
    title: "Keynote Speaker",
    name: "Chude Jideonwo",
    company: "Founder Joy Inc.",
    description:
      "Chude is Founder of Joy Incredible, and Co-founder of African media group, RED which he led as CEO for 13 years.",
    note:
      "Chude will be speaking about the importance of mental wellbeing, in critical connection to sustaining our budding tech ecosystem in Nigeria"
  },
  prizes: {
    title: "Prizes",
    body: [
      {
        question:
          "Winner - The Dr. Andrew S. Nevin Prize  for Best Citizen Safety Project",
        answer:
          "A Laptop for each team member, $10,000 in AWS Credit, $5,000 in AWS support credit, DigitalOcean Tshirts, NaijaHacks Medal",
        Criteria: "",
        Sponsor: ""
      },
      {
        question:
          "Winner - STEMHub Foundation Prize for The Best STEM Education Project",
        answer:
          "A Chromebook Laptop for each team member, $10,000 in AWS Credit, $5,000 in AWS support credit, DigitalOcean Tshirts, NaijaHacks Medal",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Winner - Best Housing/Real Estate Project",
        answer:
          "$10,000 in AWS Credit, $5,000 in AWS support credit, DigitalOcean Tshirts, NaijaHacks Medal",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Winner - Best Job Creation Project",
        answer:
          "$10,000 in AWS Credit, $5,000 in AWS support credit, DigitalOcean Tshirts, NaijaHacks Medal",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "NaijaHacks 2019 Finalist (top 10 teams, 50% beginners)",
        answer:
          "Acceptance into Amazon Activate ($10,000 in AWS credit and $5,000 in support), NaijaHacks Medal, Opportunity to go through Incubation at BizSkills Academy, and option of funding",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Best Project hosted on a .XYZ domain name",
        answer: "Gift Bag from Generation XYZ",
        Criteria: "",
        Sponsor: "Generation XYZ"
      },
      {
        question: "Best Project hosted on Linode - First Prize",
        answer:
          "A Laptop for each team member and $500 in Linode Credit for each team member",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Best Project hosted on Linode - Second Prize",
        answer: "$250 in Linode Credit for each team member",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Best Project hosted on Linode - 3rd Prize",
        answer: "$100 in Linode Credit for each team member",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Best IoT/Hardware Project",
        answer: "Particle Wifi Bundle",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "BizSkills Prize for the team with the Best Pitch",
        answer:
          "Valued at $ 2,000 CAD, $200 CAD cash prize and 300 minutes worth of coaching sessions equivalent to - $1,800 CAD",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Nexmo Prize for Best Use of Nexmo API",
        answer: "Bluetooth speaker for each team member",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "DigitalOcean Prize for Best use of DigitalOcean - 1st place",
        answer: "$500 in DO credit",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "DigitalOcean Prize for Best use of DigitalOcean - 2nd place",
        answer: "$200 in DO credit",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "DigitalOcean Prize for Best use of DigitalOcean - 3rd place",
        answer: "$100 in DO credit",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Beginner Category: Top 12 projects from Beginner teams",
        answer: "1 year subscription to Egghead.io",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Sketch Prize for Best User Experience Prize",
        answer: "Sketch License",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Balsamiq Prize for Best User Experience Prize",
        answer: "Balsamiq License",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Axure Prize for Best User Experience Prize",
        answer: "Axure License",
        Criteria: "",
        Sponsor: ""
      },
      {
        question: "Wolfram Prize for Best 30 Projects",
        answer: "Wolfram 1 year License",
        Criteria: "",
        Sponsor: ""
      },
      {
        question:
          "Beginner Category: Prize for Best Project from a maority-beginner team",
        answer:
          "A Laptop for each team member, $10,000 in AWS Credit, $5,000 in AWS support credit, NaijaHacks Medal",
        Criteria: "",
        Sponsor: ""
      },
      {
        question:
          "The Dotts Media Prize for the Project with the best new media integration",
        answer:
          "A Laptop for each team member, $10,000 in AWS Credit, $5,000 in AWS support credit, NaijaHacks Medal",
        Criteria: "",
        Sponsor: ""
      }
    ]
  },
  scheduleSection: {}
};
