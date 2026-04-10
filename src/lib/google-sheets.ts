import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : '',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;

export async function appendToGoogleSheet(data: any) {
  try {
    if (!process.env.GOOGLE_SHEET_ID) {
      console.warn('GOOGLE_SHEET_ID is missing. Skipping Google Sheets sync.');
      return;
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.warn('Service Account credentials missing. Writing to Google Sheets requires a Service Account. API Keys only allow reading public sheets.');
      return;
    }

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, serviceAccountAuth);
    await doc.loadInfo(); 
    
    const sheet = doc.sheetsByIndex[0]; 
    
    // Check if the sheet has headers. If not, add them.
    // We try to load the header row to see if it exists
    try {
      await sheet.loadHeaderRow();
    } catch (e) {
      // If it fails, the sheet is likely empty
      await sheet.setHeaderRow([
        'Full Name', 
        'Email', 
        'Phone', 
        'Location', 
        'Service', 
        'Message', 
        'Registration Date'
      ]);
    }
    
    await sheet.addRow({
      'Full Name': data.fullName,
      'Email': data.email,
      'Phone': data.phone,
      'Location': data.location || 'N/A',
      'Service': data.service,
      'Message': data.message || 'N/A',
      'Registration Date': new Date().toLocaleString(),
    });
    
    console.log('✅ Successfully appended row to Google Sheet');
  } catch (error) {
    console.error('❌ Failed to append to Google Sheet:', error);
  }
}

/**
 * Fetches data from the Google Sheet using the API Key (Read-only)
 * The sheet MUST be public (Anyone with the link can view)
 */
export async function getGoogleSheetData() {
  try {
    if (!process.env.GOOGLE_SHEET_ID || !API_KEY) {
      return null;
    }

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
    await doc.useApiKey(API_KEY);
    await doc.loadInfo();
    
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    
    return rows.map(row => row.toObject());
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return null;
  }
}
