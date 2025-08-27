const { google } = require('googleapis');

exports.handler = async (event) => {
    try {
        // Parse the incoming data from the frontend
        const { details, answers, questions } = JSON.parse(event.body);
        const { name, code, designation, branch } = details;

        // Calculate the score
        let score = 0;
        questions.forEach((q, index) => {
            const userAnswer = answers[`question${index}`];
            if (userAnswer === q.answer) {
                score++;
            }
        });

        // Authenticate with Google Sheets using the service account credentials
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        // Get your spreadsheet ID from its URL
        const spreadsheetId = 'd/1dVJsvyms3XHVHJ47c2b0RuSIIG9PseXEiRU5fJ8md04'; 
        const range = 'Sheet1!A2'; 

        // Prepare the data to be written
        const values = [
            [new Date().toISOString(), name, code, designation, branch, score]
        ];
        const resource = { values };

        // Append the data to the spreadsheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            resource,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Data saved to Google Sheet!' })
        };
    } catch (error) {
        console.error('Error writing to Google Sheet:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to write data.' })
        };
    }
};