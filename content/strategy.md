# Estrategia de Marketing & Ventas — Runiko Barbería

> **Agente:** Strategist
> **Insumo:** `research.md`
> **Preparado por:** Supernova Lab
> **Horizonte:** 90 días

---

## Tesis estratégica

> **Runiko no necesita más leads. Necesita una máquina conversacional que califique, agende, recuerde y reactive — sin que nadie tenga que escribir un solo mensaje a mano.**

El mercado de barberías premium en Rionegro está en crecimiento, pero la diferenciación operativa (no técnica) es la ventaja sostenible. Mientras Titán y Diegomez compiten en calidad de corte, **Runiko puede competir en experiencia digital end-to-end**.

---

## Las 5 oportunidades priorizadas

Matriz de **Impacto** (revenue/retención) vs. **Esfuerzo** (días de implementación).

| # | Iniciativa | Impacto | Esfuerzo | ROI estimado | Prioridad |
|---|---|---|---|---|---|
| 1 | **Agente cualificador WhatsApp + IG** | 🟢 Alto | 🟡 Medio (5-7 días) | +30% conversión DM→cita | 🔥 P0 |
| 2 | **Recordatorios automáticos pre-cita** | 🟢 Alto | 🟢 Bajo (2 días) | -50% no-shows | 🔥 P0 |
| 3 | **Reactivación de clientes inactivos (30+ días)** | 🟢 Alto | 🟢 Bajo (3 días) | +15% recompra | 🔥 P0 |
| 4 | **Programa de fidelización gamificado** | 🟡 Medio | 🟡 Medio (7 días) | +20% LTV | P1 |
| 5 | **Reviews automatizadas post-servicio (Google)** | 🟡 Medio | 🟢 Bajo (1 día) | +SEO local | P1 |

---

## OPORTUNIDAD 1 — Agente cualificador conversacional (P0)

### Problema actual
- DMs en Instagram caen fuera de horario → leads se enfrían
- Mensajes repetitivos ("¿abren hoy?", "¿precio del corte?") consumen tiempo del barbero
- No hay calificación: cliente premium recibe mismo trato que cliente ocasional

### Solución
Agente conversacional con IA que:
1. Responde 24/7 en WhatsApp + Instagram DM
2. Califica al lead (servicio de interés, presupuesto implícito, urgencia)
3. Agenda directamente en Weibook (o handoff a humano si requiere validación)
4. Captura email + nombre + preferencias para CRM

### KPIs objetivo (90 días)
- Tiempo de primera respuesta: **< 30 segundos** (vs. probablemente 2-12 horas hoy)
- Conversión DM → cita confirmada: **40%** (vs. estimado 15-20% hoy)
- Citas agendadas vía agente: **60% del total** en mes 3

### Stack propuesto
- **WhatsApp Business API** (vía 360dialog o Twilio — costo ~$50 USD/mes + $0.005/msg)
- **n8n self-hosted en Render** (gratis)
- **Claude Haiku 4.5** (modelo IA — barato y rápido para conversaciones)
- **Weibook API o Zapier intermedio** para crear citas

> Diseño detallado: ver `agent-design.md`

---

## OPORTUNIDAD 2 — Recordatorios automáticos (P0)

### Problema
- No-show estimado: 15-25% del agendamiento
- Cada no-show ≈ $30k COP perdidos + slot ocioso

### Solución
Workflow automatizado:
- **24h antes:** WhatsApp recordatorio + opción de reconfirmar/cancelar con 1 clic
- **2h antes:** Recordatorio final + tip de llegar 5min antes
- **Si cancela:** ofrecer reagendamiento inmediato (lista de espera)

### Impacto financiero (asumiendo H: 200 citas/mes, 20% no-show)
- Hoy: 40 no-shows/mes × $30k = **$1.2M COP perdidos/mes**
- Con sistema: ~10 no-shows/mes × $30k = $300k perdidos
- **Ganancia recuperada: ~$900k COP/mes**

