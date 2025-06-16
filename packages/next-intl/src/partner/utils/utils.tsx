export function getBasePath(
  pathname: string,
  windowPathname = window.location.pathname,
) {
  if (pathname === "/") {
    return windowPathname;
  } else {
    return windowPathname.replace(pathname, "");
  }
}
