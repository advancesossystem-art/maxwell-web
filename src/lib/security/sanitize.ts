/** Strip CR/LF to prevent email header injection in subject, from, reply-to. */
export function sanitizeEmailHeader(value: string): string {
  return value.replace(/[\r\n\u0000]/g, "").trim().slice(0, 998);
}

/** Remove control characters from user-provided text fields. */
export function sanitizeTextInput(value: string, maxLength = 8000): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}
