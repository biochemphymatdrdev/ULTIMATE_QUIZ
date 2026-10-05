const physicsQuestions = [

  // ==============================
  // SECTION 1: MECHANICS
  // Questions 1-20
  // ==============================

  {
    question: "Who proposed the Corpuscular Theory of Light?",
    options: [
      "Christiaan Huygens",
      "Sir Isaac Newton",
      "Thomas Young",
      "Albert Einstein"
    ],
    answer: 1
  },

  {
    question: "Which law explains the working principle of hydraulic brakes?",
    options: [
      "Archimedes' Principle",
      "Bernoulli's Principle",
      "Pascal's Law",
      "Newton's Third Law"
    ],
    answer: 2
  },

  {
    question: "What is the value of the gravitational constant (G)?",
    options: [
      "9.8 m/s²",
      "6.67 × 10⁻¹¹ N·m²/kg²",
      "3 × 10⁸ m/s",
      "1.6 × 10⁻¹⁹ C"
    ],
    answer: 1
  },

  {
    question: "What is the working principle of a jet engine?",
    options: [
      "Conservation of Mass",
      "Conservation of Angular Momentum",
      "Conservation of Linear Momentum",
      "Conservation of Energy"
    ],
    answer: 2
  },

  {
    question: "What is the SI unit of power?",
    options: [
      "Joule",
      "Pascal",
      "Watt",
      "Newton"
    ],
    answer: 2
  },

  {
    question: "If the distance between two objects is doubled, the gravitational force between them becomes:",
    options: [
      "Double",
      "Half",
      "One-fourth",
      "Four times"
    ],
    answer: 2
  },

  {
    question: "Which of the following is a scalar quantity?",
    options: [
      "Velocity",
      "Force",
      "Momentum",
      "Speed"
    ],
    answer: 3
  },

  {
    question: "An astronaut in the International Space Station experiences weightlessness because:",
    options: [
      "There is no gravity in space.",
      "The space station is always in a state of free fall.",
      "The atmospheric pressure is zero.",
      "The centrifugal force cancels out gravity."
    ],
    answer: 1
  },

  {
    question: "What is the approximate value of the acceleration due to gravity (g) on Earth's surface?",
    options: [
      "9.8 m/s²",
      "8.6 m/s²",
      "10.5 m/s²",
      "12.0 m/s²"
    ],
    answer: 0
  },

  {
    question: "Which physical quantity is represented by the rate of change of momentum?",
    options: [
      "Work",
      "Power",
      "Force",
      "Energy"
    ],
    answer: 2
  },

  {
    question: "Which of the following is a vector quantity?",
    options: [
      "Speed",
      "Mass",
      "Velocity",
      "Distance"
    ],
    answer: 2
  },

  {
    question: "The frictional force acting on a moving object is called:",
    options: [
      "Static Friction",
      "Rolling Friction",
      "Kinetic Friction",
      "Limiting Friction"
    ],
    answer: 2
  },

  {
    question: "Which of the following demonstrates the conservation of angular momentum?",
    options: [
      "An ice skater spins faster by bringing the arms closer to the body.",
      "Rocket propulsion",
      "Swimming",
      "Bouncing a ball"
    ],
    answer: 0
  },

  {
    question: "What determines the moment of inertia of a rigid body?",
    options: [
      "Mass only",
      "Mass, size, and shape of the object",
      "Distribution of mass about the axis of rotation",
      "Speed of rotation"
    ],
    answer: 2
  },

  {
    question: "A centrifuge, such as a washing machine dryer, works mainly due to:",
    options: [
      "Centripetal Force",
      "Centrifugal Effect",
      "Frictional Force",
      "Gravitational Force"
    ],
    answer: 1
  },

  {
    question: "The bending or spreading of waves around the corners of an obstacle is called:",
    options: [
      "Reflection",
      "Refraction",
      "Diffraction",
      "Dispersion"
    ],
    answer: 2
  },

  {
    question: "What is the unit of relative density?",
    options: [
      "kg/m³",
      "g/cm³",
      "No unit (Dimensionless)",
      "N/m²"
    ],
    answer: 2
  },

  {
    question: "Which principle states that the buoyant force on an object is equal to the weight of the fluid displaced by it?",
    options: [
      "Pascal's Law",
      "Archimedes' Principle",
      "Bernoulli's Theorem",
      "Stokes' Law"
    ],
    answer: 1
  },

  {
    question: "What is the relationship between linear velocity (v) and angular velocity (ω) in circular motion?",
    options: [
      "v = ωr",
      "v = ω/r",
      "v = ω²r",
      "v = r/ω"
    ],
    answer: 0
  },

  {
    question: "According to Kepler's First Law, planets move in which type of orbit?",
    options: [
      "Circular",
      "Elliptical",
      "Parabolic",
      "Hyperbolic"
    ],
    answer: 1
  },


  // ==============================
  // SECTION 2: HEAT & THERMODYNAMICS
  // Questions 21-40
  // ==============================

  {
    question: "What is the boiling point of water on the Kelvin scale?",
    options: [
      "273.15 K",
      "373.15 K",
      "100 K",
      "212 K"
    ],
    answer: 1
  },

  {
    question: "Which process is responsible for the transfer of heat from the Sun to the Earth?",
    options: [
      "Conduction",
      "Convection",
      "Radiation",
      "Both A and B"
    ],
    answer: 2
  },

  {
    question: "Which law of thermodynamics states that the entropy of an isolated system tends to increase?",
    options: [
      "First Law of Thermodynamics",
      "Zeroth Law of Thermodynamics",
      "Second Law of Thermodynamics",
      "Third Law of Thermodynamics"
    ],
    answer: 2
  },

  {
    question: "What is the SI unit of heat?",
    options: [
      "Kelvin",
      "Watt",
      "Joule",
      "Pascal"
    ],
    answer: 2
  },

  {
    question: "Which type of surface is generally a poor reflector but a good radiator of heat?",
    options: [
      "Shiny metal",
      "Dark-colored surface",
      "White liquid",
      "Transparent gas"
    ],
    answer: 1
  },

  {
    question: "Why do metal utensils feel colder than wooden ones at the same temperature?",
    options: [
      "Metals contain more heat.",
      "Metals are good conductors of heat.",
      "Wood absorbs heat from the body.",
      "Metals radiate cold."
    ],
    answer: 1
  },

  {
    question: "What happens to the boiling point of water at high altitudes?",
    options: [
      "It increases.",
      "It decreases.",
      "It remains constant.",
      "It becomes zero."
    ],
    answer: 1
  },

  {
    question: "Which phenomenon explains the formation of a mirage in a desert?",
    options: [
      "Total Internal Reflection",
      "Refraction of Light",
      "Dispersion of Light",
      "Interference of Light"
    ],
    answer: 0
  },

  {
    question: "What principle is used by a pyrometer to measure very high temperatures?",
    options: [
      "Thermal Expansion of Liquids",
      "Change in Electrical Resistance",
      "Thermal Radiation",
      "Doppler Effect"
    ],
    answer: 2
  },

  {
    question: "Which gas has been used as a coolant in some nuclear reactors?",
    options: [
      "Oxygen",
      "Nitrogen",
      "Carbon Dioxide",
      "Helium"
    ],
    answer: 2
  },

  {
    question: "What is the value of absolute zero in degrees Celsius?",
    options: [
      "0°C",
      "−273.15°C",
      "−100°C",
      "−40°C"
    ],
    answer: 1
  },

  {
    question: "Heat transfer through molecular collisions without actual movement of the medium is called:",
    options: [
      "Conduction",
      "Convection",
      "Radiation",
      "Vaporization"
    ],
    answer: 0
  },

  {
    question: "The pressure of a gas is inversely proportional to its volume at constant temperature. This is known as:",
    options: [
      "Charles's Law",
      "Boyle's Law",
      "Avogadro's Law",
      "Gay-Lussac's Law"
    ],
    answer: 1
  },

  {
    question: "In a thermos flask, the vacuum between the double walls prevents heat transfer mainly by:",
    options: [
      "Conduction only",
      "Convection only",
      "Conduction and Convection",
      "Radiation only"
    ],
    answer: 2
  },

  {
    question: "Which law forms the basis for defining temperature?",
    options: [
      "First Law of Thermodynamics",
      "Zeroth Law of Thermodynamics",
      "Second Law of Thermodynamics",
      "Third Law of Thermodynamics"
    ],
    answer: 1
  },

  {
    question: "What happens to the latent heat of vaporization of water as temperature increases?",
    options: [
      "It increases.",
      "It remains constant.",
      "It becomes zero.",
      "It decreases."
    ],
    answer: 3
  },

  {
    question: "The greenhouse effect is primarily caused by:",
    options: [
      "Infrared radiation being trapped by gases in the atmosphere.",
      "Ultraviolet rays being reflected by clouds.",
      "Visible light being converted into sound.",
      "Cosmic rays entering the atmosphere."
    ],
    answer: 0
  },

  {
    question: "Which of the following has the highest specific heat capacity?",
    options: [
      "Copper",
      "Iron",
      "Water",
      "Mercury"
    ],
    answer: 2
  },

  {
    question: "In an adiabatic process:",
    options: [
      "Temperature remains constant.",
      "Pressure remains constant.",
      "No heat is exchanged with the surroundings.",
      "Volume remains constant."
    ],
    answer: 2
  },

  {
    question: "The efficiency of a Carnot engine depends on:",
    options: [
      "The working substance used.",
      "The temperatures of the heat source and heat sink.",
      "The volume of the cylinder.",
      "The atmospheric pressure."
    ],
    answer: 1
  },


  // ==============================
  // SECTION 3: LIGHT & OPTICS
  // Questions 41-60
  // ==============================

  {
    question: "What is the splitting of white light into its constituent colors called?",
    options: [
      "Reflection",
      "Refraction",
      "Dispersion",
      "Polarization"
    ],
    answer: 2
  },

  {
    question: "Optical fibers operate on which fundamental physical principle?",
    options: [
      "Total Internal Reflection",
      "Refraction",
      "Scattering",
      "Interference"
    ],
    answer: 0
  },

  {
    question: "What is the focal length of a plane mirror?",
    options: [
      "Zero",
      "10 cm",
      "Infinity",
      "Negative"
    ],
    answer: 2
  },

  {
    question: "Which type of lens is used to correct myopia?",
    options: [
      "Convex Lens",
      "Concave Lens",
      "Cylindrical Lens",
      "Bifocal Lens"
    ],
    answer: 1
  },

  {
    question: "Which color of visible light has the longest wavelength?",
    options: [
      "Violet",
      "Green",
      "Yellow",
      "Red"
    ],
    answer: 3
  },

  {
    question: "What type of image is formed by a convex mirror?",
    options: [
      "Real and inverted",
      "Virtual and erect",
      "Real and erect",
      "Virtual and inverted"
    ],
    answer: 1
  },

  {
    question: "Why does the sky appear blue on a clear day?",
    options: [
      "Rayleigh scattering of light",
      "Reflection of light from oceans",
      "Absorption of light by the ozone layer",
      "Refraction of light by ice crystals"
    ],
    answer: 0
  },

  {
    question: "What is the SI unit of luminous intensity?",
    options: [
      "Lumen",
      "Lux",
      "Candela",
      "Watt"
    ],
    answer: 2
  },

  {
    question: "What type of image is formed on a cinema screen?",
    options: [
      "Virtual image",
      "Real image",
      "Magnified image",
      "Diminished image"
    ],
    answer: 1
  },

  {
    question: "What is the approximate speed of light in a vacuum?",
    options: [
      "3 × 10⁸ m/s",
      "3 × 10⁵ m/s",
      "3 × 10⁶ m/s",
      "3 × 10⁴ m/s"
    ],
    answer: 0
  },

  {
    question: "When a ray of light passes from a rarer medium to a denser medium, it bends:",
    options: [
      "Towards the normal",
      "Away from the normal",
      "It remains undeviated.",
      "Parallel to the normal"
    ],
    answer: 0
  },

  {
    question: "The twinkling of stars is primarily due to:",
    options: [
      "Total Internal Reflection",
      "Atmospheric Refraction",
      "Dispersion of Light",
      "Interference of Light"
    ],
    answer: 1
  },

  {
    question: "Which color of light deviates the most when passing through a prism?",
    options: [
      "Red",
      "Yellow",
      "Green",
      "Violet"
    ],
    answer: 3
  },

  {
    question: "Myopia is:",
    options: [
      "The inability to see distant objects clearly.",
      "The inability to see nearby objects clearly.",
      "An age-related eye defect.",
      "Clouding of the eye lens."
    ],
    answer: 0
  },

  {
    question: "A magnifying glass is a simple:",
    options: [
      "Concave Lens",
      "Convex Lens",
      "Plane Mirror",
      "Convex Mirror"
    ],
    answer: 1
  },

  {
    question: "Which phenomenon proves that light is a transverse wave?",
    options: [
      "Interference",
      "Diffraction",
      "Polarization",
      "Reflection"
    ],
    answer: 2
  },

  {
    question: "What happens to the frequency of light when it passes from one medium to another?",
    options: [
      "It increases.",
      "It decreases.",
      "It remains constant.",
      "It becomes zero."
    ],
    answer: 2
  },

  {
    question: "Which mirror is commonly used as a rear-view mirror in vehicles?",
    options: [
      "Plane Mirror",
      "Concave Mirror",
      "Convex Mirror",
      "Parabolic Mirror"
    ],
    answer: 2
  },

  {
    question: "Rainbows are formed due to:",
    options: [
      "Reflection and Refraction",
      "Refraction and Dispersion",
      "Refraction, Internal Reflection, and Dispersion",
      "Total Internal Reflection only"
    ],
    answer: 2
  },

  {
    question: "Which type of lens is used to correct hypermetropia?",
    options: [
      "Convex Lens",
      "Concave Lens",
      "Cylindrical Lens",
      "Plane Lens"
    ],
    answer: 0
  },


  // ==============================
  // SECTION 4: ELECTRICITY & MAGNETISM
  // Questions 61-80
  // ==============================

  {
    question: "What is the SI unit of electric current?",
    options: [
      "Volt",
      "Ohm",
      "Ampere",
      "Coulomb"
    ],
    answer: 2
  },

  {
    question: "Which instrument is used to measure electric current?",
    options: [
      "Voltmeter",
      "Ammeter",
      "Galvanometer",
      "Potentiometer"
    ],
    answer: 1
  },

  {
    question: "Which of the following is the best conductor of electricity?",
    options: [
      "Gold",
      "Silver",
      "Copper",
      "Aluminum"
    ],
    answer: 1
  },

  {
    question: "The resistance of a wire is directly proportional to its:",
    options: [
      "Length",
      "Cross-sectional area",
      "Density",
      "Volume"
    ],
    answer: 0
  },

  {
    question: "Which law describes the relationship between potential difference and electric current?",
    options: [
      "Faraday's Law",
      "Ohm's Law",
      "Joule's Law",
      "Kirchhoff's Law"
    ],
    answer: 1
  },

  {
    question: "What happens to the resistance of a semiconductor as its temperature increases?",
    options: [
      "It increases.",
      "It decreases.",
      "It remains constant.",
      "It becomes infinite."
    ],
    answer: 1
  },

  {
    question: "In a domestic electrical circuit, electrical appliances are connected in:",
    options: [
      "Series",
      "Parallel",
      "Series-Parallel Combination",
      "Depends on the appliance"
    ],
    answer: 1
  },

  {
    question: "The magnetic field inside a long current-carrying solenoid is approximately:",
    options: [
      "Zero at all points",
      "Uniform in the central region",
      "Strongest near the ends",
      "Weaker near the center"
    ],
    answer: 1
  },

  {
    question: "Which rule is used to determine the direction of the magnetic field around a straight current-carrying conductor?",
    options: [
      "Fleming's Left-Hand Rule",
      "Right-Hand Thumb Rule",
      "Fleming's Right-Hand Rule",
      "Lenz's Law"
    ],
    answer: 1
  },

  {
    question: "A transformer operates on the principle of:",
    options: [
      "Electromagnetic Induction",
      "Self-Induction",
      "Mutual Induction",
      "Both Self-Induction and Mutual Induction"
    ],
    answer: 2
  },

  {
    question: "What does a galvanometer measure?",
    options: [
      "Large electric currents",
      "The presence and direction of a small electric current",
      "Voltage",
      "Resistance"
    ],
    answer: 1
  },

  {
    question: "What is the SI unit of magnetic flux?",
    options: [
      "Tesla",
      "Weber",
      "Gauss",
      "Henry"
    ],
    answer: 1
  },

  {
    question: "Which of the following is a non-magnetic material?",
    options: [
      "Iron",
      "Cobalt",
      "Nickel",
      "Aluminum"
    ],
    answer: 3
  },

  {
    question: "The energy stored in an inductor is in the form of:",
    options: [
      "Electrostatic Energy",
      "Magnetic Energy",
      "Heat Energy",
      "Kinetic Energy"
    ],
    answer: 1
  },

  {
    question: "Which device converts alternating current (AC) into direct current (DC)?",
    options: [
      "Transformer",
      "Rectifier",
      "Inverter",
      "Transistor"
    ],
    answer: 1
  },

  {
    question: "Superconductors have:",
    options: [
      "Zero electrical resistance",
      "High electrical resistance",
      "Infinite resistance",
      "Variable resistance"
    ],
    answer: 0
  },

  {
    question: "The total resistance of resistors connected in series is:",
    options: [
      "R = (R₁ × R₂)/(R₁ + R₂)",
      "R = R₁ + R₂",
      "R = 1/R₁ + 1/R₂",
      "R = √(R₁ × R₂)"
    ],
    answer: 1
  },

  {
    question: "Fleming's Left-Hand Rule is used to determine the:",
    options: [
      "Direction of the induced current",
      "Direction of the force on a current-carrying conductor in a magnetic field",
      "Direction of magnetic field lines",
      "Rate of change of magnetic flux"
    ],
    answer: 1
  },

  {
    question: "The working principle of an electric generator is based on:",
    options: [
      "Electromagnetic Induction",
      "Heating Effect of Electric Current",
      "Magnetic Effect of Electric Current",
      "Electrostatic Induction"
    ],
    answer: 0
  },

  {
    question: "What is the SI unit of capacitance?",
    options: [
      "Farad",
      "Henry",
      "Coulomb",
      "Ohm"
    ],
    answer: 0
  },


  // ==============================
  // SECTION 5: MODERN PHYSICS
  // Questions 81-100
  // ==============================

  {
    question: "Which particle is the carrier of the electromagnetic force?",
    options: [
      "Graviton",
      "Photon",
      "Gluon",
      "Boson"
    ],
    answer: 1
  },

  {
    question: "Who explained the photoelectric effect?",
    options: [
      "Max Planck",
      "Albert Einstein",
      "Niels Bohr",
      "J. J. Thomson"
    ],
    answer: 1
  },

  {
    question: "Nuclear fusion in the Sun primarily converts:",
    options: [
      "Helium into Hydrogen",
      "Hydrogen into Helium",
      "Carbon into Oxygen",
      "Nitrogen into Carbon"
    ],
    answer: 1
  },

  {
    question: "What is the mass-energy equivalence formula?",
    options: [
      "E = mc²",
      "E = hν",
      "E = ½mv²",
      "E = p²/2m"
    ],
    answer: 0
  },

  {
    question: "Which of the following generally has the highest penetrating power?",
    options: [
      "Alpha particles",
      "Beta particles",
      "Gamma rays",
      "X-rays"
    ],
    answer: 2
  },

  {
    question: "The half-life of a radioactive substance is the time required for:",
    options: [
      "The substance to decay completely.",
      "Half of the radioactive nuclei in a sample to decay.",
      "The substance to lose half of its mass.",
      "The temperature of the substance to decrease by half."
    ],
    answer: 1
  },

  {
    question: "Which elementary particle is electrically neutral and extremely difficult to detect?",
    options: [
      "Proton",
      "Neutron",
      "Neutrino",
      "Electron"
    ],
    answer: 2
  },

  {
    question: "Who discovered the neutron?",
    options: [
      "J. J. Thomson",
      "Ernest Rutherford",
      "James Chadwick",
      "John Dalton"
    ],
    answer: 2
  },

  {
    question: "Nuclear fission is used in:",
    options: [
      "Nuclear reactors and atomic bombs",
      "The Sun and other stars",
      "Hydrogen bombs",
      "Laser technology"
    ],
    answer: 0
  },

  {
    question: "What is the SI unit of radioactivity?",
    options: [
      "Curie",
      "Becquerel",
      "Roentgen",
      "Gray"
    ],
    answer: 1
  },

  {
    question: "Which region of the electromagnetic spectrum is used in night-vision cameras?",
    options: [
      "Ultraviolet",
      "Infrared",
      "X-rays",
      "Microwaves"
    ],
    answer: 1
  },

  {
    question: "Radio waves are primarily used for:",
    options: [
      "Medical imaging",
      "Telecommunications and broadcasting",
      "Sterilization",
      "RADAR"
    ],
    answer: 1
  },

  {
    question: "The change in the frequency of sound or light due to the relative motion of the source and observer is known as:",
    options: [
      "Doppler Effect",
      "Raman Effect",
      "Photoelectric Effect",
      "Compton Effect"
    ],
    answer: 0
  },

  {
    question: "The Chandrasekhar Limit is related to:",
    options: [
      "The maximum mass of a stable white dwarf star",
      "The speed of light",
      "The size of a black hole",
      "The minimum mass of a planet"
    ],
    answer: 0
  },

  {
    question: "Which space telescope is designed primarily to observe infrared radiation?",
    options: [
      "Hubble Space Telescope",
      "James Webb Space Telescope",
      "Chandra X-ray Observatory",
      "Fermi Gamma-ray Space Telescope"
    ],
    answer: 1
  },

  {
    question: "Who proposed the Theory of Relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Stephen Hawking",
      "Galileo Galilei"
    ],
    answer: 1
  },

  {
    question: "In a nuclear reactor, control rods are commonly made of:",
    options: [
      "Uranium",
      "Graphite",
      "Boron or Cadmium",
      "Heavy Water"
    ],
    answer: 2
  },

  {
    question: "What is the fundamental principle behind the operation of lasers?",
    options: [
      "Stimulated Emission of Radiation",
      "Spontaneous Emission",
      "Radioactive Decay",
      "Thermal Emission"
    ],
    answer: 0
  },

  {
    question: "Which elementary particles make up protons and neutrons?",
    options: [
      "Leptons",
      "Quarks",
      "Mesons",
      "Photons"
    ],
    answer: 1
  },

  {
    question: "According to the Special Theory of Relativity, which quantity remains constant in all inertial frames of reference?",
    options: [
      "Mass",
      "Time",
      "Speed of Light",
      "Distance"
    ],
    answer: 2
  }

];