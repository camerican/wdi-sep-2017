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



// https://www.snap.com/jobs/?locations=New+York
$$(".roles-results table tr").map( c => ({
 role: $x("normalize-space(./descendant::th[1]/a/text())",c),
 id: $x("substring-after(./descendant::th[1]/a/@href,'jobs/')",c),
 link: $x("normalize-space(./descendant::th[1]/a/@href)",c),
 dept: $x("normalize-space(./descendant::td[1]/descendant::*[string-length(text())>1][1])",c),
 type: $x("normalize-space(./descendant::td[2]/descendant::*[string-length(text())>1][1])",c),
 location: $x("normalize-space(./descendant::td[3]/descendant::*[string-length(text())>1][1])",c)
} ));

// https://careers.pinterest.com/careers/
$$(".job").map( c => ({
  role: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' title ')][1])",c),
  id: $x("normalize-space(./descendant::a[1]/@href)",c).match(/\d+$/)[0],
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  dept: $x("normalize-space(./preceding::*[contains(concat(' ', normalize-space(@class), ' '), ' name ')][1]/descendant::*[string-length(text())>1][1])",c),
  summary: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' summary ')]/descendant-or-self::*[string-length(text())>1][1])",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')]/descendant-or-self::*[string-length(text())>1][1])",c)
}));

// http://company.trivago.com/jobs/
$$(".job").map( c => ({
  role: $x("normalize-space(./descendant-or-self::*[string-length(text())>1][1])",c),
  id: $x("substring-after(./descendant-or-self::a[1]/@href,'jobs/')",c),
  link: $x("normalize-space(./descendant-or-self::a[1]/@href)",c),
  dept: $x("normalize-space(./descendant-or-self::strong[1]/descendant-or-self::*[string-length(text())>1][1])",c),
  location: $x("normalize-space(substring-after(./span[2]/descendant-or-self::text()[last()],','))",c)
}));

// https://www.buzzfeed.com/about/jobs
$$(".opening").map( c => ({
  role: $x("normalize-space(./descendant-or-self::a[1]/text())",c),
  id: $x("normalize-space(substring-after(./descendant-or-self::a[1]/@href,'jid='))",c),
  link: $x("normalize-space(./descendant-or-self::a[1]/@href)",c),
  dept: $x("normalize-space(./preceding::h2[1]/text())",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')]/descendant-or-self::*[string-length(text())>1][1])",c),
}));


// https://squareup.com/careers/jobs
$x("//tr[@data-job-location]").map( c => ({
  role: $x("normalize-space(./@data-job-title)",c),
  id: $x("normalize-space(./descendant::a[1]/@href)",c).match(/\d+$/)[0],
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  type: $x("normalize-space(./@data-job-type)",c),
  dept: $x("normalize-space(./preceding::h3[1]/text())",c),
  team: $x("normalize-space(./@data-job-team)",c),
  location: $x("normalize-space(./@data-job-location)",c)
}));

// https://jobs.lever.co/animoto
$$(".posting").map( c => ({
  role: $x("normalize-space(./descendant-or-self::h5[1]/text())",c),
  id: $x("normalize-space(./descendant-or-self::a[1]/@href)",c).match(/[^/]+$/)[0],
  link: $x("normalize-space(./descendant-or-self::a[1]/@href)",c),
  team: $x("normalize-space(./descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' sort-by-team ')]/text())",c),
  type: $x("normalize-space(./descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' sort-by-commitment ')]/text())",c),
  location: $x("normalize-space(./descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' sort-by-location ')]/text())",c),
}));

// Adobe
// https://adobe.wd5.myworkdayjobs.com/external_experienced
$x("//*[@role='region']/*/ul/li").map( c => ( m => ({
  role: $x("normalize-space(./descendant-or-self::*[@data-automation-id='promptOption']/text())",c),
  id: m[1],
  location: m[0],
  post_date: m[2]
}))( $x("normalize-space(./descendant-or-self::span[last()]/text())",c).match(/[^|]+/g).map( c => c.trim() ) ));

// Little Bits
// https://littlebits.cc/careers
$$("#job-listings div div").map( c => ({
  role: $x("normalize-space(./descendant-or-self::*[string-length(text())>1][1])",c),
  id: $x("normalize-space(./@id)",c),
  link: $x("normalize-space(./descendant-or-self::a/@href)",c),
  dept: $x("normalize-space(./preceding::h5[1]/text())",c)
}));

// Schoology
// https://www.schoology.com/careers/openings
$$(".opening").map( c => ({
  role: $x("normalize-space(./descendant-or-self::a[1]/text())",c),
  id: $x("substring-after(./descendant-or-self::a[1]/@href,'jid=')",c),
  link: $x("normalize-space(./descendant-or-self::a[1]/@href)",c),
  dept: $x("normalize-space(./preceding::h2[1]/text())",c),
  location: $x("normalize-space(./descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')]/text())",c)
}));

// Blue Apron
// http://blueapron.referrals.selectminds.com/jobs/search/568117

// multiple pages
$$("#job_results_list_hldr .job_list_row").map( c => ({
  role: $x("normalize-space(./descendant-or-self::a[1]/text())",c),
  id: $x("normalize-space(./descendant-or-self::a[1]/@href)",c).match(/\d+$/)[0],
  link: $x("normalize-space(./descendant-or-self::a[1]/@href)",c),
  location: $x("normalize-space(./descendant-or-self::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')]/text())",c)
}));

// Dataminr
// https://www.dataminr.com/careers
$$(".job").map( c => ({
  role: $x("normalize-space(./descendant::a[1]/descendant-or-self::*[string-length(text())>1][1])",c),
  id: $x("substring-after(./descendant::a[1]/@href,'jobs/')",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  dept: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' job__title-loc ')]/descendant::p[1]/text())",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' job__title-loc ')]/descendant::p[2]/text())",c)
}));

