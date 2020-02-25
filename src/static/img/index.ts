/**
 * Export all images as modules so that webpack can deal with them appropriately
 * and in one file so that we have a centralized reference to all the images.
 * This means we only have to change one path and not all files that are using
 * that image if we change the src of the image.
 */

/* Sponsor assets (logos, branding, etc) */
export { default as WaterlooEngLogoImg } from "./sponsors/waterloo-eng.png";
export { default as SponsorLogoImg } from "./sponsors/sponsor.png";
export { default as TechyonLogoImg } from "./sponsors/techyon.png";
export {
  default as NexmoLogoImg
} from "./sponsors/2019/Nexmo_VonageAPI_vert.png";
export {
  default as SketchLogoImg
} from "./sponsors/2019/sketch-logo-light-transparent@2x.png";
export { default as ZoneTechLogoImg } from "./sponsors/2019/zonetech.png";
export { default as CovenantLogoImg } from "./sponsors/2019/covenant.png";
export { default as AWSLogoImg } from "./sponsors/2019/aws.png";
export {
  default as BizzSkillsLogoImg
} from "./sponsors/2019/bizskill_logo.svg";
export { default as OnePassword } from "./sponsors/2019/1Password.png";
export { default as XYZDomains } from "./sponsors/2019/xyz.png";
export { default as TheIndigene } from "./sponsors/2019/theindigene.png";
export { default as DevCareer } from "./sponsors/2019/devcareer.png";
export {
  default as Crowdcast
} from "./sponsors/2019/cc-logo-light-bg-wide.png";
export { default as Dexon } from "./sponsors/2019/dexon.png";
export { default as Gridcode } from "./sponsors/2019/gridcode.jpeg";
export { default as Feva } from "./sponsors/2019/feva.png";
export { default as Pepsi } from "./sponsors/2019/pepsi.png";
export { default as Popcentral } from "./sponsors/2019/popcentral.png";

/* Logos */
export { default as LogoDarkImg } from "./logos/primary-dark.svg";
export { default as LogoLightImg } from "./logos/primary-light.svg";
export { default as LogoAltDarkImg } from "./logos/alternative-dark.svg";
export { default as LogoAltLightImg } from "./logos/alternative-light.svg";
export { default as LogoIconDarkImg } from "./logos/icon-dark.svg"; // just the gear
export { default as LogoIconLightImg } from "./logos/icon-light.svg"; // just the gear

/* Social icons */
export { default as SocialFacebookImg } from "./icons/book.svg";
export { default as SocialFacebookImgDark } from "./icons/book-dark.svg";
export { default as SocialEmailImg } from "./icons/mail.svg";
export { default as SocialInstaImg } from "./icons/camera.svg";
export { default as SocialInstaImgDark } from "./icons/camera-dark.svg";
export { default as SocialTwitterImg } from "./icons/bird.svg";
export { default as SocialTwitterImgDark } from "./icons/bird-dark.svg";

/* Functional icons */
export { default as PlayIconImg } from "./icons/play-icon.svg";
export { default as ChevronIconImg } from "./icons/chevron-icon.svg";
export { default as CloseIconImg } from "./icons/close-icon.svg";

/* Illustrations */
export { default as Cloud1IllustrationImg } from "./illustrations/cloud1.png";
export { default as Cloud2IllustrationImg } from "./illustrations/cloud2.png";
export { default as Cloud3IllustrationImg } from "./illustrations/cloud3.png";
export {
  default as EngineeringIllustrationImg
} from "./illustrations/engineering.png";
export { default as SponsorIllustrationImg } from "./illustrations/sponsor.png";
export {
  default as RealGooseIllustrationImg
} from "./illustrations/real goose.png";
export {
  default as Robogoose1IllustrationImg
} from "./illustrations/Robogoose 1.png";
export {
  default as Robogoose2IllustrationImg
} from "./illustrations/Robogoose 2.png";
export {
  default as Robogoose3IllustrationImg
} from "./illustrations/Robogoose 3.png";
export {
  default as Robogoose4IllustrationImg
} from "./illustrations/robogoose4.png";
export {
  default as GooseMeetsGooseIllustrationImg
} from "./illustrations/goose meets goose.png";
export {
  default as LightbulbBalloonIllustrationImg
} from "./illustrations/lightbulb balloon.png";
export {
  default as LightbulbBalloonCloudsIllustrationImg
} from "./illustrations/lightbulb-balloon-2.png";
export {
  default as BackgroundHeroImg
} from "./hero/illustration-background.png";
export { default as Middle1HeroImg } from "./hero/illustration-middle-1.png";
export { default as Middle3HeroImg } from "./hero/illustration-middle-3.png";
export {
  default as ForegroundHeroImg
} from "./hero/illustration-foreground.png";

/* Headshots (leaders, htn team, etc) */
export { default as AlexHackerHeadshotImg } from "./headshots/alex-hacker.jpg";
export {
  default as BrunoHackerHeadshotImg
} from "./headshots/bruno-hacker.jpg";
export {
  default as JackyHackerHeadshotImg
} from "./headshots/jacky-hacker.jpg";
export {
  default as KevinHackerHeadshotImg
} from "./headshots/kevin-hacker.jpg";
export {
  default as MichelleHackerHeadshotImg
} from "./headshots/michelle-hacker.jpg";
export { default as TrudeauHeadshotImg } from "./headshots/justin_trudeau.jpg";
export { default as KoryHeadshotImg } from "./headshots/kory_jeffrey.jpg";
export { default as AlexisHeadshotImg } from "./headshots/alexis_ohanian.jpg";
export {
  default as KimberHeadshotImg
} from "./headshots/kimber_schlegelmilch.jpg";
export { default as MichalHeadshotImg } from "./headshots/michal.jpg";
export { default as OrganizerHeadshotImg } from "./headshots/organizer.png";

