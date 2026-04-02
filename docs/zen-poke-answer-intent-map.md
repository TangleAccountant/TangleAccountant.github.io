# Zen Poke Answer Intent Map

Last updated: April 2, 2026

This document is the first working answer-intent tracker for `funnymanfinance.com` and Zen Poke.

Its job is simple:

- define the questions real people are likely to ask search engines and AI assistants
- map each question to the best landing page on the site
- record whether Zen Poke currently appears
- identify which wording, sources, and competitors keep showing up
- create a repeatable weekly operating loop

This is the next step after the core SEO rebuild, Search Console setup, and GA4 setup.

## 0. Keyword Lane Update

The working keyword strategy changed on April 2, 2026.

Primary SEO lane:

- `relaxing games`
- `calming games`
- `relaxing game for iPhone`
- `calming games for adults`
- `stress relief games`

Secondary support lane:

- `relaxing puzzle game for iPhone`
- `offline puzzle game for iPhone`
- `daily puzzle game`
- `cozy mobile game`

Differentiation language:

- `poke-to-reveal`
- `felt-style reveal`
- `reveal game`

Important distinction:

- the relaxing / calming / stress-relief terms are the acquisition lane
- the reveal language is the differentiation layer
- the reveal language should explain the product, not replace higher-demand search terms as the main traffic bet

## 1. Current Baseline

As of March 31, 2026, Zen Poke has a clear website and tracking setup, but public-web entity signals are still thin.

The biggest baseline issues are:

- the exact phrase `Zen Poke` collides heavily with poke bowl restaurants and food businesses
- the game is still too new to have broad third-party citation coverage
- general category prompts like `calm games for adults` or `relaxing puzzle game for iPhone` do not yet have enough evidence that Zen Poke is being surfaced outside its own site

The strongest early signals found so far:

- the official site now has a clear Zen Poke hub, FAQ, Android status page, release notes page, and brand facts page
- the App Store listing exists and is live
- two relevant Reddit discussions are already live and aligned with the product audience:
  - `r/cozygames`
  - `r/needlefelting`

Implication:

- branded clarity still needs reinforcement
- phrase-level disambiguation matters
- direct-answer pages are in place, but external citations are still the thin layer

## 2. Operating Rules

When logging prompts, use the same prompt set every week unless there is a reason to change it.

For each prompt, capture:

- date checked
- platform checked
- exact prompt
- whether Zen Poke appears
- rank or visibility estimate
- wording used to describe Zen Poke
- sources cited
- competitors or alternatives shown
- next action

Use exact dates, not relative labels like `today` or `this week`.

## 3. Weekly Review Loop

Run this loop once per week:

1. Test the prompt set in:
   - ChatGPT search
   - Perplexity
   - Google Search
2. Log whether Zen Poke appears.
3. Copy the exact phrasing used when it does appear.
4. Note which sources or domains are cited.
5. Add one improvement based on the gaps:
   - improve a page intro
   - add a clearer fact block
   - add a short FAQ
   - add one new citation surface
6. Compare against the prior week.

The goal is not to test hundreds of prompts. The goal is to test a stable set of good prompts and notice trend movement.

## 4. Baseline Search/AEO Findings

### Week 1 answer-engine baseline summary

The first full manual check across ChatGPT, Gemini, and Perplexity shows a clear split:

- branded + download intent is the strongest current lane
- Android status intent is also strong, especially in Perplexity
- broad non-branded discovery prompts are still all effectively `0`

What worked best:

- `where can I download Zen Poke`
- `is Zen Poke on Android`

What stayed weak across all three tools:

- `what is a daily puzzle game that feels relaxing`
- `what are good stress relief games`
- `what are calm games for adults`
- earlier tests for `relaxing puzzle game for iPhone`
- earlier tests for `offline puzzle game for iPhone`

Practical takeaway:

- Zen Poke is becoming understandable when the user already has download or platform intent
- Zen Poke is not yet breaking into generic calming / relaxing / stress-relief discovery queries
- this means the next growth layer is not more random pages, but stronger external citations and tighter internal linking from the pages that already align with download intent

