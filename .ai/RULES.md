# .ai/RULES.md — «как надо / как не надо»

Набор конкретных примеров для AI-агентов. Парные примеры «❌ — плохо / ✅ — хорошо».

Читать вместе с `.ai/CONTEXT.md`.

---

## 1. Копирайтинг

### 1.1 Заголовок карточки товара

❌ Плохо:

> **Революционная сварочная маска нового поколения с уникальной системой защиты!**

Почему: пустые эпитеты, восклицание, ноль фактов.

✅ Хорошо:

> **FITSIZ EXPAN HD ULTRA**
> Панорамное окно 110×60 мм. DIN 5–13. 4 сенсора.

---

### 1.2 Описание для маркетплейса

❌ Плохо:

> Данная инновационная высокотехнологичная сварочная маска является оптимальным решением для осуществления сварочных работ любого уровня сложности. Благодаря революционной запатентованной технологии, она обеспечивает непревзойдённую защиту.

Почему: канцелярит, маркетинговый шум, нет характеристик.

✅ Хорошо:

> Сварочная маска-хамелеон FITSIZ Element Classic. Универсальная модель для MMA и MIG-MAG сварки. Плавная регулировка затемнения DIN 9–13, 2 сенсора, индикатор заряда батареи. Питание — солнечная батарея + CR2032. Корпус из полипропилена с технологией защиты S-FIRE. Гарантия 12 месяцев. Производство — Россия.

---

### 1.3 CTA-кнопка

❌ Плохо: `УЗНАЙТЕ БОЛЬШЕ О НАШЕЙ ПРОДУКЦИИ →`

✅ Хорошо: `ПОДОБРАТЬ МАСКУ`, `СКАЧАТЬ FITSIZ APP`, `СРАВНИТЬ МОДЕЛИ`.

---

### 1.4 Обращение к пользователю

❌ Плохо:

> Уважаемый клиент! Мы рады приветствовать Вас на нашем сайте и надеемся, что Вам понравится наша продукция!

✅ Хорошо:

> Ищете маску? Ответьте на 3 вопроса — подберём за минуту.

---

## 2. HTML / CSS

### 2.1 Кнопка

❌ Плохо:

```html
<button style="
  background: linear-gradient(135deg, #42BA1A 0%, #3AA817 100%);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(66,186,26,.4);
  padding: 10px 20px;
  font-family: 'Roboto', sans-serif;
">
  Купить сейчас
</button>
```

Почему: градиент, тень, неверный border-radius (должен быть pill), чужой шрифт.

✅ Хорошо:

```html
<button class="btn-fitsiz">КУПИТЬ</button>
```

или на inline-стилях:

```html
<button style="
  background: #42BA1A;
  color: #121212;
  border: none;
  border-radius: 9999px;
  padding: 14px 28px;
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  cursor: pointer;
">
  КУПИТЬ
</button>
```

---

### 2.2 Карточка товара

❌ Плохо:

```html
<div style="
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  padding: 16px;
">
  <h3 style="font-family: Arial; color: #333;">Element Classic</h3>
  <p style="color: #666;">Супер-маска!</p>
</div>
```

Почему: белый фон, радиус 4 px, тень, Arial, неинформативный текст.

✅ Хорошо:

```html
<article class="card-fitsiz">
  <img src="./fitsiz-element-classic/main.png" alt="FITSIZ Element Classic" />
  <h3 class="h3-fitsiz">FITSIZ ELEMENT CLASSIC</h3>
  <p>Хамелеон DIN 9–13, 2 сенсора, окно 93×43 мм.</p>
  <button class="btn-fitsiz">ПОДРОБНЕЕ</button>
</article>
```

---

### 2.3 Цвета

❌ Плохо:

```css
.hero {
  background: #0a1a2b;   /* синий — не бренд */
  color: #ff5500;        /* оранжевый — не бренд */
}
```

✅ Хорошо:

```css
.hero {
  background: #121212;
  color: #ffffff;
}
.hero .accent { color: #42BA1A; }
```

---

## 3. Макет и композиция

### 3.1 Плотность и иерархия

❌ Плохо: 6 кнопок одинакового веса на одном экране.
✅ Хорошо: один главный CTA (зелёный pill), остальные — ghost (прозрачные с белой обводкой).

❌ Плохо: 3 размера заголовка разными гарнитурами.
✅ Хорошо: H1 Russo One / H2 Russo One / H3 Inter Bold uppercase.

---

### 3.2 Лого

❌ Плохо:

```html
<img src="logo.png" style="filter: drop-shadow(0 0 8px lime); transform: rotate(-5deg);" />
```

Почему: свечение, наклон, искажение.

✅ Хорошо:

```html
<img src="/logos/fitsiz-logo-white.png" alt="FITSIZ" />
```

---

### 3.3 Знак на фото

