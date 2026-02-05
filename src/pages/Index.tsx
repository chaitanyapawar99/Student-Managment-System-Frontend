@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #0f172a, #312e81);
  min-height: 100vh;
  color: white;
}

/* LAYOUT */
.app-layout {
  display: flex;
  min-height: 100vh;
}

/* SIDEBAR */
.sidebar {
  width: 240px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px);
  padding: 25px;
}

.sidebar h2 {
  margin-bottom: 40px;
  font-size: 20px;
}

.sidebar button {
  background: none;
  border: none;
  color: white;
  text-align: left;
  padding: 12px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: 0.3s;
}

.sidebar button:hover {
  background: rgba(255,255,255,0.15);
}

/* CONTENT */
.content {
  flex: 1;
  padding: 40px;
}

/* CARD */
.card {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(20px);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
  animation: fadeIn 0.6s ease;
  max-width: 600px;
  margin: auto;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* INPUTS */
input {
  width: 100%;
  padding: 14px;
  margin-top: 14px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
}

/* BUTTONS */
button.main {
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  background: linear-gradient(135deg, #6366f1, #9333ea);
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button.main:hover {
  transform: translateY(-2px);
}

/* LIST */
.list-item {
  background: rgba(255,255,255,0.15);
  padding: 14px;
  border-radius: 12px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  transition: 0.3s;
}

.list-item:hover {
  transform: scale(1.02);
}
