const mathematicsQuestions = [

    // =========================
    // CATEGORY 1: NUMBER SYSTEM & DIVISIBILITY
    // =========================

    {
        question: "What is the remainder when (2^100) is divided by 7?",
        options: ["1", "2", "4", "5"],
        answer: 1
    },

    {
        question: "A 9-digit number 785x367y6 is completely divisible by 72. What is the value of (x + y) for the least possible value of y?",
        options: ["5", "7", "8", "11"],
        answer: 1
    },

    {
        question: "How many zeroes are there at the end of the product of the first 100 prime numbers?",
        options: ["1", "24", "25", "100"],
        answer: 0
    },

    {
        question: "If a modern digital clock shows time in 24-hour format (HH:MM:SS), how many times in a single day will all the digits displayed on the clock be identical?",
        options: ["3", "4", "5", "6"],
        answer: 0
    },

    {
        question: "Consider the following statements: 1. The sum of 5 consecutive integers is always divisible by 5. 2. The product of 3 consecutive integers is always divisible by 6. Which of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        answer: 2
    },


    // =========================
    // CATEGORY 2: PERMUTATIONS, COMBINATIONS & PROBABILITY
    // =========================

    {
        question: "In how many different ways can the letters of the word 'CSAT' be arranged such that the vowels never come together?",
        options: ["12", "18", "24", "6"],
        answer: 1
    },

    {
        question: "There are 10 points on a plane, out of which 4 points are collinear. How many distinct triangles can be formed by joining these points?",
        options: ["120", "116", "110", "96"],
        answer: 1
    },

    {
        question: "A bag contains 4 white, 5 red, and 6 blue balls. Three balls are drawn at random. What is the probability that all three drawn balls are of different colors?",
        options: ["4/91", "24/91", "12/455", "4/15"],
        answer: 1
    },

    {
        question: "A selection committee of 4 members is to be formed from 5 men and 4 women. In how many ways can this be done such that the committee has at least 2 women?",
        options: ["60", "65", "81", "126"],
        answer: 2
    },


    // =========================
    // CATEGORY 3: PERCENTAGES, PROFIT, LOSS & S.I./C.I.
    // =========================

    {
        question: "Due to a 20% reduction in the price of sugar, a consumer can buy 5 kg more sugar for Rs. 600. What is the original price of sugar per kg?",
        options: ["Rs. 24", "Rs. 30", "Rs. 36", "Rs. 40"],
        answer: 1
    },

    {
        question: "A dishonest milkman buys milk at cost price but mixes it with water and sells the mixture at a 10% profit on the whole layout. If his overall profit is 37.5%, what is the ratio of water to milk in the mixture?",
        options: ["1 : 3", "1 : 4", "2 : 5", "1 : 8"],
        answer: 1
    },

    {
        question: "A sum of money doubles itself in 4 years at a certain rate of compound interest, compounded annually. In how many years will it become 8 times itself at the same rate?",
        options: ["8 years", "12 years", "16 years", "24 years"],
        answer: 1
    },


    // =========================
    // CATEGORY 4: RATIOS, AVERAGES & AGES
    // =========================

    {
        question: "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average age increases by 1 year. What is the teacher's age?",
        options: ["45 years", "46 years", "47 years", "50 years"],
        answer: 1
    },

    {
        question: "Two vessels contain milk and water in the ratios 3 : 2 and 4 : 1 respectively. If equal quantities from both vessels are mixed together, what will be the ratio of milk to water in the new mixture?",
        options: ["7 : 3", "5 : 2", "19 : 31", "31 : 19"],
        answer: 0
    },

    {
        question: "Total weekly wages of a factory's staff decreased in the ratio 9 : 8, while the individual wages of each worker increased in the ratio 14 : 15. In what ratio was the number of workers reduced?",
        options: ["27 : 28", "35 : 36", "135 : 112", "112 : 135"],
        answer: 2
    },


    // =========================
    // CATEGORY 5: TIME, SPEED, DISTANCE & WORK
    // =========================

    {
        question: "A man covers a certain distance at 40 km/h and returns to the starting point at 60 km/h. What is his average speed for the entire journey?",
        options: ["48 km/h", "50 km/h", "52 km/h", "45 km/h"],
        answer: 0
    },

    {
        question: "Two trains of lengths 120 m and 180 m are running in opposite directions on parallel tracks at speeds of 42 km/h and 48 km/h respectively. In how many seconds will they completely cross each other?",
        options: ["10 seconds", "12 seconds", "15 seconds", "18 seconds"],
        answer: 1
    },

    {
        question: "A can complete a piece of work in 12 days, while B can do it in 18 days. They start working together, but A leaves 3 days before the completion of the work. In how many total days was the work completed?",
        options: ["8 days", "9 days", "10 days", "7.5 days"],
        answer: 1
    },

    {
        question: "Two pipes X and Y can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened simultaneously, but pipe X is closed after 8 minutes, how much more time will Y take to fill the remaining part of the tank?",
        options: ["10 minutes", "14 minutes", "16 minutes", "22 minutes"],
        answer: 1
    },


    // =========================
    // CATEGORY 6: UPSC ANALYTICAL PUZZLES & DATA SUFFICIENCY
    // =========================

    {
        question: "In an examination, 70% of the candidates passed in English, 80% passed in Mathematics, and 10% failed in both subjects. If 144 candidates passed in both, what was the total number of candidates?",
        options: ["200", "240", "300", "180"],
        answer: 1
    },

    {
        question: "A person has some hens and some cows. If the total number of heads is 48 and the total number of feet is 140, what is the total number of hens?",
        options: ["22", "24", "26", "28"],
        answer: 2
    },

    {
        question: "What is the age of Mohan? Statement 1: Mohan is 3 years older than Rohan. Statement 2: The sum of the ages of Mohan and Rohan is 35 years. Which one of the following is correct?",
        options: [
            "Statement 1 alone is sufficient to answer the question.",
            "Statement 2 alone is sufficient to answer the question.",
            "Both Statement 1 and Statement 2 together are sufficient, but neither statement alone is sufficient.",
            "Both Statement 1 and Statement 2 together are not sufficient."
        ],
        answer: 2
    },

    {
        question: "A 3-digit number 'abc' is such that it is equal to the sum of the cubes of its digits (a^3 + b^3 + c^3). If the number is between 370 and 380, what is the units digit 'c'?",
        options: ["0", "1", "3", "5"],
        answer: 1
    },

    {
        question: "If 3 days ago was Tuesday, what day of the week will it be 50 days from today?",
        options: ["Friday", "Saturday", "Sunday", "Monday"],
        answer: 1
    },

    {
        question: "Five persons A, B, C, D, and E occupy a row of five seats. If A and B must always sit next to each other, in how many distinct arrangements can the five individuals be seated?",
        options: ["24", "48", "120", "60"],
        answer: 1
    },

    {
        question: "What is the remainder when (3^2021) is divided by 10?",
        options: ["1", "3", "7", "9"],
        answer: 1
    },

    {
        question: "Three bells toll together at intervals of 9, 12, and 15 minutes respectively. If they toll together now, after how many hours will they toll together next?",
        options: ["2 hours", "3 hours", "6 hours", "9 hours"],
        answer: 1
    },

    {
        question: "What is the unit digit in the product of (7^95 - 3^58)?",
        options: ["0", "4", "6", "7"],
        answer: 1
    },

    {
        question: "How many divisors (factors) does the number 360 have?",
        options: ["12", "18", "24", "36"],
        answer: 2
    },


    // =========================
    // CATEGORY 8: CLOCKS, CALENDARS & SEQUENCES
    // =========================

    {
        question: "At what angle are the hands of a clock inclined at 20 minutes past 7?",
        options: ["80 degrees", "90 degrees", "100 degrees", "110 degrees"],
        answer: 2
    },

    {
        question: "If 15th January 2024 was a Monday, what day of the week was 15th January 2025?",
        options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        answer: 1
    },

    {
        question: "What is the missing number in the sequence: 2, 5, 11, 23, 47, ?",
        options: ["71", "91", "95", "99"],
        answer: 2
    },

    {
        question: "Consider the sequence: 4, 9, 25, 49, 121, ?. What is the next term?",
        options: ["144", "169", "196", "225"],
        answer: 1
    },


    // =========================
    // CATEGORY 9: PERMUTATIONS & PROBABILITY PART II
    // =========================

    {
        question: "How many 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5 (without repetition) such that the number is completely divisible by 4?",
        options: ["12", "24", "36", "48"],
        answer: 1
    },

    {
        question: "Two dice are thrown simultaneously. What is the probability that the sum of the numbers appearing on them is a prime number?",
        options: ["5/12", "7/12", "1/2", "1/3"],
        answer: 0
    },


    // =========================
    // CATEGORY 10: PERCENTAGES, PROFIT, LOSS & MIXTURES
    // =========================

    {
        question: "In an election between two candidates, the candidate who gets 60% of the votes polled is elected by a majority of 2400 votes. What is the total number of votes polled?",
        options: ["8000", "10000", "12000", "15000"],
        answer: 2
    },

    {
        question: "A man sells an article at a gain of 15%. If he had bought it at 10% less and sold it for Rs. 4 less, he would have gained 25%. What is the cost price of the article?",
        options: ["Rs. 140", "Rs. 150", "Rs. 160", "Rs. 180"],
        answer: 2
    },

    {
        question: "In what ratio must a grocer mix tea at Rs. 60 per kg and Rs. 65 per kg so that by selling the mixture at Rs. 68.20 per kg he may gain 10%?",
        options: ["3 : 2", "3 : 4", "2 : 3", "4 : 5"],
        answer: 0
    },


    // =========================
    // CATEGORY 11: AVERAGES, RATIOS & AGES PART II
    // =========================

    {
        question: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
        options: ["70 kg", "75 kg", "80 kg", "85 kg"],
        answer: 3
    },

    {
        question: "A, B, and C invest in a business in the ratio 3 : 4 : 5. If their investing time periods are in the ratio 2 : 3 : 4, what is the ratio of their profits?",
        options: ["3 : 4 : 5", "6 : 12 : 20", "3 : 6 : 10", "2 : 3 : 4"],
        answer: 2
    },

    {
        question: "Ten years ago, the age of a father was four times his son's age. Ten years hence, the father's age will be twice the son's age. What is the father's present age?",
        options: ["40 years", "50 years", "55 years", "60 years"],
        answer: 1
    },


    // =========================
    // CATEGORY 12: WORK, SPEED, DISTANCE & STREAMS
    // =========================

    {
        question: "A and B can do a piece of work in 10 days, B and C in 15 days, and C and A in 20 days. In how many days can C alone complete the work?",
        options: ["60 days", "80 days", "120 days", "150 days"],
        answer: 2
    },

    {
        question: "Excluding stoppages, the speed of a bus is 54 km/h and including stoppages, it is 45 km/h. For how many minutes does the bus stop per hour?",
        options: ["8 minutes", "10 minutes", "12 minutes", "15 minutes"],
        answer: 1
    },

    {
        question: "A boat moves downstream at the rate of 16 km/h and upstream at the rate of 10 km/h. What is the speed of the stream?",
        options: ["2 km/h", "3 km/h", "4 km/h", "6 km/h"],
        answer: 1
    },


    // =========================
    // CATEGORY 13: ALGEBRA & MENSURATION
    // =========================

    {
        question: "If x + 1/x = 5, then what is the value of x^2 + 1/x^2?",
        options: ["23", "25", "27", "10"],
        answer: 0
    },

    {
        question: "If the radius of a sphere is increased by 10%, what is the percentage increase in its volume?",
        options: ["21%", "30%", "33.1%", "40%"],
        answer: 2
    },


    // =========================
    // CATEGORY 14: LOGIC, VENN DIAGRAMS & CRYPTARITHMS
    // =========================

    {
        question: "In a group of 100 people, 65 can speak English and 52 can speak Hindi. If all people speak at least one of the two languages, how many can speak both English and Hindi?",
        options: ["15", "17", "22", "30"],
        answer: 1
    },

    {
        question: "In the addition problem below, A and B represent single digits: 2A × A5 = B1. What is the value of A + B?",
        options: ["11", "13", "15", "17"],
        answer: 2
    },

    {
        question: "The difference between compound interest and simple interest on a certain sum of money at 10% per annum for 2 years is Rs. 50. What is the sum?",
        options: ["Rs. 2500", "Rs. 4000", "Rs. 5000", "Rs. 6000"],
        answer: 2
    },

    {
        question: "Is x an integer? Statement 1: x/3 is an integer. Statement 2: 3x is an integer. Which one of the following is correct?",
        options: [
            "Statement 1 alone is sufficient to answer the question.",
            "Statement 2 alone is sufficient to answer the question.",
            "Both Statement 1 and Statement 2 together are sufficient.",
            "Neither statement 1 nor 2 is sufficient."
        ],
        answer: 0
    },

    {
        question: "If a 3-digit number is subtracted from the number formed by reversing its digits, the resulting number is always completely divisible by which of the following?",
        options: ["9 and 11", "9 and 99", "11 and 99", "9, 11, and 99"],
        answer: 1
    },

    {
        question: "What is the total number of trailing zeroes at the end of 50! (50 factorial)?",
        options: ["10", "11", "12", "14"],
        answer: 2
    },

    {
        question: "A number when divided by 6 leaves a remainder of 3. What will be the remainder when the square of the same number is divided by 6?",
        options: ["0", "1", "3", "4"],
        answer: 2
    },

    {
        question: "Which of the following numbers is completely divisible by 11?",
        options: ["4567894", "5467894", "8697562", "9012432"],
        answer: 2
    },


    // =========================
    // CATEGORY 16: CALENDARS & CLOCKS PART II
    // =========================

    {
        question: "Which year will have the exact same calendar as the year 2025?",
        options: ["2030", "2031", "2036", "2042"],
        answer: 1
    },

    {
        question: "A clock is set right at 5 a.m. The clock loses 16 minutes in 24 hours. What will be the true time when the clock indicates 10 p.m. on the 4th day?",
        options: ["9 p.m.", "10 p.m.", "11 p.m.", "12 a.m. (Midnight)"],
        answer: 2
    },

    {
        question: "A reflection of a wall clock in a mirror shows the time as 3:15. What is the actual time displayed on the clock?",
        options: ["8:45", "9:45", "7:45", "8:15"],
        answer: 0
    },


    // =========================
    // CATEGORY 17: PERMUTATIONS, COMBINATIONS & HANDSHAKES
    // =========================

    {
        question: "In a business meeting, every person shakes hands with every other person exactly once. If the total number of handshakes exchanged is 66, how many people attended the meeting?",
        options: ["11", "12", "13", "14"],
        answer: 1
    },

    {
        question: "In how many different ways can a team of 11 cricket players be chosen from 15 players if a particular captain must always be included?",
        options: ["1001", "1365", "3003", "364"],
        answer: 0
    },

    {
        question: "A box contains 3 black, 4 white, and 5 yellow balls. If two balls are drawn at random simultaneously, what is the probability that neither of them is yellow?",
        options: ["7/22", "5/12", "21/44", "5/22"],
        answer: 0
    },


    // =========================
    // CATEGORY 18: PERCENTAGES & BUSINESS MATH
    // =========================

    {
        question: "If the price of petrol increases by 25%, by how much percentage must a car owner reduce his consumption so that his total expenditure on petrol remains unchanged?",
        options: ["20%", "25%", "16.67%", "33.33%"],
        answer: 0
    },

    {
        question: "An item is marked up by 40% above its cost price. What is the maximum percentage discount the shopkeeper can offer so that he still breaks even (no profit, no loss)?",
        options: ["25%", "28.57%", "30%", "40%"],
        answer: 1
    },

    {
        question: "A man invested 1/3 of his capital at 7%, 1/4 at 8%, and the remaining balance at 10% simple interest per annum. If his total annual interest income is Rs. 561, what is his total capital?",
        options: ["Rs. 5400", "Rs. 6000", "Rs. 6600", "Rs. 7200"],
        answer: 2
    },


    // =========================
    // CATEGORY 19: RATIOS, COIN PROBLEMS & MIXTURES
    // =========================

    {
        question: "A bag contains Rs. 1, 50-paise, and 25-paise coins in the ratio of 5 : 6 : 8. If the total value of all the money in the bag is Rs. 210, what is the total number of 50-paise coins?",
        options: ["105", "126", "140", "168"],
        answer: 1
    },

    {
        question: "A batsman scored 87 runs in his 17th inning, thereby increasing his overall career average by 3 runs per inning. What is his career average after the 17th inning?",
        options: ["36", "39", "42", "45"],
        answer: 1
    },

    {
        question: "A 40-liter mixture contains milk and water in the ratio 3 : 1. How much water (in liters) must be added to this mixture so that the ratio of milk to water reverses to 1 : 3?",
        options: ["40 liters", "60 liters", "80 liters", "120 liters"],
        answer: 2
    },


    // =========================
    // CATEGORY 20: SPEED, DISTANCE, TIME & RACES
    // =========================

    {
        question: "Walking at 3/4 of his usual speed, a man reaches his office 20 minutes late. What is his usual time taken to reach the office?",
        options: ["45 minutes", "60 minutes", "75 minutes", "80 minutes"],
        answer: 1
    },

    {
        question: "In a 100-meter race, A beats B by 10 meters, and B beats C by 10 meters. By how many meters does A beat C in the same race?",
        options: ["19 meters", "20 meters", "21 meters", "25 meters"],
        answer: 0
    },

    {
        question: "A train running at a speed of 72 km/h crosses a 260-meter-long platform in 23 seconds. What is the length of the train?",
        options: ["160 meters", "200 meters", "240 meters", "250 meters"],
        answer: 1
    },


    // =========================
    // CATEGORY 21: WORK, PIPES & EFFICIENCY
    // =========================

    {
        question: "A is twice as efficient as B and is therefore able to finish a piece of work in 30 days less than B. Working together, how many days will they take to complete the exact same work?",
        options: ["15 days", "20 days", "22.5 days", "25 days"],
        answer: 1
    },

    {
        question: "Pipe A can fill a cistern in 6 hours, while Pipe B can empty the full cistern in 10 hours. If both pipes are opened together in an empty cistern, how long will it take to fill the cistern completely?",
        options: ["12 hours", "15 hours", "16 hours", "18 hours"],
        answer: 1
    },


    // =========================
    // CATEGORY 22: MENSURATION & GEOMETRY CONCEPTS
    // =========================

    {
        question: "A copper wire is bent in the form of a square enclosing an area of 121 sq. cm. If the same wire is bent to form a circle, what will be the area enclosed by the circle? (Take pi = 22/7)",
        options: ["132 sq. cm", "144 sq. cm", "154 sq. cm", "176 sq. cm"],
        answer: 2
    },

    {
        question: "How many solid spherical leads, each of radius 2 cm, can be made by melting a solid lead cylinder of base radius 8 cm and height 8 cm?",
        options: ["16", "24", "32", "48"],
        answer: 1
    },


    // =========================
    // CATEGORY 23: LOGICAL SEQUENCE & DATA SUFFICIENCY
    // =========================

    {
        question: "In a row of students facing North, X is 13th from the left end and Y is 17th from the right end. If they interchange their positions, X becomes 21st from the left end. How many total students are there in the row?",
        options: ["36", "37", "38", "39"],
        answer: 1
    },

    {
        question: "What is the value of the two-digit number 'XY'? Statement 1: The sum of the digits (X + Y) is 9. Statement 2: The difference between the number and the number formed by reversing its digits is 27. Which one of the following is correct?",
        options: [
            "Statement 1 alone is sufficient.",
            "Statement 2 alone is sufficient.",
            "Both Statement 1 and Statement 2 together are sufficient, but neither alone is sufficient.",
            "Both Statement 1 and Statement 2 together are still not sufficient to find a unique value."
        ],
        answer: 3
    },

    {
        question: "What is the remainder when (4^96) is divided by 6?",
        options: ["1", "2", "3", "4"],
        answer: 3
    },

    {
        question: "The HCF and LCM of two numbers are 12 and 72 respectively. If the sum of the two numbers is 60, what is the value of the smaller number?",
        options: ["12", "24", "36", "48"],
        answer: 1
    },

    {
        question: "If n is a positive integer, what is the largest integer that always divides the expression (n^3 - n)?",
        options: ["3", "4", "6", "12"],
        answer: 2
    },

    {
        question: "A set of page numbers of a book are added together. However, one page number was accidentally counted twice, resulting in an incorrect total of 1000. Which page number was counted twice?",
        options: ["10", "35", "45", "55"],
        answer: 1
    },


    // =========================
    // CATEGORY 25: PERMUTATIONS, COMBINATIONS & GROUPING
    // =========================

    {
        question: "In how many different ways can the letters of the word 'UPSC' be arranged such that the letter 'U' always occupies the first position?",
        options: ["6", "12", "24", "48"],
        answer: 0
    },

    {
        question: "There are 8 horizontal lines and 6 vertical lines on a grid. How many distinct rectangles can be formed using these lines?",
        options: ["48", "210", "420", "480"],
        answer: 2
    },

    {
        question: "A fair coin is tossed 4 times. What is the probability of getting at least 2 heads?",
        options: ["1/2", "5/8", "11/16", "3/4"],
        answer: 2
    },


    // =========================
    // CATEGORY 26: PERCENTAGES, PROFIT & LOSS PART III
    // =========================

    {
        question: "A retailer offers two successive discounts of 20% and 10% on a jacket. What is the single equivalent net discount offered to the customer?",
        options: ["28%", "30%", "32%", "35%"],
        answer: 0
    },

    {
        question: "The income of A is 25% more than B's income, and B's income is 20% more than C's income. By what percentage is A's income more than C's income?",
        options: ["45%", "50%", "60%", "75%"],
        answer: 1
    },

    {
        question: "A merchant uses a faulty scale that reads 1000 grams for an actual weight of 900 grams. If he sells his goods at the cost price, what is his actual profit percentage?",
        options: ["10%", "11.11%", "12.5%", "15%"],
        answer: 1
    },


    // =========================
    // CATEGORY 27: RATIOS, MIXTURES & TEAM AVERAGES
    // =========================

    {
        question: "The average age of a husband and wife was 23 years when they were married 5 years ago. Today, the average age of the husband, wife, and their newborn child is 20 years. What is the present age of the child?",
        options: ["1 year", "2 years", "3 years", "4 years"],
        answer: 1
    },

    {
        question: "A container holds 60 liters of pure milk. 6 liters of milk is extracted and replaced with an equal amount of water. This process is repeated one more time. How many liters of pure milk remain in the container now?",
        options: ["48 liters", "48.6 liters", "49.2 liters", "54 liters"],
        answer: 1
    },

    {
        question: "If A : B = 2 : 3, B : C = 4 : 5, and C : D = 6 : 7, what is the ratio of A : D?",
        options: ["12 : 35", "16 : 35", "18 : 35", "24 : 35"],
        answer: 1
    },


    // =========================
    // CATEGORY 28: COMPLEX TIME, DISTANCE & ALTERNATING WORK
    // =========================

    {
        question: "A thief steals a car at 1:30 p.m. and drives it at a speed of 40 km/h. The theft is discovered at 2:00 p.m. and the owner sets off in another car at a speed of 50 km/h. At what time will the owner catch the thief?",
        options: ["3:30 p.m.", "4:00 p.m.", "4:30 p.m.", "5:00 p.m."],
        answer: 1
    },

    {
        question: "A boat goes 24 km upstream and 28 km downstream in a total of 6 hours. It can also go 30 km upstream and 21 km downstream in 6.5 hours. What is the speed of the boat in still water?",
        options: ["8 km/h", "10 km/h", "12 km/h", "14 km/h"],
        answer: 1
    },

    {
        question: "X can complete a job in 10 days and Y can do it in 20 days. They work on alternate days, starting with X on the first day. In how many days will the work be completed?",
        options: ["13 days", "13.5 days", "14 days", "15 days"],
        answer: 1
    },

    {
        question: "An inlet pipe can fill a pool in 8 hours, but a leak at the bottom empties it in 12 hours. If both the pipe and leak are active, how many hours will it take to fill the empty pool?",
        options: ["16 hours", "20 hours", "24 hours", "28 hours"],
        answer: 2
    },


    // =========================
    // CATEGORY 29: CALENDARS, CLOCKS & SERIES PATTERNS
    // =========================

    {
        question: "Which of the following years is a leap year?",
        options: ["1800", "1900", "2000", "2100"],
        answer: 2
    },

    {
        question: "Find the missing entry in the mixed alphanumeric sequence: A1Z, C4X, F9U, J16Q, ?",
        options: ["O25M", "O25L", "N25M", "N25L"],
        answer: 1
    },

    {
        question: "How many times do the hour hand and minute hand of a clock form a straight line (either pointing in opposite directions or coinciding) in a 24-hour day?",
        options: ["22", "24", "44", "48"],
        answer: 2
    },


    // =========================
    // CATEGORY 30: SET THEORY, LOGIC & DATA SUFFICIENCY
    // =========================

    {
        question: "Out of 120 civil services aspirants, 70 study History, 55 study Geography, and 30 study both subjects. How many aspirants study neither History nor Geography?",
        options: ["20", "25", "30", "35"],
        answer: 1
    },

    {
        question: "What is the value of the integer x? Statement 1: x is a prime number less than 10. Statement 2: (x - 1) is a multiple of 4. Which one of the following is correct?",
        options: [
            "Statement 1 alone is sufficient.",
            "Statement 2 alone is sufficient.",
            "Both Statement 1 and Statement 2 together are sufficient.",
            "Both Statement 1 and Statement 2 together are still not sufficient."
        ],
        answer: 2
    },

    {
        question: "In a certain secret code language, '453' means 'Keep Clean Study', '592' means 'Study Hard Always', and '264' means 'Always Clean Ground'. Which digit stands for 'Keep' in that language?",
        options: ["3", "4", "5", "6"],
        answer: 0
    },

    {
        question: "A total of 30 wrapper tokens can be exchanged for 1 new chocolate bar. If a child collects 1000 wrapper tokens, what is the maximum number of chocolates they can enjoy through repeated exchanges?",
        options: ["33", "34", "44", "45"],
        answer: 1
    },

    {
        question: "If an operation (*) is defined such that x * y = (x × y) / (x + y), what is the value of 6 * 3?",
        options: ["2", "3", "9", "18"],
        answer: 0
    }

];