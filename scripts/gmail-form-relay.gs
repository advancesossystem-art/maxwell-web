/**
 * Deploy once in Google Apps Script (free) so production forms send email
 * without storing Gmail passwords on Vercel.
 *
 * Setup:
 * 1. Open https://script.google.com → New project
 * 2. Paste this entire file → Save as "Maxwell Form Relay"
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me (maxwellelectrodealsystems@gmail.com)
 *    - Who has access: Anyone
 * 4. Copy the Web app URL → paste in src/lib/gmail-script-config.ts
 * 5. Push code → production forms work
 */

var INBOX = "maxwellelectrodealsystems@gmail.com";
var MAX_BODY_BYTES = 65536;

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ error: "Empty body" }, 400);
    }

    if (e.postData.contents.length > MAX_BODY_BYTES) {
      return jsonResponse({ error: "Payload too large" }, 413);
    }

    var data = JSON.parse(e.postData.contents);

    // Honeypot — bots only
    if (data.website_url) {
      return jsonResponse({ success: true });
    }

    if (!data.subject || !data.text) {
      return jsonResponse({ error: "Missing subject or text" }, 400);
    }

    var to = data.to || INBOX;
    var options = {
      htmlBody: data.html || undefined,
      replyTo: data.replyTo || undefined,
      name: "Maxwell Website",
    };

    GmailApp.sendEmail(to, String(data.subject), String(data.text), options);

    return jsonResponse({ success: true });
  } catch (err) {
    return jsonResponse({ error: String(err) }, 500);
  }
}

function jsonResponse(obj, status) {
  if (status && status >= 400) {
    obj._status = status;
  }
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
