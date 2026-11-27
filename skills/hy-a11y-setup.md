---
name: hy-a11y-setup
description: Met en place dans une application le contrôle d'accessibilité automatisé (axe-core, WCAG 2.2 AA) selon les standards du design system Hospitality. À utiliser quand on demande d'ajouter, configurer ou exécuter des tests d'accessibilité (a11y, axe, WCAG) sur une interface Angular/web.
---

# Contrôle d'accessibilité Hospitality

Standard : WCAG 2.2 niveau AA, tags axe `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`. Contraste : le ratio WCAG est la règle ; APCA (draft) toléré uniquement dans des cas très spécifiques et justifiés.

Procédure :
1. Détecter l'outillage existant (Playwright, Cypress, Jest, Storybook) dans package.json ; réutiliser l'existant, n'ajouter que le nécessaire.
2. Application testée avec Playwright : installer `@axe-core/playwright` (devDependency) et ajouter un test par page clé :
```ts
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('la page respecte WCAG 2.2 AA', async ({ page }) => {
    await page.goto('/ma-page');
    const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();
    expect(results.violations).toEqual([]);
});
```
3. Si le projet utilise Storybook (v9+) : ajouter `@storybook/addon-a11y` aux addons, puis dans preview.ts `parameters.a11y = { test: 'todo', options: { runOnly: { type: 'tag', values: [tags ci-dessus] } } }`.
4. Mode non bloquant d'abord (`todo` ou rapport sans échec en CI), puis bloquant (`error`) une fois les violations corrigées. Ne pas rendre le pipeline bloquant sans validation de l'équipe.
5. Lancer le contrôle et présenter un rapport des violations (page/composant, règle axe, impact, correctif). Corriger les cas simples (aria-label manquant, alt, libellés) ; signaler les autres (contrastes, composants tiers).
6. Rappeler que l'automatique ne couvre qu'une partie des critères : prévoir tests clavier et lecteur d'écran.

Règles de correction courantes : bouton icône seule => `aria-label` explicite (le matTooltip complète, ne remplace pas) ; le libellé accessible doit contenir le texte visible (label-content-name-mismatch) ; image => `alt` descriptif, ou `alt=""` + `aria-hidden="true"` si décorative ; ne jamais transmettre une information par la seule couleur.

Contraintes : ne rien commiter ni pousser sans validation explicite de l'utilisateur ; laisse les modifications dans le worktree et résume ce qui a été ajouté et où.
