"use strict";

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3570], {
  886: (o, r, p) => {
    let h;
    p.d(r, {
      ThemeApplier: () => oo,
      X: () => M,
      g: () => Y
    });
    var c;
    var e;
    var l;
    var x;
    var s;
    var a;
    var d;
    var n;
    var t;
    var k;
    var u;
    var i;
    var f;
    var g;
    var b;
    var m;
    var w;
    var y;
    var v;
    var _;
    var I;
    var S;
    var E;
    var C;
    var N;
    var J;
    var O;
    var Q = p(8349);
    var T = p(87849);
    var P = p(35158);
    var j = p(12190);
    var U = p(42983);
    let $ = {
      light: {
        background: "oklch(0.9940 0 0)",
        foreground: "oklch(0 0 0)",
        card: "oklch(0.9940 0 0)",
        "card-foreground": "oklch(0 0 0)",
        popover: "oklch(0.9911 0 0)",
        "popover-foreground": "oklch(0 0 0)",
        primary: "oklch(0.5393 0.2713 286.7462)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.9540 0.0063 255.4755)",
        "secondary-foreground": "oklch(0.1344 0 0)",
        muted: "oklch(0.9702 0 0)",
        "muted-foreground": "oklch(0.4386 0 0)",
        accent: "oklch(0.9393 0.0288 266.3680)",
        "accent-foreground": "oklch(0.5445 0.1903 259.4848)",
        destructive: "oklch(0.6290 0.1902 23.0704)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.9300 0.0094 286.2156)",
        input: "oklch(0.9401 0 0)",
        ring: "oklch(0 0 0)",
        "chart-1": "oklch(0.7459 0.1483 156.4499)",
        "chart-2": "oklch(0.5393 0.2713 286.7462)",
        "chart-3": "oklch(0.7336 0.1758 50.5517)",
        "chart-4": "oklch(0.5828 0.1809 259.7276)",
        "chart-5": "oklch(0.5590 0 0)",
        sidebar: "oklch(0.9777 0.0051 247.8763)",
        "sidebar-foreground": "oklch(0 0 0)",
        "sidebar-primary": "oklch(0 0 0)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.9401 0 0)",
        "sidebar-accent-foreground": "oklch(0 0 0)",
        "sidebar-border": "oklch(0.9401 0 0)",
        "sidebar-ring": "oklch(0 0 0)",
        radius: "1.4rem",
        "shadow-2xs": "0px 2px 3px 0px hsl(0 0% 0% / 0.08)",
        "shadow-xs": "0px 2px 3px 0px hsl(0 0% 0% / 0.08)",
        "shadow-sm": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 1px 2px -1px hsl(0 0% 0% / 0.16)",
        shadow: "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 1px 2px -1px hsl(0 0% 0% / 0.16)",
        "shadow-md": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 2px 4px -1px hsl(0 0% 0% / 0.16)",
        "shadow-lg": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 4px 6px -1px hsl(0 0% 0% / 0.16)",
        "shadow-xl": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 8px 10px -1px hsl(0 0% 0% / 0.16)",
        "shadow-2xl": "0px 2px 3px 0px hsl(0 0% 0% / 0.40)"
      },
      dark: {
        background: "oklch(0.2223 0.0060 271.1393)",
        foreground: "oklch(0.9551 0 0)",
        card: "oklch(0.2568 0.0076 274.6528)",
        "card-foreground": "oklch(0.9551 0 0)",
        popover: "oklch(0.2568 0.0076 274.6528)",
        "popover-foreground": "oklch(0.9551 0 0)",
        primary: "oklch(0.6132 0.2294 291.7437)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.2940 0.0130 272.9312)",
        "secondary-foreground": "oklch(0.9551 0 0)",
        muted: "oklch(0.2940 0.0130 272.9312)",
        "muted-foreground": "oklch(0.7058 0 0)",
        accent: "oklch(0.2795 0.0368 260.0310)",
        "accent-foreground": "oklch(0.7857 0.1153 246.6596)",
        destructive: "oklch(0.7106 0.1661 22.2162)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.3289 0.0092 268.3843)",
        input: "oklch(0.3289 0.0092 268.3843)",
        ring: "oklch(0.6132 0.2294 291.7437)",
        "chart-1": "oklch(0.8003 0.1821 151.7110)",
        "chart-2": "oklch(0.6132 0.2294 291.7437)",
        "chart-3": "oklch(0.8077 0.1035 19.5706)",
        "chart-4": "oklch(0.6691 0.1569 260.1063)",
        "chart-5": "oklch(0.7058 0 0)",
        sidebar: "oklch(0.2011 0.0039 286.0396)",
        "sidebar-foreground": "oklch(0.9551 0 0)",
        "sidebar-primary": "oklch(0.6132 0.2294 291.7437)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.2940 0.0130 272.9312)",
        "sidebar-accent-foreground": "oklch(0.6132 0.2294 291.7437)",
        "sidebar-border": "oklch(0.3289 0.0092 268.3843)",
        "sidebar-ring": "oklch(0.6132 0.2294 291.7437)",
        radius: "1.4rem",
        "shadow-2xs": "0px 2px 3px 0px hsl(0 0% 0% / 0.08)",
        "shadow-xs": "0px 2px 3px 0px hsl(0 0% 0% / 0.08)",
        "shadow-sm": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 1px 2px -1px hsl(0 0% 0% / 0.16)",
        shadow: "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 1px 2px -1px hsl(0 0% 0% / 0.16)",
        "shadow-md": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 2px 4px -1px hsl(0 0% 0% / 0.16)",
        "shadow-lg": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 4px 6px -1px hsl(0 0% 0% / 0.16)",
        "shadow-xl": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 8px 10px -1px hsl(0 0% 0% / 0.16)",
        "shadow-2xl": "0px 2px 3px 0px hsl(0 0% 0% / 0.40)"
      }
    };
    let R = {
      light: {
        background: "oklch(0.9777 0.0041 301.4256)",
        foreground: "oklch(0.3651 0.0325 287.0807)",
        card: "oklch(1.0000 0 0)",
        "card-foreground": "oklch(0.3651 0.0325 287.0807)",
        popover: "oklch(1.0000 0 0)",
        "popover-foreground": "oklch(0.3651 0.0325 287.0807)",
        primary: "oklch(0.6104 0.0767 299.7335)",
        "primary-foreground": "oklch(0.9777 0.0041 301.4256)",
        secondary: "oklch(0.8957 0.0265 300.2416)",
        "secondary-foreground": "oklch(0.3651 0.0325 287.0807)",
        muted: "oklch(0.8906 0.0139 299.7754)",
        "muted-foreground": "oklch(0.5288 0.0375 290.7895)",
        accent: "oklch(0.7889 0.0802 359.9375)",
        "accent-foreground": "oklch(0.3394 0.0441 1.7583)",
        destructive: "oklch(0.6332 0.1578 22.6734)",
        "destructive-foreground": "oklch(0.9777 0.0041 301.4256)",
        border: "oklch(0.8447 0.0226 300.1421)",
        input: "oklch(0.9329 0.0124 301.2783)",
        ring: "oklch(0.6104 0.0767 299.7335)",
        "chart-1": "oklch(0.6104 0.0767 299.7335)",
        "chart-2": "oklch(0.7889 0.0802 359.9375)",
        "chart-3": "oklch(0.7321 0.0749 169.8670)",
        "chart-4": "oklch(0.8540 0.0882 76.8292)",
        "chart-5": "oklch(0.7857 0.0645 258.0839)",
        sidebar: "oklch(0.9554 0.0082 301.3541)",
        "sidebar-foreground": "oklch(0.3651 0.0325 287.0807)",
        "sidebar-primary": "oklch(0.6104 0.0767 299.7335)",
        "sidebar-primary-foreground": "oklch(0.9777 0.0041 301.4256)",
        "sidebar-accent": "oklch(0.7889 0.0802 359.9375)",
        "sidebar-accent-foreground": "oklch(0.3394 0.0441 1.7583)",
        "sidebar-border": "oklch(0.8719 0.0198 302.1690)",
        "sidebar-ring": "oklch(0.6104 0.0767 299.7335)",
        radius: "0.5rem",
        "shadow-2xs": "1px 2px 5px 1px hsl(0 0% 0% / 0.03)",
        "shadow-xs": "1px 2px 5px 1px hsl(0 0% 0% / 0.03)",
        "shadow-sm": "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 1px 2px 0px hsl(0 0% 0% / 0.06)",
        shadow: "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 1px 2px 0px hsl(0 0% 0% / 0.06)",
        "shadow-md": "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 2px 4px 0px hsl(0 0% 0% / 0.06)",
        "shadow-lg": "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 4px 6px 0px hsl(0 0% 0% / 0.06)",
        "shadow-xl": "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 8px 10px 0px hsl(0 0% 0% / 0.06)",
        "shadow-2xl": "1px 2px 5px 1px hsl(0 0% 0% / 0.15)"
      },
      dark: {
        background: "oklch(0.2166 0.0215 292.8474)",
        foreground: "oklch(0.9053 0.0245 293.5570)",
        card: "oklch(0.2544 0.0301 292.7315)",
        "card-foreground": "oklch(0.9053 0.0245 293.5570)",
        popover: "oklch(0.2544 0.0301 292.7315)",
        "popover-foreground": "oklch(0.9053 0.0245 293.5570)",
        primary: "oklch(0.7058 0.0777 302.0489)",
        "primary-foreground": "oklch(0.2166 0.0215 292.8474)",
        secondary: "oklch(0.4604 0.0472 295.5578)",
        "secondary-foreground": "oklch(0.9053 0.0245 293.5570)",
        muted: "oklch(0.2560 0.0320 294.8380)",
        "muted-foreground": "oklch(0.6974 0.0282 300.0614)",
        accent: "oklch(0.3181 0.0321 308.6149)",
        "accent-foreground": "oklch(0.8391 0.0692 2.6681)",
        destructive: "oklch(0.6875 0.1420 21.4566)",
        "destructive-foreground": "oklch(0.2166 0.0215 292.8474)",
        border: "oklch(0.3063 0.0359 293.3367)",
        input: "oklch(0.2847 0.0346 291.2726)",
        ring: "oklch(0.7058 0.0777 302.0489)",
        "chart-1": "oklch(0.7058 0.0777 302.0489)",
        "chart-2": "oklch(0.8391 0.0692 2.6681)",
        "chart-3": "oklch(0.7321 0.0749 169.8670)",
        "chart-4": "oklch(0.8540 0.0882 76.8292)",
        "chart-5": "oklch(0.7857 0.0645 258.0839)",
        sidebar: "oklch(0.1985 0.0200 293.6639)",
        "sidebar-foreground": "oklch(0.9053 0.0245 293.5570)",
        "sidebar-primary": "oklch(0.7058 0.0777 302.0489)",
        "sidebar-primary-foreground": "oklch(0.2166 0.0215 292.8474)",
        "sidebar-accent": "oklch(0.3181 0.0321 308.6149)",
        "sidebar-accent-foreground": "oklch(0.8391 0.0692 2.6681)",
        "sidebar-border": "oklch(0.2847 0.0346 291.2726)",
        "sidebar-ring": "oklch(0.7058 0.0777 302.0489)",
        radius: "0.5rem",
        "shadow-2xs": "1px 2px 5px 1px hsl(0 0% 0% / 0.03)",
        "shadow-xs": "1px 2px 5px 1px hsl(0 0% 0% / 0.03)",
        "shadow-sm": "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 1px 2px 0px hsl(0 0% 0% / 0.06)",
        shadow: "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 1px 2px 0px hsl(0 0% 0% / 0.06)",
        "shadow-md": "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 2px 4px 0px hsl(0 0% 0% / 0.06)",
        "shadow-lg": "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 4px 6px 0px hsl(0 0% 0% / 0.06)",
        "shadow-xl": "1px 2px 5px 1px hsl(0 0% 0% / 0.06), 1px 8px 10px 0px hsl(0 0% 0% / 0.06)",
        "shadow-2xl": "1px 2px 5px 1px hsl(0 0% 0% / 0.15)"
      }
    };
    let A = {
      light: {
        background: "oklch(0.9850 0.015 340)",
        foreground: "oklch(0.2450 0.125 350)",
        card: "oklch(0.9920 0.010 340)",
        "card-foreground": "oklch(0.2450 0.125 350)",
        popover: "oklch(0.9890 0.012 340)",
        "popover-foreground": "oklch(0.2450 0.125 350)",
        primary: "oklch(0.6250 0.265 345)",
        "primary-foreground": "oklch(0.9850 0.015 340)",
        secondary: "oklch(0.9250 0.045 325)",
        "secondary-foreground": "oklch(0.2450 0.125 350)",
        muted: "oklch(0.9450 0.025 340)",
        "muted-foreground": "oklch(0.4850 0.065 335)",
        accent: "oklch(0.8950 0.085 15)",
        "accent-foreground": "oklch(0.4250 0.165 345)",
        destructive: "oklch(0.6450 0.215 25)",
        "destructive-foreground": "oklch(0.9850 0.015 340)",
        border: "oklch(0.8750 0.035 340)",
        input: "oklch(0.9050 0.032 340)",
        ring: "oklch(0.6250 0.265 345)",
        "chart-1": "oklch(0.7250 0.165 168)",
        "chart-2": "oklch(0.6250 0.265 345)",
        "chart-3": "oklch(0.7450 0.185 75)",
        "chart-4": "oklch(0.6350 0.195 325)",
        "chart-5": "oklch(0.4250 0.125 350)",
        sidebar: "oklch(0.9520 0.018 335)",
        "sidebar-foreground": "oklch(0.2450 0.125 350)",
        "sidebar-primary": "oklch(0.6250 0.265 345)",
        "sidebar-primary-foreground": "oklch(0.9850 0.015 340)",
        "sidebar-accent": "oklch(0.9050 0.032 340)",
        "sidebar-accent-foreground": "oklch(0.6250 0.265 345)",
        "sidebar-border": "oklch(0.8750 0.035 340)",
        "sidebar-ring": "oklch(0.6250 0.265 345)",
        radius: "1.6rem",
        "shadow-2xs": "0px 2px 3px 0px hsl(0 0% 0% / 0.08)",
        "shadow-xs": "0px 2px 3px 0px hsl(0 0% 0% / 0.08)",
        "shadow-sm": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 1px 2px -1px hsl(0 0% 0% / 0.16)",
        shadow: "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 1px 2px -1px hsl(0 0% 0% / 0.16)",
        "shadow-md": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 2px 4px -1px hsl(0 0% 0% / 0.16)",
        "shadow-lg": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 4px 6px -1px hsl(0 0% 0% / 0.16)",
        "shadow-xl": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 8px 10px -1px hsl(0 0% 0% / 0.16)",
        "shadow-2xl": "0px 2px 3px 0px hsl(0 0% 0% / 0.40)"
      },
      dark: {
        background: "oklch(0.1650 0.022 335)",
        foreground: "oklch(0.9250 0.018 340)",
        card: "oklch(0.1980 0.028 342)",
        "card-foreground": "oklch(0.9250 0.018 340)",
        popover: "oklch(0.1980 0.028 342)",
        "popover-foreground": "oklch(0.9250 0.018 340)",
        primary: "oklch(0.6850 0.235 348)",
        "primary-foreground": "oklch(0.9890 0.012 340)",
        secondary: "oklch(0.2650 0.045 330)",
        "secondary-foreground": "oklch(0.9250 0.018 340)",
        muted: "oklch(0.2650 0.045 330)",
        "muted-foreground": "oklch(0.6750 0.065 338)",
        accent: "oklch(0.2450 0.075 20)",
        "accent-foreground": "oklch(0.7450 0.185 342)",
        destructive: "oklch(0.7150 0.195 28)",
        "destructive-foreground": "oklch(0.9890 0.012 340)",
        border: "oklch(0.3150 0.055 335)",
        input: "oklch(0.3150 0.055 335)",
        ring: "oklch(0.6850 0.235 348)",
        "chart-1": "oklch(0.7850 0.185 165)",
        "chart-2": "oklch(0.6850 0.235 348)",
        "chart-3": "oklch(0.8050 0.165 72)",
        "chart-4": "oklch(0.7150 0.205 328)",
        "chart-5": "oklch(0.6750 0.065 338)",
        sidebar: "oklch(0.1850 0.018 345)",
        "sidebar-foreground": "oklch(0.9250 0.018 340)",
        "sidebar-primary": "oklch(0.6850 0.235 348)",
        "sidebar-primary-foreground": "oklch(0.9890 0.012 340)",
        "sidebar-accent": "oklch(0.2650 0.045 330)",
        "sidebar-accent-foreground": "oklch(0.6850 0.235 348)",
        "sidebar-border": "oklch(0.3150 0.055 335)",
        "sidebar-ring": "oklch(0.6850 0.235 348)",
        radius: "1.6rem",
        "shadow-2xs": "0px 2px 3px 0px hsl(0 0% 0% / 0.08)",
        "shadow-xs": "0px 2px 3px 0px hsl(0 0% 0% / 0.08)",
        "shadow-sm": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 1px 2px -1px hsl(0 0% 0% / 0.16)",
        shadow: "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 1px 2px -1px hsl(0 0% 0% / 0.16)",
        "shadow-md": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 2px 4px -1px hsl(0 0% 0% / 0.16)",
        "shadow-lg": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 4px 6px -1px hsl(0 0% 0% / 0.16)",
        "shadow-xl": "0px 2px 3px 0px hsl(0 0% 0% / 0.16), 0px 8px 10px -1px hsl(0 0% 0% / 0.16)",
        "shadow-2xl": "0px 2px 3px 0px hsl(0 0% 0% / 0.40)"
      }
    };
    let F = {
      light: {
        background: "oklch(1.0000 0 0)",
        foreground: "oklch(0.3211 0 0)",
        card: "oklch(1.0000 0 0)",
        "card-foreground": "oklch(0.3211 0 0)",
        popover: "oklch(1.0000 0 0)",
        "popover-foreground": "oklch(0.3211 0 0)",
        primary: "oklch(0.6231 0.1880 259.8145)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.9670 0.0029 264.5419)",
        "secondary-foreground": "oklch(0.4461 0.0263 256.8018)",
        muted: "oklch(0.9846 0.0017 247.8389)",
        "muted-foreground": "oklch(0.5510 0.0234 264.3637)",
        accent: "oklch(0.9514 0.0250 236.8242)",
        "accent-foreground": "oklch(0.3791 0.1378 265.5222)",
        destructive: "oklch(0.6368 0.2078 25.3313)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.9276 0.0058 264.5313)",
        input: "oklch(0.9276 0.0058 264.5313)",
        ring: "oklch(0.6231 0.1880 259.8145)",
        "chart-1": "oklch(0.6231 0.1880 259.8145)",
        "chart-2": "oklch(0.5461 0.2152 262.8809)",
        "chart-3": "oklch(0.4882 0.2172 264.3763)",
        "chart-4": "oklch(0.4244 0.1809 265.6377)",
        "chart-5": "oklch(0.3791 0.1378 265.5222)",
        sidebar: "oklch(0.9846 0.0017 247.8389)",
        "sidebar-foreground": "oklch(0.3211 0 0)",
        "sidebar-primary": "oklch(0.6231 0.1880 259.8145)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.9514 0.0250 236.8242)",
        "sidebar-accent-foreground": "oklch(0.3791 0.1378 265.5222)",
        "sidebar-border": "oklch(0.9276 0.0058 264.5313)",
        "sidebar-ring": "oklch(0.6231 0.1880 259.8145)",
        radius: "0.375rem",
        "shadow-2xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
        "shadow-xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
        "shadow-sm": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
        shadow: "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
        "shadow-md": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)",
        "shadow-lg": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)",
        "shadow-xl": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)",
        "shadow-2xl": "0 1px 3px 0px hsl(0 0% 0% / 0.25)"
      },
      dark: {
        background: "oklch(0.2046 0 0)",
        foreground: "oklch(0.9219 0 0)",
        card: "oklch(0.2686 0 0)",
        "card-foreground": "oklch(0.9219 0 0)",
        popover: "oklch(0.2686 0 0)",
        "popover-foreground": "oklch(0.9219 0 0)",
        primary: "oklch(0.6231 0.1880 259.8145)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.2686 0 0)",
        "secondary-foreground": "oklch(0.9219 0 0)",
        muted: "oklch(0.2393 0 0)",
        "muted-foreground": "oklch(0.7155 0 0)",
        accent: "oklch(0.3791 0.1378 265.5222)",
        "accent-foreground": "oklch(0.8823 0.0571 254.1284)",
        destructive: "oklch(0.6368 0.2078 25.3313)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.3715 0 0)",
        input: "oklch(0.3715 0 0)",
        ring: "oklch(0.6231 0.1880 259.8145)",
        "chart-1": "oklch(0.7137 0.1434 254.6240)",
        "chart-2": "oklch(0.6231 0.1880 259.8145)",
        "chart-3": "oklch(0.5461 0.2152 262.8809)",
        "chart-4": "oklch(0.4882 0.2172 264.3763)",
        "chart-5": "oklch(0.4244 0.1809 265.6377)",
        sidebar: "oklch(0.2046 0 0)",
        "sidebar-foreground": "oklch(0.9219 0 0)",
        "sidebar-primary": "oklch(0.6231 0.1880 259.8145)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.3791 0.1378 265.5222)",
        "sidebar-accent-foreground": "oklch(0.8823 0.0571 254.1284)",
        "sidebar-border": "oklch(0.3715 0 0)",
        "sidebar-ring": "oklch(0.6231 0.1880 259.8145)",
        radius: "0.375rem",
        "shadow-2xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
        "shadow-xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
        "shadow-sm": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
        shadow: "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
        "shadow-md": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)",
        "shadow-lg": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)",
        "shadow-xl": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)",
        "shadow-2xl": "0 1px 3px 0px hsl(0 0% 0% / 0.25)"
      }
    };
    let X = {
      light: {
        background: "oklch(0.9751 0.0127 244.2507)",
        foreground: "oklch(0.3729 0.0306 259.7328)",
        card: "oklch(1.0000 0 0)",
        "card-foreground": "oklch(0.3729 0.0306 259.7328)",
        popover: "oklch(1.0000 0 0)",
        "popover-foreground": "oklch(0.3729 0.0306 259.7328)",
        primary: "oklch(0.7227 0.1920 149.5793)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.9514 0.0250 236.8242)",
        "secondary-foreground": "oklch(0.4461 0.0263 256.8018)",
        muted: "oklch(0.9670 0.0029 264.5419)",
        "muted-foreground": "oklch(0.5510 0.0234 264.3637)",
        accent: "oklch(0.9505 0.0507 163.0508)",
        "accent-foreground": "oklch(0.3729 0.0306 259.7328)",
        destructive: "oklch(0.6368 0.2078 25.3313)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.9276 0.0058 264.5313)",
        input: "oklch(0.9276 0.0058 264.5313)",
        ring: "oklch(0.7227 0.1920 149.5793)",
        "chart-1": "oklch(0.7227 0.1920 149.5793)",
        "chart-2": "oklch(0.6959 0.1491 162.4796)",
        "chart-3": "oklch(0.5960 0.1274 163.2254)",
        "chart-4": "oklch(0.5081 0.1049 165.6121)",
        "chart-5": "oklch(0.4318 0.0865 166.9128)",
        sidebar: "oklch(0.9514 0.0250 236.8242)",
        "sidebar-foreground": "oklch(0.3729 0.0306 259.7328)",
        "sidebar-primary": "oklch(0.7227 0.1920 149.5793)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.9505 0.0507 163.0508)",
        "sidebar-accent-foreground": "oklch(0.3729 0.0306 259.7328)",
        "sidebar-border": "oklch(0.9276 0.0058 264.5313)",
        "sidebar-ring": "oklch(0.7227 0.1920 149.5793)",
        radius: "0.5rem",
        "shadow-2xs": "0px 4px 8px -1px hsl(0 0% 0% / 0.05)",
        "shadow-xs": "0px 4px 8px -1px hsl(0 0% 0% / 0.05)",
        "shadow-sm": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10)",
        shadow: "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10)",
        "shadow-md": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10)",
        "shadow-lg": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10)",
        "shadow-xl": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10)",
        "shadow-2xl": "0px 4px 8px -1px hsl(0 0% 0% / 0.25)"
      },
      dark: {
        background: "oklch(0.2077 0.0398 265.7549)",
        foreground: "oklch(0.8717 0.0093 258.3382)",
        card: "oklch(0.2795 0.0368 260.0310)",
        "card-foreground": "oklch(0.8717 0.0093 258.3382)",
        popover: "oklch(0.2795 0.0368 260.0310)",
        "popover-foreground": "oklch(0.8717 0.0093 258.3382)",
        primary: "oklch(0.7729 0.1535 163.2231)",
        "primary-foreground": "oklch(0.2077 0.0398 265.7549)",
        secondary: "oklch(0.3351 0.0331 260.9120)",
        "secondary-foreground": "oklch(0.7118 0.0129 286.0665)",
        muted: "oklch(0.2463 0.0275 259.9628)",
        "muted-foreground": "oklch(0.5510 0.0234 264.3637)",
        accent: "oklch(0.3729 0.0306 259.7328)",
        "accent-foreground": "oklch(0.7118 0.0129 286.0665)",
        destructive: "oklch(0.6368 0.2078 25.3313)",
        "destructive-foreground": "oklch(0.2077 0.0398 265.7549)",
        border: "oklch(0.4461 0.0263 256.8018)",
        input: "oklch(0.4461 0.0263 256.8018)",
        ring: "oklch(0.7729 0.1535 163.2231)",
        "chart-1": "oklch(0.7729 0.1535 163.2231)",
        "chart-2": "oklch(0.7845 0.1325 181.9120)",
        "chart-3": "oklch(0.7227 0.1920 149.5793)",
        "chart-4": "oklch(0.6959 0.1491 162.4796)",
        "chart-5": "oklch(0.5960 0.1274 163.2254)",
        sidebar: "oklch(0.2795 0.0368 260.0310)",
        "sidebar-foreground": "oklch(0.8717 0.0093 258.3382)",
        "sidebar-primary": "oklch(0.7729 0.1535 163.2231)",
        "sidebar-primary-foreground": "oklch(0.2077 0.0398 265.7549)",
        "sidebar-accent": "oklch(0.3729 0.0306 259.7328)",
        "sidebar-accent-foreground": "oklch(0.7118 0.0129 286.0665)",
        "sidebar-border": "oklch(0.4461 0.0263 256.8018)",
        "sidebar-ring": "oklch(0.7729 0.1535 163.2231)",
        radius: "0.5rem",
        "shadow-2xs": "0px 4px 8px -1px hsl(0 0% 0% / 0.05)",
        "shadow-xs": "0px 4px 8px -1px hsl(0 0% 0% / 0.05)",
        "shadow-sm": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10)",
        shadow: "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10)",
        "shadow-md": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10)",
        "shadow-lg": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10)",
        "shadow-xl": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10)",
        "shadow-2xl": "0px 4px 8px -1px hsl(0 0% 0% / 0.25)"
      }
    };
    let z = {
      light: {
        background: "oklch(0.9735 0.0261 90.0953)",
        foreground: "oklch(0.3092 0.0518 219.6516)",
        card: "oklch(0.9306 0.0260 92.4020)",
        "card-foreground": "oklch(0.3092 0.0518 219.6516)",
        popover: "oklch(0.9306 0.0260 92.4020)",
        "popover-foreground": "oklch(0.3092 0.0518 219.6516)",
        primary: "oklch(0.5924 0.2025 355.8943)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.6437 0.1019 187.3840)",
        "secondary-foreground": "oklch(1.0000 0 0)",
        muted: "oklch(0.6979 0.0159 196.7940)",
        "muted-foreground": "oklch(0.3092 0.0518 219.6516)",
        accent: "oklch(0.8334 0.0905 44.4632)",
        "accent-foreground": "oklch(1.0000 0 0)",
        destructive: "oklch(0.5863 0.2064 27.1172)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.6537 0.0197 205.2618)",
        input: "oklch(0.6537 0.0197 205.2618)",
        ring: "oklch(0.5924 0.2025 355.8943)",
        "chart-1": "oklch(0.6149 0.1394 244.9273)",
        "chart-2": "oklch(0.6437 0.1019 187.3840)",
        "chart-3": "oklch(0.5924 0.2025 355.8943)",
        "chart-4": "oklch(0.5808 0.1732 39.5003)",
        "chart-5": "oklch(0.5863 0.2064 27.1172)",
        sidebar: "oklch(0.9735 0.0261 90.0953)",
        "sidebar-foreground": "oklch(0.3092 0.0518 219.6516)",
        "sidebar-primary": "oklch(0.5924 0.2025 355.8943)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.6437 0.1019 187.3840)",
        "sidebar-accent-foreground": "oklch(1.0000 0 0)",
        "sidebar-border": "oklch(0.6537 0.0197 205.2618)",
        "sidebar-ring": "oklch(0.5924 0.2025 355.8943)",
        radius: "0.25rem",
        "shadow-2xs": "2px 2px 4px 0px hsl(196 83% 10% / 0.07)",
        "shadow-xs": "2px 2px 4px 0px hsl(196 83% 10% / 0.07)",
        "shadow-sm": "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 1px 2px -1px hsl(196 83% 10% / 0.15)",
        shadow: "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 1px 2px -1px hsl(196 83% 10% / 0.15)",
        "shadow-md": "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 2px 4px -1px hsl(196 83% 10% / 0.15)",
        "shadow-lg": "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 4px 6px -1px hsl(196 83% 10% / 0.15)",
        "shadow-xl": "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 8px 10px -1px hsl(196 83% 10% / 0.15)",
        "shadow-2xl": "2px 2px 4px 0px hsl(196 83% 10% / 0.38)"
      },
      dark: {
        background: "oklch(0.2673 0.0486 219.8169)",
        foreground: "oklch(0.6979 0.0159 196.7940)",
        card: "oklch(0.3092 0.0518 219.6516)",
        "card-foreground": "oklch(0.6979 0.0159 196.7940)",
        popover: "oklch(0.3092 0.0518 219.6516)",
        "popover-foreground": "oklch(0.6979 0.0159 196.7940)",
        primary: "oklch(0.5924 0.2025 355.8943)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.6437 0.1019 187.3840)",
        "secondary-foreground": "oklch(1.0000 0 0)",
        muted: "oklch(0.5230 0.0283 219.1365)",
        "muted-foreground": "oklch(0.6979 0.0159 196.7940)",
        accent: "oklch(0.3870 0.0312 42.8505)",
        "accent-foreground": "oklch(1.0000 0 0)",
        destructive: "oklch(0.5863 0.2064 27.1172)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.5230 0.0283 219.1365)",
        input: "oklch(0.5230 0.0283 219.1365)",
        ring: "oklch(0.5924 0.2025 355.8943)",
        "chart-1": "oklch(0.6149 0.1394 244.9273)",
        "chart-2": "oklch(0.6437 0.1019 187.3840)",
        "chart-3": "oklch(0.5924 0.2025 355.8943)",
        "chart-4": "oklch(0.5808 0.1732 39.5003)",
        "chart-5": "oklch(0.5863 0.2064 27.1172)",
        sidebar: "oklch(0.2673 0.0486 219.8169)",
        "sidebar-foreground": "oklch(0.6979 0.0159 196.7940)",
        "sidebar-primary": "oklch(0.5924 0.2025 355.8943)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.6437 0.1019 187.3840)",
        "sidebar-accent-foreground": "oklch(1.0000 0 0)",
        "sidebar-border": "oklch(0.5230 0.0283 219.1365)",
        "sidebar-ring": "oklch(0.5924 0.2025 355.8943)",
        radius: "0.25rem",
        "shadow-2xs": "2px 2px 4px 0px hsl(196 83% 10% / 0.07)",
        "shadow-xs": "2px 2px 4px 0px hsl(196 83% 10% / 0.07)",
        "shadow-sm": "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 1px 2px -1px hsl(196 83% 10% / 0.15)",
        shadow: "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 1px 2px -1px hsl(196 83% 10% / 0.15)",
        "shadow-md": "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 2px 4px -1px hsl(196 83% 10% / 0.15)",
        "shadow-lg": "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 4px 6px -1px hsl(196 83% 10% / 0.15)",
        "shadow-xl": "2px 2px 4px 0px hsl(196 83% 10% / 0.15), 2px 8px 10px -1px hsl(196 83% 10% / 0.15)",
        "shadow-2xl": "2px 2px 4px 0px hsl(196 83% 10% / 0.38)"
      }
    };
    let G = {
      light: {
        background: "oklch(0.9885 0.0057 84.5659)",
        foreground: "oklch(0.3660 0.0251 49.6085)",
        card: "oklch(0.9686 0.0091 78.2818)",
        "card-foreground": "oklch(0.3660 0.0251 49.6085)",
        popover: "oklch(0.9686 0.0091 78.2818)",
        "popover-foreground": "oklch(0.3660 0.0251 49.6085)",
        primary: "oklch(0.5553 0.1455 48.9975)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.8276 0.0752 74.4400)",
        "secondary-foreground": "oklch(0.4444 0.0096 73.6390)",
        muted: "oklch(0.9363 0.0218 83.2637)",
        "muted-foreground": "oklch(0.5534 0.0116 58.0708)",
        accent: "oklch(0.9000 0.0500 74.9889)",
        "accent-foreground": "oklch(0.4444 0.0096 73.6390)",
        destructive: "oklch(0.4437 0.1613 26.8994)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.8866 0.0404 89.6994)",
        input: "oklch(0.8866 0.0404 89.6994)",
        ring: "oklch(0.5553 0.1455 48.9975)",
        "chart-1": "oklch(0.5553 0.1455 48.9975)",
        "chart-2": "oklch(0.5534 0.0116 58.0708)",
        "chart-3": "oklch(0.5538 0.1207 66.4416)",
        "chart-4": "oklch(0.5534 0.0116 58.0708)",
        "chart-5": "oklch(0.6806 0.1423 75.8340)",
        sidebar: "oklch(0.9363 0.0218 83.2637)",
        "sidebar-foreground": "oklch(0.3660 0.0251 49.6085)",
        "sidebar-primary": "oklch(0.5553 0.1455 48.9975)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.5538 0.1207 66.4416)",
        "sidebar-accent-foreground": "oklch(1.0000 0 0)",
        "sidebar-border": "oklch(0.8866 0.0404 89.6994)",
        "sidebar-ring": "oklch(0.5553 0.1455 48.9975)",
        radius: "0.3rem",
        "shadow-2xs": "0px 2px 3px 0px hsl(28 18% 25% / 0.09)",
        "shadow-xs": "0px 2px 3px 0px hsl(28 18% 25% / 0.09)",
        "shadow-sm": "0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 1px 2px -1px hsl(28 18% 25% / 0.18)",
        shadow: "0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 1px 2px -1px hsl(28 18% 25% / 0.18)",
        "shadow-md": "0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 2px 4px -1px hsl(28 18% 25% / 0.18)",
        "shadow-lg": "0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 4px 6px -1px hsl(28 18% 25% / 0.18)",
        "shadow-xl": "0px 2px 3px 0px hsl(28 18% 25% / 0.18), 0px 8px 10px -1px hsl(28 18% 25% / 0.18)",
        "shadow-2xl": "0px 2px 3px 0px hsl(28 18% 25% / 0.45)"
      },
      dark: {
        background: "oklch(0.2161 0.0061 56.0434)",
        foreground: "oklch(0.9699 0.0013 106.4238)",
        card: "oklch(0.2685 0.0063 34.2976)",
        "card-foreground": "oklch(0.9699 0.0013 106.4238)",
        popover: "oklch(0.2685 0.0063 34.2976)",
        "popover-foreground": "oklch(0.9699 0.0013 106.4238)",
        primary: "oklch(0.7049 0.1867 47.6044)",
        "primary-foreground": "oklch(1.0000 0 0)",
        secondary: "oklch(0.4444 0.0096 73.6390)",
        "secondary-foreground": "oklch(0.9232 0.0026 48.7171)",
        muted: "oklch(0.2330 0.0073 67.4563)",
        "muted-foreground": "oklch(0.7161 0.0091 56.2590)",
        accent: "oklch(0.3598 0.0497 229.3202)",
        "accent-foreground": "oklch(0.9232 0.0026 48.7171)",
        destructive: "oklch(0.5771 0.2152 27.3250)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.3741 0.0087 67.5582)",
        input: "oklch(0.3741 0.0087 67.5582)",
        ring: "oklch(0.7049 0.1867 47.6044)",
        "chart-1": "oklch(0.7049 0.1867 47.6044)",
        "chart-2": "oklch(0.6847 0.1479 237.3225)",
        "chart-3": "oklch(0.7952 0.1617 86.0468)",
        "chart-4": "oklch(0.7161 0.0091 56.2590)",
        "chart-5": "oklch(0.5534 0.0116 58.0708)",
        sidebar: "oklch(0.2685 0.0063 34.2976)",
        "sidebar-foreground": "oklch(0.9699 0.0013 106.4238)",
        "sidebar-primary": "oklch(0.7049 0.1867 47.6044)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.6847 0.1479 237.3225)",
        "sidebar-accent-foreground": "oklch(0.2839 0.0734 254.5378)",
        "sidebar-border": "oklch(0.3741 0.0087 67.5582)",
        "sidebar-ring": "oklch(0.7049 0.1867 47.6044)",
        radius: "0.3rem",
        "shadow-2xs": "0px 2px 3px 0px hsl(0 0% 5% / 0.09)",
        "shadow-xs": "0px 2px 3px 0px hsl(0 0% 5% / 0.09)",
        "shadow-sm": "0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 1px 2px -1px hsl(0 0% 5% / 0.18)",
        shadow: "0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 1px 2px -1px hsl(0 0% 5% / 0.18)",
        "shadow-md": "0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 2px 4px -1px hsl(0 0% 5% / 0.18)",
        "shadow-lg": "0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 4px 6px -1px hsl(0 0% 5% / 0.18)",
        "shadow-xl": "0px 2px 3px 0px hsl(0 0% 5% / 0.18), 0px 8px 10px -1px hsl(0 0% 5% / 0.18)",
        "shadow-2xl": "0px 2px 3px 0px hsl(0 0% 5% / 0.45)"
      }
    };
    let Z = {
      light: {
        background: "oklch(1.0000 0 0)",
        foreground: "oklch(0.1448 0 0)",
        card: "oklch(1.0000 0 0)",
        "card-foreground": "oklch(0.1448 0 0)",
        popover: "oklch(1.0000 0 0)",
        "popover-foreground": "oklch(0.1448 0 0)",
        primary: "oklch(0.5555 0 0)",
        "primary-foreground": "oklch(0.9851 0 0)",
        secondary: "oklch(0.9702 0 0)",
        "secondary-foreground": "oklch(0.2046 0 0)",
        muted: "oklch(0.9702 0 0)",
        "muted-foreground": "oklch(0.5486 0 0)",
        accent: "oklch(0.9702 0 0)",
        "accent-foreground": "oklch(0.2046 0 0)",
        destructive: "oklch(0.5830 0.2387 28.4765)",
        "destructive-foreground": "oklch(0.9702 0 0)",
        border: "oklch(0.9219 0 0)",
        input: "oklch(0.9219 0 0)",
        ring: "oklch(0.7090 0 0)",
        "chart-1": "oklch(0.5555 0 0)",
        "chart-2": "oklch(0.5555 0 0)",
        "chart-3": "oklch(0.5555 0 0)",
        "chart-4": "oklch(0.5555 0 0)",
        "chart-5": "oklch(0.5555 0 0)",
        sidebar: "oklch(0.9851 0 0)",
        "sidebar-foreground": "oklch(0.1448 0 0)",
        "sidebar-primary": "oklch(0.2046 0 0)",
        "sidebar-primary-foreground": "oklch(0.9851 0 0)",
        "sidebar-accent": "oklch(0.9702 0 0)",
        "sidebar-accent-foreground": "oklch(0.2046 0 0)",
        "sidebar-border": "oklch(0.9219 0 0)",
        "sidebar-ring": "oklch(0.7090 0 0)",
        radius: "0rem",
        "shadow-2xs": "0px 1px 0px 0px hsl(0 0% 0% / 0.00)",
        "shadow-xs": "0px 1px 0px 0px hsl(0 0% 0% / 0.00)",
        "shadow-sm": "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 1px 2px -1px hsl(0 0% 0% / 0.00)",
        shadow: "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 1px 2px -1px hsl(0 0% 0% / 0.00)",
        "shadow-md": "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 2px 4px -1px hsl(0 0% 0% / 0.00)",
        "shadow-lg": "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 4px 6px -1px hsl(0 0% 0% / 0.00)",
        "shadow-xl": "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 8px 10px -1px hsl(0 0% 0% / 0.00)",
        "shadow-2xl": "0px 1px 0px 0px hsl(0 0% 0% / 0.00)"
      },
      dark: {
        background: "oklch(0.1448 0 0)",
        foreground: "oklch(0.9851 0 0)",
        card: "oklch(0.2134 0 0)",
        "card-foreground": "oklch(0.9851 0 0)",
        popover: "oklch(0.2686 0 0)",
        "popover-foreground": "oklch(0.9851 0 0)",
        primary: "oklch(0.5555 0 0)",
        "primary-foreground": "oklch(0.9851 0 0)",
        secondary: "oklch(0.2686 0 0)",
        "secondary-foreground": "oklch(0.9851 0 0)",
        muted: "oklch(0.2686 0 0)",
        "muted-foreground": "oklch(0.7090 0 0)",
        accent: "oklch(0.3715 0 0)",
        "accent-foreground": "oklch(0.9851 0 0)",
        destructive: "oklch(0.7022 0.1892 22.2279)",
        "destructive-foreground": "oklch(0.2686 0 0)",
        border: "oklch(0.3407 0 0)",
        input: "oklch(0.4386 0 0)",
        ring: "oklch(0.5555 0 0)",
        "chart-1": "oklch(0.5555 0 0)",
        "chart-2": "oklch(0.5555 0 0)",
        "chart-3": "oklch(0.5555 0 0)",
        "chart-4": "oklch(0.5555 0 0)",
        "chart-5": "oklch(0.5555 0 0)",
        sidebar: "oklch(0.2046 0 0)",
        "sidebar-foreground": "oklch(0.9851 0 0)",
        "sidebar-primary": "oklch(0.9851 0 0)",
        "sidebar-primary-foreground": "oklch(0.2046 0 0)",
        "sidebar-accent": "oklch(0.2686 0 0)",
        "sidebar-accent-foreground": "oklch(0.9851 0 0)",
        "sidebar-border": "oklch(1.0000 0 0)",
        "sidebar-ring": "oklch(0.4386 0 0)",
        radius: "0rem",
        "shadow-2xs": "0px 1px 0px 0px hsl(0 0% 0% / 0.00)",
        "shadow-xs": "0px 1px 0px 0px hsl(0 0% 0% / 0.00)",
        "shadow-sm": "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 1px 2px -1px hsl(0 0% 0% / 0.00)",
        shadow: "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 1px 2px -1px hsl(0 0% 0% / 0.00)",
        "shadow-md": "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 2px 4px -1px hsl(0 0% 0% / 0.00)",
        "shadow-lg": "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 4px 6px -1px hsl(0 0% 0% / 0.00)",
        "shadow-xl": "0px 1px 0px 0px hsl(0 0% 0% / 0.00), 0px 8px 10px -1px hsl(0 0% 0% / 0.00)",
        "shadow-2xl": "0px 1px 0px 0px hsl(0 0% 0% / 0.00)"
      }
    };
    let D = {
      light: {
        background: "oklch(1.0000 0 0)",
        foreground: "oklch(0.2686 0 0)",
        card: "oklch(1.0000 0 0)",
        "card-foreground": "oklch(0.2686 0 0)",
        popover: "oklch(1.0000 0 0)",
        "popover-foreground": "oklch(0.2686 0 0)",
        primary: "oklch(0.7686 0.1647 70.0804)",
        "primary-foreground": "oklch(0 0 0)",
        secondary: "oklch(0.9670 0.0029 264.5419)",
        "secondary-foreground": "oklch(0.4461 0.0263 256.8018)",
        muted: "oklch(0.9846 0.0017 247.8389)",
        "muted-foreground": "oklch(0.5510 0.0234 264.3637)",
        accent: "oklch(0.9869 0.0214 95.2774)",
        "accent-foreground": "oklch(0.4732 0.1247 46.2007)",
        destructive: "oklch(0.6368 0.2078 25.3313)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.9276 0.0058 264.5313)",
        input: "oklch(0.9276 0.0058 264.5313)",
        ring: "oklch(0.7686 0.1647 70.0804)",
        "chart-1": "oklch(0.7686 0.1647 70.0804)",
        "chart-2": "oklch(0.6658 0.1574 58.3183)",
        "chart-3": "oklch(0.5553 0.1455 48.9975)",
        "chart-4": "oklch(0.4732 0.1247 46.2007)",
        "chart-5": "oklch(0.4137 0.1054 45.9038)",
        sidebar: "oklch(0.9846 0.0017 247.8389)",
        "sidebar-foreground": "oklch(0.2686 0 0)",
        "sidebar-primary": "oklch(0.7686 0.1647 70.0804)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.9869 0.0214 95.2774)",
        "sidebar-accent-foreground": "oklch(0.4732 0.1247 46.2007)",
        "sidebar-border": "oklch(0.9276 0.0058 264.5313)",
        "sidebar-ring": "oklch(0.7686 0.1647 70.0804)",
        radius: "0.375rem",
        "shadow-2xs": "0px 4px 8px -1px hsl(0 0% 0% / 0.05)",
        "shadow-xs": "0px 4px 8px -1px hsl(0 0% 0% / 0.05)",
        "shadow-sm": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10)",
        shadow: "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10)",
        "shadow-md": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10)",
        "shadow-lg": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10)",
        "shadow-xl": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10)",
        "shadow-2xl": "0px 4px 8px -1px hsl(0 0% 0% / 0.25)"
      },
      dark: {
        background: "oklch(0.2046 0 0)",
        foreground: "oklch(0.9219 0 0)",
        card: "oklch(0.2686 0 0)",
        "card-foreground": "oklch(0.9219 0 0)",
        popover: "oklch(0.2686 0 0)",
        "popover-foreground": "oklch(0.9219 0 0)",
        primary: "oklch(0.7686 0.1647 70.0804)",
        "primary-foreground": "oklch(0 0 0)",
        secondary: "oklch(0.2686 0 0)",
        "secondary-foreground": "oklch(0.9219 0 0)",
        muted: "oklch(0.2393 0 0)",
        "muted-foreground": "oklch(0.7155 0 0)",
        accent: "oklch(0.3910 0.0829 49.2588)",
        "accent-foreground": "oklch(0.9243 0.1151 95.7459)",
        destructive: "oklch(0.6368 0.2078 25.3313)",
        "destructive-foreground": "oklch(1.0000 0 0)",
        border: "oklch(0.3715 0 0)",
        input: "oklch(0.3715 0 0)",
        ring: "oklch(0.7686 0.1647 70.0804)",
        "chart-1": "oklch(0.8369 0.1644 84.4286)",
        "chart-2": "oklch(0.6658 0.1574 58.3183)",
        "chart-3": "oklch(0.4732 0.1247 46.2007)",
        "chart-4": "oklch(0.5553 0.1455 48.9975)",
        "chart-5": "oklch(0.4732 0.1247 46.2007)",
        sidebar: "oklch(0.1684 0 0)",
        "sidebar-foreground": "oklch(0.9219 0 0)",
        "sidebar-primary": "oklch(0.7686 0.1647 70.0804)",
        "sidebar-primary-foreground": "oklch(1.0000 0 0)",
        "sidebar-accent": "oklch(0.4732 0.1247 46.2007)",
        "sidebar-accent-foreground": "oklch(0.9243 0.1151 95.7459)",
        "sidebar-border": "oklch(0.3715 0 0)",
        "sidebar-ring": "oklch(0.7686 0.1647 70.0804)",
        radius: "0.375rem",
        "shadow-2xs": "0px 4px 8px -1px hsl(0 0% 0% / 0.05)",
        "shadow-xs": "0px 4px 8px -1px hsl(0 0% 0% / 0.05)",
        "shadow-sm": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10)",
        shadow: "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 1px 2px -2px hsl(0 0% 0% / 0.10)",
        "shadow-md": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 2px 4px -2px hsl(0 0% 0% / 0.10)",
        "shadow-lg": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 4px 6px -2px hsl(0 0% 0% / 0.10)",
        "shadow-xl": "0px 4px 8px -1px hsl(0 0% 0% / 0.10), 0px 8px 10px -2px hsl(0 0% 0% / 0.10)",
        "shadow-2xl": "0px 4px 8px -1px hsl(0 0% 0% / 0.25)"
      }
    };
    var L = p(31453);
    let B = (h = true, function (o, r) {
      let p = h ? function () {
        if (r) {
          let p = r.apply(o, arguments);
          r = null;
          return p;
        }
      } : function () {};
      h = false;
      return p;
    })(undefined, function () {
      return B.toString().search("(((.+)+)+)+$").toString().constructor(B).search("(((.+)+)+)+$");
    });
    B();
    let H = {
      "violet-bloom": $,
      ["amethyst-h" + (c = 373, e = 0, l = 0, "aze")]: R,
      bubblegum: A,
      "modern-minimal": F,
      "ocean-breeze": X,
      "retro-arcade": z,
      "solar-dusk": G,
      [(x = 458, s = 0, a = 0, "mono")]: Z,
      [(d = 362, n = 0, t = 0, "amber-minimal")]: D
    };
    let W = {};
    function M({
      theme: o
    }) {
      let r = o === "default" ? W : {
        primary: H[o].light.primary,
        secondary: H[o].light.secondary,
        accent: H[o].light.accent
      };
      let p = {
        backgroundColor: r.primary
      };
      let h = {
        className: "w-3 h-3 rounded-sm border border-border/50",
        style: p,
        title: "Primary"
      };
      let e = {
        backgroundColor: r.secondary
      };
      let l = {
        className: "w-3 h-3 rounded-sm border border-border/50",
        style: e,
        title: "Secondary"
      };
      let x = {
        backgroundColor: r.accent
      };
      let a = {
        className: "w-3 h-3 rounded-sm border border-border/50",
        style: x,
        title: "Accent"
      };
      return <div className="flex gap-1">{(0, Q.jsx)("div", h)}{(0, Q.jsx)("div", l)}{(0, Q.jsx)("div", a)}</div>;
    }
    k = 406;
    u = 0;
    i = 0;
    W.primary = "hsl(0 0% 9%)";
    W[f = 351, g = 0, b = 0, "secondary"] = (m = 387, w = 0, y = 0, "hsl(0 0% 9" + (v = 422, _ = 0, I = 0, "6.1%)"));
    S = 379;
    E = 0;
    C = 0;
    W.accent = "hsl(0 0% 9" + (N = 488, J = 0, O = 0, "6.1%)");
    let q = () => {
      try {
        {
          let p = localStorage.getItem(L.Eu);
          if (!p) {
            return L.Wu;
          }
          return L.F$.find(o => o === p) || L.Wu;
        }
      } catch {
        return L.Wu;
      }
    };
    function Y() {
      let {
        theme: o,
        setTheme: r
      } = (0, j.D)();
      let p = q();
      let h = {
        selectedTheme: p
      };
      h.setTheme = p => {
        if (L.F$.includes(p)) {
          (o => {
            try {
              console.debug("Setting selected theme:", o);
              localStorage.setItem(L.Eu, o);
            } catch {}
          })(p);
          if (o) {
            r(o);
          }
        }
      };
      h.availableThemes = L.F$;
      return h;
    }
    function oo() {
      let {
        theme: o,
        systemTheme: r
      } = (0, j.D)();
      let p = (0, P.md)(U.at);
      (0, T.useEffect)(() => {
        if (p) {
          let o;
          let r = p.replace(/[^a-zA-Z0-9\s-]/g, "").trim();
          if (!r) {
            console.warn("Invalid font name after sanitization:", p);
            return;
          }
          let h = "custom-font-link";
          let c = document.getElementById(h);
          if (c instanceof HTMLLinkElement) {
            o = c;
          } else {
            (o = document.createElement("link")).id = h;
            o.rel = "stylesheet";
            document.head.appendChild(o);
          }
          let e = "https://fonts.googleapis.com/css2?family=" + encodeURIComponent(r) + ":wght@400;500;600;700&display=swap";
          o.href = e;
          document.body.style.setProperty("--font-sans", "\"" + r + "\", \"Inter\", sans-serif", "important");
          console.log("Custom font loaded: " + r);
        } else {
          let o = document.getElementById("custom-font-link");
          if (o) {
            o.remove();
            document.body.style.removeProperty("--font-sans");
            console.log("Custom font removed");
          }
        }
      }, [p]);
      (0, T.useEffect)(() => {
        let p = (() => {
          if (o === "light") {
            return "light";
          }
          if (o === "dark") {
            return "dark";
          }
          if (o === "system") {
            if (r === "light" || r === "dark") {
              return r;
            } else {
              return "light";
            }
          }
          return "light";
        })();
        let h = q();
        document.documentElement.classList.toggle("dark", p === "dark");
        if (h !== "default") {
          let o = H[h][p];
          Object.entries(o).forEach(([o, r]) => {
            document.documentElement.style.setProperty("--" + o, r);
          });
        }
        Object.entries(H).forEach(([o, r]) => {
          let e = r[p];
          Object.entries(e).forEach(([r, p]) => {
            var e;
            document[__DECODE_0__(429, e) + "ement"].style.setProperty("--" + o + "-" + r, p);
          });
        });
      }, [o, r]);
      return null;
    }
  },
  42983: (o, r, p) => {
    let h;
    let c;
    p.d(r, {
      hn: () => f,
      at: () => m,
      Tp: () => i,
      ql: () => n,
      Xe: () => g,
      GH: () => t
    });
    var e = p(8798);
    var l = p(22814);
    (function (o, r) {
      let p = o();
      while (true) {
        try {
          var h;
          var c;
          var e;
          var l;
          var x;
          var s;
          var a;
          var n;
          var t;
          var k;
          if (-parseInt((h = -666, c = -671, d(h - -920, c))) / 1 * (-parseInt(d(240, -692)) / 2) + parseInt(d(257, 524)) / 3 + parseInt((e = -664, l = -668, d(e - -920, l))) / 4 + -parseInt((x = -679, s = -689, d(x - -920, s))) / 5 * (-parseInt((a = -685, n = -673, d(a - -920, n))) / 6) + -parseInt(d(255, 529)) / 7 * (-parseInt(d(247, 500)) / 8) + parseInt(d(253, 511)) / 9 + -parseInt((t = -684, k = -672, d(t - -920, k))) / 10 === 169165) {
            break;
          }
          p.push(p.shift());
        } catch (o) {
          p.push(p.shift());
        }
      }
    })(s, 0);
    let x = (h = true, function (o, r) {
      if (d(239, 1144) !== d(238, 1153)) {
        let p = h ? function () {
          function p(o, r, p, h) {
            return d(o - -1854 - 911, r);
          }
          function h(o, r, p, h) {
            return d(o - -708 - 911, h);
          }
          if (p(-699, -691, -710, -706) !== h(447, 448, 436, 451)) {
            _0xae04(_0x5d96e8, _0x232773);
          } else if (r) {
            if (h(452, 460, 461, 462) === h(452, 440, 449, 460)) {
              let h = r[p(-698, -686, -697, -696)](o, arguments);
              r = null;
              return h;
            } else if (_0x2cec3e) {
              let o = _0x5df7b8[p(-698, -709, -701, -699)](_0x1e325c, arguments);
              _0x2911e6 = null;
              return o;
            }
          }
        } : function () {};
        h = false;
        return p;
      }
      return _0x27e4a7 !== d(237, -365) + "ty" && _0x5da723 !== d(252, -351);
    })(undefined, function () {
      return x.toString().search(d(246, -652) + "+$").toString()[d(250, 546) + "r"](x).search("(((.+)+)+)+$");
    });
    function s() {
      let o = ["scheduler", "ZLitY", "apply", "(((.+)+)+)", "75432QtSEQz", "appearance", "rBQkB", "constructo", "data", "users", "180774VYeVEn", "1JcTspr", "175lDdXeC", "1168996KTuXpP", "780069esmuTR", "ons", "4230WgSpvk", "10716200YzPMjo", "productivi", "yzlJQ", "wrkyY", "574944WKXnSl", "1030TiABmD", "notificati"];
      return (s = function () {
        return o;
      })();
    }
    x();
    d(242, 82);
    d(258, 91);
    d(251, 89);
    d(248, 84);
    d(243, 93);
    d(237, -629);
    let a = (0, l.eU)("general");
    function d(o, r) {
      let p = s();
      return (d = function (o, r) {
        return p[o -= 235];
      })(o, r);
    }
    (0, l.eU)(null, (o, r, p) => {
      r(a, p);
    });
    let n = (0, l.eU)(false);
    let t = (0, l.eU)(null, (o, r) => {
      r(n, !o(n));
    });
    (function (o, r) {
      let p = o();
      while (true) {
        try {
          if (-parseInt(u(502, 635)) / 1 * (-parseInt(u(493, 550)) / 2) + -parseInt(u(506, 644)) / 3 + -parseInt(u(499, 640)) / 4 + parseInt(u(497, 541)) / 5 + -parseInt(u(494, 636)) / 6 + -parseInt(u(501, 549)) / 7 + parseInt(u(498, 546)) / 8 === 404447) {
            break;
          }
          p.push(p.shift());
        } catch (o) {
          p.push(p.shift());
        }
      }
    })(b, 0);
    let k = (c = true, function (o, r) {
      let p = c ? function () {
        if (r) {
          let p = r[u(504, -201)](o, arguments);
          r = null;
          return p;
        }
      } : function () {};
      c = false;
      return p;
    })(undefined, function () {
      return k[u(495, -71)]()[u(496, 205)]("(((.+)+)+)+$")[u(495, 208)]()[u(507, 218) + "r"](k)[u(496, 199)](u(505, 211) + "+$");
    });
    function u(o, r) {
      let p = b();
      return (u = function (o, r) {
        return p[o -= 492];
      })(o, r);
    }
    k();
    let i = o => true;
    let f = (0, l.eU)(u(500, 944));
    let g = (0, l.eU)(null, (o, r, p) => {
      r(f, p);
    });
    function b() {
      let o = ["toString", "search", "1615215VPixfD", "14059056vCinjQ", "3162620Zdiudl", "general", "4945360QqGsFQ", "1bgxAHv", "Atom", "apply", "(((.+)+)+)", "328443ewueAy", "constructo", "customFont", "248524fAZUsP", "1161744GblYHb"];
      return (b = function () {
        return o;
      })();
    }
    let m = (0, e.XO)("customFont" + u(503, 1434), (0, e.BG)(u(492, 1426), null));
  },
  48933: (o, r, p) => {
    let h;
    p.d(r, {
      L: () => t,
      ServerConfigProvider: () => n
    });
    var c = p(8349);
    var e = p(87849);
    (function (o, r) {
      let p = o();
      while (true) {
        try {
          var h;
          var c;
          if (parseInt((h = -4, x(170, h))) / 1 + parseInt((c = -3, x(167, c))) / 2 + -parseInt(x(180, 93)) / 3 * (parseInt(x(173, 81)) / 4) + -parseInt(x(179, 14)) / 5 + -parseInt(x(171, 11)) / 6 * (-parseInt(x(175, 87)) / 7) + parseInt(x(168, 2)) / 8 * (parseInt(x(172, 11)) / 9) + -parseInt(x(165, 78)) / 10 === 682443) {
            break;
          }
          p.push(p.shift());
        } catch (o) {
          p.push(p.shift());
        }
      }
    })(a, 0);
    let l = (h = true, function (o, r) {
      let p = h ? function () {
        if (r) {
          let p = r[x(177, 286)](o, arguments);
          r = null;
          return p;
        }
      } : function () {};
      h = false;
      return p;
    })(undefined, function () {
      return l[x(169, -95)]()[x(176, 160)](x(178, 156) + "+$")[x(169, 139)]().constructor(l)[x(176, -73)](x(178, 155) + "+$");
    });
    function x(o, r) {
      let p = a();
      return (x = function (o, r) {
        return p[o -= 164];
      })(o, r);
    }
    l();
    let s = {};
    function a() {
      let o = ["5256rDGnHx", "toString", "811175obJwoc", "6oboMoo", "16101ZZCVeI", "4gwttXn", "ecatedFeat", "4947187wgJuef", "search", "apply", "(((.+)+)+)", "6047560pRRWXb", "1731144PNUFRM", "Provider", "13789670HEJOZW", "value", "2309362vIJbNv"];
      return (a = function () {
        return o;
      })();
    }
    s["enableDepr" + x(174, 55) + "ures"] = false;
    let d = (0, e.createContext)(s);
    function n({
      children: o,
      config: r
    }) {
      function p(o, r, p, h) {
        return x(r - -842 - -126, p);
      }
      let h = {
        [p(-806, -802, -799, -794)]: r,
        children: o
      };
      return (0, c.jsx)(d[p(-811, -804, -811, -799)], h);
    }
    function t() {
      return (0, e.useContext)(d);
    }
  }
}]);