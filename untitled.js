education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolUrl= HTMLschoolUrl.replace("%data%",education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolUrl);
	}
};
console.log(education.display());
$("#education").append(education.display());
