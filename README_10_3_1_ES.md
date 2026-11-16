# Albion Scan Market Pro 10.3.1

Versión correctiva derivada del paquete recuperado 10.3. No es la V10.4.

## Corrección incluida
- Corrige el cálculo de coste de materiales para simulaciones con varios lotes de una receta.
- El coste de materiales ahora acumula todos los lotes y se divide entre las unidades realmente producidas.
- El coste del transporte de materiales permanece separado y se aplica una sola vez por ciudad de origen externa.
- Actualiza las etiquetas visibles y metadatos de versión a 10.3.1.

## Verificación ejecutada
- Prueba de regresión de 5 lotes con dos materiales y retorno del 10%: coste esperado 1.150 S.
- Comprueba que el desglose individual por material sigue expresado por lote de receta.
- Comprueba separación de coste de materiales y transporte.
- Sintaxis del JavaScript inline comprobada con Node.js.

## Límites
- Estas pruebas no sustituyen una prueba integral dentro del juego ni una validación en un dispositivo Android.
- La API de Albion Online Data Project puede tener retrasos, datos incompletos y límites de consulta.
- La profundidad del libro BM son órdenes observadas, no ventas diarias garantizadas.
- La compilación Android y la firma APK todavía no se han ejecutado.
