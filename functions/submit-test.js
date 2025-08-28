const { google } = require('googleapis');

exports.handler = async (event) => {
    try {
        const { details, score, grade } = JSON.parse(event.body);
        const { name, code, designation, branch } = details;

        if (!name || !code || !designation || !branch || score === undefined || !grade) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required data.' })
            };
        }

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1dVJsvyms3XHVHJ47c2b0RuSIIG9PseXEiRU5fJ8md04';
        const range = 'Sheet1!A:C'; // Updated range to check Employee Code

        // Read the first two columns to check for existing codes
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });

        const existingValues = response.data.values || [];
        const isAlreadySubmitted = existingValues.some(row => row[1] === code);

        if (isAlreadySubmitted) {
            return {
                statusCode: 409, // Conflict
                body: JSON.stringify({ error: 'This Employee Code has already submitted the test.' })
            };
        }

        const values = [
            [new Date().toISOString(), name, code, designation, branch, score, grade]
        ];
        const resource = { values };
        
        // Append the new data
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A2',
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