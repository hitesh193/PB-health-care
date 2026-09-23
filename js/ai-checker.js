/**
 * Medroute AI Symptom Checker & Clinical Triage Assistant
 * Guides users based on symptoms, severity, and clinical guidelines
 * to recommend relevant specialists and diagnostic lab tests.
 */

class MedrouteAIChecker {
  constructor() {
    this.modalId = 'medroute-ai-modal';
    this.selectedCategory = null;
    this.selectedSymptom = null;
    this.selectedDuration = null;
  }

  open() {
    let modal = document.getElementById(this.modalId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = this.modalId;
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm';
      document.body.appendChild(modal);
    }
    this.selectedCategory = MEDROUTE_DATA.aiSymptoms[0];
    this.selectedSymptom = this.selectedCategory.symptoms[0];
    this.selectedDuration = '1-3 days';
    this.render();
    modal.classList.remove('hidden');
  }

  close() {
    const modal = document.getElementById(this.modalId);
    if (modal) modal.classList.add('hidden');
  }

  selectCategory(index) {
    this.selectedCategory = MEDROUTE_DATA.aiSymptoms[index];
    this.selectedSymptom = this.selectedCategory.symptoms[0];
    this.render();
  }

  selectSymptom(symptom) {
    this.selectedSymptom = symptom;
    this.render();
  }

  selectDuration(duration) {
    this.selectedDuration = duration;
    this.render();
  }

  render() {
    const modal = document.getElementById(this.modalId);
    if (!modal) return;

    modal.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slide-down border border-slate-100">
        <!-- Header -->
        <div class="bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-5 text-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">ðŸ©º</div>
            <div>
              <h3 class="text-lg font-bold">Medroute AI Health Triage & Symptom Checker</h3>
              <p class="text-xs text-emerald-100">Clinical decision support based on verified medical guidelines</p>
            </div>
          </div>
          <button onclick="aiChecker.close()" class="text-white/80 hover:text-white text-2xl font-bold">âœ•</button>
        </div>

        <!-- Body -->
        <div class="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          <!-- Step 1: Health Concern Category -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">1. Select Problem Area</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              ${MEDROUTE_DATA.aiSymptoms.map((cat, idx) => `
                <button onclick="aiChecker.selectCategory(${idx})" class="p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${this.selectedCategory.category === cat.category ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm' : 'border-slate-200 hover:border-slate-300 text-slate-700'}">
                  ${cat.category}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Step 2: Specific Symptoms -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">2. What are you experiencing?</label>
            <div class="flex flex-wrap gap-2">
              ${this.selectedCategory.symptoms.map(sym => `
                <button onclick="aiChecker.selectSymptom('${sym}')" class="px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${this.selectedSymptom === sym ? 'bg-slate-900 text-white border-slate-900 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}">
                  ${sym}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Step 3: Duration -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">3. How long have you had this?</label>
            <div class="grid grid-cols-4 gap-2">
              ${['< 24 Hours', '1-3 days', '1-2 weeks', '> 2 weeks'].map(dur => `
                <button onclick="aiChecker.selectDuration('${dur}')" class="py-2 text-center text-xs font-semibold rounded-lg border transition-all ${this.selectedDuration === dur ? 'border-teal-600 bg-teal-50 text-teal-900' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}">
                  ${dur}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Recommendations Box -->
          <div class="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
              <span>âœ¦</span> Recommended Care Pathway
            </div>

            <div class="grid sm:grid-cols-2 gap-3 text-sm">
              <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
                <span class="text-xs text-slate-500 block">Recommended Specialist:</span>
                <span class="font-bold text-slate-900">${this.selectedCategory.recommendedSpecialty}</span>
                <span class="text-xs text-emerald-700 block mt-0.5">e.g. ${this.selectedCategory.recommendedDoctor}</span>
              </div>
              <div class="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
                <span class="text-xs text-slate-500 block">Suggested Lab Investigation:</span>
                <span class="font-bold text-slate-900">${this.selectedCategory.recommendedTest}</span>
                <span class="text-xs text-slate-500 block mt-0.5">NABL Home Sample Collection</span>
              </div>
            </div>

            <div class="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>Clinical Note:</strong> ${this.selectedCategory.advice}
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="px-6 py-4 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button onclick="aiChecker.close()" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800">Dismiss</button>
          <div class="flex items-center gap-2">
            <a href="lab-tests.html" class="px-4 py-2 text-xs font-bold text-slate-800 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition">
              Book Lab Test
            </a>
            <a href="consult.html?specialty=${this.selectedCategory.specialtyId}" class="px-5 py-2 text-xs font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm transition">
              Consult ${this.selectedCategory.recommendedSpecialty} Now â†’
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

const aiChecker = new MedrouteAIChecker();
