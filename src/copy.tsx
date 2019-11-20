import React from "react";
import { Link, Text } from "@hackthenorth/north";
import {
  // Stories section
  KoryHeadshotImg,
  KimberHeadshotImg,
  AlexisHeadshotImg,
  AlexHackerHeadshotImg,
  BrunoHackerHeadshotImg,
  JackyHackerHeadshotImg,
  KevinHackerHeadshotImg,
  MichelleHackerHeadshotImg,
  // Sponsors & Partners
  TechyonLogoImg,
  SketchLogoImg,
  NexmoLogoImg,
  ZoneTechLogoImg,
  CovenantLogoImg,
  AWSLogoImg,
  BizzSkillsLogoImg,
  SponsorIllustrationImg,
  OnePassword,
  XYZDomains,
  // About section imgs
  TrudeauHeadshotImg,
  RecapVidButtonBackgroundImg,
  PlayIconImg,
  EngineeringIllustrationImg,
  CloseIconImg,
  ActivityGradient,
  ActivityImg1,
  ActivityImg2,
  ActivityImg3,
  ActivityImg4,
  HackerGradient,
  HackerImg1,
  HackerImg2,
  HackerImg3,
  HackerImg4,
  HardwareGradient,
  HardwareImg1,
  HardwareImg2,
  HardwareImg3,
  HardwareImg4,
  SpeakerGradient,
  SpeakerImg1,
  SpeakerImg2,
  SpeakerImg3,
  SpeakerImg4,
  WaterlooEngLogoImg,
  // Leaders section
  // CatHeadshotImg,
  // ChamathHeadshotImg,
  // ConnieHeadshotImg,
  // DylanHeadshotImg,
  // EthanWildingHeadshotImg,
  // JeffHeadshotImg,
  // JenniferHeadshotImg,
  // TiffaniHeadshotImg,
  // TracyHeadshotImg,
  // VinodHeadshotImg,
  LightbulbBalloonCloudsIllustrationImg,
  // Navbar
  // LogoIconLightImg,
  // LogoIconDarkImg,
  SocialFacebookImg,
  SocialFacebookImgDark,
  SocialInstaImg,
  SocialInstaImgDark,
  SocialTwitterImg,
  SocialTwitterImgDark,
  SocialEmailImg,
  Robogoose4IllustrationImg,
  // MichalHeadshotImg,
  // OrganizerHeadshotImg
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
  Victor
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
    name: "Techyon",
    tier: "partner",
    imgSrc: TechyonLogoImg,
    link: "https://techyon.org/"
  },
  {
    imgSrc: AWSLogoImg,
    link: "https://www.aws.com/",
    tier: "silver",
    name: "Amazon"
  },
  {
    imgSrc: NexmoLogoImg,
    link: "https://nexmo.com",
    tier: "silver",
    name: "Nexmo"
  },
  {
    imgSrc: SketchLogoImg,
    link: "https://www.sketch.com",
    tier: "silver",
    name: "Sketch"
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
    imgSrc: "https://naijahacks.com/2018/res/sponsors/digitalocean.png",
    link: "https://digitalocean.com/",
    tier: "silver",
    name: "DigitalOcean"
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
    imgSrc: "https://naijahacks.com/2018/res/sponsors/balsamiq.png",
    link: "https://balsamiq.com/",
    tier: "silver",
    name: "Balsamiq"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/linode.png",
    link: "https://www.linode.com/",
    tier: "gold",
    name: "Linode"
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
    tier: "silver",
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
    imgSrc:
      "https://uploads-ssl.webflow.com/5bddf05642686caf6d17eb58/5cf52c37420081eec94ed662_VF_Logo_Black.png",
    link: "https://voiceflow.com",
    tier: "silver",
    name: "Voiceflow"
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
    imgSrc: XYZDomains,
    link: "https://gen.xyz/",
    tier: "silver",
    name: ".XYZ Domains"
  },
  {
    imgSrc: "https://naijahacks.com/2018/res/sponsors/gimme.png",
    link: "/",
    tier: "silver",
    name: "Oh Woh popcorn"
  },
  {
    imgSrc:
      "https://4.bp.blogspot.com/-sn_1frB-tto/W_eevs6kyzI/AAAAAAAANhE/ZPlkvH6ysTAMuBJlbtYsSxkC28xaRrZugCLcBGAs/s1600/PCBWay%2BTlogo.png",
    link: "https://pcbway.com",
    tier: "silver",
    name: "PCBWay"
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
  }
];

