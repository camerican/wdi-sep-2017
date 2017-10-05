const companies = [
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/e3b.United_Technologies.svg.png", company: "United Technologies" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/ca9.ibm-log.jpg", company: "IBM" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/cf5.Blue_Apron_Company_Logo.png", company: "Blue Apron" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/268/2682560/assets/f5c.Architizer-Logo.jpg", company: "Architizer" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/309.dataminr_owler_20160223_095804_original.jpg", company: "Dataminr" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/504.Snapchat-Logo-Wordmark.png", company: "Snapchat" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/29a.pinterest.png", company: "Pinterest" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/268/2682560/assets/e88.Trivago.svg.png", company: "Trivago" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/0d9.square.png", company: "Square" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/624.Animoto-logo2.png", company: "Animoto" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/268/2682560/assets/120.little-bits.jpg", company: "Little Bits" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/f29.Schoology_Logo.svg.png", company: "Schoology" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/a02.Blue_Apron_Company_Logo.png", company: "Blue Apron" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/cf3.1010data_Logo_2016.png", company: "1010 Data" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/3e7.Movable-Ink-logo.jpg", company: "Movable Ink" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/268/2682560/assets/015.appboy.jpg", company: "App Boy" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/268/2682560/assets/425.justworks-primary-logo-navy-1-804x167.png", company: "Justworks" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/268/2682560/assets/af2.updater_logo.png", company: "Updater" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/38b.Stride.png", company: "Stride" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/268/2682560/assets/ad9.yellowhammer.png", company: "Yellow Hammer" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/2a3.Yodle_logo2.png", company: "Yodle" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/7bb.BOXED.png", company: "Boxed" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/034.Amplify.png", company: "Amplify" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/277.feedvisor-logo.png", company: "Feedvisor" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/6fa.BarkBox_logo_blue__1_.png", company: "Bark Box" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/042.newsela-logo.png", company: "Newsela" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/1fb.brandwatch-logo1.jpg", company: "Brandwatch" },
  { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/976.healtify-logo.png", company: "Healthify" }
];

// let's create a Company constructor
// that takes a name and an image
function Company( name, image ) {
  this.name = name;
  this.image = image;
}
Company.prototype = {
  generateHTML: function() {
    return `<div class="company">
    <img src="${this.image}" />
    <span class="name">${this.name}</span>
  </div>`;
  },
  someOtherFunction: function() {
    return "Blah";
  }
};

let united = new Company( "United Technologies", "http://d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/e3b.United_Technologies.svg.png");
let ibm = new Company( "IBM", "http://d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/ca9.ibm-log.jpg");

// { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/e3b.United_Technologies.svg.png", company: "United Technologies" },
//   { image: "//d24wuq6o951i2g.cloudfront.net/img/events/id/279/2796022/assets/ca9.ibm-log.jpg", company: "IBM" },

// Company.prototype.generateHTML = function() {
//   return `<div class="company">
//     <img src="${this.image}" />
//     <span class="name">${this.name}</span>
//   </div>`;
// };
// Company.prototype.someOtherFunction = function(){
//   return "Blah";
// }

// and lets add a "generateHTML" method
// that outputs a template string
// representing a div that has an 
// image and name within it

// Then let's map the array of simple company objects above into an array of Company objects created with the constructor

// And then let's loop over each company
// and generate the HTML output for it
// by calling the generateHTML method
// and appending it to #companies







