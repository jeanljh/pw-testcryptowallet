lockdown();

// theme part
function setTheme(theme) {
  document.body.setAttribute('class', `theme-${theme}`);
  // var logo = document.getElementById('logo');
  // var logoMap = {
  //   dark: `./static/images/logo-dark.svg`,
  //   light: `./static/images/logo-light.svg`,
  // };

  // var logoSrc = logoMap[theme];
  // if (logo && logoSrc) {
  //   // @ts-ignore
  //   logo.src = logoSrc;
  // }
}
const theme = window.location.href.split('sestheme=')[1];
setTheme(theme);

// harden globals
(function hardenGlobals() {
  const g = globalThis;
  const lockProps = [
    'window',
    'crypto',
    'fetch',
    'XMLHttpRequest',
    'WebSocket',
  ];
  lockProps.forEach((name) => {
    try {
      const desc = Object.getOwnPropertyDescriptor(g, name);
      if (!desc) return;
      if (desc.configurable || desc.writable === true) {
        Object.defineProperty(g, name, {
          value: g[name],
          writable: false,
          configurable: false,
          enumerable: !!desc.enumerable,
        });
      }
    } catch {}
  });
})();

// try broadcast channel, in some version of chrome for not supported error
try {
  const channel = new BroadcastChannel('test');
  channel.close();
} catch (error) {
  console.warn(
    '[SES Environment] BroadcastChannel is not supported:',
    error
  );
  window.BroadcastChannel = undefined;
}


// post message to parent window to notify the parent window that the iframe is loaded
window.parent.postMessage({ type: 'uiSesDOMLoaded' }, '*');
