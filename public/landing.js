// SurgPrep Landing Page JS

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('open'));
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // Check auth state and update nav
    checkAuth();

    // Load preview procedures
    loadPreview();
});

async function checkAuth() {
    try {
        const res = await fetch('/api/access', { credentials: 'include' });
        const data = await res.json();
        const navAuth = document.getElementById('navAuth');

        if (data.loggedIn) {
            if (data.subscribed) {
                navAuth.innerHTML = `
                    <a href="/app.html" class="btn-primary-sm">Open App →</a>
                `;
            } else {
                navAuth.innerHTML = `
                    <span style="color: var(--text-muted); font-size: 13px;">Hi, ${data.user.name || data.user.email.split('@')[0]}</span>
                    <a href="/app.html" class="btn-primary-sm">Subscribe</a>
                `;
            }
        }
    } catch (e) {
        // Not logged in — default nav is fine
    }
}

function loadPreview() {
    const container = document.getElementById('previewProcedures');
    if (!container) return;

    // Show 3 free preview procedures (partial content)
    const previews = [
        {
            name: 'Free Flap Mandibulectomy with Fibula Graft',
            specialty: 'ENT',
            desc: 'Segmental mandibulectomy with microvascular free tissue transfer. One of the most complex head & neck procedures.',
            instruments: [
                'Head & Neck tray', 'Tracheostomy tray', 'Mandible plating system (Matrix Mandible — Dr. Sinha)',
                'Micro tray (vascular anastomosis)', 'Oscillating saw with fine-cut blade',
                'Harmonic scalpel', 'Doppler probe (for flap monitoring)'
            ],
            tip: '⚠️ AIRWAY: Trach tray open, #10 blade loaded, Bovie at max, suction ready — BEFORE induction.'
        },
        {
            name: 'EVAR — Endovascular Aneurysm Repair (Triple A)',
            specialty: 'Vascular',
            desc: 'Endovascular repair of abdominal aortic aneurysm using stent graft deployed through femoral arteries under fluoroscopy.',
            instruments: [
                'Peripheral vascular tray', 'C-arm fluoroscopy with drape',
                'Pinnacle intro sheath 7Fr 10cm x2 — ALWAYS OPEN',
                'Dry Seal 18Fr and 12Fr — HOLD',
                'O-Royal Flush, KMP, Pigtail catheters'
            ],
            tip: 'When putting the stent in: HOLD WIRE DOWN TO THE DRAPE so it doesn\'t move.'
        },
        {
            name: 'Organ Procurement (Lungs, Kidneys, Liver, Pancreas)',
            specialty: 'General',
            desc: 'Multi-organ procurement from deceased donor. Requires massive ice prep, sternal saw, coordination with multiple transplant teams.',
            instruments: [
                'Liver tray + liver resection tray', 'Morse retractor',
                'Sternal saw (Microaire) — GET THE RIGHT BLADE',
                'Bronchoscopy set — have set up with AV tech'
            ],
            tip: 'ICE ICE ICE — make more than you think. 4 basins MINIMUM.'
        }
    ];

    container.innerHTML = previews.map(p => `
        <div class="preview-card">
            <div class="preview-card-header">
                <h3>${p.name}</h3>
                <span class="preview-badge">${p.specialty}</span>
            </div>
            <p>${p.desc}</p>
            <div class="preview-detail">
                <div class="preview-detail-title">Key Instruments</div>
                <ul class="preview-detail-list">
                    ${p.instruments.map(i => `<li>${i}</li>`).join('')}
                </ul>
            </div>
            <div class="preview-detail preview-fade">
                <div class="preview-detail-title">💡 Scrub Tech Tip</div>
                <p style="color: var(--text-muted); font-size: 14px;">${p.tip}</p>
            </div>
            <div class="preview-unlock">
                <a href="/signup.html">Sign up for full procedure details →</a>
            </div>
        </div>
    `).join('');
}
