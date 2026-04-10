/**
 * ============================================================
 *  VOICEOVER SCRIPTS — Digital Sarthi Training Platform
 * ============================================================
 *
 *  This file manages ALL voiceover (text-to-speech) content
 *  for every module, step, instruction, and narrative screen.
 *
 *  STRUCTURE:
 *    VOICEOVER_SCRIPTS
 *    ├── MODULE_0_GPAY       → Google Pay
 *    │   ├── steps[]         → Per-step instruction voiceovers
 *    │   └── narrative{}     → Jiya scam sequence narration
 *    ├── MODULE_1_DIGILOCKER → DigiLocker (coming soon)
 *    ├── MODULE_2_UIDAI      → UIDAI (coming soon)
 *    ├── MODULE_3_EMAIL      → Email (coming soon)
 *    ├── MODULE_4_PHISHING   → Phishing Safety (coming soon)
 *    └── SYSTEM              → Welcome, tour, generic messages
 *
 *  HOW TO USE:
 *    Import this file in your HTML before main_eng.html's <script>.
 *    Then call:
 *      speakText(VOICEOVER_SCRIPTS.MODULE_0_GPAY.steps[0][2]);
 *    Or use the helper:
 *      voiceFor('gpay', 'step', 0, 2);
 *
 * ============================================================
 */

