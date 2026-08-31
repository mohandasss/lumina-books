# Lumina Books

Modern Futuristic Bookstore Homepage — UI Design Prompt

Design and build a premium, clean, sleek, modern, futuristic one-page bookstore / book discovery website.

The website should feel like a combination of:

Premium editorial magazine

Modern digital bookstore

Apple-level minimalism

Spotify/Netflix-style content discovery

Subtle futuristic technology

It must NOT look like Amazon, a traditional bookstore template, or a generic SaaS landing page.

The books, book covers, authors, typography, whitespace, motion, and imagery should be the main visual focus.

1. IMPORTANT — GLOBAL COLOR SYSTEM

Do NOT hardcode colors throughout individual components.

Create a centralized semantic color system using CSS variables/design tokens.

I should be able to change only these 4 master colors:

:root {
  --color-background: #090A0F;
  --color-surface: #12141C;
  --color-primary: #7C5CFF;
  --color-accent: #54E6D6;
}


Changing these four values should automatically update the visual appearance of the entire website.

Derive all other colors from these variables.

For example:

--surface-elevated
--surface-hover
--surface-soft

--text-primary
--text-secondary
--text-muted

--border-default
--border-hover

--primary-hover
--primary-soft
--primary-glow

--accent-hover
--accent-soft

--overlay
--gradient-primary
--gradient-surface


Use CSS color-mix(), opacity, HSL/OKLCH manipulation, or equivalent methods where appropriate.

Never scatter values such as:

#7C5CFF
#111827
#ffffff


through individual components.

Components should always use semantic tokens such as:

var(--color-primary)
var(--surface-elevated)
var(--text-primary)
var(--border-default)


This is extremely important because I want to experiment with different palettes later by changing only 3–4 values.

2. VISUAL DIRECTION

The website should feel:

Premium

Minimal

Editorial

Futuristic

Elegant

Smooth

Sophisticated

Spacious

High-end

Modern

Avoid:

Excessive neon

Cyberpunk styling

Excessive gradients

Glassmorphism everywhere

Too many rounded cards

Huge glowing objects

Generic SaaS layouts

Excessive shadows

Overcrowded content

Every section looking identical

Use subtle effects instead.

Examples:

Thin borders

Soft shadows

Large typography

Gentle gradients

Slight background glow

Subtle glass effects

Elegant hover animations

Smooth section transitions

Book-cover-driven colors

3. TYPOGRAPHY

Use two complementary font styles.

Interface

Use something similar to:

Geist

Inter

Manrope

Editorial headings

Use something similar to:

Instrument Serif

Cormorant Garamond

Playfair-style editorial serif

Large editorial headings should create the feeling of a premium publishing platform.

Example:

“Stories worth getting lost in.”

Use strong contrast between large serif editorial headings and clean modern sans-serif interface text.

4. NAVBAR

Create a sleek sticky navigation bar.

Left:

Brand / Bookstore Logo

Center navigation:

Home

Books

Authors

Publishers

Categories

Right:

Search icon / expandable search

Wishlist

Shopping Cart

User/Profile

Search should be one of the important interactions.

When the search icon is clicked, smoothly expand it into a search field.

Placeholder:

“Search books, authors or publishers…”

Navbar should initially feel lightweight and transparent.

When scrolling, give it a subtle blurred/elevated background.

Do not make it oversized.

5. HERO SECTION

Create a visually impressive editorial hero.

Do NOT create a normal centered SaaS hero.

Use an asymmetric editorial composition.

Left side:

Small eyebrow:

CURATED FOR READERS

Large heading:

Stories worth getting lost in.

Supporting text:

“Discover remarkable books, timeless authors and stories selected for curious minds.”

Buttons:

Explore Books

Secondary text/button:

Browse Authors →

Right side:

Create a beautiful composition of 3–5 floating book covers.

Books should have different depths and slight rotations.

The main book should be larger.

Add extremely subtle perspective movement.

Use a soft ambient gradient behind the books derived from the primary/accent colors.

Book covers should visually dominate the hero.

Add a small floating information card near one book:

Editor's Pick
The Midnight Library
Matt Haig
★★★★★


Keep the hero spacious.

6. FEATURED BOOK CAROUSEL

Immediately after the hero, create a premium horizontal carousel.

