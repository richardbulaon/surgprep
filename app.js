// ===== PROCEDURE DATA =====
const procedures = [
    {
        id: 'free-flap-mandibulectomy',
        name: 'Free Flap Mandibulectomy with Reconstruction',
        specialty: 'ENT',
        complexity: 'Complex',
        duration: '8-14 hours',
        overview: 'Resection of cancerous mandible and surrounding tissues, followed by reconstruction using a free tissue transfer (free flap). The defect is reconstructed using either a fibula free flap (from the leg) or a radial forearm free flap (from the arm). This is a complex, multi-team procedure involving ablative surgery and microvascular reconstruction.',
        positioning: 'Supine, head on donut/horseshoe headrest, head turned to expose operative side. Arms may be extended on arm boards — particularly if radial forearm flap is planned. Ensure all pressure points are padded. Foley catheter for long case. U drape.',
        anesthesia: 'Patient is AWAKE for tracheostomy. General anesthesia after airway is secured via trach. Arterial line and central line access typical. Anesthesia gives you the ET tube after trach is placed.',
        anatomy: [
            'Mandible (body, ramus, angle, condyle, symphysis)',
            'Facial artery and vein',
            'Internal jugular vein, external carotid artery',
            'Inferior alveolar nerve',
            'Marginal mandibular branch of facial nerve (CN VII)',
            'Floor of mouth musculature (mylohyoid, genioglossus, geniohyoid)',
            'Fibula — peroneal artery and venae comitantes (for fibula flap)',
            'Radial artery and cephalic vein (for radial forearm flap)',
            'Recipient vessels in the neck for microvascular anastomosis'
        ],
        instruments: [
            'Head & Neck tray x2 (one for dirty/ablative side, one for clean/flap side)',
            'Mouth gag tray',
            'Dental tray',
            'Mandible & midface reconstruction tray (Stryker Leibinger — Dr. Sinha)',
            'Matrix Mandible plating system (small tray — Dr. Sinha preference)',
            'Synthes reconstruction system (Dr. Kokot)',
            'Kokot micro instruments',
            'Micro tray with coupler device',
            'Trach tray',
            'Stryker TPS powered instrument system',
            'RemB drill x2 (one dirty side, one clean side — for fibula cases)',
            'Oscillating saw and reciprocating saw',
            'Sagittal saw (for fibula osteotomies)',
            'Dermatome (needed for fibula and radial flaps — NOT for ALT)',
            'Doppler probe',
            'Warmer machine (drape in pack)',
            'Operating microscope'
        ],
        supplies: [
            '3-0 nylon',
            '2-0 silk pops, 2-0 silk ties',
            '3-0 Vicryl pops x3, 2-0 Vicryl pops',
            '9-0 nylon x3 (for microvascular anastomosis)',
            'White and red bulldogs (disposable)',
            'Blue micro suction adapter',
            'U drape',
            'Med and small skin staplers',
            'Blue and white hemoclips',
            'Heparinized saline (100 units/mL) for vessel irrigation',
            'Warm irrigation (saline)',
            'Background material (for micro anastomosis)',
            'Vessel loops',
            'Penrose drains, Jackson-Pratt drains',
            'Skin prep — Betadine or Chlorhexidine (per surgeon preference)',
            'Marking pen, ruler, sterile Doppler probe cover',
            '<strong>For flap donor site:</strong> Stockinette, Webril, tourniquet, Esmarch',
            'Cobb elevator, key elevator and mallet'
        ],
        implants: [
            'Mandibular reconstruction plate (pre-bent or intra-op bent)',
            'Locking screws (various lengths)',
            'Mini-plates for fibula segment fixation',
            'Possibly dental implant anchors (delayed)'
        ],
        steps: [
            '<strong>SETUP ORDER — Open everything first, then set up in this order:</strong>',
            '<strong>1. Trach on mayo FIRST</strong> — Patient is AWAKE. Setup: 2-0 PS silk (to secure tube), 3-0 SH Vicryl, peanuts, Bovie, suction, needle mat. Anesthesia gives you the ET tube. Throw all sharps away after.',
            '<strong>2. G-tube placement</strong> — General surgeon scrubs in. Everything is in the kit. Surgeon does everything — does not need your assistance.',
            '<strong>3. Prep and drape</strong> — Prep head/neck and donor site simultaneously',
            '<strong>DIRTY SIDE (Ablative/Neck):</strong> Medium table, 2 mayo stands. Basic green, H&N pack, towels, 3/4 sheets. Mayo 1 = mandible/neck instruments. Mayo 2 = drill. Head & neck tray, Matrix Mandible plates, Matrix Mandible system.',
            '<strong>CLEAN SIDE (Flap/Micro):</strong> Small table, 2 mayo stands. Basic green, H&N pack, microscope drape. Mayo 1 = leg instruments. Mayo 2 = micro instruments. Head & neck tray, micro tray, coupler device, free flap pack.',
            'Neck dissection — identify and preserve recipient vessels (facial artery/vein or branches of external carotid, internal jugular)',
            'Tumor resection — mandibulectomy with adequate margins. Mark margins with clips for pathology.',
            'Send margins for frozen section — WAIT for clear margins before reconstruction',
            'Simultaneously: Donor team harvests free flap at second surgical site',
            'Fibula: Osteotomies performed to shape fibula segments to match mandibular defect. Plate fixation of segments.',
            'Radial forearm: Harvest with skin paddle for soft tissue reconstruction',
            'ALT (anterior thigh flap): No dermatome needed for this variant',
            'Flap transferred to head/neck — inset into defect',
            'Plate fixation of reconstructed mandible — check occlusion',
            'Microvascular anastomosis — artery and 1-2 veins. End-to-end or end-to-side. Use operating microscope or loupes.',
            'Check flap perfusion with Doppler — confirm arterial and venous flow',
            'Inset flap soft tissue, close floor of mouth and oral lining',
            'Donor site closure — primary closure or skin graft',
            '<strong>Dressings — Radial/Fibula donor site:</strong> 3 xeroform rolled up with bacitracin → Dermabond → cast/splint on top',
            '<strong>Dressings — Skin graft site:</strong> Thrombin → Telfa x2 → Tegaderm x2',
            'Place JP drains in neck',
            'Final wound closure — layered',
            'Secure tracheostomy, apply dressings'
        ],
        tips: [
            'Open EVERYTHING first, then set up trach mayo FIRST — patient is awake, you need to be ready',
            'G-tube: General surgeon handles it entirely — don\'t waste time setting up instruments for this',
            'Fibula cases need 2 RemB drills — one for dirty side, one for clean side. Don\'t forget.',
            'ALT (anterior thigh) flap does NOT need a dermatome. Radial and fibula DO.',
            'Have micro instruments opened, checked, and ready BEFORE the flap harvest begins — do not scramble when the flap arrives',
            'Keep irrigation WARM — cold irrigation causes vasospasm',
            'Heparinized saline must be prepared in advance and labeled clearly',
            'Dirty side and clean side must stay COMPLETELY organized — two separate setups, two separate mayo stands each',
            'Know your plating system cold — Dr. Sinha uses Matrix Mandible plates (small tray). Plate bending, screw lengths, drill bits. Surgeon will not wait.',
            'Keep the room quiet during microvascular anastomosis — the surgeon needs focus',
            'Label all specimens clearly — orientation and margin identification is critical for pathology',
            'Have Doppler probe ready immediately after anastomosis for flow check',
            'Dressing for donor site: 3 xeroform rolled w/ baci → Dermabond → cast/splint. Have it all ready.'
        ],
        complications: [
            'Flap failure (arterial or venous thrombosis) — requires immediate return to OR',
            'Hematoma — can compromise airway',
            'Infection / wound breakdown',
            'Marginal mandibular nerve injury — lip droop',
            'Fistula (oral-cutaneous)',
            'Plate exposure or hardware failure',
            'Donor site morbidity — fibula: foot drop, ankle instability; radial forearm: decreased grip strength'
        ],
        variations: [
            '<strong>Fibula Free Flap:</strong> Workhorse for mandibular reconstruction. Provides bone stock for dental implants. Can include skin paddle. Donor site: lateral leg. Peroneal artery is the vascular pedicle. Needs dermatome and 2 RemB drills (dirty + clean side).',
            '<strong>Radial Forearm Free Flap:</strong> Primarily soft tissue — less bone stock but excellent for soft tissue defects, floor of mouth reconstruction. Donor site: volar forearm. Radial artery is the vascular pedicle. Allen test MUST be positive pre-op. Needs dermatome.',
            '<strong>Anterolateral Thigh (ALT) Free Flap:</strong> Soft tissue flap from the thigh. Does NOT need a dermatome. Good option for large soft tissue defects.',
            '<strong>Segmental vs. Marginal Mandibulectomy:</strong> Segmental = full-thickness bone resection (requires reconstruction). Marginal = rim of mandible only (may not require free flap).'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Kwon',
                prefs: [
                    '1/2 x 3 cottonoids dipped in heparinized saline',
                    'Blue Harmonic shears',
                    'Weck cell spears',
                    '2 long straight jeweler forceps',
                    'Papaverine'
                ]
            },
            {
                name: 'Dr. Moeyer/Moyer',
                prefs: [
                    '1/2 x 3 cottonoids DRY (not hep saline)',
                    'Thin malleable',
                    'Harmonic shears',
                    'Weck cell spears',
                    'Q-tips',
                    'Blue background material',
                    'Facelift scissors'
                ]
            },
            {
                name: 'Dr. Swanson',
                prefs: [
                    'Blue background',
                    'Angiocath instead of micro irrigators',
                    'Curved and straight micro pickups — everything SHORT',
                    'DeBakeys x2',
                    'Rounded'
                ]
            },
            {
                name: 'Dr. Kochar',
                prefs: [
                    'Radial setup: Weitlaner, double prong x2',
                    'Pressure dressing for radial site: cotton balls in mineral oil, xeroform',
                    'Sling w/ fascia graft: 3-0 Prolene SH x4, each on a snap numbered with marking pen'
                ]
            },
            {
                name: 'Dr. Sinha',
                prefs: [
                    'Matrix Mandible plating system (small tray)',
                    'Stryker Leibinger mandible & midface reconstruction',
                    'Uses BOTH manual clips and automatic clips — have both ready',
                    'When he asks for "a clip" → give him medium manual clip x2 followed by a Metzenbaum',
                    '🎵 Likes classic rock music playing in the OR — gets in a better rhythm. Have it ready before he scrubs in.'
                ]
            }
        ]
    },
    {
        id: 'tonsillectomy-adenoidectomy',
        name: 'Tonsillectomy & Adenoidectomy (T&A)',
        specialty: 'ENT',
        complexity: 'Basic',
        duration: '30-60 minutes',
        overview: 'Surgical removal of the palatine tonsils and adenoid tissue. One of the most common ENT procedures, typically performed for recurrent tonsillitis, obstructive sleep apnea, or airway obstruction — especially in pediatric patients.',
        positioning: 'Supine with shoulder roll to extend the neck. Head on donut. Rose position (head at top of bed, slightly hanging) is common. Ensure eyes are protected.',
        anesthesia: 'General anesthesia with oral RAE (Ring-Adair-Elwyn) endotracheal tube. Tube is taped midline to the chin.',
        anatomy: [
            'Palatine tonsils — between anterior and posterior tonsillar pillars',
            'Tonsillar fossa and capsule',
            'Adenoid pad — posterior nasopharynx',
            'Lingual tonsils (usually not removed)',
            'Internal carotid artery — lies posterolateral to the tonsillar fossa (danger zone)',
            'Tonsillar branch of facial artery'
        ],
        instruments: [
            'Tonsil tray — Long Gerald forceps with teeth, Crowe-Davis mouth gag (blade looks like a "C"), Hurd retractor, sponge forcep with tonsil sponge, tonsil (snare)',
            'Suction Bovie',
            'Med Bovie extension',
            'Extra suction',
            'Fred (suction)',
            'Dental mirror',
            '10 Fr red Robinson x2'
        ],
        supplies: [
            'Head & Neck pack',
            'Tonsil sponge',
            'Med Bovie extension cord',
            'Extra suction tubing',
            'Normal saline irrigation'
        ],
        implants: [],
        steps: [
            'Patient positioned, shoulder roll placed, oral RAE tube secured',
            'Insert mouth gag — suspend from Mayo stand or bed frame. Verify ETT not kinked.',
            'Inspect tonsils and oropharynx',
            'Tonsillectomy: Grasp tonsil with Allis clamp, retract medially',
            'Dissect tonsil from capsule using electrocautery (or cold technique)',
            'Dissect superior to inferior pole — control bleeding as you go',
            'Remove tonsil, inspect fossa for bleeding',
            'Repeat on opposite side',
            'Adenoidectomy: Place red rubber catheters through nose, retract palate',
            'Visualize adenoid pad with mirror or directly',
            'Remove adenoid tissue with curette or microdebrider',
            'Achieve hemostasis with electrocautery or packing',
            'Remove mouth gag, suction stomach (swallowed blood)',
            'Final inspection, confirm hemostasis'
        ],
        tips: [
            '⚠️ When case is finished DO NOT throw your drapes away until patient is EXTUBATED. Fold drapes down. Keep suction Bovie. Keep instruments STERILE — in case tonsils start bleeding post-op.',
            'Crowe-Davis mouth gag blade looks like a "C" — know this instrument',
            'Have multiple tongue blade sizes available — one size does not fit all',
            'ALWAYS verify ETT position after placing the mouth gag — it can dislodge or kink the tube',
            'Keep tonsil sponges COUNTED — they can be aspirated',
            'Have suction Bovie and bipolar BOTH ready — surgeon may switch based on bleeding',
            'Peds cases: have smaller instruments ready, work quickly',
            'Know the difference between hot (cautery) and cold (snare) technique — instrument setup differs'
        ],
        complications: [
            'Post-tonsillectomy hemorrhage (0.5-10%) — primary (<24h) or secondary (5-10 days)',
            'Airway obstruction from edema',
            'Dehydration (especially peds)',
            'Velopharyngeal insufficiency (rare)',
            'Tooth damage from mouth gag',
            'Burns to lip or tongue from cautery'
        ],
        variations: [
            '<strong>Cold Steel Technique:</strong> Dissection with tonsil snare or scissors — less thermal injury, potentially more bleeding intra-op',
            '<strong>Coblation Tonsillectomy:</strong> Uses radiofrequency energy — lower temperature, may reduce post-op pain',
            '<strong>Intracapsular (Partial) Tonsillectomy:</strong> Removes most tonsil tissue but preserves capsule — less pain, used for obstruction (not infection)',
            '<strong>Adenoidectomy alone:</strong> Can be performed without tonsillectomy for nasal obstruction or chronic adenoiditis'
        ],
        comingSoon: false
    },
    {
        id: 'fess',
        name: 'FESS / Septoplasty / Turbinoplasty',
        specialty: 'ENT',
        complexity: 'Intermediate',
        duration: '1-3 hours',
        overview: 'Functional Endoscopic Sinus Surgery with septoplasty and turbinoplasty. Minimally invasive endoscopic surgery to improve sinus drainage, correct deviated septum, and reduce turbinate hypertrophy. Uses rigid nasal endoscopes, powered instruments, and image-guided navigation through the nostrils — no external incisions.',
        positioning: 'Supine, reverse Trendelenburg (head up 15-30°). Dr. Wrobel stands on RIGHT side of patient. OR 19: Bed turned 90°, head towards door. Bovie at feet. Navigation tower opposite side of anesthesia. Magnet on right side. Gowns on left. OR 3: Turn 90°, feet at door. OR 9: Turn 180°.',
        anesthesia: 'General anesthesia with oral RAE tube. Topical decongestion placed in nose prior to start. Local injection of lidocaine with epinephrine to nasal mucosa.',
        anatomy: [
            'Nasal septum, middle and superior turbinates',
            'Uncinate process — key landmark, first structure removed',
            'Ethmoid bulla and ethmoid air cells (anterior and posterior)',
            'Maxillary sinus ostium (natural ostium)',
            'Frontal sinus recess and frontal sinus drainage pathway',
            'Sphenoid sinus and sphenoid rostrum',
            'Lamina papyracea (medial orbital wall) — paper-thin, danger zone',
            'Skull base (fovea ethmoidalis) — CRITICAL danger zone',
            'Anterior and posterior ethmoid arteries',
            'Optic nerve (runs along sphenoid sinus wall)'
        ],
        instruments: [
            '<strong>Trays:</strong>',
            'ESS tray — sinus seeker, Blakesley (short and long), tru-cut forceps',
            'Toriumi RHINOPLASTY tray (NOT septoplasty!) — Freer, Cottle, swivel knife, D knife, Jensen Middleton, morselizer. Get ALL speculums from this tray.',
            'Giraffe forceps tray — 70° up/down cutting and biting, left/right cutting and biting, Kerrison, small backbiter, malleable suctions (GET THE DELICATE TIP), curette slightly angled, 180° giraffe biting forcep',
            'Advanced frontal sinus tray (HOLD — standby only)',
            '<strong>Powered/Tech:</strong>',
            'Shaver ENT Medtronic (Straight Shot M5)',
            'Navigation ENT (Fusion system)',
            'ESS scopes — DO NOT get Xomed scopes!!!',
            '0° scope (primary), 30°, 45°, 70° endoscopes',
            '3.5mm 60° endoscrub (for quad sinus)',
            'Endoscrub green cover for scopes',
            'Camera — AV tech needed',
            'Microdebrider tubing + turbinate blade!!!!',
            'Olympus tubing Instaclear',
            '<strong>Other:</strong>',
            '10 Fr Frazier suction',
            'Suction Bovie',
            'Bipolar',
            '#7 knife handle for #15 blade',
            'Long needle holder with big jaws and thin — put a snap at the end'
        ],
        supplies: [
            'ESS pack (has 2 suctions — get 1 EXTRA suction)',
            'Size 8 Delicot x3!!!! (critical)',
            '3/4 sheet x3!!!',
            '20cc syringe x2!!!',
            '6½ Protexis gloves',
            'Merocel x2',
            'Instrument pockets x2',
            'Mayo cover',
            'Warmer cover',
            'Asepto',
            'Skin stapler (in pack)',
            '4-0 chromic P3',
            '4-0 chromic PS2',
            '2-0 silk',
            'Surgicel',
            'Vortex (standby)',
            'Floseal',
            'Culture swab',
            'Specimen containers'
        ],
        implants: [
            'Merocel nasal packing x2',
            'Possible Kito gel mixed with Kenalog — 7cc of antibiotic + Kenalog mixed with 10cc of saline'
        ],
        steps: [
            '<strong>NAVIGATION SETUP:</strong> Start with navigation, bayonet forcep and speculum on a SEPARATE field',
            '<strong>DRAPING ORDER:</strong>',
            '1st — Camera and light cord: staple at front of drape',
            '2nd — Suction and microdebrider: staple to drape FARTHEST away from you lengthwise. Fold drapes to make a pocket.',
            '3rd — Suction, bipolar, suction Bovie: staple CLOSEST to you. Line up lengthwise.',
            'Instrument pocket on mayo — suction Bovie and bipolar go here',
            'Open wrapped instruments on ring stand — STACK them',
            'Drape double ring stand to put drapes and cords on it',
            '<strong>SURGERY:</strong>',
            'Register navigation system — verify landmarks',
            'Insert 0° endoscope — survey nasal cavity',
            'Septoplasty — correct deviated septum using Cottle, Freer, D knife from Toriumi tray',
            'FESS — uncinectomy, antrostomy, ethmoidectomy (anterior → posterior)',
            'Frontal sinusotomy if indicated — use giraffe instruments and 70° scope',
            'Turbinoplasty — reduce turbinates with microdebrider/turbinate blade',
            'Remove polyps with microdebrider as encountered',
            'Achieve hemostasis — irrigate, cauterize as needed',
            '<strong>CLOSING:</strong> Long needle holder with big jaws, thin — snap at the end. Merocel x2 sponges with a tie at the end.',
            'Possible Kito gel mix with Kenalog (7cc AB + Kenalog mixed with 10cc saline)',
            'Final endoscopic survey — confirm all sinuses patent'
        ],
        tips: [
            'Get the TORIUMI RHINOPLASTY tray — NOT the septoplasty tray. All speculums come from here.',
            'ESS scopes ONLY — DO NOT get Xomed scopes. They are different.',
            'Size 8 Delicot x3 is CRITICAL — do not forget these',
            '3/4 sheets x3 and 20cc syringes x2 — triple-check you have enough',
            'Microdebrider turbinate blade — have it assembled and tested BEFORE case',
            'Navigation setup: start on a SEPARATE field with bayonet and speculum only',
            'Draping order matters: camera/light first, then suction/debrider far side, then suction/bipolar/Bovie near side',
            'Open wrapped instruments stacked on ring stand — keeps them organized and accessible',
            'Know which OR you\'re in — room setup changes: OR 19 (bed 90°, head to door), OR 3 (90°, feet to door), OR 9 (180°)',
            'Wrobel stands on the RIGHT side of the patient — set up accordingly',
            'Keep endoscope lens clean — have Instaclear and warm saline ready',
            'Have the delicate tip malleable suction from the giraffe tray — he will ask for it'
        ],
        complications: [
            'CSF leak (skull base violation) — neurosurgical emergency',
            'Orbital injury — diplopia, blindness (lamina papyracea breach)',
            'Hemorrhage — anterior ethmoid artery, sphenopalatine artery',
            'Synechiae (scar bands) post-op',
            'Recurrence of polyps or disease',
            'Anosmia (loss of smell)',
            'Septal perforation'
        ],
        variations: [
            '<strong>FESS Only:</strong> No septoplasty — sinus work only',
            '<strong>Septoplasty Only:</strong> Deviated septum correction without sinus surgery',
            '<strong>Balloon Sinuplasty:</strong> Uses a balloon catheter to dilate sinus ostia — less tissue removal',
            '<strong>Draf III (Modified Lothrop):</strong> Aggressive frontal sinus approach — removes frontal sinus floor, superior septum. Complex.',
            '<strong>Image-Guided Surgery:</strong> CT-based intra-op navigation — standard for Wrobel cases'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Wrobel',
                prefs: [
                    'Stands on RIGHT side of patient',
                    'Navigation system: Fusion ENT',
                    'ESS scopes ONLY — NOT Xomed',
                    'Toriumi RHINOPLASTY tray (not septoplasty)',
                    'OR 19: Bed turned 90°, head towards door. Magnet right side, gowns left. Navigation tower opposite anesthesia.',
                    'OR 3: Turn 90°, feet at door',
                    'OR 9: Turn 180°',
                    'Stealth navigation — password: "stealth" → Press ENT → Press Wrobel → Press FESS',
                    'Quad sinus: use 3.5mm 60° endoscrub scope'
                ]
            }
        ],
        images: [
            { src: 'images/fess-wrobel/back-table-setup.jpg', caption: 'Back table — cottonoid strips, medicine cups, needle counter, bayonet forceps' },
            { src: 'images/fess-wrobel/septorhinoplasty-instruments.jpg', caption: 'Septorhinoplasty instruments — osteotomes, Cottle elevator, mallet' },
            { src: 'images/fess-wrobel/toriumi-tray-gold-instruments.jpg', caption: 'Toriumi rhinoplasty tray — gold-handled Castroviejo, fine forceps, scissors' },
            { src: 'images/fess-wrobel/ess-tray-blakesley-kerrison.jpg', caption: 'ESS tray — Blakesley forceps, Kerrison rongeurs, suctions, needle counter' },
            { src: 'images/fess-wrobel/toriumi-tray-elevators-hooks.jpg', caption: 'Toriumi tray — skin hooks, Freer elevator, fine instruments' },
            { src: 'images/fess-wrobel/back-table-full-overview.jpg', caption: 'Full back table overview — all trays staged with cords and drapes' },
            { src: 'images/fess-wrobel/storz-camera-medtronic-nav.jpg', caption: 'Storz camera/light cord and Medtronic Fusion navigation headset' },
            { src: 'images/fess-wrobel/giraffe-tray-instruments.jpg', caption: 'Giraffe tray — 70° scopes, Kerrison rongeurs, backbiters, needle counter' },
            { src: 'images/fess-wrobel/mayo-stand-sinus-instruments.jpg', caption: 'Mayo stand — Cottle, Freer, sinus seeker, D knife from Toriumi tray' },
            { src: 'images/fess-wrobel/septorhinoplasty-closeup.jpg', caption: 'Septorhinoplasty instruments close-up — Freer, swivel knife, D knife, Cottle' },
            { src: 'images/fess-wrobel/sinus-curettes-closeup.jpg', caption: 'Sinus curettes and backbiter close-up with Blakesley forceps' },
            { src: 'images/fess-wrobel/back-table-full-trays-tubing.jpg', caption: 'Back table — stacked trays with camera cord, tubing, ring stand setup' },
            { src: 'images/fess-wrobel/back-table-instruments-cottonoids.jpg', caption: 'Back table — instrument tray with cottonoids in bowl, medicine cups, speculum' },
            { src: 'images/fess-wrobel/mayo-stand-rongeurs-stapler-bovie.jpg', caption: 'Mayo stand — rongeurs, stapler, Bovie, plate cutters, Cottle crusher' },
            { src: 'images/fess-wrobel/olympus-peel-packs-blades.jpg', caption: 'Olympus peel packs — Instaclear tubing, microdebrider sinus blades, Bovie cord' },
            { src: 'images/fess-wrobel/back-table-overview-angled.jpg', caption: 'Back table angled view — full setup with all cords and trays' }
        ]
    },
    {
        id: 'total-laryngectomy',
        name: 'Total Laryngectomy',
        specialty: 'ENT',
        complexity: 'Complex',
        duration: '4-8 hours',
        overview: 'Complete surgical removal of the larynx (voice box), typically for advanced laryngeal cancer (T3-T4) or as salvage after failed chemoradiation. Results in permanent separation of the airway from the digestive tract. The patient will breathe through a permanent tracheostoma and lose natural voice.',
        positioning: 'Supine with shoulder roll to extend the neck. Head on donut. Arms tucked. Slight reverse Trendelenburg.',
        anesthesia: 'General anesthesia — anesthesia intubates first. NO trach at the beginning — does NOT use a trach tray. 2-0 silk to secure the ET tube for the meantime. ETT is managed by anesthesia throughout; eventually a laryngectomy tube is placed in the permanent stoma. Have sterile circuit ready.',
        anatomy: [
            'Larynx: thyroid cartilage, cricoid cartilage, epiglottis, arytenoids',
            'Hyoid bone — superior attachment',
            'Trachea — transected below the larynx',
            'Esophagus/pharynx — reconstructed after larynx removal',
            'Recurrent laryngeal nerves (will be sacrificed)',
            'Superior and inferior thyroid arteries',
            'Thyroid gland (may be partially or fully removed)',
            'Strap muscles (sternohyoid, sternothyroid, thyrohyoid)',
            'Carotid sheath structures (preserved)'
        ],
        instruments: [
            'Head & Neck tray (tonsils, Army-Navys, Allis, Babcock, DeBakeys, Gerald w/ teeth, Jako tonsil, Denhart retractor, Molt #9, McCabe dissector)',
            'Big Matrix Mandible tray',
            'Plating system for 8-hole plate (can cut plate if >8 holes — use plate cutters, looks like Pac-Man)',
            'Big plate bender (in the tray)',
            'RemB drill (may or may not use — does not always split jaw)',
            'Reciprocating saw',
            '#11 blade',
            'Have sterile circuit ready',
            'Electrocautery — monopolar and bipolar',
            'Harmonic scalpel or LigaSure (for vessel sealing)',
            'Right-angle clamps, Kelly clamps, Kocher clamps',
            'Self-retaining retractor (Weitlaner or Lone Star)',
            'Laryngectomy tube (various sizes)',
            'TEP (tracheoesophageal puncture) kit — if primary TEP planned'
        ],
        supplies: [
            'Laryngectomy tubes (multiple sizes — NO trach tray)',
            'JP drains (typically x2)',
            'Sutures: 2-0, 3-0 Vicryl; 3-0 chromic; 2-0 nylon or staples for skin',
            'Surgicel, Gelfoam for hemostasis',
            'Vessel loops',
            'NGT (nasogastric tube) — placed during pharyngeal closure',
            'Specimen containers — larynx orientation critical for pathology'
        ],
        implants: [
            'Voice prosthesis (Blom-Singer or Provox) — if primary TEP performed',
            'Laryngectomy tube'
        ],
        steps: [
            'Position patient, prep and drape neck and upper chest',
            'Mark tracheostoma site and incision (apron flap or U-shaped)',
            'Raise subplatysmal flaps superiorly and inferiorly',
            'Neck dissection performed if indicated (unilateral or bilateral)',
            'Divide strap muscles from hyoid and thyroid cartilage',
            'Mobilize larynx — release suprahyoid muscles, enter pre-epiglottic space',
            'Ligate superior laryngeal pedicles bilaterally',
            'Divide trachea below larynx — anesthesia switches to tracheal tube in stoma',
            'Enter pharynx above hyoid or through vallecula',
            'Resect larynx en bloc — dissect from esophagus/postcricoid mucosa',
            'Send specimen to pathology with orientation sutures',
            'Pharyngeal closure — primary closure in layers over NGT',
            'Tracheoesophageal puncture (TEP) if primary voice restoration planned',
            'Create permanent tracheostoma — suture trachea to skin',
            'Place drains, close wound in layers',
            'Place laryngectomy tube in stoma, secure'
        ],
        tips: [
            '⚠️ BEFORE INDUCTION: Be ready for emergency tracheostomy. Tumor may block the airway during intubation. Have IN THE ROOM: trach tray, knife loaded, Bovie, suction, Raytecs. Tell your circulator: Bovie pad ON, prep the neck. This is life or death — do NOT start an airway case without this.',
            'NO trach tray for the main case — anesthesia intubates first. 2-0 silk to secure the ET tube.',
            'Does NOT always split the jaw — have RemB drill and reciprocating saw ready but may not use them',
            'For split jaw: need RemB drill, reciprocating saw, #11 blade, plating system',
            '8-hole plate standard — if need more, CUT the plate with plate cutters (look like Pac-Man)',
            'Use the big bender in the Matrix Mandible tray for plate bending',
            'Have sterile circuit ready on the field',
            'Coordinate closely with anesthesia for airway management throughout',
            'Keep the field dry — superior laryngeal arteries bleed significantly',
            'Specimen orientation: mark anterior, superior, and laterality with sutures for pathology',
            'NGT must be placed BEFORE pharyngeal closure is complete',
            'If TEP is planned, have the voice prosthesis and puncture kit on the field',
            'Know your laryngectomy tube sizes — have multiple available'
        ],
        complications: [
            'Pharyngocutaneous fistula (most common major complication)',
            'Wound infection or breakdown (especially post-radiation)',
            'Stomal stenosis',
            'Hypothyroidism (if thyroid removed)',
            'Carotid blowout (rare, devastating)',
            'Dysphagia'
        ],
        variations: [
            '<strong>Supracricoid Laryngectomy:</strong> Partial — preserves some voice. Select tumors only.',
            '<strong>Laryngectomy with Pectoralis Major Flap:</strong> For large pharyngeal defects',
            '<strong>Laryngectomy with Free Flap Reconstruction:</strong> For large defects, especially salvage cases',
            '<strong>Primary vs. Secondary TEP:</strong> Voice prosthesis placed during surgery (primary) or months later (secondary)'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Han',
                prefs: [
                    'Trach setup: bipolar, 2-prong spreader, 2 Crile clamps, 2 Army-Navy retractors, Senn retractors',
                    'Neck: 2-0 and 3-0 silk ties, Raytec sponges'
                ]
            }
        ]
    },
    {
        id: 'thyroidectomy',
        name: 'Thyroidectomy (Total / Hemi)',
        specialty: 'ENT',
        complexity: 'Intermediate',
        duration: '1.5-3 hours',
        overview: 'Surgical removal of all (total) or half (hemi/lobectomy) of the thyroid gland. Performed for thyroid cancer, suspicious nodules, goiter, or hyperthyroidism. Critical structures: recurrent laryngeal nerve and parathyroid glands must be identified and preserved.',
        positioning: 'Supine with shoulder roll to extend the neck. Head on donut. Arms tucked. Slight reverse Trendelenburg. May use nerve monitoring headband/EMG tube.',
        anesthesia: 'General anesthesia. If nerve monitoring (NIM) is used, a specialized EMG endotracheal tube is placed — anesthesia must avoid long-acting paralytics after intubation.',
        anatomy: [
            'Thyroid gland — right and left lobes connected by isthmus',
            'Recurrent laryngeal nerve (RLN) — tracheoesophageal groove. MUST be preserved.',
            'Superior laryngeal nerve (external branch) — near superior pole vessels',
            'Parathyroid glands — typically 4, posterior to thyroid. Preserve or reimplant.',
            'Superior and inferior thyroid arteries',
            'Middle thyroid vein',
            'Trachea, esophagus, strap muscles'
        ],
        instruments: [
            'Thyroidectomy instrument tray',
            'Harmonic scalpel or LigaSure vessel sealing device',
            'Nerve integrity monitor (NIM) — stimulating probe',
            'Fine-tip electrocautery, bipolar forceps',
            'Army-Navy retractors, Gelpi retractor, Weitlaner retractor',
            'Small right-angle clamps (Mixter)',
            'Fine DeBakey forceps',
            'Needle drivers, fine suture scissors'
        ],
        supplies: [
            'NIM EMG endotracheal tube (if nerve monitoring used)',
            'NIM nerve stimulator probe and system',
            'Hemostatic agents (Surgicel, Gelfoam)',
            'Small JP drain or Penrose (surgeon preference)',
            'Sutures: 3-0, 4-0 Vicryl; 4-0 or 5-0 Monocryl subcuticular',
            'Steri-strips or skin glue',
            'Specimen containers with orientation sutures'
        ],
        implants: [],
        steps: [
            'Position, shoulder roll, extend neck. Mark Kocher incision in skin crease.',
            'Skin incision through platysma. Raise subplatysmal flaps.',
            'Divide strap muscles in midline raphe, retract laterally',
            'Expose thyroid lobe',
            'Ligate middle thyroid vein',
            'Dissect superior pole — ligate superior thyroid artery/vein. Preserve external branch of SLN.',
            'Identify and preserve parathyroid glands',
            'Identify recurrent laryngeal nerve — confirm with NIM probe',
            'Dissect thyroid off trachea — careful at ligament of Berry',
            'Divide isthmus if total thyroidectomy — repeat on opposite side',
            'Hemostasis — inspect bed',
            'If parathyroid devascularized: autotransplant into SCM muscle',
            'Place drain if indicated. Close strap muscles, platysma, skin.',
            'Steri-strips or glue. Dressing.'
        ],
        tips: [
            'NIM setup: Confirm EMG tube position with anesthesia BEFORE draping. Test system.',
            'DO NOT use monopolar cautery near the RLN — Harmonic or bipolar only',
            'The nerve is most vulnerable at the ligament of Berry — slow down',
            'Parathyroids look like tan/brown lentils — different from fat and nodes',
            'Have calcium gluconate in the room for total thyroidectomy (hypocalcemia risk)',
            'Harmonic scalpel: keep tip 2-3mm away from nerve (lateral thermal spread)'
        ],
        complications: [
            'Recurrent laryngeal nerve injury — hoarseness or airway compromise',
            'Hypoparathyroidism / hypocalcemia',
            'Post-op hematoma — airway emergency, may need bedside opening',
            'Superior laryngeal nerve injury — voice fatigue',
            'Wound infection',
            'Hypothyroidism (expected after total — lifelong levothyroxine)'
        ],
        variations: [
            '<strong>Hemithyroidectomy/Lobectomy:</strong> One lobe + isthmus for unilateral disease',
            '<strong>Total Thyroidectomy:</strong> Entire gland for bilateral disease or cancer requiring RAI',
            '<strong>Completion Thyroidectomy:</strong> Remaining lobe after prior lobectomy (upstaged cancer)',
            '<strong>Central Neck Dissection:</strong> Often added for thyroid cancer — level VI nodes'
        ],
        comingSoon: false
    },
    {
        id: 'direct-laryngoscopy',
        name: 'Direct Laryngoscopy (DL) with Biopsy/Excision',
        specialty: 'ENT',
        complexity: 'Basic-Intermediate',
        duration: '20-60 minutes',
        overview: 'Endoscopic examination of the larynx, pharynx, and upper airway using rigid laryngoscopes and an operating microscope. Performed for diagnosis and biopsy of laryngeal lesions, removal of polyps/nodules, and evaluation of hoarseness, stridor, or airway abnormalities.',
        positioning: 'Supine with head extended (sniffing position). Head on donut. Patient at top of bed for laryngoscope suspension. Eyes taped and padded.',
        anesthesia: 'General anesthesia. May use small-diameter MLT (microlaryngoscopy tube) or jet ventilation. For laser cases: laser-safe ETT, FiO2 < 40%, saline-soaked pledgets around cuff.',
        anatomy: [
            'Epiglottis, vallecula, aryepiglottic folds',
            'True vocal cords (folds) and false vocal cords (vestibular folds)',
            'Arytenoid cartilages',
            'Subglottis and trachea',
            'Anterior commissure',
            'Pyriform sinuses',
            'Base of tongue'
        ],
        instruments: [
            'Laryngoscopes: various sizes (Lindholm, Dedo, Jako)',
            'Laryngoscope suspension system (Lewy arm or Benjamin-Lindholm)',
            'Operating microscope (set to 400mm focal length)',
            'Microlaryngeal instruments: micro cup forceps, scissors, graspers',
            'CO2 laser (if laser excision planned)',
            'Rigid Hopkins rod telescopes (0°, 30°, 70°)',
            'Suction tips (fine, Baron)',
            'Biopsy forceps'
        ],
        supplies: [
            'Laser-safe ETT (if laser used)',
            'Saline-soaked cottonoids (laser fire protection)',
            'Tooth guard/mouth protector',
            'Eye protection for patient (wet gauze) and OR team (laser goggles)',
            'Specimen containers (formalin for biopsy)',
            'Smoke evacuator (for laser)',
            'Sterile saline for irrigation'
        ],
        implants: [],
        steps: [
            'Position patient, protect teeth with guard, tape eyes',
            'Anesthesia places small ETT or prepares jet ventilation',
            'Surgeon inserts laryngoscope — advances to visualize larynx',
            'Suspend laryngoscope from suspension arm — hands-free view',
            'Bring in operating microscope — focus on larynx',
            'Systematic examination: base of tongue, vallecula, epiglottis, aryepiglottic folds, false cords, true cords, anterior commissure, subglottis, pyriform sinuses',
            'Biopsy any suspicious lesions — send to pathology in formalin',
            'Excise polyps, nodules, or papillomas with micro instruments or CO2 laser',
            'If laser: ensure all safety protocols active (signs on door, goggles, laser-safe ETT, wet drapes)',
            'Achieve hemostasis',
            'Remove microscope, remove suspension, remove laryngoscope carefully',
            'Check teeth — document any pre-existing damage',
            'Extubation — watch for laryngospasm'
        ],
        tips: [
            '⚠️ ANY airway case with possible tumor: Be ready for emergency trach at induction. Have IN THE ROOM: trach tray, knife loaded, Bovie, suction, Raytecs. Tell circulator: Bovie pad on, prep the neck. No exceptions.',
            'Tooth guard is NON-NEGOTIABLE — upper teeth are the fulcrum point. Document dentition pre-op.',
            'Have multiple laryngoscope sizes available — what works in clinic may not work under GA',
            'Operating microscope: pre-focus to 400mm BEFORE the case. Have it draped and ready.',
            'Micro instruments are DELICATE — handle with care. Tips bend easily.',
            'For laser: everyone in the room needs goggles. Wet drapes around the field. No open O2.',
            'Suction must be immediately available — blood pools fast and obscures the view',
            'Communicate with anesthesia about tube size and position — the laryngoscope may push the ETT'
        ],
        complications: [
            'Dental injury (most common malpractice complaint for this procedure)',
            'Laryngospasm on extubation',
            'Airway edema — may need to stay intubated or get steroids',
            'Bleeding from biopsy site',
            'Airway fire (laser cases — rare but catastrophic)',
            'Tongue numbness from compression by laryngoscope blade',
            'TMJ pain from jaw extension'
        ],
        variations: [
            '<strong>Diagnostic DL Only:</strong> Exam and biopsy without excision — shorter case',
            '<strong>Microlaryngoscopy with CO2 Laser:</strong> Precise ablation of lesions — requires full laser safety protocol',
            '<strong>Suspension Laryngoscopy with KTP Laser:</strong> Fiber-based laser through the scope — different setup than CO2',
            '<strong>Rigid Esophagoscopy/Bronchoscopy:</strong> Often combined as "triple endoscopy" for cancer staging'
        ],
        comingSoon: false
    },
    {
        id: 'temporal-bone-resection',
        name: 'Temporal Bone Resection with Free Flap (Voelker)',
        specialty: 'ENT',
        complexity: 'Complex',
        duration: '6-12 hours',
        overview: 'Resection of temporal bone tumors with microvascular free flap reconstruction. Highly complex procedure requiring neurosurgical coordination, mastoid drilling, and microscope work.',
        positioning: 'Supine or lateral, head on horseshoe headrest. Positioned for access to temporal bone and donor flap site.',
        anesthesia: 'General anesthesia with arterial line. Facial nerve monitoring. Coordination with neurosurgery if intracranial extension.',
        anatomy: [
            'Temporal bone — squamous, petrous, mastoid, tympanic portions',
            'Facial nerve (CN VII) — runs through temporal bone',
            'Internal carotid artery',
            'Jugular bulb and sigmoid sinus',
            'Middle ear structures',
            'Dura / middle cranial fossa floor'
        ],
        instruments: [
            'Neuroma tray',
            'Head & Neck tray',
            'Micro tray',
            'Anspach drill with burrs: 3 diamond, 4 diamond, 5 diamond, 4 cutting, 5 cutting',
            'Otomed suction irrigation tubing',
            'Operating microscope — drape ALL eyes so Dr. can use side by side',
            'Craniotomy tray (on standby)',
            'Coupler device (for micro anastomosis)'
        ],
        supplies: [
            'Microscope drape (drape all eyes)',
            'Irrigation pouch with extra suction tubing',
            'Free flap pack',
            'Med and small skin staplers',
            'Blue and white hemoclips',
            'Stockinette, Webril, tourniquet, Esmarch (for flap donor site)',
            'Sutures per surgeon preference',
            'JP drains'
        ],
        implants: [],
        steps: [
            'Position and prep — temporal bone and donor site',
            'Set up microscope — drape ALL eyes for side-by-side use',
            'Postauricular incision and exposure',
            'Mastoidectomy with Anspach drill — identify facial nerve',
            'Temporal bone resection — extent based on tumor margins',
            'Coordinate with neurosurgery if intracranial extension (crani tray on standby)',
            'Achieve hemostasis, control sigmoid sinus/jugular if involved',
            'Harvest free flap from donor site',
            'Microvascular anastomosis under microscope',
            'Inset flap into defect',
            'Close and dress'
        ],
        tips: [
            'Drape ALL eyes of the microscope — Dr. Voelker uses side-by-side viewing',
            'Have craniotomy tray on STANDBY — may need it if case extends intracranially',
            'Otomed suction irrigation tubing is specific to this case — make sure you have it',
            'Irrigation pouch with extra suction tubing — drilling creates a lot of debris',
            'Know your Anspach drill burr sizes: diamond for bone near vital structures, cutting for bulk removal',
            'This is a long case — have backup everything ready'
        ],
        complications: [
            'Facial nerve injury (CN VII palsy)',
            'CSF leak',
            'Hearing loss',
            'Sigmoid sinus or jugular vein hemorrhage',
            'Flap failure',
            'Intracranial infection'
        ],
        variations: [
            '<strong>Lateral Temporal Bone Resection:</strong> Removes external auditory canal, tympanic membrane, malleus, incus',
            '<strong>Subtotal/Total Temporal Bone Resection:</strong> More extensive, includes petrous bone, may require neurosurgical approach'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Voelker',
                prefs: [
                    'Neuroma tray',
                    'Otomed suction irrigation tubing',
                    'Drape ALL eyes of microscope for side-by-side viewing',
                    'Anspach drill: 3, 4, 5 diamond burrs; 4, 5 cutting burrs',
                    'Craniotomy tray on standby',
                    'Irrigation pouch with extra suction tubing'
                ]
            }
        ]
    },
    {
        id: 'robotic-glossectomy',
        name: 'ENT Robotic Surgery — Glossectomy (da Vinci TORS)',
        specialty: 'ENT',
        complexity: 'Complex',
        duration: '3-6 hours',
        overview: 'Transoral Robotic Surgery (TORS) using the da Vinci surgical system for partial or total resection of tongue/base of tongue tumors. The robot provides enhanced visualization and articulation in a confined space. Typically followed by a neck dissection. Photos shown are from a da Vinci Si (older model) — current setup uses the newer da Vinci Single Port (SP) system. This is NOT a sterile case in the traditional sense — you can use blue gloves to set up.',
        positioning: 'Supine, head on donut. Mouth open with retractor system (FK-WO-TORS laryngo pharyngoscope). Robot docked from the head of the bed.',
        anesthesia: 'General anesthesia with oral intubation. Secure ET tube with 2-0 silk x4 — usually done BEFORE draping.',
        anatomy: [
            'Base of tongue',
            'Lingual artery — CRITICAL: usually clipped during neck dissection BEFORE robot portion to prevent bleeding',
            'Oropharynx, vallecula, epiglottis',
            'Tonsillar pillars and fossa',
            'Hypoglossal nerve (CN XII)',
            'Glossopharyngeal nerve (CN IX)'
        ],
        instruments: [
            'da Vinci 5mm ENT tray',
            'ENT endoscopic retractor (Karl Storz)',
            'FK-WO-TORS laryngo pharyngoscope retractor set (standby)',
            'Kokot Gyrus robot tray',
            'Laser tray — has monopolar cord (or open cysto tray as alternative)',
            'Head & Neck tray (for neck dissection portion)',
            '0° and 30° 8.5mm da Vinci scopes (0° scope is most commonly used)',
            'Blue burner forcep (insulated DeBakey) — peel pack or may be in Kokot tray',
            'Monopolar robot tip (on DL cart)',
            'da Vinci Cautery Spatula Tip 5mm (REF 400160)',
            '3-arm robot drape',
            'Fred (suction)',
            'Suction Bovie'
        ],
        supplies: [
            'Split sheet drape',
            '3/4 sheet x2-3 (Kwon uses 2, Kokot uses 3)',
            'Asepto bulb x2',
            'Blue bowl',
            'Bovie tip for robot instruments',
            '30 Fr Robinson catheter or 24 Fr — cut in half, connect to Y connector, connect to suction (makes 2 AP suctions)',
            'Y connector + 3 suction tubing',
            '2-0 silk x2 (+ x4 for ET tube)',
            'White hemoclips',
            'Raytec sponges',
            'Laps',
            'Needle magnet/needle mat',
            'Instrument pouch x2',
            'Skin stapler',
            'Marking pen',
            'Mouth guard/tooth guard',
            'Floseal (hemostatic)',
            'Medicine cup',
            'Monopolar cord — gray cord for robot (peel packed)',
            'Head & Neck pack — DO NOT OPEN (will not use blades or Bovie from it)'
        ],
        implants: [],
        steps: [
            '<strong>⚠️ This is NOT a sterile case — can use blue gloves to set up</strong>',
            '<strong>Secure ET tube:</strong> 2-0 silk x4 to secure endotracheal tube — done BEFORE draping',
            '<strong>SURGEON ORDER VARIES:</strong>',
            '<strong>Dr. Kwon:</strong> Robot FIRST → then neck dissection 2nd. Needs 2nd split drape, 2 3/4 sheets, asepto for neck portion.',
            '<strong>Dr. Kokot:</strong> Maryland x2, Bovie. Split drape, asepto, 3/4 sheet x3',
            '<strong>Dr. Sinha:</strong> Neck dissection FIRST (clips lingual artery to prevent bleeding) → then robot. No need for extra drapes.',
            'Cut ends off 24 Fr red Robinson or 30 Fr — cut in half, connect to Y connector, then to suction. Creates 2 AP suctions on the field.',
            'Insert mouth retractor (FK-WO-TORS pharyngoscope or endoscopic retractor)',
            '<strong>DRAPE THE ROBOT (11 steps):</strong>',
            '1. Retract each arm before draping',
            '2. Line up to camera curve on the drape',
            '3. 4 gray clips go on',
            '4. Press button on arm to retract each arm — drape it through',
            '5. Put hands in the hand pockets. Pull drape up. Pull excess drape up from the bottom.',
            '6. Put magnets on red sensors — once magnets are on it will talk to you',
            '7. Velcro the belts at the top. Velcro the other belts.',
            '8. Put the clip on the arm. Then retract it back inside.',
            '9. Press the button on each arm. Each arm should go down on its own.',
            '10. Raise the arms back up.',
            '11. Click the arm drapes on each arm. You DON\'T want the yellow error.',
            'Dock the robot — arms into the oral cavity via the retractor',
            '<strong>Robot arm setup:</strong> Bovie on tumor side, Maryland on opposite side. Rat tooth on top, camera on bottom. Pull out arm coming from bottom.',
            '<strong>Camera orientation:</strong> Turn the camera to the TOP. When using 30° scope, put it 30 UP so you\'re looking at the base of tongue. Buttons facing robot side DOWN.',
            '<strong>On surgeon console:</strong> Press Camera → view from bottom',
            'Surgeon resects tumor from console with robotic instruments',
            'Achieve hemostasis with robotic cautery',
            'Undock robot',
            'Neck dissection (if not done first) — separate setup with H&N tray',
            'Close and dress'
        ],
        tips: [
            'NOT a sterile case — blue gloves OK for setup',
            'Secure ET tube with 2-0 silk BEFORE draping — don\'t forget this',
            'Know which surgeon you\'re working with — Kwon does robot first, Sinha does neck first. Totally different flow.',
            'Sinha does neck dissection FIRST to clip the lingual artery — prevents major bleeding during robot portion',
            'When draping the robot: if you get the yellow error on an arm drape, you messed up — redo it',
            'Magnets go on RED sensors — the robot will start talking to you once they\'re on',
            'Camera goes on BOTTOM, rat tooth on TOP, Bovie on tumor side, Maryland on opposite',
            '30° scope: 30 UP = looking at base of tongue. Buttons facing robot side DOWN.',
            'Head & neck pack is on the field but DO NOT OPEN the blades/Bovie from it — you won\'t use them',
            'Robinson catheter trick: cut in half → Y connector → suction = 2 AP suctions. Smart setup.',
            'OR 17 setup: set up on opposite side of door — will move table later by the door',
            'Flip camera when needed for different visualization angles'
        ],
        complications: [
            'Hemorrhage — lingual artery injury (life-threatening)',
            'Airway compromise post-op — tongue edema',
            'Orocervical fistula',
            'Dysphagia',
            'Aspiration',
            'Robot malfunction — must be prepared to convert to open',
            'Tooth/lip injury from retractor'
        ],
        variations: [
            '<strong>TORS Tonsillectomy:</strong> Same robot setup for tonsillar tumors',
            '<strong>TORS Supraglottic Laryngectomy:</strong> Robotic partial laryngectomy for select supraglottic tumors',
            '<strong>Robot + Neck Dissection:</strong> Almost always combined. Order depends on surgeon preference.'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Kwon',
                prefs: [
                    'Robot FIRST → neck dissection 2nd',
                    'Needs 2nd split drape, 2 3/4 sheets, asepto for neck portion',
                    'Bovie on tumor side, Maryland on other side',
                    'Flip camera'
                ]
            },
            {
                name: 'Dr. Kokot',
                prefs: [
                    'Maryland x2, Bovie',
                    'Split drape, asepto, 3/4 sheet x3',
                    'Kokot Gyrus robot tray'
                ]
            },
            {
                name: 'Dr. Sinha',
                prefs: [
                    'Neck dissection FIRST — clips lingual artery to prevent bleeding during robot portion',
                    'No need for extra drapes',
                    'Then robot 2nd'
                ]
            }
        ],
        images: [
            { src: 'images/robotic-glossectomy/or-room-overview.jpg', caption: 'OR setup for robotic partial glossectomy — da Vinci Si robot draped and docked' },
            { src: 'images/robotic-glossectomy/davinci-robot-docked.jpg', caption: 'da Vinci Si robot draped and positioned at head of bed' },
            { src: 'images/robotic-glossectomy/davinci-si-cart.jpg', caption: 'da Vinci Si vision cart' },
            { src: 'images/robotic-glossectomy/back-table-instruments.jpg', caption: 'Back table — H&N tray with instruments and endoscopic retractors' },
            { src: 'images/robotic-glossectomy/back-table-trays.jpg', caption: 'Back table — multiple trays staged and ready' },
            { src: 'images/robotic-glossectomy/back-table-retractors.jpg', caption: 'Back table — retractor systems and instrument trays' },
            { src: 'images/robotic-glossectomy/mayo-instruments-closeup.jpg', caption: 'Mayo stand close-up — key instruments on green towel' },
            { src: 'images/robotic-glossectomy/fkwotors-retractor-set.jpg', caption: 'FK-WO-TORS pharyngoscope retractor set with suspension system' },
            { src: 'images/robotic-glossectomy/cautery-spatula-tip-5mm.jpg', caption: 'da Vinci Cautery Spatula Tip 5mm (REF 400160)' }
        ]
    },
    {
        id: 'thyroplasty',
        name: 'Thyroplasty (Vocal Cord Medialization)',
        specialty: 'ENT',
        complexity: 'Intermediate',
        duration: '1-2 hours',
        overview: 'Surgical placement of an implant into the thyroid cartilage to medialize a paralyzed vocal cord, improving voice quality and swallowing. Patient is AWAKE during the procedure so the surgeon can hear the voice in real-time and adjust the implant position. Uses Vocom instruments and implant system.',
        positioning: 'Supine, head on donut, neck slightly extended. Does NOT turn bed 180°. Patient is AWAKE — local anesthesia only.',
        anesthesia: 'LOCAL anesthesia — lidocaine with epinephrine. Patient is AWAKE throughout so surgeon can assess voice during implant placement.',
        anatomy: [
            'Thyroid cartilage — window cut into cartilage for implant',
            'Vocal cords (true vocal folds)',
            'Paraglottic space',
            'Recurrent laryngeal nerve',
            'Strap muscles (sternohyoid, sternothyroid)',
            'Internal perichondrium'
        ],
        instruments: [
            'Head & Neck tray',
            'Vocom instruments (specialized thyroplasty set)',
            'Thyroplasty extras tray',
            'RemB drill with 4mm cutting burr drill bit',
            'Single prong hooks, double prong hooks',
            'Senn retractor, orbital retractor',
            'Tonsil (Jako), DeBakeys, Allis, Kellys',
            '2 Kellys — used to place the implant'
        ],
        supplies: [
            'Head & neck pack',
            'Basic green pack',
            '1000 drape',
            'Lidocaine with epinephrine (local anesthetic)',
            '2-0 silk pops',
            '3-0 Vicryl pops',
            '4-0 Monocryl',
            'Dermabond (skin closure)',
            'Tisseel or Surgicel — ASK surgeon first which they want',
            'SHIM — ALWAYS OPEN (locks implant in place)',
            'Implant + lock — nurse will open implant and lock'
        ],
        implants: [
            'Vocom vocal cord medialization implant (multiple sizes available — surgeon selects intra-op)',
            'SHIM (locks implant in place) — ALWAYS have this open',
            'Lock mechanism'
        ],
        steps: [
            '⚠️ Patient is AWAKE — local anesthesia only. They need to talk during the case.',
            'Inject lidocaine with epinephrine to neck',
            'Horizontal neck incision over thyroid cartilage',
            'Raise subplatysmal flap, divide strap muscles',
            'Expose thyroid cartilage — identify midline and landmarks',
            'Use RemB drill with 4mm cutting burr to create window in thyroid cartilage',
            'Identify inner perichondrium — do not violate it yet',
            'Place 4 retention sutures',
            'Trial implant sizing — surgeon asks patient to speak/phonate',
            'Adjust position based on voice quality — this is why the patient is awake',
            'Place final implant using 2 Kellys',
            'Nurse opens implant and lock',
            'Insert SHIM to lock implant in place',
            'Confirm voice improvement with patient phonation',
            'Close in layers — 3-0 Vicryl, 4-0 Monocryl',
            'Dermabond to skin'
        ],
        tips: [
            'Patient is AWAKE — keep the room quiet so surgeon can hear the voice',
            'ALWAYS open the SHIM — it locks the implant in place. Forgetting this is a disaster.',
            'Nurse opens the implant and lock — but YOU need to have the 2 Kellys ready to place it',
            'ASK about Tisseel vs Surgicel BEFORE the case — surgeon has a preference',
            'RemB drill with 4mm cutting burr — have it assembled and tested',
            '4 retention sutures go in — have silk pops loaded and ready',
            'Vocom instruments are specialized — know what\'s in the tray before the case',
            'Do NOT turn the bed 180° for this case',
            'This is a finesse case — surgeon is listening to the patient\'s voice while adjusting. Minimal noise.'
        ],
        complications: [
            'Airway compromise (rare but possible — implant can shift)',
            'Hematoma',
            'Implant extrusion',
            'Under- or over-medialization (voice still abnormal)',
            'Wound infection',
            'Cartilage fracture during window creation'
        ],
        variations: [
            '<strong>Type I Thyroplasty (Medialization):</strong> Most common — implant pushes vocal cord medially',
            '<strong>Injection Laryngoplasty:</strong> Office-based alternative — injectable filler (Radiesse, fat) into vocal cord. Temporary.',
            '<strong>Arytenoid Adduction:</strong> May be combined with thyroplasty for posterior glottic gap'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Sinha',
                prefs: [
                    'Head & Neck tray + Vocom instruments + Thyroplasty extras tray',
                    'RemB drill with 4mm cutting burr',
                    'Uses single prong hooks, double prong hooks, Senn retractor, orbital retractor',
                    'Tonsil (Jako), DeBakeys, Allis, Kellys from H&N tray',
                    '4 retention sutures',
                    '2 Kellys to place the implant',
                    'Nurse opens implant + lock. ALWAYS open SHIM.',
                    'Patient is AWAKE — do not turn bed 180°',
                    'Tisseel or Surgicel — ask first'
                ]
            }
        ],
        images: [
            { src: 'images/thyroplasty/vocom-instruments-implants.jpg', caption: 'Vocom thyroplasty instruments (blue-handled tray) and implant sizing box with multiple sizes' }
        ]
    },
    {
        id: 'sternotomy-thyroid',
        name: 'Sternotomy for Thyroid Exposure',
        specialty: 'ENT',
        complexity: 'Complex',
        duration: '3-5 hours',
        overview: 'Median sternotomy performed to access substernal thyroid goiter or thyroid tumors extending into the mediastinum. Combines ENT/head & neck approach with cardiothoracic-level chest exposure. Requires sternal saw, wiring for closure, and cardiac instruments on standby.',
        positioning: 'Supine, arms tucked, shoulder roll, neck extended.',
        anesthesia: 'General anesthesia with oral intubation. Arterial line. Type and cross for blood products.',
        anatomy: [
            'Sternum — manubrium, body, xiphoid process',
            'Thyroid gland — substernal extension into anterior mediastinum',
            'Great vessels — innominate artery, innominate vein, SVC',
            'Recurrent laryngeal nerves (bilateral)',
            'Trachea',
            'Pericardium'
        ],
        instruments: [
            'Ankeny tray (sternal retractor and cardiac instruments)',
            'Wire cutter, wire twister',
            'Sternal saw (Stryker System 6 battery-powered — blade is in heart room)',
            'Thoracic Kocher set',
            'Head & Neck tray',
            'Dental wire tray',
            'Bone wax'
        ],
        supplies: [
            'Sternal saw blade (get from HEART ROOM)',
            'Sternal wires (for closure)',
            'Bone wax (for sternal bleeding)',
            'Standard H&N sutures',
            'JP drains',
            'Chest tube (on standby)'
        ],
        implants: [
            'Sternal wires for closure'
        ],
        steps: [
            'Cervical incision — standard thyroidectomy approach first',
            'Determine if substernal extension requires sternotomy',
            'Median sternotomy — midline incision from sternal notch to xiphoid',
            'Use Stryker System 6 sternal saw to divide sternum',
            'Place Ankeny sternal retractor — expose mediastinum',
            'Careful dissection of thyroid from great vessels and trachea',
            'Complete thyroidectomy — deliver substernal component',
            'Hemostasis — bone wax on sternal edges',
            'Sternal closure with wires — wire twister to secure',
            'Layered soft tissue closure',
            'Cervical wound closure'
        ],
        tips: [
            'Sternal saw blade is kept in the HEART ROOM — send someone to get it before the case',
            'Bone wax must be ready for sternal edges — they bleed',
            'Know your wire twister and wire cutter — sternal closure is fast-paced',
            'Have chest tube on standby — rare but may need it',
            'Ankeny tray has the sternal retractor — make sure it\'s complete before the case',
            'This is a rare ENT case — most techs have never seen one. Know your cardiac instruments.'
        ],
        complications: [
            'Hemorrhage from great vessels',
            'Pneumothorax',
            'Sternal wound infection/dehiscence',
            'Recurrent laryngeal nerve injury',
            'Pericardial injury'
        ],
        variations: [
            '<strong>Partial Sternotomy:</strong> Manubriotomy — split only the upper sternum',
            '<strong>Combined with Total Thyroidectomy:</strong> Most common scenario'
        ],
        comingSoon: false,
        images: [
            { src: 'images/sternotomy/stryker-sternal-saw-case.jpg', caption: 'Heart — Stryker Sternal Saw 6 (Censitrac) sterilization case' },
            { src: 'images/sternotomy/stryker-sternum-saw.jpg', caption: 'Stryker System 6 sternum saw — battery-powered with blade attached' },
            { src: 'images/sternotomy/back-table-full.jpg', caption: 'Full back table setup — Ankeny tray, H&N tray, instruments staged' }
        ]
    },
    {
        id: 'kidney-transplant',
        name: 'Kidney Transplant (Recipient)',
        specialty: 'General',
        complexity: 'Complex',
        duration: '3-5 hours',
        overview: 'Recipient kidney transplant surgery — implantation of donor kidney into the iliac fossa. Back table preparation of the donor kidney is critical and done first. Set up ice with cold saline FIRST. Uses vascular clamps, Bookwalter retractor, and specialized vascular sutures.',
        positioning: 'Supine, arms out on arm boards. Foley catheter placed.',
        anesthesia: 'General anesthesia. Arterial line, central line. Type and cross-match verified.',
        anatomy: [
            'Iliac fossa — recipient site',
            'External iliac artery and vein — anastomosis sites',
            'Renal artery and vein of donor kidney',
            'Ureter — donor kidney to recipient bladder',
            'Bladder — ureteroneocystostomy site',
            'Peritoneum'
        ],
        instruments: [
            '<strong>Back Table (set up FIRST — ice with cold saline):</strong>',
            'Small back table with 3/4 sheet, large basin, medium clip, small clip, needle magnet, bowel bag (all in kidney back table pack)',
            '4-0 silk pop offs, 5-0 Prolene C-1, suture booties (all in pack)',
            '2-0 and 4-0 silk ties cut in half (in pack)',
            '<strong>Main Instruments:</strong>',
            'Basic liver tray',
            'Scanlan vascular instruments',
            'Shidban instruments',
            'Bookwalter retractor + Bookwalter extras + Shidban Bookwalter blades (small)',
            'Resection tray — instruments on roll',
            'Malleables, Deavers, Richardsons — place in space BETWEEN basic liver and Scanlan trays',
            'Finer DeBakeys — place on RIGHT side'
        ],
        supplies: [
            'Kidney back table pack (has basin, clips, needle magnet, bowel bag, sutures, ties)',
            'Drape double-high ring stand with 3/4 sheet — open sutures and ties on top',
            'Vessel loops and U-tapes — on 2nd mayo',
            'Ties — on 1st mayo',
            '<strong>Vascular sutures:</strong>',
            'C clamp → 5-0 Prolene C-1',
            'Small Satinsky → 6-0 Prolene BV',
            '2 Bulldogs (from specialty tray) → 6-0 PDS BV',
            '5-0 PDS C-1',
            'Stent ready — black dot at end'
        ],
        implants: [
            'Donor kidney',
            'Ureteral stent (black dot at end)'
        ],
        steps: [
            '<strong>SET UP ICE FIRST with cold saline — back table prep is critical</strong>',
            'Back table: prep donor kidney in cold saline on ice. Trim excess tissue, identify vessels.',
            'Drape double-high ring stand with 3/4 sheet. Open sutures and ties on top.',
            'Place ties on 1st mayo. V-loops and U-tapes on 2nd mayo.',
            'Place finer DeBakeys on right side.',
            'Place space between basic liver and Scanlan for malleables, Deavers, Richardsons.',
            'Place resection tray instruments on roll.',
            'Recipient: Lower abdominal/iliac fossa incision',
            'Expose external iliac artery and vein',
            'Vascular clamps placed — Satinsky on vein, C-clamp or bulldogs as needed',
            'Renal vein anastomosis to iliac vein (6-0 Prolene BV with small Satinsky)',
            'Renal artery anastomosis to iliac artery (5-0 Prolene C-1 with C-clamp)',
            'Release clamps — check perfusion (kidney should pink up)',
            'Ureteroneocystostomy — implant ureter into bladder over stent (black dot at end)',
            'Check for hemostasis and urine output',
            'Close in layers'
        ],
        tips: [
            'SET UP ICE FIRST — cold saline in basin on back table. The kidney needs to stay cold.',
            'Back table pack has everything organized — sutures, ties, clips, bowel bag all in pack',
            'Drape the double-high ring stand with 3/4 sheet — sutures and ties go on top for easy access',
            'Know your vascular clamp/suture pairings: C-clamp = 5-0 Prolene C-1, small Satinsky = 6-0 Prolene BV, bulldogs = 6-0 PDS BV',
            'Stent has a BLACK DOT at the end — have it ready before the ureter anastomosis',
            'Place finer DeBakeys on the RIGHT side — the surgeon will reach for them',
            'Leave space between the liver tray and Scanlan for malleables, Deavers, Richardsons'
        ],
        complications: [
            'Vascular thrombosis (artery or vein)',
            'Hemorrhage',
            'Urine leak (ureteroneocystostomy)',
            'Acute rejection',
            'Delayed graft function',
            'Wound infection'
        ],
        variations: [
            '<strong>Living Donor vs. Deceased Donor:</strong> Living donor kidney has shorter cold ischemia time',
            '<strong>Pediatric Recipient:</strong> May use aorta/IVC instead of iliac vessels'
        ],
        comingSoon: false,
        images: [
            { src: 'images/kidney-transplant/back-table-ice-basin.jpg', caption: 'Back table — ice basin with cold saline, clamps, needle counter for donor kidney prep' },
            { src: 'images/kidney-transplant/back-table-instruments.jpg', caption: 'Back table — vascular instruments, Biogel gloves, basins, sutures' },
            { src: 'images/kidney-transplant/back-table-full.jpg', caption: 'Full back table with all trays, gold-handled vascular instruments, marking pen' },
            { src: 'images/kidney-transplant/sutures-needlecount.jpg', caption: 'Back table — sutures laid out with needle counter, gold-handled clamps, asepto' },
            { src: 'images/kidney-transplant/drapes-gowns.jpg', caption: 'Drapes, gowns, and basin ring with supplies staged' },
            { src: 'images/kidney-transplant/retractors-trays.jpg', caption: 'Retractors, instrument trays, vascular clamps — massive back table setup' },
            { src: 'images/kidney-transplant/retractors-trays-2.jpg', caption: 'Back table angled view — Bookwalter, liver tray, Scanlan, resection instruments' }
        ]
    },
    {
        id: 'tympanoplasty',
        name: 'Tympanoplasty (Eardrum Repair)',
        specialty: 'ENT',
        complexity: 'Intermediate',
        duration: '1.5-3 hours',
        overview: 'Surgical repair of a perforated tympanic membrane using a fascia graft. Performed under microscope with micro ear instruments. Requires Stryker ear drill for mastoid work. Fascia is harvested, dried on a block under a heat lamp, then used as the graft.',
        positioning: 'Supine, head turned to expose operative ear. For LEFT ear cases in OR 19: bed turns 180°, you will be on the RIGHT side, basin and needles on right side of table. For RIGHT ear cases: opposite — you will be on LEFT side of patient.',
        anesthesia: 'General anesthesia. Local injection with lidocaine/epi — start with smaller blue hypo, then switch to 25-gauge needle.',
        anatomy: [
            'Tympanic membrane (eardrum)',
            'Middle ear cavity and ossicular chain',
            'Mastoid bone',
            'Facial nerve (CN VII) — runs through temporal bone',
            'Chorda tympani nerve',
            'Temporalis fascia (graft donor site)'
        ],
        instruments: [
            'Ear tray (updated 4/1/2023) — does NOT have ear Lempert elevator',
            'Middle ear tray',
            'DO NOT open neuroma tray (updated 4/1/2023) — doesn\'t have ear speculums',
            'Stryker ear drill with tubing',
            'Burrs: 6 cutting (start), 4 cutting, 4 diamond',
            'Layla bar (STANDBY) — uses snakes and malleables',
            'Microscope — drape FIRST',
            '<strong>Key instruments (pair them — most come in pairs):</strong>',
            'Rosen needle (CURVED), Barber needle (STRAIGHT)',
            'Sickle knife (called #1)',
            'Bishop forceps, cup forceps (L and R)',
            'Alligator forceps, Belluci scissors',
            'Crabtree, Gimmick, Weapon',
            'Curette, needle'
        ],
        supplies: [
            'Ear pack — has needle tip Bovie, Beaver blade, hypos',
            'Teflon tip Bovie',
            '4 small Gelfoam packets (ask nurse to get them) — mix with Ciprodex',
            'Cut 2 packets small (strips cut in fourths), cut 2 packets big (strips cut in half)',
            'Separate Gelfoam on tongue blades. Press soaked Gelfoam with Raytec to absorb excess. Roll into tiny rolls.',
            'Tongue blades (for Gelfoam prep and fascia drying)',
            'Micro irrigator',
            'Bone wax',
            '1018 pocket drape for suctions',
            '2 packs of towels — place on drill for heat lamp',
            '1/4 inch Penrose',
            '3-0 Vicryl SH x2, 5-0 Monocryl x2',
            'Towel clips for draping towels',
            '<strong>Medicine cups:</strong>',
            'RED cup = lidocaine with epi',
            'WHITE cup = Ciprodex',
            'YELLOW cup = Neo-Synephrine (for bleeders — cut up small cotton balls, roll into ball)'
        ],
        implants: [
            'Temporalis fascia graft (autologous — harvested from patient)'
        ],
        steps: [
            'Drape microscope FIRST',
            'All cords go on the patient — drill in pocket, suctions, Bovie, bipolar',
            'Inject local — start with smaller blue hypo, switch to 25-gauge needle',
            'Harvest temporalis fascia',
            'Place 2 packs of towels on drill for heat lamp. Put fascia on block, place on top of towels to DRY.',
            'Start setting up Gelfoam on tongue blades once Dr. asks for the dried fascia',
            'Prepare Gelfoam: 4 small packets mixed with Ciprodex. Cut 2 small (fourths), 2 big (halves). Roll into tiny rolls.',
            'Microscope in — expose tympanic membrane through ear canal',
            'Drill mastoid if needed — start with 6 cutting burr, then 4 cutting, then 4 diamond',
            'Elevate tympanomeatal flap',
            'Prepare bed for graft — freshen edges of perforation',
            'Place fascia graft (underlay or overlay technique)',
            'Pack Gelfoam rolls to support graft',
            'Replace tympanomeatal flap',
            'Pack ear canal with Gelfoam',
            'Close any incisions — 3-0 Vicryl, 5-0 Monocryl',
            'Dressing'
        ],
        tips: [
            '<strong>MICROSCOPE:</strong> Always side-to-side. LEFT ear = observer on RIGHT. RIGHT ear = observer on LEFT.',
            'Pair all instruments — most come in pairs on the mayo',
            'Rosen needle is CURVED. Barber needle is STRAIGHT. Sickle knife is called #1.',
            'Ear tray does NOT have Lempert elevator. Neuroma tray does NOT have ear speculums. Know your trays.',
            'Fascia drying: towels on drill → fascia on block → on top of towels → heat lamp. Takes time.',
            'Start Gelfoam prep when Dr. asks for the dried fascia — not before',
            'Neo-Synephrine (yellow cup) for bleeders: cut cotton balls small, roll into balls, soak in Neo-Synephrine',
            'Color-code your cups: RED = lido/epi, WHITE = Ciprodex, YELLOW = Neo-Synephrine',
            'Beaver blade is located in the MACERI CART — not in the ear tray',
            'For LEFT ear in OR 19: bed turns 180°, you\'re on the right. Right ear is opposite.'
        ],
        complications: [
            'Graft failure (perforation recurrence)',
            'Hearing loss (sensorineural or conductive)',
            'Facial nerve injury (CN VII)',
            'Chorda tympani injury (taste disturbance)',
            'Cholesteatoma recurrence',
            'Infection'
        ],
        variations: [
            '<strong>Type I (Myringoplasty):</strong> Graft to TM only — ossicles intact',
            '<strong>Type II-IV:</strong> Ossicular reconstruction needed (prosthesis)',
            '<strong>Canal Wall Up vs. Down Mastoidectomy:</strong> Depends on cholesteatoma extent'
        ],
        comingSoon: false,
        images: [
            { src: 'images/tympanoplasty/mayo-labeled.jpg', caption: 'Mayo stand — Bishop, cup forceps (L/R), alligator, Belluci, speculums (2-4), ear instruments labeled by hand' },
            { src: 'images/tympanoplasty/micro-labeled.jpg', caption: 'Micro instruments close-up — scissors, curette, needle, Crabtree, Gimmick, Weapon, sickle (#1), Beaver blade' },
            { src: 'images/tympanoplasty/mayo-full.jpg', caption: 'Full mayo layout — all micro ear instruments paired and labeled for identification' }
        ]
    },
    {
        id: 'dcr',
        name: 'DCR — Dacryocystorhinostomy (Tear Duct Surgery)',
        specialty: 'ENT',
        complexity: 'Intermediate',
        duration: '1-2 hours',
        overview: 'Dacryocystorhinostomy — creation of a new pathway between the lacrimal sac and nasal cavity to bypass a blocked nasolacrimal duct. Combines ophthalmology/oculoplastic approach with endoscopic sinus instruments. Dr. Zhang uses a specific DCR/orbit tray.',
        positioning: 'Supine, head on donut.',
        anesthesia: 'General anesthesia.',
        anatomy: [
            'Lacrimal sac and nasolacrimal duct',
            'Lacrimal bone — thin bone between orbit and nasal cavity',
            'Middle meatus of nasal cavity',
            'Medial canthal tendon',
            'Orbital contents'
        ],
        instruments: [
            'Dr. Zhang DCR/orbit tray (operative tray)',
            'Lacrimal probe tray (peel packed) — ENT Lacrimal Set Probes & Dilators 6 pieces',
            'Eye muscle tray',
            'ESS tray',
            'Puncto dilator',
            'Knot pusher (for stent)',
            'Jones tube set — get from OUTPATIENT (inside tray are glass tube implants)'
        ],
        supplies: [
            'ESS pack',
            'Stentube Intubation Set (REF LIS052) — lacrimal stent',
            'Standard ESS supplies'
        ],
        implants: [
            'Jones tube (glass tube implant — from outpatient)',
            'Lacrimal stent (Stentube Intubation Set LIS052)'
        ],
        steps: [
            'Position and prep — face and nose',
            'Endoscopic approach — identify middle meatus',
            'Probe and dilate lacrimal system (puncto dilator, lacrimal probes)',
            'Create bony window — remove lacrimal bone to expose lacrimal sac',
            'Open lacrimal sac — create mucosal flaps',
            'Place lacrimal stent through new ostium (knot pusher for stent)',
            'Or place Jones tube if indicated (glass tube from outpatient set)',
            'Confirm patency — irrigate',
            'Nasal packing if needed'
        ],
        tips: [
            'Jones tube set comes from OUTPATIENT — make sure it\'s ordered and in the room',
            'Lacrimal probe tray is peel packed — don\'t look for it in the regular tray storage',
            'Puncto dilator and knot pusher are specific to this case',
            'Glass tube implants are inside the Jones tube set tray — handle carefully',
            'Dr. Zhang DCR/orbit tray is the main operative tray'
        ],
        complications: [
            'Hemorrhage (nose or orbit)',
            'Stent migration or loss',
            'Restenosis (blockage recurs)',
            'Orbital fat prolapse',
            'CSF leak (rare)',
            'Infection'
        ],
        variations: [
            '<strong>External DCR:</strong> Skin incision approach — older technique',
            '<strong>Endoscopic DCR:</strong> Through the nose — preferred modern approach',
            '<strong>Conjunctivo-DCR with Jones Tube:</strong> For canalicular obstruction — bypasses entire lacrimal system'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Zhang',
                prefs: [
                    'Dr. Zhang DCR/orbit tray (operative tray)',
                    'Lacrimal probe tray (peel packed)',
                    'Eye muscle tray + ESS tray + ESS pack',
                    'Puncto dilator, knot pusher for stent',
                    'Jones tube set from outpatient (glass tube implants inside)'
                ]
            }
        ],
        images: [
            { src: 'images/dcr/lacrimal-probes-set.jpg', caption: 'ENT Lacrimal Set Probes & Dilators 6 pieces (947) — peel packed with CVD tip' },
            { src: 'images/dcr/zhang-tray-scope.jpg', caption: 'Dr. Zhang DCR tray with Bausch & Lomb scope and instruments' },
            { src: 'images/dcr/gold-hooks.jpg', caption: 'Gold-handled skin hooks, forceps, and fine instruments from DCR/orbit tray' },
            { src: 'images/dcr/gold-probes.jpg', caption: 'Gold lacrimal probes and dilators — various sizes laid out' },
            { src: 'images/dcr/back-table.jpg', caption: 'Back table — blue drape with AP Solutions warmer, instruments, packs staged' },
            { src: 'images/dcr/stentube-label.jpg', caption: 'Stentube Intubation Set (REF LIS052) — lacrimal stent package label' }
        ]
    },
    {
        id: 'radical-cystectomy',
        name: 'Radical Cystectomy with Urinary Diversion',
        specialty: 'Urology',
        complexity: 'Complex',
        duration: '6-10 hours',
        overview: 'Radical removal of the bladder for bladder cancer, followed by urinary diversion — either a neobladder (new bladder made from intestine) or an ileal conduit (external pee bag). One of the largest urology cases. Massive suture count and complex stent placement.',
        positioning: 'Supine, low lithotomy or split-leg. Arms on arm boards.',
        anesthesia: 'General anesthesia. Arterial line, central line. Epidural may be placed. Type and cross for blood products.',
        anatomy: [
            'Bladder — entire organ removed',
            'Ureters (bilateral) — reimplanted into diversion',
            'Iliac lymph nodes — pelvic lymphadenectomy',
            'Ileum — segment used for neobladder or conduit',
            'Urethra',
            'Prostate (in males) — removed en bloc',
            'Major pelvic vessels — iliac arteries and veins'
        ],
        instruments: [
            '<strong>Trays (with glove sizes):</strong>',
            '8.5 green, 8 Bio (Djaladat)',
            '8 green, 7.5 Bio',
            'Cysto pan 1-2',
            'Daneshmand tray',
            'Omni retractor',
            'LigaSure vessel sealing device'
        ],
        supplies: [
            '<strong>MASSIVE suture list — count carefully:</strong>',
            '1 PDS x2',
            '3-0 silk pops x2 (18 inch)',
            '3-0 Vicryl SH x10 UNDYED (pouch)',
            '4-0 Vicryl FS-2 x14 (cutter — for ureters)',
            '2-0 Vicryl CT1 x2',
            '3-0 silk x24',
            '3-0 chromic x2',
            '2-0 Monocryl x8 — DYED x4, UNDYED x4. Alternate: dyed, undyed, dyed, etc.',
            '1 PDS CTX x2 (closing)',
            '2-0 Monocryl CT2 x4',
            '2-0, 3-0 Ethilon',
            'Free needles (Ferguson\'s) — Schuckman uses these at end',
            'Insorb (subcuticular stapler)',
            '<strong>Silk ties:</strong> 0, 2-0, 3-0, 4-0',
            '<strong>Blades:</strong> #10, #11, #15',
            '<strong>Clips:</strong> green x11, blue x1, white x3, yellow x4',
            '<strong>Staplers:</strong> GIA 55 x3 reloads, TX60 blue',
            '19 round Blake drain',
            '28 Fr chest tube',
            'Lube',
            '60cc cath tip x2 (in pack)',
            'Hematuria catheter 24 (lube tip)',
            'Mastisol',
            '1/4 inch Penrose x2 — cut into thirds',
            'Anal fistula probe instrument — have ready',
            '<strong>Stents:</strong> Blue and red. RED = RIGHT side. Reverse the guide wire direction (take out glide wire, reverse).'
        ],
        implants: [
            'Blue stent (left ureter)',
            'Red stent (right ureter) — RED = RIGHT',
            'GIA 55 stapler with reloads',
            'TX60 blue stapler'
        ],
        steps: [
            'Position, prep, and drape',
            'Midline abdominal incision',
            'Explore abdomen — assess tumor extent',
            'Pelvic lymphadenectomy — bilateral iliac nodes',
            'Mobilize bladder — divide urachus, lateral pedicles',
            'LigaSure for vessel sealing throughout',
            'Divide ureters — mark with clips',
            'Complete cystectomy (males: prostatectomy en bloc)',
            'Specimen out',
            '<strong>URINARY DIVERSION:</strong>',
            '<strong>For Neobladder:</strong> Isolate ileal segment, detubularize, create pouch from intestine. Anastomose to urethra.',
            '<strong>For Ileal Conduit:</strong> Short ileal segment, anastomose ureters, create stoma.',
            '<strong>URETERAL STENT PLACEMENT (Ileal Conduit):</strong>',
            '4-0 Vicryl PS-2 x12 — 6 on each side',
            'Trash the 1st stitch. Save other 5 tails.',
            'Blue stent first (LEFT side):',
            '  1. Take the tail',
            '  2. Give the stitch',
            '  3. Give the Gerald',
            '  4. Repeat 5 times',
            '  5. Then 5 tails total',
            'Red stent (RIGHT side) — repeat same process',
            'Reverse guide wire direction for stents — take out glide wire and reverse',
            'GIA 55 for bowel anastomosis (3 reloads)',
            'Re-establish bowel continuity',
            'Place 19 Blake drain',
            'Place 28 Fr chest tube if needed',
            'Close: 1 PDS CTX x2 for fascia',
            '2-0 Monocryl for subcutaneous — alternate dyed/undyed',
            'Insorb or Ethilon for skin'
        ],
        tips: [
            'This is one of the BIGGEST cases in the hospital — be ready for 6-10 hours',
            'Suture count is massive — organize everything BEFORE the case. Use the ring stand.',
            'RED = RIGHT for stents. Blue = Left. Do not mix these up.',
            'Reverse the guide wire direction on stents — take out glide wire, flip it',
            'Ureteral stent process: trash the 1st stitch, save 5 tails. Give tail → stitch → Gerald → repeat x5. Blue (left) first, then red (right).',
            'Monocryl 2-0: alternate DYED then UNDYED — the surgeon expects this order',
            '4-0 Vicryl FS-2 x14 is for the ureters (cutter) — have these separated and ready',
            'Clip count: green x11, blue x1, white x3, yellow x4 — count before AND after',
            'Have anal fistula probe instrument ready — surgeon may need it',
            'Schuckman uses free needles (Ferguson\'s) at the end',
            'GIA 55 with 3 reloads + TX60 blue — know your staplers'
        ],
        complications: [
            'Hemorrhage (large pelvic vessels)',
            'Ureteral leak or stricture',
            'Bowel leak (anastomosis failure)',
            'Ileus (prolonged)',
            'DVT / PE',
            'Infection / sepsis',
            'Neobladder dysfunction',
            'Stoma complications (conduit)'
        ],
        variations: [
            '<strong>Neobladder (Orthotopic):</strong> New bladder made from intestine — patient voids through urethra. More complex construction.',
            '<strong>Ileal Conduit:</strong> Short ileal segment — ureters drain to external stoma bag. Simpler but permanent bag.',
            '<strong>Robotic Radical Cystectomy:</strong> Same procedure done robotically — growing in popularity'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Djaladat',
                prefs: [
                    'Gloves: 8.5 green, 8 Bio'
                ]
            },
            {
                name: 'Dr. Daneshmand',
                prefs: [
                    'Daneshmand tray',
                    'Gloves: 8 green, 7.5 Bio'
                ]
            },
            {
                name: 'Dr. Schuckman',
                prefs: [
                    'Uses free needles (Ferguson\'s) at the end'
                ]
            }
        ],
        images: [
            { src: 'images/cystectomy/back-table-massive.jpg', caption: 'Massive back table setup — multiple clamp trays, basins, suture packets, needle counters' },
            { src: 'images/cystectomy/kidney-back-table-stents.jpg', caption: 'Back table — gold-handled vascular instruments, stents, sutures, needle counter, GIA stapler' },
            { src: 'images/cystectomy/mayo-yellow-clamps.jpg', caption: 'Mayo stand mid-case — yellow-handled Babcock/Allis clamps loaded, retractors stacked behind' },
            { src: 'images/cystectomy/or-team-working-full.jpg', caption: 'Full OR view mid-case — team working, all clamps and instruments laid out, asepto and basins' },
            { src: 'images/cystectomy/bookwalter-retractor-blades.jpg', caption: 'Bookwalter retractor blades stacked in tray — Deavers, malleables, retractor arms' }
        ]
    },
    {
        id: 'robotic-prostatectomy',
        name: 'Robotic Radical Prostatectomy (da Vinci)',
        specialty: 'Urology',
        complexity: 'Complex',
        duration: '2-4 hours',
        overview: 'Robot-assisted laparoscopic radical prostatectomy for prostate cancer using the da Vinci Xi surgical system. One of the most common robotic procedures performed. Includes pelvic lymph node dissection in select patients. Minimally invasive with faster recovery than open approach.',
        positioning: 'Supine, steep Trendelenburg (30°+). Arms tucked at sides, secured. Lithotomy with Allen stirrups or split-leg. Foley catheter placed. Bean bag or gel pads to prevent sliding.',
        anesthesia: 'General anesthesia. Arterial line optional. OG tube to decompress stomach.',
        anatomy: [
            'Prostate gland — sits below bladder, surrounds urethra',
            'Seminal vesicles — posterior to bladder base',
            'Vas deferens',
            'Neurovascular bundles (NVB) — lateral to prostate. Preserve if possible for potency.',
            'Dorsal venous complex (DVC)',
            'Bladder neck',
            'Urethra — distal to prostate apex',
            'Obturator nerve and vessels (lymph node dissection)',
            'External iliac vessels',
            'Rectum — posterior, danger zone'
        ],
        instruments: [
            '<strong>Robot:</strong>',
            'da Vinci Xi surgical system',
            '4-arm robot drape',
            'da Vinci 0° and 30° camera/scope (8.5mm)',
            '12mm camera trocar + 8mm robotic trocars x3-4',
            '12mm assistant port',
            '<strong>Robotic Instruments:</strong>',
            'Maryland bipolar forceps',
            'Monopolar curved scissors (hot shears)',
            'ProGrasp forceps',
            'Large needle driver x2',
            'Hem-o-lok clip applier (ML size)',
            '<strong>Bedside/Assistant Instruments:</strong>',
            'Laparoscopic suction/irrigator',
            'Laparoscopic clip applier (Hem-o-lok)',
            'Specimen retrieval bag (Endo Catch)',
            'Carter-Thomason port closure device',
            'Ring forceps, Kocher clamps'
        ],
        supplies: [
            '<strong>Sutures:</strong>',
            '3-0 Vicryl (for peritoneum, port sites)',
            '3-0 V-Loc or barbed suture (for vesicourethral anastomosis — running)',
            '2-0 Vicryl (for fascia)',
            '4-0 Monocryl (for skin)',
            '0 Vicryl on CT-1 (for port fascial closure)',
            '<strong>Clips:</strong>',
            'Hem-o-lok clips ML x2-3 cartridges',
            'Weck clips (for lymphatics)',
            '<strong>Other:</strong>',
            'Veress needle (for insufflation)',
            'CO2 insufflation tubing',
            'Laparoscopic laps',
            'Specimen bag (Endo Catch 15mm)',
            'Foley catheter (18-20Fr) — placed at start AND new one at end',
            'JP drain (19 Blake)',
            'Syringe 60cc with saline (bladder fill to test anastomosis)',
            'Surgicel or Floseal (hemostasis)',
            'Ice for specimen'
        ],
        implants: [],
        steps: [
            'Position — steep Trendelenburg, arms tucked, Foley placed',
            'Establish pneumoperitoneum — Veress needle or Hassan technique',
            'Place trocars — camera port (periumbilical), 3-4 robotic ports, 1 assistant port',
            'Dock da Vinci Xi robot',
            'Drop the bladder — incise peritoneum, develop space of Retzius',
            'Pelvic lymph node dissection if indicated — obturator fossa',
            'Control dorsal venous complex (DVC) — suture ligate or staple',
            'Incise endopelvic fascia bilaterally',
            'Bladder neck dissection — anterior then posterior. Identify ureteral orifices.',
            'Dissect seminal vesicles and vas deferens',
            'Develop plane posterior to prostate — STAY ANTERIOR to Denonvilliers fascia (protect rectum)',
            'Nerve-sparing dissection if planned — careful release of NVB from prostate',
            'Apical dissection — divide DVC, cut urethra at prostate apex',
            'Specimen in Endo Catch bag',
            'Vesicourethral anastomosis — running V-Loc/barbed suture (bladder neck to urethral stump)',
            'Fill bladder with saline via Foley — test anastomosis for leak',
            'Place JP drain (19 Blake) in pelvis',
            'Undock robot, remove trocars under vision',
            'Close fascia at 12mm port sites (Carter-Thomason)',
            'Skin closure — 4-0 Monocryl',
            'Place new Foley catheter (leaves OR with Foley in place)'
        ],
        tips: [
            'Steep Trendelenburg — make sure patient is SECURED. Bean bag, chest strap, gel pads. Patient slides if not properly positioned.',
            'Arms MUST be tucked — robot arms need clearance. Check for IV access before tucking.',
            'Have Hem-o-lok clips loaded and ready — surgeon uses a LOT of these',
            'Keep laparoscopic laps counted — they go inside the abdomen',
            'Specimen bag goes in through 12mm assistant port — have it ready before the prostate is free',
            'Anastomosis is the critical step — surgeon needs quiet, steady instrument exchange',
            'Test the anastomosis with saline via Foley — if it leaks, more sutures needed',
            'New Foley at the end — the one placed at start may be damaged during dissection',
            'Robot draping: follow the standard da Vinci draping protocol — magnets on red sensors, arm drapes click on',
            'Know your robotic instruments — Maryland (bipolar), hot shears (monopolar scissors), ProGrasp, needle drivers',
            '⚠️ BASELINE — needs Rich\'s real setup details. Send corrections!'
        ],
        complications: [
            'Hemorrhage (DVC, iliac vessels)',
            'Rectal injury (posterior dissection)',
            'Ureteral injury',
            'Anastomotic leak',
            'Erectile dysfunction (NVB injury)',
            'Urinary incontinence',
            'Lymphocele (post lymph node dissection)',
            'Port site hernia',
            'DVT / PE'
        ],
        variations: [
            '<strong>Nerve-Sparing vs. Non-Nerve-Sparing:</strong> Preserve NVB for potency — depends on cancer location/grade',
            '<strong>Extended Pelvic Lymph Node Dissection:</strong> For higher-risk cancer',
            '<strong>Retzius-Sparing (Posterior Approach):</strong> Alternate technique — may improve early continence',
            '<strong>Open Radical Prostatectomy:</strong> Traditional approach — rare now with robot availability'
        ],
        comingSoon: false,
        images: [
            { src: 'images/robotic-prostatectomy/camera-scope-draped-ports.jpg', caption: 'da Vinci camera/scope draped with ports and cannulas ready on side table' },
            { src: 'images/robotic-prostatectomy/back-table-full-davinci-xi.jpg', caption: 'Back table with da Vinci Xi visible in background — instruments, drapes, laps staged' },
            { src: 'images/robotic-prostatectomy/robotic-tray-cannulas-drapes.jpg', caption: 'Robotic instrument tray — yellow-capped cannulas, trocars, robot drapes' },
            { src: 'images/robotic-prostatectomy/robotic-tray-cannulas-closeup.jpg', caption: 'Close-up — robotic cannulas, trocars, yellow caps, camera port, instrument arms' },
            { src: 'images/robotic-prostatectomy/back-table-clips-laps-instruments.jpg', caption: 'Back table — Hem-o-lok clip rack, laps stacked, ring forceps, asepto, basin' }
        ]
    },
    {
        id: 'sialendoscopy',
        name: 'Sialendoscopy (Salivary Gland Endoscopy)',
        specialty: 'ENT',
        complexity: 'Intermediate',
        duration: '1-2 hours',
        overview: 'Minimally invasive endoscopic procedure to diagnose and treat salivary gland duct obstruction (stones, strictures) using tiny sialendoscopes inserted through the duct opening in the mouth. The scrub tech irrigates continuously during the procedure. Disposables are located in the ENT section on the 3rd floor.',
        positioning: 'Supine, head on donut. Mouth open with mouth gag for access to salivary duct.',
        anesthesia: 'General anesthesia.',
        anatomy: [
            'Parotid (Stensen\'s) duct — opens opposite upper 2nd molar',
            'Submandibular (Wharton\'s) duct — opens sublingual caruncle',
            'Salivary gland ductal system',
            'Lingual nerve (near Wharton\'s duct)',
            'Facial nerve (parotid gland region)'
        ],
        instruments: [
            '<strong>Sialendoscope Set:</strong>',
            '3 scopes (different sizes)',
            'Adapters for different types of light cords',
            '2 graspers',
            'Camera and light cord',
            '<strong>Disposables (located ENT section, 3rd floor):</strong>',
            'Cook Kolenda Salivary Access Introducer Set 5.0Fr (REF SDAS-5.0-18)',
            'Cook Salivary Access Dilator Set 4.0-7.0Fr (REF SDDS-18-20-HC)',
            'Cook NGage Salivary Stone Extractor (REF SSEB-1.7-115-B)',
            'Karl Storz disposable stone extractors — 0.4mm and 0.6mm sizes (REF 11575K for 0.6mm)',
            'Storz drill (looks like a long wire with drill tip — no machine required, Dr. twists with fingers)',
            '<strong>Just In Case (standby):</strong>',
            'Head & Neck tray',
            'Head & Neck pack',
            'Mouth gag'
        ],
        supplies: [
            'K50 tubing (for irrigation)',
            '30cc syringe x2 (scrub will be irrigating)',
            'Saline for continuous irrigation',
            'Camera and light cord',
            'Adapters for light cord'
        ],
        implants: [],
        steps: [
            'Position patient, GA induced, mouth open',
            'Identify salivary duct opening (Stensen\'s or Wharton\'s)',
            'Dilate duct with Cook dilator set (4.0Fr → 5.0Fr → 6.0Fr → 7.0Fr)',
            'Insert introducer (Cook Kolenda Salivary Access Introducer Set)',
            'Advance sialendoscope through the duct',
            '<strong>SCRUB IRRIGATES CONTINUOUSLY</strong> — use K50 tubing with 30cc syringes',
            'Navigate ductal system under direct visualization',
            'If stone found: use Cook NGage stone extractor or Karl Storz stone extractor (0.4 or 0.6mm)',
            'If stone too large: use Storz drill (long wire with drill tip — Dr. twists manually with fingers)',
            'Extract stone fragments with basket/grasper',
            'Final irrigation and scope survey to confirm clearance',
            'Remove scope'
        ],
        tips: [
            'Disposables are on the 3RD FLOOR in the ENT section — get them BEFORE the case',
            'YOU are irrigating the whole time — K50 tubing with 30cc syringes. Stay focused.',
            'The drill is NOT a powered drill — it\'s a long wire with a drill tip that the surgeon twists manually with their fingers',
            'Have BOTH sizes of Storz stone extractors ready (0.4mm and 0.6mm)',
            'Cook dilators go from 4.0Fr up to 7.0Fr — sequential dilation',
            'There are 3 scopes in the sialendoscope set — different sizes for different ducts',
            'Adapters are needed for the light cord — the scopes may use different connectors',
            'Head & Neck tray and mouth gag are just-in-case — may not need to open them',
            'This is a delicate case — these scopes are tiny and expensive. Handle with extreme care.'
        ],
        complications: [
            'Duct perforation',
            'Duct stenosis/stricture',
            'Incomplete stone removal',
            'Gland swelling',
            'Infection (sialadenitis)',
            'Nerve injury (lingual nerve for submandibular)'
        ],
        variations: [
            '<strong>Parotid Sialendoscopy:</strong> Through Stensen\'s duct — lateral cheek',
            '<strong>Submandibular Sialendoscopy:</strong> Through Wharton\'s duct — floor of mouth',
            '<strong>Combined Approach:</strong> Sialendoscopy + external incision for large stones',
            '<strong>Lithotripsy:</strong> Laser or pneumatic stone fragmentation through the scope'
        ],
        comingSoon: false,
        images: [
            { src: 'images/sialendoscopy/sialendoscope-tray.jpg', caption: 'Sialendoscope tray with scopes, graspers, and camera setup on back table' },
            { src: 'images/sialendoscopy/storz-stone-extractor-06.jpg', caption: 'Karl Storz Stone Extractor 0.6mm (REF 11575K) — disposable, peel packed' },
            { src: 'images/sialendoscopy/cook-introducer-set.jpg', caption: 'Cook Kolenda Salivary Access Introducer Set 5.0Fr (REF SDAS-5.0-18)' },
            { src: 'images/sialendoscopy/cook-ngage-stone-extractor.jpg', caption: 'Cook NGage Salivary Stone Extractor (REF SSEB-1.7-115-B) with basket' },
            { src: 'images/sialendoscopy/storz-scope-peel-pack-and-dilators.jpg', caption: 'Storz sialendoscope peel pack and Cook Salivary Access Dilator Set 4.0-7.0Fr (REF SDDS-18-20-HC)' }
        ]
    },
    {
        id: 'organ-procurement',
        name: 'Organ Procurement (Lungs, Kidneys, Liver, Pancreas)',
        specialty: 'General',
        complexity: 'Complex',
        duration: '3-6 hours',
        overview: 'Multi-organ procurement from a deceased donor. Recovery of lungs, kidneys, liver, and pancreas for transplantation. Requires massive ice preparation, sternal saw for chest access, and coordination with multiple transplant teams. Make PLENTY of ice — 4 basins filled.',
        positioning: 'Supine, arms out. Full body prep — chin to pubis, table to table.',
        anesthesia: 'Patient is brain-dead donor on ventilator support. Anesthesia maintains hemodynamics and ventilation until cross-clamp.',
        anatomy: [
            'Lungs — bilateral',
            'Heart and great vessels (aorta, IVC, SVC)',
            'Liver — right and left lobes, portal triad, hepatic veins',
            'Kidneys — bilateral, renal arteries and veins',
            'Pancreas — head, body, tail, splenic vessels',
            'Abdominal aorta and IVC — for perfusion cannulation',
            'Sternum (for chest access)'
        ],
        instruments: [
            'Liver tray',
            'Liver resection tray',
            'Morse retractor',
            'Sternal saw (Microaire) — GET THE RIGHT SAW BLADE',
            'Bone wax (for sternum)',
            'Bronchoscopy set — have set up with AV tech'
        ],
        supplies: [
            '<strong>ICE — Make PLENTY. 4 basins filled with ice.</strong>',
            'Laparotomy drape',
            'Ioban x2',
            'Slush drape',
            '<strong>Cysto tubing:</strong>',
            '2-bag cysto tubing (big tubing)',
            '2-in-1 connector',
            '<strong>Legacy boxes (4 total):</strong>',
            'One Legacy has Rumels',
            'One Legacy has drapes',
            'One Legacy has custom tubing',
            'One Legacy has U-tapes',
            '<strong>Sutures/Ties:</strong>',
            '2-0, 4-0 silk ties — plenty',
            '2-0 silk pops',
            '4-0 Prolene SH1',
            '2 Ethilon',
            'Rumels x2',
            '<strong>Clips:</strong> Automatic clips — small, medium, AND large',
            '<strong>Other:</strong>',
            'Vessel loops — blue and red',
            'U-tapes x6 (plus whatever is in Legacy box)',
            'Bone wax'
        ],
        implants: [],
        steps: [
            '<strong>PREP:</strong> Make PLENTY of ice — fill 4 basins. This is critical for organ preservation.',
            'Open Legacy boxes — sort: one has Rumels, one has drapes, one has custom tubing, one has U-tapes',
            'Have bronch set up with AV tech',
            'Prep chin to pubis, table to table',
            'Midline incision — xiphoid to pubis',
            'Median sternotomy with Microaire sternal saw — make sure you have the RIGHT blade',
            'Bone wax on sternal edges',
            'Place Morse retractor for abdominal exposure',
            'Systematic dissection and mobilization of organs',
            'Identify and isolate all major vessels — vessel loops (blue and red) and U-tapes for identification',
            'Cannulate aorta and IVC for cold perfusion',
            'Cross-clamp aorta — START THE CLOCK',
            'Cold perfusion with preservation solution — pack organs with ice/slush immediately',
            'Rapid sequential organ removal: heart/lungs first, then liver, then pancreas, then kidneys',
            'Each organ goes into cold preservation solution on ice in separate basins',
            'Close donor'
        ],
        tips: [
            'ICE ICE ICE — make more than you think you need. 4 basins MINIMUM. Organs must stay cold.',
            'GET THE RIGHT SAW BLADE for the Microaire — check before the case, not during',
            'Know your Legacy boxes: Rumels, drapes, custom tubing, U-tapes — each box has different contents',
            'Have ALL three sizes of automatic clips ready — small, medium, AND large. You\'ll use them all.',
            'Plenty of silk ties — 2-0 and 4-0. You will go through a LOT.',
            'Cysto tubing: 2-bag setup with big tubing and 2-in-1 connector — this is for perfusion',
            'Multiple transplant teams may be in the room — it gets crowded. Stay organized.',
            'Once cross-clamp happens, everything moves FAST. Have all your supplies ready BEFORE that moment.',
            'Bronch set needs to be ready with AV tech — for lung assessment'
        ],
        complications: [
            'Organ damage during procurement (renders organ unusable)',
            'Vascular injury during dissection',
            'Warm ischemia time (delay = organ damage)',
            'Inadequate perfusion/cooling'
        ],
        variations: [
            '<strong>Single Organ Procurement:</strong> Only kidneys, or only liver — simpler setup',
            '<strong>DCD (Donation after Cardiac Death):</strong> Different timing — procurement happens after cardiac arrest, not brain death. More time-critical.',
            '<strong>Heart Procurement:</strong> Added to multi-organ — cardiac team handles'
        ],
        comingSoon: false,
        images: [
            { src: 'images/organ-procurement/back-table-clamps-ice.jpg', caption: 'Back table — long DeBakey forceps, gold-handled clamps on roll, basins with ice, needle counter' },
            { src: 'images/organ-procurement/back-table-drapes-tubing-trays.jpg', caption: 'Full procurement setup — stacked green towels/drapes, cysto tubing in packaging, sternal saw blade, instrument trays loaded with clamps' },
            { src: 'images/organ-procurement/sternal-retractor-saw-cysto-trays.jpg', caption: 'Finochietto sternal retractor, Microaire sternal saw with blade, cysto tubing/bags, liver and resection trays with long clamps' },
            { src: 'images/organ-procurement/procurement-back-table-clamps-laps.jpg', caption: 'Back table — peripheral vascular tray loaded with clamps, Deaver retractors, laps stacked in basin, needle counter' },
            { src: 'images/organ-procurement/ice-machines-organ-coolers-usc.jpg', caption: 'Ice machines filled with slush, organ transport coolers labeled LEFT KIDNEY and PANCREAS at USC Keck' },
            { src: 'images/organ-procurement/mayo-vascular-clamps-rumels-syringes.jpg', caption: 'Procurement mayo — delicate vascular clamps, Rumels, DeBakeys, bulldog clamps, syringes for perfusion' }
        ]
    },
    {
        id: 'fem-tib-bypass',
        name: 'Femoral to Tibial Artery Bypass Graft Revision',
        specialty: 'Vascular',
        complexity: 'Complex',
        duration: '3-5 hours',
        overview: 'Revision of a femoral-to-tibial artery bypass graft for peripheral arterial disease. Uses either autologous vein (harvested from tibial area) or PTFE synthetic graft. Vein graft is preferred — taken from tibia and anastomosed to femoral artery with 7-0 Prolene.',
        positioning: 'Supine, operative leg prepped circumferentially. Leg slightly externally rotated, knee slightly flexed. Vascular bump (cotton roll) under knee.',
        anesthesia: 'General or regional (spinal/epidural). Heparin given before clamping.',
        anatomy: [
            'Common femoral artery → superficial femoral artery → popliteal artery',
            'Tibial arteries — anterior tibial, posterior tibial, peroneal',
            'Greater saphenous vein (may be used as graft)',
            'Tibial veins (donor vein site in this case)',
            'Inguinal ligament, femoral triangle',
            'Popliteal fossa'
        ],
        instruments: [
            'Aneurysm clip tray',
            'Peripheral vascular tray',
            'Fine vascular forceps (DeBakeys, Geralds)',
            'Vascular clamps (bulldog, Satinsky, aneurysm clips)',
            'Tunneler (for graft passage)'
        ],
        supplies: [
            '<strong>Clips:</strong> Red, blue, AND orange clips',
            '<strong>Silk ties:</strong> 2-0, 3-0, 4-0 — plenty',
            '<strong>Sutures:</strong>',
            '7-0 Prolene BV1435 (for anastomosis — vein to femoral)',
            '2-0 Vicryl CT1',
            '2 Ethilon (skin)',
            '<strong>Other:</strong>',
            '#11 blade',
            'U-tape, vessel loops',
            'Vascular bump (cotton roll) — under knee for positioning',
            'Split sheet x2',
            'Ioban',
            'Skin stapler',
            'Peanuts',
            'Dermabond'
        ],
        implants: [
            'Autologous vein graft (harvested from tibia) — preferred',
            'PTFE synthetic graft — alternative if no suitable vein'
        ],
        steps: [
            'Position — vascular bump under knee, leg externally rotated',
            'Prep entire operative leg circumferentially',
            'Drape with split sheet x2, Ioban',
            'Incision over femoral artery — expose proximal anastomosis site',
            'Incision over tibial artery — expose distal anastomosis site',
            'Harvest vein from tibia for graft (or open PTFE graft)',
            'Heparinize patient — coordinate with anesthesia',
            'Clamp vessels — proximal and distal control',
            'Take down old graft/revision of previous bypass',
            'Anastomose vein graft to femoral artery — 7-0 Prolene BV1435',
            'Tunnel graft to distal site',
            'Anastomose graft to tibial artery — 7-0 Prolene',
            'Release clamps — check flow with Doppler',
            'Check for hemostasis at all anastomosis sites',
            'Close in layers — 2-0 Vicryl, stapler or Ethilon for skin',
            'Dermabond, dressings'
        ],
        tips: [
            'Vein graft from tibia is preferred over PTFE — better long-term patency',
            '7-0 Prolene BV1435 for anastomosis — have multiple packs ready, these are tiny sutures',
            'Vascular bump (cotton roll) under the knee — proper positioning matters',
            'Have ALL clip colors ready: red, blue, AND orange',
            'Heparinize BEFORE clamping — coordinate timing with anesthesia',
            'Check Doppler signals distally after graft is open — confirm flow',
            'Peanuts are useful for dissection around vessels — have them loaded'
        ],
        complications: [
            'Graft thrombosis/occlusion',
            'Hemorrhage (anastomotic leak)',
            'Graft infection',
            'Wound infection/dehiscence',
            'Limb ischemia (if graft fails)',
            'DVT',
            'Nerve injury (peroneal nerve near knee)'
        ],
        variations: [
            '<strong>Vein Graft (Autologous):</strong> Greater saphenous or tibial vein — reversed or in-situ',
            '<strong>PTFE Graft:</strong> Synthetic — used when no suitable vein available',
            '<strong>Fem-Pop Bypass:</strong> Femoral to popliteal — above or below knee',
            '<strong>Fem-Fem Bypass:</strong> Cross-over graft from one femoral to the other'
        ],
        comingSoon: false
    },
    {
        id: 'evar-triple-a',
        name: 'EVAR — Endovascular Aneurysm Repair (Triple A)',
        specialty: 'Vascular',
        complexity: 'Complex',
        duration: '2-4 hours',
        overview: 'Endovascular repair of abdominal aortic aneurysm (AAA / Triple A) using stent graft deployed through the femoral arteries under fluoroscopy. Minimally invasive alternative to open repair. Requires C-arm, introducer sheaths, and stent graft system. Brachial approach (through the arm) may also be used.',
        positioning: 'Supine, arms out for brachial access if needed. C-arm positioned for fluoroscopy.',
        anesthesia: 'General or regional. Arterial line, central line. Type and cross.',
        anatomy: [
            'Abdominal aorta — infrarenal segment (aneurysm location)',
            'Common iliac arteries (bilateral)',
            'External iliac arteries → common femoral arteries (access sites)',
            'Renal arteries (must stay above the stent)',
            'Internal iliac arteries (hypogastric)',
            'Brachial artery (if arm approach needed)'
        ],
        instruments: [
            'Peripheral vascular tray',
            'C-arm fluoroscopy with drape',
            'Boston Scientific deployment gun (or manufacturer-specific)',
            'Introducer sheaths:',
            '  Pinnacle intro sheath 7Fr 10cm x2 — ALWAYS OPEN',
            '  Dry Seal introducer sheath 18Fr (HOLD)',
            '  Dry Seal introducer sheath 12Fr (HOLD)',
            '<strong>Catheters — ALWAYS OPEN:</strong>',
            'O-Royal Flush catheter',
            'KMP catheter',
            'Pigtail catheter'
        ],
        supplies: [
            'Basic green pack, basic accessory pack',
            'Lap chole drape OR 2 split sheets',
            '3/4 sheet x2',
            'Towels x2',
            'Ioban',
            'C-arm drape, overhead drape',
            'Snap cap',
            '<strong>Sutures/Ties:</strong>',
            '2-0, 3-0, 4-0 silk ties',
            'Booties (for ties)',
            '6-0 Prolene BV1 18cm x3',
            '<strong>Other:</strong>',
            '20cc syringes x4',
            'Vessel loops — RED',
            'Blue and red clips',
            'U-tape',
            'Surgicel',
            '<strong>Contrast/Flush:</strong>',
            'Boston Scientific gun: 7cc Isovue + rest heparinized saline',
            'Big gray introducer sheath: inflate balloon with hep saline (syringe in pack)'
        ],
        implants: [
            'Aortic stent graft (manufacturer specific — Gore, Cook, Medtronic)',
            'Iliac extension limbs if needed'
        ],
        steps: [
            'Position, prep bilateral groins (and arm if brachial approach)',
            'Drape with lap chole drape or 2 splits + Ioban',
            'C-arm draped and positioned',
            'Bilateral femoral artery cutdowns or percutaneous access',
            'Place Pinnacle intro sheaths 7Fr 10cm x2 (ALWAYS OPEN)',
            'Advance guidewires under fluoroscopy',
            'Exchange to pigtail catheter — perform aortogram',
            'Mark renal arteries and aneurysm extent on fluoro',
            'FLUSH ALL LINES',
            '<strong>STENT DEPLOYMENT:</strong>',
            'Tag stent — hold end with lap. DO NOT TOUCH THE TIP. Take out plastic parts. Flush.',
            'Advance stent graft through big sheath to planned position',
            'When putting the stent in: HOLD WIRE DOWN TO THE DRAPE so it doesn\'t move',
            'Deploy stent graft — Boston Scientific gun or pull-string',
            'Big gray introducer sheath: inflate balloon with hep saline (syringe in pack)',
            'Completion angiogram — check for endoleak',
            'If brachial approach: access through the arm',
            'Remove sheaths, close femoral arteries (Perclose or open repair)',
            'Close incisions — 6-0 Prolene BV1'
        ],
        tips: [
            'Pinnacle 7Fr sheaths x2 — ALWAYS OPEN. Dry Seal 18Fr and 12Fr are HOLD.',
            'O-Royal Flush, KMP, and Pigtail catheters — ALWAYS OPEN all three',
            'FLUSH ALL LINES before anything goes into the patient',
            'When tagging the stent: hold with LAP, do NOT touch the tip, remove plastic parts, then flush',
            'HOLD THE WIRE DOWN to the drape when stent is being deployed — if it moves, the stent goes to the wrong place',
            'Boston Scientific gun mixture: 7cc Isovue + fill rest with hep saline',
            'Big gray sheath balloon: inflate with hep saline using the syringe that comes in the pack',
            '20cc syringes x4 — you go through a lot of flushes',
            'Know what\'s ALWAYS OPEN vs HOLD — don\'t open the Dry Seals until asked'
        ],
        complications: [
            'Endoleak (Type I-V) — blood flowing outside the stent',
            'Stent migration',
            'Iliac artery rupture or dissection',
            'Access site complications (hematoma, pseudoaneurysm)',
            'Renal artery coverage (stent too high)',
            'Conversion to open repair (rare emergency)',
            'Contrast nephropathy'
        ],
        variations: [
            '<strong>Percutaneous EVAR:</strong> No cutdown — Perclose devices for access closure',
            '<strong>Fenestrated/Branched EVAR:</strong> For juxtarenal or suprarenal aneurysms — complex',
            '<strong>TEVAR:</strong> Thoracic endovascular aortic repair — same concept, thoracic aorta',
            '<strong>Open AAA Repair:</strong> Traditional open surgery with aortic clamp and graft'
        ],
        comingSoon: false,
        images: [
            { src: 'images/evar/back-table-vascular-clamps.jpg', caption: 'Back table — peripheral vascular tray with all clamps laid out, needle counter, laps, asepto' },
            { src: 'images/evar/back-table-full-clamps-drapes.jpg', caption: 'Full back table — vascular clamps, instrument trays, stacked drapes and towels' },
            { src: 'images/evar/close-up-vascular-blue-tray.jpg', caption: 'Close-up — vascular clamps with Rumels, gold-handled scissors in blue tray, Biogel gloves, drapes' },
            { src: 'images/evar/drape-stack-iobans-tubing.jpg', caption: 'Drape stack — Ioban, split sheets, overhead and C-arm drapes, tubing' },
            { src: 'images/evar/back-table-left-side-needle-count.jpg', caption: 'Back table left side — needle counter, syringes, basins, suture packs, medicine cups' }
        ]
    },
    {
        id: 'fat-harvest-face',
        name: 'Fat Harvest from Abdomen to Face (Fat Transfer)',
        specialty: 'ENT',
        complexity: 'Intermediate',
        duration: '1-2 hours',
        overview: 'Autologous fat transfer — harvest fat from the abdomen using Tulip cannulas, process/purify the fat, then inject into the face for volume restoration. Uses Coleman technique for fat processing. Tulip syringes must be ordered from outpatient.',
        positioning: 'Supine. Abdomen and face prepped.',
        anesthesia: 'General anesthesia or local with sedation.',
        anatomy: [
            'Abdominal subcutaneous fat (donor site)',
            'Facial fat compartments (recipient)',
            'Nasolabial folds, malar/cheek area, temples, periorbital',
            'Facial nerve branches (danger zones for injection)'
        ],
        instruments: [
            'Head & Neck tray',
            'Tulip cannulas (purple — for harvest and injection)',
            'Coleman needles',
            'Tulip syringes 35cc x3 (CALL OUTPATIENT to get these)',
            'Fat transfer mechanism (connects big syringe to small syringe)',
            '1cc luer lock syringes (for injection)'
        ],
        supplies: [
            '20cc syringe x3',
            '10cc syringe x2 (for tumescent injection with blue hypo)',
            '3cc syringes x6 (easier to inject fat than 1cc syringes)',
            '35cc catheter tip syringe (for tumescent with long Tulip cannula)',
            'Disposable Tulip cannula',
            'Lok clip for 35cc syringe',
            'Blue hypo needle (for 10cc tumescent injection)',
            'Black tip long cannula (for 20cc tumescent injection)',
            'Blue bowl + 4 Telfa',
            'Small basin + lap (inside — for fat processing)',
            'Raytec (for draining excess fluid from fat)',
            '5-0 fast absorbing x2'
        ],
        implants: [
            'Autologous fat (harvested from patient\'s own abdomen)'
        ],
        steps: [
            '<strong>TUMESCENT INJECTION (abdomen):</strong>',
            'Inject tumescent fluid with 10cc syringe + blue hypo first',
            'Then inject with 20cc syringe + black tip long cannula',
            'Then inject with long Tulip cannula + 35cc catheter tip syringe + lok clip + disposable Tulip',
            '<strong>FAT HARVEST:</strong>',
            'Harvest fat from abdomen using Tulip cannulas into 35cc Tulip syringes',
            '<strong>FAT PROCESSING:</strong>',
            'Place syringe filled with fat + fluid into small basin to drain',
            'Take the back of the syringe out',
            'Roll a Raytec in to take out excess fluid',
            'Attach 1cc luer lock syringe + fat transfer mechanism together',
            'Transfer fat from big syringe to small syringe',
            '<strong>COUNT how much fat you have in syringes</strong>',
            '<strong>FAT INJECTION (face):</strong>',
            'Inject fat into facial areas using 3cc syringes + Coleman needles',
            '<strong>COUNT how much fat is injected</strong>',
            'Close harvest site — 5-0 fast x2'
        ],
        tips: [
            'Tulip syringes 35cc x3 — must be ordered from OUTPATIENT. Don\'t forget this.',
            '3cc syringes are EASIER for injection than 1cc — use those',
            'COUNT your fat: how much harvested AND how much injected. Surgeon will ask.',
            'Fat processing: basin → drain → pull back of syringe out → Raytec to absorb fluid → transfer to small syringes',
            'Do NOT touch the Tulip cannula tips — they are delicate',
            'Blue bowl + 4 Telfa for the work area',
            'Tumescent injection is done in 3 stages: blue hypo → black tip long cannula → long Tulip cannula',
            'This is a finesse case — organization of syringes is everything'
        ],
        complications: [
            'Fat reabsorption (unpredictable — may need repeat procedures)',
            'Asymmetry',
            'Infection',
            'Fat necrosis/oil cysts',
            'Vascular occlusion from injection (rare, serious)',
            'Contour irregularity'
        ],
        variations: [
            '<strong>Nanofat:</strong> Fat processed further into very fine emulsion — for skin quality, not volume',
            '<strong>Fat + PRP:</strong> Platelet-rich plasma mixed with fat for enhanced survival',
            '<strong>Different Donor Sites:</strong> Thigh, flanks, or abdomen'
        ],
        comingSoon: false,
        images: [
            { src: 'images/fat-harvest/mayo-tulip-cannulas-instruments.jpg', caption: 'Mayo stand — Tulip cannulas (purple), Coleman needles, gold-handled iris scissors, forceps, hemostats' },
            { src: 'images/fat-harvest/tulip-cannulas-closeup.jpg', caption: 'Close-up — Tulip harvesting cannulas (purple handles) with tips and purple clip/adapter' }
        ]
    },
    // Coming soon procedures
    {
        id: 'parotidectomy',
        name: 'Parotidectomy',
        specialty: 'ENT',
        complexity: 'Intermediate-Complex',
        duration: '2-4 hours',
        overview: 'Surgical removal of the parotid gland (superficial or total) for tumors. Critical procedure — the facial nerve (CN VII) runs directly through the parotid gland and MUST be identified and preserved. Requires nerve monitoring and nerve stimulator throughout.',
        positioning: 'Supine, head turned to expose operative side. Turn bed 180°. Head on donut.',
        anesthesia: 'General anesthesia — NO paralytic (nerve monitoring requires muscle function). Nerve monitoring electrodes placed in facial muscles.',
        anatomy: [
            'Parotid gland — superficial and deep lobes',
            'Facial nerve (CN VII) — runs THROUGH the gland, divides into branches',
            'Facial nerve branches: temporal, zygomatic, buccal, marginal mandibular, cervical',
            'Stensen\'s duct (parotid duct)',
            'Retromandibular vein',
            'External carotid artery (deep to gland)',
            'Great auricular nerve',
            'Tragal pointer — landmark for facial nerve trunk'
        ],
        instruments: [
            'Head & Neck tray',
            'Nerve stimulator',
            'Nerve monitoring system (NIM — electrodes in facial muscles)',
            '#15 blade x2',
            '#12 blade x2'
        ],
        supplies: [
            'Head & Neck pack',
            'Ioban — WHOLE PIECE, no strips',
            '3-0 Vicryl SH pops',
            '2-0 silk pops',
            '3-0 nylon',
            '5-0 fast absorbing',
            'Blue micro suction adapter',
            '7 flat fluted drain with harpoon',
            '100cc saline bag + 1 amp epinephrine (for local injection)',
            'Small and medium hemoclips'
        ],
        implants: [
            '7 flat fluted drain with harpoon'
        ],
        steps: [
            'Turn bed 180°',
            'Position — head turned, operative side up',
            'Nerve monitoring: confirm electrodes placed in facial muscles by anesthesia',
            'Prep and drape — Ioban WHOLE PIECE (no strips)',
            'Inject local: 100cc saline + 1 amp epinephrine',
            'Modified Blair or facelift incision — preauricular, around ear lobule, into neck',
            'Raise skin flap — identify and preserve great auricular nerve if possible',
            'Identify facial nerve trunk — use tragal pointer as landmark',
            'Test nerve stimulator — confirm facial nerve identification',
            'Superficial parotidectomy — dissect gland off facial nerve branches',
            'Nerve stimulator used throughout — constant testing',
            'If deep lobe involved: dissect between nerve branches (total parotidectomy)',
            'Specimen out — mark for pathology orientation',
            'Hemostasis — small and medium clips, cautery',
            'Place 7 flat fluted drain with harpoon',
            'Close: 3-0 Vicryl deep, 5-0 fast absorbing skin',
            'Pressure dressing'
        ],
        tips: [
            'Ioban is ONE WHOLE PIECE — do NOT cut into strips',
            'Turn the bed 180° — don\'t forget this during setup',
            'NO PARALYTIC from anesthesia — nerve monitoring won\'t work if patient is paralyzed. Confirm with anesthesia before case starts.',
            'Nerve stimulator must be tested and working BEFORE incision',
            'The facial nerve is EVERYTHING in this case — if it\'s cut, the patient\'s face is paralyzed',
            'Tragal pointer is the key landmark — it points to the facial nerve trunk',
            'Local injection: 100cc saline bag + 1 amp epi — mix and have ready before draping',
            '7 flat fluted drain with HARPOON — not a JP, not a Blake. Specific drain.',
            '#12 blade and #15 blade — have both x2 each',
            'Blue micro suction adapter — don\'t forget this small but critical piece'
        ],
        complications: [
            'Facial nerve injury (temporary or permanent paralysis)',
            'Frey\'s syndrome (gustatory sweating — late complication)',
            'Hematoma',
            'Salivary fistula',
            'Sialocele',
            'Great auricular nerve injury (ear numbness)',
            'Wound infection'
        ],
        variations: [
            '<strong>Superficial Parotidectomy:</strong> Most common — remove superficial lobe only, preserve facial nerve',
            '<strong>Total Parotidectomy:</strong> Remove entire gland — for deep lobe tumors or malignancy. Higher risk to nerve.',
            '<strong>Partial/Extracapsular Dissection:</strong> Smaller resection for small benign tumors — nerve not formally identified',
            '<strong>Radical Parotidectomy:</strong> Nerve sacrificed (malignant invasion) — nerve graft reconstruction may follow'
        ],
        comingSoon: false
    },
    {
        id: 'neck-dissection',
        name: 'Neck Dissection (Selective / Modified Radical)',
        specialty: 'ENT',
        complexity: 'Complex',
        duration: '2-5 hours',
        overview: 'Systematic removal of cervical lymph nodes for head and neck cancer staging and treatment.',
        comingSoon: true
    },
    {
        id: 'septoplasty',
        name: 'Septoplasty',
        specialty: 'ENT',
        complexity: 'Basic-Intermediate',
        duration: '45-90 minutes',
        overview: 'Surgical correction of a deviated nasal septum. See FESS / Septoplasty / Turbinoplasty for complete setup — septoplasty is frequently combined with FESS using the same trays and instruments.',
        comingSoon: true
    },
    {
        id: 'eyelid-weight-implant',
        name: 'Eyelid Weight Implant (Gold/Platinum)',
        specialty: 'ENT',
        complexity: 'Basic-Intermediate',
        duration: '45-90 minutes',
        overview: 'Placement of a gold or platinum weight in the upper eyelid to restore eyelid closure in patients with facial nerve paralysis. Often combined with other facial reanimation procedures. May include harvesting fascia and fat from the thigh.',
        positioning: 'Supine, head on donut. Eyes accessible. Thigh prepped if fascia/fat graft planned.',
        anesthesia: 'General anesthesia or local with sedation.',
        anatomy: [
            'Upper eyelid — tarsal plate',
            'Orbicularis oculi muscle',
            'Levator palpebrae superioris',
            'Facial nerve (CN VII) — zygomatic and temporal branches'
        ],
        instruments: [
            'Plastic eye muscle tray',
            'Bishop forceps',
            'Castroviejo curved locking needle holder',
            'Double prong skin hooks',
            'Fine scissors, fine forceps'
        ],
        supplies: [
            '3-0 PDS x2',
            '6-0 Prolene',
            '5-0 fast absorbing (Dr. Moeyer prefers 6-0 plain gut)',
            '5-0 PDS double arm',
            '5-0 Monocryl',
            'Axon nerve graft',
            'Tisseel (fibrin sealant)',
            'Checkpoint nerve stimulator',
            '6½ Protexis gloves',
            'Eyelid weight implant (sized intra-op)'
        ],
        implants: [
            'Gold or platinum eyelid weight (various sizes)',
            'Axon nerve graft (if nerve grafting combined)'
        ],
        steps: [
            'Mark upper eyelid crease',
            'Incision along eyelid crease',
            'Dissect to tarsal plate',
            'Size and position the weight — check closure',
            'Fixate weight to tarsal plate with sutures',
            'If needed: harvest fascia and fat from thigh (Dr. Moeyer)',
            'Layered closure',
            'Check eyelid closure and symmetry'
        ],
        tips: [
            'Have multiple weight sizes available — sizing is done intra-op',
            'Bishop forceps and Castroviejo curved locking are your key instruments',
            'Dr. Moeyer gets fascia and fat from the thigh — prep that site too',
            'Checkpoint nerve stimulator should be on the field',
            'Tisseel (fibrin sealant) needed — have it thawed and ready'
        ],
        complications: [
            'Weight extrusion',
            'Infection',
            'Asymmetric closure',
            'Under- or over-correction',
            'Visible or palpable weight'
        ],
        variations: [
            '<strong>Gold vs. Platinum Weight:</strong> Platinum is thinner, lighter, and MRI-compatible. Gold is traditional.',
            '<strong>Combined with Facial Reanimation:</strong> Often done alongside nerve grafting, temporalis transfer, or other CN VII procedures'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Moeyer/Moyer',
                prefs: [
                    'Plastic eye muscle tray: Bishop forceps, Castroviejo curved locking, double prong skin hooks',
                    '3-0 PDS x2, 6-0 Prolene, 5-0 fast (prefers 6-0 plain gut), 5-0 PDS double arm, 5-0 Monocryl',
                    'Axon nerve graft',
                    'Tisseel (fibrin sealant)',
                    'Checkpoint nerve stimulator',
                    '6½ Protexis gloves',
                    'Gets fascia and fat from the thigh'
                ]
            }
        ]
    },
    {
        id: 'zada-endoscopic-skull-base',
        name: 'Endoscopic Skull Base Surgery (Dr. Zada)',
        specialty: 'ENT',
        complexity: 'Complex',
        duration: '4-8 hours',
        overview: 'Endoscopic endonasal approach to skull base tumors with the advanced frontal skull base endoscope system. Performed by Dr. Zada. May involve fascia graft from the leg for reconstruction. This is a neurosurgical/ENT collaboration case.',
        positioning: 'Supine, head on horseshoe or Mayfield. Navigation registered.',
        anesthesia: 'General anesthesia with oral RAE tube. Arterial line typical. Lumbar drain may be placed.',
        anatomy: [
            'Sphenoid sinus',
            'Sella turcica, pituitary gland',
            'Cavernous sinus, internal carotid artery',
            'Optic nerves and chiasm',
            'Skull base — anterior cranial fossa floor',
            'Dura mater'
        ],
        instruments: [
            '<strong>Trays:</strong>',
            'Dr. Zada advanced frontal skull base endoscope — micro scissor, micro grasper, retractable knife (get blade for knife — call Martha for peel pack blade K. Storz in Zada cart)',
            'Giraffe tray — long D dissector, long sinus seeker, nerve hook, Kerrison (up and down), small biter, Rhoton suctions',
            'Smith Ferris grasping forcep (may be in Zada tray)',
            'Minor tray — for fascia graft on leg (Weitlaner, Metz, Mayo, forceps)',
            '<strong>Supplies:</strong>',
            'Codman cottonoids — medium square AND small squares',
            'Surgicel, Fibrillar, Gelfoam — cut Gelfoam into small squares, cut Surgicel into small and medium squares',
            'Disposable bayonet Doppler',
            'Ioban',
            'Transverse drape + lap drape (for fascia graft)',
            'Extra Bovie x2 (long Bovie)',
            'Extra suction',
            '2 extra mayo covers',
            'Petri dish x2',
            'Needle magnet',
            'Endo pen',
            'Allograft (Dr. uses allograft to put in nose)'
        ],
        supplies: [
            'Codman cottonoids — medium square and small squares',
            'Surgicel — cut into small and medium squares',
            'Fibrillar',
            'Gelfoam — cut into small squares',
            'Disposable bayonet Doppler',
            'Ioban',
            'Transverse drape, lap drape',
            'Extra Bovie x2 (including long Bovie)',
            'Extra suction',
            'Mayo covers x2 extra',
            'Petri dish x2',
            'Needle magnet',
            'Endo pen'
        ],
        implants: [
            'Allograft (nasal reconstruction)',
            'Fascia graft (from thigh if needed)'
        ],
        steps: [
            'Position and register navigation',
            'Nasal decongestion and injection',
            'Endoscopic endonasal approach — bilateral sphenoidotomy',
            'Identify and remove skull base pathology',
            'If fascia graft needed: set up minor tray, transverse drape, prep thigh, harvest fascia',
            'Skull base reconstruction — fascia graft or allograft placement',
            'Nasal packing',
            'Close donor site if used'
        ],
        tips: [
            'Cut Gelfoam into small squares and Surgicel into small AND medium squares BEFORE the case — Dr. will need them fast',
            'Retractable knife blade: call Martha — peel pack blade is K. Storz, stored in Zada cart',
            'Smith Ferris grasper may be in Zada tray — check before opening extra',
            'For fascia graft: need minor tray with Weitlaner, Metz, Mayo, forceps + transverse drape + extra Bovie and suction',
            'Have Rhoton suctions from giraffe tray ready — these are specialized neurosurgical suctions',
            'Long Bovie is needed — have 2 extra Bovies total',
            'Giraffe tray instruments used: up/down Kerrison, long D dissector, small cup forcep, nerve hook, Rhoton suctions'
        ],
        complications: [
            'CSF leak',
            'Meningitis',
            'Carotid artery injury',
            'Visual loss (optic nerve/chiasm injury)',
            'Diabetes insipidus',
            'Intracranial hemorrhage'
        ],
        variations: [
            '<strong>Transsphenoidal Approach:</strong> Add transsphenoidal pack, transsphenoidal tray, Dr. Zada Karl Storz scope w/ sheaths, neuro endopen vertical 1, Sonopet angled (hold)',
            '<strong>Extended Skull Base:</strong> Larger resection involving anterior or middle cranial fossa'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Zada',
                prefs: [
                    'Zada advanced frontal skull base endoscope: micro scissor, micro grasper, retractable knife',
                    'Giraffe tray: up/down Kerrison, long D dissector, small cup forcep, nerve hook, Rhoton suctions',
                    'Uses allograft to put in nose',
                    'Retractable knife blade — call Martha, peel pack K. Storz in Zada cart',
                    'Smith Ferris grasping forcep',
                    'Codman cottonoids (med square + small squares)',
                    'Cut Gelfoam small, Surgicel small + medium'
                ]
            }
        ]
    },
    {
        id: 'zada-transsphenoidal',
        name: 'Transsphenoidal Pituitary Surgery (Dr. Zada)',
        specialty: 'ENT',
        complexity: 'Complex',
        duration: '3-5 hours',
        overview: 'Endoscopic endonasal transsphenoidal approach to the pituitary gland for pituitary adenomas and sellar/parasellar tumors. Uses the same skull base setup as Dr. Zada\'s standard approach with additional transsphenoidal-specific equipment.',
        positioning: 'Supine, head on horseshoe or Mayfield. Navigation registered.',
        anesthesia: 'General anesthesia. Arterial line. Lumbar drain may be placed.',
        anatomy: [
            'Sphenoid sinus',
            'Sella turcica and pituitary fossa',
            'Pituitary gland (anterior and posterior)',
            'Internal carotid arteries (bilateral)',
            'Optic nerves and chiasm',
            'Cavernous sinuses',
            'Diaphragma sellae'
        ],
        instruments: [
            '<strong>All Dr. Zada skull base setup PLUS:</strong>',
            'Transsphenoidal tray',
            'Transsphenoidal pack',
            'Dr. Zada basic endoscopic skull base instruments',
            'Dr. Zada Karl Storz scope with sheaths',
            'Neuro endopen vertical 1',
            'Sonopet angled (HOLD — standby)',
            'Giraffe tray',
            'Minor tray (for fascia graft if needed)'
        ],
        supplies: [
            'Same as Zada skull base setup',
            'Transsphenoidal pack',
            'All cottonoids, hemostatic agents as skull base case'
        ],
        implants: [
            'Fascia graft, fat graft (for sellar reconstruction)',
            'Allograft'
        ],
        steps: [
            'Position, navigation registration',
            'Nasal decongestion and injection',
            'Endoscopic endonasal approach',
            'Bilateral sphenoidotomy — wide opening',
            'Identify sellar floor, carotid prominences',
            'Open sellar floor with drill or Kerrison',
            'Open dura — identify tumor',
            'Tumor resection with curettes, suction, grasping instruments',
            'Check for CSF leak — Valsalva maneuver',
            'Sellar reconstruction — fat, fascia, or allograft',
            'Nasal packing'
        ],
        tips: [
            'Have Sonopet on HOLD — it\'s standby only, don\'t open unless asked',
            'Same setup as Zada skull base PLUS the transsphenoidal-specific trays',
            'Karl Storz scopes with sheaths are different from regular ESS scopes — know the difference',
            'Neuro endopen vertical 1 — make sure you have the correct one'
        ],
        complications: [
            'CSF leak (most common)',
            'Diabetes insipidus',
            'Hypopituitarism',
            'Carotid artery injury (rare, catastrophic)',
            'Visual deterioration',
            'Meningitis'
        ],
        variations: [
            '<strong>Extended Transsphenoidal:</strong> For larger tumors extending beyond the sella',
            '<strong>Combined with Skull Base Resection:</strong> For tumors with parasellar or clival extension'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Zada',
                prefs: [
                    'All standard Zada skull base preferences apply',
                    'Add: Transsphenoidal pack + tray',
                    'Dr. Zada Karl Storz scope with sheaths',
                    'Neuro endopen vertical 1',
                    'Sonopet angled on HOLD only'
                ]
            }
        ]
    },
    {
        id: 'pe-tubes',
        name: 'PE Tube Placement (Myringotomy with Tubes)',
        specialty: 'ENT',
        complexity: 'Basic',
        duration: '10-20 minutes',
        overview: 'Pressure equalization tube placement through the tympanic membrane for recurrent otitis media or middle ear effusion. One of the simplest and most common ENT procedures. Quick case — often done in pediatric patients.',
        positioning: 'Supine, head turned to expose operative ear. Head on donut.',
        anesthesia: 'General anesthesia (mask or LMA — usually no intubation needed, especially peds).',
        anatomy: [
            'Tympanic membrane (eardrum)',
            'Middle ear cavity',
            'Ossicles (malleus, incus, stapes)',
            'Eustachian tube'
        ],
        instruments: [
            'Ear tray — ear speculum, 5 and 7 suction, alligator forcep, Rosen needle',
            'Myringotomy blade (LONG blade — not a standard blade)',
            'Microscope — Leica (does NOT need a drape)'
        ],
        supplies: [
            '5cc syringe',
            'Angiocath',
            'PE tubes (various sizes)',
            'Cotton ball dressing',
            'Ciprodex drops (applied at the end)',
            'Culture swab (if draining fluid)'
        ],
        implants: [
            'PE tubes (pressure equalization tubes)'
        ],
        steps: [
            'Position head — turn to expose ear',
            'Microscope in position — Leica, NO drape needed',
            'Insert ear speculum — visualize tympanic membrane',
            'Myringotomy — make incision in TM with myringotomy blade (long)',
            'Suction any middle ear effusion — send for culture if purulent',
            'Place PE tube through the myringotomy incision using alligator forceps',
            'Confirm tube position under microscope',
            'Apply Ciprodex drops',
            'Cotton ball dressing in ear canal',
            'If bilateral: turn head, repeat on opposite ear'
        ],
        tips: [
            'Myringotomy blade is LONG — it\'s different from a regular blade, don\'t grab the wrong one',
            'Leica microscope does NOT need a drape — saves setup time',
            'This is a fast case — have EVERYTHING ready before the patient rolls in',
            'If doing both ears, have supplies for both sides ready upfront',
            'Ciprodex drops go in at the END',
            'Cotton ball dressing — simple, just a cotton ball in the ear',
            'Dr. Dorothy did both ears — be ready for bilateral'
        ],
        complications: [
            'Tube displacement/extrusion',
            'Persistent perforation after tube falls out',
            'Otorrhea (ear drainage)',
            'Rarely: hearing loss, injury to ossicles'
        ],
        variations: [
            '<strong>Bilateral PE Tubes:</strong> Both ears — most common scenario in peds',
            '<strong>T-Tubes (Long-term):</strong> Different tube design for patients needing longer ventilation',
            '<strong>Myringotomy Only:</strong> Incision without tube placement — for acute drainage'
        ],
        comingSoon: false,
        surgeonPrefs: [
            {
                name: 'Dr. Dorothy',
                prefs: [
                    'Ear tray: ear speculum, 5 and 7 suction, alligator forcep, Rosen needle',
                    '5cc syringe, angiocath',
                    'Long myringotomy blade',
                    'Cotton ball dressing, Ciprodex drops at the end',
                    'Leica microscope — no drape needed',
                    'Did both ears'
                ]
            }
        ],
        images: [
            { src: 'images/pe-tubes/ear-tray-setup.jpg', caption: 'PE tube setup — ear speculum, alligator forceps, suction tips, Rosen needles on blue towel' }
        ]
    }
];

