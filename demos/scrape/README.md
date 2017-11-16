# Web Scraper example

## Gem Setup

Make sure we have our necessary gems installed via `bundle install`

## Database Setup

Now let's set up our database using good old fashioned SQL with sqlite3:

```bash
cd db
sqlite3 scraper.sqlite3 < schema.sql
sqlite3 scraper.sqlite3 < seeds.sql
```

We could test to make sure this worked by entering the database and looking around.

```
sqlite3 scraper.sqlite3
.tables
SELECT * FROM school;
```

## Analysis

Web scraping depends upon identifying what data we want to capture from a document.  In today's exercise, we will look to capture data from princetonreview.com related to Yale and Carnegie Mellon.

Our initial database has two links we will be looking to process data from:

* https://www.princetonreview.com/schools/1023891/college/yale-university
* https://www.princetonreview.com/schools/1023851/college/carnegie-mellon-university

Looking at the website, there are several pieces of information we may wish to capture.

* University name
* Website URL
* \# Applicants
* Acceptance rate
* SAT scores
* ACT scores
* Selectivity ranking

## CSS Queries

Looking at the encoding of the document, we can see the following snippet of code that encapsulates the name.

```html
	<h1 class="school-headline">
		<span itemprop="name">Yale University</span>
	</h1>
```

We can use CSS style selectors to capture the information we're interested in.  Often we'll want to experiment with writing selectors in the Chrome development console.

Open the console and type in `$$("span[itemprop=name]")`.  The Chrome developer tools has defined a `$$` method we can use to query the DOM using CSS-style selectors.  This is great for experimenting with the queries you're writing for scraping purposes.

| data | selector |
| --- | ------ |
| name | span[itemprop=name] |
| url_school | span[itemprop=url] |

## XPath Queries

Sometimes we need more powerful selection options than CSS selectors provide. CSS selectors do not allow us to traverse up the hierarchy or to examine the inner contents of a tag.

XPath selectors allow both of these things!  In general, XPath selectors are more powerful and complex than CSS selectors.

We'll be using XPath selectors to capture the remaining content.

Let's say we wish to capture the number of applicants given the following snippet:

```html
<div class="col-sm-4">
	<div>Applicants</div>
	<div class="number-callout">30,236</div>
</div>
```

We can start by picking out a div that contains text equal to "Applicants".  We'll use Chrome's `$x` function from the console to use an `XPath` query in the same way in which we used `$$` for CSS style queries.

```
$x("//div[text()='Applicants']")
```

The way to read this is as follows

| syntax | description |
| --- | --- |
| // | anywhere in the document |
| div | a div tag |
| text() | inner text of the tag |

We are going to want to move to the `following-sibling` and capture the text from within that div.

```
$x("//div[text()='Applicants']/following-sibling::div/text()")
```

| data | selector |
| --- | --- |
| applicants | //div[text()='Applicants']/following-sibling::div/text() |
| acceptance rate | //div[text()='Acceptance Rate']/following-sibling::div/text() |
| SAT Reading | //div[text()='SAT Reading']/following-sibling::div[@class='number-callout']/text() |
| SAT Math | //div[text()='SAT Math']/following-sibling::div[@class='number-callout']/text() |
| SAT Writing | //div[text()='SAT Writing']/following-sibling::div[@class='number-callout']/text() |
| ACT Composite |  |
| Selectivity rating | //a[text()='Admissions selectivity rating']/parent::div/following-sibling::div[@class='number-callout']/text() |

Okay, that's a great start.  We now have all the selectors we'll need to get the relevant data from the page.  We can now take these selectors and use them within Nokogiri to capture the relevant data.


