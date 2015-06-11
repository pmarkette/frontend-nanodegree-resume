var bio = {
	name : "Paul Markette",
	role : "Front-End Developer",
	email : "paul@markette.net",
	picture : "https://avatars1.githubusercontent.com/u/3871071?v=3&s=460",
	welcome : "Welcome to my resume",
	skills : ["html", " css", " js"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#header").append(formattedEmail);

var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
$("#header").append(formattedPic);

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcome);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedSkills);