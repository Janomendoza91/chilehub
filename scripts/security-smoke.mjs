const baseUrl = process.env.SECURITY_SMOKE_URL ?? "https://chilehub.info";

const requiredHeaders = [
  "content-security-policy",
  "strict-transport-security",
  "x-frame-options",
  "x-content-type-options",
  "referrer-policy",
  "permissions-policy",
  "cross-origin-opener-policy",
  "cross-origin-resource-policy"
];

async function assertOk(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function checkHeaders() {
  const response = await fetch(baseUrl, { method: "HEAD" });

  await assertOk(response.ok, `Expected ${baseUrl} to respond successfully`);

  const missing = requiredHeaders.filter((header) => !response.headers.get(header));
  await assertOk(missing.length === 0, `Missing security headers: ${missing.join(", ")}`);

  const csp = response.headers.get("content-security-policy") ?? "";
  await assertOk(csp.includes("frame-ancestors 'none'"), "CSP must block framing");
  await assertOk(csp.includes("object-src 'none'"), "CSP must block object embedding");
}

async function checkHealth() {
  const response = await fetch(`${baseUrl}/api/health`);
  const body = await response.json();

  await assertOk(response.ok, "Health endpoint must respond successfully");
  await assertOk(body.ok === true, "Health endpoint must return ok=true");
  await assertOk(body.service === "chilehub", "Health endpoint must identify chilehub");
}

async function checkSecurityTxt() {
  const response = await fetch(`${baseUrl}/.well-known/security.txt`);
  const body = await response.text();

  await assertOk(response.ok, "security.txt must respond successfully");
  await assertOk(body.includes("Contact:"), "security.txt must include Contact");
  await assertOk(body.includes("Policy:"), "security.txt must include Policy");
}

await checkHeaders();
await checkHealth();
await checkSecurityTxt();

console.log(`Security smoke checks passed for ${baseUrl}`);
