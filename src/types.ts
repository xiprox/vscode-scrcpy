type Mode = 'mirror' | 'record';

interface Options {
  mode: Mode;
  bitrate?: string | undefined | null;
  framerate?: string | undefined | null;
  path?: string | undefined | null;
  size?: string | undefined | null;
  crop?: string | undefined | null;
}

export { Mode, Options };
