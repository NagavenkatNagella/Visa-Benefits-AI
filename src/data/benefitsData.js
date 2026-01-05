export const cardTiers = {
  CLASSIC: {
    key: "CLASSIC",
    name: "Visa Classic",
    color: "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)",
    benefits: [1, 2, 8] // IDs
  },
  GOLD: {
    key: "GOLD",
    name: "Visa Gold",
    color: "linear-gradient(135deg, #FDC830 0%, #F37335 100%)",
    benefits: [1, 2, 3, 8]
  },
  PLATINUM: {
    key: "PLATINUM",
    name: "Visa Platinum",
    color: "linear-gradient(135deg, #E0EAFC 0%, #CFDEF3 100%)",
    benefits: [1, 2, 3, 4, 8, 9]
  },
  SIGNATURE: {
    key: "SIGNATURE",
    name: "Visa Signature",
    color: "linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)",
    benefits: [1, 2, 3, 4, 5, 8, 9, 10]
  },
  INFINITE: {
    key: "INFINITE",
    name: "Visa Infinite",
    color: "linear-gradient(135deg, #000000 0%, #434343 100%)",
    benefits: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }
};

export const benefitsData = [
  {
    id: 1,
    title: "Global Customer Assistance",
    category: "Security",
    description: "24/7 assistance for lost/stolen cards and emergency card replacement.",
    shortDesc: "24/7 Emergency Support",
    icon: "🆘",
    terms: "Available worldwide. Toll-free numbers vary by country.",
    aiSummary: "Lost your card? Call support anytime, anywhere for a quick replacement.",
    tier: ["CLASSIC", "GOLD", "PLATINUM", "SIGNATURE", "INFINITE"]
  },
  {
    id: 2,
    title: "Dining Discounts",
    category: "Dining",
    description: "Up to 20% off at partner restaurants.",
    shortDesc: "Dining Offers",
    icon: "🍽️",
    terms: "Valid at participating restaurants. May require reservation.",
    aiSummary: "Get up to 20% off your food bill at selected restaurants.",
    tier: ["CLASSIC", "GOLD", "PLATINUM", "SIGNATURE", "INFINITE"]
  },
  {
    id: 3,
    title: "Purchase Protection",
    category: "Shopping",
    description: "Protection against theft or damage for 90 days.",
    shortDesc: "Theft Insurance",
    icon: "🛍️",
    terms: "Claim must be filed within 30 days of incident. Limit ₹50,000.",
    aiSummary: "Bought something? It's insured against theft or damage for 3 months.",
    tier: ["GOLD", "PLATINUM", "SIGNATURE", "INFINITE"]
  },
  {
    id: 4,
    title: "Extended Warranty",
    category: "Shopping",
    description: "Doubles the manufacturer's warranty up to 1 year.",
    shortDesc: "Double Warranty",
    icon: "🛡️",
    terms: "Valid for appliances/electronics bought entirely with the card.",
    aiSummary: "Get double the warranty time on electronics you buy with this card.",
    tier: ["PLATINUM", "SIGNATURE", "INFINITE"]
  },
  {
    id: 5,
    title: "Airport Lounge Access",
    category: "Travel",
    description: "Complimentary access to domestic airport lounges.",
    shortDesc: "Lounge Access",
    icon: "✈️",
    terms: "2 visits per quarter. Present card at entry.",
    aiSummary: "Relax in airport lounges for free, twice every 3 months.",
    tier: ["SIGNATURE", "INFINITE"]
  },
  {
    id: 6,
    title: "Unlimited Lounge Access",
    category: "Travel",
    description: "Unlimited complimentary access to airport lounges globally using Priority Pass.",
    shortDesc: "Global VIP Lounge",
    icon: "🌐",
    terms: "Includes guest access. Priority Pass membership required.",
    aiSummary: "Go to any airport lounge in the world, as many times as you want.",
    tier: ["INFINITE"]
  },
  {
    id: 7,
    title: "Concierge Service",
    category: "Lifestyle",
    description: "24/7 personal assistant for travel bookings and reservations.",
    shortDesc: "Personal Assistant",
    icon: "🎩",
    terms: "Booking costs are borne by cardholder. Service is complimentary.",
    aiSummary: "A personal assistant is a call away to book your flights or dimmer.",
    tier: ["INFINITE"]
  },
  {
    id: 8,
    title: "Zero Liability",
    category: "Security",
    description: "You are not responsible for unauthorized transactions.",
    shortDesc: "Fraud Protection",
    icon: "🔒",
    terms: "Report unauthorized use immediately.",
    aiSummary: "You won't pay a penny if someone uses your card without permission.",
    tier: ["CLASSIC", "GOLD", "PLATINUM", "SIGNATURE", "INFINITE"]
  },
  {
    id: 9,
    title: "Golf Access",
    category: "Lifestyle",
    description: "Complimentary golf games at premier courses.",
    shortDesc: "Free Golf",
    icon: "⛳",
    terms: "Booking required 7 days in advance.",
    aiSummary: "Play golf for free at fancy courses.",
    tier: ["PLATINUM", "SIGNATURE", "INFINITE"]
  },
  {
    id: 10,
    title: "Buy 1 Get 1 Movies",
    category: "Entertainment",
    description: "Buy one movie ticket, get one free on BookMyShow.",
    shortDesc: "Free Movie Ticket",
    icon: "🎬",
    terms: "Up to ₹500 discount on the second ticket.",
    aiSummary: "Date night? Buy one movie ticket and the second one is free.",
    tier: ["SIGNATURE", "INFINITE"]
  },
  {
    id: 11,
    title: "Travel Insurance",
    category: "Travel",
    description: "Comprehensive travel medical and accident insurance.",
    shortDesc: "$1M Travel Insurance",
    icon: "🏥",
    terms: "Valid when tickets purchased with card.",
    aiSummary: "You have $1 Million insurance coverage when you travel.",
    tier: ["INFINITE"]
  }
];

