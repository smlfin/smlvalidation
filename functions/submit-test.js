const admin = require('firebase-admin');

// Initialize Firebase Admin SDK (fetch from environment variables)
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { details, answers, questions } = JSON.parse(event.body);

  let score = 0;
  const userResponses = {};
  const correctAnswers = {};

  questions.forEach((q, index) => {
    const questionKey = `question${index}`;
    userResponses[q.question] = answers[questionKey];
    correctAnswers[q.question] = q.answer;

    if (answers[questionKey] === q.answer) {
      score++;
    }
  });

  const timestamp = admin.firestore.FieldValue.serverTimestamp();
  
  try {
    // Store data in Firestore
    await db.collection('test_submissions').add({
      ...details,
      score,
      totalQuestions: questions.length,
      userResponses,
      correctAnswers,
      submittedAt: timestamp
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Test submitted successfully!',
        score,
        userResponses,
        correctAnswers
      })
    };
  } catch (error) {
    console.error('Error writing to Firestore:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error submitting test.' })
    };
  }
};