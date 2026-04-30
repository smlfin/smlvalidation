// ── Question bank (45 questions, Malayalam, exact as provided) ─
// marks: 2 for Q1,Q7,Q22,Q28,Q43 — all others: 1
var questions = [
  {
    // Q1 — 2 marks
    q: "ആരാണ് SML ഗ്രൂപ്പ് സ്ഥാപിച്ചത്? ഏത് വർഷമാണ് ഇത് പ്രവർത്തനം ആരംഭിച്ചത്?",
    opts: [
      "ഗ്രിഗർ ചെറി വില്യംസ് സ്ഥാപിച്ചു, 1980-ൽ പ്രവർത്തനം ആരംഭിച്ചു.",
      "വർഗീസ് K. I. സ്ഥാപിച്ചു, 1980-ൽ പ്രവർത്തനം ആരംഭിച്ചു.",
      "സി.സി. വില്യം വർഗീസ് സ്ഥാപിച്ചു, 1980-ൽ പ്രവർത്തനം ആരംഭിച്ചു.",
      "ജോജോ N. J. സ്ഥാപിച്ചു, 1980-ൽ പ്രവർത്തനം ആരംഭിച്ചു."
    ],
    a: "സി.സി. വില്യം വർഗീസ് സ്ഥാപിച്ചു, 1980-ൽ പ്രവർത്തനം ആരംഭിച്ചു.",
    marks: 2
  },
  {
    // Q2 — 1 mark
    q: "SML ഗ്രൂപ്പിന്റെ (SML,VFL,SNL)ഏകദേശ ലോൺ ഔട്ട്സ്റ്റാൻഡിംഗ് (Loan Outstanding) തുക എത്രയാണ്??",
    opts: [
      "₹550 കോടിയിലധികം.",
       "₹750 കോടിയിലധികം.",
       "₹440 കോടിയിലധികം.",
      "₹850 കോടിയിലധികം."
    ],
    a: "₹440 കോടിയിലധികം.",
    marks: 1
  },
  {
    // Q3 — 1 mark
    q: "SML ഗ്രൂപ്പിന്റെ ഏകദേശ ഡെപ്പോസിറ്റ് ഔട്ട്സ്റ്റാൻഡിംഗ് (Deposit Outstanding) തുക എത്രയാണ്?",
    opts: [
      "₹850 കോടിയിലധികം.",
       "₹650 കോടിയിലധികം.",
       "₹440 കോടിയിലധികം.",
      "₹335 കോടിയിലധികം."
    ],
    a: "₹335 കോടിയിലധികം.",
    marks: 1
  },
  {
    // Q4 — 2 mark
    q: "കമ്പനി നിയമപ്രകാരം താഴെ പറയുന്നവയിൽ ഏത് സാഹചര്യത്തിലാണ് ഒരു വ്യക്തിയെ 'Fresh Customer' ആയി അംഗീകരിക്കാൻ സാധിക്കുന്നത്?",
    opts: [
      "മുമ്പ് SML ഗ്രൂപ്പിൽ നിക്ഷേപം ഉണ്ടായിരുന്ന ആളാണെങ്കിലും പുതിയൊരു ബാങ്ക് അക്കൗണ്ട് വഴി പണം നൽകിയാൽ അദ്ദേഹത്തെ ഫ്രഷ് കസ്റ്റമറായി കണക്കാക്കാം.",
      "ഉപഭോക്താവിന്റെ PAN കാർഡ് മുമ്പ് ഗ്രൂപ്പിലെ ഒരു സ്ഥാപനത്തിലും രേഖപ്പെടുത്താത്തതും, നിക്ഷേപ തുക അദ്ദേഹത്തിന്റെ തന്നെ ബാങ്ക് അക്കൗണ്ടിൽ നിന്ന് വന്നതുമായിരിക്കണം.",
      "PAN കാർഡ് ലിങ്ക് ചെയ്തിട്ടുണ്ടെങ്കിലും നിക്ഷേപ തുക മകന്റെയോ മകളുടെയോ ബാങ്ക് അക്കൗണ്ടിൽ നിന്ന് അയച്ചതാണെങ്കിൽ അദ്ദേഹത്തെ ഫ്രഷ് കസ്റ്റമറായി പരിഗണിക്കാം.",
      "ഗ്രൂപ്പിലെ ഏതെങ്കിലും ഒരു സ്ഥാപനത്തിൽ മാത്രം PAN കാർഡ് രേഖപ്പെടുത്തിയിട്ടുള്ള ആളെ ഫ്രഷ് കസ്റ്റമറായി കണക്കാക്കാം."
    ],
    a: "ഉപഭോക്താവിന്റെ PAN കാർഡ് മുമ്പ് ഗ്രൂപ്പിലെ ഒരു സ്ഥാപനത്തിലും രേഖപ്പെടുത്താത്തതും, നിക്ഷേപ തുക അദ്ദേഹത്തിന്റെ തന്നെ ബാങ്ക് അക്കൗണ്ടിൽ നിന്ന് വന്നതുമായിരിക്കണം.",
    marks: 2
  },
  {
    // Q5 — 1 mark
    q: "മിസ്റ്റർ രാഹുൽ എന്ന കസ്റ്റമർ SML  NCD (ഡീമാറ്റ്) സ്കീമിൽ നിക്ഷേപിക്കാൻ താല്പര്യപ്പെടുന്നു. നിക്ഷേപത്തിന് മുൻപ് ഇതിന്റെ ഏറ്റവും കുറഞ്ഞ ലോക്ക്-ഇൻ പിരീഡിനെക്കുറിച്ച്  അദ്ദേഹം നിങ്ങളോട് ചോദിക്കുന്നു. ശരിയായ മറുപടി എന്തായിരിക്കും?",
    opts: [
      "6 മാസം (6 Months)",
      "1 വർഷം (1 Year)",
      "2 വർഷം (2 Years)",
      "3 വർഷം (3 Years)"
    ],
    a: "1 വർഷം (1 Year)",
    marks: 1
  },
  {
    // Q6 — 1 mark
    q: "SML ഫിനാൻസ് ലിമിറ്റഡിലെ സബോർഡിനേറ്റ് ഡെറ്റ് നിക്ഷേപങ്ങളുടെ കാലാവധി എത്രയാണ്?",
    opts: [
      "3.5 വർഷം (3.5 Years)",
      "4.5 വർഷം (4.5 Years)",
      "5.5 വർഷം (5.5 Years)",
      "6.5 വർഷം (6.5 Years)"
    ],
    a: "5.5 വർഷം (5.5 Years)",
    marks: 1
  },
  {
    // Q7 — 2 marks
    q: "Vanchinad ഫിനാൻസ് ലിമിറ്റഡിന്റെ സബ്-ഡെറ്റ് ഡബ്ലിംഗ് ഓപ്ഷൻ വഴി നിക്ഷേപം ഇരട്ടിയാക്കാൻ എത്ര സമയമെടുക്കും? ഇതിനായുള്ള കുറഞ്ഞ നിക്ഷേപം (Minimum Investment) എത്രയാണ്?",
    opts: [
      "60 മാസം - കുറഞ്ഞ നിക്ഷേപം ₹5,000",
      "70 മാസം - കുറഞ്ഞ നിക്ഷേപം ₹10,000",
      "72 മാസം - കുറഞ്ഞ നിക്ഷേപം ₹10,000",
      "6 വർഷം - കുറഞ്ഞ നിക്ഷേപം ₹5,000"
    ],
    a: "70 മാസം - കുറഞ്ഞ നിക്ഷേപം ₹10,000",
    marks: 2
  },
  {
    // Q8 — 1 mark
    q: "സംഗീത് നിധി ലിമിറ്റഡിൽ ഒരു റിക്കറിംഗ് ഡെപ്പോസിറ്റ് (RD) ആരംഭിക്കാൻ താല്പര്യപ്പെട്ട് ഒരു കസ്റ്റമർ ഓഫീസിലെത്തുന്നു. എനിക്ക് ഏറ്റവും കുറഞ്ഞത് എത്ര രൂപ വെച്ച് മാസം അടയ്ക്കാം, എത്ര കാലത്തേക്ക് ഈ നിക്ഷേപം നടത്താം? എന്ന് അദ്ദേഹം നിങ്ങളോട് ചോദിക്കുന്നു.",
    opts: [
     "സർ, കുറഞ്ഞത് ₹500 പ്രതിമാസം അടയ്ക്കണം. 1 മുതൽ 3 വർഷം വരെയാണ് കാലാവധി.",
    "സർ, കുറഞ്ഞത് ₹1,000 പ്രതിമാസം അടയ്ക്കണം. 1 മുതൽ 5 വർഷം വരെയാണ് ഇതിന്റെ കാലാവധി.",
   "സർ, കുറഞ്ഞത് ₹1,500 പ്രതിമാസം അടയ്ക്കണം. 2 മുതൽ 5 വർഷം വരെയാണ് കാലാവധി.",
    "സർ, കുറഞ്ഞത് ₹2,000 പ്രതിമാസം അടയ്ക്കണം. 1 മുതൽ 4 വർഷം വരെയാണ് കാലാവധി."
    ],
    a:  "സർ, കുറഞ്ഞത് ₹1,000 പ്രതിമാസം അടയ്ക്കണം. 1 മുതൽ 5 വർഷം വരെയാണ് ഇതിന്റെ കാലാവധി.",
    marks: 1
  },
  {
    // Q9 — 1 mark
    q: "സംഗീത് നിധി ലിമിറ്റഡിൽ ഒരു ഫിക്സഡ് ഡെപ്പോസിറ്റ് ആരംഭിക്കുന്നതിന് ആവശ്യമായ കുറഞ്ഞ ഷെയർ തുക (Minimum Share Amount) എത്രയാണ്?",
    opts: ["₹50", "₹100", "₹250", "₹500"],
    a: "₹100",
    marks: 1
  },
  {
    // Q10 — 1 mark
    q: "SML ഫിനാൻസ് ലിമിറ്റഡിൽ ₹25 ലക്ഷത്തിന് മുകളിലുള്ള NCD നിക്ഷേപങ്ങൾക്ക് ലഭ്യമായ വാർഷിക പലിശ നിരക്ക് (Annual Interest Rate) എത്രയാണ്?",
    opts: [
      "പ്രതിമാസ പലിശ 12.50%, വാർഷിക പലിശ 13.50%",
      "പ്രതിമാസ പലിശ 14.00%, വാർഷിക പലിശ 14.50%",
      "പ്രതിമാസ പലിശ 13.00%, വാർഷിക പലിശ 13.50%",
      "ഇവയൊന്നുമല്ല (None of the above)"
    ],
    a: "ഇവയൊന്നുമല്ല (None of the above)",
    marks: 1
  },
  {
    // Q11 — 1 mark
    q: "സംഗീത് നിധി ലിമിറ്റഡിൽ ഫിക്സഡ് ഡെപ്പോസിറ്റുകൾ (Fixed Deposits) ഏത് കാലാവധി വരെയാണ് ലഭ്യമാകുന്നത്?",
    opts: [
      "3 മാസം മുതൽ 3 വർഷം വരെ",
      "6 മാസം മുതൽ 3 വർഷം വരെ",
      "1 വർഷം മുതൽ 5 വർഷം വരെ",
      "6 മാസം മുതൽ 5 വർഷം വരെ"
    ],
    a: "6 മാസം മുതൽ 5 വർഷം വരെ",
    marks: 1
  },
  {
    // Q12 — 1 mark
    q: "സംഗീത് നിധിയിൽ 2 വർഷത്തേക്ക് FD തുടങ്ങിയ ഒരാൾ 1 വർഷം കഴിഞ്ഞപ്പോൾ അത് ക്ലോസ് ചെയ്യാൻ വരുന്നു. കാലാവധിക്ക് മുൻപ് നിക്ഷേപം പിൻവലിക്കുമ്പോൾ അദ്ദേഹത്തിന് എത്ര പലിശ ലഭിക്കുമെന്ന് നിങ്ങൾ വിശദീകരിക്കും?",
    opts: ["2 വർഷത്തെ പലിശ നിരക്ക് മുഴുവനായി ലഭിക്കും.", "പലിശ ലഭിക്കില്ല, നിക്ഷേപിച്ച തുക മാത്രം തിരികെ ലഭിക്കും.", "ആ നിക്ഷേപം എത്ര കാലം പൂർത്തിയാക്കിയോ ആ കാലാവധിക്കുള്ള പലിശയിൽ നിന്നും 2% കുറച്ചാണ് നൽകേണ്ടത്", "2 വർഷത്തെ പലിശയിൽ നിന്ന് 2% കുറച്ചത്"],
    a:  "ആ നിക്ഷേപം എത്ര കാലം പൂർത്തിയാക്കിയോ ആ കാലാവധിക്കുള്ള പലിശയിൽ നിന്നും 2% കുറച്ചാണ് നൽകേണ്ടത്",
    marks: 1
  },
  {
    // Q13 — 1 mark
    q: "SML ഫിനാൻസ് ലിമിറ്റഡ്, വഞ്ചിനാട് ഫിനാൻസ് (P) ലിമിറ്റഡ് എന്നിവയിലെ സബോർഡിനേറ്റ് ഡെറ്റ് നിക്ഷേപത്തിന് ആവശ്യമായ ഏറ്റവും കുറഞ്ഞ തുക എത്രയാണ്?",
    opts: ["₹5,000", "₹2,500", "₹1,000", "₹10,000"],
    a: "₹10,000",
    marks: 1
  },
  {
    // Q14 — 1 mark
    q: "കമ്പനി നിയമപ്രകാരം ഒരു RD ഇൻസെന്റീവ് എന്ന് മുതലാണ് സ്റ്റാഫിന് ലഭിക്കാൻ അർഹതയുള്ളത്?",
    opts: [
      "ആദ്യത്തെ ഇൻസ്റ്റാൾമെന്റ് അടച്ച ഉടൻ തന്നെ.",
      "മൂന്നാമത്തെ മാസത്തെ (3rd EMI) പേയ്‌മെന്റ് കഴിഞ്ഞാലുടൻ.",
      "ആറാമത്തെ മാസത്തെ തവണ (6th EMI) അടച്ചു കഴിഞ്ഞാൽ.",
      "ഒരു വർഷം പൂർത്തിയായാൽ മാത്രമേ ഇൻസെന്റീവ് ലഭിക്കൂ."
    ],
    a:   "ആറാമത്തെ മാസത്തെ തവണ (6th EMI) അടച്ചു കഴിഞ്ഞാൽ.",
    marks: 1
  },
  {
    // Q15 — 1 mark
    q: "NBFC-കളെയും (Non-Banking Financial Companies) നിധി കമ്പനികളെയും (Nidhi Companies) സംബന്ധിച്ച് താഴെ പറയുന്നവയിൽ ഏത് പ്രസ്താവനയാണ് ശരി?",
    opts: [
      "NBFC-കൾ MCA (കോർപ്പറേറ്റ് കാര്യ മന്ത്രാലയം) നിയന്ത്രിക്കുന്നു, നിധി കമ്പനികൾ RBI നിയന്ത്രിക്കുന്നു.",
      "NBFC-കൾ RBI (റിസർവ് ബാങ്ക് ഓഫ് ഇന്ത്യ) നിയന്ത്രിക്കുന്നു, നിധി കമ്പനികൾ MCA (കോർപ്പറേറ്റ് കാര്യ മന്ത്രാലയം) നിയന്ത്രിക്കുന്നു.",
      "ഇവ രണ്ടും നിയന്ത്രിക്കുന്നത് RBI ആണ്.",
      "ഇവ രണ്ടും നിയന്ത്രിക്കുന്നത് MCA ആണ്."
    ],
    a: "NBFC-കൾ RBI (റിസർവ് ബാങ്ക് ഓഫ് ഇന്ത്യ) നിയന്ത്രിക്കുന്നു, നിധി കമ്പനികൾ MCA (കോർപ്പറേറ്റ് കാര്യ മന്ത്രാലയം) നിയന്ത്രിക്കുന്നു.",
    marks: 1
  },
  {
    // Q16 — 1 mark
    q: "NCD എന്നതിന്റെ പൂർണ്ണരൂപം (Full Form) എന്താണ്?",
    opts: [
      "നോൺ കൺവെർട്ടിബിൾ ഡെപ്പോസിറ്റ് (Non Convertible Deposit)",
      "നോൺ ക്യാഷ് ഡിബഞ്ചർ (Non Cash Debenture)",
      "നോൺ കൺവെർട്ടിബിൾ ഡിബഞ്ചർ (Non Convertible Debenture)",
      "നാഷണൽ ക്രെഡിറ്റ് ഡെപ്പോസിറ്റ് (National Credit Deposit)"
    ],
    a: "നോൺ കൺവെർട്ടിബിൾ ഡിബഞ്ചർ (Non Convertible Debenture)",
    marks: 1
  },
  {
    // Q17 — 1 mark
    q: "ഒരു NCD-യിലെ \"പുട്ട് ഓപ്ഷൻ\" (Put Option) എന്നത് കൊണ്ട് അർത്ഥമാക്കുന്നത് എന്താണ്?",
    opts: [
      "കാലാവധി പൂർത്തിയാകുന്നതിന് മുമ്പ് കമ്പനിക്ക് നിക്ഷേപം തിരികെ വാങ്ങാം (Buy back).",
      "കാലാവധി പൂർത്തിയാകുന്നതിന് മുമ്പ് നിക്ഷേപകന് നിക്ഷേപം കമ്പനിക്ക് തിരികെ നൽകി പണം വാങ്ങാം (Sell back / Redeem / Close).",
      "കമ്പനിക്ക് നിക്ഷേപം മറ്റൊരു നിക്ഷേപകന് വിൽക്കാം.",
      "കാലാവധി പൂർത്തിയാകുന്നത് വരെ നിക്ഷേപകൻ അത് നിർബന്ധമായും കൈവശം വെക്കണം."
    ],
    a: "കാലാവധി പൂർത്തിയാകുന്നതിന് മുമ്പ് നിക്ഷേപകന് നിക്ഷേപം കമ്പനിക്ക് തിരികെ നൽകി പണം വാങ്ങാം (Sell back / Redeem / Close).",
    marks: 1
  },
  {
    // Q18 — 1 mark
    q: "ഒരു NCD \"സെക്യൂർഡ്\" (Secured) ആണെന്ന് പറയുന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത് എന്താണ്?",
    opts: [
      "സ്ഥിരമായ പലിശ ഉറപ്പുനൽകുന്നു (Fixed interest guarantee).",
      "സ്വർണ്ണമായി തിരിച്ചടയ്ക്കുന്നു (Repayment with gold).",
      "കമ്പനിയുടെ നിശ്ചിത ആസ്തികൾ ഈടായി (Collateral) Registrar of Companies യിൽ നൽകിയിരിക്കുന്നു.",
      "കേന്ദ്ര സർക്കാർ ഇൻഷുറൻസ് നൽകുന്നു (Government insurance)."
    ],
    a: "കമ്പനിയുടെ നിശ്ചിത ആസ്തികൾ ഈടായി (Collateral) Registrar of Companies യിൽ നൽകിയിരിക്കുന്നു.",
    marks: 1
  },
  {
    // Q19 — 1 mark
    q: "വഞ്ചിനാട് NCD നിക്ഷേപം 1 വർഷത്തിനും 2 വർഷത്തിനും ഇടയിൽ അവസാനിപ്പിക്കുകയാണെങ്കിൽ പലിശ നിരക്കിൽ എത്ര ശതമാനം കുറവ് വരും?",
    opts: ["1%", "2%", "0.50%", "കുറവ് ഉണ്ടാകില്ല (No cut)"],
    a: "2%",
    marks: 1
  },
  {
    // Q20 — 1 mark
    q: "SML ഫിനാൻസ് NCD-കൾ കാലാവധിക്ക് മുമ്പ് അവസാനിപ്പിക്കുന്നതിനെക്കുറിച്ചുള്ള (Closure Remark) ശരിയായ പ്രസ്താവന ഏതാണ്?",
    opts: [
      "3 മാസത്തിന് ശേഷം പിൻവലിക്കാം (Closure allowed after 3 months).",
      "2 വർഷത്തിന് ശേഷം പിൻവലിക്കാം (Closure allowed after 2 years).",
      "നിശ്ചിത നിബന്ധനകളോടെ 1 വർഷത്തിന് ശേഷം പിൻവലിക്കാം (Closure allowed after 1 year with conditions).",
      "കാലാവധിക്ക് മുമ്പ് പിൻവലിക്കാൻ സാധിക്കില്ല (No premature closing)."
    ],
    a: "നിശ്ചിത നിബന്ധനകളോടെ 1 വർഷത്തിന് ശേഷം പിൻവലിക്കാം (Closure allowed after 1 year with conditions).",
    marks: 1
  },
  {
    // Q21 — 1 mark
    q: "താഴെ പറയുന്നവയിൽ കാലാവധിക്ക് മുമ്പ് പിൻവലിക്കാൻ (Premature Closing) അനുവാദമില്ലാത്ത നിക്ഷേപ ഉൽപ്പന്നം ഏതാണ്?",
    opts: [
      "NCD (നോൺ കൺവെർട്ടിബിൾ ഡിബഞ്ചർ)",
      "സബ് ഡെറ്റ് (Subordinate Debt)",
      "ഫിക്സഡ് ഡെപ്പോസിറ്റ് (Fixed Deposit)",
      "മേൽപ്പറഞ്ഞവയെല്ലാം (All of the above)"
    ],
    a: "സബ് ഡെറ്റ് (Subordinate Debt)",
    marks: 1
  },
  {
    // Q22 — 1 marks
    q: "SML ഫിനാൻസ് ലിമിറ്റഡിൽ ₹25 ലക്ഷത്തിന് മുകളിലുള്ള സബ് ഡെറ്റ് (Sub Debt) നിക്ഷേപങ്ങൾക്ക് ലഭിക്കുന്ന വാർഷിക പലിശ നിരക്ക് (Yearly Interest Rate) എത്രയാണ്?",
    opts: ["12.50%", "13.50%", "14.50%", "13.00%"],
    a: "14.50%",
    marks: 1
  },
  {
    // Q23 — 2 mark
    q: "SML ഫിനാൻസ് ലിമിറ്റഡ് പോലുള്ള സ്ഥാപനങ്ങൾ നിക്ഷേപകർക്ക് ഉയർന്ന പലിശ നിരക്ക് (High Interest Rates) നൽകാൻ കഴിയുന്നതിന്റെ പ്രധാന കാരണം എന്താണ്?",
    opts: [
      "സർക്കാർ സ്ഥാപനങ്ങൾക്ക് വായ്പ നൽകുന്നതുകൊണ്ട് (Loans to government institutions).",
      "ദീർഘകാല വായ്പകൾ (Long term loans) നൽകുന്നതുകൊണ്ട്.",
      "കമ്പനിയുടെ പ്രധാന പ്രവർത്തനം സ്വർണ്ണപ്പണയ വായ്പകളാണ് (ഉയർന്ന മാർജിനുള്ള ഹ്രസ്വകാല സുരക്ഷിത വായ്പകൾ).",
      "ഉയർന്ന എൻ.പി.എ (High NPA) ഉള്ളതുകൊണ്ട്."
    ],
    a: "കമ്പനിയുടെ പ്രധാന പ്രവർത്തനം സ്വർണ്ണപ്പണയ വായ്പകളാണ് (ഉയർന്ന മാർജിനുള്ള ഹ്രസ്വകാല സുരക്ഷിത വായ്പകൾ).",
    marks: 2
  },
  {
    // Q24 — 1 mark
    q: "സംഗീത് നിധിയിലെ ഫിക്സഡ് ഡെപ്പോസിറ്റിന് (FD) ആവശ്യമായതും എന്നാൽ NCD നിക്ഷേപത്തിന് ആവശ്യമില്ലാത്തതുമായ രേഖ ഏതാണ്?",
    opts: [
      "പാൻ കാർഡ് (PAN Card)",
      "ആധാർ കാർഡ് (Aadhaar Card)",
      "ക്ലയന്റ് മാസ്റ്റർ റിപ്പോർട്ട് (Client Master Report - CMR)",
      "ഷെയർ ഫോം (Share Form)"
    ],
    a: "ഷെയർ ഫോം (Share Form)",
    marks: 1
  },
  {
    // Q25 — 1 mark
    q: "ആദായനികുതി ചട്ടപ്രകാരം, പലിശ വരുമാനത്തിൽ നിന്നും TDS (Tax Deducted at Source) ഒഴിവാക്കുന്നതിനായി 'ഫോം 15H' (Form 15H) സമർപ്പിക്കാൻ അർഹതയുള്ള വിഭാഗം ഏതാണ്?",
    opts: [
      "A. 60 വയസ്സിൽ താഴെയുള്ളവർ (Below 60 years)",
      "B. 60 വയസ്സിന് മുകളിലുള്ളവർ (Above 60 years)",
      "C. 80 വയസ്സിന് മുകളിലുള്ളവർ (Above 80 years)",
      "D. B, C എന്നിവർ (Both B & C)"
    ],
    a: "D. B, C എന്നിവർ (Both B & C)",
    marks: 1
  },
  {
    // Q26 — 1 mark
    q: "SML ഫിനാൻസ് വാഗ്ദാനം ചെയ്യുന്ന ഗോൾഡൻ ബോണ്ട് (Golden Bond) ഇൻസെന്റീവ് ശതമാനം (Incentive Percentage) എത്രയാണ്?",
    opts: ["0.50%", "1%", "2%", "5%"],
    a: "2%",
    marks: 1
  },
  {
    // Q27 — 1 mark
    q: "NCD ക്കു നൽകുന്ന ഇൻസെന്റീവ് (Incentive) ഏത് ക്രമത്തിലാണ് വിതരണം ചെയ്യുന്നത്?",
    opts: [
      "ഒറ്റത്തവണയായി (One time)",
      "വർഷത്തിൽ ഒരിക്കൽ (Yearly)",
      "മാസം തോറും (Monthly)",
      "മൂന്ന് മാസത്തിലൊരിക്കൽ (Quarterly)"
    ],
    a: "മാസം തോറും (Monthly)",
    marks: 1
  },
  {
    // Q28 — 1 marks
    q: "₹10 ലക്ഷം രൂപ 3 വർഷത്തെ കാലാവധിയിൽ NCD ആയി നിക്ഷേപിച്ചാൽ, ആകെ ലഭിക്കുന്ന ഇൻസെന്റീവ് വരുമാനം (Total Incentive) എത്രയായിരിക്കും?",
    opts: ["₹8,333", "₹10,000", "₹30,000", "₹55,000"],
    a: "₹30,000",
    marks: 1
  },
  {
    // Q29 — 1 mark
    q: "സംഗീത് നിധി ലിമിറ്റഡിലെ ഫിക്സഡ് ഡെപ്പോസിറ്റ് (Fixed Deposit) ജീവനക്കാരന് ലഭിക്കുന്ന  ഇൻസെന്റീവ് ശതമാനം (Incentive Percentage) എത്രയാണ്?",
    opts: ["5%", "0.50%", "1%", "2%"],
    a: "0.50%",
    marks: 1
  },
  {
    // Q30 — 1 mark
    q: "സംഗീത് നിധി ലിമിറ്റഡിൽ 2 വർഷത്തെ കാലാവധിയുള്ള ഫിക്സഡ് ഡെപ്പോസിറ്റുകൾക്ക് (Yearly FD) ലഭിക്കുന്ന വാർഷിക പലിശ നിരക്ക് എത്രയാണ്?",
    opts: ["9%", "12%", "11.5%", "10.50%"],
    a: "12%",
    marks: 1
  },
  {
    // Q31 — 1 mark
    q: "SML ഫിനാൻസ്, വഞ്ചിനാട് ഫിനാൻസ്  എന്നിവയിൽ നിക്ഷേപകരുടെ പണം സുരക്ഷിതമായി കരുതപ്പെടുന്നത് എന്തുകൊണ്ടാണ്?",
    opts: [
      "കോർപ്പറേറ്റ് കമ്പനികൾക്ക് വായ്പ നൽകുന്നതുകൊണ്ട് (Loans to corporates).",
      "കമ്പനിയുടെ പ്രധാന പ്രവർത്തനം സ്വർണ്ണപ്പണയത്തിലുള്ള ഹ്രസ്വകാല സുരക്ഷിത വായ്പകളാണ് (Lending against gold - short term secured loans).",
      "ഇത് സർക്കാർ ഉടമസ്ഥതയിലുള്ള സ്ഥാപനമാണ്.",
      "ഇതിന് സർക്കാർ ഇൻഷുറൻസ് പരിരക്ഷയുണ്ട്."
    ],
    a: "കമ്പനിയുടെ പ്രധാന പ്രവർത്തനം സ്വർണ്ണപ്പണയത്തിലുള്ള ഹ്രസ്വകാല സുരക്ഷിത വായ്പകളാണ് (Lending against gold - short term secured loans).",
    marks: 1
  },
  {
    // Q32 — 1 mark
    q: "SML ഫിനാൻസ് ലിമിറ്റഡിൽ ₹15 ലക്ഷത്തിന് മുകളിലുള്ള NCD നിക്ഷേപങ്ങൾക്ക് ലഭിക്കുന്ന പ്രതിമാസ പലിശ നിരക്ക് (Monthly Interest Rate) എത്രയാണ്?",
    opts: ["12.5%", "13%", "13.5%", "14.5%"],
    a: "13%",
    marks: 1
  },
  {
    // Q33 — 1 mark
    q: "മിസ്റ്റർ വർഗീസ് 4 വർഷവും 10 മാസവും മുൻപ് വഞ്ചിനാട് NCD-യിൽ നിക്ഷേപം നടത്തിയ ആളാണ്. പലിശ നഷ്ടം (Penalty) ഇല്ലാതെ തുക പിൻവലിക്കാൻ അദ്ദേഹം ആഗ്രഹിക്കുന്നു. താഴെ പറയുന്നവയിൽ ഏത് മറുപടിയാണ് നിങ്ങൾ അദ്ദേഹത്തിന് നൽകേണ്ടത്?",
    opts: [
      "സർ, താങ്കൾക്ക് ഇപ്പോൾ തന്നെ ക്ലോസ് ചെയ്യാം, പലിശയിൽ യാതൊരു കുറവും (No deduction) ഉണ്ടാകില്ല",
     "സർ, ഇപ്പോൾ ക്ലോസ് ചെയ്യുകയാണെങ്കിൽ ആകെ തുകയുടെ 2% പലിശ പെനാൽറ്റി ആയി കുറയ്ക്കുന്നതാണ്.",
      "സർ, ഇപ്പോൾ ക്ലോസ് ചെയ്യുകയാണെങ്കിൽ 0.5% പലിശ മാത്രമേ പെനാൽറ്റി ആയി കുറയ്ക്കുകയുള്ളൂ.",
    "സർ, വെറും 2 മാസം കൂടി കാത്തിരുന്നാൽ 5 വർഷം തികയുന്നതാണ്.  പലിശ നഷ്ടം ഇല്ലാതെ മുഴുവൻ തുകയും ലഭിക്കും."
    ],
    a:  "സർ, വെറും 2 മാസം കൂടി കാത്തിരുന്നാൽ 5 വർഷം തികയുന്നതാണ്.  പലിശ നഷ്ടം ഇല്ലാതെ മുഴുവൻ തുകയും ലഭിക്കും.",
    marks: 1
  },
  {
    // Q34 — 1 mark
    q: "മിസ്റ്റർ രാഘവൻ SML ഫിനാൻസ് ഓഫീസിൽ വന്ന് NCD-യെ കുറിച്ച് അന്വേഷിക്കുന്നു. അദ്ദേഹത്തിന് നിക്ഷേപിക്കാൻ താല്പര്യമുണ്ട്, പക്ഷേ ഡീമാറ്റ് അക്കൗണ്ട്  ഇല്ല എവിടെ പോയി ഇത് തുടങ്ങണം ചോദിക്കുന്നു ?",
    opts: [
     "സർ, Form 15H നൽകുകയാണെങ്കിൽ ഡീമാറ്റ് അക്കൗണ്ട് ഇല്ലാതെ തന്നെ ഫിസിക്കൽ സർട്ടിഫിക്കറ്റ് വഴി നിക്ഷേപം തുടരാൻ കമ്പനി അനുമതി നൽകുന്നുണ്ട്.",
     "സർ, താങ്കൾക്ക് അക്കൗണ്ട് ഇല്ലെങ്കിൽ ഫിസിക്കൽ ബോണ്ട് പേപ്പർ ആയി നൽകാൻ നിലവിൽ കമ്പനിയിൽ സൗകര്യമുണ്ട്.",
     "സർ, താങ്കൾ വഞ്ചിനാട് ഫിനാൻസിലോ , സംഗീത് നിധിയിലോ നിലവിൽ അക്കൗണ്ട് ഉള്ള ആളാണെങ്കിൽ പ്രത്യേകമായി ഡീമാറ്റ് അക്കൗണ്ട് ആവശ്യമില്ല.",
"സർ, NCD നിക്ഷേപം സെബി നിയമപ്രകാരം നടത്തുന്നതായതുകൊണ്ട്,  NCD-ക്കായി ഡീമാറ്റ് അക്കൗണ്ട് നിർബന്ധമാണ്. അത് തുടങ്ങാൻ കമ്പനി സഹായിക്കും."
    ],
    a: "സർ, NCD നിക്ഷേപം സെബി നിയമപ്രകാരം നടത്തുന്നതായതുകൊണ്ട്,  NCD-ക്കായി ഡീമാറ്റ് അക്കൗണ്ട് നിർബന്ധമാണ്. അത് തുടങ്ങാൻ കമ്പനി സഹായിക്കും.",
    marks: 1
  },
  {
    // Q35 — 1 mark
    q: "36 മാസം കാലാവധിയിൽ ഒരു RD ആരംഭിക്കാൻ ആഗ്രഹിക്കുന്ന കസ്റ്റമർ, ഇതിന് ലഭിക്കുന്ന പലിശ നിരക്ക്  എത്രയാണെന്ന് നിങ്ങളോട് ചോദിക്കു",
    opts: ["11%", "10%", "12%", "10.5%"],
    a: "12%",
    marks: 1
  },
  {
  
    // Q36 — 1 mark
    q: "SML ഗ്രൂപ്പിന്റെ Sub-debt സ്കീമിൽ ഏറ്റവും ഉയർന്ന പ്രതിമാസ പലിശ നിരക്കായ 14% ലഭിക്കണമെങ്കിൽ എത്ര രൂപ നിക്ഷേപിക്കണമെന്ന് ഒരു കസ്റ്റമർ നിങ്ങളോട് ചോദിക്കുന്നു.",
    opts: [
      "₹5 ലക്ഷത്തിന് മുകളിൽ",
      "₹5 ലക്ഷം – ₹24 ലക്ഷം",
      "₹25 ലക്ഷത്തിന് മുകളിൽ",
      "15 ലക്ഷത്തിന് മുകളിൽ"
    ],
    a: "₹25 ലക്ഷത്തിന് മുകളിൽ",
    marks: 1
  },
  {
    // Q37 — 1 mark
    q: "വലിയൊരു തുക Sub-debt ആയി നിക്ഷേപിക്കാൻ താല്പര്യപ്പെടുന്ന കസ്റ്റമർക്ക് പലിശ നിരക്കിലെ മാറ്റങ്ങൾക്കായി താഴെ പറയുന്ന ഏത് സ്ലാബുകളെക്കുറിച്ചാണ് നിങ്ങൾ വിശദീകരിക്കേണ്ടത്?",
    opts: [
      "₹1,000 < ₹1 ലക്ഷം | ₹1 ലക്ഷം < ₹10 ലക്ഷം | ₹10 ലക്ഷത്തിന് മുകളിൽ",
      "₹10,000 < ₹5 ലക്ഷം | ₹5 ലക്ഷം < ₹25 ലക്ഷം | ₹25 ലക്ഷത്തിന് മുകളിൽ",
      "₹5,000 < ₹5 ലക്ഷം | ₹5 ലക്ഷം < ₹25 ലക്ഷം | ₹25 ലക്ഷത്തിന് മുകളിൽ",
      "₹3 ലക്ഷം < ₹15 ലക്ഷം | ₹15 ലക്ഷം < ₹25 ലക്ഷം | ₹25 ലക്ഷത്തിന് മുകളിൽ"
    ],
    a:  "₹10,000 < ₹5 ലക്ഷം | ₹5 ലക്ഷം < ₹25 ലക്ഷം | ₹25 ലക്ഷത്തിന് മുകളിൽ",
    marks: 1
  },
  {
    // Q38 — 1 mark
    q: "പുതുതായി ചേർന്ന ഒരു സെയിൽസ് എക്സിക്യൂട്ടീവ് ഒരു RD നിക്ഷേപം സമാഹരിച്ചു. 1st EMI ക്കും രണ്ടാം വർഷം മുതലുള്ള EMI ക്കും എനിക്ക് ഒരേ നിരക്കിലാണോ ഇൻസെന്റീവ് ലഭിക്കുക? എന്ന് അദ്ദേഹം നിങ്ങളോട് ചോദിക്കുന്നു. ശരിയായ വിശദീകരണം ഏതാണ്?",
    opts: [
      "അല്ല, ആദ്യ തവണ 5% വും രണ്ടാം വർഷം മുതൽ അത് ഇരട്ടിയായി 10% വും ലഭിക്കും.",
     "അല്ല, ആദ്യ തവണ 5% വും രണ്ടാം വർഷം മുതൽ അത് പകുതിയായി 2.5% വും ലഭിക്കും.",
      "അല്ല, ആദ്യ തവണ 10% വും രണ്ടാം വർഷം മുതൽ അത് പകുതിയായി 5% വും ലഭിക്കും.",
     "അതെ, എല്ലാ തവണയും ഒരേപോലെ 2% വെച്ച് സ്ഥിരമായി ലഭിക്കും."
    ],
    a: "അല്ല, ആദ്യ തവണ 10% വും രണ്ടാം വർഷം മുതൽ അത് പകുതിയായി 5% വും ലഭിക്കും.",
    marks: 1
  },
  {
    // Q39 — 1 mark
    q: "ഒരു കസ്റ്റമർ NCD ആപ്ലിക്കേഷൻ ഫോം പൂരിപ്പിക്കുമ്പോൾ അതിൽ 'Secured Redeemable NCD' എന്ന് എഴുതിയിരിക്കുന്നത് ശ്രദ്ധിച്ചു. എന്താണ് ഈ റീഡീമബിൾ (Redeemable) എന്നതുകൊണ്ട് ഉദ്ദേശിക്കുന്നത്? എന്ന് അദ്ദേഹം നിങ്ങളോട് ചോദിക്കുന്നു.",
    opts: [
     "സർ, താങ്കൾക്ക് ഈ നിക്ഷേപം എപ്പോൾ വേണമെങ്കിലും ക്ലോസ് ചെയ്ത് തുക പിൻവലിക്കാം എന്നാണ് ഇതിനർത്ഥം.",
      "സർ, താങ്കൾക്ക് ആവശ്യമുള്ളപ്പോൾ നിക്ഷേപ തുക ഭാഗികമായി  പിൻവലിക്കാൻ സാധിക്കും എന്നാണ് ഇതിനർത്ഥം.",
     "സർ, കാലാവധി പൂർത്തിയാകുമ്പോൾ തുക തിരികെ നൽകുമെന്നോ, അല്ലെങ്കിൽ ലോക്ക്-ഇൻ പിരീഡിന് ശേഷം നിശ്ചിത നിബന്ധനകളോടെ പിൻവലിക്കാമെന്നോ ആണ് ഇതിനർത്ഥം."
    ],
    a: "സർ, കാലാവധി പൂർത്തിയാകുമ്പോൾ തുക തിരികെ നൽകുമെന്നോ, അല്ലെങ്കിൽ ലോക്ക്-ഇൻ പിരീഡിന് ശേഷം നിശ്ചിത നിബന്ധനകളോടെ പിൻവലിക്കാമെന്നോ ആണ് ഇതിനർത്ഥം.",
    marks: 1
  },
  {
    // Q40 — 1 mark
    q: "ഒരു നിക്ഷേപകൻ SML ഫിനാൻസിന്റെ NCD (ഡീമാറ്റ്) പദ്ധതിയിൽ പണം നിക്ഷേപിക്കാൻ താല്പര്യപ്പെടുന്നു. തന്റെ നിക്ഷേപത്തിന്മേൽ പലിശ  എങ്ങനെയാണ് ലഭിക്കുക എന്ന് അദ്ദേഹം നിങ്ങളോട് ചോദിക്കുന്നു.",
    opts: [
     "സർ, ഇതിൽ പലിശ ഓരോ മാസവും മാത്രമേ ലഭിക്കുകയുള്ളൂ.",
     "സർ, താങ്കൾക്ക് വർഷത്തിൽ ഒരിക്കൽ മാത്രമേ പലിശ ലഭിക്കാൻ അർഹതയുള്ളൂ.",
     "സർ, മൂന്ന് മാസത്തിലൊരിക്കൽ പലിശ ലഭിക്കുന്ന രീതി മാത്രമേ നിലവിലുള്ളൂ.",
     "സർ, താങ്കളുടെ സൗകര്യാർത്ഥം പ്രതിമാസമോ, മൂന്ന് മാസത്തിലൊരിക്കലോ അല്ലെങ്കിൽ വർഷത്തിലൊരിക്കലോ പലിശ കൈപ്പറ്റാവുന്നതാണ് (All of the above)."
    ],
    a: "സർ, ഇതിൽ പലിശ ഓരോ മാസവും മാത്രമേ ലഭിക്കുകയുള്ളൂ.",
    marks: 1
  },
  {
    // Q41 — 1 mark
    q: "മിസ്റ്റർ ചെറിയാൻ SML ഫിനാൻസിന്റെ NCD പദ്ധതിയിൽ ചേരാൻ ആഗ്രഹിക്കുന്നു. എന്നാൽ തന്റെ പക്കൽ നിലവിൽ ഡീമാറ്റ് അക്കൗണ്ട് ഇല്ലെന്നും അത് നിർബന്ധമാണോ എന്നും അദ്ദേഹം നിങ്ങളോട് ചോദിക്കുന്നു.",
    opts: [
     "സർ, താങ്കൾക്ക് താല്പര്യമുണ്ടെങ്കിൽ മാത്രം ഡീമാറ്റ് അക്കൗണ്ട് എടുത്താൽ മതി, അല്ലെങ്കിൽ ഫിസിക്കൽ സർട്ടിഫിക്കറ്റ് ലഭിക്കും.",
     "സർ, ₹15 ലക്ഷത്തിന് മുകളിലുള്ള നിക്ഷേപകർക്ക് മാത്രമേ ഡീമാറ്റ് അക്കൗണ്ട് നിർബന്ധമുള്ളൂ.",
      "സർ, സെബി (SEBI) നിയമപ്രകാരം SML ഫിനാൻസ് NCD-യിൽ നിക്ഷേപിക്കാൻ ഡീമാറ്റ് അക്കൗണ്ട് നിർബന്ധമാണ്.",
      "സർ, വഞ്ചിനാട് നിധിയിലെയും സങ്കീർണ്ണമായ മറ്റ് പദ്ധതികളിലെയും നിക്ഷേപങ്ങൾക്ക് മാത്രമേ ഡീമാറ്റ് അക്കൗണ്ട് ആവശ്യമുള്ളൂ."
    ],
    a:    "സർ, സെബി (SEBI) നിയമപ്രകാരം SML ഫിനാൻസ് NCD-യിൽ നിക്ഷേപിക്കാൻ ഡീമാറ്റ് അക്കൗണ്ട് നിർബന്ധമാണ്.",
    marks: 1
  },
  {
    // Q42 — 1 mark
    q: "SML ഫിനാൻസിന്റെ NCD (ഡീമാറ്റ്) പദ്ധതിയിൽ ചേരാൻ ആഗ്രഹിക്കുന്ന മിസ്റ്റർ ചെറിയാൻ, ഏത് ഡിപ്പോസിറ്ററിയിലാണ് (Depository) തനിക്ക് അക്കൗണ്ട് വേണ്ടതെന്ന് നിങ്ങളോട് ചോദിക്കുന്നു. ഒരു സ്റ്റാഫ് അംഗം എന്ന നിലയിൽ അദ്ദേഹത്തിന് നിങ്ങൾ നൽകുന്ന ശരിയായ മറുപടി എന്താണ്?",
    opts: [
      "Central Depository Services Limited",
      "National Securities Depository Limited",
      "Reserve Bank of India",
      "State Bank of India"
    ],
    a: "Central Depository Services Limited",
    marks: 1
  },
  {
    // Q43 — 2 marks
    q: "SML ഗ്രൂപ്പിന്റെ സോളാർ പദ്ധതിയിലേക്ക് ഒരു പുതിയ ഉപഭോക്താവിനെ (Qualified Lead) പരിചയപ്പെടുത്തുന്ന ജീവനക്കാരന് ലഭിക്കുന്ന ഇൻസെന്റീവ് തുക എത്രയാണ്?",
    opts: ["₹100", "₹250", "₹500", "₹1,000"],
    a: "₹250",
    marks: 2
  },
  {
    // Q44 — 1 mark
    q: "SML ഗ്രൂപ്പിന്റെ സോളാർ പദ്ധതിയിലേക്ക് ഒരു ഉപഭോക്താവിനെ പരിചയപ്പെടുത്തുമ്പോൾ (Lead), ഇൻസെന്റീവ് ലഭിക്കുന്നതിനായി താഴെ പറയുന്നവയിൽ ഏത് രേഖകളാണ് പ്രധാനമായും സമർപ്പിക്കേണ്ടത്?",
    opts: [
      "ആധാർ കാർഡും പാൻ കാർഡും.",
      "₹3,000-ത്തിന് മുകളിലുള്ള കറന്റ് ബില്ലും (Electricity Bill of 3000+), പൂരിപ്പിച്ച ലീഡ് ഫോമും (Lead Form).",
      "വീടിന്റെ ഉടമസ്ഥാവകാശ രേഖയും ഫോട്ടോയും.",
      "ബാങ്ക് പാസ്ബുക്കും റേഷൻ കാർഡും."
    ],
    a: "₹3,000-ത്തിന് മുകളിലുള്ള കറന്റ് ബില്ലും (Electricity Bill of 3000+), പൂരിപ്പിച്ച ലീഡ് ഫോമും (Lead Form).",
    marks: 1
  },
  {
    // Q45 — 1 mark
    q: "SML ഗ്രൂപ്പിന്റെ സോളാർ പദ്ധതിയിൽ, ഒരു ഉപഭോക്താവ് സോളാർ പാനൽ വിജയകരമായി സ്ഥാപിച്ചു കഴിഞ്ഞാൽ (Final Installation), അത് റഫർ ചെയ്ത ജീവനക്കാരന് ലഭിക്കുന്ന ഇൻസെന്റീവ് തുക എത്രയാണ്?",
    opts: [
      "₹500 ഒരു കിലോവാട്ടിന് (Per kW)",
      "₹1,000 ഒരു കിലോവാട്ടിന് (Per kW)",
      "₹2,000 ഒരു കിലോവാട്ടിന് (Per kW)",
      "ആകെ തുകയുടെ 1%"
    ],
    a: "₹1,000 ഒരു കിലോവാട്ടിന് (Per kW)",
    marks: 1
  }

];

