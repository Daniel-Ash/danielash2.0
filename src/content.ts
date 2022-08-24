export const aboutContent = {
	label: "About me",
	contents: ["Hey! I'm Dan, a tech professional from New Zealand who is based in the United Kingdom."]
}

export const workContent = {
	label: "Work",
	contents: ["I have run product at several very early stage (less than 10 people, pre product-market fit) startups. Beyond that I have a background in Data Science & Machine Learning from my time as a Data Analyst at New Zealand's largest online school.",]
}

export const interestsContent = {
	label: "Interests",
	contents: [
				"I am endlessly curious, and explore many subjects in my spare time - although they mostly seem to converge around tech.",
				"Although I am unlikely to update this frequently, recent examples include:"
	],
	bullets: [
				"<a href='https://www.troyhunt.com/'>Troy Hunt's blog</a>. Especially his posts on how he's built various services like Password Purgatory and Pwned Passwords. Those posts are what led me to deploy this site via Cloudflare pages.",
				"Distributed systems. In particular, I have been enjoying this <a href='https://www.youtube.com/playlist?list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB'> lecture series </a> by Martin Kleppmann.",
				"Colour theory, including the physics of colour. Check out this <a href='https://www.youtube.com/watch?v=gwLQ0cDb4cE'>video by Marco Bucci</a> where he explores light and colour from both a technical and a painter's perspective."
			]
}

export const projectContent = [
	{
		id: 0,
		name: "Rocketship ",
		about:["In this lockdown project I leveraged the prompt of a digital art gallery to explore Vue.js.", "Prior to being introduced to Vue, my programming experience was entirely centered around data analysis - mainly SQL and Jupyter Notebooks. My mind had been blown by the Vue 'get started' guide and I was very keen to build a full front end app."],
		links:[
			{id: 0, buttonText:"Go to app", href:"https://rocketship-20.danielash1.repl.co/"}, 
			{id: 1, buttonText:"View source on Github", href:"https://github.com/Daniel-Ash/Rocketship"},
		],
		keyLearnings:[
			"Building a Vue site with Vite was awesome. I recall there was a steep learning curve to learn the syntax to pass props between components, but I got there.", 
			"This project also helped me to get the hang of modern CSS. I was watching a number of <a href='https://www.youtube.com/kepowob'>Kevin Powell videos</a> at the time, and was inspired by his approach to responsive css, for example: allowing elements to breathe and fill space. Resize the page and watch the headers grow/shrink to see this in action. The layout also switches orientation based on flex-overflow rather than via a breakpoint.",
			"Although it is not currently available, I also used this project to explore and implement firebase auth, which also saw me using things like the Vue router. I had an idea of introducing user generated content of some description, but that is for another lockdown.."
		]
	},
	{
		id: 1,
		name: "Danielash.me",
		about:[
			"Well, you're looking at it. My goal with this site was to make a good looking portfolio page. At the same time, I wanted to explore building a site without a framework to feel around the edges of vanilla html/css/js.", 
			"I also wanted to focus on performance and accessibility, and to deploy a site using Cloudflare Pages."],
		links:[
			{id: 0, buttonText:"View source on Github", href:"https://github.com/Daniel-Ash/danielash.me/"}, 
		],
		keyLearnings:[
			"Re: no framework: <ul><li>As my project grew, I was pretty surprised that there wasn't an obvious/simple way to import slabs of static html into my index.html just to clean up the codebase. I entered the rabbithole of web components but that seemed too complicated for what should be very simple.</li> <li>Simultaneously, I have decided not to have show/hide sections, or separate pages simply because it seems overkill to implement the js required when I could reach for a framework. The result - a very long page. I'm probably ready for a framework.. </li> <li>I talk more about it below, but it is nice to have a framework automatically cache bust when static content changes.</li> </ul>", 
			"Cloudflare Pages is a delight to use. Awesome to simply push to github and have your site available in data centres around the world, for free.", 
			"It has been awesome to learn more about caches and CDNs. However, I'm not totally happy with my current approach to cache busting (manually updating query params on static files), and because I don't have a build step (no framework, Cloudflare Pages simply grabs my static files), I am not yet sure which approach I would take to automatically version static files..",
			"I went through a lengthy design phase before I have landed on this very simple single column design. The key lesson here is to do as much prototyping in figma as possible. Starting and abandoning half completed html/css is painful and time consuming.",
			"Similarly sometimes you stumble upon the need for a new component while you're cutting some peripheral html/css - I think the right call here is to stop and prototype in figma, because the time taken in code kills a lot of opportunity for creative destruction."
		]
	},
	{
		id: 2,
		name: "Don McNewt",
		about:[
			"<a href='https://rgdsm.wordpress.com/'>Don McDonald</a> is an eccentric Wellingtonian who proliferates marginally coherent content seemingly ad hoc through a variety of local and digital media, including <a href='https://twitter.com/McDONewt'>Twitter</a>.", 
			"This Node.js project leveraged the Twitter & Open AI API's to generate and post similar tweets to Don MacDonald at a random cadence. "],
		tags:{
			label: "Tech used",
			contents: [
				"Node.js",
				"Open AI API",
				"Twitter API"
			]
		},
		links:[
			{id: 0, buttonText:"View source on Github", href:"https://github.com/Daniel-Ash/don-mcnewt-bot"}, 
		],
		keyLearnings:[
			"This was a fun project that got my head around Node & Express. In playing around, I made some fun requests that summarised the tweets of an account, and I was interested in extending this to a service that allowed any user to use the APIs to summarise a twitter users tweets, generate tweets, and post on a users behalf.",
			"Error handling. I wrote this without considering the unexpected, which meant the code broke and was also very difficult to debug. If I was to return to the project this would be a key objective. I would also use Typescript instead of simply JS", 
			"I would improve my approach to scheduling. I decided it was uncool for a twitter bot to post at the same time, every day or every hour, etc. <ul><li> To resolve this, I built a function that would post a tweet and then schedule the next tweet at a random point in future. This was prone to issues because it held the time for the next tweet in memory.</li><li>If the program crashed or restarted this datapoint was lost. I was running this on replit, which it turns out will frequently restart your process, so in reality this function was never able to post tweets.</li><li>In future I would look to either: frequently ask a probability function whether to post rather than storing a value in memory, or store the datapoint somewhere more durable. </li></ul>"
		]
	},
]