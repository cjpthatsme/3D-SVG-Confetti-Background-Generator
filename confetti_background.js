// Confetti Background Generator with SVG

// Helper to generate unique gradient IDs
let gradientIdCounter = 0;
const getUniqueId = () => `grad-${Date.now()}-${gradientIdCounter++}`;

// SVG Ribbon Templates
const ribbonTemplates = [
    // Ribbon 1
    (color1, color2) => {
        const id1 = getUniqueId(), id2 = getUniqueId(), id3 = getUniqueId(), id4 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24.13 51.19"><defs><linearGradient id="${id1}" x1="1.1" y1="24.86" x2="23.37" y2="24.86" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id2}" x1="37.24" y1="-73.67" x2="35.52" y2="-87.88" gradientTransform="translate(23.32 -45.57) rotate(30.56) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id3}" x1="36.43" y1="-66.1" x2="26.23" y2="-75.62" xlink:href="#${id2}"/><linearGradient id="${id4}" x1="28.89" y1="-50.58" x2="13.32" y2="-65.55" xlink:href="#${id2}"/></defs><path d="M1.4,5.13c.88,1.4,2.42,1.96,3.97,2.42,2.07.61,4.16,1.15,6.25,1.7,2.08.56,4.16,1.12,6.21,1.78.1.03.2.06.3.1-.86.17-1.74.3-2.59.43-3.29.47-6.55,1.09-9.77,1.92-.78.2-1.55.41-2.33.63-.64.18-1.39.31-1.9.76-.22.19-.29.5-.34.77-.14,1.01-.11,2.07-.06,3.09.03.68.03,1.44.28,2.1.11.3.45.52.71.69,2.52,1.64,5.39,2.75,8.2,3.81,1.76.66,3.54,1.3,5.28,2.01.46.19.92.38,1.37.58-1.27.51-2.64.75-3.98,1-1.5.28-2.99.59-4.36,1.27-.55.27-1.04.73-1.22,1.31-.21.65-.16,1.44-.15,2.11,0,.67.01,1.35.06,2.02.03.43.04.93.19,1.34.21.58.72.81,1.28,1.02.79.31,1.59.58,2.41.83,1.02.3,2.03.49,3.07.68-.79.48-1.62.93-2.37,1.45-1.29.87-2.45,2.1-2.79,3.62-.24,1.03-.15,2.18-.1,3.23.03.52.05,1.04.14,1.56,0,.03.12.59.19.27.46-1.99,2.23-3.22,3.92-4.22.94-.56,1.9-1.09,2.75-1.78.85-.68,1.24-1.48,1.36-2.49.04-.06.05-.24.05-.53.08-1.32.07-2.66-.11-3.97-.07-.52-.14-1.08-.5-1.5-.68-.79-2.06-.73-3.02-.91-.14-.03-.29-.06-.44-.09.78-.15,1.56-.29,2.32-.49,1.31-.34,2.58-.87,3.62-1.74.45-.38.9-.88,1.08-1.44.21-.67.15-1.45.16-2.13.01-1.08.05-2.31-.25-3.37-.16-.57-.65-.93-1.16-1.22-.67-.38-1.4-.69-2.1-1-1.38-.62-2.8-1.16-4.22-1.7-2.11-.79-4.24-1.56-6.3-2.46,1.22-.3,2.46-.58,3.69-.83,1.64-.34,3.29-.62,4.96-.86,1.39-.2,2.79-.39,4.15-.75,1.29-.35,2.63-.9,3.6-1.82.24-.23.34-.54.38-.85.14-1.02.1-2.08.06-3.1-.05-1.01.01-2.12-.88-2.78-.56-.4-1.31-.6-1.94-.84-.79-.30-1.59-.56-2.4-.83-1.55-.51-3.12-.95-4.70-1.39-2.27-.62-4.55-1.2-6.82-1.84C4.83,2.18,2.49,1.73,1.45.07c-.14-.24-.17.19-.19.27-.07.52-.08,1.05-.08,1.57,0,.67.01,1.35.06,2.02.02.3,0,.92.17,1.21h-.02Z" style="fill:url(#${id1}); stroke-width:0px;"/><path d="M17.3,36.59c-.01-.06-.02-.13-.02-.18-.54,2.03-3,3.05-3,3.05-.79.48-1.62.93-2.37,1.45-1.29.87-2.45,2.1-2.79,3.62-.24,1.03-.15,2.18-.1,3.23.03.52.05,1.04.14,1.56,0,.03.12.59.19.27.46-1.99,2.23-3.22,3.92-4.22.94-.56,1.9-1.09,2.75-1.78.85-.68,1.24-1.48,1.36-2.49.04-.06.05-.24.05-.53.08-1.32.07-2.66-.11-3.97h-.01Z" style="fill:url(#${id2}); stroke-width:0px;"/><path d="M15.6,27.31c.46.19.92.38,1.37.58-1.27.51-2.64.75-3.98,1-1.5.28-2.99.59-4.36,1.27-.55.27-1.04.73-1.22,1.31-.21.65-.16,1.44-.15,2.11,0,.67.01,1.35.06,2.02.02.33.03.69.11,1.04.97-1.64,5.37-2.45,5.37-2.45l.72-.06c-.06,0-.13-.03-.19-.03.78-.15,1.56-.29,2.32-.49,1.31-.34,2.58-.87,3.62-1.74.45-.38.9-.88,1.08-1.44,0,0,.3-1.18-4.75-3.1v-.02Z" style="fill:url(#${id3}); stroke-width:0px;"/><path d="M18.04,11.13c-.84.17-1.68.29-2.53.41-3.29.47-6.55,1.09-9.77,1.92-.78.2-1.55.41-2.33.63-.64.18-1.39.31-1.9.76-.22.19-.29.5-.34.77-.14,1.01-.11,2.07-.06,3.09.03.68.03,1.44.28,2.1,0,0,0,.02.01.03l.05-.42s.66-1.34,5-1.86c1.22-.3,2.46-.58,3.69-.83,1.64-.34,3.29-.62,4.96-.86,1.39-.2,2.79-.39,4.15-.75,1.29-.35,2.63-.9,3.6-1.82.13-.12.22-.28.28-.43.03-.17-.12-.97-5.1-2.72h0Z" style="fill:url(#${id4}); stroke-width:0px;"/></svg>`;
    },
    
    // Ribbon 2
    (color1, color2) => {
        const id1 = getUniqueId(), id2 = getUniqueId(), id3 = getUniqueId(), id4 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.26 51.89"><defs><linearGradient id="${id1}" x1="236.87" y1="-154.31" x2="220.75" y2="-121.25" gradientTransform="translate(203.29 -154.03) rotate(106.75) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id2}" x1="221" y1="-153.77" x2="209.79" y2="-130.76" gradientTransform="translate(203.29 -154.03) rotate(106.75) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id3}" x1="254.3" y1="-123.5" x2="238.82" y2="-142.79" gradientTransform="translate(203.29 -154.03) rotate(106.75) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id4}" x1="247.29" y1="-140.89" x2="232.75" y2="-123.95" gradientTransform="translate(203.29 -154.03) rotate(106.75) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs><path d="M.56,22.62c.58,3.29,4.34,4,7.09,4.59,3.11.67,5.78,1.55,6.68,4.48-.12-1.03-.12-1.88-.28-3.19-.41-3.26-2.99-4.72-5.92-5.46-2.79-.70-7.36-1.09-7.97-4.63.18,1.02.18,2.92.41,4.22Z" style="fill:url(#${id1}); stroke-width:0px;"/><path d="M12.53.01c-3.71,3.26-7.08,6.86-10.03,10.82C1.35,12.37-.06,14.29,0,16.33c.06,1.82,0,3.82.51,5.58-.39-1.37.1-3-.3-4.39-.1-.28-.16-.56-.19-.85.09,1.36.19,2.73.28,4.09,0-.15-.02-.29-.02-.43v.3c.19-3.18,2.83-5.95,4.76-8.30,2.36-2.87,4.98-5.5,7.78-7.94.21-.18-.11-1.93-.12-2.19-.02-.23-.34-2.05-.17-2.19h0Z" style="fill:url(#${id2}); stroke-width:0px;"/><path d="M3.2,43.21c-.28,1.84.32,3.22,1.92,4.24,1.8,1.14,3.27,2.15,3.34,4.48-.05-1.43.78-2.89.73-4.33-.06-1.84-1.04-3.13-2.59-4.05-1.60-.95-2.82-1.93-2.77-3.94-.01.10-.03.20-.04.29.02-.14.04-.28.07-.42.12-.8-.14.66-.17.77-.17.99-.34,1.98-.49,2.97h0Z" style="fill:url(#${id3}); stroke-width:0px;"/><path d="M14.13,29.86c.03,1.82-1.33,3.01-1.33,3.01-2.08,2.09-6.08,3.01-8.05,4.8-1.32,1.2-1.58,2.81-1.58,4.49-.06.04-.06.55-.02,1.52,0,.24,0,.49,0,.73.88-2.06,2.61-3.10,2.61-3.10,1.78-1.27,4.14-2.06,5.95-3.21,1.47-.94,2.37-2.28,2.46-3.99,0,.02,0,.04,0,.05,0-.05,0-.11,0-.16,0-.05.01-.09,0-.14.01-1.28.23-2.87-.06-4.22,0,.07,0,.14,0,.21h0Z" style="fill:url(#${id4}); stroke-width:0px;"/></svg>`;
    },
    
    // Ribbon 3
    (color1, color2) => {
        const id1 = getUniqueId(), id2 = getUniqueId(), id3 = getUniqueId(), id4 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.27 43.19"><defs><linearGradient id="${id1}" x1="75.53" y1="99.19" x2="70.06" y2="116.35" gradientTransform="translate(84.87 127.79) rotate(-69.9) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id2}" x1="65.07" y1="100.38" x2="54.21" y2="104.31" gradientTransform="translate(84.87 127.79) rotate(-69.9) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id3}" x1="71.11" y1="99.64" x2="65.46" y2="109.39" xlink:href="#${id2}"/><linearGradient id="${id4}" x1="84.7" y1="102.77" x2="75.73" y2="117.73" xlink:href="#${id2}"/></defs><path d="M.68,6.12c.66,1.16,1.89,1.67,3.12,2.09,1.65.57,3.32,1.08,4.99,1.61,1.67.53,3.32,1.06,4.96,1.67l.24.09c-.70.11-1.41.17-2.12.24-2.67.26-5.33.63-7.95,1.18-.63.13-1.27.28-1.90.42-.53.12-1.13.19-1.56.54-.19.15-.26.39-.30.61C0,15.37,0,16.23,0,17.06c0,.55-.03,1.17.15,1.71.08.25.34.44.55.59,1.97,1.41,4.26,2.42,6.49,3.38,1.40.60,2.81,1.19,4.19,1.83.36.17.73.34,1.10.52-1.04.36-2.16.51-3.25.65-1.22.17-2.44.36-3.57.85-.45.20-.87.54-1.03,1.01-.19.52-.18,1.15-.20,1.70-.02.54-.03,1.09-.01,1.63,0,.34,0,.75.11,1.08.16.47.55.68.99.87.63.28,1.27.52,1.92.75.81.28,1.63.47,2.46.66-.65.36-1.33.69-1.97,1.07-1.07.66-2.05,1.60-2.39,2.81-.23.83-.21,1.76-.20,2.60,0,.41,0,.85.06,1.26,0,.03.08.48.15.22.44-1.59,1.91-2.50,3.32-3.26.77-.42,1.57-.81,2.29-1.33.70-.52,1.05-1.15,1.19-1.95.03-.05.05-.20.06-.43.11-1.05.16-2.15.06-3.21-.04-.43-.08-.88-.36-1.22-.52-.66-1.64-.67-2.41-.85-.11-.03-.23-.06-.34-.09.63-.09,1.27-.18,1.89-.30,1.07-.23,2.12-.61,2.98-1.27.39-.29.76-.67.92-1.13.20-.53.17-1.16.20-1.71.05-.87.12-1.86-.08-2.72-.11-.46-.49-.78-.89-1.02-.54-.33-1.10-.61-1.66-.89-1.10-.55-2.22-1.04-3.35-1.53-1.68-.72-3.37-1.42-5-2.22.99-.19,2.01-.37,3.02-.53,1.34-.21,2.69-.37,4.04-.50,1.13-.11,2.26-.20,3.37-.45,1.06-.23,2.15-.63,2.97-1.34.20-.18.29-.43.34-.67.15-.81.16-1.66.16-2.49,0-.81.09-1.70-.61-2.27-.43-.35-1.03-.54-1.54-.75-.63-.27-1.27-.51-1.91-.76-1.24-.47-2.48-.88-3.74-1.30-1.81-.59-3.63-1.14-5.44-1.74-1.42-.47-3.29-.91-4.07-2.29-.11-.20-.15.14-.16.21-.08.42-.10.84-.12,1.27-.03.55-.03,1.09-.01,1.63,0,.25-.04.74.09.98h-.06Z" style="fill:url(#${id1}); stroke-width:0px;"/><path d="M12.43,32.08s-.01-.10-.02-.15c-.51,1.62-2.54,2.35-2.54,2.35-.65.36-1.33.69-1.97,1.07-1.07.66-2.05,1.60-2.39,2.81-.23.83-.21,1.76-.20,2.60,0,.41,0,.85.06,1.26,0,.03.08.48.15.22.44-1.59,1.91-2.50,3.32-3.26.77-.42,1.57-.81,2.29-1.33.70-.52,1.05-1.15,1.19-1.95.03-.05.05-.20.06-.43.11-1.05.16-2.15.06-3.21v.02Z" style="fill:url(#${id2}); stroke-width:0px;"/><path d="M11.39,24.54c.36.17.73.34,1.10.52-1.04.36-2.16.51-3.25.65-1.22.17-2.44.36-3.57.85-.45.20-.87.54-1.03,1.01-.19.52-.18,1.15-.20,1.70-.02.54-.03,1.09-.01,1.63.01.26,0,.56.06.85.85-1.29,4.43-1.76,4.43-1.76l.58-.02s-.10-.02-.15-.04c.63-.09,1.27-.18,1.89-.30,1.07-.23,2.12-.61,2.98-1.27.39-.29.76-.67.92-1.13,0,0,.28-.94-3.74-2.68Z" style="fill:url(#${id3}); stroke-width:0px;"/><path d="M13.93,11.59c-.68.10-1.37.16-2.05.23-2.67.26-5.33.63-7.95,1.18-.63.13-1.27.28-1.90.42-.53.12-1.13.19-1.56.54-.19.15-.26.39-.30.61C0,15.37,0,16.23,0,17.06c0,.55-.03,1.17.15,1.71t0,.01l.06-.33s.58-1.05,4.10-1.31c.99-.19,2.01-.37,3.02-.53,1.34-.21,2.69-.37,4.04-.50,1.13-.11,2.26-.20,3.37-.45,1.06-.23,2.15-.63,2.97-1.34.11-.09.19-.21.24-.34.04-.13-.06-.79-4.03-2.38h-.01Z" style="fill:url(#${id4}); stroke-width:0px;"/></svg>`;
    },
    
    // Ribbon 4
    (color1, color2) => {
        const id1 = getUniqueId(), id2 = getUniqueId(), id3 = getUniqueId(), id4 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.64 51.14"><defs><linearGradient id="${id1}" x1="-122.94" y1="90.74" x2="-94.82" y2="75.7" gradientTransform="translate(65.3 15.22) rotate(-42.69) scale(.47 -.4)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id2}" x1="-72.01" y1="130.3" x2="-79.29" y2="110.06" gradientTransform="translate(65.3 15.22) rotate(-42.69) scale(.47 -.4)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id3}" x1="-127.82" y1="73.35" x2="-140.12" y2="37.36" xlink:href="#${id2}"/><linearGradient id="${id4}" x1="-101.46" y1="110.56" x2="-97.88" y2="79.78" xlink:href="#${id2}"/></defs><path d="M9.06,19.32c-1.75-.37-3.58-.69-5.18-1.39-.71-.31-1.3-.78-1.63-1.48-.31-.66-.33-1.44-.2-2.22.06-.35.15-.70.27-1.04.11-.15.23-.32.38-.50.30-.40.62-.78.93-1.17,1.58-1.97,3.05-4.14,3.93-6.44.56-1.47.75-3.18-.13-4.33-.10-.13-.22-.25-.34-.36-.07-.06-.93,1.37-.97,1.45-.20.35-.39.71-.56,1.07-.01.03-.22.42-.16.47,1.06.93,1.13,2.57.64,4.04,0,.03-.02.06-.03.09-.09.12-.18.24-.27.36-.58.76-1.14,1.77-1.73,2.53-.85,1.11-1.64,2.02-2.3,3.24-.53.99-1.02,2.01-1.28,3.06-.40,1.61-.05,3.15,1.25,3.95.69.43,1.54.64,2.34.86.91.25,1.85.48,2.79.67,1.28.26,3.13.56,3.13,2.18,0,0,0,.01,0,.02-.64.67-1.37,1.28-2.07,1.88-1.49,1.31-3,2.60-4.29,4.11-.84.99-1.53,2.06-2.16,3.18-.61,1.08-1.24,2.25-1.39,3.43-.23,1.80.74,3.31,1.79,4.49,1.10,1.23,2.41,2.31,3.09,3.87.63,1.45.67,3.27.07,4.95-.03.07-.05.14-.08.20.01-.03-.15.35.01.19.18-.19.33-.44.46-.66.41-.66.83-1.36,1.11-2.07.67-1.71.80-3.48.32-5.07-.50-1.64-1.76-2.79-2.89-3.98-1.11-1.17-2.23-2.57-2.22-4.37,0-.34.05-.68.14-1.02.45-.57.96-1.10,1.47-1.61,1.41-1.40,2.96-2.65,4.42-3.99.71-.65,1.32-1.34,1.86-2.12.53-.76.97-1.58,1.39-2.39.26-.50.50-1.03.61-1.57.33-1.67-1.24-2.26-2.54-2.54h0Z" style="fill:url(#${id1}); stroke-width:0px;"/><path d="M6.08,7.29c-.02.23-.03.47-.06.70-.01.08-.03.16-.04.24.62-1.01,1.16-2.06,1.57-3.14.56-1.47.75-3.18-.13-4.33-.10-.13-.22-.25-.34-.36-.07-.06-.93,1.37-.97,1.45-.20.35-.39.71-.56,1.07-.01.03-.22.42-.16.47,1.03.90,1.12,2.46.69,3.88h0Z" style="fill:url(#${id2}); stroke-width:0px;"/><path d="M3.92,38.94c-1.11-1.17-2.23-2.57-2.22-4.37,0-.34.05-.68.14-1.02.01-.02.03-.04.05-.06.04-.37.11-.72.22-1.06-.24.38-.47.76-.68,1.15-.61,1.08-1.24,2.25-1.39,3.43-.23,1.80.74,3.31,1.79,4.49,1.10,1.23,2.41,2.31,3.09,3.87.63,1.45.67,3.27.07,4.95-.03.07-.05.14-.08.20.01-.03-.15.35.01.19.18-.19.33-.44.46-.66.41-.66.83-1.36,1.11-2.07.67-1.71.80-3.48.32-5.07-.50-1.64-1.76-2.79-2.89-3.98h0Z" style="fill:url(#${id3}); stroke-width:0px;"/><path d="M9.06,19.32c-1.75-.37-3.58-.69-5.18-1.39-.71-.31-1.3-.78-1.63-1.48-.31-.66-.33-1.44-.2-2.22.05-.28.12-.57.21-.85-.34.25-.62.56-.88.90-.40.79-.74,1.60-.95,2.43-.40,1.61-.05,3.15,1.25,3.95.69.43,1.54.64,2.34.86.91.25,1.85.48,2.79.67,1.21.24,2.93.53,3.11,1.93.23.01.45.10.53.30.19-.34.36-.68.54-1.01.26-.50.50-1.03.61-1.57.33-1.67-1.24-2.26-2.54-2.54h0Z" style="fill:url(#${id4}); stroke-width:0px;"/></svg>`;
    },
    
    // Ribbon 5
    (color1, color2) => {
        const id1 = getUniqueId(), id2 = getUniqueId(), id3 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 23.73 51.19"><defs><linearGradient id="${id1}" x1="16.44" y1="33.13" x2="38.71" y2="25.52" gradientTransform="translate(-5.38 61.98) rotate(-18.14) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id2}" x1="16.81" y1="39" x2="45.67" y2="40.65" gradientTransform="translate(-5.38 61.98) rotate(-18.14) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id3}" x1="18.41" y1="12.01" x2="31.44" y2="15.11" xlink:href="#${id2}"/></defs><path d="M23.49,5.37c-.31-1.14-.78-2.21-1.26-3.2-.34-.71-.71-1.37-1.25-1.75-.52-.36-1.11-.39-1.67-.40-.72-.02-1.44-.02-2.15.01-1.38.06-2.76.24-4.12.55-3.21.74-6.33,2.71-9.62,2.19-.01.07-.01.14-.02.22.49,1.01,1.09,1.86,1.92,2.27,1.17.58,2.53.46,3.74.25,1.34-.23,2.67-.72,3.99-1.12,2.68-.82,5.46-1.14,8.18-.95.36.03.70.10,1.03.28,0,.10,0,.20,0,.30-.04,1.57-.71,2.92-1.48,3.93-1.74,2.29-4.21,3.43-6.41,4.27-2.36.89-4.77,1.42-7.13,2.23-1.17.41-2.34.90-3.47,1.55-1.08.61-2.14,1.44-2.90,2.76-.71,1.23-1.03,2.97-.71,4.51.23,1.11.70,2.14,1.14,3.08.36.80.75,1.57,1.27,2.16.76.86,1.74,1.25,2.66,1.56,1.26.44,2.52.82,3.78,1.31,1.31.51,2.63,1.09,3.92,1.74.57.28,1.14.60,1.67,1.05.08.07.16.14.22.21.13,2.74-2.28,4.25-3.54,5.52-.75.76-1.43,1.73-1.67,3.07-.29,1.62.27,3.30.54,4.83.14.76.53,1.52.83,2.16.15.34.31.67.48.97-.01-.03.20.35.15.10-.31-1.75-.90-3.54-.38-5.34.41-1.42,1.41-2.33,2.27-3.10.91-.81,1.83-1.63,2.41-2.98.71-1.65.21-3.34-.39-4.84-.75-1.89-1.56-3.51-2.93-4.43-1.15-.77-2.42-1.27-3.62-1.79-1.31-.56-2.64-1.06-3.98-1.50-1.05-.34-2.12-.61-3.09-1.29-.13-.09-.27-.19-.39-.32,0-.39.03-.79.10-1.17.27-1.68,1.15-2.94,2.12-3.81,1.01-.91,2.18-1.46,3.31-1.95,1.17-.51,2.35-.89,3.54-1.26,2.38-.72,4.77-1.30,7.08-2.41,2.07-1,4.59-2.51,5.71-5.46.47-1.23.52-2.73.17-4.03v-.02Z" style="fill:url(#${id1}); stroke-width:0px;"/><path d="M23.49,5.37c-.31-1.14-.78-2.21-1.26-3.2-.05-.10-.10-.20-.15-.29.11.58.13,1.20.09,1.81.03,0,.05.03.08.04,0,.10,0,.20,0,.30-.04,1.57-.71,2.92-1.48,3.93-1.74,2.29-4.21,3.43-6.41,4.27-2.36.89-4.77,1.42-7.13,2.23-1.17.41-2.34.90-3.47,1.55-1.08.61-2.14,1.44-2.90,2.76-.71,1.23-1.03,2.97-.71,4.51.23,1.11.70,2.14,1.14,3.08.10.22.20.42.30.63-.02-.12-.05-.24-.08-.36-.11-.49-.10-1-.01-1.47.01-.30.05-.58.09-.87.27-1.68,1.15-2.94,2.12-3.81,1.01-.91,2.18-1.46,3.31-1.95,1.17-.51,2.35-.89,3.54-1.26,2.38-.72,4.77-1.30,7.08-2.41,2.07-1,4.59-2.51,5.71-5.46.47-1.23.52-2.73.17-4.03l-.02-.02Z" style="fill:url(#${id2}); stroke-width:0px;"/><path d="M15.49,34.78c-.29-.72-.58-1.40-.91-2.02,0,.07,0,.13.02.21.12.43.19.90.17,1.39,0,0,.01.01.02.02.13,2.74-2.28,4.25-3.54,5.52-.75.76-1.43,1.73-1.67,3.07-.26,1.48.17,3.01.46,4.44.04.18.11.64.20.91.46,1.32,1.39,3.18,1.34,2.72-.36-3.46-.33-5.91,0-6.27.50-.92,1.23-1.59,1.88-2.17.91-.81,1.83-1.63,2.41-2.98.71-1.65.21-3.34-.39-4.84h-.01Z" style="fill:url(#${id3}); stroke-width:0px;"/></svg>`;
    },
    
    // Ribbon 6
    (color1, color2) => {
        const id1 = getUniqueId(), id2 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13.8 18.64"><defs><linearGradient id="${id1}" x1=".78" y1="12.67" x2="15.28" y2="7.71" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient><linearGradient id="${id2}" x1=".08" y1="6.71" x2="13.71" y2="7.49" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs><path d="M3.68,7.69c1.01-.91,2.18-1.46,3.31-1.95,1.17-.51,2.35-.89,3.54-1.26,1.09-.33,2.18-.63,3.27-.97l-1.14-3.52c-2.19.78-3.26.91-5.45,1.66-1.17.41-2.34.90-3.47,1.55-1.08.61-2.14,1.44-2.9,2.76C.12,7.2-.19,8.94.12,10.49c.23,1.11.7,2.14,1.14,3.08.36.8.75,1.57,1.27,2.16.76.86,1.74,1.25,2.66,1.56,1.26.44,2.52.82,3.78,1.31.03.01.07.03.10.04v-2.81s-.09-.04-.14-.06c-1.31-.56-2.64-1.06-3.98-1.50-1.05-.34-2.12-.61-3.09-1.29-.13-.09-.27-.19-.39-.32,0-.39.03-.79.10-1.17.27-1.68,1.15-2.94,2.12-3.81Z" style="fill:url(#${id1}); stroke-width:0px;"/><path d="M12.66,0c-2.19.78-3.26.92-5.45,1.68-1.17.41-2.34.90-3.47,1.55-1.08.61-2.14,1.44-2.9,2.76C.12,7.22-.19,8.96.12,10.5c.23,1.11.7,2.14,1.14,3.08.10.22.20.42.30.63-.02-.12-.05-.24-.08-.36-.11-.49-.10-1-.01-1.47.01-.30.05-.58.09-.87.27-1.68,1.15-2.94,2.12-3.81,1.01-.91,2.18-1.46,3.31-1.95,1.17-.51,2.35-.89,3.54-1.26,1.09-.33,2.18-.63,3.26-.97l-1.14-3.53Z" style="fill:url(#${id2}); stroke-width:0px;"/></svg>`;
    },
    
    // Ribbon 7
    (color1, color2) => {
        const id1 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.04 18.35"><defs><linearGradient id="${id1}" x1="11.25" y1="-7.23" x2="24.28" y2="-4.14" gradientTransform="translate(-13.89 8.69) rotate(-18.14) scale(1 -1)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs><path d="M6.18,2.02c-.29-.72-.58-1.40-.91-2.02,0,.07,0,.13.02.21.12.43.19.90.17,1.39,0,0,.01.01.02.02.13,2.74-2.28,4.25-3.54,5.52-.75.76-1.43,1.73-1.67,3.07-.26,1.48.17,3.01.46,4.44.04.18.11.64.20.91.46,1.32,1.39,3.18,1.34,2.72-.36-3.46-.33-5.91,0-6.27.50-.92,1.23-1.59,1.88-2.17.91-.81,1.83-1.63,2.41-2.98.71-1.65.21-3.34-.39-4.84h-.01Z" style="fill:url(#${id1}); stroke-width:0px;"/></svg>`;
    },
    
    // Ribbon 8
    (color1, color2) => {
        const id1 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.14 10.51"><defs><linearGradient id="${id1}" x1="46.76" y1="-33.66" x2="56.32" y2="-36.93" gradientTransform="translate(38.16 56.58) rotate(-90)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs><path d="M4.72,8.58c.58-1.17.46-2.53.25-3.74-.23-1.34-.72-2.67-1.12-3.99-.08-.25-.13-.51-.20-.76L0,.67c.05.26.21,1.62.27,1.88.74,3.21,2.48,4.65,1.96,7.94.07.01.14.01.22.02,1.01-.49,1.86-1.09,2.27-1.92Z" style="fill:url(#${id1}); stroke-width:0px;"/></svg>`;
    },
    
    // Ribbon 9
    (color1, color2) => {
        const id1 = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 5.76 8.08"><defs><linearGradient id="${id1}" x1="2.88" y1="8.05" x2="2.88" y2=".57" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset=".63" stop-color="${color2}"/></linearGradient></defs><path d="M5.16,8.08c.21.02-.62.28-1.78.27-1.95-.01-3.37-.27-3.37-.27,0,0,.6-2.41.6-4.06C.6,1.97,0,.16,0,.16c0,0,1.69-.16,3.54-.16.66,0,1.61.16,1.61.16,0,0,.6,1.4.6,3.96s-.6,3.96-.6,3.96Z" style="fill:url(#${id1}); stroke-width:0px;"/></svg>`;
    }
];

class ConfettiBackground {
    constructor(containerSelector, options = {}) {
        this.container = typeof containerSelector === 'string' 
            ? document.querySelector(containerSelector)
            : containerSelector;
        
        if (!this.container) {
            throw new Error(`ConfettiBackground: Container not found with selector "${containerSelector}"`);
        }
        
        this.options = {
            ribbons: options.ribbons || ribbonTemplates,
            count: options.count || 100,
            colors: options.colors || ['#E9D742', '#96CD61', '#2AAEDA', '#F5AA44', '#F2724C', '#EA3D82', '#EB3864', '#DC2F8E', '#CA2537', '#6955A2', '#A22B8D'],
            parallax: options.parallax !== undefined ? options.parallax : true,
            minSize: options.minSize || 50,  // Minimum confetti size in viewBox units
            maxSize: options.maxSize || 100, // Maximum confetti size in viewBox units
            // Weights for each ribbon shape (corresponds to ribbons array)
            // Higher weight = more likely to appear. Default: equal weights
            ribbonWeights: options.ribbonWeights || [1, 1, 1, 1, 1, 1, 1, 1, 1],
            ...options
        };

        // Calculate cumulative weights for weighted random selection
        this.cumulativeWeights = [];
        let sum = 0;
        for (const weight of this.options.ribbonWeights) {
            sum += weight;
            this.cumulativeWeights.push(sum);
        }
        this.totalWeight = sum;

        this.svg = null;
        this.confettiElements = [];
        this.init();
        
        if (this.options.parallax) {
            this.initParallax();
        }
    }

    init() {
        // Create SVG element
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '100%');
        this.svg.setAttribute('viewBox', '0 0 1000 1000');
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
        this.svg.style.position = 'absolute';
        this.svg.style.top = '0';
        this.svg.style.left = '0';
        this.svg.style.pointerEvents = 'none';

        // Add defs for gradients and filters
        this.createDefs();

        // Generate confetti pieces
        for (let i = 0; i < this.options.count; i++) {
            this.createConfetti();
        }

        this.container.appendChild(this.svg);
    }

    createDefs() {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

        // Create multiple filters with varying blur amounts for depth of field
        const blurLevels = [
            { id: 'confetti-blur-0', blur: 0, shadow: 1.5 },    // Far - slightly blurred
            { id: 'confetti-blur-1', blur: 0.5, shadow: 1.8 },  // Mid-far
            { id: 'confetti-blur-2', blur: 0, shadow: 2 },      // Focus plane - sharp
            { id: 'confetti-blur-3', blur: 1, shadow: 2 },      // Mid-near
            { id: 'confetti-blur-4', blur: 2.5, shadow: 2 }     // Near - more blurred
        ];

        blurLevels.forEach(level => {
            const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
            filter.setAttribute('id', level.id);
            filter.setAttribute('x', '-50%');
            filter.setAttribute('y', '-50%');
            filter.setAttribute('width', '200%');
            filter.setAttribute('height', '200%');

            // Shadow blur
            const feShadowBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
            feShadowBlur.setAttribute('in', 'SourceAlpha');
            feShadowBlur.setAttribute('stdDeviation', level.shadow);

            const feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset');
            feOffset.setAttribute('dx', '2');
            feOffset.setAttribute('dy', '2');
            feOffset.setAttribute('result', 'offsetblur');

            const feMerge1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
            const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
            const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
            feMergeNode2.setAttribute('in', 'SourceGraphic');

            feMerge1.appendChild(feMergeNode1);
            feMerge1.appendChild(feMergeNode2);

            filter.appendChild(feShadowBlur);
            filter.appendChild(feOffset);
            filter.appendChild(feMerge1);

            // Add depth of field blur if needed
            if (level.blur > 0) {
                const feDepthBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
                feDepthBlur.setAttribute('stdDeviation', level.blur);
                feDepthBlur.setAttribute('result', 'blurred');
                
                filter.appendChild(feDepthBlur);
            }

            defs.appendChild(filter);
        });

        this.svg.appendChild(defs);
    }

    createConfetti() {
        const colorIndex = Math.floor(Math.random() * this.options.colors.length);

        const x = Math.random() * 1000;
        const y = Math.random() * 1000;
        const rotation = Math.random() * 360;
        
        const depth = Math.random(); // 0-1, used for parallax speed, depth of field, and size
        
        // Calculate scale based on depth and min/max size options
        // Lower depth (far away) = minSize, Higher depth (close) = maxSize
        // Average ribbon size is approximately 20 units
        const baseRibbonSize = 20;
        const targetSize = this.options.minSize + (depth * (this.options.maxSize - this.options.minSize));
        const scale = targetSize / baseRibbonSize;

        const element = this.createRibbon(colorIndex);

        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('transform', `translate(${x}, ${y}) rotate(${rotation}) scale(${scale})`);
        
        // Apply depth-based blur filter
        // Map depth (0-1) to blur levels (0-4)
        // 0.0-0.2 = far (blur-0)
        // 0.2-0.4 = mid-far (blur-1)
        // 0.4-0.6 = focus (blur-2, sharp)
        // 0.6-0.8 = mid-near (blur-3)
        // 0.8-1.0 = near (blur-4)
        const blurLevel = Math.floor(depth * 5);
        g.setAttribute('filter', `url(#confetti-blur-${blurLevel})`);
        
        g.appendChild(element);

        this.svg.appendChild(g);

        // Store confetti data for parallax
        this.confettiElements.push({
            element: g,
            baseX: x,
            baseY: y,
            rotation: rotation,
            scale: scale,
            depth: depth,
            parallaxSpeed: 0.5 + depth * 1.5 // Speed multiplier (0.5 to 2.0)
        });
    }

    createRibbon(colorIndex) {
        // Pick a random ribbon template using weighted random selection
        const ribbonTemplate = this.getWeightedRibbon();
        
        // Get primary and secondary colors
        // Bias towards adjacent colors in the array for harmonious gradients
        const color1 = this.options.colors[colorIndex];
        const color2Index = this.getAdjacentColorIndex(colorIndex);
        const color2 = this.options.colors[color2Index];
        
        // Generate the SVG string with colors
        const svgString = ribbonTemplate(color1, color2);
        
        // Parse SVG string to DOM
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
        const svgElement = svgDoc.documentElement;
        
        // Convert to a group containing the SVG content
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        
        // Copy all children from the parsed SVG
        while (svgElement.firstChild) {
            g.appendChild(svgElement.firstChild);
        }
        
        return g;
    }

    getAdjacentColorIndex(currentIndex) {
        const colorCount = this.options.colors.length;
        const random = Math.random();
        
        // 70% chance: pick immediately adjacent color (next or previous)
        if (random < 0.7) {
            // 50/50 chance between next or previous
            const offset = Math.random() < 0.5 ? 1 : -1;
            return (currentIndex + offset + colorCount) % colorCount;
        }
        // 20% chance: pick color 2 positions away
        else if (random < 0.9) {
            const offset = Math.random() < 0.5 ? 2 : -2;
            return (currentIndex + offset + colorCount) % colorCount;
        }
        // 10% chance: pick any random color
        else {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * colorCount);
            } while (randomIndex === currentIndex);
            return randomIndex;
        }
    }

    getWeightedRibbon() {
        // Weighted random selection using cumulative weights
        const random = Math.random() * this.totalWeight;
        
        for (let i = 0; i < this.cumulativeWeights.length; i++) {
            if (random < this.cumulativeWeights[i]) {
                return this.options.ribbons[i];
            }
        }
        
        // Fallback (should never reach here)
        return this.options.ribbons[this.options.ribbons.length - 1];
    }


    initParallax() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateParallax() {
        const scrollY = window.scrollY;
        
        this.confettiElements.forEach(confetti => {
            const offset = scrollY * confetti.parallaxSpeed * 0.3; // 0.3 is the overall parallax intensity
            const newY = confetti.baseY + offset;
            
            confetti.element.setAttribute(
                'transform',
                `translate(${confetti.baseX}, ${newY}) rotate(${confetti.rotation}) scale(${confetti.scale})`
            );
        });
    }

    regenerate() {
        this.svg.innerHTML = '';
        this.confettiElements = [];
        this.createDefs();
        for (let i = 0; i < this.options.count; i++) {
            this.createConfetti();
        }
    }

    static help() {
        console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║                    🎉 CONFETTI BACKGROUND HELP 🎉                          ║
╚═══════════════════════════════════════════════════════════════════════════╝

USAGE:
  const confetti = new ConfettiBackground(selector, options);
  // selector can be any CSS selector: '#id', '.class', '[data-attr]', etc.
  // Or pass a DOM element directly

AVAILABLE OPTIONS:
┌───────────────────────────────────────────────────────────────────────────┐
│ ribbons          │ Array of ribbon template functions                     │
│                  │ Default: ribbonTemplates (9 built-in ribbon shapes)    │
│                  │                                                         │
│ count            │ Number of confetti pieces to generate                  │
│                  │ Default: 100                                            │
│                  │                                                         │
│ colors           │ Array of color hex codes for gradients                 │
│                  │ Default: ['#E9D742', '#96CD61', '#2AAEDA', ...]        │
│                  │ Note: Gradients favor adjacent colors in the array     │
│                  │                                                         │
│ parallax         │ Enable/disable parallax scrolling effect               │
│                  │ Default: true                                           │
│                  │                                                         │
│ minSize          │ Minimum confetti size in viewBox units                 │
│                  │ Default: 50                                             │
│                  │                                                         │
│ maxSize          │ Maximum confetti size in viewBox units                 │
│                  │ Default: 100                                            │
│                  │                                                         │
│ ribbonWeights    │ Array of weights for each ribbon shape                 │
│                  │ Higher weight = more likely to appear                  │
│                  │ Default: [1, 1, 1, 1, 1, 1, 1, 1, 1] (equal weights)   │
└───────────────────────────────────────────────────────────────────────────┘

RIBBON SHAPES (0-8):
  0: Complex twisted ribbon (large)
  1: Curved flowing ribbon (medium)
  2: Multi-curve ribbon (medium)
  3: Spiral twisted ribbon (medium)
  4: Angular flowing ribbon (large)
  5: Short curved ribbon (small)
  6: Thin twisted ribbon (small)
  7: Minimal curved ribbon (tiny)
  8: Simple rectangular ribbon (tiny)

EXAMPLES:

  // Basic usage with ID selector
  new ConfettiBackground('#container');

  // Using class selector
  new ConfettiBackground('.background-wrapper');

  // Using data attribute
  new ConfettiBackground('[data-confetti]');

  // Pass DOM element directly
  const element = document.getElementById('container');
  new ConfettiBackground(element);

  // Custom colors and count
  // Tip: Arrange colors in a harmonious sequence for best gradient results
  new ConfettiBackground('#container', {
    count: 200,
    colors: ['#FF0000', '#FF6600', '#FFCC00', '#00FF00', '#0000FF']
  });

  // Favor simpler shapes (ribbons 7-8)
  new ConfettiBackground('#container', {
    ribbonWeights: [1, 1, 1, 1, 1, 1, 1, 5, 5]
  });

  // Larger size range
  new ConfettiBackground('#container', {
    minSize: 30,
    maxSize: 200
  });

  // Disable parallax
  new ConfettiBackground('#container', {
    parallax: false
  });

  // Only use specific ribbons
  new ConfettiBackground('#container', {
    ribbonWeights: [1, 0, 1, 0, 1, 0, 0, 0, 0]  // Only ribbons 0, 2, 4
  });

METHODS:

  confetti.regenerate()  // Regenerate all confetti pieces

FEATURES:
  ✨ Depth of field blur effect
  ✨ Parallax scrolling
  ✨ Harmonious color gradients (adjacent colors favored)
  ✨ Weighted random ribbon selection
  ✨ Depth-based sizing
  ✨ 3D shadow effects

For more info: https://github.com/your-repo
        `);
    }
}

// Example usage
// new ConfettiBackground('#container', { count: 150 });
// new ConfettiBackground('.my-background');
// new ConfettiBackground('[data-confetti]');
// ConfettiBackground.help(); // Show help in console
