const mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "gold_stars_db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const seeds = [
  {
    username: "arpita_desai",
    fullname: "Arpitaben Desai",
    password: "ADesai"
  },
  {
    username: "BrandonH91",
    fullname: "Brandon Humphry",
    password: "BHumphry"
  },
  {
    username: "Carolynttnguyen",
    fullname: "Carolyn Nguyen",
    password: "CNguyen"
  },
  {
    username: "chadtao",
    fullname: "Chad Tao",
    password: "skills",
    isAdmin: true
  },
  {
    username: "chikeobi",
    fullname: "Chikeobi Njaka",
    password: "CNjaka"
  },
  {
    username: "nicolechai",
    fullname: "Chung Yi Nicole Chai",
    password: "NChai"
  },
  {
    username: "cjackson152",
    fullname: "Colton Jackson",
    password: "CJackson"
  },
  {
    username: "Coxmen",
    fullname: "David Cox",
    password: "DCox",
    isAdmin: true
  },
  {
    username: "domenikos",
    fullname: "Dominador de la Cruz",
    password: "DCruz"
  },
  {
    username: "EvanDobalian",
    fullname: "Evan Dobalian",
    password: "EDobalian"
  },
  {
    username: "jayjkim",
    fullname: "Jay Kim",
    password: "JKim"
  },
  {
    username: "jjesusteran-mori",
    fullname: "Jesus Delgado Teran",
    password: "JTeran"
  },
  {
    username: "kylejboland",
    fullname: "Kyle Boland",
    password: "KBoland"
  },
  {
    username: "kennyqng",
    fullname: "Kenny Nguyen",
    password: "KNguyen"
  },
  {
    username: "Lolofosho",
    fullname: "Lauren Garelick",
    password: "LGarelick"
  },
  {
    username: "leole",
    fullname: "Leo Le",
    password: "LLe"
  },
  {
    username: "lfreeman0820",
    fullname: "Lonni Freeman",
    password: "LFreeman"
  },
  {
    username: "mellogelo",
    fullname: "Ralph Magbanua",
    password: "RMagbanua"
  },
  {
    username: "rogelis",
    fullname: "Rogelio Salgado",
    password: "RSalgado"
  },
  {
    username: "oboyle",
    fullname: "Ryan O'Boyle",
    password: "ROBoyle"
  },
  {
    username: "schaudhary",
    fullname: "Sapana Chaudhary",
    password: "SChaudhary"
  },
  {
    username: "Sederickbc",
    fullname: "Sederick Cowart",
    password: "SCowart"
  },
  {
    username: "tthai4",
    fullname: "Thomas Thai",
    password: "TThai"
  },
  {
    username: "TRodriguez",
    fullname: "Tyra Rodriguez",
    password: "TRodriguez"
  },
  {
    username: "kylekenney",
    fullname: "Kyle Kenney",
    password: "KKenney",
    isAdmin: true
  }
];

db.User.deleteMany({})
  .then(() => db.User.create(seeds))
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
