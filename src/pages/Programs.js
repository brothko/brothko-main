import React from 'react';
import { Link } from 'react-router-dom';

const Programs = () => {
    const programs = [
        {
            title: "Full-Stack Development",
            description: "Master both frontend and backend development with hands-on projects and real-world applications using modern technologies.",
            icon: "💻",
            duration: "12 weeks",
            level: "Intermediate",
            features: ["React & Node.js", "Database Design", "API Development", "Deployment"]
        },
        {
            title: "Mobile App Development",
            description: "Learn to build cross-platform mobile applications using React Native and Flutter with focus on performance and user experience.",
            icon: "📱",
            duration: "10 weeks",
            level: "Beginner",
            features: ["React Native", "Flutter", "State Management", "App Store Deployment"]
        },
        {
            title: "Cloud Computing & DevOps",
            description: "Get certified in cloud technologies and learn to deploy scalable applications with modern DevOps practices.",
            icon: "☁️",
            duration: "14 weeks",
            level: "Advanced",
            features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD Pipelines"]
        },
        {
            title: "UI/UX Design Mastery",
            description: "Learn modern design principles and create beautiful, intuitive interfaces that drive user engagement and conversion.",
            icon: "🎨",
            duration: "8 weeks",
            level: "Beginner",
            features: ["Figma", "User Research", "Prototyping", "Design Systems"]
        },
        {
            title: "Java Development with Spring Boot",
            description: "Build enterprise-grade applications with Java and Spring Boot. Learn RESTful APIs, microservices architecture, and modern Java development practices for scalable backend systems.",
            icon: "☕",
            duration: "14 weeks",
            level: "Intermediate",
            features: [
                "Java 17+ & Spring Boot 3",
                "RESTful API Development",
                "Spring Security & JWT",
                "Microservices Architecture",
                "Database Integration (JPA/Hibernate)",
                "Testing with JUnit & Mockito",
                "Docker Containerization"
            ]
        },
        {
            "title": "Data Science",
            "description": "Dive into the world of data science with Python. Learn to analyze, visualize, and model data to uncover insights and drive decisions.",
            "icon": "📊",
            "duration": "12 weeks",
            "level": "Intermediate",
            "features": [
                "Python for Data Analysis",
                "Pandas & NumPy",
                "Data Visualization with Matplotlib /Seaborn",
                "Machine Learning with Scikit-learn",
                "Statistical Modeling",
                "Big Data with Spark",
                "Jupyter Notebooks"
            ]
        }
    ];

    // NEW: Function to open Google Form
    const handleEnrollNow = () => {
        window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLSd0PcSYTjFWLKrLquthOxKudTUCJgK7vv-p8RsT1risBeWFSA/viewform?usp=dialog',
            '_blank',
            'noopener,noreferrer'
        );
    };

    // Function to scroll to "Our Featured Programs" section
    const handleStartLearningClick = () => {
        const section = document.getElementById('featured-programs');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section className="hero" style={{ padding: '12rem 0 6rem' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1>Internship Training Programs</h1>
                        <p>
                            Transform your career with our comprehensive virtual training programs
                            designed for the modern tech professional. Learn from industry experts
                            and build real-world skills.
                        </p>
                        <div className="hero-buttons">
                           <Link 
                                to="/programs#featured-programs" 
                                className="primary-btn" 
                                onClick={handleStartLearningClick}
                            >
                                Start Learning
                            </Link>
                            <Link to="/about" className="secondary-btn">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title " id="featured-programs">Our Featured Programs</h2>
                    <p className="section-subtitle">
                        Choose from our carefully curated programs designed to give you the skills
                        employers are looking for in today's competitive tech landscape.
                    </p>

                    <div className="features-grid">
                        {programs.map((program, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                    <span>{program.icon}</span>
                                </div>
                                <h3>{program.title}</h3>
                                <p className="text-lg font-semibold text-purple-600 mb-2">{program.duration} • {program.level}</p>
                                <p>{program.description}</p>
                                <ul className="mt-4 text-left text-sm text-gray-600 space-y-1">
                                    {program.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-green-500">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {/* UPDATED: Enroll Now button now opens Google Form */}
                                <button
                                    onClick={handleEnrollNow}
                                    className="btn btn-primary mt-6"
                                    style={{ width: '100%' }}
                                >
                                    Enroll Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What Makes Our Programs Different?</h2>
                        <p className="section-subtitle">
                            We don't just teach theory. Our programs are built with industry input
                            to ensure you gain practical skills that lead to real career opportunities.
                        </p>
                    </div>

                    <div className="program-benefits">
                        <div className="benefit-item">
                            <span className="benefit-icon">🎯</span>
                            <h3>Industry-Relevant Curriculum</h3>
                            <p>Designed with input from hiring managers and industry leaders</p>
                        </div>

                        <div className="benefit-item">
                            <span className="benefit-icon">👥</span>
                            <h3>Mentorship & Support</h3>
                            <p>Personalized guidance from experienced mentors throughout your journey</p>
                        </div>

                        <div className="benefit-item">
                            <span className="benefit-icon">💼</span>
                            <h3>Career Services</h3>
                            <p>Resume building, interview prep, and direct connections to employers</p>
                        </div>

                        <div className="benefit-item">
                            <span className="benefit-icon">🌍</span>
                            <h3>Global Community</h3>
                            <p>Join a worldwide network of learners and professionals</p>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-icon">💻</span>
                            <h3>Real-World Projects</h3>
                            <p>Gain hands-on experience by working on real-world projects that matter.</p>
                        </div>

                        <div className="benefit-item">
                            <span className="benefit-icon">🏆</span>
                            <h3>Certificate of Internship</h3>
                            <p>Certificate of Internship upon completing your task and assessments.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Programs;