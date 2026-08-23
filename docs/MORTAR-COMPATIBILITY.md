# Mortar Framework Compatibility Strategy

## Current baseline
Mortar ships with Next.js 14.2.4 + React 18.

Known peer constraints in the purchased lockfile:
- `react-animated-cursor@2.11.2`: React/ReactDOM `^18.2.0`.
- `react-modal-video@2.0.2`: React/ReactDOM `^17 || ^18.2`.
- `yet-another-react-lightbox`: includes React 19 support.
- Swiper 8 is old but not itself the main peer blocker.

## Direction C
Do not install Payload and upgrade framework simultaneously.

### Compatibility phase
Codex must:
1. run original Mortar unchanged;
2. create Golden Master;
3. check current official Payload requirements;
4. select exact target Next/React/Payload versions;
5. migrate framework;
6. address incompatible packages one by one;
7. preserve behavior;
8. pass visual gate.

Only after this phase may Payload be added.

## Replacement hierarchy
If a dependency cannot support target React:
1. test whether it works safely despite conservative peer metadata;
2. update to a compatible version of the same library;
3. isolate it client-side;
4. replace with minimal equivalent preserving UI;
5. remove only after explicit visual approval.

## Do not
- `--legacy-peer-deps` as architecture;
- `--force`;
- mass-upgrade every dependency;
- remove cursor/video/animation to make install easier;
- install a second frontend app just to avoid migration unless Direction C is explicitly abandoned.