// Verify total marks = 50
// 2-mark questions: Q1(idx0), Q7(idx6), Q22(idx21), Q28(idx27), Q43(idx42) = 5×2 = 10
// 1-mark questions: remaining 40 = 40×1 = 40
// Total = 50 ✓
 
// ── State ─────────────────────────────────────────────────────
var currentIndex      = 0;
var userAnswers       = {};
var isSubmitting      = false;
var shuffledQuestions = [];
var timerInterval     = null;
var timeRemaining     = 30 * 60; // 45 minutes in seconds
 
// ── Shuffle helper (for options only) ────────────────────────
function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  return arr;
}
 
// ── Start test on form submit — checks backend first ──────────
document.getElementById('detailsForm').addEventListener('submit', function(e) {
  e.preventDefault();
 
  var code = document.getElementById('code').value.trim();
  var btn  = this.querySelector('button[type="submit"]');
  btn.disabled    = true;
  btn.textContent = 'Checking...';
 
  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body:   JSON.stringify({ action: 'check', code: code })
  })
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if (res.status === 'duplicate') {
      alert('This Employee Code has already submitted the test. You cannot appear again.');
      btn.disabled    = false;
      btn.textContent = 'Start Test';
      return;
    }
    startTest();
  })
  .catch(function(err) {
    console.error('Check failed:', err);
    alert('Could not connect to server. Please check your internet and try again.');
    btn.disabled    = false;
    btn.textContent = 'Start Test';
  });
});
 
