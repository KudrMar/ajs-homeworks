export function sortHealth(items) {
  return items.sort(function (a, b) {
    return b.health - a.health;
  });
}