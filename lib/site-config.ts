export const siteConfig = {
    name: "Townsend Medical Services",
    tagline:
        "Inclusive, compassionate, and professional care prioritized through your mental health treatment.",
    description:
        "Virtual psychiatric care founded by Miranda Townsend, a psychiatric nurse practitioner with a decade of experience in Washington State",

    // Color Palette - Emerald Forest Theme
    colors: {
        primary: {
            50: "#f0f9f2", // Very light emerald for subtle backgrounds
            100: "#84b08d", // Light emerald for light backgrounds and subtle elements
            200: "#629473", // Medium-light emerald for secondary elements
            300: "#477e5e", // Medium emerald for primary buttons and main elements
            400: "#2f6742", // Medium-dark emerald for hover states and emphasis
            500: "#0a5133", // Dark emerald for strong emphasis and dark elements
        },
    },

    // Contact Information
    contact: {
        phone: "(509) 606-0708",
        fax: "(509) 606-1514",
        email: "Townsendmedicalservices@yahoo.com",
        address: "25 West Main C1",
        city: "Spokane, WA 99201",
        hours: [
            "Tuesday: 8 AM - 11 AM",
            "Wednesday: 8 AM - 4 PM",
            "Thursday: 8 AM - 4 PM",
        ],
        note: "Virtual appointments only",
        bookingNote: "Please see texting policy for booking",
    },

    // Practitioner Information
    practitioner: {
        name: "Miranda Townsend",
        title: "Psychiatric Nurse Practitioner",
        credentials: "MN, ARNP, PMHNP-BC",
        bio: "Meet Miranda, a Spokane native with a passion for treating children, adolescents, and young adults with mental health challenges. Miranda earned her Master's degree from Washington State University. She combines her professional expertise with her love of creativity through drawing, painting, and sewing. Miranda shares her home with her husband and their three cavapoos, who resemble teddy bears. Married and rooted in Spokane, she embraces both her personal and professional life with dedication.",
        specialties: [
            "Autism Spectrum Disorders",
            "Post-Traumatic Stress Disorder (PTSD)",
            "Anxiety Disorders",
            "Obsessive Compulsive Disorder (OCD)",
            "Mood Disorders - Bipolar and Depression",
            "Attention-Deficit/Hyperactivity Disorder (ADHD)",
            "LGBTQIA+ community support",
        ],
        approach:
            "The power of resilience and the potential for growth is seen in every individual. Ideal clients are those who are willing to explore their experiences and symptoms from a biopsychosocial developmental perspective. Together, we'll aim to uncover the understanding of your challenges and work toward effective, personalized solutions.",
        philosophy:
            "To embody authenticity, see the best in people, and serve with compassion. Person-centered care that emphasizes shared decision-making is prioritized. Your input is crucial in developing a treatment plan that suits your unique needs and aspirations. Miranda emphasizes the use of healthy coping skills and provides strategies for self-soothing and stress reduction so that symptoms can be managed from a calm baseline.",
        commitment:
            "At Townsend Medical Services, the goal is to enhance quality of life through safe and effective mental health support. Miranda is dedicated to creating a welcoming environment where everyone feels valued and understood. With the right support, Miranda believes that everyone can navigate through difficulties and emerge stronger.",
    },

    // Services
    services: [
        {
            title: "Psychiatric Assessment",
            subtitle: "Diagnostic Evaluation",
            description:
                "Comprehensive diagnostic evaluation to understand your mental health and find the best path for treatment.",
            duration: "1 hr",
            price: "300",
            type: "Virtual",
            icon: "brain",
            detailedDescription: {
                intro: "Understanding a Psychiatric Assessment: What It Means for You:",
                content:
                    "A psychiatric assessment is an important step in understanding your mental health and finding the best path for your treatment. Think of it as a comprehensive evaluation that helps me get to know you better, both as a person and as someone facing mental health challenges. Here's how this assessment benefits you:",
                points: [
                    "1. Comprehensive Understanding: During the assessment, we will explore your thoughts, emotions, behaviors, and personal history. This helps me understand what you're experiencing and why. The more we uncover together, the better equipped I are to help you.",
                    "2. Identifying Symptoms and Patterns: You may have noticed certain feelings or behaviors that are concerning to you. Through the assessment, we can identify and categorize these symptoms, which allows us to see patterns that may point to specific mental health conditions. This clarity is crucial for developing an effective treatment plan.",
                    "3. Tailored Treatment Plans: With the insights gained from the assessment, we can create a personalized treatment plan that addresses your unique needs. This may include recommendations for medications, therapy, or other interventions that suit your specific situation.",
                    "4. Setting Goals: The assessment provides a foundation for setting realistic, achievable goals in your mental health journey. By understanding your challenges and strengths, we can work together to set goals that align with what you want to achieve.",
                    "5. Creating a Safe Space: The assessment also gives you the opportunity to share your thoughts and feelings in a safe and confidential environment. You can express yourself freely, knowing that the focus is on you and your well-being.",
                ],
                conclusion:
                    "Ultimately, a psychiatric assessment is not just about labels or diagnoses; it's about understanding you and your experiences. It's a collaborative process that strives to empower you along your path to mental wellness. By participating in this assessment, you're taking an important step toward feeling better and achieving a more fulfilling life. Remember, you're not alone in this journey, and we're here to support you every step of the way.",
            },
        },
        {
            title: "Medication Management with Counseling",
            subtitle:
                "Youth centered psychiatric medication management and counseling",
            description: "Youth-centered psychiatric medication management.",
            duration: "30 min",
            price: "150",
            type: "Virtual",
            icon: "pill",
            detailedDescription: {
                intro: "What is Medication Management?",
                content:
                    "If you're facing mental health challenges, understanding the role of psychiatric medication management can be an important step in your journey toward healing. This process involves evaluating and treating mental health conditions through the careful use of medication. Prescribing medications is both a science and an art—designed to meet your unique needs.",
                points: [
                    "During our appointments, we will take the time to explore your symptoms together. This may involve open conversations where you share your experiences or completing rating scales that help me understand what you're going through. By identifying groups of symptoms, we can categorize them into specific diagnoses that guide our approach.",
                    "Once we have a clearer picture of your mental health, we will work together to target those diagnoses with appropriate interventions. This may include prescribing medication tailored to your specific needs and providing counseling to support your overall well-being. Counseling is offered with medication management and not as a standalone service. Your first appointment will typically last one hour, allowing us ample time to discuss your situation in detail. Follow-up appointments will usually last between 30 minutes to an hour.",
                    "You have the flexibility to engage with these services in the way that suits you best. Some individuals may find that they only need support for a few months, while others might benefit from longer-term care spanning several years. The frequency of our meetings will also be based on your individual needs. We can meet as often as once a week or as infrequently as once every three months, which is the minimum requirement to ensure your care is kept up to date.",
                    "Regular check-ins are essential for monitoring your progress and making any necessary adjustments to your treatment plan. I want you to feel empowered and confident that you're receiving the best possible care throughout your journey.",
                    "At Townsend Medical Services, I are committed to providing you with the support, understanding, and tools you can use to navigate your mental health challenges. You deserve a treatment plan that not only addresses your symptoms but also fosters your growth and well-being. Together, we can work toward a healthier and more fulfilling life. Remember, you are not alone, and I are here to support you every step of the way.",
                ],
            },
        },
        {
            title: "Autism Evaluation",
            subtitle: "COE evaluation for autism spectrum disorder",
            description:
                "COE evaluation for autism spectrum disorder using specialized assessment tools and comprehensive evaluation.",
            duration: "3 hr",
            price: "750",
            type: "Spokane",
            icon: "puzzle",
            detailedDescription: {
                intro: "Understanding the Center of Excellence Autism Evaluations at Townsend Medical Services",
                content:
                    "At Townsend Medical Services, the Center of Excellence (COE) assessment for autism includes a specialized approach. The COE designation by the Health Care Authority indicates that the assessment is conducted by a professional with advanced training in autism. I continue to move my knowledge forward beyond the COE requirements to better understand the ongoing evolution of autistic spectrum disorder. I have been conducting COE assessments since 2018.",
                points: [
                    "The evaluation process involves a comprehensive biopsychosocial assessment that considers various aspects of your life. This may include the use of psychology-level rating scales and observation tools to gather important information about your experiences and behaviors. Additionally, a functional/adaptive assessment may be conducted to understand how autism impacts daily activities and to align with the Developmental Disabilities Administration's requirements for service eligibility.",
                    "As part of the evaluation, there may be an interview with an informant—such as a teacher, friend, or family member—who can provide valuable insights into your interactions and social functioning. This multi-faceted approach ensures that the assessment captures a complete picture of strengths and neurodivergent differences.",
                    "Written recommendations will be provided to support you in school or work environments, along with a document that clearly communicates the presence of autism, if diagnosed. The sessions can last anywhere from 60 minutes to several hours, depending on the complexity of the information being assessed. Some people seeking services at Townsend Medical Services only need an autism assessment and not medication management.",
                    "What sets my COE evaluation apart is the emphasis on using psychology rating scales to help narrow down information from observations, leading to clearer conclusions. While autistic individuals share certain characteristics, each person is unique. This assessment aims not merely to assign a label, but to foster a deeper understanding of oneself and the ways in which autism manifests in a personal context.",
                    "My goal is to empower you with insights that can guide you in navigating daily life, enhancing your self-awareness, and supporting your journey. At Townsend Medical Services, the focus is on helping you uncover your individual strengths and challenges in a compassionate and comprehensive manner.",
                ],
            },
        },
    ],

    // Target demographic
    eligibility: {
        ageRange: "5-25 years old",
        requirements: "Have a mental health or developmental concern",
        process: "Fill out the 'prospective patient' form to begin",
    },

    // Insurance
    insurance: [
        "BlueShield of Washington",
        "Oxford",
        "Ambetter Washington",
        "United Healthcare",
        "Cigna",
        "Premera Blue Cross",
        "Oscar Health",
        "Blue Cross Blue Shield of Massachusetts",
        "Aetna",
        "Assuris",
        "Molina",
    ],

    // Certifications
    certifications: [
        "Affirming WA State Virtual Psychiatric Care",
        "Autism Center of Excellence Provider",
        "Spokane Autism Collaborative Member",
        "ScaleUp Certified Business",
    ],

    // Why Choose Us Points
    whyChoose: {
        title: "Why Choose Townsend Medical Services?",
        subtitle:
            "With more than a decade of experience, our holistic approach fosters a supportive and empathetic environment that promotes meaningful growth and well-being.",
        points: [
            {
                title: "Personalized",
                description:
                    "At Townsend Medical Services, we deliver person-centered psychiatric care grounded in unconditional positive regard and a strengths-based philosophy that honors each individual’s potential.",
            },
            {
                title: "Specialized",
                description:
                    "We don't take a 'one-size-fits-all' approach. Our treatments are tailored to the needs, strengths, and readiness of each patient.",
            },
            {
                title: "Experienced",
                description:
                    "Our practitioner has worked with hundreds of unique cases across various settings. We are ready for you!",
            },
        ],
    },
};
