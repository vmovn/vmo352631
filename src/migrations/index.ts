import * as migration_20260823_133545_phase2_payload_foundation from './20260823_133545_phase2_payload_foundation';

export const migrations = [
  {
    up: migration_20260823_133545_phase2_payload_foundation.up,
    down: migration_20260823_133545_phase2_payload_foundation.down,
    name: '20260823_133545_phase2_payload_foundation'
  },
];