/* Photos */
export {
  default as RecapVidButtonBackgroundImg
} from "./photos/recap-video-button.png";
export { default as GearBackgroundImg } from "./photos/gear.svg";

/* Activities */
export { default as ActivityGradient } from "./photos/activity.png";
export { default as ActivityImg1 } from "./photos/activity1.png";
export { default as ActivityImg2 } from "./photos/activity2.png";
export { default as ActivityImg3 } from "./photos/activity3.png";
export { default as ActivityImg4 } from "./photos/activity4.png";

/* Hackers */
export { default as HackerGradient } from "./photos/hackers.png";
export { default as HackerImg1 } from "./photos/hackers1.png";
export { default as HackerImg2 } from "./photos/hackers2.png";
export { default as HackerImg3 } from "./photos/hackers3.png";
export { default as HackerImg4 } from "./photos/hackers4.png";

/* Hardware */
export { default as HardwareGradient } from "./photos/hardware.png";
export { default as HardwareImg1 } from "./photos/hardware1.png";
export { default as HardwareImg2 } from "./photos/hardware2.png";
export { default as HardwareImg3 } from "./photos/hardware3.png";
export { default as HardwareImg4 } from "./photos/hardware4.png";

/* Speaker */
export { default as SpeakerGradient } from "./photos/speaker.png";
export { default as SpeakerImg1 } from "./photos/speaker1.png";
export { default as SpeakerImg2 } from "./photos/speaker2.png";
export { default as SpeakerImg3 } from "./photos/speaker3.png";
export { default as SpeakerImg4 } from "./photos/speaker4.png";

/* Judges */
export { default as BalajiHeadshotImg } from "./leaders/balaji-srinivasan.jpg";
export { default as CatHeadshotImg } from "./leaders/cat-noone.jpg";
export {
  default as ChamathHeadshotImg
} from "./leaders/chamath-palihapitiya.jpg";
export { default as ConnieHeadshotImg } from "./leaders/connie-yang.jpg";
export { default as DylanHeadshotImg } from "./leaders/dylan-field.jpg";
export {
  default as EthanWildingHeadshotImg
} from "./leaders/ethan-wilding.jpg";
export { default as JeffHeadshotImg } from "./leaders/jeff-coleman.jpg";
export { default as JenniferHeadshotImg } from "./leaders/jennifer-dewalt.jpg";
export { default as TiffaniHeadshotImg } from "./leaders/tiffani-bell.jpg";
export { default as TracyHeadshotImg } from "./leaders/tracy-chou.jpg";
export { default as Sam } from "./leaders/2019/sam.jpg";
export { default as Christine } from "./leaders/2019/christine.jpeg";
export { default as Deji } from "./leaders/2019/deji.jpg";
export { default as Tope } from "./leaders/2019/tope.png";
export { default as Ara } from "./leaders/2019/ara.png";
export { default as Sola } from "./leaders/2019/sola.jpeg";
export { default as Nelly } from "./leaders/2019/nelly.jpg";
export { default as Kevin } from "./leaders/2019/kevin.png";
export { default as Doug } from "./leaders/2019/doug.jpeg";
export { default as Chude } from "./leaders/2019/chude.png";
export { default as Chris } from "./leaders/2019/chris.jpg";
export { default as Banke } from "./leaders/2019/banke.png";
export { default as Tunde } from "./leaders/2019/tunde.jpeg";
export { default as Funto } from "./leaders/2019/funto.jpeg";
export { default as Sefunmi } from "./leaders/2019/sefunmi.png";
export { default as Samson } from "./leaders/2019/samson.jpeg";
export { default as Namnso } from "./leaders/2019/namnso.jpeg";
export { default as Shedrack } from "./leaders/2019/shedrack.jpeg";
export { default as Kevwe } from "./leaders/2019/kevwe.jpeg";
export { default as Adaohh } from "./leaders/2019/adaohh.jpg";
export { default as Stanley } from "./leaders/2019/stanley.png";
export { default as Victor } from "./leaders/2019/victor.jpg";
export { default as Muyiwa } from "./leaders/2019/muyiwa.jpg";
export { default as Uchendu } from "./leaders/2019/uchendu.jpeg";
export { default as IK } from "./leaders/2019/IK.png";
export { default as TopeA } from "./leaders/2019/tope_a.png";
export { default as Tobi } from "./leaders/2019/tobi.png";
export { default as Tolu } from "./leaders/2019/tolu.jpg";
export { default as Ihunaya } from "./leaders/2019/ihunaya.jpg";
export { default as Jackye } from "./leaders/2019/jackye.jpg";
export { default as Jaja } from "./leaders/2019/jaja.jpg";
export { default as Ekene } from "./leaders/2019/ekene.jpeg";
export { default as Femi } from "./leaders/2019/femi.jpg";
export { default as Barry } from "./leaders/2019/barry.jpeg";
export { default as Bukky } from "./leaders/2019/bukky.jpeg";
export { default as Mayo } from "./leaders/2019/mayo.jpg";
export { default as Oluchi } from "./leaders/2019/oluchi.jpeg";
export { default as Segun } from "./leaders/2019/segun.jpg";
export { default as Yinka } from "./leaders/2019/yinka.jpg";
export { default as Nikky } from "./leaders/2019/nikky.jpeg";
export { default as Muna } from "./leaders/2019/muna.jpeg";
export { default as Lola } from "./leaders/2019/lola.jpg";
