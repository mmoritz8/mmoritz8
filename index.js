const Mustache = require("mustache");
const fs = require("fs");
const MUSTACHE_MAIN_DIR = "./main.mustache";

// DATA to be provided to M.

let data = {
  name: "Madeline",
  date: new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  }),
};

// Ask Mustache to render our file with the data we provided.

// Then use that data to generate a ReadMe.md file

function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err;
    const output = Mustache.render(data.toString());
    fs.writeFileSync("README.md", output);
  });
}

generateReadMe();
