# Script para convertir páginas IA al tema oscuro
# Convierte automáticamente el diseño claro al diseño oscuro consistente

$paginasAConvertir = @(
    "ansible-lightspeed.astro",
    "codiumai-backup.astro", 
    "codiumai.astro",
    "deepcode.astro",
    "diagramgpt.astro",
    "diffblue-cover.astro",
    "dynatrace-davis-ai.astro",
    "galileo-ai.astro",
    "gemini-code-assist.astro",
    "gpt-4o.astro",
    "harness-ai-ops.astro",
    "mintlify.astro",
    "mutableai.astro",
    "sonarlint-ai.astro",
    "swimm.astro",
    "testim-ai.astro",
    "uizard.astro"
)

foreach ($archivo in $paginasAConvertir) {
    $rutaArchivo = "src\pages\ia\$archivo"
    
    if (Test-Path $rutaArchivo) {
        Write-Host "Convirtiendo $archivo..." -ForegroundColor Yellow
        
        # Leer contenido
        $contenido = Get-Content $rutaArchivo -Raw
        
        # Conversiones principales
        $contenido = $contenido -replace 'class="py-12 px-6 max-w-6xl mx-auto"', 'class="bg-black min-h-screen"'
        $contenido = $contenido -replace 'text-gray-900', 'text-white'
        $contenido = $contenido -replace 'text-gray-700', 'text-gray-300'
        $contenido = $contenido -replace 'text-gray-600', 'text-gray-400'
        $contenido = $contenido -replace 'text-gray-800', 'text-gray-200'
        $contenido = $contenido -replace 'bg-gray-50', 'bg-gray-800/50'
        $contenido = $contenido -replace 'bg-white', 'bg-gray-800/50'
        $contenido = $contenido -replace 'border-gray-200', 'border-gray-700'
        $contenido = $contenido -replace 'border-gray-300', 'border-gray-600'
        
        # Colores específicos por categoría
        $contenido = $contenido -replace 'bg-blue-50', 'bg-blue-900/30'
        $contenido = $contenido -replace 'bg-green-50', 'bg-green-900/30'
        $contenido = $contenido -replace 'bg-purple-50', 'bg-purple-900/30'
        $contenido = $contenido -replace 'bg-red-50', 'bg-red-900/30'
        $contenido = $contenido -replace 'bg-yellow-50', 'bg-yellow-900/30'
        $contenido = $contenido -replace 'bg-indigo-50', 'bg-indigo-900/30'
        $contenido = $contenido -replace 'bg-pink-50', 'bg-pink-900/30'
        $contenido = $contenido -replace 'bg-teal-50', 'bg-teal-900/30'
        
        # Bordes de colores
        $contenido = $contenido -replace 'border-blue-200', 'border-blue-600/30'
        $contenido = $contenido -replace 'border-green-200', 'border-green-600/30'
        $contenido = $contenido -replace 'border-purple-200', 'border-purple-600/30'
        $contenido = $contenido -replace 'border-red-200', 'border-red-600/30'
        $contenido = $contenido -replace 'border-yellow-200', 'border-yellow-600/30'
        $contenido = $contenido -replace 'border-indigo-200', 'border-indigo-600/30'
        $contenido = $contenido -replace 'border-pink-200', 'border-pink-600/30'
        $contenido = $contenido -replace 'border-teal-200', 'border-teal-600/30'
        
        # Texto de colores
        $contenido = $contenido -replace 'text-blue-900', 'text-blue-300'
        $contenido = $contenido -replace 'text-blue-800', 'text-blue-400'
        $contenido = $contenido -replace 'text-blue-700', 'text-blue-400'
        $contenido = $contenido -replace 'text-green-900', 'text-green-300'
        $contenido = $contenido -replace 'text-green-800', 'text-green-400'
        $contenido = $contenido -replace 'text-green-700', 'text-green-400'
        
        # Guardar archivo
        Set-Content -Path $rutaArchivo -Value $contenido -Encoding UTF8
        Write-Host "✅ $archivo convertido exitosamente" -ForegroundColor Green
    } else {
        Write-Host "❌ No se encontró $archivo" -ForegroundColor Red
    }
}

Write-Host "`n🎉 Conversión completada!" -ForegroundColor Cyan
Write-Host "Todas las páginas ahora tienen el tema oscuro consistente." -ForegroundColor White