// ============================================================
//  SYSTEM — Generic / UI-level voiceovers
// ============================================================
const VOICEOVER_SCRIPTS = {

  SYSTEM: {
    welcome:
      "Welcome to Digital Sarthi! This guided training will help you learn Digital India apps step by step. Follow each module and earn up to 100 points!",

    tourStart:
      "Let's take a quick look around the app before we begin learning.",

    tourProfile:
      "Here you can see your name and the medal you earn as you complete modules.",

    tourProgress:
      "This shows your total points out of 100. Complete all modules to earn a Gold medal!",

    tourModules:
      "All your lessons are here. Click any card to start learning step by step!",

    tourMobile:
      "This phone shows you exactly how the apps look and work. You'll practise right here!",

    tourEnd:
      "You're all set! Click on the Learn Google Pay card on the left to begin your first step-by-step lesson. You'll learn everything from downloading the app to sending money safely!",

    comingSoon:
      "This module is coming soon! Stay tuned for interactive lessons.",
  },

  // ==========================================================
  //  MODULE 0 — Google Pay
  // ==========================================================
  MODULE_0_GPAY: {

    /**
     * steps[stepIndex][instrIndex]
     *
     * Each entry is the exact text spoken when that instruction appears.
     * Important steps include appended guideline sentences.
     */
    steps: [

      // ── Step 0: Download Google Pay ──────────────────────
      [
        /* 0 */ "Open the Play Store on your phone.",
        /* 1 */ "Tap the search box at the top.",
        /* 2 */ "Type Google Pay and press Search.",
        /* 3 */ "Tap Install next to the Google Pay app.",
      ],

      // ── Step 1: Create Your GPay Account ─────────────────
      [
        /* 0 */ "Open the Google Pay app after installing.",
        /* 1 */ "Enter your mobile number linked to your bank.",
        /* 2 */ "You'll receive an OTP — that is a One Time Password. Enter it to verify. " +
                "Important guidelines: " +
                "OTP is confidential. Never share it with anyone! " +
                "Banks will never ask for your OTP over call or SMS. " +
                "OTP is valid for only a few minutes.",
        /* 3 */ "Agree to the Terms and Conditions and tap Continue.",
      ],

      // ── Step 2: Link Your Bank Account ───────────────────
      [
        /* 0 */ "On the home screen, tap your profile icon at the top right.",
        /* 1 */ "Select Bank Account from the menu.",
        /* 2 */ "Choose your bank from the list.",
        /* 3 */ "Google Pay will automatically detect your registered mobile number and verify your account.",
        /* 4 */ "Your bank account is now successfully linked!",
      ],

      // ── Step 3: Set Up Your UPI PIN ───────────────────────
      [
        /* 0 */ "Go to Bank Account settings and tap Set UPI PIN.",
        /* 1 */ "Enter the last 6 digits of your debit card number.",
        /* 2 */ "Enter the expiry date of your debit card.",
        /* 3 */ "Create a 6-digit UPI PIN that only you will remember. " +
                "Important guidelines: " +
                "Never write down your PIN anywhere. " +
                "Don't share your PIN with anyone, not even bank employees. " +
                "Make sure no one is watching when you enter your PIN. " +
                "Choose a PIN that's hard to guess — avoid 1 2 3 4 5 6, birthdate, and similar easy combinations. " +
                "This PIN will be required for every transaction.",
        /* 4 */ "Confirm your PIN by entering it again.",
      ],
    ],

    // ── Narrative: Jiya Scam Sequence ──────────────────────
    narrative: {

      /** Shown when the "Meet Jiya" section starts */
      meetJiya:
        "You've learned all about Google Pay. Now let's see if you can help Jiya stay safe from fraud! " +
        "Jiya is a regular user just like you. She will receive a call from an unknown number. " +
        "Help her make the right choice!",

      /** Shown when the incoming call screen renders */
      jiyaPhoneRinging:
        "An unknown number is calling Jiya. What should she do? " +
        "Look at Jiya's phone and choose wisely!",

      /** Shown when user picks up the call */
      jiyaPickedUp:
        "The caller claims to be from her bank. He says there's a problem with her account " +
        "and asks for her UPI PIN to fix it. What should Jiya say?",

      /** Shown when user shares the PIN (wrong answer) */
      warningResult:
        "Jiya shared her UPI PIN with a stranger. " +
        "Real banks NEVER ask for your UPI PIN, OTP, or password over the phone. " +
        "Remember: If someone calls asking for your PIN or OTP — it's always a scam. " +
        "Hang up immediately!",

      /** Shown when user declines / ignores the call (correct answer) */
      safeResult:
        "You made the right choice! Real banks and Google Pay will never call you " +
        "asking for your UPI PIN or OTP. " +
        "If you receive such calls, always decline or hang up immediately. " +
        "You've earned your Google Pay points!",

      /** Module completion message */
      moduleComplete:
        "You've finished the Google Pay learning module. " +
        "Explore other modules in the left panel to earn all 100 points and reach Gold status!",
    },
  },

  // ==========================================================
  //  MODULE 1 — DigiLocker
  // ==========================================================
  MODULE_1_DIGILOCKER: {

    /**
     * steps[stepIndex][instrIndex]
     */
    steps: [
      // ── Step 0: Install from Play Store ──
      [
        /* 0 */ "Open Play Store and search DigiLocker.",
        /* 1 */ "Tap Install to download the authentic app published by National e Governance Division."
      ],

      // ── Step 1: Welcome to DigiLocker ──
      [
        /* 0 */ "Open DigiLocker.",
        /* 1 */ "Tap Sign In at the bottom to continue."
      ],

      // ── Step 2: Aadhaar Login ──
      [
        /* 0 */ "Enter your 12-digit Aadhaar number.",
        /* 1 */ "Enter your 6-digit Security PIN.",
        /* 2 */ "Tap Sign In to proceed."
      ],

      // ── Step 3: OTP Verification ──
      [
        /* 0 */ "Enter the 6-digit OTP sent via SMS to your registered mobile number.",
        /* 1 */ "Tap Submit to securely access your documents."
      ],

      // ── Step 4: Issued Documents Dashboard ──
      [
        /* 0 */ "Welcome to your Dashboard! Scroll down to see your linked certificates.",
        /* 1 */ "Tap on Aadhaar Card in your Issued Documents to view it.",
        /* 2 */ "Great! This digital ID is legally valid everywhere."
      ]
    ],

    narrative: {
      // Add scenario narration text here if needed later
    },
  },

  // ==========================================================
  //  MODULE 2 — UIDAI / Aadhaar
  // ==========================================================
  MODULE_2_UIDAI: {

    /**
     * Placeholder — fill in step voiceovers once the module is built.
     */
    steps: [
      // ── Step 0: Visit UIDAI Website ──
      [
        /* 0 */ "Open a web browser on your phone and go to the UIDAI website — uidai dot gov dot in.",
        /* 1 */ "Tap on My Aadhaar to see all self-service options.",
      ],

      // ── Step 1: Download e-Aadhaar ──
      [
        /* 0 */ "Select Download Aadhaar from the menu.",
        /* 1 */ "Enter your 12-digit Aadhaar number or Virtual ID.",
        /* 2 */ "Enter the Captcha shown on screen.",
        /* 3 */ "You will receive an OTP on your registered mobile. Enter it and download your e-Aadhaar.",
      ],
    ],

    narrative: {
      // Add scenario narration text here when module is built
    },
  },

  // ==========================================================
  //  MODULE 3 — Email (Gmail)
  // ==========================================================
  MODULE_3_EMAIL: {

    /**
     * Placeholder — fill in step voiceovers once the module is built.
     */
    steps: [
      // ── Step 0: Set Up Gmail ──
      [
        /* 0 */ "Open the Play Store and search for Gmail.",
        /* 1 */ "Install the Gmail app and open it.",
        /* 2 */ "Tap Add an account and then Google.",
        /* 3 */ "Follow the steps to create a new Gmail account with your mobile number.",
      ],

      // ── Step 1: Send an Email ──
      [
        /* 0 */ "Tap the compose button — it looks like a pencil icon — at the bottom right.",
        /* 1 */ "Type the recipient's email address in the To field.",
        /* 2 */ "Add a subject for your email.",
        /* 3 */ "Write your message in the body area.",
        /* 4 */ "Tap the send button — it looks like a paper plane — to send your email.",
      ],
    ],

    narrative: {
      // Add scenario narration text here when module is built
    },
  },

  // ==========================================================
  //  MODULE 4 — Phishing Safety
  // ==========================================================
  MODULE_4_PHISHING: {

    /**
     * Placeholder — fill in step voiceovers once the module is built.
     */
    steps: [
      // ── Step 0: Recognise Phishing ──
      [
        /* 0 */ "Phishing is when someone tries to trick you into giving away your personal information.",
        /* 1 */ "Fraudsters send fake emails, messages, or calls pretending to be banks, companies, or the government.",
        /* 2 */ "Always check the sender's email address. Official organisations never use Gmail or Yahoo addresses.",
        /* 3 */ "Never click on links in unexpected emails or messages asking for your password or OTP.",
      ],

      // ── Step 1: Stay Safe ──
      [
        /* 0 */ "If you receive an unexpected OTP, do NOT share it with anyone — even if they claim to be from your bank.",
        /* 1 */ "Report suspicious calls to the National Cyber Crime helpline at 1930.",
        /* 2 */ "When in doubt, call your bank's official helpline number from the back of your debit card.",
      ],
    ],

    narrative: {
      // Add scenario narration text here when module is built
    },
  },
};


