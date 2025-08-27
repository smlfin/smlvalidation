

exports.handler = async (event) => {
    try {
        const { employeeName, employeeCode, designation, branch, score } = JSON.parse(event.body);

        // Authenticate with Google Sheets using the service account credentials
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(process.env.GOOGLE_SHEETS_SERVICE_ACCOUNT),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });
        const sheets = google.sheets({ version: 'v4', auth });

        // Get your spreadsheet ID from its URL
        const spreadsheetId = '1dVJsvyms3XHVHJ47c2b0RuSIIG9PseXEiRU5fJ8md04'; 
        const range = 'Sheet1!A2'; // The range where your data will be appended

        // Prepare the data to be written
        const values = [
            [new Date().toISOString(), employeeName, employeeCode, designation, branch, score]
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