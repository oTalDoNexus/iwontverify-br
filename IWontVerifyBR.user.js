// ==UserScript==
// @name         IWontVerify BR
// @namespace    nexus
// @version      1.00
// @description  Bypass de verificação facial para sites bloqueados no BRASIL
// @author       nexus
// @match        *://fatalmodel.com/*
// @match        *://outrositeaqui.com/*
// @icon         https://img.icons8.com/color/48/anonymous-mask.png
// @grant        none
// @downloadURL https://github.com/oTalDoNexus/iwontverify-br/raw/refs/heads/main/IWontVerifyBR.user.js
// @updateURL https://github.com/oTalDoNexus/iwontverify-br/raw/refs/heads/main/IWontVerifyBR.user.js
// ==/UserScript==

(function() {
    function fatalModel() {
        sessionStorage.setItem("toastList", JSON.stringify([{ toastKey: "ageVerificationSuccess" }]));
        document.cookie = "age_verification_status=allowed; path=/";
    }

    // Uso de routes para não pesar sites desnecessáriamente
    const routes = [
        { match: /fatalmodel\.com/, run: fatalModel },
        { match: /outrositeaqui\.com/, run: undefined }
    ];

    const url = window.location.href;

    routes.forEach(route => {
        if (route.match.test(url)) {
            route.run();
        }
    });
})();