function startTest() {
  currentIndex = 0;
  userAnswers  = {};
  isSubmitting = false;
 
  // Build all 45 question blocks (no shuffling of questions, only options)
  var form = document.getElementById('testForm');
  form.innerHTML = '';
 
  shuffledQuestions = shuffle(questions.slice());
  shuffledQuestions.forEach(function(q, i) {
    var opts = q.opts.slice();
    var marksLabel = q.marks === 2
      ? '<span class="marks-badge two-marks">2 മാർക്ക്</span>'
      : '<span class="marks-badge one-mark">1 മാർക്ക്</span>';
 
    var div = document.createElement('div');
    div.className = 'question-block';
    div.innerHTML =
      '<p>' + (i + 1) + '. ' + q.q + ' ' + marksLabel + '</p>' +
      opts.map(function(o) {
        return '<label><input type="radio" name="q' + i + '" value="' + o + '"> ' + o + '</label>';
      }).join('');
    form.appendChild(div);
  });
 
  var nextBtn = document.getElementById('nextBtn');
  nextBtn.disabled    = false;
  nextBtn.textContent = 'Next';
 
  document.getElementById('detailsForm').style.display   = 'none';
  document.getElementById('testContainer').style.display = 'block';
  showQuestion(0);
  startTimer();
}
 
 
// ── Timer ─────────────────────────────────────────────────────
function startTimer() {
  timeRemaining = 30 * 60;
  updateTimerDisplay();
  timerInterval = setInterval(function() {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      if (!isSubmitting) {
        isSubmitting = true;
        saveAnswer(currentIndex);
        submitTest();
      }
    }
  }, 1000);
}
 
