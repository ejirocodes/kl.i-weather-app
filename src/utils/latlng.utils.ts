export function generateRandomLatLng() {
  const lat = Number((Math.random() * (90 - -90) + -90).toFixed(2));
  const lng = Number((Math.random() * (180 - -180) + -180).toFixed(2));
  return { lat, lng };
}