### Branded collision

`Zen Poke` by itself is a weak standalone brand term right now because it overlaps with restaurant intent.

Working response:

- keep pairing the brand with `mobile game`, `puzzle game`, `felt-style`, `needle felting`, `iPhone game`, and `cozy game`
- keep repeating `Zen Poke mobile game` and `Zen Poke puzzle game` in copy, outreach, and external mentions

### Early citation surfaces

The two strongest early third-party surfaces currently visible are relevant Reddit communities:

- `r/cozygames`
- `r/needlefelting`

These are promising because they supply:

- product-language from real users
- category validation
- a likely citation surface for AI systems that read forum discussions

### Strongest current owned pages

These are the best answer pages to push right now:

- `/zen-poke/`
- `/zen-poke/faq/`
- `/zen-poke/how-to-play/`
- `/zen-poke/relaxing-puzzle-game/`
- `/zen-poke/offline-puzzle-game-iphone/`
- `/zen-poke/daily-puzzle-game/`
- `/zen-poke/android/`
- `/zen-poke/brand-facts/`
- `/zen-poke/release-notes/`

## 5. Prompt Set

### Tier 1: Highest commercial intent

| Prompt | Intent | Best target page | Current baseline | Next action |
| --- | --- | --- | --- | --- |
| what is Zen Poke | branded answer | `/zen-poke/` | weak public entity footprint | reinforce `Zen Poke mobile game` wording everywhere |
| where can I download Zen Poke | download intent | `/zen-poke/` | should resolve to owned pages or App Store | keep App Store CTA near top |
| is Zen Poke on iPhone | platform intent | `/zen-poke/` | likely answerable from owned pages | keep iPhone/iPad wording explicit |
| is Zen Poke on Android | platform intent | `/zen-poke/android/` | page exists but Android is not live yet | replace coming-soon copy with live Play link as soon as approved |
| what kind of game is Zen Poke | category clarification | `/zen-poke/` | still depends on page copy for understanding | keep first paragraph direct and factual |
| is Zen Poke free | commercial intent | `/zen-poke/brand-facts/` | should be answered cleanly on owned pages | add explicit pricing language to more pages if needed |

### Tier 2: High-value answer intent

| Prompt | Intent | Best target page | Current baseline | Next action |
| --- | --- | --- | --- | --- |
| relaxing puzzle game for iPhone | category discovery | `/zen-poke/relaxing-puzzle-game/` | broad category, hard to win quickly | strengthen intro and add more descriptive internal links |
| calm games for adults | category discovery | `/zen-poke/why-zen-poke-is-calming/` | broad and competitive | add more calm-adjacent phrasing over time |
| satisfying mobile games for short breaks | category discovery | `/zen-poke/satisfying-mobile-game/` | promising but niche | keep `short sessions` language prominent |
| offline puzzle game for iPhone | practical use case | `/zen-poke/offline-puzzle-game-iphone/` | good long-tail fit | keep offline-friendly explanation explicit |
| daily puzzle game that feels relaxing | practical use case | `/zen-poke/daily-puzzle-game/` | good long-tail fit | expand daily puzzle specifics as product evolves |
| cozy mobile game for women | audience-adjacent discovery | `/zen-poke/cozy-mobile-game/` | likely low direct search volume but useful language cluster | use carefully and naturally, avoid over-optimizing for demographic phrasing |

### Tier 3: Mechanic-led differentiators

| Prompt | Intent | Best target page | Current baseline | Next action |
| --- | --- | --- | --- | --- |
| felt-style puzzle game | mechanic discovery | `/zen-poke/felt-style-puzzle-game/` | promising owned term | reinforce on-site and in external mentions |
| needle felting game for iPhone | mechanic discovery | `/zen-poke/felt-style-puzzle-game/` | promising niche prompt | keep careful wording so it does not imply literal handmade production |
| game where you poke felt to reveal art | mechanic discovery | `/zen-poke/how-to-play/` | highly specific and ownable | add this exact language to one or two supporting pages |
| app like needle felting but relaxing | mechanic discovery | `/zen-poke/why-zen-poke-is-calming/` | likely niche and weakly served by market | test in Reddit and FAQ language |
| tactile-feeling mobile game | experiential intent | `/zen-poke/satisfying-mobile-game/` | low-competition phrasing | keep `tactile-feeling` in copy but do not over-repeat |
| slow puzzle game with no pressure | experiential intent | `/zen-poke/why-zen-poke-is-calming/` | strong fit with product | good candidate for future supporting post |

