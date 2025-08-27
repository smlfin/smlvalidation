const questions = [
    {
        question: "Which of the following companies is a Nidhi Company?",
        options: ["SML Finance", "Vanchinad Finance", "Sangeeth Nidhi", "All of the above"],
        answer: "Sangeeth Nidhi"
    },
    {
        question: "Which of the following statements is true about NBFCs and Nidhi companies?",
        options: ["NBFCs are regulated by the Ministry of Corporate Affairs (MCA), and Nidhi Companies are regulated by the RBI.", "NBFCs are regulated by the RBI, and Nidhi Companies are regulated by the Ministry of Corporate Affairs (MCA).", "Both NBFCs and Nidhi Companies are regulated by the RBI.", "Both NBFCs and Nidhi Companies are regulated by the Ministry of Corporate Affairs (MCA)."],
        answer: "NBFCs are regulated by the RBI, and Nidhi Companies are regulated by the Ministry of Corporate Affairs (MCA)."
    },
    {
        question: "What is the full form of NCD?",
        options: ["Non-Convertible Deposit", "Non-Cash Debenture", "Non-Convertible Debenture", "National Credit Deposit"],
        answer: "Non-Convertible Debenture"
    },
    {
        question: "What does a 'put option' in an NCD mean?",
        options: ["The company has the option to buy back the NCD from the investor before the maturity date.", "The investor has the right to sell back the NCD to the company before the maturity date.", "The company has the right to sell the NCD to another investor.", "The investor must hold the NCD until the maturity date."],
        answer: "The investor has the right to sell back the NCD to the company before the maturity date."
    },
    {
        question: "What does it mean for an NCD to be 'secured'?",
        options: ["The company guarantees a fixed interest rate for the entire period.", "The company promises to repay the investors with gold.", "The company keeps specific assets as safety, which can be used to repay investors if anything goes wrong.", "The NCD is protected by a government-backed insurance policy."],
        answer: "The company keeps specific assets as safety, which can be used to repay investors if anything goes wrong."
    },
    {
        question: "What is the interest cut if a Vanchinad Finance NCD is closed between 1 and 2 years?",
        options: ["1%", "2%", "0.50%", "No cut"],
        answer: "2%"
    },
    {
        question: "What is the closure remark for SML Finance NCDs?",
        options: ["Closure allowed after 3 months.", "Closure allowed after 2 years.", "Closure allowed after 1 year.", "No premature closing allowed."],
        answer: "Closure allowed after 1 year."
    },
    {
        question: "Which of the following products from SML Finance Ltd and Vanchinad Finance (P) Ltd does NOT allow premature closing?",
        options: ["NCD", "Sub Debt", "Fixed Deposit", "All of the above"],
        answer: "Sub Debt"
    },
    {
        question: "For a Sub Debt (SD) investment of 25 Lakhs or above with SML Finance, what is the yearly interest rate?",
        options: ["12.50%", "13.50%", "14.50%", "13.00%"],
        answer: "14.50%"
    },
    {
        question: "What is the period for a Doubling Scheme Golden Bond?",
        options: ["5.5 years", "10 years", "6 years", "5 years"],
        answer: "6 years"
    },
    {
        question: "What is the reason given for the high-interest rates offered by the companies?",
        options: ["The loans are provided to government institutions.", "The loans are for long periods, which allows for higher interest collection.", "The companies primarily lend short-term, secured loans against liquid assets like gold.", "The companies have a high NPA, which they compensate for with higher interest rates."],
        answer: "The companies primarily lend short-term, secured loans against liquid assets like gold."
    },
    {
        question: "Which of the following documents is required for a Sangeeth Nidhi Fixed Deposit but not for an NCD?",
        options: ["PAN Card", "Aadhaar Card", "Client Master Report (CMR)", "Share Form"],
        answer: "Share Form"
    },
    {
        question: "Which category of customer has to submit Form 15H?",
        options: ["Normal Category (age below 60 years)", "Senior Citizen Category (age above 60 years)", "Super Senior Citizen Category (age above 80 years)", "Both Senior and Super Senior Citizen categories"],
        answer: "Both Senior and Super Senior Citizen categories"
    },
    {
        question: "What is the annual interest threshold above which Normal Category customers (age below 60) have to submit Form 15G?",
        options: ["₹2,50,000", "₹3,00,000", "₹5,000", "₹5,00,000"],
        answer: "₹2,50,000"
    },
    {
        question: "What is the incentive percentage for SML Finance and Vanchinad Finance on a Golden Bond?",
        options: ["0.50%", "1% PA", "2%", "5%"],
        answer: "1% PA"
    },
    {
        question: "How often is the incentive for NCDs paid out by SML Finance and Vanchinad Finance?",
        options: ["One time", "Yearly", "Monthly", "Quarterly"],
        answer: "Monthly"
    },
    {
        question: "What is the total incentive income for a 10 Lakhs NCD that closes in 3 years?",
        options: ["₹8,333", "₹10,000", "₹30,000", "₹55,000"],
        answer: "₹30,000"
    },
    {
        question: "What is the incentive percentage for Sangeeth Nidhi Fixed Deposits?",
        options: ["5%", "0.50%", "1%", "2%"],
        answer: "0.50%"
    },
    {
        question: "For a Sangeeth Nidhi Fixed Deposit with a period of 2 years, what is the yearly interest rate?",
        options: ["9%", "12%", "12.5%", "13%"],
        answer: "12.5%"
    },
    {
        question: "Which of the following is a key reason why an investor's money is considered safe with SML and Vanchinad Finance?",
        options: ["They only lend to large corporations with excellent credit scores.", "Their main business is lending against gold, which is a liquid asset.", "They are government-owned and therefore have state backing.", "They offer government-backed insurance on all investments."],
        answer: "Their main business is lending against gold, which is a liquid asset."
    },
    {
        question: "What is the monthly interest rate for a SML Finance NCD with an amount of 15 lakhs and above?",
        options: ["12.5%", "13%", "13.5%", "14.5%"],
        answer: "13%"
    },
    {
        question: "What is the penalty for a customer who closes a Vanchinad NCD after 3 years?",
        options: ["2% interest cut", "1% interest cut", "9% interest cut for the last 6 months", "No cut"],
        answer: "No cut"
    },
    {
        question: "If a customer says, 'I don’t have a Demat account,' which of the following is a valid option for them to invest in?",
        options: ["SML NCD", "Vanchinad NCD", "Only SML NCD with a free Demat account opening.", "Golden Bonds"],
        answer: "Golden Bonds"
    },
    {
        question: "What is the yearly interest rate for Sangeeth Nidhi Recurring Deposit (RD)?",
        options: ["5%", "9%", "12%", "12.5%"],
        answer: "12%"
    },
    {
        question: "Which of the following is NOT required for a Sangeeth Nidhi FD/RD?",
        options: ["Aadhaar Card", "Client Master Report (CMR)", "Share Money", "KYC Form"],
        answer: "Client Master Report (CMR)"
    },
    {
        question: "What is the maximum balance for which interest is available on a Sangeeth Nidhi Saving Deposit?",
        options: ["₹5,000", "₹1,000", "₹1,00,000", "No maximum limit"],
        answer: "₹1,00,000"
    },
    {
        question: "For Sangeeth Nidhi Recurring Deposits, what is the incentive for an employee?",
        options: ["5% of first EMI.", ".50% of first EMI.", "1% of the deposit.", "2% PA."],
        answer: "5% of first EMI."
    },
    {
        question: "A customer with an annual interest income of ₹3,50,000 is a Senior Citizen. Which form should they submit to avoid TDS, and is it accepted?",
        options: ["Form 15G; it is accepted.", "Form 15H; it is accepted.", "Form 15G; it is not accepted.", "Form 15H; it is not accepted, and 10% TDS will be applied."],
        answer: "Form 15H; it is not accepted, and 10% TDS will be applied."
    },
    {
        question: "For a Sub Debt investment of ₹10 Lakhs, what is the total incentive income for an employee, for 66 months?",
        options: ["₹833", "₹20,000", "₹30,000", "₹55,000"],
        answer: "₹55,000"
    },
    {
        question: "What is the monthly interest rate for a Sangeeth Nidhi Fixed Deposit with a period of 1 to 5 years?",
        options: ["9%", "12%", "12.5%", "5%"],
        answer: "12%"
    },
    {
        question: "What is the correct statement about a Demat account and investing in SML Finance NCD?",
        options: ["A Demat account is not required for SML Finance NCD.", "The company can help a customer open a Demat account for free to invest in SML Finance NCD.", "A Demat account is only required for amounts above 15 Lakhs.", "Only Vanchinad NCD requires a Demat account."],
        answer: "The company can help a customer open a Demat account for free to invest in SML Finance NCD."
    },
    {
        question: "What is a key difference between NCDs and FDs according to the training material?",
        options: ["NCDs are accepted by Nidhi Companies, while FDs are accepted by NBFCs.", "NCDs are debt instruments that can be converted into equity, while FDs cannot.", "NCDs are issued by NBFCs and FDs are accepted by Nidhi Companies.", "NCDs are regulated by the MCA, and FDs are regulated by the RBI."],
        answer: "NCDs are issued by NBFCs and FDs are accepted by Nidhi Companies."
    }
];

