import markdownJson from "markdown-json";
const settings = {
  name: "markdown-json",
  cwd: "./",
  src: "app/data/",
  filePattern: "**/*.md",
  ignore: "",
  dist: "build/output.json",
  metadata: true,
  server: false,
  port: 5173,
  deterministicOrder: false,
};

markdownJson(settings)
  .then((data: any) => {
    console.log("data:", data);
  })
  .catch((err: any) => {
    console.log("error:", err);
  });