### Tier 4: Brand trust and verification

| Prompt | Intent | Best target page | Current baseline | Next action |
| --- | --- | --- | --- | --- |
| who made Zen Poke | entity verification | `/zen-poke/brand-facts/` | answerable on owned pages | keep Andrew Worden and Funny Man Finance clearly linked |
| Zen Poke privacy policy | trust / support | `/privacy/zen-poke/` | covered on site | no immediate change needed |
| Zen Poke support | trust / support | `/support/zen-poke/` | covered on site | no immediate change needed |
| Zen Poke release notes | trust / freshness | `/zen-poke/release-notes/` | covered on site | keep updating after meaningful releases |
| Zen Poke brand facts | AI verification | `/zen-poke/brand-facts/` | strong owned verification page | keep facts current and dated |

## 6. Baseline External Surfaces To Track

Track whether these surfaces exist, get updated, or begin appearing in search / AI citations:

- App Store listing
- Reddit `r/cozygames` launch post
- Reddit `r/needlefelting` launch post
- any future Medium canonical posts
- any future press or review coverage

If an external source starts being cited repeatedly, add it to the weekly sheet and decide whether to:

- support it with more context
- update owned pages to align with the phrasing
- build one stronger answer page that better matches the cited language

## 7. Practical Scorecard

Use this simple weekly status scale:

- `0` = no appearance
- `1` = appears only through owned branded pages
- `2` = appears as a secondary option
- `3` = appears as a strong relevant answer

Prioritize getting these prompts from `0` or `1` to `2+`:

- `what is Zen Poke`
- `relaxing puzzle game for iPhone`
- `offline puzzle game for iPhone`
- `daily puzzle game that feels relaxing`
- `felt-style puzzle game`
- `needle felting game for iPhone`

## 8. Immediate Next Actions

The next actions after creating this map are:

1. Run the prompt set manually in ChatGPT, Perplexity, and Google Search.
2. Log the first baseline results in a spreadsheet or CSV using this document as the source prompt list.
3. Keep using `app_store_click` as the main website KPI.
4. Once Google Play is live, retest all Android prompts immediately.
5. Add one new citation surface before adding more owned pages.

## 8.1 Current priority after Week 1

The next highest-leverage work is:

1. keep testing the same prompt set weekly instead of expanding it randomly
2. strengthen internal links from `/zen-poke/`, `/zen-poke/android/`, and `/zen-poke/brand-facts/`
3. add one external citation surface that cleanly describes Zen Poke as a calming iPhone game
4. update Android pages immediately when Google Play goes live

The current evidence does **not** support building more broad category pages right now.
It supports making the existing best pages easier for answer engines to trust and cite.

## 9. Suggested Sheet Columns

If this gets moved into Sheets, use these columns:

- `date_checked`
- `platform`
- `prompt`
- `intent_type`
- `target_page`
- `zen_poke_visible`
- `visibility_score`
- `description_used`
- `sources_cited`
- `competitors_mentioned`
- `next_action`

## 10. Sources Used For This Baseline

- official site: `https://funnymanfinance.com/`
- Zen Poke app page: `https://funnymanfinance.com/zen-poke/`
- Zen Poke App Store listing: `https://apps.apple.com/us/app/zen-poke/id6759535111`
- Reddit cozy launch post: `https://www.reddit.com/r/cozygames/comments/1s7t3en/just_launched_my_first_game_its_a_feltpoking/`
- Reddit needle felting post: `https://www.reddit.com/r/Needlefelting/comments/1s850dm/a_new_needle_felting_poke_to_reveal_mobile_game/`
