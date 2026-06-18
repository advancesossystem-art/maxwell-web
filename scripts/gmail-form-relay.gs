/**
 * Maxwell Electrodeal — form email relay
 *
 * TWO ways this script sends email (same inbox, same MailApp API):
 *
 * A) GOOGLE FORM (your consultation form)
 *    - Bind onFormSubmit to your form: Triggers → Add trigger → onFormSubmit
 *    - Fires when someone submits the linked Google Form
 *
 * B) WEBSITE FORMS (homepage assessment, book-consultation, contact, etc.)
 *    - Deploy → New deployment → Web app
 *      Execute as: Me (maxwellelectrodealsystems@gmail.com)
 *      Who has access: Anyone
 *    - Copy the /exec URL → Vercel env GMAIL_APPS_SCRIPT_URL
 *    - Website POSTs JSON to doPost (via /api/leads on maxwellelectrodeal.com)
 *
 * Optional: Script Properties → RELAY_SECRET = same as Vercel GMAIL_APPS_SCRIPT_SECRET
 */

var INBOX = "maxwellelectrodealsystems@gmail.com";
var MAX_BODY_BYTES = 65536;
var RELAY_SECRET = PropertiesService.getScriptProperties().getProperty("RELAY_SECRET");

// ── B) Website relay (POST JSON from Vercel / Next.js) ─────────────────────

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ error: "Empty body" }, 400);
    }

    if (e.postData.contents.length > MAX_BODY_BYTES) {
      return jsonResponse({ error: "Payload too large" }, 413);
    }

    var data = JSON.parse(e.postData.contents);

    if (RELAY_SECRET) {
      if (data.secret !== RELAY_SECRET) {
        return jsonResponse({ error: "Unauthorized" }, 401);
      }
    }

    // Honeypot — bots only (website sends website_url: "")
    if (data.website_url) {
      return jsonResponse({ success: true });
    }

    if (!data.subject || !data.text) {
      return jsonResponse({ error: "Missing subject or text" }, 400);
    }

    var to = data.to || INBOX;
    var replyTo = data.replyTo || undefined;
    if (replyTo && String(replyTo).toLowerCase() === String(to).toLowerCase()) {
      replyTo = undefined;
    }

    MailApp.sendEmail({
      to: to,
      subject: String(data.subject),
      body: String(data.text),
      htmlBody: data.html || String(data.text),
      replyTo: replyTo,
      name: "Maxwell Website",
    });

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

// ── A) Google Form consultation (onFormSubmit trigger) ─────────────────────

function onFormSubmit(e) {
  var data = e.namedValues;

  var fullName = data["Full Name"] ? data["Full Name"][0] : "";
  var workEmail = data["Work Email"] ? data["Work Email"][0] : "";
  var company = data["Company"] ? data["Company"][0] : "";
  var phone = data["Phone"] ? data["Phone"][0] : "";
  var service = data["Service Needed"] ? data["Service Needed"][0] : "";
  var budget = data["Project Budget"] ? data["Project Budget"][0] : "";
  var details = data["Project Details"] ? data["Project Details"][0] : "";

  MailApp.sendEmail({
    to: INBOX,
    subject: "New Consultation Request — " + fullName,
    htmlBody:
      '<div style="font-family:Arial,sans-serif">' +
      "<h2>New Consultation Request</h2>" +
      '<table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">' +
      tableRow("Full Name", fullName) +
      tableRow("Work Email", workEmail) +
      tableRow("Company", company) +
      tableRow("Phone", phone) +
      tableRow("Service Needed", service) +
      tableRow("Project Budget", budget) +
      tableRow("Project Details", details) +
      "</table><br>" +
      "<p><strong>Submitted:</strong> " +
      new Date() +
      "</p></div>",
  });

  if (workEmail) {
    MailApp.sendEmail({
      to: workEmail,
      subject: "Consultation Request Received",
      htmlBody:
        '<div style="font-family:Arial,sans-serif">' +
        "<h2>Thank You for Contacting Maxwell Electrodeal</h2>" +
        "<p>Dear " +
        escapeHtml(fullName) +
        ",</p>" +
        "<p>We have successfully received your consultation request.</p>" +
        "<p>Our team will review your requirements and contact you within one business day.</p>" +
        "<h3>Your Request Summary</h3>" +
        "<ul>" +
        "<li><strong>Service:</strong> " +
        escapeHtml(service) +
        "</li>" +
        "<li><strong>Budget:</strong> " +
        escapeHtml(budget) +
        "</li>" +
        "</ul>" +
        "<p>Regards,<br>Maxwell Electrodeal</p></div>",
    });
  }
}

function tableRow(label, value) {
  return (
    "<tr><td><strong>" +
    escapeHtml(label) +
    "</strong></td><td>" +
    escapeHtml(value || "") +
    "</td></tr>"
  );
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
