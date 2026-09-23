/**
 * Medroute Healthcare Super-App - SINGLE MASTER DATA FILE
 * All application data lives here and nowhere else:
 * cities, hospitals, specialists, doctors, lab tests, medicines, surgeries,
 * gold plans, sample claims, AI symptom triage data, vaccination schedules,
 * and the default user/state store. Other modules read from this one file.
 */

const MEDROUTE_DATA = {
  // Major Indian Metro Hubs
  cities: [
    { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', pincodes: ['560001', '560029', '560034', '560066', '560076'] },
    { id: 'delhi-ncr', name: 'Delhi - NCR', state: 'Delhi & Haryana', pincodes: ['110001', '110017', '110076', '122001', '122002'] },
    { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', pincodes: ['400001', '400012', '400050', '400080', '400614'] },
    { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', pincodes: ['500001', '500032', '500033', '500034', '500081'] },
    { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', pincodes: ['600001', '600006', '600020', '600026', '600096'] },
    { id: 'pune', name: 'Pune', state: 'Maharashtra', pincodes: ['411001', '411004', '411014', '411045', '411057'] },
    { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', pincodes: ['700001', '700027', '700098', '700099', '700107'] }
  ],

  // Genuine Empaneled Hospital Chains
  hospitals: [
    {
      id: 'hosp-1',
      name: 'Apollo Hospitals',
      branch: 'Bannerghatta Road',
      network: 'Apollo Healthcare',
      city: 'bengaluru',
      pincode: '560076',
      address: '154/11, Opp. IIM-B, Bannerghatta Main Rd, Krishnaraju Layout, Bengaluru, Karnataka 560076',
      accreditation: ['JCI Accredited', 'NABH', 'NABL'],
      beds: 250,
      rating: 4.8,
      reviewsCount: 3420,
      cashless: true,
      tpaPartners: ['Medi Assist', 'Vidal Health', 'Star Health', 'HDFC ERGO', 'ICICI Lombard', 'Care Health'],
      specialties: ['Cardiology', 'Orthopedics', 'Oncology', 'Neurology', 'Gastroenterology'],
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80',
      emergencyPhone: '+91 80 2630 4050'
    },
    {
      id: 'hosp-2',
      name: 'Fortis Memorial Research Institute (FMRI)',
      branch: 'Sector 44, Gurugram',
      network: 'Fortis Healthcare',
      city: 'delhi-ncr',
      pincode: '122002',
      address: 'Sector 44, Opposite HUDA City Centre Metro Station, Gurugram, Haryana 122002',
      accreditation: ['NABH', 'JCI Accredited', 'Green OT'],
      beds: 310,
      rating: 4.9,
      reviewsCount: 4210,
      cashless: true,
      tpaPartners: ['Medi Assist', 'Paramount TPA', 'Niva Bupa', 'HDFC ERGO', 'Aditya Birla'],
      specialties: ['Organ Transplant', 'Cardiac Sciences', 'Neurosciences', 'Robotic Surgery'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      emergencyPhone: '+91 124 4962200'
    },
    {
      id: 'hosp-3',
      name: 'Manipal Hospital',
      branch: 'HAL Old Airport Road',
      network: 'Manipal Health Enterprises',
      city: 'bengaluru',
      pincode: '560017',
      address: '98, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560017',
      accreditation: ['NABH', 'NABL', 'ISO 9001'],
      beds: 600,
      rating: 4.7,
      reviewsCount: 5120,
      cashless: true,
      tpaPartners: ['Medi Assist', 'Heritage Health', 'Bajaj Allianz', 'SBI General'],
      specialties: ['Cardiology', 'Pediatrics', 'Obstetrics & Gynecology', 'Oncology'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
      emergencyPhone: '+91 80 2502 4444'
    },
    {
      id: 'hosp-4',
      name: 'Max Super Speciality Hospital',
      branch: 'Saket',
      network: 'Max Healthcare',
      city: 'delhi-ncr',
      pincode: '110017',
      address: '1, 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi 110017',
      accreditation: ['JCI Accredited', 'NABH', 'NABL'],
      beds: 530,
      rating: 4.8,
      reviewsCount: 3890,
      cashless: true,
      tpaPartners: ['Medi Assist', 'FHPL', 'Tata AIG', 'Care Health', 'ICICI Lombard'],
      specialties: ['Minimal Access Surgery', 'Cardiology', 'Orthopedics', 'Urology'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80',
      emergencyPhone: '+91 11 2651 5050'
    },
    {
      id: 'hosp-5',
      name: 'Narayana Institute of Cardiac Sciences',
      branch: 'Bommasandra',
      network: 'Narayana Health',
      city: 'bengaluru',
      pincode: '560099',
      address: '258/A, Bommasandra Industrial Area, Anekal Taluk, Bengaluru, Karnataka 560099',
      accreditation: ['JCI Accredited', 'NABH'],
      beds: 1000,
      rating: 4.9,
      reviewsCount: 6780,
      cashless: true,
      tpaPartners: ['Medi Assist', 'MDIndia', 'Star Health', 'United India', 'New India'],
      specialties: ['Adult & Pediatric Cardiology', 'Cardiac Surgery', 'Vascular Surgery'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
      emergencyPhone: '+91 80 7122 2222'
    },
    {
      id: 'hosp-6',
      name: 'Sir H. N. Reliance Foundation Hospital',
      branch: 'Girgaon',
      network: 'Reliance Healthcare',
      city: 'mumbai',
      pincode: '400004',
      address: 'Raja Ram Mohan Roy Rd, Prarthana Samaj, Girgaon, Mumbai, Maharashtra 400004',
      accreditation: ['JCI Accredited', 'NABH', 'NABL'],
      beds: 345,
      rating: 4.9,
      reviewsCount: 2950,
      cashless: true,
      tpaPartners: ['Medi Assist', 'Vidal Health', 'HDFC ERGO', 'ICICI Lombard'],
      specialties: ['Robotic Surgery', 'Critical Care', 'Neurosciences', 'Orthopedics'],
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=600&q=80',
      emergencyPhone: '+91 22 6130 5005'
    },
    {
      id: 'hosp-7',
      name: 'Apollo Hospital',
      branch: 'Greams Road',
      network: 'Apollo Healthcare',
      city: 'chennai',
      pincode: '600006',
      address: '21 Greams Lane, Off Greams Road, Thousand Lights, Chennai, Tamil Nadu 600006',
      accreditation: ['JCI Accredited', 'NABH'],
      beds: 560,
      rating: 4.8,
      reviewsCount: 4600,
      cashless: true,
      tpaPartners: ['Medi Assist', 'Star Health', 'United India', 'National Insurance'],
      specialties: ['Cardiothoracic', 'Oncology', 'Organ Transplants', 'Nephrology'],
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80',
      emergencyPhone: '+91 44 2829 0200'
    },
    {
      id: 'hosp-8',
      name: 'Medanta - The Medicity',
      branch: 'Sector 38, Gurugram',
      network: 'Medanta Group',
      city: 'delhi-ncr',
      pincode: '122001',
      address: 'CH Bakhtawar Singh Rd, Medicity, Islampur Colony, Sector 38, Gurugram, Haryana 122001',
      accreditation: ['JCI Accredited', 'NABH', 'NABL'],
      beds: 1250,
      rating: 4.8,
      reviewsCount: 8200,
      cashless: true,
      tpaPartners: ['Medi Assist', 'FHPL', 'Paramount', 'Bajaj Allianz', 'Star Health'],
      specialties: ['Heart Institute', 'Cancer Institute', 'Bone & Joint', 'Kidney & Urology'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      emergencyPhone: '+91 124 4141414'
    }
  ],

  // Specialties
  specialties: [
    { id: 'gp', name: 'General Physician', icon: 'stethoscope', count: '140+ Doctors', desc: 'Fever, cough, infections, general wellness' },
    { id: 'gyn', name: 'Gynecology & Obstetrics', icon: 'heart', count: '95+ Doctors', desc: 'Periods, pregnancy, PCOS, fertility care' },
    { id: 'derm', name: 'Dermatology & Hair', icon: 'sparkles', count: '80+ Doctors', desc: 'Acne, skin allergy, hairfall, rashes' },
    { id: 'ped', name: 'Pediatrics & Child Care', icon: 'smile', count: '75+ Doctors', desc: 'Newborn care, vaccinations, child fever' },
    { id: 'card', name: 'Cardiology', icon: 'activity', count: '60+ Doctors', desc: 'Heart health, BP, chest pain, palpitations' },
    { id: 'ortho', name: 'Orthopedics & Joints', icon: 'shield', count: '70+ Doctors', desc: 'Back pain, arthritis, fractures, knee care' },
    { id: 'psych', name: 'Psychiatry & Therapy', icon: 'sun', count: '50+ Doctors', desc: 'Anxiety, depression, stress, sleep issues' },
    { id: 'gastro', name: 'Gastroenterology', icon: 'zap', count: '45+ Doctors', desc: 'Acid reflux, gas, liver health, digestion' },
    { id: 'diab', name: 'Diabetology & Endo', icon: 'target', count: '40+ Doctors', desc: 'Sugar control, thyroid, hormonal imbalance' },
    { id: 'ent', name: 'ENT Specialist', icon: 'mic', count: '35+ Doctors', desc: 'Ear pain, throat infection, sinus, hearing' },
    { id: 'eye', name: 'Ophthalmology', icon: 'eye', count: '40+ Doctors', desc: 'Eye strain, cataract, vision correction' },
    { id: 'dent', name: 'Dental Care', icon: 'check-circle', count: '55+ Doctors', desc: 'Toothache, cleaning, root canal, braces' }
  ],

  // Genuine Specialist Doctors with Verified Credentials
  doctors: [
    {
      id: 'doc-1',
      name: 'Dr. Rajesh Sharma',
      qualification: 'MBBS, MD (Internal Medicine - AIIMS New Delhi)',
      specialtyId: 'gp',
      specialty: 'Senior Consultant Physician',
      experience: 16,
      hospital: 'Max Super Speciality Hospital, Saket',
      city: 'delhi-ncr',
      nmcRegNo: 'DMC-48912',
      rating: 4.9,
      reviewsCount: 1420,
      fee: 650,
      goldFee: 0,
      languages: ['English', 'Hindi'],
      nextSlot: 'Today, within 15 mins',
      availableToday: true,
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
      about: 'Alumnus of AIIMS New Delhi with 16+ years of clinical excellence in acute infection management, chronic lifestyle conditions, and preventive medicine.'
    },
    {
      id: 'doc-2',
      name: 'Dr. Meenakshi Sundaram',
      qualification: 'MBBS, MS (OBG - CMC Vellore), DNB, FRCOG (UK)',
      specialtyId: 'gyn',
      specialty: 'Obstetrician & Gynecologist',
      experience: 19,
      hospital: 'Apollo Hospitals, Greams Road',
      city: 'chennai',
      nmcRegNo: 'TNMC-32104',
      rating: 4.95,
      reviewsCount: 1840,
      fee: 800,
      goldFee: 0,
      languages: ['English', 'Tamil', 'Hindi'],
      nextSlot: 'Today, 11:30 AM',
      availableToday: true,
      avatar: 'https://images.unsplash.com/photo-1594824813512-32b005e1975e?auto=format&fit=crop&w=300&q=80',
      about: 'Senior Consultant with extensive expertise in high-risk pregnancies, PCOS hormonal balancing, and minimally invasive laparoscopic gynecological care.'
    },
    {
      id: 'doc-3',
      name: 'Dr. Arjun K. Rao',
      qualification: 'MBBS, MD (Dermatology & Venereology - KMC Manipal)',
      specialtyId: 'derm',
      specialty: 'Dermatologist & Cosmetologist',
      experience: 12,
      hospital: 'Manipal Hospital, Old Airport Road',
      city: 'bengaluru',
      nmcRegNo: 'KMC-71239',
      rating: 4.88,
      reviewsCount: 980,
      fee: 700,
      goldFee: 0,
      languages: ['English', 'Kannada', 'Hindi'],
      nextSlot: 'Today, within 20 mins',
      availableToday: true,
      avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80',
      about: 'Gold Medalist from KMC Manipal. Specializes in advanced clinical dermatology, acne scarring treatments, allergic dermatoses, and clinical trichology.'
    },
    {
      id: 'doc-4',
      name: 'Dr. Preeti Deshmukh',
      qualification: 'MBBS, MD (Pediatrics - KEM Hospital Mumbai), IAP Fellow',
      specialtyId: 'ped',
      specialty: 'Senior Pediatrician & Neonatologist',
      experience: 15,
      hospital: 'Sir H. N. Reliance Foundation Hospital',
      city: 'mumbai',
      nmcRegNo: 'MMC-65410',
      rating: 4.92,
      reviewsCount: 1610,
      fee: 750,
      goldFee: 0,
      languages: ['English', 'Marathi', 'Hindi'],
      nextSlot: 'Today, 02:00 PM',
      availableToday: true,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
      about: 'Compassionate pediatric care specialist focusing on infant development, childhood nutrition, respiratory allergies, and routine pediatric immunization.'
    },
    {
      id: 'doc-5',
      name: 'Dr. Sandeep Banerjee',
      qualification: 'MBBS, MD, DM (Cardiology - PGIMER Chandigarh)',
      specialtyId: 'card',
      specialty: 'Interventional Cardiologist',
      experience: 21,
      hospital: 'Narayana Institute of Cardiac Sciences',
      city: 'bengaluru',
      nmcRegNo: 'KMC-41908',
      rating: 4.96,
      reviewsCount: 2200,
      fee: 1000,
      goldFee: 0,
      languages: ['English', 'Bengali', 'Hindi'],
      nextSlot: 'Tomorrow, 10:00 AM',
      availableToday: false,
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80',
      about: 'Pioneering cardiologist with 21+ years of experience across coronary angioplasty, heart failure therapies, and preventive cardiovascular screening.'
    },
    {
      id: 'doc-6',
      name: 'Dr. Amit Vashisht',
      qualification: 'MBBS, MS (Orthopedics - AIIMS New Delhi), MCh (Ortho - UK)',
      specialtyId: 'ortho',
      specialty: 'Senior Joint Replacement & Spine Surgeon',
      experience: 18,
      hospital: 'Fortis Memorial Research Institute (FMRI)',
      city: 'delhi-ncr',
      nmcRegNo: 'DMC-52119',
      rating: 4.91,
      reviewsCount: 1340,
      fee: 900,
      goldFee: 0,
      languages: ['English', 'Hindi', 'Punjabi'],
      nextSlot: 'Today, 04:30 PM',
      availableToday: true,
      avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80',
      about: 'Specialized in computer-navigated total knee and hip replacements, minimally invasive spine procedures, and complex sports ligament reconstruction.'
    },
    {
      id: 'doc-7',
      name: 'Dr. Sunita Nambiar',
      qualification: 'MBBS, MD (Psychiatry - NIMHANS Bengaluru)',
      specialtyId: 'psych',
      specialty: 'Consultant Psychiatrist & Behavioral Therapist',
      experience: 14,
      hospital: 'Apollo Hospitals, Bannerghatta Road',
      city: 'bengaluru',
      nmcRegNo: 'KMC-89320',
      rating: 4.94,
      reviewsCount: 1120,
      fee: 850,
      goldFee: 0,
      languages: ['English', 'Malayalam', 'Kannada', 'Hindi'],
      nextSlot: 'Today, within 30 mins',
      availableToday: true,
      avatar: 'https://images.unsplash.com/photo-1594824813512-32b005e1975e?auto=format&fit=crop&w=300&q=80',
      about: 'Trained at premier institute NIMHANS. Compassionate expert in anxiety, clinical depression, work-life burnout, sleep disorders, and cognitive therapy.'
    },
    {
      id: 'doc-8',
      name: 'Dr. Vivek Singhal',
      qualification: 'MBBS, MD, DM (Gastroenterology - Medanta Institute)',
      specialtyId: 'gastro',
      specialty: 'Consultant Gastroenterologist & Hepatologist',
      experience: 13,
      hospital: 'Medanta - The Medicity',
      city: 'delhi-ncr',
      nmcRegNo: 'HNMC-28491',
      rating: 4.89,
      reviewsCount: 890,
      fee: 850,
      goldFee: 0,
      languages: ['English', 'Hindi'],
      nextSlot: 'Today, 03:00 PM',
      availableToday: true,
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80',
      about: 'Expert in therapeutic endoscopy, fatty liver disease management, irritable bowel syndrome (IBS), gastroesophageal reflux, and pancreatitis.'
    }
  ],

  // Diagnostic Lab Tests & Health Packages (Matching NABL Standards like Metropolis & Dr Lal PathLabs)
  labPackages: [
    {
      id: 'pkg-1',
      name: 'Medroute Comprehensive Full Body Checkup',
      testsCount: 86,
      badge: 'Bestseller (Most Popular)',
      mrp: 4199,
      price: 1399,
      discount: '67% OFF',
      goldPrice: 1099,
      sampleType: 'Blood & Urine',
      fasting: '10-12 hours overnight fasting required',
      reportTime: 'Within 15 hours',
      partnerLab: 'Thyrocare Technologies / NABL & CAP Accredited',
      desc: 'Our most comprehensive preventive health package covering all vital organs: heart, liver, kidney, thyroid, blood sugar, bones, and complete blood counts.',
      parameters: [
        'Complete Blood Count (CBC with ESR - 24 parameters)',
        'Lipid Profile (Total Cholesterol, HDL, LDL, Triglycerides, VLDL - 8 parameters)',
        'Liver Function Test (SGOT, SGPT, Bilirubin Total/Direct, Alkaline Phosphatase, Protein - 11 parameters)',
        'Kidney Function Test (Serum Creatinine, Blood Urea Nitrogen, Uric Acid, Calcium - 6 parameters)',
        'Thyroid Profile Total (Total T3, Total T4, TSH - 3 parameters)',
        'Diabetic Screen (HbA1c Glycated Hemoglobin, Average Blood Glucose - 2 parameters)',
        'Vitamin Markers (Vitamin D3 25-Hydroxy & Vitamin B12 - 2 parameters)',
        'Urine Routine & Microscopic Examination (23 parameters)',
        'Iron Deficiency Profile (Serum Iron, TIBC, Transferrin Saturation - 4 parameters)',
        'Cardiac Risk Markers (hs-CRP, Homocysteine - 3 parameters)'
      ]
    },
    {
      id: 'pkg-2',
      name: 'Diabetic Care 360 & Cardiac Screen',
      testsCount: 52,
      badge: 'Specialized Chronic Care',
      mrp: 3200,
      price: 1199,
      discount: '62% OFF',
      goldPrice: 899,
      sampleType: 'Blood & Urine',
      fasting: '10-12 hours overnight fasting required',
      reportTime: 'Within 12 hours',
      partnerLab: 'Metropolis Healthcare / NABL Accredited',
      desc: 'Formulated by diabetologists to monitor long-term blood sugar trends, organ complications, diabetic nephropathy, and cardiovascular risks.',
      parameters: [
        'HbA1c (Glycosylated Hemoglobin) with Estimated Average Glucose',
        'Fasting Blood Sugar (Glucose Fasting)',
        'Lipid Profile Comprehensive (Cholesterol, Triglycerides, HDL, LDL, Ratio)',
        'Kidney Function & Microalbuminuria (Urine Microalbumin/Creatinine Ratio)',
        'Complete Hemogram (CBC - 24 parameters)',
        'Serum Creatinine & eGFR (Estimated Glomerular Filtration Rate)',
        'Serum Electrolytes (Sodium, Potassium, Chloride)'
      ]
    },
    {
      id: 'pkg-3',
      name: 'Women’s Advanced Wellness & Hormonal Profile',
      testsCount: 68,
      badge: 'Specially for Women',
      mrp: 3800,
      price: 1499,
      discount: '60% OFF',
      goldPrice: 1199,
      sampleType: 'Blood & Urine',
      fasting: '10-12 hours fasting required',
      reportTime: 'Within 18 hours',
      partnerLab: 'Dr. Lal PathLabs / NABL Accredited',
      desc: 'Customized for female wellness covering thyroid, anemia markers, hormonal balance, bone density vitamins, and PCOS risk indicators.',
      parameters: [
        'Thyroid Profile Complete (Free T3, Free T4, Ultrasensitive TSH)',
        'Anemia & Iron Profile (Serum Ferritin, Iron, Total Iron Binding Capacity)',
        'Vitamin D3 (25-OH) & Vitamin B12',
        'Complete Blood Count (CBC - 24 tests)',
        'Calcium & Serum Phosphorus',
        'Liver & Kidney Health Screens',
        'HbA1c & Fasting Blood Sugar'
      ]
    },
    {
      id: 'pkg-4',
      name: 'Senior Citizen Vital Care (Male/Female)',
      testsCount: 75,
      badge: 'Age 50+ Recommended',
      mrp: 4500,
      price: 1699,
      discount: '62% OFF',
      goldPrice: 1399,
      sampleType: 'Blood & Urine',
      fasting: '10-12 hours fasting required',
      reportTime: 'Within 16 hours',
      partnerLab: 'Thyrocare / NABL & CAP Accredited',
      desc: 'Designed for elders to assess cardiac load, joint health, uric acid, kidney filtration, cognitive vitamin markers, and prostate/hormonal safety.',
      parameters: [
        'Comprehensive Lipid & Cardiac Risk Profile',
        'Renal / Kidney Health (BUN, Creatinine, Uric Acid, eGFR)',
        'Bone & Joint Screen (Calcium, Alkaline Phosphatase, Uric Acid)',
        'Liver Function & Protein Profile',
        'HbA1c & Blood Glucose',
        'Vitamin D3 & Vitamin B12',
        'Thyroid TSH Screen',
        'Complete Blood Count & Urine Routine'
      ]
    }
  ],

  // Individual Popular Diagnostic Tests
  individualTests: [
    { id: 't-1', name: 'HbA1c (Glycated Hemoglobin)', mrp: 600, price: 299, sample: 'Blood', fasting: 'Non-fasting', turnaround: '6 hrs' },
    { id: 't-2', name: 'Thyroid Profile Total (T3, T4, TSH)', mrp: 550, price: 249, sample: 'Blood', fasting: 'Non-fasting', turnaround: '8 hrs' },
    { id: 't-3', name: 'Complete Blood Count (CBC - 24 params)', mrp: 450, price: 199, sample: 'Blood', fasting: 'Non-fasting', turnaround: '4 hrs' },
    { id: 't-4', name: 'Vitamin D3 (25-Hydroxy)', mrp: 1200, price: 499, sample: 'Blood', fasting: 'Non-fasting', turnaround: '12 hrs' },
    { id: 't-5', name: 'Vitamin B12 (Cyanocobalamin)', mrp: 1100, price: 479, sample: 'Blood', fasting: 'Non-fasting', turnaround: '12 hrs' },
    { id: 't-6', name: 'Lipid Profile Comprehensive', mrp: 750, price: 349, sample: 'Blood', fasting: '10-12 hrs fasting', turnaround: '6 hrs' },
    { id: 't-7', name: 'Liver Function Test (LFT)', mrp: 800, price: 349, sample: 'Blood', fasting: '8 hrs fasting', turnaround: '6 hrs' },
    { id: 't-8', name: 'Kidney Function Test (KFT with Electrolytes)', mrp: 850, price: 379, sample: 'Blood', fasting: 'Non-fasting', turnaround: '6 hrs' }
  ],

  // Genuine Medicines Catalog (Authentic Composition & Brands)
  medicines: [
    {
      id: 'med-1',
      name: 'Telma 40mg Tablet',
      generic: 'Telmisartan (40mg)',
      manufacturer: 'Glenmark Pharmaceuticals Ltd',
      category: 'Blood Pressure / Cardiac',
      stripSize: 'Strip of 30 tablets',
      mrp: 298,
      price: 238,
      discount: '20% OFF',
      rxRequired: true,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80',
      desc: 'Used in the management of hypertension (high blood pressure) and prevention of cardiovascular events.'
    },
    {
      id: 'med-2',
      name: 'Glycomet-GP 1 Tablet',
      generic: 'Glimepiride (1mg) + Metformin Hydrochloride (500mg)',
      manufacturer: 'USV Ltd',
      category: 'Diabetes Care',
      stripSize: 'Strip of 15 tablets',
      mrp: 145,
      price: 116,
      discount: '20% OFF',
      rxRequired: true,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=300&q=80',
      desc: 'Dual-action medication for effective glycemic control in adults with type 2 diabetes mellitus.'
    },
    {
      id: 'med-3',
      name: 'Thyronorm 50mcg Tablet',
      generic: 'Thyroxine Sodium (50mcg)',
      manufacturer: 'Abbott Healthcare Pvt Ltd',
      category: 'Thyroid / Hormones',
      stripSize: 'Bottle of 120 tablets',
      mrp: 215,
      price: 172,
      discount: '20% OFF',
      rxRequired: true,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80',
      desc: 'Synthetic thyroid hormone prescribed for the treatment of hypothyroidism (underactive thyroid gland).'
    },
    {
      id: 'med-4',
      name: 'Atorva 10mg Tablet',
      generic: 'Atorvastatin (10mg)',
      manufacturer: 'Zydus Cadila',
      category: 'Blood Pressure / Cardiac',
      stripSize: 'Strip of 15 tablets',
      mrp: 168,
      price: 134,
      discount: '20% OFF',
      rxRequired: true,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=300&q=80',
      desc: 'Statins used to lower bad cholesterol (LDL) and triglycerides in the bloodstream.'
    },
    {
      id: 'med-5',
      name: 'Augmentin 625 Duo Tablet',
      generic: 'Amoxicillin (500mg) + Clavulanic Acid (125mg)',
      manufacturer: 'GlaxoSmithKline Pharmaceuticals Ltd',
      category: 'Antibiotics',
      stripSize: 'Strip of 10 tablets',
      mrp: 223,
      price: 178,
      discount: '20% OFF',
      rxRequired: true,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80',
      desc: 'Broad-spectrum penicillin antibiotic combined with a beta-lactamase inhibitor for bacterial infections.'
    },
    {
      id: 'med-6',
      name: 'Pan-D Capsule',
      generic: 'Pantoprazole (40mg) + Domperidone (30mg SR)',
      manufacturer: 'Alkem Laboratories Ltd',
      category: 'Gastroenterology',
      stripSize: 'Strip of 15 capsules',
      mrp: 199,
      price: 159,
      discount: '20% OFF',
      rxRequired: true,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=300&q=80',
      desc: 'Effective relief for acid reflux, gastroesophageal reflux disease (GERD), and acidity nausea.'
    },
    {
      id: 'med-7',
      name: 'Dolo 650 Tablet',
      generic: 'Paracetamol (650mg)',
      manufacturer: 'Micro Labs Ltd',
      category: 'Pain Relief & Fever',
      stripSize: 'Strip of 15 tablets',
      mrp: 34,
      price: 29,
      discount: '15% OFF',
      rxRequired: false,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80',
      desc: 'India’s trusted antipyretic and analgesic for rapid relief from high fever, headaches, and body pain.'
    },
    {
      id: 'med-8',
      name: 'Shelcal 500 Tablet',
      generic: 'Calcium (500mg) + Vitamin D3 (250 IU)',
      manufacturer: 'Torrent Pharmaceuticals Ltd',
      category: 'Vitamins & Supplements',
      stripSize: 'Strip of 15 tablets',
      mrp: 131,
      price: 105,
      discount: '20% OFF',
      rxRequired: false,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=300&q=80',
      desc: 'Vital mineral formulation for strengthening bone mineral density and preventing osteoporosis.'
    },
    {
      id: 'med-9',
      name: 'Becosules Z Capsule',
      generic: 'B-Complex Vitamins + Vitamin C + Zinc',
      manufacturer: 'Pfizer Ltd',
      category: 'Vitamins & Supplements',
      stripSize: 'Strip of 20 capsules',
      mrp: 54,
      price: 46,
      discount: '15% OFF',
      rxRequired: false,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80',
      desc: 'Therapeutic multivitamin supplement for immune vitality, skin health, and mouth ulcer recovery.'
    },
    {
      id: 'med-10',
      name: 'Otrivin Oxy Fast Relief Nasal Spray',
      generic: 'Oxymetazoline Hydrochloride (0.05% w/v)',
      manufacturer: 'GlaxoSmithKline Consumer Healthcare',
      category: 'Cold & Cough',
      stripSize: 'Bottle of 10ml',
      mrp: 110,
      price: 93,
      discount: '15% OFF',
      rxRequired: false,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=300&q=80',
      desc: 'Acts in 25 seconds to open blocked nasal passages during sinus and viral colds.'
    }
  ],

  // Genuine Surgical Procedures with Accurate Clinical Specs
  surgeries: [
    {
      id: 'surg-1',
      name: 'Cataract Eye Surgery',
      clinicalTerm: 'Phacoemulsification with Foldable Monofocal/Multifocal IOL',
      category: 'Ophthalmology',
      anesthesia: 'Topical / Local Drop Anesthesia (Pain-free)',
      duration: '15 - 25 Minutes',
      hospitalStay: 'Day Care (Discharge in 2-3 hours)',
      recoveryTime: 'Normal vision resume in 24 - 48 hours',
      avgCost: 35000,
      costRange: '₹25,000 - ₹55,000',
      monthlyEmi: 2916,
      cashlessEligible: true,
      desc: 'Micro-incision blade-free ultrasound surgery to remove cloudy natural lens and implant US-FDA approved intraocular lens.',
      inclusions: [
        'Dedicated Medroute Care Buddy concierge',
        'Free pre-surgery optical biometry assessment',
        '100% Cashless insurance approval assistance',
        'Free post-surgery drop medication kit & 3 follow-up consultations'
      ]
    },
    {
      id: 'surg-2',
      name: 'Gallbladder Stone Removal',
      clinicalTerm: 'Laparoscopic Cholecystectomy (3D Minimal Access)',
      category: 'General & Laparoscopic Surgery',
      anesthesia: 'General Anesthesia',
      duration: '40 - 55 Minutes',
      hospitalStay: '24 Hours (Overnight Stay)',
      recoveryTime: 'Desk work in 3-5 days; Full recovery in 10 days',
      avgCost: 65000,
      costRange: '₹55,000 - ₹90,000',
      monthlyEmi: 5416,
      cashlessEligible: true,
      desc: 'Gold standard 3D keyhole surgery with 3 tiny incisions to excise inflamed gallbladder with gallstones.',
      inclusions: [
        'Free second opinion from Senior Laparoscopic Surgeon',
        'TPA Pre-authorization desk handling all claim paperwork',
        'Complimentary private room upgrade assistance',
        'Post-operative clinical dietitian diet plan'
      ]
    },
    {
      id: 'surg-3',
      name: 'Hernia Repair Surgery',
      clinicalTerm: 'Laparoscopic Inguinal / Umbilical Hernioplasty with 3D Mesh',
      category: 'General & Laparoscopic Surgery',
      anesthesia: 'Spinal or General Anesthesia',
      duration: '45 - 60 Minutes',
      hospitalStay: 'Day Care to 24 Hours',
      recoveryTime: 'Walk same day; light activity in 5 days',
      avgCost: 58000,
      costRange: '₹48,000 - ₹82,000',
      monthlyEmi: 4833,
      cashlessEligible: true,
      desc: 'Minimally invasive repair reinforcing the abdominal wall defect with high-grade biocompatible dual-surface mesh.',
      inclusions: [
        'Care Buddy bedside concierge support',
        'Cashless coverage under corporate & retail health policies',
        'Zero-Cost EMI up to 12 months tenure'
      ]
    },
    {
      id: 'surg-4',
      name: 'Total Knee Replacement (TKR)',
      clinicalTerm: 'Computer-Navigated Bilateral/Unilateral Knee Arthroplasty',
      category: 'Orthopedics',
      anesthesia: 'Combined Spinal-Epidural (CSE)',
      duration: '75 - 90 Minutes per knee',
      hospitalStay: '3 - 4 Days',
      recoveryTime: 'Walking with support on Day 2; Independent walking in 3 weeks',
      avgCost: 175000,
      costRange: '₹1,40,000 - ₹2,40,000',
      monthlyEmi: 14583,
      cashlessEligible: true,
      desc: 'Precision joint replacement utilizing world-class US implants (Stryker / Zimmer Biomet) for severe osteoarthritis relief.',
      inclusions: [
        'Complete insurance documentation & room tariff coordination',
        'In-hospital physiotherapy rehabilitation sessions',
        'Complimentary 1-month home physiotherapy guidance'
      ]
    },
    {
      id: 'surg-5',
      name: 'Piles & Anorectal Surgery',
      clinicalTerm: 'Minimally Invasive Diode Laser Hemorrhoidoplasty (LHP)',
      category: 'Proctology',
      anesthesia: 'Short General / Spinal Anesthesia',
      duration: '25 - 30 Minutes',
      hospitalStay: 'Day Care (Discharge same evening)',
      recoveryTime: 'Zero cuts, zero bleeding; Back to routine in 48 hours',
      avgCost: 45000,
      costRange: '₹38,000 - ₹62,000',
      monthlyEmi: 3750,
      cashlessEligible: true,
      desc: 'Advanced 1470nm diode laser beam precisely shrinks hemorrhoidal cushions without painful surgical incisions.',
      inclusions: [
        '100% Confidential proctology consultation',
        'Cashless admission in NABH-certified surgical centers',
        'Care Buddy assisted hassle-free discharge'
      ]
    },
    {
      id: 'surg-6',
      name: 'Kidney Stone Laser Removal',
      clinicalTerm: 'RIRS (Retrograde Intrarenal Surgery) with Holmium Laser',
      category: 'Urology',
      anesthesia: 'General / Spinal Anesthesia',
      duration: '40 - 60 Minutes',
      hospitalStay: '24 Hours',
      recoveryTime: 'Normal routine resumed in 2-3 days',
      avgCost: 72000,
      costRange: '₹60,000 - ₹95,000',
      monthlyEmi: 6000,
      cashlessEligible: true,
      desc: 'Flexible ureterorenoscopy delivering laser energy directly into the renal pelvis to pulverize stones to dust without external scars.',
      inclusions: [
        'Laser lithotripsy by senior board-certified urologist',
        'Pre-authorization paperwork completed within 60 minutes',
        'Follow-up ultrasound and stent removal package included'
      ]
    },
    {
      id: 'surg-7',
      name: 'LASIK Eye Vision Correction',
      clinicalTerm: 'Blade-Free Contoura Vision / SMILE Laser Eye Surgery',
      category: 'Ophthalmology',
      anesthesia: 'Anesthetic Eye Drops (Zero needles)',
      duration: '10 - 15 Minutes both eyes',
      hospitalStay: 'Day Care (Discharge in 1 hour)',
      recoveryTime: 'Clear HD vision within 24 hours',
      avgCost: 55000,
      costRange: '₹45,000 - ₹85,000',
      monthlyEmi: 4583,
      cashlessEligible: false,
      desc: 'Topography-guided custom corneal reshaping for permanent freedom from spectacles and contact lenses.',
      inclusions: [
        'Comprehensive 18-parameter corneal suitability checkup',
        'Zero-Cost EMI starting from ₹3,750/month',
        '1-year unlimited post-LASIK ophthalmology visits'
      ]
    },
    {
      id: 'surg-8',
      name: 'Varicose Veins Laser Therapy',
      clinicalTerm: 'EVLT (Endovenous Laser Treatment) + Sclerotherapy',
      category: 'Vascular Surgery',
      anesthesia: 'Tumescent Local Anesthesia',
      duration: '45 Minutes',
      hospitalStay: 'Day Care (Walk out within 3 hours)',
      recoveryTime: 'Immediate walking; No bed rest needed',
      avgCost: 68000,
      costRange: '₹55,000 - ₹90,000',
      monthlyEmi: 5666,
      cashlessEligible: true,
      desc: 'Catheter-guided laser energy seals faulty leg vein valves, ending pain, swelling, and ulcer risks.',
      inclusions: [
        'Free color doppler venous mapping scan',
        'Full medical insurance cashless support',
        'Class-II medical compression stockings provided'
      ]
    }
  ],

  // Medroute Gold Membership Tiers (MediBuddy Gold equivalent)
  goldPlans: [
    {
      id: 'gold-quarterly',
      name: '3 Months Starter',
      period: '3 Months',
      mrp: 999,
      price: 499,
      discount: '50% OFF',
      familyMembers: 4,
      desc: 'Great for trying out unlimited 24/7 teleconsultations for your immediate family.'
    },
    {
      id: 'gold-annual',
      name: '1 Year Family Care',
      period: '12 Months',
      popular: true,
      mrp: 2499,
      price: 999,
      discount: '60% OFF',
      familyMembers: 6,
      desc: 'Our most loved plan. Complete year-round healthcare safety net for up to 6 members.'
    },
    {
      id: 'gold-platinum',
      name: '1 Year Platinum Care',
      period: '12 Months',
      mrp: 3999,
      price: 1799,
      discount: '55% OFF',
      familyMembers: 6,
      includesFreeTest: true,
      desc: 'Includes 1 FREE Comprehensive Full Body Health Checkup (worth ₹1,399) + Unlimited consults.'
    }
  ],

  // Live Claim Sample for Real-Time Tracker
  sampleClaims: {
    'MED-78291': {
      claimId: 'MED-78291',
      patientName: 'Sunita Sharma',
      age: 48,
      policyNumber: 'NIC-RET-8849201',
      tpa: 'Medi Assist Insurance TPA Pvt Ltd',
      hospital: 'Fortis Memorial Research Institute (FMRI), Gurugram',
      treatment: 'Laparoscopic Cholecystectomy',
      admissionDate: '21 Sep 2026',
      estimatedAmount: '₹82,500',
      approvedAmount: '₹80,000',
      currentStep: 3, // 1: Submitted, 2: Under Review, 3: Pre-Auth Approved, 4: Hospitalized, 5: Settled
      statusText: 'Cashless Pre-Authorization Approved',
      statusType: 'success',
      steps: [
        { title: 'Claim Intimation & KYC Submitted', time: '21 Sep 2026, 09:15 AM', done: true },
        { title: 'TPA Document Verification', time: '21 Sep 2026, 10:45 AM', done: true },
        { title: 'Cashless Pre-Authorization Issued (₹80,000)', time: '21 Sep 2026, 12:20 PM', done: true },
        { title: 'Hospital Admission & Surgery in Progress', time: 'In Progress', active: true },
        { title: 'Final Discharge & Direct Settlement', time: 'Pending Discharge', done: false }
      ]
    },
    'MED-44120': {
      claimId: 'MED-44120',
      patientName: 'Rahul Verma',
      age: 34,
      policyNumber: 'HDFC-CORP-33918',
      tpa: 'Medi Assist Insurance TPA Pvt Ltd',
      hospital: 'Manipal Hospital, HAL Old Airport Rd, Bengaluru',
      treatment: 'Arthroscopic ACL Reconstruction',
      admissionDate: '18 Sep 2026',
      estimatedAmount: '₹1,15,000',
      approvedAmount: '₹1,15,000',
      currentStep: 5,
      statusText: 'Claim Settled 100% Cashless',
      statusType: 'success',
      steps: [
        { title: 'Claim Intimation & KYC Submitted', time: '18 Sep 2026, 08:30 AM', done: true },
        { title: 'TPA Document Verification', time: '18 Sep 2026, 09:40 AM', done: true },
        { title: 'Cashless Pre-Authorization Issued (₹1,15,000)', time: '18 Sep 2026, 11:15 AM', done: true },
        { title: 'Patient Admitted & Discharged', time: '19 Sep 2026, 04:00 PM', done: true },
        { title: 'Final Hospital Settlement Completed', time: '20 Sep 2026, 11:30 AM', done: true }
      ]
    }
  },

  // AI Clinical Triage - Symptom Checker Categories
  aiSymptoms: [
    {
      category: 'Common Infections & Fever',
      symptoms: ['High Fever & Chills', 'Persistent Dry Cough', 'Sore Throat', 'Fatigue & Body Ache'],
      recommendedSpecialty: 'General Physician',
      specialtyId: 'gp',
      recommendedDoctor: 'Dr. Rajesh Sharma (AIIMS Alumnus)',
      recommendedTest: 'Complete Blood Count (CBC) + ESR',
      advice: 'Drink warm fluids, monitor your temperature every 4 hours, and avoid self-medicating with antibiotics without a prescription.'
    },
    {
      category: 'Digestive & Stomach Issues',
      symptoms: ['Burning Sensation in Chest (Acidity)', 'Severe Abdominal Cramps', 'Nausea / Vomiting', 'Gas & Chronic Bloating'],
      recommendedSpecialty: 'Gastroenterology',
      specialtyId: 'gastro',
      recommendedDoctor: 'Dr. Vivek Singhal',
      recommendedTest: 'Liver Function Test (LFT) & Abdominal Ultrasound',
      advice: 'Avoid spicy, greasy meals and carbonated drinks. Eat small, frequent bland meals and remain upright for 2 hours after food.'
    },
    {
      category: 'Skin, Scalp & Hair',
      symptoms: ['Severe Acne & Breakouts', 'Itchy Red Rash or Hives', 'Rapid Hair Thinning', 'Fungal Infection / Ringworm'],
      recommendedSpecialty: 'Dermatology & Hair',
      specialtyId: 'derm',
      recommendedDoctor: 'Dr. Arjun K. Rao (Gold Medalist)',
      recommendedTest: 'Thyroid Profile Total & Serum Ferritin',
      advice: 'Avoid scratching the affected area to prevent bacterial secondary infection. Do not apply strong steroid creams without consulting.'
    },
    {
      category: 'Bone, Joint & Back Pain',
      symptoms: ['Knee Pain when Walking/Stairs', 'Lower Back Stiffness', 'Shoulder Joint Immobility', 'Morning Joint Swelling'],
      recommendedSpecialty: 'Orthopedics & Joints',
      specialtyId: 'ortho',
      recommendedDoctor: 'Dr. Amit Vashisht (AIIMS Specialist)',
      recommendedTest: 'Serum Uric Acid, Calcium & Vitamin D3',
      advice: 'Apply warm or cold compress for 15 minutes. Avoid heavy lifting and floor cross-legged sitting until evaluated.'
    },
    {
      category: 'Women’s Health & Hormones',
      symptoms: ['Irregular or Painful Periods', 'PCOS Weight Gain', 'Pregnancy Confirmation', 'Pelvic Discomfort'],
      recommendedSpecialty: 'Gynecology & Obstetrics',
      specialtyId: 'gyn',
      recommendedDoctor: 'Dr. Meenakshi Sundaram (CMC Vellore / FRCOG)',
      recommendedTest: 'Women’s Advanced Hormonal & Wellness Profile',
      advice: 'Keep a record of your menstrual cycle dates and symptoms. Stay well hydrated and maintain consistent sleep patterns.'
    },
    {
      category: 'Cardiovascular & Vital Warning',
      symptoms: ['Chest Pain / Tightness radiating to Left Arm', 'Sudden Shortness of Breath', 'Palpitations & Extreme Dizziness'],
      recommendedSpecialty: 'Cardiology (Emergency Evaluation)',
      specialtyId: 'card',
      recommendedDoctor: 'Dr. Sandeep Banerjee (PGIMER Chandigarh)',
      recommendedTest: 'Lipid Profile Comprehensive, ECG & Troponin-I',
      advice: 'CRITICAL: If you experience crushing chest pain with breathlessness or sweating, seek emergency medical care at the nearest hospital immediately.'
    }
  ],

  // Vaccination Schedule Database (Birth, Infant & Adult Immunization)
  vaccines: {
    birth: [
      { name: "BCG", protection: "Tuberculosis", route: "Intradermal", mandatory: true },
      { name: "Hepatitis B (Birth Dose)", protection: "Hepatitis B viral infection", route: "Intramuscular", mandatory: true },
      { name: "Oral Polio Vaccine (OPV 0)", protection: "Polio Virus", route: "Oral drops", mandatory: true }
    ],
    "6weeks": [
      { name: "DTwP / DTaP 1", protection: "Diphtheria, Tetanus, Pertussis", route: "Intramuscular", mandatory: true },
      { name: "IPV 1", protection: "Inactivated Polio", route: "Intramuscular", mandatory: true },
      { name: "Hepatitis B 1", protection: "Hepatitis B", route: "Intramuscular", mandatory: true },
      { name: "Hib 1", protection: "Haemophilus influenzae type b", route: "Intramuscular", mandatory: true },
      { name: "Rotavirus 1", protection: "Severe childhood diarrhea", route: "Oral drops", mandatory: true },
      { name: "PCV 1", protection: "Pneumococcal pneumonia / meningitis", route: "Intramuscular", mandatory: true }
    ],
    "6months": [
      { name: "Influenza (Flu) Annual 1", protection: "Seasonal Influenza virus", route: "Intramuscular", mandatory: false },
      { name: "Typhoid Conjugate Vaccine", protection: "Typhoid Fever", route: "Intramuscular", mandatory: true }
    ],
    "9months": [
      { name: "MMR 1", protection: "Measles, Mumps, Rubella", route: "Subcutaneous", mandatory: true },
      { name: "Meningococcal (Optional)", protection: "Meningococcal meningitis", route: "Intramuscular", mandatory: false }
    ],
    "12-15months": [
      { name: "Varicella 1 (Chickenpox)", protection: "Varicella zoster virus", route: "Subcutaneous", mandatory: true },
      { name: "Hepatitis A 1", protection: "Hepatitis A viral liver infection", route: "Intramuscular", mandatory: true },
      { name: "MMR Booster 2", protection: "Measles, Mumps, Rubella", route: "Subcutaneous", mandatory: true }
    ],
    adult: [
      { name: "Annual Quadrivalent Flu", protection: "Current Influenza strains", route: "Annual single dose", mandatory: true },
      { name: "Td / Tdap Booster", protection: "Tetanus, Diphtheria, Pertussis", route: "Every 10 years", mandatory: true },
      { name: "HPV (Human Papillomavirus)", protection: "Cervical & anogenital cancers", route: "Up to age 45 (2 or 3 doses)", mandatory: true },
      { name: "Shingles (Zoster Vaccine)", protection: "Herpes Zoster nerve neuralgia", route: "Recommended for adults 50+", mandatory: true },
      { name: "Pneumococcal (Prevnar 20)", protection: "Bacterial pneumonia & sepsis", route: "Recommended for adults 65+ or chronic conditions", mandatory: true }
    ]
  },

  // Default User State - Seed data for the reactive store (localStorage fallback)
  defaultState: {
    selectedCity: 'bengaluru',
    user: {
      isLoggedIn: true,
      name: 'Arun Kumar',
      phone: '+91 98450 12345',
      email: 'arun.kumar@example.com',
      isGoldMember: false,
      goldPlan: null,
      corporateWalletBalance: 12500
    },
    cart: [
      {
        id: 'pkg-1',
        type: 'lab',
        name: 'Medroute Comprehensive Full Body Checkup (86 Tests)',
        price: 1399,
        goldPrice: 1099,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=300&q=80'
      }
    ],
    bookings: [
      {
        id: 'APT-10928',
        doctorId: 'doc-1',
        doctorName: 'Dr. Rajesh Sharma',
        specialty: 'Senior Consultant Physician',
        date: 'Today, 23 Sep 2026',
        time: '11:00 AM',
        type: 'Video Consultation',
        fee: 0,
        status: 'Confirmed',
        symptoms: 'Mild throat irritation and seasonal fever',
        link: '#'
      }
    ],
    orders: [
      {
        id: 'ORD-98210',
        items: ['Telma 40mg Tablet x 1', 'Becosules Z Capsule x 1'],
        total: 284,
        status: 'Out for Delivery',
        expected: 'Today by 2:00 PM',
        address: '42, 3rd Cross, Indiranagar, Bengaluru - 560038'
      }
    ],
    activeClaim: 'MED-78291',
    appliedCoupon: null
  }
};
