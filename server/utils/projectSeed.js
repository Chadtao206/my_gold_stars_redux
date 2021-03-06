const mongoose = require("mongoose");
let { Project } = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gold_star_db",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }
);

const projects = [
  {
    project: "one",
    name: "Slapps",
    repo: "https://github.com/cjackson152/Slapps",
    url: "https://cjackson152.github.io/Slapps/index.html",
    contributors: [
      {
        handle: "Carolynttnguyen",
        url: "https://github.com/carolynttnguyen"
      },
      { handle: "cjackson152", url: "https://github.com/cjackson152" },
      { handle: "mellogelo", url: "https://github.com/mellogelo" }
    ],
    description: "",
    img: ""
  },
  {
    project: "one",
    name: "Food Connect 4 U",
    repo: "https://github.com/jjesusteran-mori/FoodConnect4U",
    url: "https://jjesusteran-mori.github.io/FoodConnect4U/",
    contributors: [
      { handle: "lfreeman0820", url: "https://github.com/lfreeman0820" },
      { handle: "rogelis", url: "https://github.com/rogelis" },
      {
        handle: "jjesusteran-mori",
        url: "https://github.com/jjesusteran-mori"
      }
    ],
    description: "",
    img: ""
  },
  {
    project: "one",
    name: "Sagarmatha",
    repo: "https://github.com/chikeobinjaka/sagarmatha",
    url: "https://chikeobinjaka.github.io/sagarmatha/",
    contributors: [
      { handle: "chikeobi", url: "https://github.com/chikeobinjaka" },
      { handle: "kylejboland", url: "https://github.com/kylejboland" },
      { handle: "schaudhary", url: "https://github.com/schaudhary4657" },
      { handle: "Sederickbc", url: "https://github.com/Sederickbc" }
    ],
    description: "",
    img: ""
  },
  {
    project: "one",
    name: "TL;DS",
    repo: "https://github.com/kennyqng/project-01",
    url: "https://kennyqng.github.io/project-01/",
    contributors: [
      { handle: "kennyqng", url: "https://github.com/kennyqng" },
      { handle: "EvanDobalian", url: "https://github.com/EvanDobalian" },
      { handle: "BrandonH91", url: "https://github.com/BrandonH91" }
    ],
    description: "",
    img: ""
  },
  {
    project: "one",
    name: "Hollywood Holidays",
    repo: "https://github.com/domenikos5/Hollywood-Holidays",
    url: "https://domenikos5.github.io/Hollywood-Holidays/",
    contributors: [
      { handle: "nicolechai", url: "https://github.com/nicolechai1028" },
      { handle: "domenikos", url: "https://github.com/domenikos5" },
      { handle: "leole", url: "https://github.com/leoNLe" }
    ],
    description: "",
    img: ""
  },
  {
    project: "one",
    name: "Keep My Mind Busy",
    repo: "https://github.com/wronghandedryan/ProjectStayBusy",
    url: "https://wronghandedryan.github.io/ProjectStayBusy/",
    contributors: [
      { handle: "tthai4", url: "https://github.com/tthai1028" },
      { handle: "oboyle", url: "https://github.com/wronghandedryan" },
      { handle: "Lolofosho", url: "https://github.com/laurengarelick" }
    ],
    description: "",
    img: ""
  },
  {
    project: "one",
    name: "In-or-Out",
    repo: "https://github.com/TyRodriguez/In-Or-Out.io",
    url: "https://tyrodriguez.github.io/In-Or-Out.io/",
    contributors: [
      { handle: "arpita_desai", url: "https://github.com/arpita-desai" },
      { handle: "jayjkim", url: "https://github.com/jaykim92" },
      { handle: "TRodriguez", url: "https://github.com/TyRodriguez" }
    ],
    description: "",
    img: ""
  }
];

Project.deleteMany({})
  .then(() => Project.create(projects))
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
