/**
 * Lightweight Web Audio API synthesizer for realistic key sound chimes.
 * Zero external audio files, 0KB network payload, works on weak mobile & low-end PCs.
 */

let audioCtx: AudioContext | null = null;

export const playKeyDropSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Metallic chime 1 (High brass hit)
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(2489.02, now); // D#7
    osc1.frequency.exponentialRampToValueAtTime(1864.66, now + 0.15);

    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 0.35);

    // Metallic chime 2 (Clink of keys)
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(3729.31, now + 0.04);
    osc2.frequency.exponentialRampToValueAtTime(2793.83, now + 0.2);

    gain2.gain.setValueAtTime(0.08, now + 0.04);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.start(now + 0.04);
    osc2.stop(now + 0.28);

    // Ceramic thud resonance (Tray bottom)
    const osc3 = audioCtx.createOscillator();
    const gain3 = audioCtx.createGain();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(320, now);
    osc3.frequency.exponentialRampToValueAtTime(90, now + 0.12);

    gain3.gain.setValueAtTime(0.15, now);
    gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc3.connect(gain3);
    gain3.connect(audioCtx.destination);
    osc3.start(now);
    osc3.stop(now + 0.2);
  } catch {
    // Graceful fallback on devices with disabled audio
  }
};
