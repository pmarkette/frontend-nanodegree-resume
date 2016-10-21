/*eslint-env browser, jquery, node*/
/*global googleMap*/
'use strict';
var bio = {
	'name' : 'Paul Markette',
	'role' : 'Front-End Developer',
	'contacts': {
		'email' : 'paul@markette.net',
		'mobile' : '510-388-9229',
		'github' : 'pmarkette',
		'twitter' : '@paulmarkette',
		'location' : 'Oakland'
	},
	'picture' : './images/profile.jpg',
	'welcome' : '',
	'skills' : ['HTML', 'CSS', 'Javascript', 'Git/Github', 'Jasmine', 'Networking', 'Linux']
};

var work = {
	'jobs' : [
	{
		'employer' : 'Honeywell',
		'title' : 'Senior Project Engineer',
		'dates' : '2013 - Present',
		'location' : 'San Bruno, CA',
		'description' : '<li>Act as Lead Project Engineer in high visibility projects generating over $7.5M in revenue; serve as point of contact between sales, customers and third party vendors; presented and demonstrated at VIP customer’s showcase events.</li><li>Modify existing and create new user interfaces to meet the business and technical needs of customers.</li><li>Work on projects of various size and complexity, and regularly being given the projects with the highest visibility.</li><li>Troubleshoot systems to determine if problems are related to hardware, bugs in the software or design deficiencies; provide system training to customers.</li>'
	},
	{
		'employer' : 'Adura Technologies',
		'title' : 'Senior Sales Engineer',
		'dates' : '2011 - 2012',
		'location' : 'San Francisco, CA',
		'description' : '<li>Teamed to exceed sales quota of $1MM for 2011 by 50%, closing $1.5MM; sold projects that became case studies highlighting how advanced wireless lighting controls were easier, more cost-effective alternatives to traditional systems.</li><li>Assumed responsibility for all pre-sales software demonstrations and channel partner training, including developing all scripts and training materials; represented company at numerous trade shows.</li><li>Undertook leadership role in standardizing and ensuring consistency in sales processes (proposal development/delivery) to meet critical timelines; encouraged use of Salesforce to centralize information and coordinate outreach.</li>',
	},
	{
		'employer' : 'Controlco',
		'title' : 'Application Engineer',
		'dates' : '2006 - 2011',
		'location' : 'Oakland, CA',
		'description' : '<li>Developed software for commercial building automation systems.</li><li>Conducted demonstrations and provided training to clients and staff.</li><li>Stepped up in 2010 to deliver critical support for one of company’s largest clients, UC Santa Cruz, when a key developer left the firm; delivered project on time to a very happy client.</li>'
	},
	{
		'employer' : 'Honeywell',
		'title' : 'Project Engineer',
		'dates' : '2003 - 2006',
		'location' : 'Foster City, CA',
		'description' : '<li>Programed commercial building automation systems</li>'
	},
	{
		'employer' : 'Epicentric',
		'title' : 'Systems Administrator',
		'dates' : '2001 - 2003',
		'location' : 'San Francisco, CA',
		'description' : '<li>Migrated servers and clients from Windows NT domain to Windows 2000 Active Directory</li>'
	},
	{
		'employer' : 'Simplexis',
		'title' : 'Systems Administrator',
		'dates' : '2001 - 2001',
		'location' : 'San Francisco, CA',
		'description' : '<li>Built, deployed and managed all servers and clients in Windows NT domain</li>'
	}
	]
};

var education = {
	'schools' : [
	{
		'name' : 'University of California',
		'location' : 'Santa Barbara, CA',
		'degree' : '100 units towards BS',
		'majors' : ['Computer Science'],
		'dates' : '1990 - 1993',
		'url' : 'https://www.ucsb.edu' //TODO get url links working
	}
	],
	'onlineCourses' : [
	{
		'title' : 'Front-End Web Developer Nanodegree',
		'school' : 'Udacity',
		'dates' : '2016',
		'url' : 'https://www.udacity.com'
	},
	{
		'title' : 'Startup Engineering',
		'school' : 'Stanford',
		'dates' : '2013',
		'url' : 'https://www.coursera.org/course/startup'
	}
	]
};


