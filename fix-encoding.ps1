# Script para corregir problemas de codificacion en archivos de IA
$iaFolder = "b:\LexIA\src\pages\ia"
$files = Get-ChildItem "$iaFolder\*.astro"

# Definir reemplazos de caracteres mal codificados

foreach ($file in $files) {
    Write-Host "🔧 Procesando: $($file.Name)"
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    foreach ($key in $replacements.Keys) {
        $content = $content -replace [regex]::Escape($key), $replacements[$key]
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "✅ Corregido: $($file.Name)"
    } else {
        Write-Host "✨ Sin cambios: $($file.Name)"
    }
}

Write-Host "`n🎉 Proceso completado!"