### Stack
Mismo agente del P0-1 + cron jobs en n8n.

---

## OPORTUNIDAD 3 — Reactivación de inactivos (P0)

### Problema
Cliente promedio de barbería visita cada **3-5 semanas**. A los 30 días sin visita ya está en riesgo.

### Solución
Campaña automatizada por WhatsApp:
- **Día 30 sin visita:** mensaje cálido + oferta del 15% en su servicio favorito
- **Día 45:** pregunta personalizada ("Vimos que no has venido, ¿todo bien con tu último corte?") + incentivo
- **Día 60:** última oferta + invitación a probar nuevo servicio

### KPIs
- 25% de inactivos reactivados en 60 días
- Recompra promedio: 1.5 visitas adicionales por reactivado

---

## OPORTUNIDAD 4 — Fidelización gamificada (P1)

### Concepto
"Pasaporte Runiko" digital (en WhatsApp via mensajes interactivos):
- 5 cortes = 1 diseño de barba gratis
- 10 cortes = corte premium gratis + producto
- Status "VIP" = cita prioritaria + precio preferencial

### Por qué funciona
- Crea **sunk cost** psicológico (no quieren perder progreso)
- Genera **frecuencia** (visitas más cortas para acumular)
- Diferenciador real vs. Titán/Diegomez (ninguno tiene esto)

---

## OPORTUNIDAD 5 — Reviews automatizadas (P1)

### Problema
Sin Google Reviews, Runiko no aparece en búsquedas locales tipo "barbería cerca de mí". Crítico porque el 60% del tráfico de barbería viene de mapas.

### Solución
Post-servicio (4h después):
- WhatsApp con link directo a dejar review en Google
- Si rating ≥ 4 → publicar
- Si rating < 4 → ruta privada de feedback al dueño (no se publica)

---

## Roadmap visual — 90 días

```
[Mes 1]  Agente IA WhatsApp/IG  ━━━━━━━━━━━━━━━━━━━━━━━━━━
         Recordatorios pre-cita ━━━━━━━━━━━━
         GBP optimizado          ━━━

[Mes 2]  Reactivación inactivos          ━━━━━━━━━━━━
         Reviews automáticas              ━━━━━━━
         Optimización de prompts          ━━━━━━━━━━━━

[Mes 3]  Fidelización gamificada                  ━━━━━━━━━━━━
         Análisis y optimización                  ━━━━━━━━━━━━
         Upsells inteligentes                          ━━━━━━━
```

---

## Inversión estimada (mensual operacional)

| Concepto | Costo |
|---|---|
| WhatsApp Business API (BSP) | ~$50 USD |
| Anthropic API (Claude Haiku, ~5k msgs/mes) | ~$10 USD |
| Render (n8n hosting) | $0 (free tier) |
| Weibook | Plan actual |
| **Total operacional** | **~$60 USD/mes** |

**Setup inicial Supernova:** propuesta separada (no incluida en este doc).

---

## Hipótesis de retorno (90 días)

> **Asumiendo 200 citas/mes baseline:**
> - +30 citas adicionales/mes por mejor conversión = **+$900k COP/mes**
> - -30 no-shows recuperados = **+$900k COP/mes**
> - +15 reactivaciones/mes = **+$450k COP/mes**
> - **Total upside estimado: ~$2.25M COP/mes** (~$550 USD)

ROI mensual: **9x** sobre el costo operacional.

> ⚠️ Estos números son **hipótesis basadas en benchmarks del sector**. Se deben recalibrar con la data real de Weibook tras la primera semana.

---

**Conclusión del Strategist:**
> El P0-1 (agente cualificador) es el **multiplicador**: habilita los P0-2 y P0-3 con marginal cost cero. El Agent Builder desarrolla la arquitectura técnica y el flujo conversacional en `agent-design.md`.