Heading:

Books worth discovering

Small supporting label:

CURATED THIS WEEK

Right side:

View all →

Carousel cards should display:

Large book cover

Book title

Author

Rating

Price

Optional small category

Do not put every book inside a large traditional card.

The BOOK COVER itself should be the visual object.

Metadata should sit underneath it.

On hover:

Book rises slightly

Subtle perspective tilt

Soft shadow increases

Book title moves slightly upward

Quick actions appear subtly

Actions:

Add to cart

Wishlist

Quick view

Carousel should support:

Arrow navigation

Drag/swipe

Mobile horizontal scrolling

7. AUTHORS SECTION

Create a visually different editorial section titled:

Authors shaping today's stories

Use large author portraits.

Do not design basic circular avatar cards.

Use editorial portrait compositions.

Each author should include:

Portrait

Name

Primary genre

Number of books

View Author →

Example:

HARUKI
MURAKAMI

Fiction · Magical Realism
18 Works

Explore Author →


Mix portrait sizes or use an asymmetric grid so the section feels like an editorial magazine.

Add subtle image zoom on hover.

8. PUBLISHERS SECTION

Create:

Featured Publishers

Show modern minimal publisher cards/logos.

Examples:

Penguin

HarperCollins

Simon & Schuster

Macmillan

Hachette

Bloomsbury

Avoid a boring logo strip.

Create a smooth horizontal scrolling/looping presentation or elegant grid.

Use monochromatic logos by default.

On hover, reveal subtle brand emphasis.

9. RECENTLY PUBLISHED

Create a strong content section:

Recently Published

Subtitle:

“Fresh stories, new voices and the latest releases.”

Show approximately 6–8 books.

Use a responsive editorial grid.

Each book:

Cover

Title

Author

Release date

Rating

Price

Include:

View New Releases →

10. EXPLORE BY CATEGORY

Create a visually interesting book category explorer.

Categories:

Novels

Poetry

Short Stories

Religious Books

Politics

Sports

Translation

E-Books

Text Books

Do NOT simply create nine identical cards.

Use a Bento/editorial grid.

Some categories can be wide.

Some can be tall.

Some can contain a book-cover collage.

Example:

NOVELS

356 books
Explore →


Use subtle background imagery and gradients derived from book covers.

11. NOVELS SECTION

Heading:

Popular Novels

Horizontal book carousel.

Show approximately 6 books at desktop width.

Use the same base BookCard component as other book sections, but allow layout variations.

12. POETRY SECTION

Create a more artistic layout for:

Poetry & Prose

Give this section more whitespace.

Include a large editorial quote/typographic visual alongside selected poetry books.

Do NOT make every section look like the same carousel.

13. STORIES SECTION

Create:

Short Stories

Use compact but sophisticated book presentation.

Allow readers to quickly scan:

Cover

Title

Author

Reading time/pages

Rating

14. RELIGIOUS BOOKS

Create:

Spirituality & Religion

Keep this section respectful, minimal and elegant.

Use warm editorial imagery and clean book presentations.

Do not associate any religion with a particular interface color.

15. POLITICS & CURRENT AFFAIRS

Create:

Politics & Current Affairs

Use a clean editorial/news-inspired presentation.

Show relevant books with:

Cover

Author

Publication year

Rating

Do not make the section visually aggressive.

16. SPORTS BOOKS

Create:

Stories Beyond the Game

Show biographies, sporting history and sports-related books.

Use slightly more energetic layout/motion while keeping the global design language consistent.

17. TRANSLATED BOOKS

Create an important section:

Stories Without Borders

Subtitle:

“Remarkable books translated from voices around the world.”

Each card can show:

Original language
Translated to
Translator
Author


Example:

Japanese → English

Make this section feel globally inspired without using cliché country flags everywhere.

18. E-BOOK SECTION

Create a visually different promotional section.

Heading:

Carry your library everywhere.

Supporting copy:

“Discover thousands of books available instantly as digital editions.”

CTA:

Explore E-Books

Add a tasteful tablet/e-reader visualization showing a book page.

Keep it minimalist and futuristic.

19. TEXT BOOKS

Create:

Learn Something New

Categories could include:

Computer Science

Engineering

Mathematics

Business

