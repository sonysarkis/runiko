# Deep Research — Runiko Barbería

> **Agente:** Researcher
> **Fecha:** 25 de abril de 2026
> **Cliente:** Runiko Barbería — San Antonio de Pereira, Antioquia
> **Preparado por:** Supernova Lab

---

## 1. Snapshot del negocio

| Atributo | Detalle |
|---|---|
| **Nombre** | Runiko Barbería |
| **Ubicación** | Mall San Bartolo, San Antonio de Pereira, Rionegro, Antioquia |
| **Canal de reserva** | Weibook (`book.weibook.co/runikobarberia`) |
| **Instagram** | [@runikobarberia](https://www.instagram.com/runikobarberia) |
| **Estrategia de tráfico** | Link en bio de Instagram → Weibook (UTM: `ig / social / link_in_bio`) |
| **Modelo de operación** | Barbería con reserva online, sin recepción visible |

> ⚠️ **Nota metodológica:** Tanto la página de Weibook como Instagram son aplicaciones JS dinámicas, lo que limita la extracción automática. Las métricas exactas (followers, posts, servicios, precios) deben confirmarse con el cliente. Este informe trabaja con **supuestos calibrados** basados en el mercado comparable de barberías premium en Rionegro y se marcan claramente como hipótesis (`H:`).

---

## 2. Contexto geográfico y de mercado

### 2.1 La zona — San Antonio de Pereira
San Antonio de Pereira es un **corregimiento de Rionegro** convertido en uno de los polos gastronómicos y de turismo doméstico del Oriente Antioqueño. Recibe alto flujo de visitantes de Medellín los fines de semana, especialmente parejas y familias con poder adquisitivo medio-alto.

**Implicaciones para Runiko:**
- El **fin de semana es premium** — clientes con disposición a gastar más, pero no fidelizables si vienen de fuera.
- **Lunes a jueves** = mercado local (residentes, oficinistas, profesionales del Oriente). Aquí se construye recurrencia.
- Mall San Bartolo es un centro comercial **de barrio**, no destino. La gente entra por tráfico orgánico del mall, no por publicidad masiva.

### 2.2 Competencia directa identificada
| Competidor | Ubicación | Precio corte | Diferenciador | Threat level |
|---|---|---|---|---|
| **Titan Barbería** | Calle 40, Rionegro | $27.000 | "Experiencia Titán", 5.0★ (35 reviews), barberos con +6 años, asesoría de imagen | 🔴 Alto |
| **Diegomez Barbershop** | San Antonio de Pereira | n/d | Clientela celebrities locales, reputación establecida | 🔴 Alto (mismo barrio) |
| **Francos Barbería Porvenir** | Cra 65, Rionegro | n/d | Presencia en Fresha, agendamiento online | 🟡 Medio |
| **Barbería San Lucas** | C.C. San Diego | n/d | Ubicación en mall (modelo similar) | 🟡 Medio |
| **Evolution Barbería** | Rionegro | n/d | Mencionada como "premium" en directorios | 🟡 Medio |

### 2.3 Benchmarks de pricing (Titan Barbería como ancla)
| Servicio | Precio | Duración |
|---|---|---|
| Corte Titán | $27.000 | 45 min |
| Corte + Barba | $36.000 | 60 min |
| Corte + Cejas | $29.000 | 50 min |
| Diseño de Barba | $18.000 | 20 min |

**Ticket promedio estimado para el segmento:** `$28.000 – $35.000 COP` (H)
**Ticket combo (corte + barba):** `~$36.000 COP`

---

## 3. Análisis del mercado — Tendencias 2025-2026 Colombia

### 3.1 Crecimiento del segmento
- El mercado de barberías en Colombia está **madurando rápidamente**. Los clientes ya distinguen entre barberías premium y de bajo costo.
- **Servicios premium en auge:** afeitado con navaja, cuidado integral de barba, asesoría de imagen, productos especializados.
- Las barberías ya no son lugares de servicio — son **experiencias de estilo de vida**.

### 3.2 Drivers de decisión del cliente premium
1. **Calidad técnica del barbero** (reputación, experiencia visible)
2. **Ambiente y experiencia sensorial** (música, aroma, decoración)
3. **Conveniencia de reserva** (online, sin llamadas, sin esperas)
4. **Productos premium** (originales, profesionales, no marca blanca)
5. **Personalización** (recordar el corte, preferencias del cliente)

### 3.3 Tendencias técnicas 2026
- **Retro moderno** (cortes clásicos años 50-60 con acabados frescos)
- **Diseño de barba escultural** (gran upsell)
- **Cuidado capilar masculino** (tratamientos, no solo cortes)
- **Sostenibilidad** (productos orgánicos, herramientas reutilizables)
- **Realidad aumentada** para previsualizar cortes (early stage en Colombia)

---

## 4. Stack digital actual de Runiko (auditoría)

| Componente | Estado | Observaciones |
|---|---|---|
| **Sitio web propio** | ❌ No tienen | Solo link a Weibook |
| **Sistema de reservas** | ✅ Weibook | Plataforma colombiana de booking, gratuita en plan básico |
| **Instagram** | ✅ Activo | Único canal de marketing visible |
| **WhatsApp Business** | ❓ No verificable desde fuera | Probable que existe pero no es CTA principal |
| **Google Business Profile** | ❓ A verificar | Crítico para tráfico local — muchas barberías locales lo descuidan |
| **Email marketing** | ❌ No evidencia | |
| **Programa de fidelización** | ❌ No evidencia | |
| **Reviews públicas** | ❓ No agregadas | Riesgo: sin social proof externo, dependen 100% de Instagram |
| **CRM** | ❌ No evidencia | Probablemente solo agenda en Weibook |

---

## 5. Funnel actual (reconstruido)

```
[Instagram @runikobarberia]
        ↓ link en bio
[Weibook booking page]
        ↓ selección de servicio + horario
[Reserva confirmada]
        ↓
[Cliente llega al Mall San Bartolo]
        ↓
[Servicio]
        ↓
[¿Recompra? — sin sistema de seguimiento visible]
```

### Puntos de fuga (leakage points) identificados
1. **DM en Instagram sin respuesta automatizada** → leads perdidos en horario no laboral.
2. **Weibook no captura datos enriquecidos** → no hay segmentación de clientes.
3. **Sin recordatorio post-cita** → no-shows estimados en `15-25%` (H, estándar del sector LATAM).
4. **Sin reactivación** → clientes que no vuelven en 30+ días no son contactados.
5. **Sin social proof externo** → depende exclusivamente del feed de Instagram.

---

## 6. SWOT

| | **Internas** | **Externas** |
|---|---|---|
| **Positivas** | **Strengths**<br>• Ubicación en zona de alto tráfico<br>• Sistema de reserva online ya implementado<br>• Identidad de marca definida en Instagram | **Opportunities**<br>• Mercado en crecimiento, segmento premium en auge<br>• Competencia local sin agentes IA aún<br>• Tendencias de personalización y experiencia<br>• Audiencia de fin de semana de Medellín (alto poder adquisitivo) |
| **Negativas** | **Weaknesses**<br>• Sin captura de leads automatizada<br>• Sin programa de retención<br>• Stack digital fragmentado (solo IG + Weibook)<br>• Sin diferenciación visible en pricing/oferta vs. Titán | **Threats**<br>• Titán y Diegomez ya tienen tracción<br>• Mall San Bartolo no atrae destino, depende del flujo del centro comercial<br>• Cliente premium fácilmente migrable si encuentra mejor experiencia |

---

## 7. Hipótesis de negocio (para validar con el cliente)

| # | Hipótesis | Cómo validar |
|---|---|---|
| H1 | El cuello de botella no es atraer leads, es **convertirlos y retenerlos** | Pedir métricas de Weibook: visitas vs. reservas |
| H2 | Existe alta tasa de **no-show** (15-25%) | Pedir reporte de Weibook |
| H3 | La mayoría de DMs en Instagram **no se contestan rápido** | Auditar tiempos de respuesta de últimos 30 días |
| H4 | No existe segmentación de cliente premium vs. ocasional | Confirmar con dueño |
| H5 | El ticket promedio está **subutilizado** — falta upsell sistemático | Auditar mix de servicios vendidos |

---

## 8. Datos pendientes de Runiko (para v2)

Para pasar de propuesta a implementación, se requieren:

1. Lista completa de servicios + precios actuales
2. Volumen mensual de citas (últimos 3 meses)
3. % de no-show actual
4. Distribución de clientes (nuevos vs. recurrentes)
5. Servicios más vendidos
6. Días/horarios pico
7. Volumen de DMs en Instagram (últimos 30 días)
8. Tiempo promedio de respuesta a DMs
9. Acceso a Weibook API (si existe) o exportación de CSV
10. Confirmación si tienen WhatsApp Business y bajo qué número

---

**Conclusión del Researcher:**
> Runiko opera en un mercado favorable y tiene los **fundamentos digitales mínimos** (IG + Weibook), pero no captura ni retiene activamente. El upside está en **automatizar el ciclo conversacional completo**: pre-venta (calificación), reserva (asistencia conversacional), y post-venta (recordatorios + reactivación). Esa es la oportunidad que el Strategist desarrollará.
