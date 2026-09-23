# Medroute - Complete Digital Healthcare Super-App

**Medroute** is a production-grade healthcare platform built as an alternative to **MediBuddy** (`https://www.medibuddy.in/`), India's largest digital health network.

---

## 🌟 Core Features & Specifications (Matching MediBuddy)

1. **Doctor Consultations (`consult.html`)**:
   - 18+ specialties (General Physician, Gynecology, Dermatology, Pediatrics, Cardiology, Orthopedics, Gastroenterology, Psychiatry, etc.).
   - Verified credentials from premier institutes (AIIMS, CMC Vellore, KMC Manipal) with National Medical Commission (NMC/MCI) registration badges.
   - Instant 10-minute video call simulation and slot scheduling.
   - Free consultation fees (₹0) for Medroute Gold members.

2. **Diagnostic Lab Tests & Health Packages (`lab-tests.html`)**:
   - NABL-accredited diagnostic partner network (Thyrocare, Metropolis, Dr. Lal PathLabs).
   - Packages: Comprehensive Full Body Checkup (86 parameters), Diabetic Care 360, Women’s Hormonal Wellness, Senior Citizen Vital Screen.
   - Interactive modal showing all individual test biomarkers, preparation rules (fasting), and specimen types.
   - Free home sample collection by certified phlebotomists.

3. **Online Pharmacy & Medicines (`pharmacy.html`)**:
   - 100% authentic branded and generic medicines across Chronic Care (BP, Diabetes, Thyroid, Cardiac), Antibiotics, Pain relief, and Vitamins.
   - Prescription Upload Dropzone with automated verification feedback.
   - Category filtering, generic salt alternatives, strip sizes, and flat 20% discounts.

4. **Surgery Care & Care Buddy (`surgeries.html`)**:
   - 50+ common elective & day-care procedures (Cataract, Gallbladder stones, Hernia, Total Knee Replacement, Piles, Kidney Stones, LASIK).
   - Dedicated **Medroute Care Buddy** personal concierge assisting with surgeon selection, insurance pre-auth, and bedside discharge.
   - Real-time **Zero-Cost EMI Calculator** (3 to 12 months slider).
   - Free Second Opinion request modal.

5. **Medroute Gold Membership (`gold.html`)**:
   - MediBuddy Gold equivalent health pass.
   - Unlimited 24/7 video consults for up to 6 family members.
   - Free follow-ups, flat 20% off medicines, and ₹0 home collection fees.
   - Membership tiers: 3 Months (₹499), 1 Year Family Care (₹999), 1 Year Platinum (₹1,799 with free full body checkup).
   - 1-Click activation that applies ₹0 fees site-wide.

6. **Insurance & Corporate TPA Hub (`insurance.html`)**:
   - **Cashless Network Hospitals Locator**: Real institutions across Bengaluru, Delhi-NCR, Mumbai, Chennai, and Hyderabad (Apollo, Fortis, Manipal, Max, Narayana Health, Medanta, Aster).
   - **Live Cashless Claim Tracker**: Enter Claim ID (`MED-78291` or `MED-44120`) to view real-time multi-step progress (Intimation $\rightarrow$ TPA Verification $\rightarrow$ Pre-Auth Issued $\rightarrow$ Hospitalization $\rightarrow$ Settlement).
   - Corporate Health Wallet balance preview (₹12,500 allowance).

7. **Patient Health Records (PHR) & Dashboard (`dashboard.html`)**:
   - Track active doctor video appointments.
   - Track medicine orders and delivery progress.
   - Interactive **Digital Lab Report Viewer & Printer** with biological reference intervals and pathologist sign-off.

8. **AI Health Triage & Symptom Checker (`js/ai-checker.js`)**:
   - Interactive clinical decision assistant recommending medical specialties and diagnostic tests.

9. **PWA Mobile App & QR Code Integration**:
   - Web App Manifest (`manifest.json`) and Service Worker (`sw.js`).
   - High-resolution scannable QR Code and "Send Download Link via SMS" flow.

---

## 🚀 Quick Start Instructions

### Option 1: One-Click Windows Batch Launcher
Double click `run.bat` in this folder:
```cmd
run.bat
```
This starts the local Python server and automatically launches Medroute in your default browser at `http://localhost:8000`.

### Option 2: Command Line (PowerShell)
```powershell
cd C:\Users\pc\.gemini\antigravity\scratch\medroute
python server.py
```
Open your browser to:
`http://localhost:8000/index.html`

---

## 📁 File Structure
```
medroute/
├── index.html          # Main landing page
├── consult.html        # Doctor teleconsultations & booking
├── lab-tests.html      # Diagnostic lab packages & tests
├── pharmacy.html       # Online medicine ordering & Rx upload
├── surgeries.html      # Surgery care, Care Buddy & 0% EMI calculator
├── gold.html           # Medroute Gold membership plans
├── insurance.html      # Cashless hospital locator & claim tracker
├── dashboard.html      # PHR records, appointments & lab reports
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker for offline/PWA
├── server.py           # Python 3 backend HTTP server with mock REST API
├── run.bat             # One-click Windows launch script
├── css/
│   └── styles.css      # Custom healthcare typography & animations
└── js/
    ├── data.js         # Master registry (Hospitals, Doctors, Tests, Meds, Surgeries)
    ├── store.js        # Reactive state, Cart, Pincode API, Gold & Toasts
    ├── ai-checker.js   # Interactive AI Symptom Checker triage
    └── main.js         # Universal search, cart drawer & modal controllers
```