var project = {
	'projects' : [
	{
		'title' : 'Portfolio',
		'dates' : '2015',
		'description' : '<li>Replicated design from mockup PDF file using HTML and CSS.</li><li>Utilized a grid-based layout using the Bootstrap framework to make the page fully responsive.</li>',
		'images' : ['http://fillmurray.com/300/200','http://lorempixel.com/300/200/nightlife/']
	},
	{
		'title' : 'Resume',
		'dates' : '2015',
		'description' : '<li>Online resume that showcases my ability to use Javascript to dynamically build a web page.</li><li>Created all data in JSON, then wrote functions that combine the data with pre-written HTML and CSS templates.</li>',
		'images' : ['./images/resume1.png','./images/resume2.png']
	},
	{
		'title' : 'Classic Arcade Game Clone',
		'dates' : '2015',
		'description' : '<li>Clone of the classic video game Frogger. Udacity provided the art assets and game engine.</li><li>Coded player, enemies and other game entities in Javascript’s object-oriented pseudo-classical style.</li><li>Created enemy subclasses with different movement patterns and sprites (edited art assets in GIMP).</li>',
		'images' : ['http://fillmurray.com/300/202','http://lorempixel.com/300/202/nightlife/']
	},
	{
		'title' : 'Website Optimization',
		'dates' : '2015',
		'description' : '<li>Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90.</li><li>Eliminated inefficiencies in the website’s scroll animation. Site now scrolls at 60 frames per second.</li>',
		'images' : ['http://fillmurray.com/300/199','http://lorempixel.com/300/203/nightlife/']
	},
	{
		'title' : 'Neighborhood Map Project',
		'dates' : '2015',
		'description' : '<li>Single page, responsive application built with Knockout.js framework and hosted on GitHub Pages.</li><li>Developed a full-page map that loads popular breweries and beer gardens in Oakland, CA.</li><li>User can view Yelp information for each location (retrieved by AJAX request to Yelp API).</li>',
		'images' : ['http://fillmurray.com/300/204','http://lorempixel.com/300/204/nightlife/']
	},
	{
		'title' : 'Feed Reader Testing',
		'dates' : '2015',
		'description' : '<li>Used the Jasmine Javascript testing framework to create unit tests for a webpage supplied by Udacity.</li>',
		'images' : ['http://fillmurray.com/300/205','http://lorempixel.com/300/205/nightlife/']
	},
	]
};

bio.display = function() {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedName);

	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#role').append(formattedRole);

	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').append(formattedEmail);
	$('#footerContacts').append(formattedEmail);

	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').append(formattedMobile);
	$('#footerContacts').append(formattedMobile);

	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').append(formattedGithub);
	$('#footerContacts').append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$('#topContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedLocation);
	$('#footerContacts').append(formattedLocation);

	var formattedPic = HTMLbioPic.replace('%data%', bio.picture);
	$('#header').append(formattedPic);

	var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcome);
	$('#header').append(formattedWelcome);

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (var i=0;i<bio.skills.length;i++) {
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkills);
		}
	};
};

work.display = function() {
	for (var job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		$('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);

		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedWorkDescription);
	};
};

education.display = function() {
	for (var school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedSchoolLocation);

		for (var major in education.schools[school].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]);
			$('.education-entry:last').append(formattedSchoolMajor);
		};
	};
	$('#education').append(HTMLonlineClasses);
	for (var course in education.onlineCourses) {
		$('#education').append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		$('.education-entry:last').append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
		$('.education-entry:last').append(formattedOnlineURL);
	};
};


project.display = function() {
	for (var example in project.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedProjectsTitle = HTMLprojectTitle.replace('%data%', project.projects[example].title);
		$('.project-entry:last').append(formattedProjectsTitle);

		var formattedProjectsDates = HTMLprojectDates.replace('%data%', project.projects[example].dates);
		$('.project-entry:last').append(formattedProjectsDates);

		var formattedProjectsDesc = HTMLprojectDescription.replace('%data%', project.projects[example].description);
		$('.project-entry:last').append(formattedProjectsDesc);

		var len = project.projects[example].images.length
		for (var i = 0; i < len; i++) {
			var formattedProjectsImages = HTMLprojectImage.replace('%data%', project.projects[example].images[i]);
			$('.project-entry:last').append(formattedProjectsImages);
		}
	}
};

bio.display();
work.display();
education.display();
project.display();

$('#mapDiv').append(googleMap);

// function inName() {

// 	oldName = oldName.trim().split(" ");
// 	oldName[1] = oldName[1].toUpperCase();
// 	oldName[0] = oldName[0].slice(0,1).toUpperCase() + oldName[0].slice(1).toLowerCase();
//     return oldName[0] + " " + oldName[1];
// };

// var oldName = $("#name").text();

// $("#main").append(internationalizeButton);


