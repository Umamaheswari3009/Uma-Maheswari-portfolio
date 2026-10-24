import os
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DIST_DIR = os.path.join(BASE_DIR, "dist")
app = Flask(__name__, static_folder=DIST_DIR, static_url_path="")
CORS(app)

PORTFOLIO_DATA = {
    "name": "Uma Maheswari V",
    "title": "Aspiring MERN Stack Developer",
    "email": "umadeepa2003@gmail.com",
    "phone": "9597073119",
    "linkedin": "https://linkedin.com/in/v-uma-maheswari-517849356",
    "github": "https://github.com/Umamaheswari3009",
    "resumeUrl": "/resume.pdf",
    "summary": "Aspiring MERN Stack Developer proficient in React.js, Node.js, Express.js, and MongoDB, with additional full-stack experience in Python, Java, and SQL gained across two development internships and multiple certified workshops. Comfortable building REST APIs, integrating databases, and delivering responsive, end-to-end web applications with a strong foundation in teamwork and adaptable learning.",
    "skills": {
        "MERN Stack": ["MongoDB", "Express.js", "React.js", "Node.js"],
        "Programming": ["Python", "Java", "JavaScript (ES6+)", "SQL"],
        "Frontend": ["HTML", "CSS", "Bootstrap"],
        "Backend": ["REST APIs", "JWT"],
        "Database": ["MySQL", "MongoDB"],
        "Tools": ["Visual Studio Code", "Git & GitHub", "Eclipse", "Postman"],
        "Soft Skills": ["Teamwork", "Leadership", "Adaptability", "Communication"]
    },
    "experience": [
        {
            "role": "Full Stack Development (Java)",
            "company": "Approtech R&D Solutions Pvt. Ltd. (Online)",
            "period": "June – July 2025",
            "bullets": [
                "Built and tested full-stack web modules using Java and MySQL, contributing to backend logic and database integration.",
                "Collaborated with a development team using Git/GitHub for version control and iterative feature delivery."
            ]
        },
        {
            "role": "Full Stack Development",
            "company": "Retech Solutions Pvt. Ltd. (Online)",
            "period": "March 2024",
            "bullets": [
                "Developed responsive front-end interfaces using HTML, CSS, JavaScript, and React.js components.",
                "Assisted in integrating REST APIs to connect front-end features with backend services."
            ]
        }
    ],
    "projects": [
        {
            "title": "Voice Activated Ordering System for Differently Abled Users",
            "description": "An assistive ordering platform that uses voice-command navigation and processing so differently abled users can place orders hands-free.",
            "bullets": [
                "Built an accessible ordering platform enabling hands-free navigation and order placement through voice commands.",
                "Implemented speech-recognition and command-processing logic in Python to convert voice input into ordering actions."
            ],
            "tags": ["Python", "Speech Recognition", "Accessibility"],
            "githubUrl": "https://github.com/Umamaheswari3009/voice-activated-ordering-system",
            "demoUrl": "https://voice-ordering-uma.vercel.app"
        },
        {
            "title": "E-Commerce Shopping Website",
            "description": "A full-featured online shopping platform with a product catalog, cart, and checkout flow.",
            "bullets": [
                "Built RESTful APIs with Node.js and Express.js to handle product listing, cart operations, and order processing.",
                "Designed a responsive, mobile-friendly UI using React.js and Bootstrap, backed by MongoDB for data storage."
            ],
            "tags": ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
            "githubUrl": "https://github.com/Umamaheswari3009/ecommerce-shopping-website",
            "demoUrl": "https://ecommerce-uma.vercel.app"
        },
        {
            "title": "Social Media App",
            "description": "An application supporting user profiles, posts, and social interactions.",
            "bullets": [
                "Developed a dynamic, component-based UI using React.js and integrated MongoDB for persistent data storage.",
                "Implemented REST API endpoints with JWT-based authentication for secure user login and post management."
            ],
            "tags": ["React.js", "MongoDB", "REST APIs", "JWT"],
            "githubUrl": "https://github.com/Umamaheswari3009/social-media-app",
            "demoUrl": "https://social-media-uma.vercel.app"
        }
    ],
    "certifications": [
        "Java Programming (Internship) — Interpe (October – November 2025)",
        "Full Stack Development (Internship) — Approtech R&D Solutions Pvt. Ltd., Tambaram (June – July 2025)",
        "Full Stack Development (3-Day Workshop) — Guvi & HCL",
        "Full Stack Development (30 Days) — Novitech R&D Private Limited (March – April 2025)",
        "Full Stack Development (Internship) — Retech Solutions Pvt. Ltd. (4th – 18th March 2024)",
        "Career Guidance Session — Grad Guru Innovation, One-Day Webinar (February 2026)",
        "Full Stack MERN Workshop — Nexila Technologies, One-Day Workshop (November 2025)"
    ],
    "education": [
        {
            "school": "St. Joseph College of Engineering",
            "degree": "B.Tech, Information Technology",
            "years": "2022 – 2026",
            "score": "CGPA: 8.04"
        }
    ]
}

@app.route("/api/profile", methods=["GET"])
def get_profile():
    return jsonify(PORTFOLIO_DATA)

@app.route("/api/contact", methods=["POST"])
def handle_contact():
    data = request.get_json() or {}
    name = data.get("name", "")
    email = data.get("email", "")
    message = data.get("message", "")
    print(f"[New Message] From: {name} <{email}>\nMessage: {message}\n")
    return jsonify({"status": "success", "message": "Message received!"}), 200

# Catch-all route to serve the built React frontend
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    if os.path.exists(os.path.join(app.static_folder, "index.html")):
        return send_from_directory(app.static_folder, "index.html")
    return "Portfolio API is running. Build the frontend or visit /api/profile", 200

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
