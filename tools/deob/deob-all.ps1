#!/usr/bin/env pwsh
# Batch webcrack deobfuscation over all copied pro-image bundles.
param(
  [string]$Work = (Join-Path $PSScriptRoot "work"),
  [string]$Out = (Join-Path $PSScriptRoot "out")
)
$ErrorActionPreference = "Continue"
$dirs = @("server-chunks", "client-chunks", "routes")
New-Item -ItemType Directory -Force -Path $Out | Out-Null
$jobs = @()
foreach ($d in $dirs) {
  $srcDir = Join-Path $Work $d
  if (-not (Test-Path $srcDir)) { continue }
  foreach ($f in Get-ChildItem $srcDir -File -Filter *.js) {
    $dest = Join-Path $Out "$d`_$($f.BaseName)"
    if ((Test-Path (Join-Path $dest "deobfuscated.js")) -and
        ((Get-Item (Join-Path $dest "deobfuscated.js")).LastWriteTime -gt $f.LastWriteTime)) {
      Write-Host "SKIP  $d/$($f.Name)"
      continue
    }
    Write-Host "CRACK $d/$($f.Name) ($([math]::Round($f.Length/1KB)) KB)"
    npx webcrack $f.FullName -o $dest 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) { Write-Host "FAIL  $d/$($f.Name) exit=$LASTEXITCODE" }
  }
}
Write-Host "DONE"
