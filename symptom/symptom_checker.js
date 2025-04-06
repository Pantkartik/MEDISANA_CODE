// symptom_checker.js
const symptomsData = {
    head: ["Headache", "Dizziness", "Blurred Vision"],
    chest: ["Chest Pain", "Shortness of Breath", "Cough"],
    abdomen: ["Abdominal Pain", "Nausea", "Diarrhea"],
    arms: ["Arm Pain", "Numbness", "Weakness"],
    legs: ["Leg Pain", "Swelling", "Cramping"]
};

const conditionsData = {
    head: ["Migraine", "Sinusitis", "Concussion"],
    chest: ["Heart Attack", "Pneumonia", "Asthma"],
    abdomen: ["Appendicitis", "Food Poisoning", "Gastritis"],
    arms: ["Carpal Tunnel Syndrome", "Tendinitis", "Fracture"],
    legs: ["Deep Vein Thrombosis", "Sciatica", "Arthritis"]
};

function showDrugDataSection() {
    document.getElementById('symptomCheckerSection').style.display = 'none';
    document.getElementById('bodyPartsSection').style.display = 'none';
    document.getElementById('symptomsSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('findDoctorSection').style.display = 'none';
    document.getElementById('drugDataSection').style.display = 'block';
    document.getElementById('drugDataSection').scrollIntoView({ behavior: 'smooth' });
}

function showSymptomChecker() {
    document.getElementById('symptomCheckerSection').style.display = 'flex';
    document.getElementById('bodyPartsSection').style.display = 'none';
    document.getElementById('symptomsSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('findDoctorSection').style.display = 'none';
    document.getElementById('drugDataSection').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showFindDoctorSection() {
    document.getElementById('symptomCheckerSection').style.display = 'none';
    document.getElementById('bodyPartsSection').style.display = 'none';
    document.getElementById('symptomsSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('findDoctorSection').style.display = 'block';
    document.getElementById('drugDataSection').style.display = 'none';
    document.getElementById('findDoctorSection').scrollIntoView({ behavior: 'smooth' });
}

function showBodyParts() {
    document.getElementById('bodyPartsSection').style.display = 'block';
    document.getElementById('symptomsSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
}

function showSymptoms(bodyPart) {
    const symptomsList = document.getElementById('symptomsList');
    symptomsList.innerHTML = '';
    symptomsData[bodyPart].forEach(symptom => {
        const li = document.createElement('li');
        li.textContent = symptom;
        symptomsList.appendChild(li);
    });
    document.getElementById('selectedBodyPart').textContent = bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1);
    document.getElementById('bodyPartsSection').style.display = 'none';
    document.getElementById('symptomsSection').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
}

function checkSymptoms() {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';
    const selectedBodyPart = document.getElementById('selectedBodyPart').textContent.toLowerCase();
    conditionsData[selectedBodyPart].forEach(condition => {
        const li = document.createElement('li');
        li.textContent = condition;
        resultsList.appendChild(li);
    });
    document.getElementById('symptomsSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    generateChart(conditionsData[selectedBodyPart]);
}

function generateChart(conditions) {
    const ctx = document.getElementById('diseaseChart').getContext('2d');
    const conditionCounts = conditions.reduce((acc, condition) => {
        acc[condition] = (acc[condition] || 0) + 1;
        return acc;
    }, {});

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(conditionCounts),
            datasets: [{
                label: 'Number of Occurrences',
                data: Object.values(conditionCounts),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const doctorsData = {
    delhi: {
        cities: ["NEW DELHI", "SOUTH DELHI", "PAHADGANJ", "KAROL BAGH", "ASHRAM"],
        doctors: {
            "NEW DELHI": [
                { name: "Dr. Ajan Trikha", designation: "ANAESTHESIALOGIST", experience: "41 years", location: "AIIMS DELHI", rating: "4.9", contact: "000-313-3389", imgSrc: "ANJAN.webp" },
                { name: "DR . Peyush Sahni", designation: "GASTROINTESTINAL", experience: "40 years", location: "AIIMS DELHI", rating: "4.7", contact: "987-654-3210", imgSrc: "PEYUSH.webp" },
                { name: "Dr. DEEPAK K GUPTA ", designation: "NEUROLOGIST", experience: "30 years", location: "AIIMS DELHI", rating: "4.8", contact: "555-123-4567", imgSrc: "GUPTA.webp" },
                { name: "Dr. S.B AGARWAL", designation: "INTERNAL MEDICINE ", experience: "55 years", location: "AIIMS DELHI", rating: "5", contact: "0111-992-633", imgSrc: "SB.webp" },
                { name: "Dr. VINAY KUMAR BAHL", designation: "CARDIOTHORACIC AND VASCULAR", experience: "40 years", location: "AIIMS DELHI", rating: "4.6", contact: "444-555-6666", imgSrc: "vinay.webp" }
            ],
            "SOUTH DELHI": [
                { name: "Dr. CHETAN K GUPTA", designation: "GENERAL PHYSICIAN", experience: "26 years", location: "CRONUS SUPERSPECIALITY", rating: "4.5", contact: "01141169976", imgSrc: "chetan.webp" },
                { name: "Dr.  MADHUJEET GUPTA", designation: "SPINE AND LUMBAR", experience: "23 years", location: "FORTIS CDOC", rating: "4.7", contact: "01141169947", imgSrc: "madhu.webp" },
                { name: "Dr. SANDEEP SINGH", designation: "SPINE SURGEON", experience: "29 years", location: "CRONUS SUPERPECIALITY", rating: "4.9", contact: "01141169976", imgSrc: "sandeep.webp" },
                { name: "Dr. LALIT MOHAN PRASHAR", designation: "ENT SPECIALIST", experience: "45 years", location: "APOLLO SPECTRA", rating: "4.8", contact: "01141168690", imgSrc: "lalit.webp" },
                { name: "Dr. KAPIL KOCHHAR", designation: "LAPROSCOPIC SURGEON", experience: "31 years", location: "Gurugram", rating: "4.5", contact: "01141170243", imgSrc: "KAPIL.webp" }
            ],
            "PAHADGANJ": [
                { name: "Dr. VIPIN KUMAR", designation: "SEXOLOGIST", experience: "42 years", location: "HAKIM KISHAN DAWAKHANA", rating: "4.2", contact: "01141169533", imgSrc: "vipin.webp" },
                { name: "Dr. BAJINDRA SINGH", designation: "ORTHOPEDIST", experience: "32 years", location: "AMRIT CLINIC", rating: "4.7", contact: "01140036731", imgSrc: "baj.webp" },
                { name: "Dr. RICHA SINGH", designation: "NEUROSURGEON", experience: "24 years", location: "AMRIT CLINIC", rating: "4.6", contact: "01140036731", imgSrc: "RICHA.webp" },
                { name: "Dr. SHRISHTI DHUPAR", designation: "PSYCHOLOGY", experience: "8 years", location: "SAMSTHITI", rating: "4.8", contact: "01140848823", imgSrc: "shristi.webp" },
                { name: "Dr. BHAWUK DHIR ", designation: "DERMATOLOGY", experience: "10 years", location: "DERMADEX CLINIC", rating: "4.5", contact: "01140844818", imgSrc: "BHAWUK.webp" }
            ],
            "KAROL BAGH": [
                { name: "Dr. MALVIKA SABHARWAL", designation: "GYNECOLOGIST/OBST", experience: "44 years", location: "KAROL BAGH", rating: "4.5", contact: "01141169739", imgSrc: "MALVIKA.webp" },
                { name: "Dr. RAMAN SHARMA ", designation: "GENERAL SURGEON", experience: "33 years", location: "PUSA ROAD", rating: "4.6", contact: "987-654-3210", imgSrc: "RAMAN.webp" },
                { name: "Dr. divakar singh", designation: "SEXOLOGIST", experience: "31 years", location: "SRI RAM HOSPITAL", rating: "4.6", contact: "01140036706", imgSrc: "divakar.webp" },
                { name: "Dr. alka dahiya", designation: "ONCOLOGIST", experience: "11 years", location: "MAHESHWARI HOSPITAL", rating: "4.8", contact: "01140848823", imgSrc: "alka.webp" },
                { name: "Dr. jushya bhatiya", designation: "DERMATOLOGIST", experience: "11 years", location: "KANYA HOSPITAL", rating: "4.8", contact: "08045687903", imgSrc: "jushya.webp" }
            ],
            "ASHRAM": [
                { name: "Dr. ADITYA SHARDA", designation: "GENERAL PHYSICIAN", experience: "49 years", location: "PARK HOSPITAL", rating: "4.5", contact: "01140848838", imgSrc: "ADITYA.webp" },
                { name: "Dr. ASHOK RAJPUT", designation: "GENERAL PHYSICS", experience: "48 years", location: "Ghaziabad", rating: "4.7", contact: "01141168499", imgSrc: "ashok.webp" },
                { name: "Dr. SUBODH GUPTA", designation: "DIABETOLOGY", experience: "28 years", location: "MEDICAL HEART CLINIC", rating: "4.6", contact: "01141193981", imgSrc: "subodh.webp" },
                { name: "Dr. VS ISSER", designation: "GENERAL PHYSICIAN", experience: "41 years", location: "ISSER MEDICAL CENTRE", rating: "4.8", contact: "01142213880", imgSrc: "vs.webp" },
                { name: "Dr. RN SAINI", designation: "GENERAL PHYSICIAN", experience: "50 years", location: "BLK MAX HOSPITAL", rating: "4.5", contact: "01141193965", imgSrc: "RN.webp" }
            ]
        }
    },
    haryana: {
        cities: ["Gurugram", "Faridabad", "Panchkula", "Ambala", "Yamunanagar"],
        doctors: {
            "Gurugram": [
                { name: "Dr. ASHISH KALLA", designation: "GENERAL PHYSICIAN", experience: "18 years", location: "MEDSOVIS HOSPITAL", rating: "4.9", contact: "01161263110", imgSrc: "ashish_k.webp" },
                { name: "Dr. SANJAY GUPTA", designation: "ONCOLOGIST", experience: "25 years", location: "ARTEMIS HOSPITAL ", rating: "4.7", contact: "07949108253", imgSrc: "sanjay.webp" },
                { name: "Dr. SONU BALHARA", designation: "INFERTILITY SPC.", experience: "31 years", location: "FORTIS SUPERSPECIALITY", rating: "4.6", contact: "07941058674", imgSrc: "SONU.webp" },
                { name: "Dr. MOHIT JINDAL", designation: "NEUROSURGEON", experience: "18 years", location: "PARK HOSPITAL", rating: "4.8", contact: "111-222-3333", imgSrc: "mohit.webp" },
                { name: "Dr. NARESH TRIHAN", designation: "CARDIOLOGIST", experience: "40 years", location: "MEDANTA HOSPITAL", rating: "4.9", contact: "+91-880-000-1068", imgSrc: "naresh.webp" }
            ],
            "Faridabad": [
                { name: "Dr. JAYANT THAKURIA ", designation: "INTERNAL MEDICINE", experience: "26 years", location: "YATHARTH SUPERSPECIALITY", rating: "4.5", contact: "01140846528", imgSrc: "jayant.webp" },
                { name: "Dr. RAJESH SINHA", designation: "GENERAL PHYSICIAN", experience: "23 years", location: "BATRA HOSPITAL", rating: "4.7", contact: "01141170259", imgSrc: "RAJESH.webp" },
                { name: "Dr. TANUJ BHATIYA", designation: "UROLOGIST", experience: "19 years", location: "ILSS HOSPITAL", rating: "4.6", contact: "07941056822", imgSrc: "tanuj.webp" },
                { name: "Dr. GURMEET SINGH", designation: "PULMONOGIST", experience: "29 years", location: "YATHARTH SUPERSPECIALITY", rating: "4.8", contact: "07949121036", imgSrc: "gurmeet.webp" },
                { name: "Dr. VIBHORE AWASTHY", designation: "DIABETOLOGIST", experience: "28 years", location: "ABHINAY MEDICAL CENTRE", rating: "4.5", contact: "01141168765", imgSrc: "vibhore.webp" }
            ],
            "Panchkula": [
                { name: "Dr. RAVINA VASHISHTH", designation: "GENERAL PHYSICIAN", experience: "11 years", location: "VASHISTH HOSPITAL", rating: "4.5", contact: "01142213879", imgSrc: "VASHIST.webp" },
                { name: "Dr. SUDHA GUPTA", designation: "DENTIST", experience: "13 years", location: "TOOTH CARE", rating: "4.7", contact: "08037296355", imgSrc: "sudha.webp" },
                { name: "Dr. RAJINDER KUMAR", designation: "PSYCHIATRIST", experience: "19 years", location: "OSHO CLINIC", rating: "4.6", contact: "01141169534", imgSrc: "RAJINDER.webp" },
                { name: "Dr. ASHISH AGARWAL", designation: "PEDIATRICIAN", experience: "12 years", location: "CLOUDNINE HOSPITAL", rating: "4.8", contact: "01141193969", imgSrc: "ASHISH1.webp" },
                { name: "Dr. ANADEEP CHANDI", designation: "GYNECOLOGIST/OBST.", experience: "14 years", location: "CLOUDNINE HOSPITAL", rating: "4.5", contact: "01142213847", imgSrc: "na.webp" }
            ],
            "Ambala": [
                { name: "Dr. ASHOK RANA", designation: "Psychiatristt", experience: "8 years", location: "MARKANDAY CLINIC", rating: "4.5", contact: "01141188491", imgSrc: "PRAVEEN.webp" },
                { name: "Dr. CHARU SHARMA", designation: "GENERAL PHYSICIAN", experience: "32 years", location: "SRIJAN MATERNITY", rating: "4.7", contact: "01140036748", imgSrc: "CHARU.webp" },
                { name: "Dr. DAKSH KHURANA", designation: "GASTROENTEROLOGIST", experience: "17 years", location: "SAKET HOSPITAL", rating: "4.6", contact: "01140036748", imgSrc: "DAKSH.webp" },
                { name: "Dr. VANDANA GOEL", designation: "PHYSIOTHERAPIST", experience: "35 years", location: "AMBALA HOSPITAL", rating: "4.8", contact: "01140036748", imgSrc: "VANDANA.webp" },
                { name: "Dr. PIYUSH VERMA", designation: "DENTIST", experience: "15 years", location: "DENTA CARE", rating: "4.5", contact: "01140036748", imgSrc: "piyush.webp" }
            ],
            "Yamunanagar": [
                { name: "Dr. Anil Verma", designation: "CARDIOLOGIST", experience: "15 years", location: "KURBAN HOSPITAL", rating: "4.5", contact: "01140036748", imgSrc: "ashok11.webp" },
                { name: "Dr. VINEET BANSAL", designation: "DENTIST", experience: "10 years", location: "BANSAL DENTIX", rating: "4.7", contact: "987-654-3210", imgSrc: "vineet.webp" },
                { name: "Dr. ALOK KAPOOR", designation: "Orthopedic", experience: "12 years", location: "KAPOOR MATERNITY", rating: "4.6", contact: "01140036751", imgSrc: "ALOK.webp" },
                { name: "Dr. TANMAI", designation: "PHYSIOLOGIST", experience: "8 years", location: "INAYAT", rating: "4.8", contact: "01142213464", imgSrc: "TANMAI.webp" },
                { name: "Dr. PANKAJ VERMA", designation: "DENTIST", experience: "13 years", location: "DEVKI DENTAL CLINIC", rating: "4.5", contact: "01140036751", imgSrc: "pankaj.webp" }
            ]
        }
    },
    uttarakhand: {
        cities: ["DEHRADUN", "RISHIKESH", "HALDWANI", "RUDRAPUR", ""],
        doctors: {
            "DEHRADUN": [
                { name: "Dr. PUNISH SADANA", designation: "CARDIOLOGIST", experience: "12 years", location: "MAX SUPERSPECIALITY", rating: "4.8", contact: "9268880303", imgSrc: "punish.jpg" },
                { name: "Dr. GAURAV GUPTA", designation: "ORTHOPAEDIC", experience: "18 years", location: "MAX SUPERSPECIALITY", rating: "4.9", contact: "9268880303", imgSrc: "gaurav.jpg" },
                { name: "Dr. ASTHA AGARAWAL", designation: "PEDIATRICIAN", experience: "26 years", location: "MAX SUPERSPECIALITY", rating: "4.7", contact: "9268880303", imgSrc: "astha.jpg" },
                { name: "Dr. JYOTI MALIK ", designation: "DERMATOLOGIST", experience: "26 years", location: "KUTIZ SKIN CLINIC", rating: "4.6", contact: "01141188192", imgSrc: "jyoti.jpg" },
                { name: "Dr. LUNA PANT", designation: "GYNE/OBST", experience: "38 years", location: "MAX SUPERSPECIALITY", rating: "4.8", contact: "9268880303", imgSrc: "luna.jpg" }
            ],
            "RISHIKESH": [
                { name: "Dr. BHANU DUGGAL", designation: "CARDIOLOGIST", experience: "20 years", location: "AIIMS RISHIKESH", rating: "4.9", contact: "01352462940", imgSrc: "banu_rishikesh.jpg" },
                { name: "Dr.  RISHABH K CHAUHAN", designation: "DERMATOLOGIST", experience: "14 years", location: "Skin care clinic ", rating: "4.4", contact: "09105859782", imgSrc: "rishabh_rishikesh.jpg" },
                { name: "Dr. VIKAS VERMA ", designation: "ORTHOPEDIC", experience: "08 years", location: "  Bakhetia Hospital", rating: "4.6", contact: "08460204754", imgSrc: "vikas_rishikesh.jpg" },
                { name: "Dr. JAYA CHATURVEDI", designation: "GYNAECOLOGYIST", experience: "10 years", location: "AIIMS RISHIKESH", rating: "4.9", contact: "0000-000-3-122-4565", imgSrc: "JAYA.jpg" },
                { name: "Dr. NOWNEET BHATT", designation: "PEDIATRICIAN", experience: "20 years", location: "AIIMS RISHIKESH", rating: "4.8", contact: "0000-0002-6856-7797", imgSrc: "NAWNEET.jpg" }
            ],
            "HALDWANI": [
                { name: "Dr. PRAKASH PANT", designation: "Cardiologist", experience: "24 years", location: "Kapil Complex", rating: "4.0", contact: "084-604-584-86", imgSrc: "PRAKASHPANT.jpg" },
                { name: "Dr. Akshat Tamta", designation: "Dermatologist", experience: "09 years", location: "Mattrix Hospital", rating: "4.8", contact: "08904959387", imgSrc: "TAMTA.webp" },
                { name: "Dr. Jai Shree Tiwari", designation: "Gynaecologist", experience: "30 years", location: "Laldanth ", rating: "4.5", contact: "07060067823", imgSrc: "JAISHREE1.JPG" },
                { name: "Dr. Pradeep Pandey ", designation: "Orthopaedics", experience: "20 years", location: "Mattrix Hospital", rating: "4.8", contact: "05946317788", imgSrc: "PRADEEPPANDEY.jpg" },
                { name: "Dr. AJAY PANDEY ", designation: "Pediatrician", experience: "22 years", location: "NAWABI ROAD", rating: "4.5", contact: "8519846628", imgSrc: "ajay.jpg" }
            ],
            "RUDRAPUR": [
                { name: "Dr. MONISH MALHOTRA", designation: "ORTHOPAEDICS", experience: "5 years", location: "THE MEDICITY", rating: "4.0", contact: "7900771771", imgSrc: "monish.jpg" },
                { name: "Dr. ANJU CHABRA", designation: "GYNECOLOGIST", experience: "18 years", location: "THE MEDICITY", rating: "4.8", contact: "7900771771", imgSrc: "anju.jpg" },
                { name: "Dr. DEEPAK CHABRA ", designation: "PEDIATRICIAN", experience: "20 years", location: "THE MEDICITY", rating: "4.4", contact: "7900771771", imgSrc: "deepak.jpg" },
                { name: "Dr. ABHISHEK SAKHWARIYA", designation: "CARDIOLOGIST", experience: "5 years", location: "THE MEDICITY", rating: "4.5", contact: "7900771771", imgSrc: "abhi.jpg" },
                { name: "Dr. GUNJAN VIRMANI",designation: "DERMATOLOGIT", experience: "5 years", location: "THE MEDICITY", rating: "4.2", contact: "7900771771", imgSrc: "gunjan.jpg" }
            ],
           
        }
    },
    punjab: {
        cities: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
        doctors: {
            "Chandigarh": [
                { name: "Dr. RAKHI GOYAL", designation: "CARDIOLOGIST", experience: "25 years", location: "BIRLA FERTILITY AND IVF", rating: "4.5", contact: "01140845379", imgSrc: "rakhi.jpg" },
                { name: "Dr. SURUCHI GARG", designation: "DERMATOLOGIST", experience: "15 years", location: "AURA SKIN INSTIUTE", rating: "4.7", contact: "01141169399", imgSrc: "suruchi.jpg" },
                { name: "Dr. SIDDHARTH AGGARWAL", designation: "ORTHOPEDIC", experience: "21 years", location: "GOLDEN CLINICS", rating: "4.6", contact: "01140844823", imgSrc: "sid.jpg" },
                { name: "Dr. VIKRAM BEDI", designation: "PEDIATRICIAN", experience: "13 years", location: "BEDI HOSPITALS", rating: "4.8", contact: "01140848830", imgSrc: "vikram.jpg" },
                { name: "Dr. TARANDEEP SINGH", designation: "CARDIOLOGIST", experience: "19 years", location: "APOLLO CLINIC", rating: "4.9", contact: "01140036748", imgSrc: "taran.jpg" }
            ],
            "Ludhiana": [
                { name: "Dr. SANDEEP CHOPRA", designation: "Cardiologist", experience: "15 years", location: "FORTIS HOSPITAL", rating: "4.5", contact: "08047111096", imgSrc: "sandeep.jpg" },
                { name: "Dr. N.K AGGRAWAL", designation: "Dermatologist", experience: "10 years", location: "NK AGGARWAL SPINE CENTRE", rating: "4.7", contact: "01161264691", imgSrc: "nk.jpg" },
                { name: "Dr. GURMEET KAUR", designation: "Orthopedic", experience: "12 years", location: "CLOUDNINE HOSPITAL", rating: "4.6", contact: "01161191358", imgSrc: "gurmeet.jpg" },
                { name: "Dr. RUCHI S MUTNEJA", designation: "Gynecologist", experience: "8 years", location: "SPARSH AESTHETICS", rating: "4.8", contact: "01142213464", imgSrc: "ruchi.jpg" },
                { name: "Dr. KANUPRIYA JAIN", designation: "GYNECOLOGIST", experience: "19 years", location: "CLOUDNINE HOSPITAL", rating: "4.5", contact: "01140848823", imgSrc: "kanupriya.jpg" }
            ],
            "Amritsar": [
                { name: "Dr. JYOTISTERNA MITTAL", designation: "DERMATOLOGIST", experience: "17 years", location: "APOLLO CRADLE", rating: "4.5", contact: "01141193968", imgSrc: "jyoti.jpg" },
                { name: "Dr. AMARJEET KAUR", designation: "GYNAECOLOGY", experience: "10 years", location: "PARISCHA MEDICARE", rating: "4.7", contact: "01141193968", imgSrc: "amarjeet.jpg" },
                { name: "Dr. NARESH GROVER", designation: "PEDIATRICIAN", experience: "38 years", location: "APOLLO CRADLE", rating: "4.6", contact: "01143078817", imgSrc: "naresh.jpg" },
                { name: "Dr. MOHIT ARORA", designation: "ORTHOPEDIC ", experience: "15 years", location: "FORTIS ESCORT HOSPITAL", rating: "4.8", contact: "08047111096", imgSrc: "mohit.jpg" },
                { name: "Dr. H.P SINGH", designation: "CARDIOLOGIST", experience: "29 years", location: "FORTIS ESCORT HOSPITAL", rating: "4.2", contact: "01161262035", imgSrc: "doctor5.jpg" }
            ],
            "Jalandhar": [
                { name: "Dr. NITISH GARG ", designation: "CARDIOLOGIST", experience: "24 years", location: "CARDIONOVA HOSPITAL", rating: "4.5", contact: "01161191421", imgSrc: "nitish.jpg" },
                { name: "Dr. PARAS KHULLAR", designation: "PEDIATRICS", experience: "20 years", location: "KHULLAR KIDS CARE CLINIC", rating: "4.7", contact: "01141169672", imgSrc: "paras.jpg" },
                { name: "Dr. SS DHINGRA", designation: "ORTHOPAEDICS", experience: "31 years", location: "DMC HOSPITAL AND TRAUMA CENTRE", rating: "4.6", contact:  " 01143078817", imgSrc: "ss.jpg" },
                { name: "Dr. NEETI CHABRA", designation: "ORTHOPAEDICS", experience: "18 years", location: "PAWAN HOSPITAL", rating: "4.8", contact: "01141169672", imgSrc: "neeti.jpg" },
                { name: "Dr. TARUNVEER SINGH KUMARI", designation: "GYNECOLOGIST", experience: "12 years", location: "DR.KUMAR THETICS", rating: "4.5", contact: "01161262035", imgSrc: "tarun.jpg" }
            ],
            "Patiala": [
                { name: "Dr. NAVDEEP KAUR", designation: "DERMATOLOGY CHEMA SOJIL FORMED", experience: "15 years", location: "MANIPAL HOSPITALS", rating: "4.5", contact: "175 5000 222", imgSrc: "navdeep.jpg" },
                { name: "Dr. SANDEEP CHEEMA SOHIL", designation: "GYNECOLOGY", experience: "18 years", location: "CHEEMA INTERNITY SAHIL", rating: "4.7", contact: "987-654-3210", imgSrc: "sandeep.jpg" },
                { name: "Dr. JEEWAN MITTAL", designation: "ORTHOPEDIC", experience: "12 years", location: "AMAR HOSPITAL", rating: "4.5", contact: "01140845776", imgSrc: "jeewan.jpg" },
                { name: "Dr. UPINDER SINGH", designation: "PEDIATICIAN", experience: "6 years", location: "PRIME MULTISPECIALITY ", rating: "4.4", contact: "01140845776", imgSrc: "upinder.jpg" },
                { name: "Dr. KARAN SHABAD SINGH", designation: "PEDIATICIAN", experience: "8 years", location: "RAIKHY POLYCLINIC AND HOSPITAL", rating: "4.8", contact: "111-222-3333", imgSrc: "karan.jpg" },
            ]
        }
    },
    uttarpradesh: {
        cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
        doctors: {
            "Lucknow": [
                { name: "Dr. SUNITA CHANDRA", designation: "GYNECOLOGIST", experience: "37 years", location: "KING GEORGE UNIV.", rating: "4.8", contact: "01141193967", imgSrc: "sunita.jpg" },
                { name: "Dr. DURGA PRASAD", designation: "PEDIATRICIAN", experience: "20 years", location: "MEDANTA HOSPITAL", rating: "4.6", contact: "+91 1244855017", imgSrc: "durga.jpg" },
                { name: "Dr. A.S PANDEY", designation: "ORTHOPAEDICS", experience: "23 years", location: "HEALTH TRAUMA CENTRE", rating: "4.0", contact: "01161266300", imgSrc: "as.jpg" },
                { name: "Dr. AMBUKESHWAR SINGH", designation: "CARDIOLOGIST", experience: "14 years", location: "MAX HOSPITAL", rating: "4.9", contact: "011408844821", imgSrc: "ambus.jpg" },
                { name: "Dr. RAJEEV AGARAWAL", designation: "DERMATOLOGIST", experience: "27 years", location: "AARYASH CLINIC", rating: "4.7", contact: "01140787362", imgSrc: "raj.jpg" }
            ],
            "Kanpur": [
                { name: "Dr. RPS BHARADWAJ", designation: "CARDIOLOGIST", experience: "56 years", location: "APOLLO HOSPITAL", rating: "4.9", contact: "01140849671", imgSrc: "rps.jpg" },
                { name: "Dr. SIKHA BHARGAV", designation: "GYNECOLOGIST", experience: "10 years", location: "APOLLO HOSPITAL", rating: "4.8", contact: "01140787362", imgSrc: "sikha.jpg" },
                { name: "Dr. SANJAI RASTOGI", designation: "ORTHOPAEDICS", experience: "47 years", location: "NIRAMAYA CLINIC", rating: "4.7", contact: "08037296912", imgSrc: "senjai.jpg" },
                { name: "Dr. VIVEK SAXENA", designation: "PEDIATRICIAN", experience: "27 years", location: "VATSALYA HOSPITAL", rating: "4.5", contact: "01141132968", imgSrc: "vivek.jpg" },
                { name: "Dr. PAWAN SINGH", designation: "DERMATOLOGIST", experience: "10 years", location: "GANGA SKIN CENTRE", rating: "4.0", contact: "01140844817", imgSrc: "pawan.jpg" }
            ],
            "Agra": [  
                { name: "Dr. RADHA SHARMA", designation: "DERMATOLOGIST", experience: "9 years", location: "MERAKI CLINIC", rating: "4.8", contact: "01142213847", imgSrc: "radha.jpg" },
                { name: "Dr. ANOOP KHARE", designation: "ORTHOPAEDICS", experience: "45 years", location: "UJJALA SIGNATURE", rating: "4.0", contact: "01161191399", imgSrc: "anup.jpg" },
                { name: "Dr. AMIT SAXENA", designation: "PEDIATRICIAN", experience: "22 years", location: "SAXENA CLINIC", rating: "4.7", contact: "01140849529", imgSrc: "amit.jpg" },
                { name: "Dr. VINESH JAIN", designation: "CARDIOLOGIST", experience: "14 years", location: "PUSHPANJALI HOSPITAL", rating: "4.0", contact: "01140849529", imgSrc: "vinesh.jpg" },
                { name: "Dr. NEERJA SACHDEVA", designation: "GYNECOLOGIST", experience: "22 years", location: "RAINBOW IVF", rating: "4.8", contact: "01161264525", imgSrc: "neerja.jpg" }
            ],
            "Varanasi": [
                { name: "Dr. SWAPNIL SINGH", designation: "GYNECOLOGIST", experience: "25 years", location: "SWAPNIL SINGH CLINIC", rating: "4.9", contact: "08037296915", imgSrc: "swapnil.jpg" },
                { name: "Dr. RAJESH KHANAA", designation: "PEDIATRICIAN", experience: "40 years", location: "SATYAM MEDICAL CENTRE", rating: "4.2", contact: "01161264863", imgSrc: "rajesh.jpg" },
                { name: "Dr. V.K PANDEY ", designation: "ORTHOPAEDICS", experience: "19 years", location: "KALYANI CLINIC", rating: "4.9", contact: "01141132968", imgSrc: "vs.webp" },
                { name: "Dr. MEDHA DONGRE ", designation: "DERMATOLOGIST", experience: "25 years", location: "PATVARDHAN CLINIC ", rating: "4.8", contact: "01141168766", imgSrc: "medha.jpg" },
                { name: "Dr. VIKAS AGARWAL", designation: "CARDIOLOGIST", experience: "19 years", location: "ANANDI CLINIC", rating: "4.8", contact: "0114084967", imgSrc: "vikas.jpg" }
            ],
            "Allahabad": [
                { name: "Dr. VINAY PANDEY", designation: "CARDIOLOGIST ", experience: "10 years", location: "ACE HEART CARE CENTRE", rating: "4.1", contact: "079471278658", imgSrc: "vinay.jpg" },
                { name: "Dr. KRITIKA BANSAL ", designation: "DERMATOLOGIST", experience: "6 years", location: "RAMA HOSPITAL", rating: "4.3", contact: "01141188192", imgSrc: "kritika.jpg" },
                { name: "Dr. G.K TIWARI", designation: "ORTHOPEDIC", experience: "37 years", location: "SANJEEVNI CLINIC", rating: "4.6", contact: "01140849585", imgSrc: "hp.jpg" },
                { name: "Dr. SAKHI RAJORIA BANSAL", designation: "PEDIATRICS", experience: "7 years", location: "LOWTHER ROAD", rating: "4.9", contact: "01141168495", imgSrc: "sakhi.jpg" },
                { name: "Dr. VANDAN BANSAL", designation: "GYNAECOLOGIST", experience: "39 years", location: "LOWTHER ROAD", rating: "4.8", contact: "01141193975", imgSrc: "VANDANA.jpg" }
            ]
        }
    }
};


// 
function showCities() {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const selectedState = stateSelect.value;

    citySelect.innerHTML = '<option value="">Select a city</option>';
    if (selectedState) {
        doctorsData[selectedState].cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
        document.getElementById('citySelector').style.display = 'block';
    } else {
        document.getElementById('citySelector').style.display = 'none';
    }
}

function showDoctors() {
    const citySelect = document.getElementById('city');
    const selectedCity = citySelect.value;
    const stateSelect = document.getElementById('state');
    const selectedState = stateSelect.value;
    const doctorList = document.getElementById('doctorList');

    doctorList.innerHTML = '';
    if (selectedCity && selectedState) {
        const doctors = doctorsData[selectedState].doctors[selectedCity];
        doctors.forEach(doctor => {
            const doctorCard = document.createElement('div');
            doctorCard.classList.add('doctor-card');
            doctorCard.innerHTML = `
                <img src="${doctor.imgSrc}" alt="${doctor.name}">
                <h3>${doctor.name}</h3>
                <p><strong>Designation:</strong> ${doctor.designation}</p>
                <p><strong>Experience:</strong> ${doctor.experience}</p>
                <p><strong>Location:</strong> ${doctor.location}</p>
                <p><strong>Rating:</strong> ${doctor.rating}</p>
                <p><strong>Contact:</strong> ${doctor.contact}</p>
                <button onclick="bookAppointment('${doctor.name}')">Book Appointment</button>
            `;
            doctorList.appendChild(doctorCard);
        });
    }
}

function bookAppointment(doctorName) {
    alert(`Appointment booked with ${doctorName}`);
}

// Call the function to populate the doctor list when the page loads
window.onload = function() {
    document.getElementById('state').addEventListener('change', showCities);
    document.getElementById('city').addEventListener('change', showDoctors);
};

document.getElementById('fetchDataBtn').addEventListener('click', fetchDrugData);

async function fetchDrugData() {
    const apiUrl = 'https://api.fda.gov/drug/event.json?limit=1000';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Log the data to inspect its structure
        organizeAndDisplayDrugData(data.results);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

function organizeAndDisplayDrugData(drugs) {
    const tableBody = document.querySelector('#drugTable tbody');
    tableBody.innerHTML = '';

    const alphabetNav = document.getElementById('alphabet-nav');
    alphabetNav.innerHTML = '';

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const organizedDrugs = {};

    alphabet.forEach(letter => {
        organizedDrugs[letter] = [];
        const alphabetBtn = document.createElement('button');
        alphabetBtn.innerText = letter;
        alphabetBtn.addEventListener('click', () => filterDrugsByLetter(letter));
        alphabetNav.appendChild(alphabetBtn);
    });

    drugs.forEach(drug => {
        const drugName = drug.patient?.drug?.[0]?.medicinalproduct || 'N/A';
        const firstLetter = drugName.charAt(0).toUpperCase();
        if (alphabet.includes(firstLetter)) {
            organizedDrugs[firstLetter].push(drug);
        }
    });

    displayDrugData(organizedDrugs['A']);

    function filterDrugsByLetter(letter) {
        tableBody.innerHTML = '';
        displayDrugData(organizedDrugs[letter]);
    }
}

function displayDrugData(drugs) {
    const tableBody = document.querySelector('#drugTable tbody');
    tableBody.innerHTML = '';

    drugs.forEach(drug => {
        const row = document.createElement('tr');

        const drugName = drug.patient?.drug?.[0]?.medicinalproduct || 'N/A';
        const manufacturer = drug.companynumb || 'N/A';
        const substance = drug.patient?.drug?.[0]?.activesubstance?.[0]?.activesubstancename || 'N/A';
        const adverseEvents = drug.patient?.reaction?.[0]?.reactionmeddrapt || 'N/A';
        const reportDate = drug.receivedate || 'N/A';

        row.innerHTML = `
            <td>${drugName}</td>
            <td>${manufacturer}</td>
            <td>${substance}</td>
            <td>${adverseEvents}</td>
            <td>${reportDate}</td>
            <td><button class="details-btn" onclick="showDetails('${JSON.stringify(drug)}')">Details</button></td>
        `;

        tableBody.appendChild(row);
    });
}

function showDetails(drug) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => modal.remove();

    const drugDetails = JSON.parse(drug);
    const detailsHtml = `
        <h2>${drugDetails.patient?.drug?.[0]?.medicinalproduct || 'N/A'}</h2>
        <p><strong>Manufacturer:</strong> ${drugDetails.companynumb || 'N/A'}</p>
        <p><strong>Substance:</strong> ${drugDetails.patient?.drug?.[0]?.activesubstance?.[0]?.activesubstancename || 'N/A'}</p>
        <p><strong>Adverse Events:</strong> ${drugDetails.patient?.reaction?.[0]?.reactionmeddrapt || 'N/A'}</p>
        <p><strong>Report Date:</strong> ${drugDetails.receivedate || 'N/A'}</p>
        <p><strong>Details:</strong> ${drugDetails.patient?.reaction?.[0]?.reactionoutcome || 'N/A'}</p>
    `;

    modalContent.innerHTML = detailsHtml;
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.style.display = 'block';
}
// icons
document.getElementById('notificationIcon').addEventListener('click', function() {
    alert('Notification icon clicked!');
});

document.getElementById('settingsIcon').addEventListener('click', function() {
    alert('Settings icon clicked!');
});

document.getElementById('logoutIcon').addEventListener('click', function() {
    // Show the logout animation
    document.getElementById('logoutAnimation').style.display = 'flex';

    // Redirect to login.html after a short delay
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 1000); // 1 second delay
});

document.getElementById('userProfile').addEventListener('click', function() {
    alert('User profile clicked!');
});
// 
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    if (window.scrollY > 100) { // Show footer after scrolling down 100px
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });
//   
let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.classList.add('hidden');
      header.classList.remove('visible');
    } else {
      // Scrolling up
      header.classList.add('visible');
      header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  }, false);
//   
const pharmacyData = {
    delhi: {
        cities: ["NEW DELHI", "SOUTH DELHI", "PAHADGANJ", "KAROL BAGH", "ASHRAM"],
        pharmacies: {
            "NEW DELHI": [
                { name: "MedPlus", location: "Connaught Place", contact: "011-23456789", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "Apollo Pharmacy", location: "Janpath", contact: "011-98765432", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "HealthPlus", location: "Connaught Place", contact: "011-34567890", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "Connaught Place", contact: "011-87654321", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
            ],
            "SOUTH DELHI": [
                { name: "HealthPlus", location: "Saket", contact: "011-34567890", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "Hauz Khas", contact: "011-87654321", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "Wellness Pharmacy", location: "Greater Kailash", contact: "011-45678901", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Green Park", contact: "011-56789012", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
            ],
            "PAHADGANJ": [
                { name: "Wellness Pharmacy", location: "Pahadganj Market", contact: "011-45678901", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Karol Bagh Road", contact: "011-56789012", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "CarePlus", location: "Pahadganj Market", contact: "011-67890123", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },    
                { name: "PharmaEasy", location: "Pahadganj Market", contact: "011-78901234", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
            ],
            "KAROL BAGH": [
                { name: "CarePlus", location: "Karol Bagh Market", contact: "011-67890123", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Ajmal Khan Road", contact: "011-78901234", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "MediPlus", location: "Ajmal Khan Road", contact: "011-89012345", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "Ajmal Khan Road", contact: "011-90123456", imgSrc: "safecare.jpg", rating: "4.7", service: "Home Delivery" },
            ],
            "ASHRAM": [
                { name: "MediPlus", location: "Ashram Chowk", contact: "011-89012345", imgSrc: "medplus.jpg", rating: "4.7", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "Ashram Road", contact: "011-90123456", imgSrc: "safecare.jpg", rating: "4.9", service: "Home Delivery" },
                { name: "Apollo Pharmacy", location: "Ashram Metro Station", contact: "011-23456789", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "MedPlus", location: "Ashram Chowk", contact: "011-89012345", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
            ]
        }
    },
    haryana: {
        cities: ["GURUGRAM", "FARIDABAD", "PANCHKULA", "AMBALA", "YAMUNANAGAR"],
        pharmacies: {
            "GURUGRAM": [
                { name: "MedPlus", location: "MG Road", contact: "0124-2345678", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "Apollo Pharmacy", location: "Sector 14", contact: "0124-9876543", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "HealthPlus", location: "Sector 15", contact: "0124-3456789", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
               { name: "Guardian Pharmacy", location: "Sector 16", contact: "0124-8765432", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
                
            ],
            "FARIDABAD": [
                { name: "HealthPlus", location: "Sector 16", contact: "0129-3456789", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "NIT Faridabad", contact: "0129-8765432", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "Wellness Pharmacy", location: "Sector 21", contact: "0129-4567890", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Sector 15", contact: "0129-5678901", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
            ],
            "PANCHKULA": [
                { name: "Wellness Pharmacy", location: "Sector 5", contact: "0172-4567890", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Sector 7", contact: "0172-5678901", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "CarePlus", location: "Sector 10", contact: "0172-6789012", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Sector 11", contact: "0172-7890123", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
            ],
            "AMBALA": [
                { name: "CarePlus", location: "Ambala City", contact: "0171-6789012", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Ambala Cantt", contact: "0171-7890123", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
            {   name: "MediPlus", location: "Ambala City", contact: "0171-8901234", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },    
            { name: "SafeCare Pharmacy", location: "Ambala Cantt", contact: "0171-9012345", imgSrc: "safecare.jpg", rating: "4.7", service: "Home Delivery" },
            ],
            "YAMUNANAGAR": [
                { name: "MediPlus", location: "Jagadhri Road", contact: "01732-890123", imgSrc: "medplus.jpg", rating: "4.7", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "Model Town", contact: "01732-901234", imgSrc: "safecare.jpg", rating: "4.9", service: "Home Delivery" },
                { name: "MedPlus", location: "Yamunanagar City", contact: "01732-234567", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "Apollo Pharmacy", location: "Yamunanagar Cantt", contact: "01732-987654", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
            ]
        }
    },
    uttarakhand: {
        cities: ["DEHRADUN", "RISHIKESH", "HARIDWAR", "HALDWANI", "RUDRAPUR"],
        pharmacies: {
            "DEHRADUN": [
                { name: "MedPlus", location: "Rajpur Road", contact: "0135-2345678", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "Apollo Pharmacy", location: "Clock Tower", contact: "0135-9876543", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "HealthPlus", location: "Dharampur", contact: "0135-3456789", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "Rajendra Nagar", contact: "0135-8765432", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
            ],
            "RISHIKESH": [
                { name: "HealthPlus", location: "Laxman Jhula", contact: "0135-3456789", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "Tapovan", contact: "0135-8765432", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "Wellness Pharmacy", location: "Rishikesh City", contact: "0135-4567890", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Rishikesh Cantt", contact: "0135-5678901", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
            ],
            "HARIDWAR": [
                { name: "Wellness Pharmacy", location: "Har Ki Pauri", contact: "01334-456789", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Moti Bazar", contact: "01334-567890", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "CarePlus", location: "Haridwar City", contact: "01334-678901", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Haridwar Cantt", contact: "01334-789012", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
            ],
            "HALDWANI": [
                { name: "CarePlus", location: "Ranibagh", contact: "05946-678901", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Kathgodam Road", contact: "05946-789012", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "MediPlus", location: "Haldwani City", contact: "05946-890123", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "Haldwani Cantt", contact: "05946-901234", imgSrc: "safecare.jpg", rating: "4.7", service: "Home Delivery" },
            ],
            "RUDRAPUR": [
                { name: "MediPlus", location: "Nainital Road", contact: "05944-890123", imgSrc: "medplus.jpg", rating: "4.7", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "Pantnagar", contact: "05944-901234", imgSrc: "safecare.jpg", rating: "4.9", service: "Home Delivery" },
                {   name: "MedPlus", location: "Rudrapur City", contact: "05944-234567", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },   
                {   name: "Apollo Pharmacy", location: "Rudrapur Cantt", contact: "05944-987654", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
            ]
        }
    },
    punjab: {
        cities: ["CHANDIGARH", "LUDHIANA", "AMRITSAR", "JALANDHAR", "PATIALA"],
        pharmacies: {
            "CHANDIGARH": [
                { name: "MedPlus", location: "Sector 17", contact: "0172-2345678", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "Apollo Pharmacy", location: "Sector 22", contact: "0172-9876543", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
                {      name: "HealthPlus", location: "Sector 35", contact: "0172-3456789", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "Sector 14", contact: "0172-8765432", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
            ],
            "LUDHIANA": [
                { name: "HealthPlus", location: "Model Town", contact: "0161-3456789", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "Ferozepur Road", contact: "0161-8765432", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "Wellness Pharmacy", location: "BRS Nagar", contact: "0161-4567890", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Pakhowal Road", contact: "0161-5678901", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
            ],
            "AMRITSAR": [
                { name: "Wellness Pharmacy", location: "Golden Temple Road", contact: "0183-4567890", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Lawrence Road", contact: "0183-5678901", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "CarePlus", location: "Katra Jaimal Singh", contact: "0183-6789012", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Shahzada Bagh", contact: "0183-7890123", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
            ],
            "JALANDHAR": [
                { name: "CarePlus", location: "Model Town", contact: "0181-6789012", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Lajpat Nagar", contact: "0181-7890123", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "MediPlus", location: "Civil Lines", contact: "0181-8901234", imgSrc: "medplus.jpg", rating: "4.7", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "Jalandhar Cantt", contact: "0181-9012345", imgSrc: "safecare.jpg", rating: "4.9", service: "Home Delivery" },
            ],
            "PATIALA": [
                { name: "MediPlus", location: "Adalat Bazar", contact: "0175-8901234", imgSrc: "medplus.jpg", rating: "4.7", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "Leela Bhawan", contact: "0175-9012345", imgSrc: "safecare.jpg", rating: "4.9", service: "Home Delivery" },
                { name: "MedPlus", location: "Rajpura Road", contact: "0175-2345678", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "Apollo Pharmacy", location: "Mall Road", contact: "0175-9876543", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
            ]
        }
    },
    uttarpradesh: {
        cities: ["LUCKNOW", "KANPUR", "AGRA", "VARANASI", "ALLAHABAD"],
        pharmacies: {
            "LUCKNOW": [
                { name: "MedPlus", location: "Hazratganj", contact: "0522-2345678", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "Apollo Pharmacy", location: "Gomti Nagar", contact: "0522-9876543", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "HealthPlus", location: "Alambagh", contact: "0522-3456789", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "Indira Nagar", contact: "0522-8765432", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
            ],
            "KANPUR": [
                { name: "HealthPlus", location: "Mall Road", contact: "0512-3456789", imgSrc: "healthplus.jpg", rating: "4.6", service: "24/7" },
                { name: "Guardian Pharmacy", location: "Civil Lines", contact: "0512-8765432", imgSrc: "guardian.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "Wellness Pharmacy", location: "Nehru Nagar", contact: "0512-4567890", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Kalyanpur", contact: "0512-5678901", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
            ],
            "AGRA": [
                { name: "Wellness Pharmacy", location: "Taj Mahal Road", contact: "0562-4567890", imgSrc: "wellness.jpg", rating: "4.5", service: "24/7" },
                { name: "LifeCare Pharmacy", location: "Sadar Bazar", contact: "0562-5678901", imgSrc: "lifecare.jpg", rating: "4.7", service: "Home Delivery" },
                { name: "CarePlus", location: "MG Road", contact: "0562-6789012", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Bodla", contact: "0562-7890123", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },

            ],
            "VARANASI": [
                { name: "CarePlus", location: "Dashashwamedh Ghat", contact: "0542-6789012", imgSrc: "careplus.jpg", rating: "4.6", service: "24/7" },
                { name: "PharmaEasy", location: "Godowlia", contact: "0542-7890123", imgSrc: "pharmaeasy.jpg", rating: "4.8", service: "Home Delivery" },
                { name: "MediPlus", location: "Rathyatra", contact: "0542-8901234", imgSrc: "medplus.jpg", rating: "4.7", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "Lahartara", contact: "0542-9012345", imgSrc: "safecare.jpg", rating: "4.9", service: "Home Delivery" },

            ],
            "ALLAHABAD": [
                { name: "MediPlus", location: "Civil Lines", contact: "0532-8901234", imgSrc: "medplus.jpg", rating: "4.7", service: "24/7" },
                { name: "SafeCare Pharmacy", location: "George Town", contact: "0532-9012345", imgSrc: "safecare.jpg", rating: "4.9", service: "Home Delivery" },
                { name: "MedPlus", location: "Katra", contact: "0532-2345678", imgSrc: "medplus.jpg", rating: "4.5", service: "24/7" },
                { name: "Apollo Pharmacy", location: "Mahatma Gandhi Marg", contact: "0532-9876543", imgSrc: "apollo.jpg", rating: "4.7", service: "Home Delivery" },

            ]
        }
    }
};

function showPharmacyCities() {
    const stateSelect = document.getElementById('pharmacyState');
    const citySelect = document.getElementById('pharmacyCity');
    const selectedState = stateSelect.value;

    citySelect.innerHTML = '<option value="">Select a city</option>';
    if (selectedState) {
        pharmacyData[selectedState].cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
        document.getElementById('pharmacyCitySelector').style.display = 'block';
    } else {
        document.getElementById('pharmacyCitySelector').style.display = 'none';
    }
}

function showPharmacies() {
    const citySelect = document.getElementById('pharmacyCity');
    const selectedCity = citySelect.value;
    const stateSelect = document.getElementById('pharmacyState');
    const selectedState = stateSelect.value;
    const pharmacyList = document.getElementById('pharmacyList');

    pharmacyList.innerHTML = '';
    if (selectedCity && selectedState) {
        const pharmacies = pharmacyData[selectedState].pharmacies[selectedCity];
        pharmacies.forEach(pharmacy => {
            const pharmacyCard = document.createElement('div');
            pharmacyCard.classList.add('pharmacy-card');
            pharmacyCard.innerHTML = `
                <img src="${pharmacy.imgSrc}" alt="${pharmacy.name}">
                <h3>${pharmacy.name}</h3>
                <p><strong>Location:</strong> ${pharmacy.location}</p>
                <p><strong>Contact:</strong> ${pharmacy.contact}</p>
                <p><strong>Rating:</strong> ${pharmacy.rating}</p>
                <p><strong>Service:</strong> ${pharmacy.service}</p>
                <a href="https://maps.google.com/?q=${encodeURIComponent(pharmacy.location)}" class="map-link" target="_blank">Get Directions</a>
            `;
            pharmacyList.appendChild(pharmacyCard);
        });
    }
}

function bookAppointment(pharmacyName) {
    alert(`Appointment booked with ${pharmacyName}`);
}

// Call the function to populate the pharmacy list when the page loads
window.onload = function() {
    document.getElementById('pharmacyState').addEventListener('change', showPharmacyCities);
    document.getElementById('pharmacyCity').addEventListener('change', showPharmacies);
};

function showFindPharmacySection() {
    document.getElementById('symptomCheckerSection').style.display = 'none';
    document.getElementById('bodyPartsSection').style.display = 'none';
    document.getElementById('symptomsSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('findDoctorSection').style.display = 'none';
    document.getElementById('drugDataSection').style.display = 'none';
    document.getElementById('pharmacySection').style.display = 'block';
    document.getElementById('pharmacySection').scrollIntoView({ behavior: 'smooth' });
}
// 
function showSection(sectionId) {
    // Hide all sections
    document.getElementById('symptomCheckerSection').style.display = 'none';
    document.getElementById('bodyPartsSection').style.display = 'none';
    document.getElementById('symptomsSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('findDoctorSection').style.display = 'none';
    document.getElementById('drugDataSection').style.display = 'none';
    document.getElementById('pharmacySection').style.display = 'none';

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
// 
document.getElementById('notificationIcon').addEventListener('click', function() {
    const notifications = [
        { message: "Reminder: Take your morning pill." },
        { message: "Appointment with Dr. Smith at 2 PM." },
        { message: "Refill your prescription for MedPlus." }
    ];

    const randomNotifications = notifications.sort(() => Math.random() - 0.5).slice(0, 3);

    randomNotifications.forEach(notification => {
        alert(notification.message);
    });
});

document.getElementById('settingsIcon').addEventListener('click', function() {
    const settingsContent = `
        <h2>Settings</h2>
        <p>Privacy Policy: Your data is secure with us. We do not share your information with third parties.</p>
        <p>Data Security: All data is encrypted and stored securely on our servers.</p>
        <p>Terms of Service: By using our services, you agree to our terms and conditions.</p>
    `;

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = settingsContent;

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => modal.remove();

    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.style.display = 'block';
});

document.getElementById('logoutIcon').addEventListener('click', function() {
    document.getElementById('logoutAnimation').style.display = 'flex';

    setTimeout(function() {
        window.location.href = 'login.html';
    }, 1000); // 1 second delay
});

document.getElementById('userProfile').addEventListener('click', function() {
    alert('User profile clicked!');
});

window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    if (window.scrollY > 100) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
