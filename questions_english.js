const englishQuestions = [

    // ==============================
    // PART 1: SPOTTING ERRORS & SENTENCE CORRECTION
    // ==============================

    {
        question: "Identify the part of the sentence that contains a grammatical error:\nNot only the students (A) / but also the teacher (B) / were present at the emergency meeting. (C) / No error (D)",
        options: [
            "Not only the students",
            "but also the teacher",
            "were present at the emergency meeting",
            "No error"
        ],
        answer: 2
    },

    {
        question: "Identify the part of the sentence that contains a grammatical error:\nIf the administration would have (A) / acted on time, the crisis (B) / could have been easily avoided. (C) / No error (D)",
        options: [
            "If the administration would have",
            "acted on time, the crisis",
            "could have been easily avoided",
            "No error"
        ],
        answer: 0
    },

    {
        question: "Identify the part of the sentence that contains a grammatical error:\nThe sceneries of the northeastern states (A) / are incredibly beautiful and attract (B) / thousands of tourists every year. (C) / No error (D)",
        options: [
            "The sceneries of the northeastern states",
            "are incredibly beautiful and attract",
            "thousands of tourists every year",
            "No error"
        ],
        answer: 0
    },

    {
        question: "Identify the part of the sentence that contains a grammatical error:\nBetween you and I, (A) / the new economic policy is unlikely (B) / to yield any significant results in the short term. (C) / No error (D)",
        options: [
            "Between you and I",
            "the new economic policy is unlikely",
            "to yield any significant results in the short term",
            "No error"
        ],
        answer: 0
    },

    {
        question: "Identify the part of the sentence that contains a grammatical error:\nThe number of citizens living below the poverty line (A) / have decreased significantly (B) / over the last decade due to welfare schemes. (C) / No error (D)",
        options: [
            "The number of citizens living below the poverty line",
            "have decreased significantly",
            "over the last decade due to welfare schemes",
            "No error"
        ],
        answer: 1
    },


    // ==============================
    // PART 2: FILL IN THE BLANKS
    // ==============================

    {
        question: "The government's new agricultural reform policy is aimed _______ reducing the financial burden on small-scale farmers.",
        options: [
            "at",
            "on",
            "for",
            "with"
        ],
        answer: 0
    },

    {
        question: "The judicial committee dismissed the petition because the allegations were based on _______ evidence rather than concrete facts.",
        options: [
            "tenuous",
            "substantial",
            "irrefutable",
            "authentic"
        ],
        answer: 0
    },

    {
        question: "By the time the next Union Budget is presented in Parliament, the financial committee _______ its comprehensive report on tax reforms.",
        options: [
            "will submit",
            "will have submitted",
            "would submit",
            "has submitted"
        ],
        answer: 1
    },

    {
        question: "Despite facing severe criticism from the opposition, the minister decided to _______ his stand on the controversial labor laws.",
        options: [
            "adhere to",
            "give in",
            "back out",
            "compromise with"
        ],
        answer: 0
    },

    {
        question: "The civil servant was widely praised for handling the volatile communal situation with absolute _______.",
        options: [
            "arrogance",
            "tactlessness",
            "equanimity",
            "agitation"
        ],
        answer: 2
    },


    // ==============================
    // PART 3: SYNONYMS & ANTONYMS
    // ==============================

    {
        question: "Choose the word that is closest in meaning to the underlined word:\nThe Supreme Court passed a pragmatic judgment to balance environmental conservation with industrial development.",
        options: [
            "idealistic",
            "practical",
            "dogmatic",
            "theoretical"
        ],
        answer: 1
    },

    {
        question: "Choose the word that is closest in meaning to the underlined word:\nBureaucratic delays often have a deleterious effect on the execution of crucial infrastructure projects.",
        options: [
            "beneficial",
            "harmful",
            "negligible",
            "microscopic"
        ],
        answer: 1
    },

    {
        question: "Choose the word that is opposite in meaning to the underlined word:\nThe local administration took immediate measures to alleviate the acute water shortage in the district.",
        options: [
            "aggravate",
            "diminish",
            "mitigate",
            "soothe"
        ],
        answer: 0
    },

    {
        question: "Choose the word that is opposite in meaning to the underlined word:\nWith the advent of digital banking, traditional passbooks have become largely obsolete in urban areas.",
        options: [
            "outdated",
            "contemporary",
            "archaic",
            "redundant"
        ],
        answer: 1
    },


    // ==============================
    // PART 4: IDIOMS AND PHRASES
    // ==============================

    {
        question: "What is the meaning of the idiom \"To burn the midnight oil\"?",
        options: [
            "To waste precious natural resources",
            "To work or study late into the night",
            "To instigate a fight between two parties",
            "To complete a task without any effort"
        ],
        answer: 1
    },

    {
        question: "What does the expression \"An olive branch\" signify?",
        options: [
            "A gesture of peace or reconciliation",
            "A symbol of victory in an election",
            "A warning of impending disaster",
            "A call for violent protest"
        ],
        answer: 0
    },


    // ==============================
    // PART 5: READING COMPREHENSION & CRITICAL REASONING
    // ==============================

    {
        question: "Read the short passage and answer the question based on it:\n\nPassage: Inclusive growth is vital for a sustainable democracy. If the fruits of economic development are concentrated only in the hands of a few urban elites, it creates a socio-economic divide that can lead to internal security threats and public unrest. True development must reach the grassroots level.\n\nWhich of the following is the most crucial inference that can be drawn from the passage?",
        options: [
            "Urban elites are solely responsible for internal security threats.",
            "Economic growth automatically guarantees a peaceful democracy.",
            "National stability is deeply linked with equitable economic distribution.",
            "Industrialization should be halted to focus entirely on grassroots growth."
        ],
        answer: 2
    },

    {
        question: "Read the short passage and answer the question based on it:\n\nPassage: The proliferation of Artificial Intelligence (AI) tools has revolutionized productivity, but it presents a dual-use dilemma. While it can optimize governance and public service delivery, it can also be weaponized to generate deepfakes, spread misinformation, and compromise democratic elections.\n\nBased on the passage above, which of the following statements best reflects the author's view?",
        options: [
            "AI tools should be banned entirely to protect democratic processes.",
            "The benefits of AI in governance far outweigh its potential threats.",
            "AI is a neutral tool whose impact depends entirely on its regulation and usage.",
            "Technology is inherently destructive to democratic institutions."
        ],
        answer: 2
    },

    {
        question: "Read the short passage and answer the question based on it:\n\nPassage: Climate change is no longer a distant threat but a living reality. Small island nations and coastal agrarian economies are facing the brunt of rising sea levels and unpredictable monsoons. However, global climate negotiations often stall because developed nations hesitate to fully fund climate adaptation in developing regions.\n\nAccording to the passage, what is the main roadblock in addressing climate change globally?",
        options: [
            "Lack of awareness among small island nations about rising sea levels.",
            "Unpredictable monsoons that cannot be managed by modern technology.",
            "Financial reluctance on the part of developed countries to assist developing regions.",
            "A complete breakdown of diplomatic relations between global superpowers."
        ],
        answer: 2
    },

    {
        question: "Read the short passage and answer the question based on it:\n\nPassage: True education is not merely the acquisition of facts or technical skills to secure employment. It must foster critical thinking, empathy, and a sense of civic responsibility. A system that measures success solely through rote memorization and exam scores fails to prepare students for real-world complexities.\n\nWhat is the essential message of the author in this passage?",
        options: [
            "Rote learning is effective for securing employment but bad for critical thinking.",
            "The primary goal of education should be technical skill development.",
            "Educational success must be evaluated through comprehensive holistic parameters rather than just marks.",
            "Students should focus on civic responsibility instead of chasing employment."
        ],
        answer: 2
    }

];