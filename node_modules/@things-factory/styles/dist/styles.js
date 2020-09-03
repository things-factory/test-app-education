String(Math.random()).slice(2);let t=!1;(()=>{try{const e={get capture(){return t=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(t){}})(),"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1"),void 0===window.ShadyCSS||void 0===window.ShadyCSS.prepareTemplateDom&&console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),window.JSCompiler_renameProperty=((t,e)=>t);const e="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol();class r{constructor(t,e){if(e!==o)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(e?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const s=(t,...e)=>{const s=e.reduce((e,o,s)=>e+(t=>{if(t instanceof r)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[s+1],t[0]);return new r(s,o)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const n=s`
  :host {
    display: block;
    box-sizing: border-box;
  }
`,i=s`
  /* for scroller */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-thumb-color, rgba(0, 0, 0, 0.2));
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-thumb-hover-color, #aa866a);
  }
`,a=s`
  /* for tooltip */
  [data-tooltip]:after {
    position: absolute;
    content: attr(data-tooltip);
    color: #fff;
    z-index: 1;
    pointer-events: none;
    display: block;
    text-transform: capitalize;

    padding: var(--tooltip-padding);
    background-color: var(--tooltip-background-color);
    font: var(--tooltip-font);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);

    left: var(--tooltip-left-positon-left);
    top: var(--tooltip-left-position-top);
    right: var(--tooltip-left-position-right);
    animation: var(--tooltip-left-position-animation);
  }
  @keyframes tooltip-left {
    0% {
      opacity: 0;
      right: 150%;
    }
    100% {
      opacity: 1;
      right: 110%;
    }
  }
`;export{i as ScrollbarStyles,n as SharedStyles,a as TooltipStyles};
