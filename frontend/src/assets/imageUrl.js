const imageModules = import.meta.glob("./images/**/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function imageUrl(path) {
  if (/^https?:\/\//.test(path)) return path;
  return imageModules[`./images/${path}`] ?? "";
}
