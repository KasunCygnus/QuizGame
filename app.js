//----------------------- G O O D   L U C K -------------------------------//



// select all elements by id
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const loginbt = document.getElementById("login")
const finishbt = document.getElementById("finish")
const countdown = document.getElementById("countdown")
const container = document.getElementById("container")




// create questions
var questions = [
  {
    question: "Who is he?",
    imgSrc: "Stuffs/img/dog.gif",
    choiceA: "Jake",
    choiceB: "DogMan",
    choiceC: "Finn",
    choiceD: "Dalton",
    correct: "A",
  },
  {
    question: "I had 100 flowers. Sadly, all but 10 died. How many are left?",
    imgSrc: "Stuffs/img/flowers.gif",
    choiceA: "10",
    choiceB: "90",
    choiceC: "0",
    choiceD: "You Kidding",
    correct: "A",
  },
  {
    question: "What is the most common colour of toilet paper in France?",
    imgSrc: "Stuffs/img/zero.gif",
    choiceA: "Pink",
    choiceB: "White",
    choiceC: "White Smoke",
    choiceD: "Black",
    correct: "A",
  },
  {
    question: "What is it that goes up, but never comes down?",
    imgSrc: "Stuffs/img/trick.gif",
    choiceA: "Love",
    choiceB: "Honesty",
    choiceC: "Age",
    choiceD: "Dream",
    correct: "C",
  },
  {
    question: "What is Lord Voldemort’s real name?",
    imgSrc: "Stuffs/img/doo.gif",
    choiceA: "Tom Marvolo Riddle",
    choiceB: "Tom Marvilo Riddle",
    choiceC: "Tom Marvin Riddle",
    choiceD: "Tom Ravolo Riddle",
    correct: "C",
  },
];