❌ Плохо: логотип прямо на пёстром фото цеха — нечитаемо.
✅ Хорошо: чёрная pill-подложка 24 px под логотипом либо overlay `rgba(18,18,18,0.7)` на всю фотографию.

---

## 4. Генерация изображений

### 4.1 Промпт для AI-генератора

❌ Плохо:

> Welding mask, cyberpunk style, neon lights, futuristic, 3d render, lens flare

Почему: cyberpunk и neon — не FITSIZ. Lens flare и 3d — запрещены.

✅ Хорошо:

> Flat minimalist studio shot of a black welding mask on a pure black background, side lighting, high contrast, Russian industrial design, single bright green accent (`#42BA1A`) on the visor petal, no gradients, no shadows, no glow effects, crisp edges.

---

### 4.2 Изображение для Telegram-поста

❌ Плохо: фотобашная постановка с happy-сварщиком в полном разгаре работы, синий фон.
✅ Хорошо: чёрный фон, маска в 3/4, подзаголовок в Russo One, одна короткая польза, CTA «Скачать FITSIZ APP».

---

## 5. Код React / Tailwind

### 5.1 Компонент карточки

❌ Плохо:

```jsx
<div className="bg-blue-500 rounded-md shadow-xl p-4">
  <h2 className="text-2xl font-serif">Element Classic</h2>
</div>
```

✅ Хорошо:

```jsx
<article className="bg-fitsiz-surface-1 rounded-card p-6 text-fitsiz-white">
  <h2 className="font-heading text-2xl uppercase tracking-fitsiz-heading">
    FITSIZ ELEMENT CLASSIC
  </h2>
  <p className="font-body text-sm opacity-80 mt-2">
    Хамелеон DIN 9–13, 2 сенсора, окно 93×43 мм.
  </p>
  <button className="btn-fitsiz mt-4">ПОДРОБНЕЕ</button>
</article>
```

---

### 5.2 Hero-секция

❌ Плохо:

```jsx
<section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-20">
  <h1 className="text-6xl font-bold text-white drop-shadow-lg">FITSIZ — лучший выбор!</h1>
</section>
```

✅ Хорошо:

```jsx
<section className="bg-fitsiz-black text-fitsiz-white p-20">
  <h1 className="font-heading uppercase text-5xl tracking-fitsiz-heading">
    Видишь лучше — варишь точнее
  </h1>
  <p className="mt-4 text-fitsiz-muted max-w-xl">
    FITSIZ — эксперт в защите сварщика более 15 лет.
    Только сварочные маски. Только в России.
  </p>
  <button className="btn-fitsiz mt-8">ПОДОБРАТЬ МАСКУ</button>
</section>
```

---

## 6. Tone of voice в соцсетях

❌ Плохо:

> 🔥🔥🔥 ОГОНЬ! Новая маска FITSIZ разорвёт всех!!! 💪💪💪 Не пропусти!!!

✅ Хорошо:

> Expan HD Ultra. Окно 110×60 мм, DIN 5–13, 4 сенсора. Для сварщика, который варит много и хочет видеть шов полностью.
>
> Подробнее — fitsiz.ru/expan-hd-ultra

---

## 7. Типовые ошибки AI-агентов (и как их избегать)

| Ошибка | Как избежать |
|---|---|
| Использование синего / красного акцента | Только 4 фирменных цвета |
| Генерация кнопок с `border-radius: 4–12px` | Только `9999px` (pill) |
| Shadows / glows на лого | Жёсткая плоская заливка, никаких эффектов |
| «FitSiz», «Fitsiz Co.» | Только `fitsiz` в логотипе или `FITSIZ` в заголовке |
| Выдумывание характеристик | Смотреть `products/<model>/info.md`, если нет — ставить `[TODO]` |
| Перевод терминов «в лоб» | АСФ = ADF (Auto-Darkening Filter), DIN не переводится |
| Восклицательные знаки | Максимум 1 на пост, никогда в заголовке |
| Эпитеты «революционный / гениальный» | Заменять на конкретные числа и факты |

---

## 8. Валидация ответа перед отправкой

Перед тем как агент отдал сгенерированный текст/картинку, он должен сам проверить:

- Цвета — только `#121212`, `#FFFFFF`, `#42BA1A`, `#C2D918`? (+ серые UI).
- Шрифты — только Russo One и Inter?
- Кнопки — pill?
- Тени / градиенты — отсутствуют?
- Зелёный лепесток на лого — на месте и правильного цвета?
- Тон — без восторгов и канцелярита?
- Характеристики — из `info.md`, не выдуманы?
- Есть CTA и/или ссылка на fitsiz.ru / fitsiz.app?

Если хотя бы один пункт провален — переделать.

---

_Обновления правил — через pull request к этому файлу. Контакт: borisov.v.s.59@gmail.com._