function updateTimerDisplay() {
  var mins = Math.floor(timeRemaining / 60);
  var secs = timeRemaining % 60;
  var display = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
  var el = document.getElementById('timerDisplay');
  if (el) {
    el.textContent = '\u23f1 ' + display;
    el.style.color      = timeRemaining <= 300 ? '#dc3545' : '#004d80';
    el.style.fontWeight = timeRemaining <= 300 ? 'bold' : '600';
  }
}
 
// ── Display one question ──────────────────────────────────────
function showQuestion(idx) {
  var blocks = document.querySelectorAll('.question-block');
  blocks.forEach(function(b) { b.style.display = 'none'; });
  blocks[idx].style.display = 'block';
 
  // Restore saved answer
  var saved = userAnswers['q' + idx];
  if (saved) {
    var radios = document.getElementsByName('q' + idx);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].value === saved) { radios[i].checked = true; break; }
    }
  }
 
  document.getElementById('questionCounter').textContent =
    'ചോദ്യം ' + (idx + 1) + ' / ' + questions.length;
  document.getElementById('prevBtn').style.display =
    idx > 0 ? 'inline-block' : 'none';
  document.getElementById('nextBtn').textContent =
    idx === questions.length - 1 ? 'Submit Answers' : 'Next';
}
 
// ── Save current answer ───────────────────────────────────────
function saveAnswer(idx) {
  var radios = document.getElementsByName('q' + idx);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) { userAnswers['q' + idx] = radios[i].value; return; }
  }
}
 
