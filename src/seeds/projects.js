const BudgetBetter = process.env.PUBLIC_URL + "/images/BudegetBetter.png";
const WeatherDashboard =
  process.env.PUBLIC_URL + "/images/WeatherDashboard.png";
const ECommerceBackEnd =
  process.env.PUBLIC_URL + "/images/ECommerceBackEnd.png";
const BigSkyLodges = process.env.PUBLIC_URL + "/images/BigSkyLodges.png";
const SavvyChef = process.env.PUBLIC_URL + "/images/SavvyChef.png";
const TowneSquare = process.env.PUBLIC_URL + "/images/TowneSquare.png";

const projects = [
  {
    id: 1,
    name: "Budget Better",
    description:
      "Budget Better is a web application that helps users manage their personal finances effectively. With Budget Better, you can track your income and expenses, set budget goals, and gain insights into your spending habits. Take control of your finances and make smarter financial decisions with Budget Better.",
    technologies: [
      "JavaScript",
      "React",
      "node.js",
      "express.js",
      "MongoDB",
      "Mongoose",
      "Heroku",
      "Chart.js",
      "GraphQL",
      "JSON Web Tokwns",
      "Tailwind",
      "OpenAI API",
    ],
    image: BudgetBetter,
    repo: "https://github.com/sheaschwenn/budget-better",
    deployedLink: "https://budgetbetter.herokuapp.com/",
  },
  {
    id: 2,
    name: "Weather Dashboard",
    description:
      "App displays the current day's weather as well as the 5-day forecast for a particular city. You can search a city and the weather data will be displayed. ",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "OpenWeather API",
      "Day.js",
    ],
    image: WeatherDashboard,
    repo: "https://github.com/ohSweetWampum/weather-dashboard",
    deployedLink: "https://ohsweetwampum.github.io/weather-dashboard/",
  },
  {
    id: 3,
    name: "E-Commerce Back End",
    description: "This is the back-end of a shopping website ",
    technologies: [
      "Express.js",
      "MySQL2",
      "Sequelize",
      "Dotenv",
      "Insomnia",
      "Node.js",
      "JavaScript",
    ],
    image: ECommerceBackEnd,
    repo: "https://github.com/ohSweetWampum/E-Commerce-Back-End",
    deployedLink:
      "https://drive.google.com/file/d/1Fvk_3knhg5utdPcn7OCdCTom6Aj0RylA/view",
  },
  {
    id: 4,
    name: "Big Sky Lodges",
    description:
      "This hotel booking app, built with Node.js, Express, Sequelize, MySQL, and session management, is a full-stack application which offers a secure and user-friendly interface for managing hotel reservations across multiple branches. It enables users to securely register, login, book rooms, view their reservations on a personalized dashboard, and cancel bookings as needed ",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Sequelize",
      "MySQL2",
      "Handlebars.js",
      "Bcrypt",
      "Dotenv",
      "Express-Session",
      "Bootstrap",
      "Heroku",
      "JawsDB",
      "Day.js",
      "Express-Handlebars",
      "Connect-Session-sequalize",
      "Bootstrap",
    ],
    image: BigSkyLodges,
    repo: "https://github.com/ohSweetWampum/Big-Sky-Lodges",
    deployedLink: "https://big-sky-lodges.herokuapp.com/",
  },
  {
    id: 5,
    name: "Savvy Chef",
    description:
      "Savvy Chef is a web application that helps you find recipes based on the ingredients you have on hand. With its intuitive interface, you can easily search for ingredients and add them to your list. The app then uses a Spoonacular API to suggest recipes that match your ingredient list. You can also filter the recipe results based on food intolerances, dietary restrictions, price sorting, and cuisines. Savvy chef also uses the CocktailDB API to generate delicious and unique cocktails. ",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bulma",
      "APIs",
      "Spoonacular API",
      "CocktailDB API",
    ],
    image: SavvyChef,
    repo: "https://github.com/DidrikLindberg/savvy-chef",
    deployedLink: "https://didriklindberg.github.io/savvy-chef/",
  },
  {
    id: 6,
    name: "TowneSquare",
    description:
      "TownSquare is a social media application designed for user interactivity. It allows users to create profiles, post thoughts, and respond to others' posts. The most important feature of the app is the ability to manage friend connections, you can add or remove friends. Functionality for updating and deleting posts provides users with control over their content. The application utilizes the power of MongoDB's CRUD operations, while Express.js provides the routing. ",
    technologies: [
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "JavaScript",
      "Dotenv",
      "Bootstrap",
      "Heroku",
      "JawsDB",
      "Insomnia",
      "Day.js",
    ],
    image: TowneSquare,
    repo: " https://github.com/ohSweetWampum/TownSquare",
    deployedLink:
      " https://drive.google.com/file/d/1Ext6K_odyTyfKsVvN2OWercw-vLhbpZu/view",
  },
];

export default projects;
