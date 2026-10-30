# Cheers Experiences

Static, dependency-free website for hotel bar digital services, consultancy and integrated weddings/events in Portugal and Spain. The 30 October 2026 update promotes the existing digital services directly, following the owner's instruction to revise the website and sell more digital work.

The homepage leads with QR Menu and QR Menu + Screens proposals, the real Cheers O Bar screen example and a direct WhatsApp enquiry. Digital scope, price and dates are quoted per project. The Mystery Guest and Full Audit offers remain available. See `docs/digital-sales-plan.md` for the rationale, source videos and measurement plan.

## Source and build

- `src/editorial.mjs`: PT-PT, ES-ES and English positioning, interface and conversion copy.
- `src/digital.mjs`: complete PT/ES/EN digital offers, homepage, delivery steps and buyer questions.
- `src/content.json`: preserved services, audits, events, partnerships and approved initial meeting conditions.
- `src/template.mjs`: shared semantic page components and complete translated HTML.
- `src/atelier.css` and `src/atelier.js`: responsive design and progressive interactions.
- `npm run build`: generates six complete pages in `dist/`, metadata, sitemap and the legacy wedding redirect. No framework or package dependencies.
- `npm test`: semantic link/form/content checks (Python with lxml) and Node interaction tests using DOM fixtures.
- `npm run preview`: creates a standalone HTML file next to the checkout. All six pages, languages, styles and used imagery are embedded; real hotel submissions and analytics are disabled in that review file.

## Routes

| Language | Hotels | Weddings and events |
| --- | --- | --- |
| Portuguese | `/index.html` | `/eventos.html` |
| Spanish | `/es/index.html` | `/es/eventos.html` |
| English | `/en/index.html` | `/en/eventos.html` |

Old `?lang=pt|es|en` links select the equivalent page and preserve campaign parameters. `/destination-weddings/` redirects to the integrated events page, retaining language and campaign parameters, with no-JavaScript links available. Team links point to the existing `#team` section. Existing relevant hotel/event section anchors are retained or mapped in the interaction layer. The existing counter dashboard, hosting manifest, domain configuration and deployment workflow are unchanged.

Translated pages have full HTML without JavaScript. Language switching preserves form input in memory when enhanced navigation succeeds; normal links remain a fallback. No contact input is saved in browser storage. Menus support keyboard controls and Escape. Disclosures use native `details`; motion respects the device setting.

## Truth and content provenance

- Rui’s 10+ years and professional background are stated by the owner; hotel employment is identified as professional history, never a consultancy client.
- Beatriz Almeida is presented only as Operations & Events Manager, reporting directly to Rui. This role was confirmed by Rui in his 12 October instructions. No qualifications, seniority, client history or achievements were added.
- The first on-site meeting without a meeting fee was approved by Rui on 8 October. Availability, location and agreed travel costs still apply; detailed audits and implementation are paid separately. On the hotel page it is the entry point to the Full Audit (Step 2).
- The historical `+100%` sales block is omitted because financial evidence is not available in the project. No client testimonials, logos, ratings or financial performance claims were added.
- Hotel page: atmosphere imagery is identified as illustrative in a single footer note (no per-image captions). The Cheers O Bar screen photo is labelled as a real own-operation example. Event pages keep their per-image captions.
- Hotel offer (approved structure, October 2026): Step 1 is the Mystery Guest Bar Audit only (€990 + travel, 1–2 days on site, report with at least 10 errors and improvements, refund guarantee if fewer than 10, €990 credited if the Full Audit is commissioned within 30 days, max. 4 audits per month). Step 2 is the Full Audit, quoted per project with agreed objectives and an itemised scope (QR menus, screen/TV content, staff training, team on site, etc.).

## Forms and integrations

Hotel enquiries retain the FormSubmit recipient and native POST fallback. JavaScript uses the provider’s AJAX endpoint to show loading, prevent duplicate submissions, display errors, keep form values on failure and redirect only after a successful response. A honeypot remains present. The provider’s availability, activation and actual email delivery must be verified in the deployed environment; no live enquiry was sent during this work.

Event enquiries prepare email or WhatsApp drafts for the visitor to review and send. Guest count is optional for venue/planner partnerships without a fixed event. Wedding moments, package selection, payment format and date are included where applicable. Nothing is sent by the website automatically.

The existing counter endpoint remains, with restricted-storage and network-failure handling. Only page names are sent by the client; no form data is included. The standalone preview does not contact it.

## Validation and limits

Passed: build and JavaScript syntax, six language/page combinations, semantic structure, canonical/hreflang/OG/structured data, duplicate IDs, all internal file and fragment destinations, contact inputs and native integration, package/type selection, revenue maths and bounds, event/partnership conditional fields, message encoding, and simulated success/failure/preview submission paths.

30 October browser checks: desktop and mobile visual inspection, no page-wide horizontal overflow at 390px and 320px viewports, primary CTA navigation, PT/ES/EN switching, translated package-specific WhatsApp destinations, digital enquiry default, mobile menu, equipment FAQ disclosure and loading of the real bar photo. The mobile screen example's initial overflow was corrected. The existing automated static and interaction checks pass. No real form submission was sent. WCAG compliance, cross-device certification, email receipt, conversion uplift and Core Web Vitals are not claimed. Production uses the existing GitHub Pages workflow on `main`; deployment status must be verified separately from local checks.
