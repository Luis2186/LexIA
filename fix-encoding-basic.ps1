$files = Get-ChildItem "b:\LexIA\src\pages\ia\*.astro"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Reemplazos básicos de codificación
    $content = $content -replace 'Ã¡', 'á'
    $content = $content -replace 'Ã©', 'é'
    $content = $content -replace 'Ã­', 'í'
    $content = $content -replace 'Ã³', 'ó'
    $content = $content -replace 'Ãº', 'ú'
    $content = $content -replace 'Ã±', 'ñ'
    $content = $content -replace 'Â¿', '¿'
    $content = $content -replace 'QuÃ©', 'Qué'
    $content = $content -replace 'CÃ³mo', 'Cómo'
    $content = $content -replace 'AnÃ¡lisis', 'Análisis'
    $content = $content -replace 'GeneraciÃ³n', 'Generación'
    $content = $content -replace 'AutomÃ¡tico', 'Automático'
    $content = $content -replace 'IntervenciÃ³n', 'Intervención'
    $content = $content -replace 'EspecÃ­ficos', 'Específicos'
    $content = $content -replace 'TÃ­pico', 'Típico'
    $content = $content -replace 'SoluciÃ³n', 'Solución'
    $content = $content -replace 'automÃ¡tico', 'automático'
    $content = $content -replace 'estÃ¡tico', 'estático'
    $content = $content -replace 'lÃ­der', 'líder'
    $content = $content -replace 'cÃ³digo', 'código'
    $content = $content -replace 'guÃ­a', 'guía'
    $content = $content -replace 'aÃ±os', 'años'
    
    Set-Content $file.FullName $content -Encoding UTF8
    Write-Host "Procesado: $($file.Name)"
}

Write-Host "Completado!"