document.getElementById('detailsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('detailsForm').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';
    
    // Dynamically load questions
    const testForm = document.getElementById('testForm');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map(opt => `
                <label>
                    <input type="radio" name="question${index}" value="${opt}" required>
                    ${opt}
                </label>
            `).join('')}
        `;
        testForm.insertBefore(div, testForm.querySelector('button'));
    });
});

document.getElementById('testForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const answers = {};
    for (let [key, value] of formData.entries()) {
        answers[key] = value;
    }
    
    const details = {
        name: document.getElementById('name').value,
        code: document.getElementById('code').value,
        designation: document.getElementById('designation').value,
        branch: document.getElementById('branch').value
    };

    // Send data to Netlify Function
    const response = await fetch('/.netlify/functions/submit-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ details, answers, questions })
    });

    const result = await response.json();
    
    // Display results and download buttons
    document.getElementById('testContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    document.getElementById('scoreDisplay').textContent = `Your score is: ${result.score} out of ${questions.length}`;

    if (result.score >= questions.length * 0.7) { // 70% pass mark
        document.getElementById('certificateMessage').textContent = 'Congratulations! You passed the test.';
        document.getElementById('downloadCertificateBtn').style.display = 'block';
        
        document.getElementById('downloadCertificateBtn').addEventListener('click', () => {
             // Create and download certificate (simple version)
             const certificateContent = `
                 <h1>Certificate of Completion</h1>
                 <p>This certifies that <strong>${details.name}</strong></p>
                 <p>has successfully completed the training validation test.</p>
                 <p>Score: ${result.score} / ${questions.length}</p>
             `;
             const newWindow = window.open('', 'Certificate', 'width=800,height=600');
             newWindow.document.write(certificateContent);
             newWindow.document.close();
             newWindow.print();
        });
    } else {
        document.getElementById('certificateMessage').textContent = 'You did not pass. Please try again.';
    }

    document.getElementById('downloadResponseBtn').style.display = 'block';
    document.getElementById('downloadResponseBtn').addEventListener('click', () => {
        const responseData = {
            details: details,
            answers_submitted: result.userResponses,
            correct_answers: result.correctAnswers
        };
        const blob = new Blob([JSON.stringify(responseData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'your_response.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});