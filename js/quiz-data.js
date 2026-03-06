/**
 * MCQ Quiz Data
 * Questions and Scoring Logic for Career Discovery
 */

const quizData = {
    // Questions specific to "After Class 10th" context
    "10th": [
        {
            id: 1,
            question: "When you see a new gadget or machine, what is your first thought?",
            options: [
                { text: "How does it work? I want to take it apart.", type: "tech", score: 2 },
                { text: "It looks cool! I wonder who designed it.", type: "creative", score: 2 },
                { text: "How much does it cost? Is it a good business?", type: "commerce", score: 2 },
                { text: "How can it help people in their daily lives?", type: "medical", score: 2 }
            ]
        },
        {
            id: 2,
            question: "Which school subject do you enjoy the most?",
            options: [
                { text: "Mathematics & Physics", type: "tech", score: 2 },
                { text: "Drawing & Art", type: "creative", score: 2 },
                { text: "Biology & Environment", type: "medical", score: 2 },
                { text: "Social Studies & Economics", type: "commerce", score: 2 }
            ]
        },
        {
            id: 3,
            question: "In a group project, what role do you usually take?",
            options: [
                { text: "The Builder: Putting things together.", type: "tech", score: 2 },
                { text: "The Designer: Making the presentation look good.", type: "creative", score: 2 },
                { text: "The Manager: Organizing everyone and budget.", type: "commerce", score: 2 },
                { text: "The Helper: Supporting team members who are stuck.", type: "medical", score: 2 } // "medical" implies care/service here
            ]
        },
        {
            id: 4,
            question: "What kind of YouTube videos do you watch most?",
            options: [
                { text: "Tech reviews, coding, or science experiments.", type: "tech", score: 2 },
                { text: "Speed painting, DIY crafts, or animation.", type: "creative", score: 2 },
                { text: "Business case studies or stock market tips.", type: "commerce", score: 2 },
                { text: "Health tips, biology facts, or nature docs.", type: "medical", score: 2 }
            ]
        },
        {
            id: 5,
            question: "Pick a dream workspace:",
            options: [
                { text: "A high-tech lab with multiple monitors.", type: "tech", score: 2 },
                { text: "A colorful studio with art supplies everywhere.", type: "creative", score: 2 },
                { text: "A busy office managing deals and money.", type: "commerce", score: 2 },
                { text: "A clean clinic or hospital helping patients.", type: "medical", score: 2 }
            ]
        }
    ],

    // Questions specific to "After Diploma" context (Advanced)
    "diploma": [
        {
            id: 1,
            question: "During your diploma, which aspect did you enjoy most?",
            options: [
                { text: "The practical lab sessions and coding.", type: "tech", score: 3 },
                { text: "Designing layouts or blueprints.", type: "creative", score: 3 },
                { text: "Understanding the cost/efficiency of projects.", type: "commerce", score: 2 },
                { text: "Safety protocols and human factors.", type: "medical", score: 1 }
            ]
        },
        {
            id: 2,
            question: "Where do you see yourself in 5 years?",
            options: [
                { text: "Developing cutting-edge software or AI.", type: "tech", score: 3 },
                { text: "Leading a creative design team.", type: "creative", score: 3 },
                { text: "Managing a startup or large business.", type: "commerce", score: 3 },
                { text: "Specializing in advanced diagnostic equipment.", type: "medical", score: 3 }
            ]
        },
        {
            id: 3,
            question: "What's your preferred problem-solving style?",
            options: [
                { text: "Logical analysis and algorithms.", type: "tech", score: 3 },
                { text: "Visualizing and sketching solutions.", type: "creative", score: 3 },
                { text: "Analyzing cost-benefit and risks.", type: "commerce", score: 3 },
                { text: "Diagnosing symptoms and treating causes.", type: "medical", score: 3 }
            ]
        },
        {
            id: 4,
            question: "Which industry interests you right now?",
            options: [
                { text: "Robotics, IT, or Automobile.", type: "tech", score: 3 },
                { text: "Architecture, UX Design, or Media.", type: "creative", score: 3 },
                { text: "Finance, Banking, or E-commerce.", type: "commerce", score: 3 },
                { text: "Biomedical, Pharma, or Healthcare.", type: "medical", score: 3 }
            ]
        },
        {
            id: 5,
            question: "If you could master one skill instantly:",
            options: [
                { text: "Full-stack Coding / Mechanics.", type: "tech", score: 3 },
                { text: "3D Modeling / Graphic Design.", type: "creative", score: 3 },
                { text: "Financial Planning / Marketing.", type: "commerce", score: 3 },
                { text: "Clinical Diagnosis / Therapy.", type: "medical", score: 3 }
            ]
        }
    ]
};

// Result Mappings (Score -> Recommendation Path)
const mcqResults = {
    // Map dominant type to a broad recommendation title and description
    "tech": {
        title: "Future Innovator & Engineer",
        description: "You have a strong logical mindset and love understanding how things work. Engineering and Technology fields are your best fit.",
        suggestedPaths: ["polytechnic", "science", "computer_science_eng"] // Keys in careerData
    },
    "creative": {
        title: "Creative Designer & Visionary",
        description: "You see the world through colors and shapes. You belong in a field where you can express your imagination.",
        suggestedPaths: ["arts", "design", "polytechnic"]
    },
    "commerce": {
        title: "Business & Finance Mind",
        description: "You understand value, money, and management. You would thrive in the corporate or business world.",
        suggestedPaths: ["commerce", "banking"]
    },
    "medical": {
        title: "Healthcare & Life Sciences",
        description: "You care about life, biology, and helping others. The medical field is where you can make a real difference.",
        suggestedPaths: ["medical", "science"]
    }
};

window.quizData = {
    questions: quizData,
    results: mcqResults
};
