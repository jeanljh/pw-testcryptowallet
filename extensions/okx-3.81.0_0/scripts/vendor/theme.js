const __okxCustomChromeStorage__ = (
  globalThis.chrome ||
  globalThis.browser ||
  {}
).storage;
(globalThis.chrome || globalThis.browser).storage = new Proxy(
  {},
  {
    get(target, prop, receiver) {
      throw new Error('chrome storage api is not allowed');
    },
  }
);

var DARK = 'dark';
var LIGHT = 'light';

function getActualTheme() {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
  if (darkMode.matches) {
    return DARK;
  }
  return LIGHT;
}

/**
 * Initialize theme based on the current page
 * - If in secure-iframe.html: use theme from URL parameter
 * - Otherwise: use localStorage or system preference
 */
function initializeTheme() {
  const currentPath = window.location.pathname;
  const isSecureIframe = currentPath.endsWith('secure-iframe.html');

  var theme;

  if (isSecureIframe) {
    // For secure-iframe.html, get theme from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlTheme = urlParams.get('theme');
    theme = urlTheme === 'dark' ? DARK : LIGHT;
  } else {
    // For other pages, use localStorage or system preference
    theme = window.localStorage.getItem('theme');
    if (!theme || theme === 'auto') {
      window.localStorage.setItem('theme', 'auto');
      theme = getActualTheme();
    }
  }

  return theme;
}

var theme = initializeTheme();

document.body.setAttribute('class', `theme-${theme}`);

var logo = document.getElementById('logo');
var logoMap = {
  dark: `./static/images/logo-dark.svg`,
  light: `./static/images/logo-light.svg`,
};

var logoSrc = logoMap[theme];
if (logo && logoSrc) {
  // @ts-ignore
  logo.src = logoSrc;
}

function buildIframeUrl(theme) {
  let iframeUrl = 'ses.html';

  if (location.hash) {
    const hash = location.hash;
    const separator = hash.includes('?') ? '&' : '?';
    iframeUrl = `ses.html${hash}${separator}sestheme=${encodeURIComponent(
      theme
    )}`;
  } else {
    iframeUrl = `ses.html?sestheme=${encodeURIComponent(theme)}`;
  }

  return iframeUrl;
}

const iframeContainer = document.getElementById('ui-ses-iframe-container');
if (iframeContainer) {
  const iframe = document.createElement('iframe');
  iframe.id = 'ui-ses-iframe';
  iframe.src = buildIframeUrl(theme);
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframeContainer.appendChild(iframe);
  window.addEventListener('message', (event) => {
    if (event?.data?.type === 'uiSesDOMLoaded') {
      window.SESIframeLoaded = true;
    }
  });
}
