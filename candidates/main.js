function showCandidateDetails(id) {
	var index = id[id.length -1];
	var candidateId = "candidate" + index;

	var allCandidates = document.getElementsByClassName("candidate-info");
	for (var i = 0; i < allCandidates.length; i++) {
		allCandidates[i].style.display = "none";
	}

	document.getElementById(candidateId).style.display = "block";
}