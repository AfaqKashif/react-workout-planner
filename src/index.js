import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [exercise, setExercise] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = () => {
    if (!exercise.trim()) return;
    setWorkouts([...workouts, exercise]);
    setExercise("");
  };

  const removeWorkout = (index) => {
    setWorkouts(workouts.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🏋️ Workout Planner</h1>
        <p style={styles.subtitle}>Plan. Train. Improve.</p>

        <div style={styles.inputRow}>
          <input
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            placeholder="Add exercise (e.g. Push-ups)"
            style={styles.input}
          />
          <button onClick={addWorkout} style={styles.addBtn}>
            +
          </button>
        </div>

        {workouts.length === 0 && (
          <p style={styles.empty}>No workouts added yet</p>
        )}

        <div style={styles.list}>
          {workouts.map((w, i) => (
            <div key={i} style={styles.item}>
              <span>{w}</span>
              <button onClick={() => removeWorkout(i)} style={styles.deleteBtn}>
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: 30,
    borderRadius: 20,
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
  },
  title: {
    margin: 0,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 20,
  },
  inputRow: {
    display: "flex",
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    border: "1px solid #d1d5db",
    fontSize: 14,
  },
  addBtn: {
    width: 45,
    borderRadius: 10,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontSize: 22,
    cursor: "pointer",
  },
  list: {
    marginTop: 20,
  },
  item: {
    background: "#f3f4f6",
    padding: 12,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  deleteBtn: {
    border: "none",
    background: "transparent",
    fontSize: 16,
    cursor: "pointer",
    color: "#ef4444",
  },
  empty: {
    textAlign: "center",
    color: "#9ca3af",
    marginTop: 15,
  },
};

ReactDOM.render(<App />, document.getElementById("root"));