Science

Humanities

Show textbook covers and subject labels.

Include:

Browse Textbooks →

20. BEST SELLERS

Make this one of the strongest sections near the bottom.

Heading:

This week's best sellers

Use ranking numbers prominently:

01
02
03
04
05


Create a horizontal or large editorial ranking layout.

Each bestseller shows:

Ranking

Cover

Title

Author

Rating

Price

The top-ranked book should receive slightly more visual importance.

21. NEWSLETTER / COMMUNITY SECTION

Before the footer create a minimal premium section.

Heading:

Good books deserve good company.

Text:

“Get thoughtful recommendations, new releases and reading inspiration delivered occasionally.”

Email field.

Button:

Join the Reading List

Keep the section clean and spacious.

22. FOOTER

Create a large sophisticated footer.

Brand section:

Logo

Short statement:

“Stories, ideas and voices worth discovering.”

Columns:

Discover

New Releases

Best Sellers

Authors

Publishers

Categories

Books

Novels

Poetry

Short Stories

E-Books

Textbooks

Company

About

Contact

Careers

Journal

Support

Help

Delivery

Returns

Privacy

Terms

Bottom row:

Copyright

Social icons

Country/language selector

Payment icons if appropriate.

23. COMPONENT SYSTEM

Build reusable components rather than writing every section independently.

Components:

Navbar
SearchOverlay
BookCard
BookCarousel
BookGrid
BookRankingCard
AuthorCard
PublisherCard
CategoryCard
SectionHeading
Button
IconButton
Badge
Rating
Price
WishlistButton
Footer


BookCard should support variants:

default
compact
featured
ranking
horizontal


24. SPACING SYSTEM

Use a consistent spacing system.

Example:

4
8
12
16
24
32
48
64
80
120


Sections should have generous vertical spacing.

Desktop sections:

approximately 96px–140px

Mobile:

approximately 64px–80px

Do not crowd sections together.

25. BORDER RADIUS

Keep radius sophisticated.

Avoid excessive pill-shaped UI.

Example:

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-xl: 24px;


Book covers themselves should have very small radius, approximately 4–8px, because they are physical objects.

26. ANIMATION

Use high-quality subtle motion.

Animations should feel expensive rather than flashy.

Examples:

Book hover

translateY(-6px)
scale(1.015)
tiny perspective rotate
shadow increases


Sections

Use gentle fade + translate entrance animations.

Authors

Very subtle portrait scale.

Buttons

Small background transition and icon movement.

Carousel

Smooth spring-based transitions.

Search

Navbar search smoothly expands rather than instantly appearing.

Images

Lazy-load and reveal softly.

Respect prefers-reduced-motion.

27. RESPONSIVENESS

Design desktop, tablet and mobile properly.

Mobile must NOT simply be a squeezed desktop website.

For mobile:

Compact navigation

Menu drawer

Horizontal swipe carousels

Two-column book grids where appropriate

One-column editorial sections

Large readable typography

Minimum 44px touch areas

No horizontal page overflow

Hero floating books should reorganize intelligently on smaller screens.

28. DESIGN RULES

Follow these rules across the entire website:

Book covers provide most of the website's visual color.

Interface colors remain restrained.

Primary color is mainly for important actions.

Accent color is used sparingly.

Avoid excessive glassmorphism.

Avoid gradients on every section.

Avoid putting everything inside cards.

Use whitespace aggressively.

Typography should create strong hierarchy.

Sections should have different compositions while remaining part of the same design system.

Use thin subtle borders rather than heavy boxes.

Keep shadows soft and realistic.

Avoid generic template appearance.

Prioritize book imagery over decorative UI graphics.

Maintain a premium editorial atmosphere throughout.

FINAL RESULT

The final homepage should feel like a next-generation digital bookstore built in 2026, combining books, authors, publishers, physical books, e-books and discovery in one premium experience.

The feeling should be:

Editorial publishing × modern technology × premium e-commerce

Think:

Apple-level polish + Spotify-style discovery + premium literary magazine

but create an original design rather than copying any existing product.

Most importantly, implement the entire theme using a semantic design-token architecture, so changing only:

--color-background
--color-surface
--color-primary
--color-accent


