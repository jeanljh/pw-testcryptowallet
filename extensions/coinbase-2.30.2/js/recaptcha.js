!function(){var e=chrome.runtime.getURL("js/recaptcha-gstatic.js"),t=window,c="___grecaptcha_cfg",r=t[c]=t[c]||{},a="grecaptcha",n=t[a]=t[a]||{};n.ready=n.ready||function(e){(r.fns=r.fns||[]).push(e)},t.__recaptcha_api="https://google.com/recaptcha/api2/",(r.render=r.render||[]).push("6LdM15shAAAAAMbOOLYBV3XyebVmzW0TKhUjMBnT"),t.__google_recaptcha_client=!0;var s=document,o=s.createElement("script");o.type="text/javascript",o.async=!0,o.src=e,o.crossOrigin="anonymous";var i=s.querySelector("script[nonce]"),p=i&&(i.nonce||i.getAttribute("nonce"));p&&o.setAttribute("nonce",p);var g=s.getElementsByTagName("script")[0];g.parentNode.insertBefore(o,g)}();