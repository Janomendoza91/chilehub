import { gzipSync } from "node:zlib";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const nextStaticDir = join(process.cwd(), ".next", "static");
const cssDir = join(nextStaticDir, "css");
const buildManifestPath = join(process.cwd(), ".next", "build-manifest.json");

const limits = {
  cssGzipBytes: 14 * 1024,
  cssRawBytes: 72 * 1024,
  cssFileCount: 1,
  sharedJsGzipBytes: 112 * 1024,
  sharedJsRawBytes: 380 * 1024
};

function assertWithin(value, limit, label) {
  if (value > limit) {
    throw new Error(`${label} is ${value} bytes, over budget ${limit} bytes`);
  }
}

function sumFiles(dir, predicate) {
  return readdirSync(dir)
    .filter(predicate)
    .reduce((total, file) => total + statSync(join(dir, file)).size, 0);
}

function gzipFiles(dir, predicate) {
  return readdirSync(dir)
    .filter(predicate)
    .reduce((total, file) => {
      const content = readFileSync(join(dir, file));
      return total + gzipSync(content).byteLength;
    }, 0);
}

function readRootMainFiles() {
  const manifest = JSON.parse(readFileSync(buildManifestPath, "utf8"));
  return (manifest.rootMainFiles ?? [])
    .filter((file) => file.endsWith(".js"))
    .map((file) => join(process.cwd(), ".next", file));
}

const cssRawBytes = sumFiles(cssDir, (file) => file.endsWith(".css"));
const cssGzipBytes = gzipFiles(cssDir, (file) => file.endsWith(".css"));
const cssFileCount = readdirSync(cssDir).filter((file) => file.endsWith(".css")).length;
const rootMainFiles = readRootMainFiles();
const sharedJsRawBytes = rootMainFiles.reduce((total, file) => total + statSync(file).size, 0);
const sharedJsGzipBytes = rootMainFiles.reduce(
  (total, file) => total + gzipSync(readFileSync(file)).byteLength,
  0
);

assertWithin(cssRawBytes, limits.cssRawBytes, "CSS raw bundle");
assertWithin(cssGzipBytes, limits.cssGzipBytes, "CSS gzip bundle");
assertWithin(cssFileCount, limits.cssFileCount, "CSS file count");
assertWithin(sharedJsRawBytes, limits.sharedJsRawBytes, "Shared JS raw bundles");
assertWithin(sharedJsGzipBytes, limits.sharedJsGzipBytes, "Shared JS gzip bundles");

console.log(
  [
    "Performance budgets passed",
    `CSS files: ${cssFileCount}`,
    `CSS raw: ${cssRawBytes} bytes`,
    `CSS gzip: ${cssGzipBytes} bytes`,
    `Shared JS raw: ${sharedJsRawBytes} bytes`,
    `Shared JS gzip: ${sharedJsGzipBytes} bytes`,
    `Shared JS files: ${rootMainFiles.length}`
  ].join("\n")
);
