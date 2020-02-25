import ical from "ical-generator";

/* eslint-disable no-console */

// Augment window to include HackerAPI definition
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    HackerAPI: any;
  }
}

const { HackerAPI } = window;
const HTN_EVENT_SLUG = "hackthenorth2019";

const getScheduleFromHTN = async () => {
  console.log("Getting schedule from Hack the North endpoint...");

  const items = await HackerAPI.Event.ScheduleItem.fetchAll({
    slug: HTN_EVENT_SLUG
  });

  console.log("Successfully fetched schedule!");
  console.log(items);

  return items;
};

const TAG_TO_CATEGORY_MAP = {
  logistics: "EVENT",
  judging: "EVENT",
  food: "FOOD",
  lightning_challenge: "EVENT", // eslint-disable-line
  activities: "ACTIVITY",
  workshop: "WORKSHOP",
  talk: "EVENT"
};

const calendar = ical({ name: "Hack the North 2019 Schedule" }).timezone(
  "America/New_York"
);

export const fetchSchedule = async () => {
  const scheduleContents = await getScheduleFromHTN();

  for (const event of scheduleContents) {
    const calEvent = calendar.createEvent({
      uid: event.id,
      summary: event.title,
      start: event.startTime,
      end: event.endTime,
      timezone: "America/New_York",
      description: event.description,
      location: event.location,
      organizer: "Hack the North <hello@hackthenorth.com>"
    });
    calEvent.createCategory({ name: TAG_TO_CATEGORY_MAP[event.tags[0]] });
  }

  return calendar.toString();
};

