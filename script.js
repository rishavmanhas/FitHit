document.getElementById("menu-btn").addEventListener("click", function() {
            document.getElementById("mobile-menu").classList.toggle("hidden");
        });

       

        document.getElementById("workoutForm").addEventListener("submit", function(event) {
            event.preventDefault();
    
            let age = document.getElementById("age").value;
            let goal = document.getElementById("goal").value;
            let trainingLevel = document.getElementById("trainingLevel").value;
    
            if (age < 12) {
                document.getElementById("result").innerHTML = 
                    "<span class='text-red-500 font-bold'>❌ Age must be 12 or older.</span>";
                return;
            }
    
            let workoutPlan = "";
    
            if (goal === "muscle_gain") {
                if (trainingLevel === "beginner") {
                    workoutPlan = "Try the 3-Day Full-Body Workout Plan.";
                } else if (trainingLevel === "intermediate") {
                    workoutPlan = "Follow the 4-Day Upper/Lower Split.";
                } else {
                    workoutPlan = "Use the 5-Day Bodybuilding Split.";
                }
            } else if (goal === "fat_loss") {
                if (trainingLevel === "beginner") {
                    workoutPlan = "Start with a 30-Min HIIT Routine.";
                } else if (trainingLevel === "intermediate") {
                    workoutPlan = "Try the 5-Day Fat Loss Plan with Cardio.";
                } else {
                    workoutPlan = "Use the 6-Day HIIT & Strength Program.";
                }
            } else if (goal === "endurance") {
                workoutPlan = "Focus on Circuit Training and Running Workouts.";
            } else if (goal === "strength") {
                workoutPlan = "Use a 5x5 Strength Training Routine.";
            }
    
            document.getElementById("result").innerHTML = 
                "✅ Your recommended workout plan: <br><b>" + workoutPlan + "</b>";
        });

        