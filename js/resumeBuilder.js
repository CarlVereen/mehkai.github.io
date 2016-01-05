var bio = {
	"name" : "Carl Vereen",
	"role" : "Front End Web Developer",
	"contacts": {
		"mobile": "720-270-8840",
    "email": "carlvereen@gmail.com",
    "github": "Mehkai",
    "twitter": "@pdjoy98",
    "blog": "Http://www.carlvereen.com",
    "location":"Denver, CO US"
		},
	"biopic": "images/face.png",
	"welcomeMessage": "Passionate about having fun, and solving problems!",
	"skills": ["HTML5", "JavaScript", "CSS", "knockout", "jQuery", ],
  "displayName" : function bioName () {
       var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
       var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
       var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
       var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
       $('#header').append(formattedPic);
       $('#header').append(formattedWelcomeMessage);
       $('#header').prepend(formattedRole);
       $('#header').prepend(formattedHeaderName);


     },
  "displayContact" : function bioContact () {
       var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
       var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
       var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
       var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
       var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
       var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
       //$('#topContacts').append(HTMLcontactGeneric);
       $('#topContacts:last').prepend(formattedMobile);
       $('#topContacts:last').append(formattedEmail);
       $('#topContacts:last').append(formattedTwitter);
       $('#topContacts:last').append(formattedGithub);
       //$('#topContacts:last').append(formattedBlog);
       $('#topContacts:last').append(formattedLocation);
       //$('#topContacts').append(HTMLcontactGeneric);
       $('#footerContacts:last').prepend(formattedMobile);
       $('#footerContacts:last').append(formattedEmail);
       $('#footerContacts:last').append(formattedTwitter);
       $('#footerContacts:last').append(formattedGithub);
       //$('#topContacts:last').append(formattedBlog);
       $('#footerContacts:last').append(formattedLocation);

  },
	"displaySkills" : function bioDisplay () {
        if(bio.skills.length > 0){
        $('#header').append(HTMLskillsStart);
        for(var skills in bio.skills){
        var formattedSkills = HTMLskills.replace('%data%',bio.skills[skills]);
        $('#skills').append(formattedSkills);

         }
       }
	}
};

var education = {
 "schools" : [
  {
   "name" : "Northern Arizona University",
   "location" : "Flagstaff, Arizona, US",
   "degree" : "Bachelor of Arts In Liberal Studies, Mathematics",
   "majors" : ["Mathematics", "Secondary Education"],
   "dates" : 2005,
   "url" : "http://www.NAU.edu",

  },
  {
   "name" : "University of Arizona ",
   "location" : "Tucson, Arizona, US",
   "degree" : "Bachelor of Arts In Liberal Studies, Mathematics",
   "majors" : ["Mathematics", "Secondary Education"],
   "dates" : 2000,
   "url" : "http://www.uofA.edu",
  }
  ],

  "onlineCourses": [
  {
   "title" : "NanoDegree Front End Web Development",
   "name": "Udacity",
   "date" : 2015,
   "url" : "HTTP://www.Udacity.com",
   "classes" : ["HTML/CSS", "JavaScript"],
   "details" : "This course taught front end tools including HTML, CSS and JavaScript. Additionally I had to complete high quality projects that were graded on a rubric"
  },
  {
   "title" : "Front End Web Development",
   "name": "Tree House Island",
   "date" : 2015,
   "url" : "HTTP://www.teamtreehouse.com",
   "classes" : ["Front End Web Development", "IOS Development", "PHP", "JavaScript"],
   "details" : "This course took me from beginnig to end of all the skills used in Front End Web Development. Coursework was completed through project style learning."
  }
 ],
 "displaySchool" : function educationSchoolDisplay() {
  for(var school in education.schools){
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[0]);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    var formattedSchoolWithDegree = formattedSchoolName + formattedSchoolDegree;
    $('.education-entry:last').append(formattedSchoolWithDegree);
    $('.education-entry:last').append(formattedSchoolDates);
    $('.education-entry:last').append(formattedSchoolLocation);
    $('.education-entry:last').append(formattedSchoolMajor);
   }
 },
 "displayOnlineSchool" : function educationOnlineDisplay() {
  for(var courses in education.onlineCourses){
    $('#education').append(HTMLschoolStart);
    //var formattedOnlineClasses = HTMLonlineClasses.replace("%data%",education.onlineCourses[courses].classes[0]);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[courses].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[courses].name);
    var formattedOnlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[courses].date);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[courses].url);
    var formattedSubjectDetails = HTMLonlineSubjectDetails.replace("%data%",education.onlineCourses[courses].details);
    var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool + formattedSubjectDetails;

    $('.education-entry:last').append(HTMLonlineClasses);
    $('.education-entry:last').append(formattedTitleSchool);
    $('.education-entry:last').append(formattedOnlineDates);
    $('.education-entry:last').append(formattedOnlineURL);

 }
}
};

