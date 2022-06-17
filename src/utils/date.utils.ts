export function generateTime(): string {
  return new Date().getHours() + ':' + new Date().getMinutes();
}
