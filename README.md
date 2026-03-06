# 🎓 Career Handbook & Roadmap Builder

A premium, interactive web application designed to help students explore career paths, view specialized diploma courses, and build personalized career roadmaps. All data is extracted directly from the professional Career Handbook PDF.

## 🚀 Features
- **Interactive Career Explorer**: Detailed insights into Science, Commerce, Arts, Law, and more.
- **Course Directory**: Comprehensive list of courses after Diploma with duration, eligibility, and top colleges.
- **Personalized Roadmap**: A quiz-based system to recommend career paths based on user interests.
- **Integrated PDF Viewer**: Read and download the original Career Handbook directly in the app.
- **Modern UI**: Dark mode support, glassmorphism effects, and premium animations.

---

## 🛠️ Prerequisites
To run this application on any Windows, Linux, or macOS machine, you only need:
1.  **Python 3.x**: Installed and added to your system PATH.
    - [Download Python here](https://www.python.org/downloads/)
2.  **Web Browser**: Chrome, Firefox, Edge, or Safari.

---

## 🏃‍♂️ How to Run (Step-by-Step)

### **Step 1: Clone or Copy the Code**
Copy the entire `CareerRoadmapDemo` folder to your new machine.

### **Step 2: Open Terminal / Command Prompt**
- **Windows**: Press `Win + R`, type `cmd` or `powershell`, and hit Enter.
- **Linux/macOS**: Open your preferred Terminal.

### **Step 3: Navigate to the Project Folder**
Use the `cd` command to enter the project directory:
```bash
# Example for Windows
cd path\to\your\folder\CareerRoadmapDemo

# Example for Linux/macOS
cd /path/to/your/folder/CareerRoadmapDemo
```

### **Step 4: Start the Local Server**
Run the built-in Python HTTP server:
```bash
python -m http.server 8000
```
*Note: If `python` doesn't work on Linux, try `python3 -m http.server 8000`.*

### **Step 5: View the Application**
Open your web browser and navigate to:
**[http://localhost:8000](http://localhost:8000)**

---

## 📁 Project Structure
- `index.html`: The main structure of the application.
- `css/styles.css`: Premium styling, animations, and Dark Mode logic.
- `js/app.js`: Core logic for navigation, modal handling, and roadmap generation.
- `js/career-data.js`: Structured career data extracted from the PDF.
- `images/`: Folder containing assets like the hero banner.
- `Career Handbook.pdf`: The source handbook for all data.

---

## 🛑 How to Stop
To stop the server, go back to your terminal window and press:
**`Ctrl + C`**

---

## 📄 License
This project is created for educational and career guidance purposes.
