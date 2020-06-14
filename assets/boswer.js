const Bowser = require("bowser");
console.log(Bowser.parse(window.navigator.userAgent));
const browser = Bowser.getParser(window.navigator.userAgent);
console.log(browser.getBrowser());
const isValidBrowser = browser.satisfies({
  // declare browsers per OS
  windows: {
    "internet explorer": ">10",
  },
  macos: {
    safari: "<=10.1",
  },
  // per platform (mobile, desktop or tablet)
  mobile: {
    safari: "<=9",
    "android browser": "<3.10",
  },
  // per platform (mobile, desktop or tablet)
  tablet: {
    safari: "<=9",
    "android browser": "<3.10",
  },
  // or in general
  chrome: "<40",
  firefox: "<31",
  opera: "<=22",
  "microsoft edge": "<= 18",
});
// console.log(isValidBrowser);
if (isValidBrowser) {
  const warn = `
  <div class='errorPage'>
    <div>
        <img src='assets/img/error.svg'></img>
        <div>Your browser is too old, please update your browser version first!</div>
    </div
  </div>
  `;
  document.body.innerHTML = warn;
}