// 1010Data
// https://1010data.com/company/careers/open-positions/
$x("//a[contains(@href,'open-positions/position')]").map( c => ({
  role: $x("normalize-space(./text())",c),
  id: $x("substring-after(./@href,'id=')",c),
  link: $x("normalize-space(./@href)",c),
  dept: $x("normalize-space(./preceding::strong[1]/text())",c)
}));

// Architizer
// https://architizer.com/careers/
$$(".job").map( c => ({
  role: $x("normalize-space(./descendant-or-self::*[string-length(text())>1][1])",c),
  id: $x("substring-after(./descendant::a/@href,'jid=')",c),
  link: $x("normalize-space(./descendant::a/@href)",c),
  dept: $x("normalize-space(./preceding::*[contains(concat(' ', normalize-space(@class), ' '), ' headline ')][1]/text())",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')]/text())",c)
}));

// Movable Ink
// https://movableink.com/careers/
$$(".careers-list li").map( c => ({
  role: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' job ')][1])",c),
  id: $x("substring-after(./ancestor::a[1]/@href,'jid=')",c),
  link: $x("normalize-space(./ancestor::a[1]/@href)",c),
  dept: $x("normalize-space(./preceding::h3[1]/text())",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')])",c)
}));

// App Boy
// https://www.appboy.com/careers/

$$(".job-listings li").map( c => ({
  role: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' job-title ')][1]/text())",c),
  id: $x("substring-after(./descendant::a[1]/@href,'jid=')",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  dept: $x("normalize-space(./preceding::h2[1]/text())",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' job-city ')][1]/text())",c)
}));

// Just Works
// https://justworks.com/careers
$$(".job-openings p > a").map( c => ({
  role: $x("normalize-space(./text())",c),
  id: $x("substring-after(./@href,'jobs/')",c),
  link: $x("normalize-space(./@href)",c),
  dept: $x("normalize-space(./preceding::h3[1]/text())",c)
}));

// Updater
// http://www.updater.com/jobs/openings
// https://boards.greenhouse.io/embed/job_board?for=updater&b=http://www.updater.com/jobs/openings
$$(".opening").map( c => ({
  role: $x("normalize-space(./descendant::a[1]/text())",c),
  id: $x("substring-after(./descendant::a[1]/@href,'jid=')",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  dept: $x("normalize-space(./preceding::h2[1]/text())",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')][1]/text())",c),
}));

// Stride
// https://www.stridenyc.com/careers
$$(".job--listing").map( c => ({
  role: $x("normalize-space(./descendant::h3[1]/text())",c),
  id: ($x("normalize-space(./descendant::a[last()]/@href)",c).match(/jobs\/(\d+)/)||[])[1],
  link: $x("normalize-space(./descendant::a[last()]/@href)",c),
  location: $x("normalize-space(substring-after(./descendant::p[contains(text(),'Location')]/text(),'Location:'))",c),
  summary: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' description--holder ')]/descendant-or-self::*[string-length(text())>1][1])",c)
}));

