var bio = {
	"name" : "Paul Markette",
	"role" : "Front-End Developer",
	"contacts": {
		"email" : "paul@markette.net",
		"mobile" : "510-388-9229",
		"github" : "pmarkette",
		"twitter" : "@paulmarkette",
		"location" : "Oakland"
	},
	"picture" : "./images/profile.jpg",
	"welcome" : "Welcome to my resume",
	"skills" : ["HTML", "CSS", "Javascript", "Git/Github", "Jasmine", "Networking", "Linux"]
};

var work = {
	"jobs" : [
	{
		"employer" : "Honeywell",
		"title" : "Senior Project Engineer",
		"dates" : "2013 - Present",
		"location" : "Foster City, CA",
		"description" : "Program commercial building automation systems",
	},
	{
		"employer" : "Adura Technologies",
		"title" : "Senior Sales Engineer",
		"dates" : "2011 - 2012",
		"location" : "San Francisco, CA",
		"description" : "Performed technical demonstrations, provided training to partners, prepared project proposals",
	},
	{
		"employer" : "Controlco",
		"title" : "Application Engineer",
		"dates" : "2006 - 2011",
		"location" : "Oakland, CA",
		"description" : "Programed commercial building automation systems"
	},
	{
		"employer" : "Honeywell",
		"title" : "Project Engineer",
		"dates" : "2003 - 2006",
		"location" : "Foster City, CA",
		"description" : "Programed commercial building automation systems"
	},
	{
		"employer" : "Epicentric",
		"title" : "Systems Administrator",
		"dates" : "2001 - 2003",
		"location" : "San Francisco, CA",
		"description" : "Migrated servers and clients from Windows NT domain to Windows 2000 Active Directory"
	},
	{
		"employer" : "Simplexis",
		"title" : "Systems Administrator",
		"dates" : "2001 - 2001",
		"location" : "San Francisco, CA",
		"description" : "Built, deployed and managed all servers and clients in Windows NT domain"
	}
	]
};

var education = {
	"schools" : [
	{
		"name" : "University of California",
		"location" : "Santa Barbara, CA",
		"degree" : "100 units towards BS",
		"majors" : ["Computer Science"],
		"dates" : "1990 - 1993",
		"url" : "https://www.ucsb.edu" //TODO get url links working
	}
	],
	"onlineCourses" : [
	{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates" : "2015",
		"url" : "https://www.udacity.com"
	},
	{
		"title" : "Startup Engineering",
		"school" : "Stanford",
		"dates" : "2013",
		"url" : "https://www.coursera.org/course/startup"
	}
	] 
};


var project = {
	"projects" : [ //TODO Finish the project objects
	{	
		"title" : "Portfolio",
		"dates" : "2015", 
		"description" : "Portfolio to show off various projects. Mobile-first responsive design built with Bootstrap and Jquery.",
		"images" : ["http://fillmurray.com/300/200","http://lorempixel.com/300/200/nightlife/"]
	},
	{	
		"title" : "Resume",
		"dates" : "2015", 
		"description" : "Wrote all the data in JSON, then used javascript and jQuery to dynamically build the DOM.",
		"images" : ["http://fillmurray.com/300/201","http://lorempixel.com/300/201/nightlife/"]
	},
	{	
		"title" : "Classic Arcade Game Clone",
		"dates" : "2015", 
		"description" : "Used Object-Oriented JavaScript and HTML5 Canvas to recreate a classic video game.",
		"images" : ["http://fillmurray.com/300/202","http://lorempixel.com/300/202/nightlife/"]
	},
	{	
		"title" : "Website Optimization",
		"dates" : "2015", 
		"description" : "Optimized a website so that it achieves a target PageSpeed score and runs at 60 frames per second.",
		"images" : ["http://fillmurray.com/300/199","http://lorempixel.com/300/203/nightlife/"]
	},
	{	
		"title" : "Neighborhood Map Project",
		"dates" : "2015", 
		"description" : "A single-page map application.",
		"images" : ["http://fillmurray.com/300/204","http://lorempixel.com/300/204/nightlife/"]
	},
	{	
		"title" : "Feed Reader Testing",
		"dates" : "2015", 
		"description" : "Used Jasmine to write tests against a pre-existing application.",
		"images" : ["http://fillmurray.com/300/205","http://lorempixel.com/300/205/nightlife/"]
	},					
	]
};

bio.display = function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#role").append(formattedRole);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedPic);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	$("#header").append(formattedWelcome);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var i=0;i<bio.skills.length;i++) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkills);
		}
	};
};

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	};
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		for (major in education.schools[school].majors) {
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		};
	};
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	};
};


project.display = function() {
	for (example in project.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectsTitle = HTMLprojectTitle.replace("%data%", project.projects[example].title);
		$(".project-entry:last").append(formattedProjectsTitle);

		var formattedProjectsDates = HTMLprojectDates.replace("%data%", project.projects[example].dates);
		$(".project-entry:last").append(formattedProjectsDates);

		var formattedProjectsDesc = HTMLprojectDescription.replace("%data%", project.projects[example].description);
		$(".project-entry:last").append(formattedProjectsDesc);

		var len = project.projects[example].images.length
		for (var i = 0; i < len; i++) {
			var formattedProjectsImages = HTMLprojectImage.replace("%data%", project.projects[example].images[i]);
			$(".project-entry:last").append(formattedProjectsImages);
		}
	}
};

bio.display();
work.display();
education.display();
project.display();

$("#mapDiv").append(googleMap);

// function inName() {

// 	oldName = oldName.trim().split(" ");
// 	oldName[1] = oldName[1].toUpperCase();
// 	oldName[0] = oldName[0].slice(0,1).toUpperCase() + oldName[0].slice(1).toLowerCase();
//     return oldName[0] + " " + oldName[1];
// };

// var oldName = $("#name").text();

// $("#main").append(internationalizeButton);	


