
        document.getElementById("workoutForm").addEventListener("submit", function(event) {
            event.preventDefault();

            let age = document.getElementById("age").value;
            let goal = document.getElementById("goal").value;
            let trainingLevel = document.getElementById("trainingLevel").value;
            let resultText = document.getElementById("resultText");
            let workoutResult = document.getElementById("workoutResult");

            // Workout Plan Logic
            let workoutPlan = "";

            if (age < 12) {
                workoutPlan = "Sorry, you must be at least 12 years old to start a structured workout plan.";
            } else if (goal === "muscle_gain") {
                if (trainingLevel === "beginner") {
                    workoutPlan = "🏋️‍♂️ Try a **3-Day Full-Body Workout** with compound lifts.";
                } else if (trainingLevel === "intermediate") {
                    workoutPlan = "🔥 Follow a **4-Day Upper/Lower Split** for balanced muscle growth.";
                } else {
                    workoutPlan = "💪 Go for a **5-Day Bodybuilding Split** focusing on hypertrophy.";
                }
            } else if (goal === "fat_loss") {
                if (trainingLevel === "beginner") {
                    workoutPlan = "🏃 Start with a **30-Min HIIT Routine** for fat burning.";
                } else if (trainingLevel === "intermediate") {
                    workoutPlan = "🔥 Try a **5-Day Fat Loss Plan** with strength and cardio.";
                } else {
                    workoutPlan = "⚡ Go for a **6-Day HIIT & Strength Program** for maximum results.";
                }
            } else if (goal === "endurance") {
                if (trainingLevel === "beginner") {
                    workoutPlan = "🏃 Try **Circuit Training** with bodyweight exercises.";
                } else if (trainingLevel === "intermediate") {
                    workoutPlan = "🔥 Mix **Running & HIIT Workouts** to boost endurance.";
                } else {
                    workoutPlan = "🚀 Go for an **Advanced Marathon Prep Program**.";
                }
            } else if (goal === "strength") {
                if (trainingLevel === "beginner") {
                    workoutPlan = "🏋️ Start with a **5x5 Strength Training Routine**.";
                } else if (trainingLevel === "intermediate") {
                    workoutPlan = "💪 Follow a **4-Day Powerlifting Split**.";
                } else {
                    workoutPlan = "🔥 Try an **Advanced Olympic Lifting Program**.";
                }
            }

            // Display Result
            resultText.innerHTML = workoutPlan;
            workoutResult.classList.remove("hidden");
        });
    