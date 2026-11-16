# Albion Scan Market Pro 10.3 — simulador de transporte

## Cambios
- Añade un simulador de transporte orientado a buey T7.
- Capacidad base preconfigurada: 2.667 kg (valor normal de referencia; la capacidad efectiva puede cambiar por calidad, equipo, bolsa y buffs).
- Calcula viajes según peso del lote y un porcentaje de carga útil configurable.
- Estima tiempo total, coste directo, riesgo acumulado y reserva esperada por pérdidas.
- Permite aplicar el coste directo y una reserva de riesgo aproximada a los campos existentes del escáner.

## Importante sobre las estimaciones
- La ruta mixta se inicializa con 50% de tramo letal como supuesto editable, no como dato inferido.
- La probabilidad de muerte por viaje letal se inicializa en 5% como ejemplo editable, no como estadística ni predicción.
- El usuario debe introducir peso, valor del lote, duración, coste por viaje y valor de montura/equipo.
- La aplicación no calcula rutas reales, tráfico, gankers, hora del día ni probabilidad real de muerte.
- La reserva de riesgo aplicada al escáner es aproximada porque el motor actual modela una reserva porcentual sobre la exposición; revisar el desglose antes de decidir.
- No se inventa el peso de cada objeto: debe introducirse el peso total real del lote hasta incorporar una base de datos de pesos fiable.

## Compilación
Este ZIP contiene el proyecto web y la configuración Capacitor. Puede compilarse con VoltBuilder o con Capacitor/Android Studio. La compilación no ha sido ejecutada en este entorno.
