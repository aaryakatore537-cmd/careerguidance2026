/**
 * Career data extracted and decoded from the Career Handbook PDF
 */
const careerData = {
    // --- STREAM BASED INFORMATION ---

    science: {
        title: "Science Stream",
        description: "For students interested in technical, medical, and research fields. Divided into A Group (Maths) and B Group (Biology).",
        degrees: [
            { name: "B.Tech/B.E", duration: "4 Years", eligibility: "10+2 PCM", career: "Engineer, Scientist" }
        ],
        branches: ["Aerospace", "Computer Science", "Mechanical", "Civil", "Electrical", "Electronics", "Biotech", "IT"],
        careers: ["Software Engineer", "Scientist", "Researcher", "Pilot", "Physicist", "Chemist"],
        exams: ["JEE Main/Advanced", "BITSAT", "GUJCET"],
        colleges: ["IITs", "NITs", "BITS Pilani", "CEG Chennai", "DAIICT", "PDPU"]
    },

    computer_science_eng: {
        title: "Computer Science & Engineering",
        description: "Focuses on the development of software, hardware, and algorithms. Includes software engineering, database management, and network security.",
        degrees: [
            { name: "B.Tech/B.E in CSE", duration: "4 Years (3 Years for Diploma)", eligibility: "10+2 PCM / Diploma" },
            { name: "BCA / MCA", duration: "3+2 Years", eligibility: "10+2 Any Stream with Maths" }
        ],
        branches: ["Software Development", "Systems Architecture", "Database Systems", "Networking", "Artificial Intelligence"],
        careers: ["Software Engineer", "System Analyst", "Full Stack Developer", "Database Administrator", "Network Architect"],
        exams: ["JEE Main", "GATE", "VITEEE", "SRM JEEE", "BITSAT"],
        colleges: ["IIT Bombay", "IIT Delhi", "IIIT Hyderabad", "NIT Trichy", "BITS Pilani"],
        salary: "₹5,00,000 – ₹30,00,000+ (Yearly)"
    },

    healthcare_medical: {
        title: "Healthcare & Medical Sciences",
        description: "Professional paths in medicine, dentistry, pharmacy, and allied healthcare services.",
        degrees: [
            { name: "MBBS", duration: "5.5 Years", eligibility: "10+2 PCB", career: "Doctor, Specialist" },
            { name: "BDS", duration: "4 Years", eligibility: "10+2 PCB", career: "Dentist" },
            { name: "B.Pharma", duration: "4 Years", eligibility: "10+2 PCM/PCB", career: "Pharmacist" },
            { name: "B.Sc Nursing", duration: "4 Years", eligibility: "10+2 PCB" }
        ],
        careers: ["General Physician", "Surgeon", "Dentist", "Pharmacist", "Medical Lab Tech", "Nurse"],
        exams: ["NEET", "AIIMS Entrance", "GUJCET", "State Medical CETs"],
        colleges: ["AIIMS New Delhi", "CMC Vellore", "MAMC Delhi", "JIPMER Puducherry", "Armed Forces Medical College"],
        salary: "₹6,00,000 – ₹25,00,000+ (Yearly)"
    },

    commerce: {
        title: "Commerce & Finance",
        description: "Focuses on business, finance, accounting, and trade. Excellent for those with interest in numbers and management.",
        degrees: [
            { name: "B.Com / B.Com (Hons)", duration: "3 Years", eligibility: "10+2 Any Stream", career: "Accountant, Banker" },
            { name: "BBA (Finance/Accounting)", duration: "3 Years", eligibility: "10+2 Any Stream", career: "Finance Manager" },
            { name: "B.Sc Finance", duration: "3 Years", eligibility: "10+2 PCM/Stats", career: "Financial Analyst" }
        ],
        certifications: [
            { name: "CA (Chartered Accountant)", duration: "4-5 Years", eligibility: "CPT/Foundation", website: "www.icai.org" },
            { name: "CS (Company Secretary)", duration: "3-4 Years", eligibility: "10+2", website: "www.icsi.edu" },
            { name: "CFA (Cert. Finance Analyst)", duration: "2-3 Years", eligibility: "Graduation", website: "www.cfainstitute.org" }
        ],
        careers: ["Chartered Accountant", "Investment Banker", "Stock Broker", "Economist", "Auditor", "Tax Consultant"],
        exams: ["CPT/IPCC", "SET", "NPAT"],
        colleges: ["SRCC Delhi", "LSR Delhi", "Hansraj Delhi", "St. Joseph's Bangalore", "Loyola Chennai"]
    },

    arts: {
        title: "Arts & Humanities",
        description: "Explores human society, culture, behavior, and creative expression. Ideal for creative and social minds.",
        degrees: [
            { name: "BA (Bachelor of Arts)", duration: "3 Years", eligibility: "10+2 Any Stream", career: "Journalist, Teacher" },
            { name: "BRS (Rural Studies)", duration: "3 Years", eligibility: "10+2 Any Stream", career: "Rural Development" }
        ],
        specializations: ["Psychology", "History", "Sociology", "Geography", "Political Science", "Economics", "English"],
        careers: ["Journalist", "Psychologist", "Historian", "Social Worker", "Public Policy Expert", "Content Writer"],
        exams: ["CUET", "HSEE (IIT Madras)", "TISS-BAT"],
        colleges: ["Lady Shri Ram Delhi", "St. Stephen's Delhi", "TISS Mumbai", "Ashoka University", "Presidency College"]
    },

    law: {
        title: "Legal Studies",
        description: "Integrated law programs that combine a graduation degree with LLB.",
        degrees: [
            { name: "BA LLB / B.Com LLB / BBA LLB", duration: "5 Years (Integrated)", eligibility: "10+2 Any Stream" }
        ],
        careers: ["Litigator", "Corporate Lawyer", "Judicial Magistrate", "Judge", "Legal Advisor", "Mediator"],
        exams: ["CLAT", "AILET", "LSAT", "LSAT-India"],
        colleges: ["NLSIU Bangalore", "NALSAR Hyderabad", "WBNUJS Kolkata", "GNLU Gandhinagar"]
    },

    management: {
        title: "Business Management",
        description: "Focuses on organizational leadership, strategy, and business operations.",
        degrees: [
            { name: "BBA / BMS / BBM", duration: "3 Years", eligibility: "10+2 Any Stream" },
            { name: "IPM (BBA+MBA)", duration: "5 Years", eligibility: "10+2 Any Stream" }
        ],
        careers: ["Marketing Manager", "HR Head", "Operations Executive", "Entrepreneur", "Sales Director"],
        exams: ["IPMAT (IIM Indore/Rohtak)", "JIPMAT", "NPAT", "SET"],
        colleges: ["IIM Indore/Rohtak", "NMIMS Mumbai", "Symbiosis Pune", "Shaheed Sukhdev Delhi"]
    },

    hotel_mgmt: {
        title: "Hotel & Hospitality",
        description: "Training for the service sector including hotels, restaurants, and tourism.",
        degrees: [
            { name: "B.Sc Hospitality", duration: "3 Years", eligibility: "10+2 Any Stream" },
            { name: "B-Tech Hospitality & Catering", duration: "4 Years", eligibility: "10+2 Any Stream" }
        ],
        careers: ["Executive Chef", "Hotel Manager", "Food & Beverage Director", "Travel Planner", "Resort Manager"],
        exams: ["NCHMCT-JEE", "IHM Entrance"],
        colleges: ["IHM Pusa", "IHM Mumbai", "Welcome Group Manipal", "Auro University Surat"]
    },

    mass_comm: {
        title: "Mass Communication",
        description: "Broadcasting, journalism, media planning, and digital reporting.",
        degrees: [
            { name: "BJMC / BMC / BMS", duration: "3 Years", eligibility: "10+2 Any Stream" }
        ],
        careers: ["News Anchor", "Investigative Journalist", "Media Planner", "PR Specialist", "Film Director"],
        exams: ["CUET", "SET", "IIMC Entrance"],
        colleges: ["IIMC New Delhi", "Xavier Institute Mumbai", "Symbiosis Pune"]
    },

    design: {
        title: "Design & Creative Arts",
        description: "Technical and creative training for industries like fashion, interiors, and digital products.",
        degrees: [
            { name: "B.Des / B.I.D / BFA", duration: "4 Years", eligibility: "10+2 Any Stream" }
        ],
        specializations: ["Fashion", "Interior", "Graphic", "UI/UX", "Animation", "Product Design"],
        careers: ["Fashion Designer", "Interior Architect", "Graphics Guru", "User Experience Designer", "Animator"],
        exams: ["NID-DAT", "UCEED", "NIFT Entrance"],
        colleges: ["NID Ahmedabad", "IIT Bombay (IDC)", "NIFT Delhi", "Srishti Bangalore"]
    },

    // --- AFTER CLASS 10th SPECIFIC DATA (Extracted from Image & Excel) ---
    after10th: {
        intermediate: {
            title: "Intermediate (2 Years)",
            description: "Traditional junior college with various stream specializations. Essential foundation for Engineering, Medical, C.A., and Civil Services.",
            streams: [
                { name: "Science", choices: ["MPC (Maths, Physics, Chem)", "BiPC (Bio, Physics, Chem)", "Library Science"] },
                { name: "Commerce", choices: ["CEC (Civics, Econ, Commerce)"] },
                { name: "Arts", choices: ["MEC (Maths, Econ, Commerce)", "HEC (History, Econ, Civics)"] }
            ],
            degrees: [{ name: "HSC / Intermediate / CBSE-XII", duration: "2 Years", eligibility: "SSC Pass" }],
            careers: ["Engineer", "Doctor", "Chartered Accountant", "Lawyer", "IAS/IPS Officer", "Scientist", "Professor", "Manager"],
            exams: ["JEE (Engineering)", "NEET (Medical)", "NDA (Defense)", "CLAT (Law)", "KVPY (Research)", "CPT (Accountancy)"],
            colleges: ["Fergusson College Pune", "St. Xavier’s Mumbai", "DPS RK Puram", "Loyola College Chennai", "Hansraj College Delhi"],
            salary: "₹30,000 - ₹1,50,000 (Monthly, after Grad/Post-Grad)"
        },
        polytechnic: {
            title: "Polytechnic (3 Years)",
            description: "Practical engineering diplomas focusing on industry-ready technical skills. Offers 'Lateral Entry' directly into the 2nd year of B.E/B.Tech.",
            branches: [
                "Mechanical Engg", "Computer Science", "Civil Engg", "Electrical & Electronics (EEE)", "Information Technology", "Automobile",
                "Electronics & Comm", "Bio-Technology", "Chemical Engg",
                "Aeronautical", "Agricultural Engg", "Architecture Assistantship", "Bio-Medical",
                "Marine Technology", "Mining", "Leather Tech", "Textile", "Petroleum", "Plastic", "Rubber Tech"
            ],
            degrees: [{ name: "Diploma in Engineering", duration: "3 Years", eligibility: "SSC Pass (Science/Maths focus)" }],
            careers: ["Junior Engineer (JE)", "Production Manager", "Quality Control Inspector", "Technical Assistant", "Entrepreneur"],
            exams: ["DTE Polytechnic Entrance", "MSBTE Merit List", "JEECUP", "CET Delhi", "POLYCET"],
            colleges: ["Govt Polytechnic Mumbai", "Govt Polytechnic Pune", "VJTI Mumbai", "Cusrow Wadia Institute Pune", "PSG Polytechnic Coimbatore"],
            salary: "₹18,000 – ₹45,000 (Monthly Junior Engineer)"
        },
        iti: {
            title: "ITI (2 Years)",
            description: "Vocational training for specialized technical and service trades under the NCVT/SCVT boards.",
            trades: [
                "Fitter", "Electrician", "Mechanic (Diesel/Marine/Motor/Radio)",
                "Welder", "Plumber", "Surveyor", "Machine Tools Specialist",
                "Firemen/Safety Officer", "Cookery/Catering", "Paint Technology", "Civil (Draughtman)", "COPA (Computer Operator)"
            ],
            degrees: [{ name: "National Trade Certificate (NTC)", duration: "1-2 Years", eligibility: "SSC Pass (some trades 8th pass)" }],
            careers: ["Skilled Technician", "Plant Maintenance Expert", "Workshop Owner", "Indian Railways (Loco Pilot)", "BHEL/ONGC Apprentice"],
            exams: ["AITT (All India Trade Test)", "Apprenticeship Exam"],
            colleges: ["National Skill Training Institute (NSTI)", "Govt ITI Pune", "Govt ITI Mumbai", "Don Bosco Technical Institute"],
            salary: "₹15,000 – ₹35,000 (Monthly, varies by trade)"
        },
        paramedical_10th: {
            title: "Paramedical (3 Years)",
            description: "Diplomas in allied healthcare. Vital for hospital operations, diagnostics, and patient care management.",
            courses: ["DLMT (Medical Lab Tech)", "DHFM", "DOA (Ophthalmic)", "DOT (Operation Theatre)", "Health Inspector", "Sanitary Inspector"],
            degrees: [{ name: "Diploma in Paramedical Sciences", duration: "2-3 Years", eligibility: "SSC Pass" }],
            careers: ["Lab Technician", "Healthcare Assistant", "Health Inspector", "X-Ray Technician", "Hospital Records Assistant"],
            exams: ["State Paramedical Board Entrance", "Institute-wise Merit"],
            colleges: ["AIIMS Paramedical Course", "KEM Hospital Mumbai", "GMC Nagpur", "Sassoon General Hospital Pune", "IPGMER Kolkata"],
            salary: "₹15,000 – ₹35,000 (Monthly in Hospitals/Clinics)"
        },
        short_term_10th: {
            title: "Skill-Based Certifications",
            description: "Fast-track technical and digital skill certifications for immediate entry-level jobs in IT and creative sectors.",
            courses: ["DTP (Desktop Publishing)", "PGDCA (Computer App)", "Tally Guru", "Internet & Web Tech", "Graphic Designing", "Animation & VFX", "Cyber Security Foundations"],
            degrees: [{ name: "Professional Certificate", duration: "6-12 Months", eligibility: "SSC Pass" }],
            careers: ["Graphic Designer", "Tally Accountant", "Web Developer (Junior)", "Data Entry Operator", "Cyber Security Assistant"],
            exams: ["MS-CIT (Maharashtra)", "NIELIT CCC", "Institute Certification"],
            colleges: ["NIELIT Centers", "MKCL (MS-CIT)", "NIIT", "Aptech Media", "CITC Chandigarh"],
            salary: "₹10,000 – ₹30,000 (Starting Salary)"
        },
        creative_10th: {
            title: "Lifestyle & Creative Diploma",
            description: "Vocational paths for students focusing on aesthetics, design, and personalized service industries.",
            options: ["Beauty & Cosmetology", "Jewelry Designing", "Fashion Designing", "Commercial Photography", "Interior Decoration"],
            degrees: [{ name: "Professional Diploma", duration: "1-2 Years", eligibility: "SSC Pass" }],
            careers: ["Fashion Stylist", "Professional Photographer", "Makeup Artist/Esthetician", "Jewelry Designer", "Independent Consultant"],
            exams: ["Portfolio Review", "NIFT/NID Foundations", "Institute Entrance"],
            colleges: ["JD Institute of Fashion Technology", "INIFD Pune/Mumbai", "Lakmé Academy", "Shari Academy of Photography"],
            salary: "₹15,000 – ₹60,000+ (Varies largely by portfolio and clients)"
        },
        agriculture_10th: {
            title: "Agriculture & Horticulture",
            description: "Scientific and technical training for the farming, landscaping, and organic food industries.",
            courses: ["Diploma in Agriculture", "Diploma in Horticulture", "Organic Farming Cert", "Dairy Technology"],
            degrees: [{ name: "Diploma in Agriculture", duration: "1-3 Years", eligibility: "SSC Pass" }],
            careers: ["Agriculture Assistant", "Nursery Manager", "Plantation Supervisor", "Farm Entrepreneur"],
            exams: ["State Agriculture Board Merit", "Institute Exam"],
            colleges: ["MPKV Rahuri", "PDKV Akola", "Regional Agriculture Institutes"],
            salary: "₹12,000 – ₹30,000 (Monthly)"
        },
        integrated_10th: {
            title: "Integrated Degree (6-Year)",
            description: "A prestigious 6-year integrated program leading directly to a B.Tech degree, bypassing traditional intermediate years.",
            degrees: [{ name: "B.Tech (Integrated)", duration: "6 Years", eligibility: "SSC Merit (Top Performers)" }],
            careers: ["Software Engineer", "Systems Analyst", "Research Engineer", "Data Scientist"],
            exams: ["RGUKT-CET / IIIT Entrance", "Merit Based (Top 1%)"],
            colleges: ["RGUKT (IIIT Nuzvid/Rk Valley)", "IIIT Hyderabad Integrated", "AMU Integrated"],
            salary: "₹60,000 – ₹2,50,000+ (Post Degree)"
        },
        arts_performing_10th: {
            title: "Performing Arts & Music",
            description: "Professional diplomas for students dedicated to dance, music, theater, and fine arts.",
            options: ["Diploma in Classical Dance", "Vocal Music Cert", "Fine Arts Diploma", "Theater Arts"],
            degrees: [{ name: "Sangeet Visharad / Diploma", duration: "2-3 Years", eligibility: "SSC Pass + Talent Trial" }],
            careers: ["Professional Performer", "Music/Dance Teacher", "Illustrator", "Theater Artist"],
            colleges: ["Ghandharva Mahavidyalaya", "FTII Pune (Foundation)", "National School of Drama (Short term)", "Sir J.J. School of Art"],
            salary: "₹15,000 – ₹80,000+ (Varies by Performance)"
        },
        fire_safety_10th: {
            title: "Fire & Safety Management",
            description: "Critical vocational training in fire prevention, emergency response, and industrial safety protocols.",
            degrees: [{ name: "Diploma in Fire & Safety", duration: "1 Year", eligibility: "SSC Pass" }],
            careers: ["Fire Safety Officer", "Safety Supervisor", "Fireman", "Industrial Safety Inspector"],
            exams: ["Physical Fitness Test", "Institute Merit"],
            colleges: ["National Academy of Fire & Safety (NAFS)", "Delhi College of Fire Engineering", "Govt Polytechnic Mumbai"],
            salary: "₹15,000 – ₹40,000 (Monthly)"
        },
        interior_design_10th: {
            title: "Interior Design Diploma",
            description: "Creative path focusing on space planning, aesthetics, and functional building interiors.",
            degrees: [{ name: "Diploma in Interior Design", duration: "1-2 Years", eligibility: "SSC Pass (Min 50%)" }],
            careers: ["Interior Designer", "Space Planner", "Furniture Designer", "Design Consultant"],
            colleges: ["JD Institute of Fashion Tech", "AAFT Noida", "Vogue Institute Bangalore", "LPU"],
            salary: "₹20,000 – ₹50,000 (Monthly)"
        },
        animation_vfx_10th: {
            title: "Animation & Multimedia",
            description: "Digital arts path for film, gaming, and advertising industries using 2D/3D tools.",
            degrees: [{ name: "Diploma in Animation & VFX", duration: "16-24 Months", eligibility: "SSC Pass" }],
            careers: ["2D/3D Animator", "VFX Artist", "Graphic Designer", "Video Editor"],
            colleges: ["Animaster Bangalore", "ZICA Institute", "MAAC", "Arena Animation"],
            salary: "₹15,000 – ₹60,000 (Monthly)"
        },
        uniformed_services_10th: {
            title: "Government Job / Uniformed Services",
            description: "Direct entry paths into security, defense, and law enforcement agencies.",
            options: ["Army General Duty (GD)", "Police Constable (States)", "Railway Protection Force (RPF)", "Home Guards"],
            degrees: [{ name: "Service Entry / Foundation", duration: "6-12 Months Training", eligibility: "SSC Pass + Physical Fitness" }],
            careers: ["Soldier", "Constable", "Security Officer", "Defense Personal"],
            exams: ["State Police Recruitment", "Army Rally (Agniveer)", "NCC Cert Benefits"],
            colleges: ["Sainik Schools", "Defense Foundations", "Police Training Academies"],
            salary: "₹25,000 – ₹45,000 (Initial Salary)"
        }
    },

    // --- CORE ENGINEERING ---
    core_engineering: {
        mechanical: {
            title: "Mechanical Engineering",
            description: "One of the broadest and oldest engineering disciplines, focusing on the design, analysis, and manufacturing of mechanical systems.",
            degrees: [
                { name: "B.Tech (Lateral Entry)", duration: "3 Years", eligibility: "Diploma in Mechanical" },
                { name: "B.E. Mechanical", duration: "4 Years", eligibility: "10+2 PCM" }
            ],
            branches: ["Robotics & Automation", "Thermal Engineering", "CAD/CAM Design", "Mechatronics", "Automotive Design"],
            careers: ["Design Engineer", "Plant Engineer", "Maintenance Supervisor", "Production Manager", "Quality Control Analyst"],
            exams: ["LEET (State Level)", "AP/TS ECET", "JELET", "GATE (for M.Tech)"],
            colleges: ["COEP Pune", "VJTI Mumbai", "DTU Delhi", "Jadavpur University", "Anna University"],
            salary: "₹4,00,000 – ₹12,00,000 (Yearly)"
        },
        civil: {
            title: "Civil Engineering",
            description: "Focuses on the design, construction, and maintenance of the physical and naturally built environment, including infrastructure like roads, bridges, and dams.",
            degrees: [
                { name: "B.Tech (Lateral Entry)", duration: "3 Years", eligibility: "Diploma in Civil" },
                { name: "B.E. Civil", duration: "4 Years", eligibility: "10+2 PCM" }
            ],
            branches: ["Structural Engineering", "Geotechnical Engineering", "Environmental Engineering", "Transportation Engineering", "Water Resources"],
            careers: ["Site Engineer", "Project Manager", "Structural Designer", "Construction Supervisor", "Quantity Surveyor"],
            exams: ["LEET", "JELET", "DCET Karnataka", "UKSEE"],
            colleges: ["VJTI Mumbai", "COEP Pune", "Jadavpur University", "MIT Manipal", "RVCE Bangalore"],
            salary: "₹3,50,000 – ₹10,00,000 (Yearly)"
        },
        chemical: {
            title: "Chemical Engineering",
            description: "Deals with the study of chemical processes and the design and operation of industrial plants while transforming raw materials into useful products.",
            degrees: [
                { name: "B.Tech (Lateral Entry)", duration: "3 Years", eligibility: "Diploma in Chemical" },
                { name: "B.E. Chemical", duration: "4 Years", eligibility: "10+2 PCM" }
            ],
            branches: ["Process Design", "Petrochemicals", "Pharmaceutical Engineering", "Materials Science", "Bioprocess Engineering"],
            careers: ["Process Engineer", "Safety Engineer", "Plant Manager", "R&D Specialist", "Production Engineer"],
            exams: ["LEET", "OJEE", "UPSEE", "ECET"],
            colleges: ["ICT Mumbai", "BITS Pilani", "IIT (through JEE first year)", "Thapar University"],
            salary: "₹4,50,000 – ₹15,00,000 (Yearly)"
        },
        electronics_communication: {
            title: "Electronics & Communication (ECE)",
            description: "Combines electronics with communication technology, focusing on circuit design, embedded systems, and telecommunications.",
            degrees: [
                { name: "B.Tech (Lateral Entry)", duration: "3 Years", eligibility: "Diploma in ECE/Electronics" },
                { name: "B.E. ECE", duration: "4 Years", eligibility: "10+2 PCM" }
            ],
            branches: ["VLSI Design", "Embedded Systems", "IoT & Sensor Tech", "Signal Processing", "Telecommunication Systems"],
            careers: ["Embedded Engineer", "VLSI Designer", "Network Planning Engineer", "Hardware Analyst", "Telecom Consultant"],
            exams: ["LEET", "IPU CET", "ECET", "JELET"],
            colleges: ["DTU Delhi", "NSUT Delhi", "IIIT Hyderabad", "COEP Pune", "RVCE Bangalore"],
            salary: "₹5,00,000 – ₹20,00,000 (Yearly)"
        }
    },

    // --- FUTURE TECH & INNOVATION ---
    future_tech: {
        ai_robotics: {
            title: "AI & Robotics",
            description: "An interdisciplinary field blending mechanical, electrical, and computer engineering to create intelligent systems and autonomous robots.",
            degrees: [
                { name: "B.Tech in Artificial Intelligence & Robotics", duration: "4 Years", eligibility: "10+2 PCM" },
                { name: "M.Tech in Robotics & Automation", duration: "2 Years", eligibility: "B.Tech/BE" },
                { name: "B.Sc in Robotics", duration: "3 Years", eligibility: "10+2 Science" }
            ],
            branches: ["Machine Learning", "Computer Vision", "Kinematics & Dynamics", "Neural Networks", "Human-Robot Interaction", "Mechatronics"],
            careers: ["AI Engineer", "Robotics Engineer", "Computer Vision Engineer", "NLP Engineer", "Automation Engineer", "Drone Engineer"],
            exams: ["JEE Main", "GATE", "BITSAT", "VITEEE", "MHT CET"],
            colleges: ["IIT Hyderabad", "IIT Bombay", "IIIT Hyderabad", "IISc Bangalore", "Amrita Vishwa Vidyapeetham", "SRM University"],
            salary: "₹6,00,000 – ₹25,00,000+ (Yearly)"
        },
        data_science: {
            title: "Data Science & Big Data",
            description: "The science of extracting actionable insights from massive datasets using statistical models, machine learning, and visualization tools.",
            degrees: [
                { name: "B.Tech/B.Sc in Data Science", duration: "3-4 Years", eligibility: "10+2 PCM/Stats" },
                { name: "M.Tech in Data Science & AI", duration: "2 Years", eligibility: "B.Tech/B.Sc" },
                { name: "PG Diploma in Data Analytics", duration: "1 Year", eligibility: "Graduation" }
            ],
            branches: ["Predictive Modeling", "Big Data Engineering", "Business Intelligence", "Computational Data Science", "Data Visualization", "Deep Learning"],
            careers: ["Data Scientist", "Data Analyst", "Machine Learning Engineer", "Big Data Architect", "Business Intelligence Developer"],
            exams: ["JEE Main", "GATE", "CAT", "CUET UG/PG"],
            colleges: ["IIT Madras", "IIT Bombay", "ISI Kolkata", "IIIT Bangalore", "IIM Calcutta", "BITS Pilani"],
            salary: "₹6,00,000 – ₹20,00,000+ (Yearly)"
        },
        cyber_security: {
            title: "Cyber Security & Ethical Hacking",
            description: "The practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks.",
            degrees: [
                { name: "B.Tech in Cyber Security", duration: "4 Years", eligibility: "10+2 PCM" },
                { name: "M.Tech in Information Security", duration: "2 Years", eligibility: "B.Tech CS/IT" },
                { name: "Certified Ethical Hacker (CEH)", duration: "6 Months", eligibility: "IT Knowledge" }
            ],
            branches: ["Network Security", "Cryptography", "Digital Forensics", "Incident Response", "Malware Analysis", "Cloud Security"],
            careers: ["Cyber Security Analyst", "Ethical Hacker", "Security Architect", "Digital Forensics Expert", "Incident Response Manager"],
            exams: ["JEE Main", "GATE", "VITEEE", "SRMJEEE", "Comptia Security+"],
            colleges: ["National Forensic Sciences University", "IIIT Hyderabad", "IIT Madras", "NIT Trichy", "Anna University"],
            salary: "₹5,00,000 – ₹20,00,000+ (Yearly)"
        },
        cloud_computing: {
            title: "Cloud Computing & AWS",
            description: "Delivery of computing services over the internet to offer faster innovation, flexible resources, and economies of scale.",
            degrees: [
                { name: "B.Tech in IT (Cloud Specialization)", duration: "4 Years", eligibility: "10+2 PCM" },
                { name: "BCA/MCA in Cloud Computing", duration: "3-2 Years", eligibility: "10+2 / Graduation" },
                { name: "AWS/Azure Solutions Architect Cert", duration: "3-6 Months", eligibility: "IT Background" }
            ],
            branches: ["Cloud Architecture", "DevOps & SRE", "Serverless Computing", "Virtualization", "Cloud Migration", "Distributed Systems"],
            careers: ["Cloud Architect", "Cloud Engineer", "DevOps Engineer", "Solutions Architect", "Cloud Security Specialist"],
            exams: ["JEE Main", "GATE", "CUET UG", "AWS Certification"],
            colleges: ["IIT Madras", "IIIT Hyderabad", "BITS Pilani", "VIT Vellore", "NIT Calicut", "SRM University"],
            salary: "₹6,00,000 – ₹18,00,000+ (Yearly)"
        }
    },

    // --- DIPLOMA (AFTER 10TH) SPECIFIC MAPPING ---
    diplomas: {
        "intermediate": "after10th.intermediate",
        "polytechnic": "after10th.polytechnic",
        "iti": "after10th.iti",
        "paramedical-10th": "after10th.paramedical_10th",
        "short-term-10th": "after10th.short_term_10th",
        "creative-10th": "after10th.creative_10th",
        "agriculture-10th": "after10th.agriculture_10th",
        "integrated-10th": "after10th.integrated_10th",
        "performing-arts-10th": "after10th.arts_performing_10th",
        "fire-safety-10th": "after10th.fire_safety_10th",
        "interior-design-10th": "after10th.interior_design_10th",
        "animation-vfx-10th": "after10th.animation_vfx_10th",
        "uniformed-services-10th": "after10th.uniformed_services_10th",
        "hotel-management": "hotel_mgmt",
        "journalism": "mass_comm",
        "education": "arts",
        "photography": "design",
        "psychology": "arts",
        "elementary-education": "arts",
        "digital-marketing": "management",
        "fine-arts": "design",
        "english": "arts",
        "fashion-designing": "design",
        "graphic-designing": "design",
        "web-development": "computer_science_eng",
        "web-designing": "design",
        "mass-communication": "mass_comm",
        "tally": "commerce",
        "banking": "commerce",
        "risk-insurance": "commerce",
        "financial-accounting": "commerce",
        "eaccounting-taxation": "commerce",
        "business-administration": "management",
        "computer-application": "computer_science_eng",
        "information-technology": "computer_science_eng",
        "food-production": "hotel_mgmt",
        "diesel-mechanics": "science",
        "electrical-engineering": "science",
        "computer-science-engineering": "computer_science_eng",
        "petroleum-engineering": "science",
        "hospital-assistance": "healthcare_medical",
        "rural-healthcare": "healthcare_medical",
        "pathology-lab": "healthcare_medical",
        "paramedic-nursing": "healthcare_medical",
        "ecg-technology": "healthcare_medical",
        "xray-technology": "healthcare_medical",
        "dental-hygienist": "healthcare_medical",
        // New Future Tech Mapping
        "ai-robotics": "future_tech.ai_robotics",
        "data-science": "future_tech.data_science",
        "cyber-security": "future_tech.cyber_security",
        "cloud-computing": "future_tech.cloud_computing",
        // Core Engineering Mapping
        "mechanical": "core_engineering.mechanical",
        "civil": "core_engineering.civil",
        "chemical": "core_engineering.chemical",
        "electronics-communication": "core_engineering.electronics_communication"
    }
};

window.careerData = careerData;
