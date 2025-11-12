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

const snowflakeTemplates = [
    (color1, color2) => {
        const gradientId = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.61 96.1"><defs><linearGradient id="${gradientId}" x1="0" y1="0" x2="83.61" y2="96.1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs><path d="M12.29,33.01l-8.04,2.16c-.77.21-1.57-.25-1.78-1.02L.05,25.12c-.21-.77.25-1.57,1.02-1.78l9.02-2.42c.77-.21,1.57.25,1.78,1.02l2.16,8.04,3.48,2.01-1.75-5.11c-.31-.91.17-1.9,1.08-2.21.91-.31,1.9.17,2.21,1.08l3.04,8.88,4.46,2.57-4.61-13.47c-.31-.91.17-1.9,1.08-2.21.91-.31,1.9.17,2.21,1.08l5.9,17.24,2.63,1.52-2.88-8.86c-.02-.05-.03-.11-.05-.16-.07-.29-.06-.58.01-.85.07-.27.21-.53.42-.75.11-.12.25-.23.39-.31.15-.09.3-.15.47-.19.29-.07.58-.06.85.01.27.07.53.21.75.42.04.04.08.08.12.12l6.24,6.92v-3.03l-11.98-13.73c-.63-.72-.56-1.82.17-2.45.72-.63,1.82-.56,2.45.17l9.36,10.72v-5.15l-6.17-7.07c-.63-.72-.56-1.82.17-2.45s1.82-.56,2.45.17l3.55,4.07v-4.02l-5.89-5.89c-.57-.57-.57-1.48,0-2.05L40.78.42c.57-.57,1.48-.57,2.05,0l6.6,6.6c.57.57.57,1.48,0,2.05l-5.89,5.89v4.02l3.55-4.07c.63-.72,1.73-.8,2.45-.17.72.63.8,1.73.17,2.45l-6.17,7.07v5.15l9.36-10.72c.63-.72,1.73-.8,2.45-.17.72.63.8,1.73.17,2.45l-11.98,13.73v3.03l6.24-6.92s.08-.08.12-.12c.22-.2.47-.34.75-.42.27-.07.56-.08.85-.01.16.04.32.1.47.19.15.09.28.19.39.31.2.22.34.47.42.75.07.27.08.56.01.85-.01.05-.03.11-.05.16l-2.88,8.86,2.63-1.52,5.9-17.24c.31-.91,1.3-1.39,2.21-1.08.91.31,1.39,1.3,1.08,2.21l-4.61,13.47,4.46-2.57,3.04-8.88c.31-.91,1.3-1.39,2.21-1.08.91.31,1.39,1.3,1.08,2.21l-1.75,5.11,3.48-2.01,2.16-8.04c.21-.77,1-1.23,1.78-1.02l9.02,2.42c.77.21,1.23,1,1.02,1.78l-2.42,9.02c-.21.77-1,1.23-1.78,1.02l-8.04-2.16-3.48,2.01,5.3,1.04c.94.19,1.56,1.1,1.37,2.04-.19.94-1.1,1.56-2.04,1.37l-9.21-1.81-4.46,2.57,13.97,2.74c.94.19,1.56,1.1,1.37,2.04-.19.94-1.1,1.56-2.04,1.37l-17.88-3.51-2.63,1.52,9.11,1.94c.06.01.11.02.16.04.29.08.53.24.73.44.2.2.35.45.44.73.05.16.07.33.07.5,0,.17-.03.34-.07.5-.08.29-.24.53-.44.73-.2.2-.45.35-.73.44-.05.02-.11.03-.16.04l-9.11,1.94,2.63,1.52,17.88-3.51c.94-.19,1.86.43,2.04,1.37.19.94-.43,1.86-1.37,2.04l-13.97,2.74,4.46,2.57,9.21-1.81c.94-.19,1.86.43,2.04,1.37.19.94-.43,1.86-1.37,2.04l-5.3,1.04,3.48,2.01,8.04-2.16c.77-.21,1.57.25,1.78,1.02l2.42,9.02c.21.77-.25,1.57-1.02,1.78l-9.02,2.42c-.77.21-1.57-.25-1.78-1.02l-2.16-8.04-3.48-2.01,1.75,5.11c.31.91-.17,1.9-1.08,2.21-.91.31-1.9-.17-2.21-1.08l-3.04-8.88-4.46-2.57,4.61,13.47c.31.91-.17,1.9-1.08,2.21-.91.31-1.9-.17-2.21-1.08l-5.9-17.24-2.63-1.52,2.88,8.86c.02.05.03.11.05.16.07.29.06.58-.01.85-.07.27-.21.53-.42.75-.11.12-.25.23-.39.31-.15.09-.3.15-.47.19-.29.07-.58.06-.85-.01-.27-.07-.53-.21-.75-.42-.04-.04-.08-.08-.12-.12l-6.24-6.92v3.03l11.98,13.73c.63.72.56,1.82-.17,2.45-.72.63-1.82.56-2.45-.17l-9.36-10.72v5.15l6.17,7.07c.63.72.56,1.82-.17,2.45-.72.63-1.82.56-2.45-.17l-3.55-4.07v4.02l5.89,5.89c.57.57.57,1.48,0,2.05l-6.6,6.6c-.57.57-1.48.57-2.05,0l-6.6-6.6c-.57-.57-.57-1.48,0-2.05l5.89-5.89v-4.02l-3.55,4.07c-.63.72-1.73.8-2.45.17-.72-.63-.8-1.73-.17-2.45l6.17-7.07v-5.15l-9.36,10.72c-.63.72-1.73.8-2.45.17-.72-.63-.8-1.73-.17-2.45l11.98-13.73v-3.03l-6.24,6.92s-.08.08-.12.12c-.22.2-.47.34-.75.42-.27.07-.56.08-.85.01-.16-.04-.32-.1-.47-.19-.15-.09-.28-.19-.39-.31-.2-.22-.34-.47-.42-.75-.07-.27-.08-.56-.01-.85.01-.05.03-.11.05-.16l2.88-8.86-2.63,1.52-5.9,17.24c-.31.91-1.3,1.39-2.21,1.08-.91-.31-1.39-1.3-1.08-2.21l4.61-13.47-4.46,2.57-3.04,8.88c-.31.91-1.3,1.39-2.21,1.08-.91-.31-1.39-1.3-1.08-2.21l1.75-5.11-3.48,2.01-2.16,8.04c-.21.77-1,1.23-1.78,1.02l-9.02-2.42c-.77-.21-1.23-1-1.02-1.78l2.42-9.02c.21-.77,1-1.23,1.78-1.02l8.04,2.16,3.48-2.01-5.3-1.04c-.94-.19-1.56-1.1-1.37-2.04.19-.94,1.1-1.56,2.04-1.37l9.21,1.81,4.46-2.57-13.97-2.74c-.94-.19-1.56-1.1-1.37-2.04.19-.94,1.1-1.56,2.04-1.37l17.88,3.51,2.63-1.52-9.11-1.94c-.06-.01-.11-.02-.16-.04-.29-.08-.53-.24-.73-.44-.2-.2-.35-.45-.44-.73-.05-.16-.07-.33-.07-.5,0-.17.03-.34.07-.5.08-.29.24-.53.44-.73.2-.2.45-.35.73-.44.05-.02.11-.03.16-.04l9.11-1.94-2.63-1.52-17.88,3.51c-.94.19-1.86-.43-2.04-1.37-.19-.94.43-1.86,1.37-2.04l13.97-2.74-4.46-2.57-9.21,1.81c-.94.19-1.86-.43-2.04-1.37-.19-.94.43-1.86,1.37-2.04l5.3-1.04-3.48-2.01Z" style="fill:url(#${gradientId}); fill-rule:evenodd; stroke-width:0px;"/></svg>`;
    },
    (color1, color2) => {
        const gradientId = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.12 92.02"><defs><linearGradient id="${gradientId}" x1="0" y1="0" x2="80.12" y2="92.02" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs><path d="M5.15,64.74l-4.28-1.74c-.71-.29-1.05-1.1-.76-1.81.29-.71,1.1-1.05,1.81-.76l5.91,2.41c.09.04.17.08.24.13l2.54-1.55-8.03-3.27c-.71-.29-1.05-1.1-.76-1.81.29-.71,1.1-1.05,1.81-.76l9.85,4.01s.06.02.08.04l3.38-2.06-12.47-5.07c-.71-.29-1.05-1.1-.76-1.81.29-.71,1.1-1.05,1.81-.76l14.37,5.85,3.18-1.94-15.92-6.48c-.71-.29-1.05-1.1-.76-1.81.07-.17.17-.32.29-.45.1-.41.4-.78.82-.95l15.11-6.15-3.18-1.94-13.56,5.52c-.71.29-1.52-.05-1.81-.76-.29-.71.05-1.52.76-1.81l11.66-4.74-3.38-2.06-9.12,3.71c-.71.29-1.52-.05-1.81-.76-.29-.71.05-1.52.76-1.81l7.22-2.94-2.51-1.54-5.37,2.19c-.71.29-1.52-.05-1.81-.76-.29-.71.05-1.52.76-1.81l3.47-1.41-4.07-2.49c-.53-.31-.71-.98-.41-1.51.31-.53.98-.71,1.51-.41l4.66,2.54-.63-4.58c-.1-.76.43-1.46,1.19-1.57.76-.1,1.46.43,1.57,1.19l.87,6.32c.01.09.02.19.01.28l2.62,1.43-1.19-8.59c-.1-.76.43-1.46,1.19-1.57.76-.1,1.46.43,1.57,1.19l1.45,10.53s0,.06,0,.09l3.48,1.89-1.84-13.34c-.1-.76.43-1.46,1.19-1.57.76-.1,1.46.43,1.57,1.19l2.12,15.37,3.27,1.78-2.35-17.03c-.1-.76.43-1.46,1.19-1.57.18-.03.36-.01.53.03.41-.12.87-.04,1.23.24l12.88,10.01.09-3.72-11.56-8.98c-.61-.47-.72-1.35-.24-1.95.47-.61,1.35-.72,1.95-.24l9.94,7.72.1-3.95-7.78-6.04c-.61-.47-.72-1.35-.24-1.95.47-.61,1.35-.72,1.95-.24l6.16,4.78.07-2.95-4.58-3.56c-.61-.47-.72-1.35-.24-1.95.47-.61,1.35-.72,1.95-.24l2.96,2.3.12-4.77c0-.61.5-1.11,1.11-1.11s1.11.5,1.11,1.11l.13,5.31,3.65-2.84c.61-.47,1.48-.36,1.95.24.47.61.36,1.48-.24,1.95l-5.04,3.92c-.07.06-.15.11-.23.15l.07,2.98,6.85-5.32c.61-.47,1.48-.36,1.95.24.47.61.36,1.48-.24,1.95l-8.4,6.52s-.05.04-.07.05l.1,3.96,10.63-8.26c.61-.47,1.48-.36,1.95.24.47.61.36,1.48-.24,1.95l-12.25,9.52.09,3.72,13.57-10.55c.61-.47,1.48-.36,1.95.24.11.15.19.31.24.48.31.3.47.73.41,1.19l-2.23,16.16,3.27-1.78,2-14.5c.1-.76.81-1.29,1.57-1.19.76.1,1.29.81,1.19,1.57l-1.72,12.47,3.47-1.89,1.35-9.76c.1-.76.81-1.29,1.57-1.19.76.1,1.29.81,1.19,1.57l-1.07,7.72,2.59-1.41.79-5.75c.1-.76.81-1.29,1.57-1.19.76.1,1.29.81,1.19,1.57l-.51,3.71,4.19-2.28c.53-.31,1.21-.12,1.51.41.31.53.12,1.21-.41,1.51l-4.53,2.77,4.28,1.74c.71.29,1.05,1.1.76,1.81-.29.71-1.1,1.05-1.81.76l-5.91-2.41c-.09-.04-.17-.08-.24-.13l-2.54,1.55,8.03,3.27c.71.29,1.05,1.1.76,1.81-.29.71-1.1,1.05-1.81.76l-9.85-4.01s-.06-.02-.08-.04l-3.38,2.06,12.47,5.07c.71.29,1.05,1.1.76,1.81-.29.71-1.1,1.05-1.81.76l-14.37-5.85-3.18,1.94,15.92,6.48c.71.29,1.05,1.1.76,1.81-.07.17-.17.32-.29.45-.1.41-.4.78-.82.95l-15.11,6.15,3.18,1.94,13.56-5.52c.71-.29,1.52.05,1.81.76.29.71-.05,1.52-.76,1.81l-11.66,4.74,3.38,2.06,9.12-3.71c.71-.29,1.52.05,1.81.76.29.71-.05,1.52-.76,1.81l-7.22,2.94,2.51,1.54,5.37-2.19c.71-.29,1.52.05,1.81.76.29.71-.05,1.52-.76,1.81l-3.47,1.41,4.07,2.49c.53.31.71.98.41,1.51-.31.53-.98.71-1.51.41l-4.66-2.54.63,4.58c.1.76-.43,1.46-1.19,1.57-.76.1-1.46-.43-1.57-1.19l-.87-6.32c-.01-.09-.02-.19-.01-.28l-2.62-1.43,1.19,8.59c.1.76-.43,1.46-1.19,1.57-.76.1-1.46-.43-1.57-1.19l-1.45-10.53s0-.06,0-.09l-3.48-1.89,1.84,13.34c.1.76-.43,1.46-1.19,1.57-.76.1-1.46-.43-1.57-1.19l-2.12-15.37-3.27-1.78,2.35,17.03c.1.76-.43,1.46-1.19,1.57-.18.03-.36.01-.53-.03-.41.12-.87.04-1.23-.24l-12.88-10.01-.09,3.72,11.56,8.98c.61.47.72,1.34.24,1.95-.47.61-1.35.72-1.95.24l-9.94-7.72-.1,3.95,7.78,6.04c.61.47.72,1.35.24,1.95-.47.61-1.35.72-1.95.24l-6.16-4.78-.07,2.95,4.58,3.56c.61.47.72,1.35.24,1.95-.47.61-1.35.72-1.95.24l-2.96-2.3-.12,4.77c0,.61-.5,1.11-1.11,1.11s-1.11-.5-1.11-1.11l-.13-5.31-3.65,2.84c-.61.47-1.48.36-1.95-.24-.47-.61-.36-1.48.24-1.95l5.04-3.92c.07-.06.15-.11.23-.15l-.07-2.98-6.85,5.32c-.61.47-1.48.36-1.95-.24-.47-.61-.36-1.48.24-1.95l8.4-6.52s.05-.04.07-.05l-.1-3.96-10.63,8.26c-.61.47-1.48.36-1.95-.24s-.36-1.48.24-1.95l12.25-9.52-.09-3.72-13.57,10.55c-.61.47-1.48.36-1.95-.24-.11-.15-.19-.31-.24-.48-.31-.3-.47-.73-.41-1.19l2.23-16.16-3.27,1.78-2,14.5c-.1.76-.81,1.29-1.57,1.19-.76-.1-1.29-.81-1.19-1.57l1.72-12.47-3.47,1.89-1.35,9.76c-.1.76-.81,1.29-1.57,1.19-.76-.1-1.29-.81-1.19-1.57l1.07-7.72-2.59,1.41-.79,5.75c-.1.76-.81,1.29-1.57,1.19-.76-.1-1.29-.81-1.19-1.57l.51-3.71-4.19,2.28c-.53.31-1.21.12-1.51-.41-.31-.53-.12-1.21.41-1.51l4.53-2.77ZM10.76,45.78l15.26,6.21,6.41-3.92-10.78-.7c-.68,0-1.23-.54-1.24-1.22,0-.68.54-1.23,1.22-1.24l10.95-.86-7.02-4.29-14.8,6.02ZM25.61,20.52l2.25,16.32,6.6,3.59-4.79-9.69c-.34-.59-.15-1.34.44-1.68.59-.34,1.34-.15,1.68.44l6.23,9.05.2-8.23-12.61-9.8ZM54.91,20.75l-13,10.11.19,7.51,6-8.99c.34-.59,1.09-.8,1.68-.46.59.34.8,1.09.46,1.68l-4.73,9.92,7.23-3.94,2.18-15.82ZM69.36,46.25l-15.26-6.21-6.41,3.92,10.78.7c.68,0,1.23.54,1.24,1.22,0,.68-.54,1.23-1.22,1.24l-10.95.86,7.02,4.29,14.8-6.02ZM54.51,71.5l-2.25-16.32-6.6-3.59,4.79,9.69c.34.59.15,1.34-.44,1.68-.59.34-1.34.15-1.68-.44l-6.23-9.05-.2,8.23,12.61,9.8ZM25.21,71.27l13-10.11-.19-7.51-6,8.99c-.34.59-1.09.8-1.68.46-.59-.34-.8-1.09-.46-1.68l4.73-9.92-7.23,3.94-2.18,15.82Z" style="fill:url(#${gradientId}); fill-rule:evenodd; stroke-width:0px;"/></svg>`;
    },
    (color1, color2) => {
        const gradientId = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><defs><radialGradient id="${gradientId}" cx="11" cy="11" r="11" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></radialGradient></defs><circle cx="11" cy="11" r="11" style="fill:url(#${gradientId}); stroke-width:0px;"/></svg>`;
    },
    (color1, color2) => {
        const gradientId = getUniqueId();
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 54"><defs><linearGradient id="${gradientId}" x1="0" y1="0" x2="65" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${color1}"/><stop offset="1" stop-color="${color2}"/></linearGradient></defs><path d="M65,26c0,14.91-23.09,28-38,28S0,41.91,0,27,12.09,0,27,0s38,11.09,38,26Z" style="fill:url(#${gradientId}); fill-rule:evenodd; stroke-width:0px;"/></svg>`;
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
        
        const useSnowflakes = !!options.useSnowflakes;
        const resolvedRibbons = options.ribbons || (useSnowflakes ? snowflakeTemplates : ribbonTemplates);
        const resolvedWeights = options.ribbonWeights || new Array(resolvedRibbons.length).fill(1);

        this.options = {
            ...options,
            ribbons: resolvedRibbons,
            ribbonWeights: resolvedWeights,
            useSnowflakes,
            count: options.count || 100,
            colors: options.colors || ['#E9D742', '#96CD61', '#2AAEDA', '#F5AA44', '#F2724C', '#EA3D82', '#EB3864', '#DC2F8E', '#CA2537', '#6955A2', '#A22B8D'],
            parallax: options.parallax !== undefined ? options.parallax : true,
            minSize: options.minSize || 25,  // Minimum confetti size in viewBox units
            maxSize: options.maxSize || 75, // Maximum confetti size in viewBox units
            gravity: options.gravity ?? 0, // Optional gravity (true uses default strength)
            wind: options.wind ?? 0, // Optional wind drift (true uses default strength)
            clipToBounds: options.clipToBounds !== false, // Clip confetti to container bounds
            shadowColor: options.shadowColor || 'rgba(0, 0, 0, 0.35)',
            blurMultiplier: options.blurMultiplier !== undefined ? Math.max(0, options.blurMultiplier) : 1
        };

        // Calculate cumulative weights for weighted random selection
        this.cumulativeWeights = [];
        let sum = 0;
        for (const weight of this.options.ribbonWeights) {
            sum += weight;
            this.cumulativeWeights.push(sum);
        }
        this.totalWeight = sum;

        this.svgLayer = null;
        this.svg = null;
        this.confettiElements = [];
        // Runtime state for optional gravity / wind animation
        this.motionAnimationFrame = null;
        this.lastMotionUpdate = null;
        this.gravityStrength = this.normalizeGravity(this.options.gravity);
        this.windStrength = this.normalizeWind(this.options.wind);
        this.shadowColor = this.parseShadowColor(this.options.shadowColor);
        this.recalculateWeights();
        this.init();
        
        if (this.options.parallax) {
            this.initParallax();
        }

        if (this.gravityStrength || this.windStrength) {
            this.initMotion();
        }
    }

    recalculateWeights() {
        this.cumulativeWeights = [];
        let sum = 0;
        const weights = this.options.ribbonWeights;

        if (!weights || !weights.length) {
            this.options.ribbonWeights = new Array(this.options.ribbons.length).fill(1);
        }

        for (let i = 0; i < this.options.ribbons.length; i++) {
            const weight = this.options.ribbonWeights[i] ?? 1;
            sum += weight;
            this.cumulativeWeights.push(sum);
        }
        this.totalWeight = sum || 1;
    }

    init() {
        if (this.options.clipToBounds && typeof window !== 'undefined') {
            const computed = window.getComputedStyle(this.container);

            if (computed.position === 'static') {
                this.container.style.position = 'relative';
            }

            if (computed.overflow === 'visible') {
                this.container.style.overflow = 'hidden';
            }
        }

        // Remove any previous confetti layer injected by this instance
        Array.from(this.container.children).forEach(child => {
            if (child.classList && child.classList.contains('confetti-background-layer')) {
                this.container.removeChild(child);
            }
        });

        // Create SVG layer container
        this.svgLayer = document.createElement('div');
        this.svgLayer.className = 'confetti-background-layer';
        this.svgLayer.style.position = 'absolute';
        this.svgLayer.style.top = '0';
        this.svgLayer.style.left = '0';
        this.svgLayer.style.width = '100%';
        this.svgLayer.style.height = '100%';
        this.svgLayer.style.pointerEvents = 'none';
        this.svgLayer.style.zIndex = (this.options.layerZIndex ?? 0).toString();

        // Create SVG element
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '100%');
        this.svg.setAttribute('viewBox', '0 0 1000 1000');
        this.svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

        // Add defs for gradients and filters
        this.createDefs();

        // Generate confetti pieces
        for (let i = 0; i < this.options.count; i++) {
            this.createConfetti();
        }

        this.svgLayer.appendChild(this.svg);

        if (this.container.firstChild) {
            this.container.insertBefore(this.svgLayer, this.container.firstChild);
        } else {
            this.container.appendChild(this.svgLayer);
        }
    }

    createDefs() {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');

        // Create multiple filters with varying blur amounts for depth of field
        const zeroBlurBase = this.options.useSnowflakes ? this.options.blurMultiplier : 0;
        const baseBlurLevels = [
            { id: 'confetti-blur-0', blur: zeroBlurBase, shadow: 1.5 }, // Far
            { id: 'confetti-blur-1', blur: 0.5, shadow: 1.8 },
            { id: 'confetti-blur-2', blur: zeroBlurBase, shadow: 2 },   // Focus plane
            { id: 'confetti-blur-3', blur: 1, shadow: 2 },
            { id: 'confetti-blur-4', blur: 2.5, shadow: 2 }
        ];

        baseBlurLevels.forEach(level => {
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
            feShadowBlur.setAttribute('result', 'shadowBlur');

            const feOffset = document.createElementNS('http://www.w3.org/2000/svg', 'feOffset');
            feOffset.setAttribute('in', 'shadowBlur');
            feOffset.setAttribute('dx', '2');
            feOffset.setAttribute('dy', '2');
            feOffset.setAttribute('result', 'offsetBlur');

            const feFlood = document.createElementNS('http://www.w3.org/2000/svg', 'feFlood');
            feFlood.setAttribute('flood-color', this.shadowColor.color);
            feFlood.setAttribute('flood-opacity', this.shadowColor.opacity);
            feFlood.setAttribute('result', 'shadowColor');

            const feComposite = document.createElementNS('http://www.w3.org/2000/svg', 'feComposite');
            feComposite.setAttribute('in', 'shadowColor');
            feComposite.setAttribute('in2', 'offsetBlur');
            feComposite.setAttribute('operator', 'in');
            feComposite.setAttribute('result', 'shadow');

            const feMerge1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
            const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
            const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
            feMergeNode1.setAttribute('in', 'shadow');
            feMergeNode2.setAttribute('in', 'SourceGraphic');

            feMerge1.appendChild(feMergeNode1);
            feMerge1.appendChild(feMergeNode2);

            filter.appendChild(feShadowBlur);
            filter.appendChild(feOffset);
            filter.appendChild(feFlood);
            filter.appendChild(feComposite);
            filter.appendChild(feMerge1);

            // Add depth of field blur if needed
            const depthBlurValue = level.blur * this.options.blurMultiplier;
            if (depthBlurValue > 0) {
                const feDepthBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
                feDepthBlur.setAttribute('stdDeviation', depthBlurValue);
                feDepthBlur.setAttribute('in', 'SourceGraphic');
                feDepthBlur.setAttribute('result', 'blurredGraphic');

                const feMergeFinal = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
                const feMergeFinalNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
                const feMergeFinalNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
                feMergeFinalNode1.setAttribute('in', 'shadow');
                feMergeFinalNode2.setAttribute('in', 'blurredGraphic');

                filter.appendChild(feDepthBlur);
                feMergeFinal.appendChild(feMergeFinalNode1);
                feMergeFinal.appendChild(feMergeFinalNode2);
                filter.appendChild(feMergeFinal);
            } else {
                filter.appendChild(feMerge1);
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

        // Store confetti data for parallax, gravity, and animation state
        const confettiData = {
            element: g,
            baseX: x,
            baseY: y,
            rotation: rotation,
            scale: scale,
            depth: depth,
            parallaxSpeed: 0.5 + depth * 1.5, // Speed multiplier (0.5 to 2.0)
            parallaxOffset: 0,
            gravityOffset: 0,
            gravityVelocity: 0,
            windOffset: 0,
            windVelocity: 0,
            rotationVelocity: 0
        };

        this.confettiElements.push(confettiData);
        this.updateConfettiTransform(confettiData);
    }

    updateConfettiTransform(confetti) {
        // Compose the vertical position from base, parallax scroll, and gravity offsets
        const translateX = confetti.baseX + (confetti.windOffset || 0);
        const translateY = confetti.baseY + (confetti.parallaxOffset || 0) + (confetti.gravityOffset || 0);
        confetti.element.setAttribute(
            'transform',
            `translate(${translateX}, ${translateY}) rotate(${confetti.rotation}) scale(${confetti.scale})`
        );
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
            confetti.parallaxOffset = offset;
            this.updateConfettiTransform(confetti);
        });
    }

    regenerate() {
        if (this.motionAnimationFrame) {
            cancelAnimationFrame(this.motionAnimationFrame);
            this.motionAnimationFrame = null;
        }

        this.svg.innerHTML = '';
        this.confettiElements = [];
        this.shadowColor = this.parseShadowColor(this.options.shadowColor);
        this.recalculateWeights();
        this.createDefs();
        for (let i = 0; i < this.options.count; i++) {
            this.createConfetti();
        }

        if (this.options.parallax) {
            this.updateParallax();
        } else {
            this.confettiElements.forEach(confetti => this.updateConfettiTransform(confetti));
        }

        // Re-initialize forces so new particles respect the latest settings
        this.gravityStrength = this.normalizeGravity(this.options.gravity);
        this.windStrength = this.normalizeWind(this.options.wind);
        if (this.gravityStrength || this.windStrength) {
            this.initMotion();
        }
    }

    initMotion() {
        // Normalize in case options changed after instantiation
        this.gravityStrength = this.normalizeGravity(this.options.gravity);
        this.windStrength = this.normalizeWind(this.options.wind);

        if (!this.gravityStrength && !this.windStrength) {
            return;
        }

        if (this.motionAnimationFrame) {
            cancelAnimationFrame(this.motionAnimationFrame);
            this.motionAnimationFrame = null;
        }

        this.lastMotionUpdate = null;

        const rotationBase = Math.max(this.gravityStrength, Math.abs(this.windStrength));

        this.confettiElements.forEach(confetti => {
            // Preserve current offsets so motion can resume gracefully
            confetti.gravityOffset = confetti.gravityOffset || 0;
            confetti.windOffset = confetti.windOffset || 0;
            confetti.gravityVelocity = this.gravityStrength ? this.getConfettiGravityVelocity(confetti) : 0;
            confetti.windVelocity = this.windStrength ? this.getConfettiWindVelocity(confetti) : 0;

            // Add a subtle spin to sell the motion (scaled by strongest force)
            confetti.rotationVelocity = rotationBase > 0
                ? (Math.random() - 0.5) * 40 * (rotationBase / 60)
                : 0;
        });

        const animate = (timestamp) => {
            if (!this.lastMotionUpdate) {
                this.lastMotionUpdate = timestamp;
            }

            const deltaSeconds = (timestamp - this.lastMotionUpdate) / 1000;
            this.lastMotionUpdate = timestamp;

            this.confettiElements.forEach(confetti => {
                // Apply velocity over elapsed time for smooth motion
                if (this.gravityStrength) {
                    confetti.gravityOffset += confetti.gravityVelocity * deltaSeconds;
                }

                if (this.windStrength) {
                    confetti.windOffset += confetti.windVelocity * deltaSeconds;
                }

                confetti.rotation = (confetti.rotation + confetti.rotationVelocity * deltaSeconds) % 360;
                if (confetti.rotation < 0) {
                    confetti.rotation += 360;
                }

                const visibleY = confetti.baseY + (confetti.parallaxOffset || 0) + confetti.gravityOffset;
                const visibleX = confetti.baseX + confetti.windOffset;

                let reset = false;

                if (this.gravityStrength && visibleY > 1100) {
                    // Recycle pieces back to the top when they leave the viewport vertically
                    confetti.baseY = -50 - Math.random() * 200;
                    confetti.baseX = Math.random() * 1000;
                    confetti.gravityOffset = 0;
                    confetti.windOffset = 0;
                    confetti.gravityVelocity = this.gravityStrength ? this.getConfettiGravityVelocity(confetti) : 0;
                    confetti.windVelocity = this.windStrength ? this.getConfettiWindVelocity(confetti) : 0;
                    confetti.rotation = Math.random() * 360;
                    reset = true;
                }

                if (!reset && this.windStrength) {
                    const windDirection = Math.sign(this.windStrength) || 1;
                    if (windDirection > 0 && visibleX > 1150) {
                        // Re-enter from the left when drifting right
                        confetti.baseX = -150 - Math.random() * 150;
                        confetti.windOffset = 0;
                        confetti.windVelocity = this.getConfettiWindVelocity(confetti);
                        reset = true;
                    } else if (windDirection < 0 && visibleX < -150) {
                        // Re-enter from the right when drifting left
                        confetti.baseX = 1150 + Math.random() * 150;
                        confetti.windOffset = 0;
                        confetti.windVelocity = this.getConfettiWindVelocity(confetti);
                        reset = true;
                    }
                }

                if (reset) {
                    const rotationInfluence = Math.max(this.gravityStrength, Math.abs(this.windStrength));
                    confetti.rotationVelocity = rotationInfluence > 0
                        ? (Math.random() - 0.5) * 40 * (rotationInfluence / 60)
                        : 0;
                }

                this.updateConfettiTransform(confetti);
            });

            this.motionAnimationFrame = requestAnimationFrame(animate);
        };

        this.motionAnimationFrame = requestAnimationFrame(animate);
    }

    getConfettiGravityVelocity(confetti) {
        // Nearer pieces fall faster to maintain the depth illusion
        const depthInfluence = 0.4 + confetti.depth * 1.6; // 0.4 (far) -> 2.0 (near)
        return this.gravityStrength * depthInfluence;
    }

    getConfettiWindVelocity(confetti) {
        // Smaller (farther) pieces drift more dramatically; keep consistent direction with wind strength
        const magnitude = Math.abs(this.windStrength);
        if (!magnitude) {
            return 0;
        }

        const depthInfluence = 0.6 + (1 - confetti.depth) * 1.6; // 2.2 (far) -> 0.6 (near)
        const variation = 0.7 + Math.random() * 0.6; // mild per-piece variance, preserves direction
        const direction = Math.sign(this.windStrength) || 1;

        return direction * magnitude * depthInfluence * variation;
    }

    clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    parseShadowColor(value) {
        const fallback = { color: '#000000', opacity: 0.35 };

        if (typeof value !== 'string') {
            return fallback;
        }

        const rgbaMatch = value.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)/i);

        if (rgbaMatch) {
            const r = this.clamp(Math.round(parseFloat(rgbaMatch[1])), 0, 255);
            const g = this.clamp(Math.round(parseFloat(rgbaMatch[2])), 0, 255);
            const b = this.clamp(Math.round(parseFloat(rgbaMatch[3])), 0, 255);
            const opacity = rgbaMatch[4] !== undefined
                ? this.clamp(parseFloat(rgbaMatch[4]), 0, 1)
                : 1;

            return {
                color: `rgb(${r}, ${g}, ${b})`,
                opacity
            };
        }

        // If it's a valid CSS color (non-RGBA), use it with full opacity
        return {
            color: value,
            opacity: 1
        };
    }

    normalizeGravity(value) {
        if (typeof value === 'number' && !Number.isNaN(value)) {
            return Math.max(0, value);
        }

        if (value === true) {
            return 60; // default gravity strength in viewBox units per second
        }

        return 0;
    }

    normalizeWind(value) {
        if (typeof value === 'number' && !Number.isNaN(value)) {
            const clamped = Math.min(300, Math.max(-300, value));
            return clamped;
        }

        if (value === true) {
            return 80; // default wind strength in viewBox units per second
        }

        return 0;
    }
}

// Example usage
// new ConfettiBackground('#container', { count: 150 });
// new ConfettiBackground('.my-background');
// new ConfettiBackground('[data-confetti]');
