const { google } = require('googleapis');

exports.handler = async (event) => {
    try {
        const { details, score, grade } = JSON.parse(event.body);
        const { name, code, designation, branch } = details;

        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        const spreadsheetId = '1dVJsvyms3XHVHJ47c2b0RuSIIG9PseXEiRU5fJ8md04';
        const range = 'Sheet1!A2'; 
        const values = [
            [new Date().toISOString(), name, code, designation, branch, score, grade]
        ];
        const resource = { values };

        await sheets.spreadsheets.values.append({
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