var work = {
   "jobs" : [
	 {
    "employer" : "Sprint",
    "title" : "Program Project Manager",
    "location" : "Denver, Colorado, US",
    "dates" : "2008 - Current",
    "description" : "Project and task management, maintaining strong attention to detail. Excellent communication and interpersonal skills, able to provide clear communication to a wide audience on procedures, projects and status. Focus on analytical/problem solving skills",
    "duties" : ["Project and task management skills", "Maintains strong attention to detail", "Strong communication and interpersonal skills", "Strong dedication to documenting processes, procedures, projects and status", "Strong analytical/problem solving skills"]
	 },
   {
     "employer" : "Apartment Life",
     "title" : "Event Coordinator",
     "location" : "Flagstaff, Arizona, US",
     "dates" : "2004 - 2008",
     "description" : "Event planning for 300+ unit Apartment complex, including reporting on attendance to events and retention of tennants",
     "duties" : ["Event planning for 300+ unit Apartment complex", "Monthly Status Reporting"]
   }
   ],
   "display" : function displayWork(){
    for(var job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
      var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $(".work-entry:last").append(formattedWorkDates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $(".work-entry:last").append(formattedLocation);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
   }
 };


var projects = {
   "workProjects": [
   {
    "title" : "ICP",
    "dates" : "Ongoing",
    "description" : "Develop a program to support compensation for sales activities",
    "images" : "images/p1_148x148.gif",
    "skills" : ["communication", "interpersonal"],
   },
   {
    "title" : "Classic Arcade Game Clone",
    "dates" : "Completed 2015",
    "description" : "Created a Classic Arcade game clone of frogger. I created this game using JavaScript, HTML5 Canvas and CSS. This is my first javascript game and I added a lot of new functionality that I had never programmed before. Including side scrolling, enemy regeneration and working with the canvas.",
    "images" : "arcadeGame/projectScreenShot_100.jpg",
    "skills" : ["JavaScript", " HTML5 Canvas", " Object Oriented Programming", " CSS"],
    }
   ],
  "display" : function projectDisplay() {
    for(var project in projects.workProjects){
      var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.workProjects[project].title);
      var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.workProjects[project].dates);
      var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.workProjects[project].description);
      var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.workProjects[project].images);
			var formattedprojectSkills = HTMLprojectSkills.replace("%data%", projects.workProjects[project].skills);
      $('#projects').append(HTMLprojectStart);
      $(".project-entry:last").append(formattedprojectTitle);
      $(".project-entry:last").append(formattedprojectDates);
      $(".project-entry:last").append(formattedprojectDescription);
      $(".project-entry:last").append(formattedprojectSkills);
			$(".project-entry:last").append(formattedprojectImage);


   }
}



};

education.displaySchool();
education.displayOnlineSchool();
projects.display();
bio.displayName();
bio.displaySkills();
bio.displayContact();
work.display();

$('#mapDIV').append(googleMap);