// ── Next / Submit button ──────────────────────────────────────
document.getElementById('nextBtn').addEventListener('click', function() {
  if (isSubmitting) return;
 
  var radios   = document.getElementsByName('q' + currentIndex);
  var answered = false;
  for (var i = 0; i < radios.length; i++) { if (radios[i].checked) { answered = true; break; } }
  if (!answered) { alert('ദയവായി ഒരു ഉത്തരം തിരഞ്ഞെടുക്കുക.'); return; }
 
  saveAnswer(currentIndex);
 
  if (currentIndex === questions.length - 1) {
    this.disabled    = true;
    this.textContent = 'Submitting...';
    isSubmitting     = true;
    clearInterval(timerInterval);
    submitTest();
  } else {
    currentIndex++;
    showQuestion(currentIndex);
  }
});
 
// ── Previous button ───────────────────────────────────────────
document.getElementById('prevBtn').addEventListener('click', function() {
  saveAnswer(currentIndex);
  currentIndex--;
  showQuestion(currentIndex);
});
 
// ── Calculate score (respects per-question marks) ─────────────
function calcScore() {
  var score = 0;
  shuffledQuestions.forEach(function(q, i) {
    if ((userAnswers['q' + i] || '') === q.a) {
      score += q.marks;
    }
  });
  return score;
}
 