can completely transform the website's color palette without editing individual components. NExt TyModern Futuristic Bookstore Homepage — UI Design Prompt

Design and build a premium, clean, sleek, modern, futuristic one-page bookstore / book discovery website.

The website should feel like a combination of:

Premium editorial magazine

Modern digital bookstore

Apple-level minimalism

Spotify/Netflix-style content discovery

Subtle futuristic technology

It must NOT look like Amazon, a traditional bookstore template, or a generic SaaS landing page.

The books, book covers, authors, typography, whitespace, motion, and imagery should be the main visual focus.

1. IMPORTANT — GLOBAL COLOR SYSTEM

Do NOT hardcode colors throughout individual components.

Create a centralized semantic color system using CSS variables/design tokens.

I should be able to change only these 4 master colors:

:root {
  --color-background: #090A0F;
  --color-surface: #12141C;
  --color-primary: #7C5CFF;
  --color-accent: #54E6D6;
}


Changing these four values should automatically update the visual appearance of the entire website.

Derive all other colors from these variables.

For example:

--surface-elevated
--surface-hover
--surface-soft

--text-primary
--text-secondary
--text-muted

--border-default
--border-hover

--primary-hover
--primary-soft
--primary-glow

--accent-hover
--accent-soft

--overlay
--gradient-primary
--gradient-surface


Use CSS color-mix(), opacity, HSL/OKLCH manipulation, or equivalent methods where appropriate.

Never scatter values such as:

#7C5CFF
#111827
#ffffff


through individual components.

Components should always use semantic tokens such as:

var(--color-primary)
var(--surface-elevated)
var(--text-primary)
var(--border-default)


This is extremely important because I want to experiment with different palettes later by changing only 3–4 values.

2. VISUAL DIRECTION

The website should feel:

Premium

Minimal

Editorial

Futuristic

Elegant

Smooth

Sophisticated

Spacious

High-end

Modern

Avoid:

Excessive neon

Cyberpunk styling

Excessive gradients

Glassmorphism everywhere

Too many rounded cards

Huge glowing objects

Generic SaaS layouts

Excessive shadows

Overcrowded content

Every section looking identical

Use subtle effects instead.

Examples:

Thin borders

Soft shadows

Large typography

Gentle gradients

Slight background glow

Subtle glass effects

Elegant hover animations

Smooth section transitions

Book-cover-driven colors

3. TYPOGRAPHY

Use two complementary font styles.

Interface

Use something similar to:

Geist

Inter

Manrope

Editorial headings

Use something similar to:

Instrument Serif

Cormorant Garamond

Playfair-style editorial serif

Large editorial headings should create the feeling of a premium publishing platform.

Example:

“Stories worth getting lost in.”

Use strong contrast between large serif editorial headings and clean modern sans-serif interface text.

4. NAVBAR

Create a sleek sticky navigation bar.

Left:

Brand / Bookstore Logo

Center navigation:

Home

Books

Authors

Publishers

Categories

Right:

Search icon / expandable search

Wishlist

Shopping Cart

User/Profile

Search should be one of the important interactions.

When the search icon is clicked, smoothly expand it into a search field.

Placeholder:

“Search books, authors or publishers…”

Navbar should initially feel lightweight and transparent.

When scrolling, give it a subtle blurred/elevated background.

Do not make it oversized.

5. HERO SECTION

Create a visually impressive editorial hero.

Do NOT create a normal centered SaaS hero.

Use an asymmetric editorial composition.

Left side:

Small eyebrow:

CURATED FOR READERS

Large heading:

Stories worth getting lost in.

Supporting text:

“Discover remarkable books, timeless authors and stories selected for curious minds.”

Buttons:

Explore Books

Secondary text/button:

Browse Authors →

Right side:

Create a beautiful composition of 3–5 floating book covers.

Books should have different depths and slight rotations.

The main book should be larger.

Add extremely subtle perspective movement.

Use a soft ambient gradient behind the books derived from the primary/accent colors.

Book covers should visually dominate the hero.

Add a small floating information card near one book:

Editor's Pick
The Midnight Library
Matt Haig
★★★★★


Keep the hero spacious.

6. FEATURED BOOK CAROUSEL

Immediately after the hero, create a premium horizontal carousel.

Heading:

Books worth discovering

Small supporting label:

CURATED THIS WEEK

Right side:

View all →

Carousel cards should display:

Large book cover

Book title

Author

Rating

Price

Optional small category

Do not put every book inside a large traditional card.

The BOOK COVER itself should be the visual object.

Metadata should sit underneath it.

On hover:

Book rises slightly

Subtle perspective tilt

Soft shadow increases

Book title moves slightly upward

Quick actions appear subtly

Actions:

Add to cart

Wishlist

Quick view

Carousel should support:

Arrow navigation

Drag/swipe

Mobile horizontal scrolling

7. AUTHORS SECTION

Create a visually different editorial section titled:

Authors shaping today's stories

Use large author portraits.

Do not design basic circular avatar cards.

Use editorial portrait compositions.

Each author should include:

Portrait

Name

Primary genre

Number of books

View Author →

Example:

HARUKI
MURAKAMI

Fiction · Magical Realism
18 Works

Explore Author →


Mix portrait sizes or use an asymmetric grid so the section feels like an editorial magazine.

Add subtle image zoom on hover.

8. PUBLISHERS SECTION

Create:

Featured Publishers

Show modern minimal publisher cards/logos.

Examples:

Penguin

HarperCollins

Simon & Schuster

Macmillan

Hachette

Bloomsbury

Avoid a boring logo strip.

Create a smooth horizontal scrolling/looping presentation or elegant grid.

Use monochromatic logos by default.

On hover, reveal subtle brand emphasis.

9. RECENTLY PUBLISHED

Create a strong content section:

Recently Published

Subtitle:

“Fresh stories, new voices and the latest releases.”

Show approximately 6–8 books.

Use a responsive editorial grid.

Each book:

Cover

Title

Author

Release date

Rating

Price

Include:

View New Releases →

10. EXPLORE BY CATEGORY

Create a visually interesting book category explorer.

Categories:

Novels

Poetry

Short Stories

Religious Books

Politics

Sports

Translation

E-Books

Text Books

Do NOT simply create nine identical cards.

Use a Bento/editorial grid.

Some categories can be wide.

Some can be tall.

Some can contain a book-cover collage.

Example:

NOVELS

356 books
Explore →


Use subtle background imagery and gradients derived from book covers.

11. NOVELS SECTION

Heading:

Popular Novels

Horizontal book carousel.

Show approximately 6 books at desktop width.

Use the same base BookCard component as other book sections, but allow layout variations.

12. POETRY SECTION

Create a more artistic layout for:

Poetry & Prose

Give this section more whitespace.

Include a large editorial quote/typographic visual alongside selected poetry books.

Do NOT make every section look like the same carousel.

13. STORIES SECTION

Create:

Short Stories

Use compact but sophisticated book presentation.

Allow readers to quickly scan:

Cover

Title

Author

Reading time/pages

Rating

14. RELIGIOUS BOOKS

Create:

Spirituality & Religion

Keep this section respectful, minimal and elegant.

Use warm editorial imagery and clean book presentations.

Do not associate any religion with a particular interface color.

15. POLITICS & CURRENT AFFAIRS

Create:

Politics & Current Affairs

Use a clean editorial/news-inspired presentation.

Show relevant books with:

Cover

Author

Publication year

Rating

Do not make the section visually aggressive.

16. SPORTS BOOKS

Create:

Stories Beyond the Game

Show biographies, sporting history and sports-related books.

Use slightly more energetic layout/motion while keeping the global design language consistent.

17. TRANSLATED BOOKS

Create an important section:

Stories Without Borders

Subtitle:

“Remarkable books translated from voices around the world.”

Each card can show:

Original language
Translated to
Translator
Author


Example:

Japanese → English

Make this section feel globally inspired without using cliché country flags everywhere.

18. E-BOOK SECTION

Create a visually different promotional section.

Heading:

Carry your library everywhere.

Supporting copy:

“Discover thousands of books available instantly as digital editions.”

CTA:

Explore E-Books

Add a tasteful tablet/e-reader visualization showing a book page.

Keep it minimalist and futuristic.

19. TEXT BOOKS

Create:

Learn Something New

Categories could include:

Computer Science

Engineering

Mathematics

Business

Science

Humanities

Show textbook covers and subject labels.

Include:

Browse Textbooks →

