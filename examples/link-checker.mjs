import statusChecker from "../src/link-checker/app.mjs";

const config = {
  url: "https://www.truist.com/wealth.index.xml",
  path: ".examples/link-checker-results.json",
};

statusChecker(config);