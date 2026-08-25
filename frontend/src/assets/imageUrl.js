const imageModules = import.meta.glob("./images/**/*", {
  eager: true,
  query: "?url",
  import: "default",
});

export function imageUrl(path) {
  return imageModules[`./images/${path}`] ?? "";
}