let ql = [
  { question: " What is the recommended daily intake of water for adults?",
  imgSrc: "Stuffs/img/dog.gif",
  choiceA: " 1 liter ",
  choiceB: "2 liters ",
  choiceC: "3 liters ",
  choiceD: "4 liters ",
  correct: "B",
},
{ question: "Which vitamin is synthesized by the human body when exposed to sunlight?",
imgSrc: "Stuffs/img/dog.gif",
choiceA: " Vitamin A ",
choiceB: " Vitamin C ",
choiceC: " Vitamin D ",
choiceD: " Vitamin E ",
correct: "C",
},
{ question: " Which of the following is NOT a symptom of diabetes?",
imgSrc: "Stuffs/img/dog.gif",
choiceA: " Excessive thirst ",
choiceB: " Rapid weight gain ",
choiceC: " Fatigue",
choiceD: " Frequent urination ",
correct: "B",
},
{question: " What is the primary function of red blood cells in the human body?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Fighting infection ",
   choiceB: " Carrying oxygen ",
   choiceC: " Producing hormones ",
   choiceD: "Regulating body temperature ",
   correct: "B",

  },
{	question: " What is the scientific term for the process of breathing?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Ventilation",
   choiceB: " Perspiration ",
   choiceC: " Digestion",
   choiceD: "Circulation ",
   correct: "A",
  },
{	question: " Which of the following is NOT a component of physical fitness?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Strength ",
   choiceB: " Flexibility ",
   choiceC: " Endurance ",
   choiceD: "Intelligence ",
   correct: "D",
  },
{question: " What is the primary function of the immune system?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Regulating blood sugar levels",
   choiceB: "Fighting off infections",
   choiceC: " Producing energy ",
   choiceD: "Maintaining bone density ",
   correct: "B",
  },
{question: " Night blindness is resulted by the deficiency of?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Vitamin A",
   choiceB: "Vitamin C",
   choiceC: "Vitamin D",
   choiceD: "Vitamin E",
   correct: "A", 
  },
{ question: "Which of the following is a symptom of a heart attack?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Chest pain or discomfort",
   choiceB: "Feeling cold",
   choiceC: "Increased appetite ",
   choiceD: "Muscle weakness ",
   correct: "A"
  },

{ question: "Which of the following is a symptom of a heart attack?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Neutrophil ",
   choiceB: "Lymphocyte",
   choiceC: "Platelet",
   choiceD: "Monocyte",
   correct: "C"
  },
{question: " What is the medical term for high blood pressure?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Hypertension",
   choiceB: " Hypotension",
   choiceC: " Hyperglycemia",
   choiceD: "Hypoglycemia",
correct: "A",
},
{question: " What is the primary function of the kidneys?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Regulating blood sugar levels ",
   choiceB: "Producing insulin",
   choiceC: "Filtering waste from the blood",
   choiceD: "Storing bile",
    correct: "C",
},

{ question: "Which of the following is NOT a symptom of dehydration?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Dry mouth",
   choiceB: " Dark urine ",
   choiceC: "Increased urination",
   choiceD: "Fatigue",
correct: "C",
},
{ question: "Which of the following is a risk factor for developing type 2 diabetes?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Regular physical activity ",
   choiceB: "Healthy diet rich in fruits and vegetables",
   choiceC: " Obesity ",
   choiceD: "Normal blood pressure",
correct: "C",
},
{question: " Which of the following is NOT a symptom of the common cold?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Fever",
   choiceB: "Sneezing",
   choiceC: "Runny nose ",
   choiceD: "Chest pain",
correct: "D",
},
{ question: " Which of the following is a good source of calcium?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Spinach",
   choiceB: "Milk",
   choiceC: " Chicken",
   choiceD: "Bananas",
correct: "B",
},
{ question: "What is the leading cause of tooth decay?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Eating too much fruit ",
   choiceB: "Poor dental hygiene",
   choiceC: "Drinking too much water",
   choiceD: "Exercising too often ",
correct: "B",
},

{ question: " Which of the following is NOT a symptom of anxiety?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Rapid heartbeat",
   choiceB: "Excessive sweating",
   choiceC: " Decreased appetite",
   choiceD: "Feelings of nervousness",
correct: "C",
},
{ question: "Which of the following is a common symptom of food poisoning?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Increased energy levels",
   choiceB: "Nausea & vomiting ",
   choiceC: "Clear urine ",
   choiceD: "Clear skin ",
correct: "B",
},
{question: " Which of the following is NOT a component of physical fitness?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Cardiovascular endurance ",
   choiceB: "Muscular strength",
   choiceC: " Emotional stability ",
   choiceD: "Flexibility",
correct: "C",
},
{ question: " What is the medical term for inflammation of the appendix?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Appendicitis ",
   choiceB: "Arthritis ",
   choiceC: " Bronchitis ",
   choiceD: "Pneumonia",
correct: "A",
},
{ question: " Which of the following is a symptom of asthma?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Fever ",
   choiceB: "Shortness of breath ",
   choiceC: " High blood pressure ",
   choiceD: "Excessive sweating ",
correct: "B",
},
{ question: "Which of the following is a symptom of a urinary tract infection (UTI)?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Increased appetite ",
   choiceB: "Fever",
   choiceC: "Dry mouth ",
   choiceD: "Constipation",
correct: "B",
},
{ question: "Which of the following is NOT a risk factor for developing cardiovascular disease?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "High cholesterol levels ",
   choiceB: "Smoking",
   choiceC: "Regular exercise",
   choiceD: "High blood pressure",
correct: "C",
},
{ question: "What is the medical term for high levels of glucose in the blood?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Hyperglycemia",
   choiceB: "Hypoglycemia",
   choiceC: "Hypertension",
   choiceD: "Hypernatremia",
correct: "A",
},
{ question: "Which of the following is NOT a symptom of the flu?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Cough",
   choiceB: "Joint swelling ",
   choiceC: "Muscle aches",
   choiceD: "Runny nose",
correct: "B",
},
{ question: "Which of the following is a symptom of a migraine headache?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Fever ",
   choiceB: "Nausea",
   choiceC: "Rapid breathing",
   choiceD: "Low blood pressure",
   correct: "B",
},
 { question: "Which of the following is NOT a risk factor for developing cancer?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Smoking ",
   choiceB: "Obesity ",
   choiceC: "Regular exercise",
   choiceD: "Family history of cancer",
correct: "C",
 },
{ question: "Which of the following is a symptom of depression?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Excessive thirst",
   choiceB: "Weight loss",
   choiceC: "High energy levels",
   choiceD: "Lack of interest or pleasure in activities",
correct: "D",
},
{ question: "Which of the following is NOT a symptom of a urinary tract infection (UTI)?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Fever ",
   choiceB: "Dark urine",
   choiceC: "Constipation",
   choiceD: "Pain or burning sensation during urination",
correct: "C",
},
{question: "Which of the following is a symptom of an allergic reaction?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Rapid heartbeat",
   choiceB: "Increased appetite",
   choiceC: "Itching",
   choiceD: "Excessive thirst",
correct: "C",

}, {question: "What is the primary function of carbohydrates in the body?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "To build and repair tissues",
   choiceB: "To regulate body temperature",
   choiceC: "To provide energy",
   choiceD: "To transport oxygen",
correct: "C",
},
{ question: "Which of the following is NOT a benefit of regular exercise?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Reduced risk of chronic diseases",
   choiceB: "Improved sleep quality",
   choiceC: "Increased stress levels",
   choiceD: "Stronger bones and muscles",
correct: "C",
},
{question: "Which of the following is NOT a healthy coping mechanism for stress?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Exercise",
   choiceB: "Talking to a friend or therapist",
   choiceC: "Smoking",
   choiceD: "Relaxation techniques",
correct: "C",
},
{question: "Which mosquito-borne viral disease can cause severe headaches, fever, and muscle aches?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Malaria",
   choiceB: "Dengue",
   choiceC: "Meningitis",
   choiceD: "Epilepsy",
correct: "B",
},

{ question: "How can you prevent exercise-related injuries?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Always stretch before and after exercise",
   choiceB: "Start slowly and gradually increase intensity and duration",
   choiceC: "Use proper form and technique",
   choiceD: "All of the above",
correct: "D",
},
{ question: "What should you do immediately after a minor burn?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Apply ice directly to the burn",
   choiceB: "Pop any blisters that form",
   choiceC: "Run cold water over the burn for 10-15 minutes",
   choiceD: "Apply petroleum jelly to the burn",
correct: "C",
},
{question: "What is the warm-up phase of an exercise routine designed to do?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Build strength",
   choiceB: "Increase flexibility",
   choiceC: "Gradually increase heart rate and muscle temperature",
   choiceD: "Cool down the body",
correct: "C",
},
{question: "Which type of sunscreen is recommended to protect against both UVA and UVB rays?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "SPF 15",
   choiceB: "SPF 30 ",
   choiceC: "SPF 50",
   choiceD: "All of the above",
correct: "B",
},
{question: "Which of the following is a good source of vitamin C?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Oranges",
   choiceB: "Eggs",
   choiceC: "Beef",
   choiceD: "Whole grains",
correct: "A",
},
{question: "Which exercise is highest beneficial for cardiovascular health?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Running",
   choiceB: "Weightlifting",
   choiceC: "Meditation",
   choiceD: "Stretching",
correct: "A",
},
{question: "Which of the following is a healthy blood pressure range for adults?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "90/60 mmHg",
   choiceB: "120/80 mmHg",
   choiceC: "140/90 mmHg",
   choiceD: "160/100 mmHg",
correct: "B",
},
{question: "Which of the following is a symptom of a sunburn?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Itchy skin",
   choiceB: "Pale complexion",
   choiceC: "Cold sensation",
   choiceD: "Blurred vision",
correct: "A",
},
{question: "Which one of the following disease is caused by bacteria?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Tuberculosis",
   choiceB: "Influenza",
   choiceC: "Chicken pox",
   choiceD: "Poliomyelitis",
correct: "A",
},
{question: "What is the main function of the respiratory system?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA:  "Pumping blood",
   choiceB: "Digesting food",
   choiceC: "Exchanging gases",
   choiceD: "Filtering waste",
correct: "C",

},
];