// Yellow Hammer
// http://www.yhmg.com/careers/
$x("//*[contains(concat(' ', normalize-space(@class), ' '), ' et_pb_toggle_title ')]/parent::*/descendant::h6[1]").map( c => ({
  role: $x("normalize-space(./descendant::a[1]/text())",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  dept: $x("normalize-space(./preceding::h5[1]/descendant-or-self::*[string-length(text())>1][1])",c)
}));

// Yodle -> Web.com
// https://recruiting.adp.com/srccar/public/RTI.home?c=1157751&d=ExternalCareerSite


// Boxed
// https://www.boxed.com/careers/
// https://boards.greenhouse.io/embed/job_board?for=boxedwholesale&b=https://www.boxed.com/careers
$$(".opening").map( c => ({
  role: $x("normalize-space(./descendant::a[1]/text())",c),
  id: $x("substring-after(./descendant::a[1]/@href,'jid=')",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  dept: $x("normalize-space(./preceding::h2[1]/text())",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')][1]/text())",c),
}));

// Amplify
// https://amplify.wd1.myworkdayjobs.com/Amplify_Careers
$x("//*[@role='region']/div/ul/li").map( c => ( x => ({
  role: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' gwt-Label ')][1]/text())",c),
  id: x[1],
  location: x[0]
}))($x("normalize-space(./descendant::span[last()]/text())",c).split('|').map( c => c.trim() )));

// Feedvisor
// https://feedvisor.com/careers-at-feedvisor/new-york/
$$(".career-positions-list .position-item").map( c => ({
  role: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' position-title ')]/descendant-or-self::*[string-length(text())>1][1])",c),
  id: $x("substring-after(./descendant::a[1]/@href,'position=')",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  summary: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' position-desc ')][1]/text())",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' position-location ')][1]/text())",c),
}));
// BarkBox
// http://bark.co/jobs/
// https://boards.greenhouse.io/embed/job_board?for=bark&b=http://bark.co/jobs/
$$("section > .opening").map( c => ({
  role: $x("normalize-space(./descendant::a[1]/text())",c),
  id: $x("substring-after(./descendant::a[1]/@href,'jid=')",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')]/text())",c),
  dept: $x("normalize-space(./preceding::h2[1]/text())",c)
}));

// Newslea
// https://newsela.com/company/jobs/
// https://boards.greenhouse.io/embed/job_board?for=newsela&b=https://newsela.com/company/jobs/
$$("section > .opening").map( c => ({
  role: $x("normalize-space(./descendant::a[1]/text())",c),
  id: $x("substring-after(./descendant::a[1]/@href,'jid=')",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  location: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' location ')]/text())",c),
  dept: $x("normalize-space(./preceding::h2[1]/text())",c)
}));

// Brandwatch
// https://www.brandwatch.com/careers/
$$("#current-positions li").map( c => ({
  role: $x("normalize-space(./descendant::a[1]/descendant-or-self::*[string-length(text())>1][1])",c),
  link: $x("normalize-space(./descendant::a[1]/@href)",c),
  location: $x("normalize-space(./descendant::div[last()]/text())",c),
  dept: $x("normalize-space(./preceding::h3[1]/text())",c)
}));

// Splash
// https://splashthat.com/careers

$x("//div[contains(@id,'g-')][@data-action='external'][./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' title ')]]").map( c => ({
  role: $x("normalize-space(./descendant::*[contains(concat(' ', normalize-space(@class), ' '), ' title ')]/descendant-or-self::*[string-length(text())>1][last()])",c)
}));

// Healthify
// https://healthify.workable.com/

// Attune
// https://www.attuneinsurance.com/careers

// Jet
// https://jet.com/careers/technology

// CB Insights
// https://www.cbinsights.com/jobs#jobs-list