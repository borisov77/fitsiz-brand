# Typography — FITSIZ

Фирменные шрифты FITSIZ. Оба — бесплатные, доступны через Google Fonts.

## Стек

| Роль | Шрифт | Начертание | Применение |
|---|---|---|---|
| Heading | **Russo One** | Regular (400) | H1–H2. Главные заголовки, CTA-блоки, обложки. Только UPPERCASE. |
| Subheading | **Inter** | Bold (700) | H3–H4, названия моделей, бейджи. Часто UPPERCASE. |
| Body | **Inter** | Regular (400) / Medium (500) | Описания, характеристики, подписи, UI. |
| Mono (опц.) | **JetBrains Mono** | Regular | Артикулы, коды, технические поля. |

## Подключение

### Web (Google Fonts)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Russo+One&display=swap" rel="stylesheet">
```

### CSS

```css
:root {
  --fitsiz-font-heading: "Russo One", system-ui, sans-serif;
  --fitsiz-font-body:    "Inter", system-ui, sans-serif;
}
```

### Tailwind

Уже настроено в `colors/tailwind.config.js`:

```html
<h1 class="font-heading uppercase tracking-fitsiz-heading">FITSIZ</h1>
<p  class="font-body">Эксперт в защите сварщиков.</p>
```

## Типографические правила

- Заголовки — **всегда UPPERCASE**. Буквы не разжимать, letter-spacing не более 0.04em.
- Тело текста — **sentence case**, русская типографика (ёлочки «», тире вместо дефиса).
- Числа и артикулы — моноширинно или Inter Medium, без косой черты и без пробелов внутри модели (правильно: `FSC-C777`, неправильно: `FSC C 777`).
- Не смешивать больше двух гарнитур в одном макете.
- Жирные начертания Russo One или Inter не рекомендуются для параграфов — мешают ритму.

## Файлы шрифтов

В этой папке лежат ссылки и рекомендации; сами `.ttf` / `.woff2` подтягиваются из Google Fonts CDN. Для офлайн-проектов (упаковка, печать) скачать:

- Russo One: <https://fonts.google.com/specimen/Russo+One>
- Inter: <https://fonts.google.com/specimen/Inter>

Если нужны локальные копии — положите их рядом с этим README и обновите путь в CSS.