let qh = [

{question: "What is the normal resting heart rate for adults?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "60-80 beats per minute",
   choiceB: "90-100 beats per minute",
   choiceC: "100-120 beats per minute",
   choiceD: "120-140 beats per minute",
   correct: "A",
	},
  {question: "Which organ is responsible for detoxifying the blood, storing glycogen, and producing bile?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Liver",
   choiceB: "Kidneys",
   choiceC: "Pancreas",
   choiceD: "Spleen",
correct: "A",
},

{	question: "Which of the following foods is a good source of omega-3 fatty acids?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Beef",
   choiceB: "Tomato",
   choiceC: "Sea fish",
   choiceD: "White bread",
correct: "C",

},{	question: "Which of the following foods is a good source of omega-3 fatty acids?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Beef",
   choiceB: "Tomato",
   choiceC: "Sea fish",
   choiceD: "White bread",
correct: "C",

},	{question: "Which of the following is a water-soluble vitamin?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Vitamin A",
   choiceB: "Vitamin C",
   choiceC: "Vitamin D",
   choiceD: "Vitamin E",
correct: "B",

},	{question: "What is the recommended duration of moderate-intensity aerobic exercise per week for adults?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "30 minutes",
   choiceB: "60 minutes",
   choiceC: "90 minutes",
   choiceD: "120 minutes",
correct: "B",
},{question: "What is the main function of insulin in the human body?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Regulating blood sugar levels",
   choiceB: "Producing energy",
   choiceC: "Strengthening bones",
   choiceD: "Fighting infections",
correct: "A",

},	{question: "What is the purpose of the lymphatic system in the body?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Transporting oxygen to cells",
   choiceB: "Regulating body temperature",
   choiceC: "Filtering and removing waste and toxins",
   choiceD: "Digesting food",
correct: "C",

},	{ question: "What is the medical term for a loss of memory?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Amnesia",
   choiceB: "Anemia",
   choiceC: "Asthma",
   choiceD: "Arthritis",
correct: "A",

},	{question: "What is the primary function of the small intestine?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Absorbing nutrients from food",
   choiceB: "Pumping blood",
   choiceC: "Storing bile",
   choiceD: "Producing insulin",
correct: "A",



},	{question: "What is the main function of the pancreas in the human body?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Producing insulin",
   choiceB: "Filtering blood",
   choiceC: "Storing bile",
   choiceD: "Digesting food",
correct: "A",

},	{question: "Which of the following is a symptom of a stroke?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Chest pain",
   choiceB: "Sudden weakness of hand and leg of left side",
   choiceC: "Excessive sweating",
   choiceD: "Rapid breathing",
correct: "B",

},	

{question: "Which of the following is a symptom of anemia?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Pale skin",
   choiceB: "Increased appetite",
   choiceC: "Rapid heartbeat ",
   choiceD: "Excessive sweating",
correct: "A",

},
{ question: "What is the recommended amount of sleep for adults each night?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "4 hours",
   choiceB: "6 hours",
   choiceC: "8 hours",
   choiceD: "10 hours",
correct: "C",

},	{question: "Which of the following is a symptom of gastroesophageal reflux disease (GERD)?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Constipation",
   choiceB: "Heartburn",
   choiceC: "Excessive urination",
   choiceD: "Rapid weight gain",
correct: "B",


},	{question: "What is the primary function of the cerebellum in the brain?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Controlling voluntary movements",
   choiceB: "Regulating body temperature",
   choiceC: "Processing visual information",
   choiceD: "Producing hormones",
correct: "A",


},	{question: "Which of the following is a symptom of heatstroke?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Shivering",
   choiceB: "Cool, clammy skin",
   choiceC: "Rapid pulse",
   choiceD: "Low body temperature",
correct: "C",

},	{question: "What is the primary function of the adrenal glands?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Regulating blood sugar levels",
   choiceB: "Producing adrenaline",
   choiceC: "Filtering waste from the blood",
   choiceD: "Storing bile",
correct: "B",

},	{question: "What is the main function of the thyroid gland?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Regulating blood sugar levels",
   choiceB: "Producing insulin",
   choiceC: "Regulating metabolism",
   choiceD: "Storing bile",
correct: "C",

},	{question: "What is the recommended daily intake of fiber for adults?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "5 grams",
   choiceB: "10 grams",
   choiceC: "25 grams",
   choiceD: "50 grams",
correct: "C",

},	{question: "What is the medical term for inflammation of the joints?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Arthritis",
   choiceB: "Bronchitis",
   choiceC: "Appendicitis",
   choiceD: "Pneumonia",
correct: "A",

},	{question: "What is the recommended frequency of dental check-ups for adults?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Every 6 months",
   choiceB: "Once a year",
   choiceC: "Every 2 years",
   choiceD: "Only when experiencing pain",
correct: "A",

},	{question: "Which of the following is a symptom of a concussion?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Blurred vision",
   choiceB: "Slow heartbeat",
   choiceC: "Increased appetite",
   choiceD: "Dry skin",
correct: "A",

}, {	question: "What is the primary function of the gallbladder?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Producing insulin",
   choiceB: "Storing bile ",
   choiceC: "Filtering blood",
   choiceD: "Regulating blood pressure",
correct: "B",

},	{question: "What is the primary function of the trachea?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Pumping blood",
   choiceB: "Digesting food",
   choiceC: "Transport of air to and from the lungs",
   choiceD: "Regulating body temperature",
correct: "C",
},	{question: "What is the recommended frequency of eye exams for adults with healthy vision?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Every 1-2 years",
   choiceB: "Every 3-4 years",
   choiceC: "Every 5-6 years",
   choiceD: "Only when experiencing vision problems",
correct: "A",
},	{question: "Which of the following is a symptom of a stomach ulcer?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Chest pain",
   choiceB: "Fatigue",
   choiceC: "Nausea",
   choiceD: "Blood-stained vomitus",
correct: "D",

},	{question: "What is the main function of the cerebrum in the brain?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Regulating body temperature",
   choiceB: "Controlling voluntary movements",
   choiceC: "Processing sensory information",
   choiceD: "Producing hormones",
correct: "C",

}, {question: "What is the primary function of the spleen?",
    imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Producing insulin",
   choiceB: "Filtering blood",
   choiceC: "Storing bile",
   choiceD: "Digesting food",
correct: "B",


},
{	question: " Which of the following is a symptom of a kidney stone?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Chest pain",
   choiceB: " Blurred vision",
   choiceC: " Severe abdominal pain",
   choiceD: " Muscle weakness",
   correct: "C",
},

	{question: "Which of the following is a symptom of dehydration?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Excessive urination",
   choiceB: "Dark urine",
   choiceC: "Rapid heartbeat",
   choiceD: "Increased appetite",
   correct: "B",
  },
 {question: "What is the recommended duration of vigorous-intensity aerobic exercise per week for adults?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "30 minutes",
   choiceB: "60 minutes",
   choiceC: "90 minutes",
   choiceD: "120 minutes",
   correct: "B",
 },
 {question: "Which of the following is NOT a symptom of high cholesterol?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: " Chest pain",
   choiceB: "Leg pain",
   choiceC: "Frequent urination",
   choiceD: "Plaques around eyes",
   correct: "C",
 },
 {question: "What is the primary function of the large intestine?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Absorbing nutrients from food",
   choiceB: "Storing bile",
   choiceC: "Eliminating waste from the body ",
   choiceD: "Producing insulin",
   correct: "C",
 },
{question: "Which vitamin helps your body absorb iron?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Vitamin A",
   choiceB: "Vitamin C",
   choiceC: "Vitamin D ",
   choiceD: "Vitamin E",
   correct: "B",
},
{question: "What is the recommended daily intake of sodium for adults?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "500 mg",
   choiceB: "1000 mg",
   choiceC: "2000 mg",
   choiceD: "4000 mg",
   correct: "C",
},
{question: "What is the primary function of the pituitary gland?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Regulating blood sugar levels",
   choiceB: "Producing insulin",
   choiceC: "Producing hormones that regulate other glands",
   choiceD: "Storing bile",
   correct: "C",
},
{question: "What is the primary function of the prostate gland?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Producing insulin",
   choiceB: "Producing seminal fluid",
   choiceC: "Filtering waste from the blood",
   choiceD: "Regulating blood sugar levels",
   correct: "B",
},
{question: "Which of the following is a symptom of anemia?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Rapid heartbeat",
   choiceB: "Dry skin",
   choiceC: "Excessive thirst",
   choiceD: "High blood pressure",
   correct: "A",
},
{question: "What is the primary function of the alveoli in the lungs?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Pumping blood",
   choiceB: "Exchanging gases",
   choiceC: "Digesting food",
   choiceD: "Regulating body temperature",
   correct: "B",
},
{question: "Which sexually transmitted infection can cause cervical cancer if left untreated?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "HPV",
   choiceB: "Chlamydia",
   choiceC: "Gonorrhea",
   choiceD: "Syphilis",
   correct: "A",
},
{question: "What is the primary function of the thymus gland?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "Producing insulin",
   choiceB: "Producing testosterone",
   choiceC: "Producing hormones that regulate immune function",
   choiceD: "Storing bile",
   correct: "C",
},

{question: "Which of the following is a high-fiber food?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "White bread",
   choiceB: "White rice",
   choiceC: "Oatmeal",
   choiceD: "Soda",
   correct: "C",
},
{question: "Water percentage in plasma is?",
   imgSrc: "Stuffs/img/dog.gif",
   choiceA: "60%",
   choiceB: "70%",
   choiceC: "80%",
   choiceD: "90%",
   correct: "C",

}

];