const schedule = [
  {
    id: 606,
    title: "Registration",
    description:
      "Register for the event to pick up your swag bag, badge, and welcome booklet.",
    start_time: "2019-09-13T17:30:00-04:00",
    end_time: "2019-09-14T00:00:00-04:00",
    location: "TD Tent",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:28-04:00",
    updated_at: "2019-09-09T01:50:14-04:00"
  },
  {
    id: 607,
    title: "Hardware Showcase",
    description:
      "Come check out the drones, VR headsets, and other cool hardware we have available for signout!",
    start_time: "2019-09-13T18:00:00-04:00",
    end_time: "2019-09-13T21:00:00-04:00",
    location: "Hardware Showcase (E7 1302)",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:28-04:00",
    updated_at: "2019-09-09T01:50:14-04:00"
  },
  {
    id: 634,
    title: "Dinner",
    description: "Pasta buffet \ud83c\udf5d or burgers and salad \ud83c\udf54",
    start_time: "2019-09-13T18:00:00-04:00",
    end_time: "2019-09-14T00:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:32-04:00",
    updated_at: "2019-09-09T01:50:15-04:00"
  },
  {
    id: 608,
    title: "Opening Ceremonies",
    description:
      "Listen to Jack Dorsey's keynote, and get hyped up for the weekend ahead of you.",
    start_time: "2019-09-13T21:00:00-04:00",
    end_time: "2019-09-13T23:00:00-04:00",
    location: "Lazaridis Hall",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:28-04:00",
    updated_at: "2019-09-10T15:16:54-04:00"
  },
  {
    id: 610,
    title: "Hardware Checkout Begins",
    description:
      "Come check out and pick up hardware for your hack at the Hardware Hacker Hub! We have a variety of hardware available.",
    start_time: "2019-09-13T23:30:00-04:00",
    end_time: "2019-09-13T23:30:00-04:00",
    location: "Hardware Checkout (E7 1401)",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:28-04:00",
    updated_at: "2019-09-09T01:50:16-04:00"
  },
  {
    id: 611,
    title: "How to Come Up with a Great Project Idea",
    description:
      "Coming up with hackathon project ideas can be hard, but validating them is even harder. This workshop will show you how to make sure you have a strong business idea - well before you spend time hacking together your minimum viable product.",
    start_time: "2019-09-13T23:30:00-04:00",
    end_time: "2019-09-14T00:00:00-04:00",
    location: "3B (E7 3353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:28-04:00",
    updated_at: "2019-09-09T01:50:16-04:00"
  },
  {
    id: 618,
    title: "Facebook API Workshop",
    description:
      "Each member of the winning team will receive an Oculus Quest VR headset for building the best project that utilizes any Facebook API.",
    start_time: "2019-09-13T23:30:00-04:00",
    end_time: "2019-09-14T00:30:00-04:00",
    location: "5B (E7 5353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:30-04:00",
    updated_at: "2019-09-09T01:50:16-04:00"
  },
  {
    id: 617,
    title: "TD Da Vinci API Workshop",
    description:
      "A $500 Visa gift card will be awarded to each member of the team that best utilizes the TD Da Vinci API to build a project based on simulated customer banking data.",
    start_time: "2019-09-13T23:30:00-04:00",
    end_time: "2019-09-14T00:30:00-04:00",
    location: "5A (E7 5343)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:29-04:00",
    updated_at: "2019-09-13T01:49:28-04:00"
  },
  {
    id: 614,
    title: "SurveyMonkey Power Curiosity API Workshop",
    description:
      "Each member of the winning team will receive a $100 Amazon gift card and a SurveyMonkey Swag Bag for building the best project that utilizes the SurveyMonkey API. Stop by SurveyMonkey\u2019s API workshop to learn how to set up access to SurveyMonkey's APIs, collect survey data and analyze it.",
    start_time: "2019-09-13T23:30:00-04:00",
    end_time: "2019-09-14T00:30:00-04:00",
    location: "4A (E7 4043)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:29-04:00",
    updated_at: "2019-09-13T01:49:29-04:00"
  },
  {
    id: 616,
    title: "Microsoft Azure AI API Workshop",
    description:
      "A Terabyte Xbox One S Bundle will be awarded to each member of the top team that best utilize Azure Cognitive Services to build a project based on Microsoft's premade AI algorithms.",
    start_time: "2019-09-13T23:30:00-04:00",
    end_time: "2019-09-14T00:30:00-04:00",
    location: "4C (E7 4417)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:29-04:00",
    updated_at: "2019-09-13T18:51:57-04:00"
  },
  {
    id: 612,
    title: "Team Formation",
    description:
      "If you do not already have a team, come out to meet other hackers, brainstorm problems, generate ideas to solve them, and find a team for Hack the North!",
    start_time: "2019-09-13T23:30:00-04:00",
    end_time: "2019-09-14T00:30:00-04:00",
    location: "3A (E7 3343)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:29-04:00",
    updated_at: "2019-09-09T01:50:15-04:00"
  },
  {
    id: 609,
    title: "Hacking Begins",
    description: null,
    start_time: "2019-09-13T23:30:00-04:00",
    end_time: "2019-09-13T23:30:00-04:00",
    location: "E5 and E7",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:28-04:00",
    updated_at: "2019-09-09T01:50:16-04:00"
  },
  {
    id: 615,
    title: "Intro to Git",
    description:
      "Learn the basics of Git, the world's most popular version control system, to more efficiently collaborate with teammates. Learn how to perform basic tasks in the standard developer workflow when your team is working together on the same codebase.",
    start_time: "2019-09-14T00:00:00-04:00",
    end_time: "2019-09-14T00:30:00-04:00",
    location: "4B (E7 4053)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:29-04:00",
    updated_at: "2019-09-13T01:49:29-04:00"
  },
  {
    id: 623,
    title: "Algorand Build on Blockchain API Workshop",
    description:
      "A Robolink Codrone and $1000 in cash will be awarded to the team that builds the best project on the Algorand API. Second place will receive a Raspberry Pi and MATRIX Creator development board.",
    start_time: "2019-09-14T00:30:00-04:00",
    end_time: "2019-09-14T01:30:00-04:00",
    location: "4C (E7 4417)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:30-04:00",
    updated_at: "2019-09-09T01:50:18-04:00"
  },
  {
    id: 619,
    title: "FreshBooks API Workshop",
    description:
      "Sony Wireless Noise Cancelling Headphones will be awarded to each member of the team that makes best use of the FreshBooks API to create a web, desktop, or mobile application that integrates with a FreshBooks account.",
    start_time: "2019-09-14T00:30:00-04:00",
    end_time: "2019-09-14T01:30:00-04:00",
    location: "3A (E7 3343)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:30-04:00",
    updated_at: "2019-09-09T01:50:17-04:00"
  },
  {
    id: 621,
    title: "How to Setup a Server with Node.js",
    description:
      "Setting up a server in Node.js is fast and painless once you know the fundamentals. This workshop covers what a server is and how you can create your own in Node.js. You'll also learn how to interface with a real-time database with Google's Firebase.",
    start_time: "2019-09-14T00:30:00-04:00",
    end_time: "2019-09-14T01:30:00-04:00",
    location: "4A (E7 4043)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:30-04:00",
    updated_at: "2019-09-09T01:50:17-04:00"
  },
  {
    id: 625,
    title: "Intro to Unity",
    description:
      "This workshop is meant to be a short and sweet introduction to the Unity engine and game development patterns. By the end of this hands-on workshop you'll have built your own clone of Flappy Bird for deployment on Mac, Windows or mobile.",
    start_time: "2019-09-14T00:30:00-04:00",
    end_time: "2019-09-14T01:30:00-04:00",
    location: "5B (E7 5353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:31-04:00",
    updated_at: "2019-09-09T01:50:18-04:00"
  },
  {
    id: 622,
    title: "Firebase API Workshop",
    description:
      "A Pixel 3 will be awarded to each member of the team that best utilizes Firebase for a dynamic storage solution.",
    start_time: "2019-09-14T00:30:00-04:00",
    end_time: "2019-09-14T01:30:00-04:00",
    location: "4B (E7 4053)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:30-04:00",
    updated_at: "2019-09-13T01:49:29-04:00"
  },
  {
    id: 624,
    title: "Exploring and Wrangling Data with Pandas",
    description:
      'Through this workshop, you\'ll learn the foundations required to explore and "wrangle" datasets. Topics will include an introduction to Jupyter Notebooks/Colab, data cleaning and feature engineering with Pandas, basic visualization and more.',
    start_time: "2019-09-14T00:30:00-04:00",
    end_time: "2019-09-14T01:30:00-04:00",
    location: "5A (E7 5343)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:31-04:00",
    updated_at: "2019-09-13T01:49:30-04:00"
  },
  {
    id: 620,
    title: "Accenture Accentours API Workshop",
    description:
      "Travel and accommodations for a Toronto Raptors basketball game will be awarded to the team that most efficiently matches detailed user profiles to destination tours. Find out more at the Accenture Accentours API Workshop. ",
    start_time: "2019-09-14T00:30:00-04:00",
    end_time: "2019-09-14T01:30:00-04:00",
    location: "3B (E7 3353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:30-04:00",
    updated_at: "2019-09-13T01:49:30-04:00"
  },
  {
    id: 635,
    title: "Poutine",
    description: "Presented by TD",
    start_time: "2019-09-14T01:00:00-04:00",
    end_time: "2019-09-14T03:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:32-04:00",
    updated_at: "2019-09-09T01:50:18-04:00"
  },
  {
    id: 630,
    title: "Blockmason LINK Blockchain-Powered Microservices API Workshop",
    description:
      "$1000 of BLINK cryptocurrency will be awarded to the team that makes best use of the Blockmason LINK API by building a microservice or DApp.",
    start_time: "2019-09-14T01:30:00-04:00",
    end_time: "2019-09-14T02:30:00-04:00",
    location: "4C (E7 4417)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:32-04:00",
    updated_at: "2019-09-13T01:49:31-04:00"
  },
  {
    id: 626,
    title: "Intro to iOS",
    description:
      "Newcomer to iOS app development? Learn the basics of creating a new iOS application using Swift through this step by step workshop.",
    start_time: "2019-09-14T01:30:00-04:00",
    end_time: "2019-09-14T02:30:00-04:00",
    location: "3A (E7 3343)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:31-04:00",
    updated_at: "2019-09-09T01:50:18-04:00"
  },
  {
    id: 628,
    title: "Setting Up Your First Website with HTML, Javascript, CSS",
    description:
      "Want to get started with web development? Attend this workshop to create your very first website.",
    start_time: "2019-09-14T01:30:00-04:00",
    end_time: "2019-09-14T02:30:00-04:00",
    location: "4A (E7 4043)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:31-04:00",
    updated_at: "2019-09-09T01:50:19-04:00"
  },
  {
    id: 613,
    title: "Intro to Hardware",
    description:
      "Interested in doing a hardware hack? Come to this workshop to learn how to get started. You'll learn to build a basic Arduino project and get the resources required to do more research and build yourself!",
    start_time: "2019-09-14T01:30:00-04:00",
    end_time: "2019-09-14T02:30:00-04:00",
    location: "3B (E7 3353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:29-04:00",
    updated_at: "2019-09-09T01:50:19-04:00"
  },
  {
    id: 629,
    title: "Intro to Android",
    description:
      "Learn the fundamentals of creating Android apps using Android Studio.",
    start_time: "2019-09-14T01:30:00-04:00",
    end_time: "2019-09-14T02:30:00-04:00",
    location: "4B (E7 4053)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:31-04:00",
    updated_at: "2019-09-09T01:50:19-04:00"
  },
  {
    id: 627,
    title: "Ubisoft Hackers' Nest API Workshop",
    description:
      "An estimated $600 in prizes, including a Nintendo Switch, Switch game, and backpack with portable charger will be awarded to the team that best explores the idea of Create the Unknown with a game built using Ubisoft's API.",
    start_time: "2019-09-14T01:30:00-04:00",
    end_time: "2019-09-14T02:30:00-04:00",
    location: "5B (E7 5353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:31-04:00",
    updated_at: "2019-09-13T01:49:31-04:00"
  },
  {
    id: 631,
    title: "Voiceflow API Workshop",
    description:
      "An Amazon Echo Dot will be awarded to each member of the team that best utilizes Voiceflow, a drag and drop tool designed to build Alexa Skills & Google Home Actions. ",
    start_time: "2019-09-14T01:30:00-04:00",
    end_time: "2019-09-14T02:30:00-04:00",
    location: "5A (E7 5343)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:32-04:00",
    updated_at: "2019-09-13T01:49:30-04:00"
  },
  {
    id: 632,
    title: "Intro to React",
    description:
      "Learn how to create a frontend using React, one of the world's most popular website frameworks.",
    start_time: "2019-09-14T02:30:00-04:00",
    end_time: "2019-09-14T03:30:00-04:00",
    location: "3B (E7 3353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:32-04:00",
    updated_at: "2019-09-09T01:50:20-04:00"
  },
  {
    id: 633,
    title: "Intro to Design Principles",
    description:
      "Learn what distinguishes good design from bad, and how to effectively address the needs of your users to produce an interface that is joyful to use.",
    start_time: "2019-09-14T02:30:00-04:00",
    end_time: "2019-09-14T03:30:00-04:00",
    location: "4C (E7 4417)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:32-04:00",
    updated_at: "2019-09-09T01:50:20-04:00"
  },
  {
    id: 636,
    title: "Breakfast",
    description: "Breakfast sandwiches",
    start_time: "2019-09-14T07:00:00-04:00",
    end_time: "2019-09-14T10:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:32-04:00",
    updated_at: "2019-09-09T01:50:20-04:00"
  },
  {
    id: 637,
    title: "Espresso Bar",
    description: null,
    start_time: "2019-09-14T09:00:00-04:00",
    end_time: "2019-09-14T12:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:33-04:00",
    updated_at: "2019-09-09T01:50:20-04:00"
  },
  {
    id: 675,
    title: "Yoga",
    description:
      "Presented by Deloitte and Loblaw Digital. Come relax and move your body with some yoga!",
    start_time: "2019-09-14T09:00:00-04:00",
    end_time: "2019-09-14T10:00:00-04:00",
    location: "Deloitte and Loblaw Digital Pitch Space (E7 2334)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:38-04:00",
    updated_at: "2019-09-09T01:50:20-04:00"
  },
  {
    id: 676,
    title: "Facials",
    description: "Drop-in and get your self-care on with a soothing facial.",
    start_time: "2019-09-14T09:30:00-04:00",
    end_time: "2019-09-14T11:30:00-04:00",
    location: "Activities Room (E7 1327/1331)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:38-04:00",
    updated_at: "2019-09-09T03:50:32-04:00"
  },
  {
    id: 638,
    title: "Pastries",
    description: null,
    start_time: "2019-09-14T10:00:00-04:00",
    end_time: "2019-09-14T12:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:33-04:00",
    updated_at: "2019-09-09T01:50:21-04:00"
  },
  {
    id: 652,
    title: "Helicopter Landing",
    description:
      "Join us at the entrance of E7 to witness the arrival of Canadian Special Operations Forces Command (CANSOFCOM) team.",
    start_time: "2019-09-14T10:00:00-04:00",
    end_time: "2019-09-14T11:00:00-04:00",
    location: "By the TD Tent",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:35-04:00",
    updated_at: "2019-09-13T01:49:33-04:00"
  },
  {
    id: 651,
    title: "RBC Lightning Challenge",
    description:
      "Participants of this challenge will be asked to come up with an optimal strategy to invest $100 and become a millionaire. Statistical concepts will be helpful and programming skills can also come in handy.  RBC is excited to meet the top five winners and discuss potential internships for quantitative trading and artificial intelligence research with RBC Capital Markets.",
    start_time: "2019-09-14T10:15:00-04:00",
    end_time: "2019-09-14T10:45:00-04:00",
    location: "3A (E7 3343)",
    tags: ["lightning_challenge"],
    links: [],
    created_at: "2019-09-09T00:41:34-04:00",
    updated_at: "2019-09-14T14:00:57-04:00"
  },
  {
    id: 677,
    title: "Bubble Soccer",
    description:
      "Like regular soccer but while wearing giant inflatable bubbles!",
    start_time: "2019-09-14T10:30:00-04:00",
    end_time: "2019-09-14T12:00:00-04:00",
    location: "Meet outside E7 entrance",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:38-04:00",
    updated_at: "2019-09-09T01:50:21-04:00"
  },
  {
    id: 653,
    title: "CANSOFCOM Lightning Challenge",
    description:
      "This challenge will teach participants about stock correlation. The winning hacker of this challenge will receive an exclusive CANSOFCOM  helicopter ride, that\u2019ll pick them up right at the doors of E7.",
    start_time: "2019-09-14T11:00:00-04:00",
    end_time: "2019-09-14T11:45:00-04:00",
    location: "3A (E7 3343)",
    tags: ["lightning_challenge"],
    links: [],
    created_at: "2019-09-09T00:41:35-04:00",
    updated_at: "2019-09-13T01:49:33-04:00"
  },
  {
    id: 662,
    title: "How to Ace Your Job Hunt",
    description:
      "Confused with resume, skills, interviewing, lost in life and career? Come to learn more about navigating the job hunt in this workshop covering tips and tricks, employer perspectives, interviewing advice and more.",
    start_time: "2019-09-14T11:00:00-04:00",
    end_time: "2019-09-14T12:00:00-04:00",
    location: "4B (E7 4053)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:36-04:00",
    updated_at: "2019-09-09T01:50:21-04:00"
  },
  {
    id: 661,
    title: "Using Motors with Hardware",
    description:
      "All that pivots, spins, turns, rotates, swivels, twirls, or revolves, needs a motor. Attend this session to learn everything you need to control the motor for positioning, driving, rotating, spinning and more. Bring a laptop, and an eagerness to learn!",
    start_time: "2019-09-14T11:00:00-04:00",
    end_time: "2019-09-14T13:00:00-04:00",
    location: "3B (E7 3353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:36-04:00",
    updated_at: "2019-09-09T01:50:21-04:00"
  },
  {
    id: 639,
    title: "Lunch",
    description: "Harvest ratatouille",
    start_time: "2019-09-14T12:00:00-04:00",
    end_time: "2019-09-14T14:30:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:33-04:00",
    updated_at: "2019-09-09T01:50:22-04:00"
  },
  {
    id: 663,
    title:
      "Building and Interpreting Machine Learning Models with SciKit Learn",
    description:
      "Through this workshop, you'll learn how to model and understand datasets using SciKit-Learn. Topics will include a basic introduction to using decision trees and random forests, understanding feature importances, identifying model weaknesses, explaining your model and more.",
    start_time: "2019-09-14T12:00:00-04:00",
    end_time: "2019-09-14T13:00:00-04:00",
    location: "4A (E7 4043)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:36-04:00",
    updated_at: "2019-09-09T01:50:22-04:00"
  },
  {
    id: 657,
    title: "Learn How to Build Machine Learning Models in Minutes",
    description:
      "Join Microsoft to learn how to get started with machine learning by training your own custom image classifier. You\u2019ll import the model and run it in your applications using TensorFlow and Python and learn about different ways to deploy your app to the cloud.",
    start_time: "2019-09-14T12:00:00-04:00",
    end_time: "2019-09-14T13:00:00-04:00",
    location: "4C (E7 4417)",
    tags: ["talk"],
    links: [],
    created_at: "2019-09-09T00:41:35-04:00",
    updated_at: "2019-09-13T01:49:34-04:00"
  },
  {
    id: 678,
    title: "VR Games",
    description:
      "Presented by RBC. Drop-in for some quick Virtual Reality games!",
    start_time: "2019-09-14T13:00:00-04:00",
    end_time: "2019-09-14T16:00:00-04:00",
    location: "Deloitte and Loblaw Digital Pitch Space (E7 2334)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:38-04:00",
    updated_at: "2019-09-09T01:50:22-04:00"
  },
  {
    id: 664,
    title: "Intro to Figma",
    description:
      "Learn the basics of Figma - a design tool that allows teams to create screen mockups for web and mobile apps.",
    start_time: "2019-09-14T13:00:00-04:00",
    end_time: "2019-09-14T14:00:00-04:00",
    location: "3A (E7 3343)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:36-04:00",
    updated_at: "2019-09-09T01:50:22-04:00"
  },
  {
    id: 665,
    title: "Ace Your Software Engineering Interview",
    description:
      "Insider tips and tricks on algorithmic interviews from student and employer perspectives. As former Facebook and Amazon engineers, Anthony and Calvin know the interview process pretty well. Having hired for Hypotenuse Labs, they've seen plenty of the other side too.",
    start_time: "2019-09-14T13:00:00-04:00",
    end_time: "2019-09-14T14:00:00-04:00",
    location: "4B (E7 4053)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:36-04:00",
    updated_at: "2019-09-09T01:50:23-04:00"
  },
  {
    id: 655,
    title: "DRW Lightning Challenge",
    description:
      "The Financial Information eXchange (FIX) protocol is an electronic communications protocol used to exchange market data in real-time. As the standard for trade communication, FIX is responsible for transferring billions of dollars worth of sensitive financial information. Participants in this challenge will gain a deeper understanding of how communication protocols such as FIX work by decoding and processing encoded messages. The top participant of this 30-minute challenge will receive an Echo Spot & FPGA Board.",
    start_time: "2019-09-14T13:00:00-04:00",
    end_time: "2019-09-14T13:45:00-04:00",
    location: "5A (E7 5343)",
    tags: ["lightning_challenge"],
    links: [],
    created_at: "2019-09-09T00:41:35-04:00",
    updated_at: "2019-09-14T15:20:27-04:00"
  },
  {
    id: 656,
    title: "Manulife Lightning Challenge",
    description:
      "In this challenge, join the Manulife team to play some Mario Kart! Prizes up for grabs for the best player.",
    start_time: "2019-09-14T13:30:00-04:00",
    end_time: "2019-09-14T14:15:00-04:00",
    location: "5B (E7 5353)",
    tags: ["lightning_challenge"],
    links: [],
    created_at: "2019-09-09T00:41:35-04:00",
    updated_at: "2019-09-13T01:49:34-04:00"
  },
  {
    id: 666,
    title: "Intro to Open Source Software",
    description:
      "Learn about the value and process of contributing to open source software projects. Come to hear about why it is important, how you can benefit from contributing, how to choose a project to work on, and more!",
    start_time: "2019-09-14T14:00:00-04:00",
    end_time: "2019-09-14T15:00:00-04:00",
    location: "3B (E7 3353)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:37-04:00",
    updated_at: "2019-09-09T01:50:23-04:00"
  },
  {
    id: 658,
    title: "Creative Design for Software Development",
    description:
      "Looking to break through the cluttered digital space? Join TD in a dynamic session targeted towards user centered design. Learn how to compose beautiful and creative interfaces to compete with leading industry platforms. Learn valuable concepts to develop a design language, by leveraging reusable UI components for agonistic web technologies.",
    start_time: "2019-09-14T14:00:00-04:00",
    end_time: "2019-09-14T15:00:00-04:00",
    location: "4C (E7 4417)",
    tags: ["talk"],
    links: [],
    created_at: "2019-09-09T00:41:35-04:00",
    updated_at: "2019-09-13T01:49:35-04:00"
  },
  {
    id: 667,
    title: "Intro to Infrastructure",
    description:
      "Get a taste of commonly used DevOps tools, including Docker, CircleCI, and external cloud platforms (GCP). Witness practical examples of how these tools simplify and automate important developer tasks such as testing, environment management, deployment, and scaling through this introduction to the tools and infrastructure that power the world's most successful platforms.",
    start_time: "2019-09-14T14:00:00-04:00",
    end_time: "2019-09-14T15:00:00-04:00",
    location: "4A (E7 4043)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:37-04:00",
    updated_at: "2019-09-13T01:49:35-04:00"
  },
  {
    id: 679,
    title: "Carnival",
    description:
      "Drop-in to get a caricature of yourself drawn, grab some popcorn and cotton candy, and let your stress out on the inflatable jousting game!",
    start_time: "2019-09-14T14:00:00-04:00",
    end_time: "2019-09-14T17:00:00-04:00",
    location: "TD Tent",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:38-04:00",
    updated_at: "2019-09-09T01:50:23-04:00"
  },
  {
    id: 640,
    title: "Mochi Ice Cream Balls",
    description: null,
    start_time: "2019-09-14T15:00:00-04:00",
    end_time: "2019-09-14T16:30:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:33-04:00",
    updated_at: "2019-09-09T01:50:24-04:00"
  },
  {
    id: 668,
    title: "Intro to Product Management",
    description:
      'There\'s a chicken and egg problem that states "To become a product manager, you need to be a product manager." So, what do product managers do and what does it take to be one? Find out in this workshop as we cover the basics of product management, how to transition from software engineering, and the interview process.',
    start_time: "2019-09-14T15:00:00-04:00",
    end_time: "2019-09-14T16:00:00-04:00",
    location: "4B (E7 4053)",
    tags: ["workshop"],
    links: [],
    created_at: "2019-09-09T00:41:37-04:00",
    updated_at: "2019-09-10T00:42:06-04:00"
  },
  {
    id: 654,
    title: "Applyboard Lightning Challenge",
    description:
      "At ApplyBoard, we believe that education is a right, not a privilege. We empower people around the world to access the best education available by using Applyboard\u2019s platform and team of experts to streamline the application process. One of the most important aspects of Applyboard\u2019s platform is their search page. Ultimately, the search page must take a huge amount of user input information and parse it for their backend to understand and return back the appropriate programs and schools according to the user's criteria. Come to this lightning challenge and solve a problem involving search parameter manipulation. The challenge can be completed in javascript, python or ruby. Those who are able to create a pull request that passes our Continuous Integration tests will be given a prize. A Nintendo Switch is also up for grabs for the best solution!",
    start_time: "2019-09-14T15:00:00-04:00",
    end_time: "2019-09-14T15:45:00-04:00",
    location: "3A (E7 3343)",
    tags: ["lightning_challenge"],
    links: [],
    created_at: "2019-09-09T00:41:35-04:00",
    updated_at: "2019-09-13T01:49:35-04:00"
  },
  {
    id: 669,
    title: "Design Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-14T15:30:00-04:00",
    end_time: "2019-09-14T16:15:00-04:00",
    location: "3B (E7 3353)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:37-04:00",
    updated_at: "2019-09-09T01:50:24-04:00"
  },
  {
    id: 659,
    title: "White Hat Hacking",
    description:
      "What is white hat hacking? Where can I learn? Join Deloitte\u2019s talk to learn how to think like a hacker, protect yourself from hackers and other tools to make your hacking more effective. During Deloitte\u2019s session you\u2019ll learn how to collect information using public wifi (yes that\u2019s a thing!) and see how Machine Learning and AI are impacting Cybersecurity and the future of hacking. Bring your laptop and be ready to think differently about where your information is going. All skill levels are welcome!",
    start_time: "2019-09-14T15:30:00-04:00",
    end_time: "2019-09-14T16:30:00-04:00",
    location: "4C (E7 4417)",
    tags: ["talk"],
    links: [],
    created_at: "2019-09-09T00:41:36-04:00",
    updated_at: "2019-09-13T01:49:36-04:00"
  },
  {
    id: 671,
    title: "Product and Design Panel Livestream",
    description:
      "Learn from Cat Noone, Founder of Stark; Yuhki Yamashita, VP of Product at Figma; and Luke Chesser, Cofounder & Head of Product at Unsplash in this panel presentation.",
    start_time: "2019-09-14T16:30:00-04:00",
    end_time: "2019-09-14T17:30:00-04:00",
    location: "3A (E7 3343)",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:37-04:00",
    updated_at: "2019-09-09T01:50:24-04:00"
  },
  {
    id: 670,
    title: "Product and Design Panel",
    description:
      "Learn from Cat Noone, Founder of Stark; Yuhki Yamashita, VP of Product at Figma; and Luke Chesser, Cofounder & Head of Product at Unsplash in this panel presentation.",
    start_time: "2019-09-14T16:30:00-04:00",
    end_time: "2019-09-14T17:30:00-04:00",
    location: "3B (E7 3353)",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:37-04:00",
    updated_at: "2019-09-09T01:50:25-04:00"
  },
  {
    id: 682,
    title: "Ladies Storm Hackathons Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-14T17:30:00-04:00",
    end_time: "2019-09-14T18:15:00-04:00",
    location: "Deloitte and Loblaw Digital Pitch Space (E7 2334)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:39-04:00",
    updated_at: "2019-09-09T01:50:25-04:00"
  },
  {
    id: 684,
    title: "Empowerment Lounge",
    description:
      "Come hang out in our comfy lounge and learn from other hackers, mentors, and sponsors of diverse backgrounds, such as women and LGBTQ+ folk. The Empowerment Lounge is a platform to meet others and discuss challenging norms and expectations of who can exist in tech.",
    start_time: "2019-09-14T17:30:00-04:00",
    end_time: "2019-09-14T20:30:00-04:00",
    location: "Deloitte and Loblaw Digital Pitch Space (E7 2334)",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:39-04:00",
    updated_at: "2019-09-09T01:50:25-04:00"
  },
  {
    id: 641,
    title: "Dinner",
    description: "Thai red curry",
    start_time: "2019-09-14T18:00:00-04:00",
    end_time: "2019-09-14T21:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:33-04:00",
    updated_at: "2019-09-09T01:50:25-04:00"
  },
  {
    id: 685,
    title: "Data and Machine Learning Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-14T18:30:00-04:00",
    end_time: "2019-09-14T19:15:00-04:00",
    location: "Activities Room (E7 1327/1331)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:39-04:00",
    updated_at: "2019-09-09T03:58:28-04:00"
  },
  {
    id: 683,
    title: "LGBTQ+ Hackers Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-14T19:00:00-04:00",
    end_time: "2019-09-14T19:45:00-04:00",
    location: "Deloitte and Loblaw Digital Pitch Space (E7 2334)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:39-04:00",
    updated_at: "2019-09-09T01:50:26-04:00"
  },
  {
    id: 686,
    title: "International Hackers Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-14T20:00:00-04:00",
    end_time: "2019-09-14T20:45:00-04:00",
    location: "Activities Room (E7 1327/1331)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:39-04:00",
    updated_at: "2019-09-09T03:58:29-04:00"
  },
  {
    id: 680,
    title: "Cup Stacking",
    description:
      "We're challenging you to build the highest cup tower. Think you got what it takes?",
    start_time: "2019-09-14T21:30:00-04:00",
    end_time: "2019-09-14T22:30:00-04:00",
    location: "Deloitte and Loblaw Digital Pitch Space (E7 2334)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:39-04:00",
    updated_at: "2019-09-09T01:50:26-04:00"
  },
  {
    id: 642,
    title: "Bubble Tea",
    description: "Presented by Accenture",
    start_time: "2019-09-14T22:00:00-04:00",
    end_time: "2019-09-15T00:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:33-04:00",
    updated_at: "2019-09-09T01:50:26-04:00"
  },
  {
    id: 687,
    title: "High School Hackers Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-14T22:45:00-04:00",
    end_time: "2019-09-14T23:30:00-04:00",
    location: "Activities Room (E7 1327/1331)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:39-04:00",
    updated_at: "2019-09-09T03:58:29-04:00"
  },
  {
    id: 688,
    title: "Game Dev Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-14T23:30:00-04:00",
    end_time: "2019-09-15T00:15:00-04:00",
    location: "Activities Room (E7 1327/1331)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:40-04:00",
    updated_at: "2019-09-09T03:58:29-04:00"
  },
  {
    id: 689,
    title: "Hardware Hackers Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-14T23:30:00-04:00",
    end_time: "2019-09-15T00:15:00-04:00",
    location: "Deloitte and Loblaw Digital Pitch Space (E7 2334)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:40-04:00",
    updated_at: "2019-09-09T01:50:27-04:00"
  },
  {
    id: 681,
    title: "Late Night Karaoke",
    description:
      "Drop-in for some karaoke fun with fellow hackers! Voices of all ranges welcome.",
    start_time: "2019-09-15T00:00:00-04:00",
    end_time: "2019-09-15T01:00:00-04:00",
    location: "TD Tent",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:39-04:00",
    updated_at: "2019-09-09T01:50:27-04:00"
  },
  {
    id: 690,
    title: "Hackathon Organizers Meetup",
    description:
      "Mix and mingle with like-minded hackers in this unstructured meetup.",
    start_time: "2019-09-15T00:30:00-04:00",
    end_time: "2019-09-15T01:15:00-04:00",
    location: "Deloitte and Loblaw Digital Pitch Space (E7 2334)",
    tags: ["activities"],
    links: [],
    created_at: "2019-09-09T00:41:40-04:00",
    updated_at: "2019-09-09T01:50:27-04:00"
  },
  {
    id: 643,
    title: "Pierogies",
    description: null,
    start_time: "2019-09-15T01:00:00-04:00",
    end_time: "2019-09-15T03:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:33-04:00",
    updated_at: "2019-09-09T01:50:27-04:00"
  },
  {
    id: 644,
    title: "Breakfast",
    description: "Traditional breakfast",
    start_time: "2019-09-15T07:00:00-04:00",
    end_time: "2019-09-15T10:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:34-04:00",
    updated_at: "2019-09-09T01:50:28-04:00"
  },
  {
    id: 646,
    title: "Project Submission Deadline",
    description:
      "Submit your project to https://hackthenorth2019.devpost.com/ before 8:00AM.",
    start_time: "2019-09-15T08:00:00-04:00",
    end_time: "2019-09-15T08:00:00-04:00",
    location: "E5 and E7",
    tags: ["judging"],
    links: [],
    created_at: "2019-09-09T00:41:34-04:00",
    updated_at: "2019-09-09T03:58:30-04:00"
  },
  {
    id: 647,
    title: "Project Showcase",
    description:
      "This year, we are introducing the very first Hack the North project showcase where you can show off what you've built and check out what others hackers have created. Demoing in the project showcase is optional, however, should you decide to participate, you will be eligible to win the Hacker's Choice prize! API prizes will also be judged at the project showcase.",
    start_time: "2019-09-15T09:30:00-04:00",
    end_time: "2019-09-15T13:00:00-04:00",
    location: "Design Bay (E5 Floor 1)",
    tags: ["judging"],
    links: [],
    created_at: "2019-09-09T00:41:34-04:00",
    updated_at: "2019-09-13T01:49:39-04:00"
  },
  {
    id: 648,
    title: "Judging",
    description: "Judging for Hack the North finalist prizes.",
    start_time: "2019-09-15T10:00:00-04:00",
    end_time: "2019-09-15T13:00:00-04:00",
    location: "E7 Floor 2, 3, 4",
    tags: ["judging"],
    links: [],
    created_at: "2019-09-09T00:41:34-04:00",
    updated_at: "2019-09-09T01:50:28-04:00"
  },
  {
    id: 649,
    title: "Hardware Return",
    description:
      "Don't forget to return your hardware in order to retrieve your ID!",
    start_time: "2019-09-15T10:00:00-04:00",
    end_time: "2019-09-15T14:00:00-04:00",
    location: "Hardware Checkout (E7 1401)",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:34-04:00",
    updated_at: "2019-09-09T01:50:28-04:00"
  },
  {
    id: 645,
    title: "Lunch",
    description: "Butter chicken",
    start_time: "2019-09-15T11:00:00-04:00",
    end_time: "2019-09-15T13:00:00-04:00",
    location: "TD Tent",
    tags: ["food"],
    links: [],
    created_at: "2019-09-09T00:41:34-04:00",
    updated_at: "2019-09-09T01:50:29-04:00"
  },
  {
    id: 650,
    title: "Closing Ceremonies",
    description:
      "Check out the top 12 finalist hacks, and say a formal goodbye to all the new friends you've made this weekend!",
    start_time: "2019-09-15T14:00:00-04:00",
    end_time: "2019-09-15T15:30:00-04:00",
    location: "Hagey Hall",
    tags: ["logistics"],
    links: [],
    created_at: "2019-09-09T00:41:34-04:00",
    updated_at: "2019-09-09T01:50:29-04:00"
  }
];

/* eslint-enable no-console */