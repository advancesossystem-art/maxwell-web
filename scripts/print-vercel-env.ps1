# Prints Gmail env vars from .env.local for Vercel → Project → Settings → Environment Variables
# Run: powershell -File scripts/print-vercel-env.ps1

$envFile = Join-Path (Split-Path $PSScriptRoot -Parent) ".env.local"
if (-not (Test-Path $envFile)) {
  Write-Host "Missing .env.local — create it from .env.local.example first." -ForegroundColor Red
  exit 1
}

Write-Host "`nAdd these in Vercel (Production + Preview):`n" -ForegroundColor Cyan

Get-Content $envFile | ForEach-Object {
  $line = $_.Trim()
  if (-not $line -or $line.StartsWith("#")) { return }
  $eq = $line.IndexOf("=")
  if ($eq -lt 1) { return }
  $key = $line.Substring(0, $eq).Trim()
  if ($key -match "^(GMAIL_|LEAD_NOTIFICATION_|NEXT_PUBLIC_)") {
    Write-Host "  $line"
  }
}

Write-Host "`nThen redeploy the site (Deployments → Redeploy).`n" -ForegroundColor Yellow