// ── Calculate grade ───────────────────────────────────────────
function getGrade(score) {
  if (score >= 45) return 'Excellent';
  if (score >= 40) return 'Good';
  if (score >= 30) return 'Average';
if (score < 20) return 'Failed';
  return 'Training Needed';
}
 
// ── Submit test → Apps Script ─────────────────────────────────
function submitTest() {
  var score       = calcScore();
  var grade       = getGrade(score);
  var name        = document.getElementById('name').value.trim();
  var code        = document.getElementById('code').value.trim();
  var designation = document.getElementById('designation').value.trim();
  var branch      = document.getElementById('branch').value.trim();
 
  var payload = JSON.stringify({
    action:      'submit',
    name:        name,
    code:        code,
    designation: designation,
    branch:      branch,
    score:       score,
    grade:       grade
  });
 
  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body:   payload
  })
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if (res.status === 'duplicate') {
      console.warn('Already submitted:', res.message);
    } else {
      console.log('Saved:', res.message);
    }
  })
  .catch(function(err) {
    console.error('Network error (result still shown):', err);
  });
 
  // Show results immediately — never blocked by network
  showResults(score, grade, name, code, designation, branch);
}
 

// ── Show result screen ────────────────────────────────────────
function showResults(score, grade, name, code, designation, branch) {
  document.getElementById('testContainer').style.display    = 'none';
  document.getElementById('resultsContainer').style.display = 'block';
  document.getElementById('scoreDisplay').textContent = 'നിങ്ങളുടെ സ്കോർ: ' + score + ' / 50';
  document.getElementById('gradeDisplay').textContent = 'ഗ്രേഡ്: ' + grade;

  // Certificate for ALL scores
  document.getElementById('certificateMessage').textContent =
    '🎉 അഭിനന്ദനങ്ങൾ! നിങ്ങൾ പരീക്ഷ പൂർത്തിയാക്കി.';
  var certBtn = document.getElementById('downloadCertificateBtn');
  certBtn.style.display = 'inline-block';
  certBtn.onclick = function() { printCertificate(name, code, designation, branch, score, grade); };

  // Download responses
  var dlBtn = document.getElementById('downloadResponseBtn');
  dlBtn.style.display = 'inline-block';
  dlBtn.onclick = function() {
    var rows = shuffledQuestions.map(function(q, i) {
      var ans = userAnswers['q' + i] || '';
      return (i + 1) + '. ' + q.q +
             '\n   നിങ്ങളുടെ ഉത്തരം : ' + (ans || '(none)') +
             '\n   ശരിയായ ഉത്തരം   : ' + q.a +
             '\n   മാർക്ക്            : ' + (ans === q.a ? q.marks + '/' + q.marks : '0/' + q.marks);
    }).join('\n\n');

    var txt = 'SML Finance Class Room — Test Results\n' +
              '======================================\n' +
              'Name: ' + name + '  |  Code: ' + code + '\n' +
              'Designation: ' + designation + '  |  Branch: ' + branch + '\n' +
              'Score: ' + score + '/50  |  Grade: ' + grade + '\n\n' + rows;

    var blob = new Blob([txt], { type: 'text/plain' });
    var a    = document.createElement('a');
    a.href   = URL.createObjectURL(blob);
    a.download = 'response_' + code + '.txt';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
  };
}

