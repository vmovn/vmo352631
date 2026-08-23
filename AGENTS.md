# AGENTS.md — VMO Web Constitution V2

## Mission
Biến source Mortar đã mua thành `vmo.vn`: một public Growth Gateway của VMO, giữ nguyên giá trị experience của Mortar, dùng Payload CMS cho content/SEO/localization và kết nối VMO OS ở lớp execution phía sau.

## Four ownership boundaries
1. **Mortar owns Experience** — layout, composition, motion, interaction, responsive behavior và visual rhythm.
2. **Payload owns Content** — text, media, SEO, structured content, localization, forms và editorial workflow.
3. **VMO35 owns Meaning** — positioning, business language, 0→1→2→N, brand firewall và CTA.
4. **VMO OS owns Execution** — CRM/FLOW/SCORE/AI/API/REPORT là hạ tầng delivery, không phải SaaS public của homepage.

## Mandatory reading
Trước mọi thay đổi: `VMO35.md`, `DESIGN.md`, `TEMPLATE.md`, `ARCHITECTURE.md`, `CONTENT.md`, `SITEMAP.md`, `TESTING.md`.
Nếu task chạm một domain, đọc skill tương ứng trong `skills/`.

## Direction C — required build order
**Freeze Mortar → migrate framework compatibility → visual gate → Payload → VMO content → bilingual → inner pages → Growth Mission → VMO OS integrations → production.**

Payload không được cài trước khi framework migration đã đạt Golden Master visual gate.

## Golden Master law
- Tag source nguyên bản: `mortar-original`.
- Capture baseline screenshots theo `docs/VISUAL-GOLDEN-MASTER.md`.
- Không delete/rewrite component Mortar để “dọn demo”.
- Không thay component giàu interaction bằng generic CMS cards.
- Khi CMS hóa: extract hard-coded content thành typed props/data adapter, giữ component composition.
- Original file có thể refactor để tương thích framework nhưng behavior phải được chứng minh bằng visual/interaction gate.
- “Build pass” không chứng minh visual parity.

## No-redesign rule
Agent không có quyền redesign. Chỉ được:
- rebrand;
- đổi nội dung/media;
- sửa bug/accessibility/performance có bằng chứng;
- tách runtime client/server;
- refactor compatibility mà không làm mất UX;
- compose các section Mortar khác nhau theo `TEMPLATE.md`.

Thay layout/animation/interaction cần explicit human approval.

## Payload rule
- Homepage và trang chiến lược dùng fixed schemas/adapters gắn với Mortar components.
- Page Builder generic chỉ dùng cho landing/campaign page thật sự cần flexibility.
- CMS hóa **data**, không CMS hóa **art direction**.
- Payload Admin/API phải nằm ngoài Mortar frontend runtime.

## Content rule
- `VMO35.md` là canonical.
- VI là default; EN phải có parity khi publish.
- Không fake customer, case, metric, testimonial, award, certification.
- Không public tên tech vendor nội bộ nếu không cần.
- CTA hướng tới bài toán/outcome, không “Start free/Buy SaaS”.

## Agent routing
- **Codex**: source audit, framework migration, Payload architecture/schema/API/test/Docker/refactor repo-wide.
- **Cursor**: visual parity, responsive, animation, section composition, UI copy polish, screenshot review.
- Không giao cho một agent tự chạy xuyên tất cả phase mà không có visual acceptance gate.

## Git/Deploy flow
`Codex/Cursor → GitHub → Coolify`.
PostgreSQL, Redis, object storage và service hạ tầng chạy riêng trong Coolify; web app kết nối bằng environment variables.

## Stop conditions
Agent phải STOP khi:
- visual parity giảm đáng kể;
- cần redesign;
- dependency migration buộc phải thay một effect/component;
- cần fake proof/content;
- một phase chưa pass gate nhưng task kế tiếp sẽ xây lên nó.

## Completion
Không tuyên bố hoàn thành nếu chưa có fresh evidence theo `TESTING.md`.