export const translations = {
  en: {
    welcome: "Unlock Your Visa Benefits",
    enterCard: "Enter your card number to discover exclusive perks.",
    cardNumberPlaceholder: "4000 1234 5678 9010",
    submit: "Reveal Benefits",
    aiAssistant: "AI Assistant",
    aiPrompt: "How can I help you with your benefits?",
    benefitsTitle: "Your Exclusive Benefits",
    recommended: "Recommended for You",
    viewDetails: "View Details",
    toggleLang: "Switch Language",
    disclaimer: "Privacy Notice: No real card data is stored. This is a demonstration.",
    terms: "Terms & Conditions",
    cardTypeFound: "Card Type Detected",
    analyzing: "Analyzing card tier...",

    // Savings Estimator
    savingsTitle: "Savings Estimator",
    monthlySpend: "Monthly Spend",
    monthlySave: "Monthly Save",
    yearlySave: "Yearly Save",

    // Spend Chart
    spendTitle: "Spend Analysis",
    travel: "Travel",
    dining: "Dining",
    shop: "Shop",
    spendNote: "*Based on last 3 months activity",

    // Chat Assistant
    chatTitle: "Visa Assistant",
    chatWelcome: "Hello! I'm your Visa concierge. Ask me anything about your Platinum benefits.",
    chatUserEx: "Are my points expiring soon?",
    chatBotEx: "Your 5,000 points are valid until Dec 2026. You're good to go! ✈️",
    chatPlaceholder: "Type a question...",
    chatResponseDefault: "I can help you with that! Could you check the benefits dashboard for specific details?"
  },
  ta: {
    welcome: "உங்கள் விசா சலுகைகளைத் திறக்கவும்",
    enterCard: "எக்ஸ்க்ளூசிவ் சலுகைகளைக் கண்டறிய உங்கள் அட்டை எண்ணை உள்ளிடவும்.",
    cardNumberPlaceholder: "XXXX XXXX XXXX XXXX",
    submit: "சலுகைகளைக் காட்டு",
    aiAssistant: "AI உதவியாளர்",
    aiPrompt: "உங்கள் சலுகைகளில் நான் எவ்வாறு உதவ முடியும்?",
    benefitsTitle: "உங்கள் சிறப்பு சலுகைகள்",
    recommended: "உங்களுக்காகப் பரிந்துரைக்கப்படுவது",
    viewDetails: "விவரங்களைப் பார்",
    toggleLang: "மொழியை மாற்றவும்",
    disclaimer: "தனியுரிமை அறிவிப்பு: உண்மையான அட்டைத் தரவு சேமிக்கப்படவில்லை. இது ஒரு செயல்விளக்கம்.",
    terms: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    cardTypeFound: "அட்டை வகை கண்டறியப்பட்டது",
    analyzing: "அட்டை அடுக்கை பகுப்பாய்வு செய்கிறது...",

    // Savings Estimator
    savingsTitle: "சேமிப்பு மதிப்பீட்டாளர்",
    monthlySpend: "மாதாந்திர செலவு",
    monthlySave: "மாதாந்திர சேமிப்பு",
    yearlySave: "ஆண்டு சேமிப்பு",

    // Spend Chart
    spendTitle: "செலவு பகுப்பாய்வு",
    travel: "பயணம்",
    dining: "உணவு",
    shop: "கடை",
    spendNote: "*கடந்த 3 மாத செயல்பாட்டின் அடிப்படையில்",

    // Chat Assistant
    chatTitle: "விசா உதவியாளர்",
    chatWelcome: "வணக்கம்! நான் உங்கள் விசா உதவியாளர். உங்கள் சலுகைகள் பற்றி எதையும் கேட்கலாம்.",
    chatUserEx: "என் புள்ளிகள் விரைவில் காலாவதியாகுமா?",
    chatBotEx: "உங்கள் 5,000 புள்ளிகள் டிசம்பர் 2026 வரை செல்லுபடியாகும். கவலை வேண்டாம்! ✈️",
    chatPlaceholder: "கேள்வியைத் தட்டச்சு செய்க...",
    chatResponseDefault: "நான் உதவ முடியும்! விவரங்களுக்கு சலுகைகள் பலகையைப் பார்க்கவும்?"
  },
  te: {
    welcome: "మీ వీసా ప్రయోజనాలను అన్‌లాక్ చేయండి",
    enterCard: "ప్రత్యేకమైన ప్రయోజనాలను తెలుసుకోవడానికి మీ కార్డ్ నంబర్‌ను నమోదు చేయండి.",
    cardNumberPlaceholder: "XXXX XXXX XXXX XXXX",
    submit: "ప్రయోజనాలను చూపించు",
    aiAssistant: "AI సహాయకుడు",
    aiPrompt: "నేను మీకు ఎలా సహాయపడగలను?",
    benefitsTitle: "మీ ప్రత్యేక ప్రయోజనాలు",
    recommended: "మీ కోసం సిఫార్సు చేయబడింది",
    viewDetails: "వివరాలను చూడండి",
    toggleLang: "భాషను మార్చండి",
    disclaimer: "గోప్యతా గమనిక: నిజమైన కార్డ్ డేటా నిల్వ చేయబడదు. ఇది ఒక డెమో.",
    terms: "నియమాలు & షరతులు",
    cardTypeFound: "కార్డ్ రకం కనుగొనబడింది",
    analyzing: "కార్డ్ టైర్‌ను విశ్లేషిస్తోంది...",

    // Savings Estimator
    savingsTitle: "పొదుపు అంచనా",
    monthlySpend: "నెలవారీ ఖర్చు",
    monthlySave: "నెలవారీ ఆదా",
    yearlySave: "వార్షిక ఆదా",

    // Spend Chart
    spendTitle: "ఖర్చు విశ్లేషణ",
    travel: "ప్రయాణం",
    dining: "భోజనం",
    shop: "షాపింగ్",
    spendNote: "*గత 3 నెలల కార్యాచరణ ఆధారంగా",

    // Chat Assistant
    chatTitle: "వీసా అసిస్టెంట్",
    chatWelcome: "నమస్తే! నేను మీ వీసా సహాయకుడిని. మీ ప్రయోజనాల గురించి నన్ను ఏమైనా అడగండి.",
    chatUserEx: "నా పాయింట్లు త్వరలో గడువు ముగుస్తాయా?",
    chatBotEx: "మీ 5,000 పాయింట్లు డిసెంబర్ 2026 వరకు చెల్లుబాటు అవుతాయి. మీరు నిశ్చింతగా ఉండవచ్చు! ✈️",
    chatPlaceholder: "ప్రశ్నను టైప్ చేయండి...",
    chatResponseDefault: "నేను సహాయం చేయగలను! వివరాల కోసం ప్రయోజనాల డ్యాష్‌బోర్డ్ చూడండి?"
  },
  hi: {
    welcome: "अपने वीज़ा लाभों को अनलॉक करें",
    enterCard: "विशेष भत्तों की खोज के लिए अपना कार्ड नंबर दर्ज करें।",
    cardNumberPlaceholder: "XXXX XXXX XXXX XXXX",
    submit: "लाभ देखें",
    aiAssistant: "AI सहायक",
    aiPrompt: "मैं आपकी कैसे मदद कर सकता हूँ?",
    benefitsTitle: "आपके विशेष लाभ",
    recommended: "आपके लिए अनुशंसित",
    viewDetails: "विवरण देखें",
    toggleLang: "भाषा बदलें",
    disclaimer: "गोपनीयता सूचना: कोई वास्तविक कार्ड डेटा संग्रहीत नहीं है। यह एक डेमो है।",
    terms: "नियम और शर्तें",
    cardTypeFound: "कार्ड प्रकार का पता चला",
    analyzing: "कार्ड स्तर का विश्लेषण...",

    // Savings Estimator
    savingsTitle: "बचत अनुमानक",
    monthlySpend: "मासिक खर्च",
    monthlySave: "मासिक बचत",
    yearlySave: "वार्षिक बचत",

    // Spend Chart
    spendTitle: "खर्च विश्लेषण",
    travel: "यात्रा",
    dining: "भोजन",
    shop: "खरीदारी",
    spendNote: "*पिछले 3 महीनों की गतिविधि पर आधारित",

    // Chat Assistant
    chatTitle: "वीज़ा सहायक",
    chatWelcome: "नमस्ते! मैं आपका वीज़ा सहायक हूँ। अपने प्लैटिनम लाभों के बारे में मुझसे कुछ भी पूछें।",
    chatUserEx: "क्या मेरे पॉइंट जल्द ही समाप्त हो रहे हैं?",
    chatBotEx: "आपके 5,000 पॉइंट दिसंबर 2026 तक वैध हैं। आप सुरक्षित हैं! ✈️",
    chatPlaceholder: "एक प्रश्न टाइप करें...",
    chatResponseDefault: "मैं इसमें आपकी मदद कर सकता हूँ! कृपया विस्तृत जानकारी के लिए लाभ डैशबोर्ड देखें?",
  }
};

