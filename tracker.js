document.getElementById("tryNow").addEventListener("click", function () {
  document.getElementById("trackerSection").style.display = "block";
  window.scrollTo(0, document.getElementById("trackerSection").offsetTop);
});

document
  .getElementById("workoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const exercise = document.getElementById("exercise").value;
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
    const weight = document.getElementById("weight").value;
    const goal = document.getElementById("goal").value;

    let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
    workouts.push({ exercise, sets, reps, weight, goal });
    localStorage.setItem("workouts", JSON.stringify(workouts));

    document
      .getElementById("workoutForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the form data
        const exercise = document.getElementById("exercise").value;
        const sets = document.getElementById("sets").value;
        const reps = document.getElementById("reps").value;
        const weight = document.getElementById("weight").value;
        const goal = document.getElementById("goal").value;

        // Save data to localStorage
        let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
        workouts.push({ exercise, sets, reps, weight, goal });
        localStorage.setItem("workouts", JSON.stringify(workouts));

        // Show the success pop-up
        showPopupMessage();

        // Optionally reset the form
        document.getElementById("workoutForm").reset();
      });

    // Show pop-up function
    function showPopupMessage() {
      const popup = document.getElementById("popupMessage");
      popup.classList.remove("hidden");
    }

    // Hide pop-up when clicking the button
    document
      .getElementById("closePopup")
      .addEventListener("click", function () {
        const popup = document.getElementById("popupMessage");
        popup.classList.add("hidden");
      });

    let recommendations = [];
    if (goal === "muscle") {
      recommendations.push(
        "Focus on compound lifts like squats and bench press."
      );
      recommendations.push("Eat a high-protein diet.");
    } else if (goal === "fatloss") {
      recommendations.push("Include HIIT and cardio in your routine.");
      recommendations.push("Follow a calorie-deficit diet.");
    }

    document.getElementById("workoutRecommendations").innerHTML =
      recommendations.map((item) => `<li>${item}</li>`).join("");

    updateProgressChart();
  });

function updateProgressChart() {
  let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
  const labels = [];
  const data = [];

  workouts.forEach((workout) => {
    labels.push(workout.exercise);
    data.push(workout.sets * workout.reps * workout.weight);
  });

  const ctx = document.getElementById("progressChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Total Volume (kg)",
          data: data,
          backgroundColor: "rgba(199, 255, 87, 0.2)",
          borderColor: "rgba(199, 255, 87, 1)",
          borderWidth: 1,
        },
      ],
    },
  });
}

// Initialize chart on page load
updateProgressChart();
