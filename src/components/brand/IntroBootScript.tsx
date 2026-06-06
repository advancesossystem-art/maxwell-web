import Script from "next/script";
import { getIntroModeFromEnv } from "@/lib/intro/config";

/**
 * Marks intro session early without hiding page content (LCP-friendly).
 * Overlay mounts from React; homepage HTML can paint underneath.
 */
export function IntroBootScript() {
  const mode = getIntroModeFromEnv();

  return (
    <Script
      id="maxwell-intro-boot"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(){
  var path=location.pathname;
  if(path!=='/'&&path!=='')return;
  var mode=${JSON.stringify(mode)};
  if(mode==='disabled')return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var force=/[?&]intro=1(?:&|$)/.test(location.search);
  var paramMode=(new URLSearchParams(location.search).get('intro_mode')||'').toLowerCase();
  if(paramMode==='disabled')return;
  if(paramMode)mode=paramMode;
  var seen=false;
  try{seen=localStorage.getItem('maxwell-intro-seen')==='1';}catch(e){}
  if(!force&&!seen){
    document.documentElement.setAttribute('data-intro-pending','1');
  }
})();`,
      }}
    />
  );
}
