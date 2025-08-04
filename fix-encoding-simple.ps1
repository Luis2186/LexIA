# Script para corregir problemas de codificacion
$iaFolder = "b:\LexIA\src\pages\ia"
$files = Get-ChildItem "$iaFolder\*.astro"

foreach ($file in $files) {
    Write-Host "Procesando: $($file.Name)"
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Correcciones basicas de caracteres especiales
    $content = $content -replace 'Â¿', '¿'
    $content = $content -replace 'QuÃ©', 'Qué'
    $content = $content -replace 'CÃ³mo', 'Cómo'
    $content = $content -replace 'diseÃ±o', 'diseño'
    $content = $content -replace 'aplicaciÃ³n', 'aplicación'
    $content = $content -replace 'integraciÃ³n', 'integración'
    $content = $content -replace 'configuraciÃ³n', 'configuración'
    $content = $content -replace 'automÃ¡tica', 'automática'
    $content = $content -replace 'prÃ¡cticos', 'prácticos'
    $content = $content -replace 'bÃ¡sicos', 'básicos'
    $content = $content -replace 'anÃ¡lisis', 'análisis'
    $content = $content -replace 'fÃ¡cil', 'fácil'
    $content = $content -replace 'rÃ¡pido', 'rápido'
    $content = $content -replace 'mÃ¡s', 'más'
    $content = $content -replace 'tÃ©cnicas', 'técnicas'
    $content = $content -replace 'InstalaciÃ³n', 'Instalación'
    $content = $content -replace 'TÃ©cnicas', 'Técnicas'
    $content = $content -replace 'PrÃ¡cticos', 'Prácticos'
    $content = $content -replace 'DescripciÃ³n', 'Descripción'
    $content = $content -replace 'caracterÃ­sticas', 'características'
    $content = $content -replace 'ðŸš€', '🚀'
    $content = $content -replace 'ðŸŽ¨', '🎨'
    $content = $content -replace 'ðŸ"§', '🔧'
    $content = $content -replace 'ðŸ''', '💡'
    $content = $content -replace 'ðŸ"Š', '📊'
    $content = $content -replace 'ðŸ"', '🔍'
    $content = $content -replace 'â†'', '→'
    $content = $content -replace 'â€¢', '•'
    $content = $content -replace 'â€œ', '"'
    $content = $content -replace 'â€', '"'
    $content = $content -replace 'â€™', "'"
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Corregido: $($file.Name)"
    }
}

Write-Host "Proceso completado!"
