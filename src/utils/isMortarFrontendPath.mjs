export const NON_MORTAR_ROUTE_PREFIXES = ["/admin", "/api"];

export function isMortarFrontendPath(pathname = "/") {
  return !NON_MORTAR_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}
