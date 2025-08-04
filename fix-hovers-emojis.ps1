# Script para corregir hovers claros y emojis corrompidos
$iaFolder = "b:\LexIA\src\pages\ia"
$files = Get-ChildItem "$iaFolder\*.astro"

foreach ($file in $files) {
    Write-Host "Procesando: $($file.Name)"
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    
    # Corregir hovers claros por hovers oscuros
    $content = $content -replace 'hover:bg-gray-100', 'hover:bg-gray-800'
    $content = $content -replace 'hover:bg-white', 'hover:bg-gray-800'
    
    # Corregir emojis corrompidos comunes
    $content = $content -replace 'ðŸš€', '🚀'
    $content = $content -replace 'ðŸ'»', '💻'
    $content = $content -replace 'ðŸŽ¨', '🎨'
    $content = $content -replace 'ðŸ"§', '🔧'
    $content = $content -replace 'ðŸ"', '🔍'
    $content = $content -replace 'ðŸ"Š', '📊'
    $content = $content -replace 'ðŸ'', '💡'
    $content = $content -replace 'ðŸ›¡', '🛡'
    $content = $content -replace 'ðŸ"', '🔐'
    $content = $content -replace 'ðŸŽ¯', '🎯'
    $content = $content -replace 'ðŸ"ˆ', '📈'
    $content = $content -replace 'ðŸ"', '📋'
    $content = $content -replace 'ðŸ'Ž', '💎'
    $content = $content -replace 'ðŸŒ', '🌐'
    $content = $content -replace 'ðŸ"±', '📱'
    $content = $content -replace 'ðŸ–¥', '🖥'
    $content = $content -replace 'ðŸ"²', '📲'
    $content = $content -replace 'ðŸ†', '🏆'
    $content = $content -replace 'ðŸ"', '🔄'
    $content = $content -replace 'ðŸŽ"', '🎓'
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "✅ Corregido: $($file.Name)"
    } else {
        Write-Host "⚪ Sin cambios: $($file.Name)"
    }
}

Write-Host "`n🎉 Proceso completado!"