// ============================================================
//  HELPER — Retrieve a voiceover string safely
// ============================================================

/**
 * voiceFor(moduleKey, type, ...indices)
 *
 * moduleKey  — 'gpay' | 'digilocker' | 'uidai' | 'email' | 'phishing' | 'system'
 * type       — 'step'      → steps[stepIndex][instrIndex]
 *              'narrative' → narrative[narrativeKey]
 *              'system'    → SYSTEM[key]
 *
 * Examples:
 *   voiceFor('gpay', 'step', 0, 2)           // GPay step 0, instruction 2
 *   voiceFor('gpay', 'narrative', 'meetJiya') // Jiya narration
 *   voiceFor('system', 'welcome')             // welcome message
 *
 * Returns a string, or '' if the path doesn't exist.
 */
function voiceFor(moduleKey, type, ...args) {
  const MAP = {
    gpay:       'MODULE_0_GPAY',
    digilocker: 'MODULE_1_DIGILOCKER',
    uidai:      'MODULE_2_UIDAI',
    email:      'MODULE_3_EMAIL',
    phishing:   'MODULE_4_PHISHING',
    system:     'SYSTEM',
  };

  const root = VOICEOVER_SCRIPTS[MAP[moduleKey] || moduleKey];
  if (!root) return '';

  if (type === 'step') {
    const [stepIdx, instrIdx] = args;
    return (root.steps?.[stepIdx]?.[instrIdx]) || '';
  }

  if (type === 'narrative') {
    const [narrativeKey] = args;
    return (root.narrative?.[narrativeKey]) || '';
  }

  if (type === 'system' || moduleKey === 'system') {
    // args[0] is the key when calling voiceFor('system', 'welcome')
    // or voiceFor('system', 'system', 'welcome')
    const key = type === 'system' ? args[0] : type;
    return (root[key]) || '';
  }

  return '';
}