// Taken from https://github.com/Daplie/knuth-shuffle
const shuffle = <T extends {}>(array: T[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const team = [
  {
    text: "Uchi Uchibeke",
    alt: "Uchi Uchibeke",
    img: "https://naijahacks.com/2018/res/team/uchi.png"
  },
  {
    text: "Blessing Thomas",
    alt: "Blessing Thomas",
    img: "https://naijahacks.com/2018/res/team/blessing.jpeg"
  },
  {
    text: "Dolapo Fadare",
    alt: "Dolapo Fadare",
    img: "https://naijahacks.com/res/team/dolapo.jpg"
  },
  {
    text: "Rosemary Ajuka",
    alt: "Rosemary Ajuka",
    img: "https://naijahacks.com/2018/res/team/rosemary.jpg"
  },
  {
    text: "ABDULSALAM DAUD",
    alt: "ABDULSALAM DAUD",
    img: "https://naijahacks.com/res/team/abdulsalam.jpg"
  },
  {
    text: "Ifeanyichukwu Nwabuokei ",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/ify.jpg"
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
    text: "Steven Omole-Adebomi",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/steven.jpg"
  },
  {
    text: "Olabode Oyinkansola",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/olabode.jpg"
  },
  {
    text: "Richard",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/ganihu.jpg"
  },
  {
    text: "Favour George Okpara ",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/favour.jpg"
  },
  {
    text: "Mohammed Bayero Yayandi",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/mohammed.jpg"
  },
  {
    text: "Ahmed Olanrewaju O.",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/ahmed.jpeg"
  },
  {
    text: "Adekanye Francisca",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/cisca.jpg"
  },
  {
    text: "Helen Ogbogu",
    alt: ". . .",
    img: "https://naijahacks.com/res/team/helen.jpg"
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
    sections: ["About", "Judges", "Sponsors", "FAQ", "2018"],
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
      text: "Interested in volunteering?"
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
      "NaijaHacks is not just a hackathon. The #NaijaHacks2019 experience starts online and continues in a demo day and award ceremony at Zone Tech Park. Unlike other Hackathons, we follow up, match participants to companies and mentor and fund the projects that come out of NaijaHacks.",
    gears: [
      {
        name: "speakers",
        // body: "Speakers and Judges from 5 countries",
        body: "CITIZEN SAFETY",
        images: [
          { id: "speaker1", url: SpeakerImg1 },
          { id: "speaker2", url: SpeakerImg2 },
          { id: "speaker3", url: SpeakerImg3 },
          { id: "speaker4", url: SpeakerImg4 }
        ],
        delay: 2000,
        gradient: { id: "speakerGradient", url: SpeakerGradient }
      },
      {
        name: "activities",
        // body: "Have fun while working on a challenge you're passionate about",
        body: "EDUCATION",
        images: [
          { id: "activity1", url: ActivityImg1 },
          { id: "activity2", url: ActivityImg2 },
          { id: "activity3", url: ActivityImg3 },
          { id: "activity4", url: ActivityImg4 }
        ],
        delay: 4000,
        gradient: { id: "activityGradient", url: ActivityGradient }
      },
      {
        name: "hackers",
        // body:  "Meet and network with 1,300+ hackers from all around the the country",
        body: "HOUSING ",
        images: [
          { id: "hacker1", url: HackerImg1 },
          { id: "hacker2", url: HackerImg2 },
          { id: "hacker3", url: HackerImg3 },
          { id: "hacker4", url: HackerImg4 }
        ],
        delay: 6000,
        gradient: { id: "hackerGradient", url: HackerGradient }
      },
      {
        name: "hardware",
        // body: "Win Millions of Naira in cash and prizes",
        body: "JOB CREATION",
        images: [
          { id: "hardware1", url: HardwareImg1 },
          { id: "hardware2", url: HardwareImg2 },
          { id: "hardware3", url: HardwareImg3 },
          { id: "hardware4", url: HardwareImg4 }
        ],
        delay: 8000,
        gradient: { id: "hardwareGradient", url: HardwareGradient }
      }
    ],
    videoButton: {
      icon: PlayIconImg,
      text: "Watch our recap video",
      background: RecapVidButtonBackgroundImg
    },
    engineering: {
      logo: WaterlooEngLogoImg,
      illustration: EngineeringIllustrationImg,
      text:
        "We started NaijaHacks to inspire a new generation of Nigerians and Africans to be makers, leaders and diruptors. After attending over 50 Hackathons and seeing the impact that they made in our lives and careers, we decided to bring a Hackathon, built for Africa, from the lessons we learned at Harvard, MIT, Stanford, Waterloo, Princeton and others. NaijaHacks is built by Africans for Africans and powered by supporters from over 8 countries."
    },
    video: {
      url:
        "https://www.youtube-nocookie.com/embed/P3VhS7jvXN8?autoplay=1&rel=0&amp;showinfo=0",
      closeIcon: CloseIconImg
    }
  },
  storiesSection: {
    heading: "Everything you need to create something incredible",
    desc:
      "For the past 5 years, we’ve continued to inspire participants to discover the world around them and empower participants like you who are eager to learn and create by providing an environment for you to explore and build with workshops, mentorship, and hardware.",
    stories: [
      {
        person: "Justin Trudeau",
        desc: "Prime Minister of Canada",
        img: TrudeauHeadshotImg,
        quote:
          "When I look around this room, I see quick learners, creative thinkers, and natural risk takers who are not only the leaders of tomorrow, but the leaders of today. You have the power to enact positive change right here right now."
      },
      {
        person: "Kory Jeffrey",
        desc: "Google",
        img: KoryHeadshotImg,
        quote:
          "Hack the North is North America’s premier hackathon. It brings together the best minds from around the world and takes care of all the logistics so that they can focus on learning and creating. Can’t wait to see what they do next year."
      },
      {
        person: "Kimber Schlegelmilch",
        desc: "Lyft",
        img: KimberHeadshotImg,
        quote:
          "Hack the North is one of the best hackathons I've experienced — the organizers are incredible, the projects produced at the end of the weekend are really impressive, and the energy of participants and mentors remains insanely high throughout the event."
      },
      {
        person: "Alexis Ohanian",
        desc: "Co-founder of Reddit",
        img: AlexisHeadshotImg,
        quote:
          "There is an undeniable reputation throughout tech of the kind of engineering talent that comes out of the University of Waterloo. The participants here are probably going to be the business leaders of this century."
      },
      {
        person: "Alex",
        desc: "Hack the North 2017 Finalist",
        img: AlexHackerHeadshotImg,
        link: "https://devpost.com/software/doppel-gallery",
        quote:
          "I collaborated with different people and had the chance to talk to many interesting people. I got a lot of perspective on the beginning to end of a software development project. My team was able to go from an idea to a working app that we could present to people. It was a really unique experience."
      },
      {
        person: "Bruno",
        desc: "Hack the North 2018 First-time Hacker",
        img: BrunoHackerHeadshotImg,
        link: "https://devpost.com/software/instaface",
        quote:
          "Hack the North was both my first international event and hackathon. I was quite nervous about leaving Brazil and going to the event but once there, everything was better than I could have ever imagined. I met so many cool and interesting people from all over the globe, made a lot of new friends and built something very cool on very little sleep with my team, overall an amazing experience!"
      },
      {
        person: "Jacky",
        desc: "Hack the North 2018 Experienced Hacker",
        img: JackyHackerHeadshotImg,
        link: "https://devpost.com/software/tappit-crypto-payments-over-nfc",
        quote:
          "Hack the North was – and still is – one of the best 36 hours I’ve ever had. Everything from the caffeine and stress-relief dogs to the amazing speakers, mentors, and organizers. It was amazing when you really needed to get a bite or take a break to walk around and see everyone’s amazing projects. Hack the North was a lot of ‘firsts’ and I hope it will be the same for many more in the future."
      },
      {
        person: "Kevin",
        desc: "Hack the North 2014 Finalist",
        img: KevinHackerHeadshotImg,
        link: "https://hackthenorth.devpost.com/submissions/27029-open-pokemon",
        quote:
          "Hack the North was a weekend where I could learn and start a passion for building great products. The experience was transformative and led me to where I am today. What really stood out to me was this sense of camaraderie between different hackers. I walked away from that weekend with so much more knowledge, and I made a lot of close, new friends."
      },
      {
        person: "Michelle",
        desc: "Hack the North 2015/2016 Finalist",
        img: MichelleHackerHeadshotImg,
        link: "https://devpost.com/software/modernized-weasley-clock-yotu43",
        quote:
          "Hack the North was my first (and second) hackathon, and the experience is still unforgettable! Everything Hack the North provided – inspiring speakers, mentors, workshops, food, coffee and free swag – contributed to an awesome supportive environment that made it really fun to hack away for those 36 hours."
      }
    ]
  },
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
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              newTab
            >
              Major League Hacking Code of Conduct.
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
    img: Robogoose4IllustrationImg,
    cta: "Fun Makers • Creative Leaders • Norm Disruptors • #NaijaHacks2019 ",
    links: [
      {
        text: "About NaijaHacks",
        hyperlink: "#about",
        newTab: false
      },
      // {
      //   text: "Open Source",
      //   hyperlink: "https://github.com/hackthenorth",
      //   newTab: true
      // },
      // {
      //   text: "Privacy Policy",
      //   hyperlink: "https://2018.hackthenorth.com/privacy",
      //   newTab: true
      // },
      {
        text: "MLH Code of Conduct",
        hyperlink: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf",
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
    team: shuffle(team),
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
        title: "Head of Digital, 141 Worldwide ",
        img: "https://naijahacks.com/2018/res/bosses/muyiwa.png"
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
        title: "Acting CEO, Nigeria, TechAdvance",
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
        name: `Samson Opaleye`,
        title: "COO/Managing Partner, Dotts Media House",
        img: Samson,
        bio: `Samson Opaleye is the Chief Operating Officer and Managing Partner of Dotts Media House, Nigeria’s foremost digital media agency for leading brands in Africa. Samson’s passion for solving problems for brands through digital media marketing and business development has led him to work with global brands like Pepsi, HP, Dano Milk Nigeria, SPAR Nigeria, Intel, Lufthansa Airlines, World Economic Forum and many more. He is a thought leader in digital marketing.
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
        name: `Temitope Ekundayo`,
        title: "Chief of Growth, Printivo.com & Segment Mgr, Promostack",
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
        name: "Tiwalola Olanubi Jnr",
        title: "Creative Director, Dotts Media House",
        img: "https://naijahacks.com/2018/res/bosses/tj.png",
        bio: `
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
        name: `Ayodeji Razaq`,
        title: "Marketing and Experiential Events Lead, Riquesa Africa ",
        img: Deji,
        bio: `Ayodeji is the Co-Founder of Riquesa Africa - A Premium Experiential and Activations Hub, with offices in Lagos and Ghana. He is a Fellow of the Chartered Institute of Management. Ayodeji has built a career in creating and executing signature events for Top Brands (Dano, HP, Intel, PZ, Oracle, Google, Microsoft, Unity Bank to name a few. Some of his more prominent executions include setting a new Guinness World Record for a brand in 2018. An Alumni of the University of Lagos, he began an amazing career in marketing by being the First Blackberry Ambassador in Lagos. 
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
        name: `Shedrack Akintayo`,
        title: "Frontend Engineer, Reliance HMO",
        img: Shedrack,
        bio: `Shedrack Is a Javascript Engineer and a strong lover of community building. He spends his free time playing soccer and also is a huge fan of Open Source Development.
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
        name: `Namnso Ukpanah`,
        title: "Product Designer, Flutterwave",
        img: Namnso,
        bio: `Namnso is a Product Designer with great experience designing hospitality and financial SaaS applications for both web and mobile platforms. He also builds and maintains design systems as well as growing one of the largest design communities in Africa.
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
        name: `Kevin Eligwe`,
        title: "Creative Director & Designer, Hemcloth",
        img: Kevin,
        bio: `Kevin is a designer in the clothing and architecture industry in Fort Lauderdale, Florida, US. Co-founder at Hemcloth, a brand focused on sharing messages through clothing and unifying cultures by wearing them. In Architectural design he is Experienced in Commercial, Residential, 3D Modeling and Interior design all over South Florida. A business enthusiast and a creative at heart,  focused on solving problems through design.
        `
      },
      {
        name: "Muyiwa Aleshinloye",
        title: "Head of Digital, 141 Worldwide ",
        img: "https://naijahacks.com/2018/res/bosses/muyiwa.png",
        bio: `
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
        name: `Phillips Tunde`,
        title: "Brand Engagement Manager, Printivo",
        img: Tunde,
        bio: `A graduate of Economics from the University of Lagos. Tunde started out as a digital marketing associate at Printivo.com before moving to becoming the brand engagement manager of the same company 2 years later. He is a member of the Chattered institute of Marketing and was among the Judges at the 2018 edition of Naijahacks Hackathon.
        `
      },
      {
        name: `Sefunmi Osinaike`,
        title: "Product Lead, Dot Health",
        img: Sefunmi,
        bio: `Sefunmi is passionate about using technology to solve human problems and has made that his mission that directs his life. With a background in electrical engineering and entrepreneurship from the University of Waterloo, he got the opportunity to work on his own start-up, Pave, and intern for companies like Apple and Microsoft. He is currently the Product Lead at Dot Health, where he is focused on building experiences to empower Canadians with their health information. Before Dot, he led the software product development for the thermostat product at ecobee. On the side, he is working on doing a thing which includes writing a book on how to transition into a product management role in technology from outside the industry and building a community of do-ers to encourage one another in enjoying the process of creating something exciting. 
        `
      },
      {
        name: `Opeoluwa Victor Babasanmi`,
        title: "Cloud Engineer, Amazon Web Services",
        img: Victor,
        bio: `Victor is a Cloud Engineer at Amazon Web Services, passionate about Cloud computing and helping businesses solve complex technology challenges. His expertise covers Cloud, Cybersecurity, Network Engineering and DevOps. He holds a BEng. in Electrical/Electronics Engineering from Covenant University.
        
        When he isn't lost in the cloud, you may find him playing soccer/tennis, debating social science issues with friends, or off to some new adventure somewhere.
        `
      }
    ]
  },
  keynote: {
    title: "Keynote Speaker",
    name: "Chude Jideonwo",
    company: "Founder Joy Inc.",
    description:
      "Chude is Founder of Joy Incredible, and Co-founder of African media group, RED which he led as CEO for 13 years.",
    note:
      "Chude will be speaking about the importance of mental wellbeing, in critical connection to sustaining our budding tech ecosystem in Nigeria"
  }
};
