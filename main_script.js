function showPlan(plan) {
    var planDetails = document.getElementById("planDetails");
    planDetails.style.display = "block";
    switch (plan) {
        case "free":
            planDetails.innerHTML = "<p>Free Plan: Basic access to our lessons</p>";
            break;
        case "good":
            planDetails.innerHTML = "<p>Good Plan: Enhanced access to our lessons</p>";
            break;
        case "elite":
            planDetails.innerHTML = "<p>Elite Plan: Premium access to our lessons</p>";
            break;
        default:
            planDetails.innerHTML = "";
    }
}
