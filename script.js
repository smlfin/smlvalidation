const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Earth", "Saturn"],
        answer: "Jupiter"
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