var countani = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(countani * particleRatio)
  });
}


// Extra variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15; // 20s

let TIMER;
let STARTTIMER;
let score = 0;

// render a question
function renderQuestion() {
  count = 0;
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}


function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}


start.addEventListener("click", showCountdown);

// start quiz
function startQuiz() {
  countdown.style.display = "none"
  var music = new Audio();
  music.src = "Stuffs/music/Easy song.mp3";
  music.play();
  start.style.display = "none";

  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

function showCountdown(){
  countdown.style.display = "block"
  start.style.display = "none"
  setTimeout(startQuiz, 4000);
  // Randomize Quiz.
  questions = []
  let q1 = getMultipleRandom(ql,2)
  let q2 = getMultipleRandom(qh,3)
  questions = q1.concat(q2)

  console.log(questions)
}

loginbt.addEventListener("click", logintoQuiz);

// start quiz
function logintoQuiz() {
  checkUserAvailability()
 // document.getElementById("loader").style.display = "none";
}

finishbt.addEventListener("click", reload);

function reload(){
  location.reload(true);
}


function checkUserAvailability(){

   var phone = document.getElementById("mnumber").value;
   let error = document.getElementById("error")


if (phone.length != 10) {
  error.innerHTML = "Please check the number again EX:0777990990";
   return
}

document.getElementById("loaderx").style.display = "block";
const xhr = new XMLHttpRequest();
let json = JSON.stringify({
   MobileNumber: phone,
 });
xhr.open('POST', 'https://dev-pharmacyapi.healthvault.mydoctor.lk/api/DrugPrescription/HasMobileApp');
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(json);

xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data.toString());
    if (data.toString() == "true"){
      console.log("true triggerd");
      document.getElementById("loader").style.display = "none";
      document.getElementById("loaderx").style.display = "none";
    } else {
        console.log("false trigged");
        error.innerHTML = "Please register with DOC990 to continue";
        document.getElementById("loaderx").style.display = "none";
    }
  } else {
    console.error(`Error: ${xhr.status}`);
    document.getElementById("loaderx").style.display = "none";
   
  }
};
xhr.onerror = function() {
  console.error('Request error');
  document.getElementById("loaderx").style.display = "none";

};

}


// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = 15 - count;

    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = -10;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }


}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
  var music = new Audio();
  music.src = "Stuffs/music/success.mp3";
  music.play();
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  var music = new Audio();
  music.src = "Stuffs/music/wrong.mp3";
  music.play();
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  var music = new Audio();
  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "Stuffs/img/5.png"
      : scorePerCent >= 60
      ? "Stuffs/img/4.png"
      : scorePerCent >= 40
      ? "Stuffs/img/3.png"
      : scorePerCent >= 20
      ? "Stuffs/img/2.png"
      : "Stuffs/img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";

  if (scorePerCent == 100) {
    scoreDiv.innerHTML += "<p>Brilliant! You’ve got it all Correct, </br> Collect your gift from Doc990 stall help desk </p>";
    music.src = "Stuffs/music/tada.mp3";
    celebration()
    music.play();
  }else if (scorePerCent == 80) {
    scoreDiv.innerHTML += "<p>Congratulations! You’ve scored " + scorePerCent + "%  </br> Collect your gift from Doc990 stall help desk</p>";
    music.src = "Stuffs/music/tada.mp3";
    celebration()
    music.play();
  }else if (scorePerCent == 60) {
   
    scoreDiv.innerHTML += "<p>Congratulations! You’ve scored " + scorePerCent + "%   </br> You get 30% off from the channeling service fee, when you book through Doc990.</p>";
    music.src = "Stuffs/music/tada.mp3";
    celebration()
    music.play();
  }else if (scorePerCent == 40) {
    scoreDiv.innerHTML += "<p>You’ve scored " + scorePerCent + "%  </br> Thank You for participating.</p>";
    music.src = "Stuffs/music/GameOver.mp3";
    music.play();
  }else if (scorePerCent == 20) {
    music.src = "Stuffs/music/GameOver.mp3";
    music.play();
    scoreDiv.innerHTML += "<p>You’ve scored " + scorePerCent + "%   </br> Thank You for participating.</p>";
  }else if (scorePerCent == 0) {
    music.src = "Stuffs/music/GameOver.mp3";
    music.play();
    scoreDiv.innerHTML += "<p>You’ve scored " + scorePerCent + "%   </br> Thank You for participating.</p>";
  }
  
  recordResults()
  scoreDiv.appendChild(finishbt)
  finishbt.style.display = "block"
  quiz.style.display = "none";
  
}