20. BEST SELLERS

Make this one of the strongest sections near the bottom.

Heading:

This week's best sellers

Use ranking numbers prominently:

01
02
03
04
05


Create a horizontal or large editorial ranking layout.

Each bestseller shows:

Ranking

Cover

Title

Author

Rating

Price

The top-ranked book should receive slightly more visual importance.

21. NEWSLETTER / COMMUNITY SECTION

Before the footer create a minimal premium section.

Heading:

Good books deserve good company.

Text:

“Get thoughtful recommendations, new releases and reading inspiration delivered occasionally.”

Email field.

Button:

Join the Reading List

Keep the section clean and spacious.

22. FOOTER

Create a large sophisticated footer.

Brand section:

Logo

Short statement:

“Stories, ideas and voices worth discovering.”

Columns:

Discover

New Releases

Best Sellers

Authors

Publishers

Categories

Books

Novels

Poetry

Short Stories

E-Books

Textbooks

Company

About

Contact

Careers

Journal

Support

Help

Delivery

Returns

Privacy

Terms

Bottom row:

Copyright

Social icons

Country/language selector

Payment icons if appropriate.

23. COMPONENT SYSTEM

Build reusable components rather than writing every section independently.

Components:

Navbar
SearchOverlay
BookCard
BookCarousel
BookGrid
BookRankingCard
AuthorCard
PublisherCard
CategoryCard
SectionHeading
Button
IconButton
Badge
Rating
Price
WishlistButton
Footer


BookCard should support variants:

default
compact
featured
ranking
horizontal


24. SPACING SYSTEM

Use a consistent spacing system.

Example:

4
8
12
16
24
32
48
64
80
120


Sections should have generous vertical spacing.

Desktop sections:

approximately 96px–140px

Mobile:

approximately 64px–80px

Do not crowd sections together.

25. BORDER RADIUS

Keep radius sophisticated.

Avoid excessive pill-shaped UI.

Example:

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-xl: 24px;


Book covers themselves should have very small radius, approximately 4–8px, because they are physical objects.

26. ANIMATION

Use high-quality subtle motion.

Animations should feel expensive rather than flashy.

Examples:

Book hover

translateY(-6px)
scale(1.015)
tiny perspective rotate
shadow increases


Sections

Use gentle fade + translate entrance animations.

Authors

Very subtle portrait scale.

Buttons

Small background transition and icon movement.

Carousel

Smooth spring-based transitions.

Search

Navbar search smoothly expands rather than instantly appearing.

Images

Lazy-load and reveal softly.

Respect prefers-reduced-motion.

27. RESPONSIVENESS

Design desktop, tablet and mobile properly.

Mobile must NOT simply be a squeezed desktop website.

For mobile:

Compact navigation

Menu drawer

Horizontal swipe carousels

Two-column book grids where appropriate

One-column editorial sections

Large readable typography

Minimum 44px touch areas

No horizontal page overflow

Hero floating books should reorganize intelligently on smaller screens.

28. DESIGN RULES

Follow these rules across the entire website:

Book covers provide most of the website's visual color.

Interface colors remain restrained.

Primary color is mainly for important actions.

Accent color is used sparingly.

Avoid excessive glassmorphism.

Avoid gradients on every section.

Avoid putting everything inside cards.

Use whitespace aggressively.

Typography should create strong hierarchy.

Sections should have different compositions while remaining part of the same design system.

Use thin subtle borders rather than heavy boxes.

Keep shadows soft and realistic.

Avoid generic template appearance.

Prioritize book imagery over decorative UI graphics.

Maintain a premium editorial atmosphere throughout.

FINAL RESULT

The final homepage should feel like a next-generation digital bookstore built in 2026, combining books, authors, publishers, physical books, e-books and discovery in one premium experience.

The feeling should be:

Editorial publishing × modern technology × premium e-commerce

Think:

Apple-level polish + Spotify-style discovery + premium literary magazine

but create an original design rather than copying any existing product.

Most importantly, implement the entire theme using a semantic design-token architecture, so changing only:

--color-background
--color-surface
--color-primary
--color-accent


can completely transform the website's color palette without editing individual components. next typescript tailwind

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/da579d41-35e8-4e9c-85ac-859d732e6616).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