// Translations for specific benefit items
export const benefitTranslations = {
  1: { // Global Customer Assistance
    ta: { title: "உலகளாவிய வாடிக்கையாளர் உதவி", shortDesc: "24/7 அவசர ஆதரவு", description: "இழந்த/திருடப்பட்ட அட்டைகள் மற்றும் அவசர அட்டை மாற்றத்திற்கான 24/7 உதவி.", terms: "உலகளவில் கிடைக்கிறது. கட்டணமில்லா எண்கள் நாட்டிற்கு ஏற்ப மாறுபடும்.", aiSummary: "உங்கள் அட்டை தொலைந்துவிட்டதா? விரைவான மாற்றத்திற்கு எப்போது வேண்டுமானாலும் எங்கு வேண்டுமானாலும் ஆதரவை அழைக்கவும்." },
    te: { title: "ప్రపంచవ్యాప్త కస్టమర్ సహాయం", shortDesc: "24/7 అత్యవసర మద్దతు", description: "కోల్పోయిన/దొంగిలించబడిన కార్డులు మరియు అత్యవసర కార్డ్ రీప్లేస్‌మెంట్ కోసం 24/7 సహాయం.", terms: "ప్రపంచవ్యాప్తంగా అందుబాటులో ఉంది. టోల్-ఫ్రీ నంబర్లు దేశాన్ని బట్టి మారుతాయి.", aiSummary: "మీ కార్డ్ పోయిందా? త్వరిత రీప్లేస్‌మెంట్ కోసం ఎప్పుడైనా, ఎక్కడైనా మద్దతుకు కాల్ చేయండి." },
    hi: { title: "वैश्विक ग्राहक सहायता", shortDesc: "24/7 आपातकालीन सहायता", description: "खोए/चोरी हुए कार्ड और आपातकालीन कार्ड प्रतिस्थापन के लिए 24/7 सहायता।", terms: "दुनिया भर में उपलब्ध। टोल-फ्री नंबर देश के अनुसार भिन्न होते हैं।", aiSummary: "क्या आपका कार्ड खो गया है? त्वरित प्रतिस्थापन के लिए कभी भी, कहीं भी समर्थन को कॉल करें।" }
  },
  2: { // Dining Discounts
    ta: { title: "உணவு தள்ளுபடிகள்", shortDesc: "உணவு சலுகைகள்", description: "கூட்டாளர் உணவகங்களில் 20% வரை தள்ளுபடி.", terms: "பங்கேற்கும் உணவகங்களில் செல்லுபடியாகும். முன்பதிவு தேவைப்படலாம்.", aiSummary: "தேர்ந்தெடுக்கப்பட்ட உணவகங்களில் உங்கள் உணவு ரசீதில் 20% வரை தள்ளுபடி பெறுங்கள்." },
    te: { title: "భోజన తగ్గింపులు", shortDesc: "భోజన ఆఫర్లు", description: "భాగస్వామ్య రెస్టారెంట్లలో 20% వరకు తగ్గింపు.", terms: "పాల్గొనే రెస్టారెంట్లలో చెల్లుతుంది. రిజర్వేషన్ అవసరం కావచ్చు.", aiSummary: "ఎంపిక చేసిన రెస్టారెంట్లలో మీ ఆహార బిల్లుపై 20% వరకు తగ్గింపు పొందండి." },
    hi: { title: "भोजन छूट", shortDesc: "भोजन ऑफर", description: "साझेदार रेस्तरां में 20% तक की छूट।", terms: "भाग लेने वाले रेस्तरां में मान्य। आरक्षण की आवश्यकता हो सकती है।", aiSummary: "चयनित रेस्तरां में अपने खाने के बिल पर 20% तक की छूट प्राप्त करें।" }
  },
  3: { // Purchase Protection
    ta: { title: "கொள்முதல் பாதுகாப்பு", shortDesc: "திருட்டு காப்பீடு", description: "90 நாட்களுக்குத் திருட்டு அல்லது சேதத்திற்கு எதிரான பாதுகாப்பு.", terms: "சம்பவம் நடந்த 30 நாட்களுக்குள் கோரிக்கை பதிவு செய்யப்பட வேண்டும். வரம்பு ₹50,000.", aiSummary: "ஏதாவது வாங்கினீர்களா? இது 3 மாதங்களுக்கு திருட்டு அல்லது சேதத்திற்கு எதிராக காப்பீடு செய்யப்பட்டுள்ளது." },
    te: { title: "కొనుగోలు రక్షణ", shortDesc: "దొంగతనం బీమా", description: "90 రోజుల పాటు దొంగతనం లేదా నష్టానికి వ్యతిరేకంగా రక్షణ.", terms: "ఘటన జరిగిన 30 రోజులలోపు క్లెయిమ్ దాఖలు చేయాలి. పరిమితి ₹50,000.", aiSummary: "ఏదైనా కొన్నారా? ఇది 3 నెలల పాటు దొంగతనం లేదా నష్టానికి వ్యతిరేకంగా బీమా చేయబడింది." },
    hi: { title: "खरीद सुरक्षा", shortDesc: "चोरी बीमा", description: "90 दिनों के लिए चोरी या क्षति के खिलाफ सुरक्षा।", terms: "घटना के 30 दिनों के भीतर दावा दायर किया जाना चाहिए। सीमा ₹50,000।", aiSummary: "कुछ खरीदा? यह 3 महीने के लिए चोरी या क्षति के खिलाफ बीमित है।" }
  },
  4: { // Extended Warranty
    ta: { title: "நீட்டிக்கப்பட்ட உத்தரவாதம்", shortDesc: "இரட்டை உத்தரவாதம்", description: "உற்பத்தியாளரின் உத்தரவாதத்தை 1 வருடம் வரை இரட்டிப்பாக்குகிறது.", terms: "அட்டையுடன் முழுமையாக வாங்கப்பட்ட உபகரணங்கள்/எலக்ட்ரானிக்ஸ்களுக்கு செல்லுபடியாகும்.", aiSummary: "இந்த அட்டையுடன் நீங்கள் வாங்கும் எலக்ட்ரானிக்ஸ்களுக்கு இரட்டை உத்தரவாத நேரத்தைப் பெறுங்கள்." },
    te: { title: "పొడిగించిన వారంటీ", shortDesc: "డబుల్ వారంటీ", description: "తయారీదారు వారంటీని 1 సంవత్సరం వరకు రెట్టింపు చేస్తుంది.", terms: "పూర్తిగా కార్డుతో కొనుగోలు చేసిన ఉపకరణాలు/ఎలక్ట్రానిక్స్‌కు చెల్లుతుంది.", aiSummary: "ఈ కార్డుతో మీరు కొనుగోలు చేసే ఎలక్ట్రానిక్స్‌పై రెట్టింపు వారంటీ సమయాన్ని పొందండి." },
    hi: { title: "विस्तारित वारंटी", shortDesc: "दोगुनी वारंटी", description: "निर्माता की वारंटी को 1 वर्ष तक दोगुना करता है।", terms: "पूरी तरह से कार्ड के साथ खरीदे गए उपकरणों/इलेक्ट्रॉनिक्स के लिए मान्य।", aiSummary: "इस कार्ड के साथ खरीदे गए इलेक्ट्रॉनिक्स पर दोगुनी वारंटी समय प्राप्त करें।" }
  },
  5: { // Airport Lounge Access
    ta: { title: "விமான நிலைய ஓய்வறை அணுகல்", shortDesc: "ஓய்வறை அணுகல்", description: "உள்நாட்டு விமான நிலைய ஓய்வறைகளுக்கு இலவச அணுகல்.", terms: "காலாண்டுக்கு 2 வருகைகள். நுழைவாயிலில் அட்டையைக் காட்டுங்கள்.", aiSummary: "ஒவ்வொரு 3 மாதங்களுக்கும் இரண்டு முறை விமான நிலைய ஓய்வறைகளில் இலவசமாக ஓய்வெடுங்கள்." },
    te: { title: "విమానాశ్రయ లాంజ్ యాక్సెస్", shortDesc: "లాంజ్ యాక్సెస్", description: "దేశీయ విమానాశ్రయ లాంజ్‌లకు కాంప్లిమెంటరీ యాక్సెస్.", terms: "త్రైమాసికానికి 2 సందర్శనలు. ప్రవేశద్వారం వద్ద కార్డును చూపించండి.", aiSummary: "ప్రతి 3 నెలలకు రెండుసార్లు ఉచితంగా విమానాశ్రయ లాంజ్‌లలో విశ్రాంతి తీసుకోండి." },
    hi: { title: "हवाई अड्डा लाउंज प्रवेश", shortDesc: "लाउंज प्रवेश", description: "घरेलू हवाई अड्डा लाउंज में मानार्थ प्रवेश।", terms: "प्रति तिमाही 2 दौरे। प्रवेश पर कार्ड दिखाएं।", aiSummary: "हर 3 महीने में दो बार मुफ्त में हवाई अड्डा लाउंज में आराम करें।" }
  },
  6: { // Unlimited Lounge Access
    ta: { title: "வரம்பற்ற ஓய்வறை அணுகல்", shortDesc: "உலகளாவிய விஐபி ஓய்வறை", description: "Priority Pass பயன்படுத்தி உலகளவில் விமான நிலைய ஓய்வறைகளுக்கு வரம்பற்ற இலவச அணுகல்.", terms: "விருந்தினர் அணுகல் அடங்கும். Priority Pass உறுப்பினர் தேவை.", aiSummary: "உலகில் உள்ள எந்த விமான நிலைய ஓய்வறைக்கும், நீங்கள் விரும்பும் பல முறை செல்லுங்கள்." },
    te: { title: "అపరిమిత లాంజ్ యాక్సెస్", shortDesc: "గ్లోబల్ VIP లాంజ్", description: "Priority Pass ఉపయోగించి ప్రపంచవ్యాప్తంగా విమానాశ్రయ లాంజ్‌లకు అపరిమిత కాంప్లిమెంటరీ యాక్సెస్.", terms: "గెస్ట్ యాక్సెస్ ఉంటుంది. Priority Pass సభ్యత్వం అవసరం.", aiSummary: "ప్రపంచంలోని ఏ విమానాశ్రయ లాంజ్‌కైనా, మీకు కావలసినన్ని సార్లు వెళ్లండి." },
    hi: { title: "असीमित लाउंज प्रवेश", shortDesc: "वैश्विक VIP लाउंज", description: "Priority Pass का उपयोग करके विश्व स्तर पर हवाई अड्डा लाउंज में असीमित मानार्थ प्रवेश।", terms: "अतिथि प्रवेश शामिल है। Priority Pass सदस्यता आवश्यक है।", aiSummary: "दुनिया के किसी भी हवाई अड्डा लाउंज में, जितनी बार चाहें उतनी बार जाएं।" }
  },
  7: { // Concierge Service
    ta: { title: "கான்சியர்ஜ் சேவை", shortDesc: "தனிப்பட்ட உதவியாளர்", description: "பயண முன்பதிவுகள் மற்றும் ஒதுக்கீடுகளுக்கு 24/7 தனிப்பட்ட உதவியாளர்.", terms: "முன்பதிவு செலவுகள் அட்டைதாரரால் ஏற்கப்படுகின்றன. சேவை இலவசம்.", aiSummary: "உங்கள் விமானங்கள் அல்லது உணவை முன்பதிவு செய்ய ஒரு தனிப்பட்ட உதவியாளர் ஒரு அழைப்பு தூரத்தில் உள்ளார்." },
    te: { title: "కాన్సియర్జ్ సేవ", shortDesc: "వ్యక్తిగత సహాయకుడు", description: "ప్రయాణ బుకింగ్‌లు మరియు రిజర్వేషన్‌ల కోసం 24/7 వ్యక్తిగత సహాయకుడు.", terms: "బుకింగ్ ఖర్చులు కార్డ్ హోల్డర్ భరిస్తారు. సేవ ఉచితం.", aiSummary: "మీ విమానాలు లేదా డిన్నర్ బుక్ చేయడానికి వ్యక్తిగత సహాయకుడు ఒక కాల్ దూరంలో ఉన్నారు." },
    hi: { title: "द्वारपाल सेवा", shortDesc: "व्यक्तिगत सहायक", description: "यात्रा बुकिंग और आरक्षण के लिए 24/7 व्यक्तिगत सहायक।", terms: "बुकिंग लागत कार्डधारक द्वारा वहन की जाती है। सेवा मानार्थ है।", aiSummary: "आपकी उड़ानें या रात का खाना बुक करने के लिए एक व्यक्तिगत सहायक एक कॉल दूर है।" }
  },
  8: { // Zero Liability
    ta: { title: "பூஜ்ஜிய பொறுப்பு", shortDesc: "மோசடி பாதுகாப்பு", description: "அங்கீகரிக்கப்படாத பரிவர்த்தனைகளுக்கு நீங்கள் பொறுப்பல்ல.", terms: "அங்கீகரிக்கப்படாத பயன்பாட்டை உடனடியாக புகாரளிக்கவும்.", aiSummary: "யாராவது உங்கள் அனுமதியின்றி உங்கள் அட்டையைப் பயன்படுத்தினால் நீங்கள் ஒரு பைசா கூட செலுத்த மாட்டீர்கள்." },
    te: { title: "సున్నా బాధ్యత", shortDesc: "మోసం రక్షణ", description: "అనధికార లావాదేవీలకు మీరు బాధ్యులు కాదు.", terms: "అనధికార వినియోగాన్ని వెంటనే నివేదించండి.", aiSummary: "ఎవరైనా మీ అనుమతి లేకుండా మీ కార్డును ఉపయోగిస్తే మీరు ఒక్క రూపాయి కూడా చెల్లించరు." },
    hi: { title: "शून्य दायित्व", shortDesc: "धोखाधड़ी सुरक्षा", description: "आप अनधिकृत लेनदेन के लिए जिम्मेदार नहीं हैं।", terms: "अनधिकृत उपयोग की तुरंत रिपोर्ट करें।", aiSummary: "यदि कोई आपकी अनुमति के बिना आपके कार्ड का उपयोग करता है तो आप एक पैसा भी नहीं देंगे।" }
  },
  9: { // Golf Access
    ta: { title: "கோல்ஃப் அணுகல்", shortDesc: "இலவச கோல்ஃப்", description: "முக்கிய மைதானங்களில் இலவச கோல்ஃப் விளையாட்டுகள்.", terms: "7 நாட்களுக்கு முன்பு முன்பதிவு தேவை.", aiSummary: "ஆடம்பரமான மைதானங்களில் இலவசமாக கோல்ஃப் விளையாடுங்கள்." },
    te: { title: "గోల్ఫ్ యాక్సెస్", shortDesc: "ఉచిత గోల్ఫ్", description: "ప్రీమియర్ కోర్సులలో కాంప్లిమెంటరీ గోల్ఫ్ గేమ్స్.", terms: "7 రోజుల ముందు బుకింగ్ అవసరం.", aiSummary: "ఫ్యాన్సీ కోర్సులలో ఉచితంగా గోల్ఫ్ ఆడండి." },
    hi: { title: "गोल्फ प्रवेश", shortDesc: "मुफ्त गोल्फ", description: "प्रमुख कोर्स में मानार्थ गोल्फ खेल।", terms: "7 दिन पहले बुकिंग आवश्यक है।", aiSummary: "फैंसी कोर्स में मुफ्त में गोल्फ खेलें।" }
  },
  10: { // Buy 1 Get 1 Movies
    ta: { title: "1 வாங்கினால் 1 இலவசம் அத்திரைப்படங்கள்", shortDesc: "இலவச திரைப்பட டிக்கெட்", description: "BookMyShow-இல் ஒரு திரைப்பட டிக்கெட் வாங்கினால், ஒன்று இலவசம்.", terms: "இரண்டாவது டிக்கெட்டில் ₹500 வரை தள்ளுபடி.", aiSummary: "திரைப்படமா? ஒரு டிக்கெட் வாங்கினால் இரண்டாவது இலவசம்." },
    te: { title: "ఒకటి కొంటే ఒకటి ఉచితం సినిమాలు", shortDesc: "ఉచిత సినిమా టికెట్", description: "BookMyShowలో ఒక సినిమా టికెట్ కొంటే, ఒకటి ఉచితం.", terms: "రెండవ టికెట్‌పై ₹500 వరకు తగ్గింపు.", aiSummary: "సినిమానా? ఒక టికెట్ కొంటే రెండవది ఉచితం." },
    hi: { title: "एक खरीदें एक मुफ्त पाएं फिल्में", shortDesc: "मुफ्त मूवी टिकट", description: "BookMyShow पर एक मूवी टिकट खरीदें, एक मुफ्त पाएं।", terms: "दूसरे टिकट पर ₹500 तक की छूट।", aiSummary: "मूवी नाइट? एक मूवी टिकट खरीदें और दूसरा मुफ्त है।" }
  },
  11: { // Travel Insurance
    ta: { title: "பயணக் காப்பீடு", shortDesc: "$1மில்லியன் பயணக் காப்பீடு", description: "விரிவான பயண மருத்துவ மற்றும் விபத்துக் காப்பீடு.", terms: "அட்டை மூலம் டிக்கெட் வாங்கும்போது செல்லுபடியாகும்.", aiSummary: "நீங்கள் பயணம் செய்யும்போது $1 மில்லியன் காப்பீட்டுத் தொகையைப் பெறுவீர்கள்." },
    te: { title: "ప్రయాణ బీమా", shortDesc: "$1M ప్రయాణ బీమా", description: "సమగ్ర ప్రయాణ వైద్య మరియు ప్రమాద బీమా.", terms: "కార్డుతో టిక్కెట్లు కొనుగోలు చేసినప్పుడు చెల్లుతుంది.", aiSummary: "మీరు ప్రయాణించేటప్పుడు $1 మిలియన్ బీమా కవరేజ్ ఉంటుంది." },
    hi: { title: "यात्रा बीमा", shortDesc: "$1M यात्रा बीमा", description: "व्यापक यात्रा चिकित्सा और दुर्घटना बीमा।", terms: "कार्ड के साथ टिकट खरीदने पर मान्य।", aiSummary: "जब आप यात्रा करते हैं तो आपके पास $1 मिलियन का बीमा कवरेज होता है।" }
  }
};