function celebration(){
  var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);
}

function sms(){
   document.getElementById("loaderx").style.display = "block";
const xhr = new XMLHttpRequest();
let message="Congratulations! You’ve scored 60% for the quiz at our Doc990 stall- Medicare 2024. You are entitled for 30% off from the channeling service fee, when you book your next doctor appointment through Doc990. This will be activated within 24hrs and will be valid till 31st August.";
var phone =document.getElementById("mnumber").value;
phone = phone.slice(1);
mobilenumber = "94";
phone = mobilenumber.concat(phone);
xhr.open('POST', 'https://dev-mainapi.healthvault.mydoctor.lk/api/SMS/SendSMS?mobilenumber='+phone+'&message='+message);
xhr.setRequestHeader("Content-type", "application/json");
xhr.send()
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data.toString());
    console.log("succees trigged");
    document.getElementById("loaderx").style.display = "none";
  } else {
    console.error(`Error: ${xhr.status}`);
    document.getElementById("loaderx").style.display = "none";
  }
};
xhr.onerror = function() {
  console.error('Request error');
  document.getElementById("loaderx").style.display = "none";

};
}

function recordResults(){
   const scorePerCent = Math.round((100 * score) / questions.length);
   var phone =document.getElementById("mnumber").value;
   const xhr = new XMLHttpRequest();
   let json = JSON.stringify({
      MobileNumber: phone,
      Score:scorePerCent,
    });

   document.getElementById("loaderx").style.display = "block";
   xhr.open('POST', 'https://dev-pharmacyapi.healthvault.mydoctor.lk/api/DrugPrescription/SaveMedicareScore');
   xhr.setRequestHeader("Content-type", "application/json");
   xhr.send(json);
   
   xhr.onload = function() {
     if (xhr.status === 200) {
      document.getElementById("loaderx").style.display = "none";
       const data = JSON.parse(xhr.responseText);
       console.log(data.toString());
       if (data.toString() == "true"){
        
         console.log("store triggerd");
         if (scorePerCent == 60) {
            sms()
         }

   
       } else {
           console.log("false store");
       
       }
     } else {
       console.error(`Error: ${xhr.status}`);
       document.getElementById("loaderx").style.display = "none";
     }
   };
   xhr.onerror = function() {
     console.error('Request error');
     document.getElementById("loaderx").style.display = "none";
   
   };

}


//////////////////////////////////////////////////////
var myVar;

function myLoader() {
  //myVar = setTimeout(showPage, 20000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
