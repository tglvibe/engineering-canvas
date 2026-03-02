import i18n from '@/i18n';
import { safeT, formatDuration } from '@/lib/utils';

describe('i18n helper utilities', () => {
  it('safeT returns translated text when available', () => {
    const t = (key: string) => i18n.t(key);
    expect(safeT(t, 'explore.title')).toBe('Explore');
  });

  it('safeT falls back to readable string when key missing', () => {
    const t = (key: string) => key; // simulate missing translation
    expect(safeT(t, 'common.duration.52hours')).toBe('52 hours');
    expect(safeT(t, 'some.randomKey')).toBe('random Key');
  });

  it('formatDuration handles localization and fallbacks', () => {
    const t = (key: string) => i18n.t(key);
    // existing translation should still work
    expect(formatDuration(t, 'common.duration.16weeks')).toContain('16');
    // missing translation falls back
    expect(formatDuration(t, 'common.duration.52hours')).toBe('52 hours');
  });
});