// ===== APP STATE =====
let currentFilter = 'all';
let currentSearch = '';

// ===== DOM ELEMENTS =====
const searchInput = document.getElementById('searchInput');
const filterTags = document.getElementById('filterTags');
const procedureList = document.getElementById('procedureList');
const procedureDetail = document.getElementById('procedureDetail');
const procedureContent = document.getElementById('procedureContent');
const backBtn = document.getElementById('backBtn');

// ===== RENDER PROCEDURE LIST =====
function renderList() {
    const filtered = procedures.filter(p => {
        const matchesFilter = currentFilter === 'all' || p.specialty === currentFilter;
        const matchesSearch = currentSearch === '' || 
            p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
            p.overview.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        procedureList.innerHTML = `
            <div class="no-results">
                <div class="icon">🔍</div>
                <p>No procedures found. Try a different search or filter.</p>
            </div>
        `;
        return;
    }

    procedureList.innerHTML = filtered.map((p, i) => `
        <div class="procedure-card" data-id="${p.id}" style="animation-delay: ${i * 0.05}s" ${p.comingSoon ? '' : 'onclick="showDetail(\'' + p.id + '\')"'}>
            <div class="card-header">
                <h3>${p.name}</h3>
                <span class="specialty-badge ${p.comingSoon ? 'coming-soon' : p.specialty.toLowerCase()}">${p.specialty}</span>
            </div>
            <p class="card-desc">${p.overview}</p>
            ${!p.comingSoon ? `
            <div class="card-meta">
                <span class="meta-item">⏱ <span>${p.duration}</span></span>
                <span class="meta-item">📊 <span>${p.complexity}</span></span>
            </div>` : ''}
            ${p.comingSoon ? '<div class="coming-soon-overlay"><span class="coming-soon-label">🔒 Coming Soon</span></div>' : ''}
        </div>
    `).join('');
}

// ===== RENDER PROCEDURE DETAIL =====
function showDetail(id) {
    const p = procedures.find(proc => proc.id === id);
    if (!p || p.comingSoon) return;

    procedureList.style.display = 'none';
    document.querySelector('.search-section').style.display = 'none';
    procedureDetail.style.display = 'block';
    window.scrollTo(0, 0);

    procedureContent.innerHTML = `
        <div class="detail-header">
            <span class="specialty-badge ${p.specialty.toLowerCase()}">${p.specialty}</span>
            <h2>${p.name}</h2>
            <div class="card-meta" style="margin-top: 0.5rem;">
                <span class="meta-item">⏱ <span>${p.duration}</span></span>
                <span class="meta-item">📊 <span>${p.complexity}</span></span>
            </div>
            <p class="overview">${p.overview}</p>
        </div>

        ${makeSection('🛏️ Patient Positioning', `<p>${p.positioning}</p>`)}
        ${makeSection('💉 Anesthesia', `<p>${p.anesthesia}</p>`)}
        ${makeSection('🫀 Key Anatomy', `<ul>${p.anatomy.map(a => `<li>${a}</li>`).join('')}</ul>`)}
        ${makeSection('🔧 Instruments & Trays', `<ul>${p.instruments.map(i => `<li>${i}</li>`).join('')}</ul>`)}
        ${makeSection('📦 Supplies & Equipment', `<ul>${p.supplies.map(s => `<li>${s}</li>`).join('')}</ul>`)}
        ${p.implants && p.implants.length > 0 ? makeSection('🦴 Implants', `<ul>${p.implants.map(i => `<li>${i}</li>`).join('')}</ul>`) : ''}
        ${makeSection('📋 Step-by-Step Surgical Flow', `<ol>${p.steps.map(s => `<li>${s}</li>`).join('')}</ol>`, true)}
        ${makeSection('💡 Scrub Tech Tips', `<div class="tip-box"><ul>${p.tips.map(t => `<li>${t}</li>`).join('')}</ul></div>`, true)}
        ${makeSection('⚠️ Common Complications', `<div class="warning-box"><ul>${p.complications.map(c => `<li>${c}</li>`).join('')}</ul></div>`)}
        ${p.variations && p.variations.length > 0 ? makeSection('🔀 Variations', `<ul>${p.variations.map(v => `<li>${v}</li>`).join('')}</ul>`) : ''}
        ${p.surgeonPrefs && p.surgeonPrefs.length > 0 ? makeSection('👨‍⚕️ Surgeon Preferences', `<div class="surgeon-prefs">${p.surgeonPrefs.map(s => `<div class="surgeon-card"><h5>${s.name}</h5><ul>${s.prefs.map(pr => `<li>${pr}</li>`).join('')}</ul></div>`).join('')}</div>`) : ''}
        ${p.images && p.images.length > 0 ? makeSection('📸 OR Photos', `<div class="image-gallery">${p.images.map(img => `<div class="gallery-item"><img src="${img.src}" alt="${img.caption}" loading="lazy" onclick="this.classList.toggle('expanded')"><p class="img-caption">${img.caption}</p></div>`).join('')}</div>`) : ''}
    `;

    // Add click handlers to section headers
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
            header.classList.toggle('open');
            header.nextElementSibling.classList.toggle('open');
        });
    });
}

function makeSection(title, content, openByDefault = false) {
    return `
        <div class="detail-section">
            <div class="section-header ${openByDefault ? 'open' : ''}">
                <h4>${title}</h4>
                <span class="chevron">▼</span>
            </div>
            <div class="section-body ${openByDefault ? 'open' : ''}">
                ${content}
            </div>
        </div>
    `;
}

// ===== BACK BUTTON =====
backBtn.addEventListener('click', () => {
    procedureDetail.style.display = 'none';
    document.querySelector('.search-section').style.display = 'block';
    procedureList.style.display = 'flex';
    window.scrollTo(0, 0);
});

// ===== SEARCH =====
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderList();
});

// ===== FILTER TAGS =====
filterTags.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tag')) {
        document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderList();
    }
});

// ===== INIT =====
renderList();