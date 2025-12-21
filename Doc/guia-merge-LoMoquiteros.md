# Guía del equipo: Fusionar una rama local de trabajo hacia `Tu-Rama`

Esta guía explica el flujo estándar para que **cualquier miembro del equipo** pueda trabajar en una rama local (feature/tema) y luego **fusionar esos cambios** en la rama compartida del equipo: **`Tu-Rama`**.

> ✅ Objetivo: Terminar tu trabajo en una rama local (ej. `html_css_JavaScript`) y pasar ese trabajo a `tuRepo` de forma segura, clara y repetible.

---

## Reglas rápidas (antes de empezar)

- **No trabajes directo en `tuRepo`** si el equipo acordó usar ramas de trabajo.
- **Siempre actualiza `tuRepo`** antes de fusionar (para traer lo último del equipo).
- **Haz commit en tu rama local** antes del merge (evita perder cambios).
- Si hay conflictos, se resuelven y se hace commit.

---

## Nombres recomendados de ramas

Ejemplos válidos:
- `feature/login-ui`
- `fix/navbar-mobile`
- `html_css_JavaScript` (si el equipo ya usa este formato)
- `docs/readme-update`

Recomendación para equipos:
- `feature/<tema>`
- `fix/<bug>`
- `docs/<tema>`

---

## Flujo completo paso a paso (Merge hacia `tuRepo`)

### 1) Verifica en qué rama estás y si tienes cambios pendientes
```bash
git branch
git status
```

- La rama con `*` es la rama activa.
- Si `git status` muestra cambios sin commit, sigue el paso 2.

---

### 2) Guarda tu trabajo en tu rama local (commit)
> Esto “congela” tus cambios y los deja listos para fusionar.

```bash
git add .
git commit -m "Describe tu cambio (ej: estilos del header y footer)"
```

✅ Consejo: Usa mensajes de commit claros.  
Ejemplos:
- `Agregar estructura HTML del home`
- `Corregir estilos responsive del navbar`
- `Añadir validación básica con JS`

---

### 3) Cambia a la rama del equipo y actualízala con lo último del remoto
> Importante para evitar conflictos y no sobreescribir trabajo de otros.

```bash
git checkout tuRepo
git pull origin tuRepo
```

Si `git pull` falla por cambios locales, ve a la sección **“Problemas comunes”**.

---

### 4) Fusiona tu rama local hacia `tuRepo`
> Sustituye `TU_RAMA_LOCAL` por el nombre real (ej: `html_css_JavaScript`).

```bash
git merge TU_RAMA_LOCAL
```

Ejemplo:
```bash
git merge html_css_JavaScript
```

---

### 5) Si aparecen conflictos (solo si Git lo indica)
Git te avisará qué archivos tienen conflictos.

**Pasos para resolverlos:**
1. Abre cada archivo en conflicto y busca marcas como:
   - `<<<<<<<`
   - `=======`
   - `>>>>>>>`
2. Decide qué código se queda (o combina ambos).
3. Guarda los archivos.

Luego confirma la resolución:
```bash
git add .
git commit -m "Resolver conflictos al fusionar TU_RAMA_LOCAL con tuRepo"
```

---

### 6) Sube `tuRepo` a GitHub (para que el equipo lo vea)
```bash
git push origin tuRepo
```

✅ Listo: tus cambios ya están en la rama del equipo.

---

## Flujo recomendado para equipos (resumen rápido)

Cuando ya domines el proceso, normalmente se hace así:

```bash
# En tu rama local
git add .
git commit -m "avances"

# Traer lo último del equipo
git checkout tuRepo
git pull origin tuRepo

# Fusionar tu rama
git merge TU_RAMA_LOCAL

# Subir cambios
git push origin tuRepo
```

---

## Opcional: borrar tu rama local cuando ya no se necesite

> Solo cuando estés seguro de que ya se fusionó y se subió al remoto.

```bash
git branch -d TU_RAMA_LOCAL
```

Si Git no te deja porque no detecta el merge:
```bash
git branch -D TU_RAMA_LOCAL
```

---

## Opcional: si NO quieres hacer commit todavía (usar stash)

Si tienes cambios sin commit y necesitas cambiar de rama:

```bash
git stash
git checkout tuRepo
git pull origin tuRepo
git checkout TU_RAMA_LOCAL
git stash pop
```

> Recomendación: para merges en equipo, **mejor commit** que stash, porque es más claro y rastreable.

---

## Problemas comunes y soluciones

### A) “Tu rama está detrás” / “Updates were rejected”
Significa que en remoto hay cambios que tú no tienes.

Solución:
```bash
git checkout tuRepo
git pull origin tuRepo
git push origin tuRepo
```

Si estás intentando subir desde tu rama local, primero fusiona hacia `tuRepo` como en el flujo principal.

---

### B) “You have unstaged changes” y no te deja cambiar de rama
Tienes cambios sin guardar.

Solución (elige una):
- Hacer commit:
  ```bash
  git add .
  git commit -m "guardar avances"
  ```
- O stash:
  ```bash
  git stash
  ```

---

### C) “Merge conflict”
Es normal cuando dos personas tocaron lo mismo.

Solución:
1) Resolver conflictos en archivos  
2) Luego:
```bash
git add .
git commit -m "Resolver conflictos"
```

---

## Checklist antes de hacer merge a `tuRepo`

- [ ] Mi rama local tiene commits (no trabajo “suelto”).
- [ ] Actualicé `tuRepo` con `git pull`.
- [ ] Hice `git merge` desde `tuRepo`.
- [ ] Si hubo conflictos, los resolví y confirmé con commit.
- [ ] Subí a GitHub con `git push origin tuRepo`.

---

## Notas de equipo (recomendado)

- Antes de empezar una tarea grande, avisa por el canal del equipo qué archivos vas a tocar.
- Evita que dos personas trabajen el mismo archivo grande al mismo tiempo si se puede.
- Mantén tus cambios pequeños y frecuentes (commits cortos) para reducir conflictos.
