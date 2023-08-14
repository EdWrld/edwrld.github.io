import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// Change the colors here to match your brand https://gradientgenerator.paytonpierce.dev/
export let colors = ["rgb(148, 148, 148)", "rgb(148, 148, 148)"];
export let theme = {
    backgroundColor: '#331b1b',
    textColor: '#ff1f1f',
    navColor: '#2f2f2f',
    pageNav: '#444444',
    navOpacity: 0.8,
    activeButton:'#888888',
    inactiveButton:'#bbbbbb',
    form:'#e5e5e5'
};
/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Edward",
    lastName: "Utria",
    initials: "Ed🌎",
    position: "Tech Enthusiast 🚀\n Full Stack Developer 💻\n And Entrepreneur 💼",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "📧",
            text: "edwardutria12@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/EdWrld",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/edward-utria-11b06518b/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: " Hi, I'm Edward a Full stack developer who loves creating solutions for difficult problems. Put plainly I develop applications, am a very quick learner, and am highly adaptable to any tech stack. If you value these traits hire me!",
    skills: {
        proficientWith: ['Java', 'Kotlin', 'C++', 'Rust', 'Python', 'Go', 'Angular', 'React', 'JavaScript', 'TypeScript', 'SQL', 'DynamoDB', 'Kafka', 'Redis', 'Quarkus', 'TensorFlow', 'TDD', 'AWS', 'Terraform', 'OOP', 'Microservices', 'Docker', 'Linux', 'CI/CD'],
    }
    ,
    hobbies: [
        {
            label: 'implementing a solution',
            emoji: '💻'
        },
        {
            label: 'staying active',
            emoji: '🏃'
        },
        {
            label: 'discovering new foods',
            emoji: '🍽️'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'music',
            emoji: '🎵'
        }

// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}