// ── Print certificate ─────────────────────────────────────────
function printCertificate(name, code, designation, branch, score, grade) {
  var date = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  var win  = window.open('', '_blank', 'width=950,height=720');
  win.document.write(
'<!DOCTYPE html><html><head><title>Certificate</title></head><body>' +
'<style>' +
'body{font-family:"Times New Roman",serif;background:#eef2f7;margin:0;padding:30px}' +
'.cert{width:820px;min-height:560px;margin:auto;background:#fff;border:18px solid #004d80;' +
'      padding:40px 50px 100px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,.2);' +
'      position:relative;box-sizing:border-box}' +
'.logo{position:absolute;top:22px;left:22px;width:80px}' +
'h1{font-size:38px;color:#004d80;text-transform:uppercase;letter-spacing:3px;margin-top:30px}' +
'h2{font-size:16px;color:#555;margin-top:4px;font-weight:normal}' +
'.line{width:60%;border:none;border-top:1px solid #ccc;margin:18px auto}' +
'.emp{font-size:28px;font-weight:bold;color:#007bff;margin:14px 0}' +
'p{font-size:16px;line-height:1.9;margin:6px 0}' +
'.sigs{display:flex;justify-content:space-around;position:absolute;bottom:30px;left:10%;width:80%}' +
'.sigs div{text-align:center}' +
'.sigs span{display:block;border-top:1px solid #333;padding-top:6px;width:130px;font-size:14px}' +
'</style>' +
'<div class="cert">' +
'<img src="v.png" class="logo" alt="Logo">' +
'<h1>Certificate of Completion</h1>' +
'<h2>SML Finance Class Room &mdash; Investment Products Training</h2>' +
'<hr class="line">' +
'<p>This certifies that</p>' +
'<p class="emp">' + name + '</p>' +
'<p>has successfully completed the <strong>Investment Products Training Validation Test</strong>.</p>' +
'<p><strong>Employee Code:</strong> ' + code +
'  &bull; <strong>Designation:</strong> ' + designation +
'  &bull; <strong>Branch:</strong> ' + branch + '</p>' +
'<p><strong>Score:</strong> ' + score + ' / 50 &bull; <strong>Grade:</strong> ' + grade + '</p>' +
'<p><strong>Date:</strong> ' + date + '</p>' +
'<div class="sigs">' +
'  <div><span>HR Head</span></div>' +
'  <div><span>Training Head</span></div>' +
'</div></div>' +
'</body></html>');
  win.document.close();
  win.focus();
  win.print();
}
