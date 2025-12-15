# Lo-Moquiteros

Repositorio de prácticas en equipo (iniciación con HTML/CSS/JS y luego más).

**Repo:** https://github.com/juniorvaleraofficial/Lo-Moquiteros.git  
**Curso guía (base):** https://www.udemy.com/course/universidad-javascript-angular-react-vue-typescript-html-css-bootstrap/

> Nota importante (Windows): Eviten nombres de carpetas/archivos con espacios raros al final, caracteres inválidos o rutas “raras”.
> Eso puede romper el `git checkout` en Windows.

---

## Requisitos
- Tener **Git** instalado.
- (Opcional) VS Code / Visual Studio.

Verifica Git:
```bash
git --version
```
---
## Configura tu identidad (una vez):
```bash
git config --global user.name "TU NOMBRE"
git config --global user.email "TU_CORREO"

```
---
## 1) Clonar el repo (forma normal)

```bash
git clone https://github.com/juniorvaleraofficial/Lo-Moquiteros.git
cd Lo-Moquiteros
git remote -v
git status

```
---
## 2) Clonar directamente tu rama (si ya existe en GitHub)
# Cambia TU_RAMA por la tuya (ej: JuniorRepo, feature/login, etc.)
```bash
git clone -b TU_RAMA --single-branch https://github.com/juniorvaleraofficial/Lo-Moquiteros.git
cd Lo-Moquiteros
git status
git branch

```
---
## 3) Si ya clonaste pero quieres cambiarte a tu rama
```bash
git fetch --all
git branch -r
git switch TU_RAMA

```
# Si tu rama existe en remoto pero no local:
```bash
git switch -c TU_RAMA origin/TU_RAMA
```
---
## 4) Flujo de trabajo recomendado (cada quien en su rama)
# 4.1 Actualizarte antes de empezar
```bash
git switch TU_RAMA
git pull

```
---
## 4.2 Crear una rama de trabajo (opcional)
# Recomendado: crear ramas por tarea y luego PR a TU_RAMA o a main (según acuerden).
```bash
git switch TU_RAMA
git pull
git switch -c feature/mi-cambio

```
---
## 5) Guardar cambios (add + commit)
# Ver qué cambió:
```bash
git status
git diff

```
---
## Agregar al stage:
```bash
git add .

```
---
## Hacer commit:
```bash
git commit -m "Describe el cambio aquí"

```
---
## 6) Subir cambios (push)
# Si ya está trackeada la rama:
```bash
git push

```
---
# Si es la primera vez que subes esa rama desde tu PC:
```bash
git push -u origin TU_RAMA

```
---
## Si estás en una rama de trabajo (ej: feature/mi-cambio):
```bash
git push -u origin feature/mi-cambio

```
---
## 7) Traer cambios nuevos del repo (pull)
# Estando en tu rama:
```bash
git switch TU_RAMA
git pull

```
---
## 8) Resolver conflictos (mini-guía rápida)
# 1. Haces:
```bash
git pull

```
---
# 2. Si hay conflicto, Git te marca archivo
# 3. Abres los archivos, arreglas, y luego:
```bash
git add .
git commit -m "Resolve merge conflict"
git push

```
---
## 9) Comandos útiles (día a día)
# Ver ramas:

```bash
git branch
git branch -a

```
---
# Ver historial:
```bash
git log --oneline --decorate --graph --all

```
---
# Descartar cambios locales (⚠️ cuidado):
```bash
git restore .

```
---
# Deshacer stage:
```bash
git restore --staged .

```
---
##10) Reglas del equipo (recomendadas)
> No trabajar directo en main (mejor PR).
> Commits cortos y claros.
> Evitar rutas/nombres incompatibles con Windows.
> Si alguien rompe algo, se arregla en su rama y se hace PR.

## 11) Guía de aprendizaje
# Tomaremos como base el curso:
Universidad JavaScript - De Cero a Experto (HTML/CSS/JS + frameworks luego)


































