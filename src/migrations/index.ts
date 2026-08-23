import * as migration_20260823_133545_phase2_payload_foundation from './20260823_133545_phase2_payload_foundation';
import * as migration_20260823_145322_phase2_6_content_safety from './20260823_145322_phase2_6_content_safety';
import * as migration_20260823_154724_phase3a_vmo_homepage from './20260823_154724_phase3a_vmo_homepage';

export const migrations = [
  {
    up: migration_20260823_133545_phase2_payload_foundation.up,
    down: migration_20260823_133545_phase2_payload_foundation.down,
    name: '20260823_133545_phase2_payload_foundation',
  },
  {
    up: migration_20260823_145322_phase2_6_content_safety.up,
    down: migration_20260823_145322_phase2_6_content_safety.down,
    name: '20260823_145322_phase2_6_content_safety',
  },
  {
    up: migration_20260823_154724_phase3a_vmo_homepage.up,
    down: migration_20260823_154724_phase3a_vmo_homepage.down,
    name: '20260823_154724_phase3a_vmo_homepage'
  },
];
