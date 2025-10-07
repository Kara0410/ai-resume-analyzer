// Utility to format a byte size into a human-readable string (KB, MB, GB)
// Uses 1024-based units and rounds to one decimal place for non-integers.
export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 KB";

  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  const format = (value: number, unit: string) => {
    const rounded = value >= 10 ? Math.round(value) : Math.round(value * 10) / 10; // 1 decimal for small numbers
    return `${rounded} ${unit}`;
  };

  if (bytes >= GB) {
    return format(bytes / GB, "GB");
  }
  if (bytes >= MB) {
    return format(bytes / MB, "MB");
  }
  // Default to KB; show minimum of 1 KB for tiny non-zero sizes
  const kb = bytes / KB;
  if (bytes > 0 && kb < 1) return "1 KB";
  return format(kb, "KB");
}

export default formatSize;
