import{r as e,t}from"./jsx-runtime-BOY_dY-B.js";import{n,t as r}from"./assets-D3LuxiQq.js";import{It as i}from"./index-E5xcKiFi.js";var a=e(i(),1),o=t(),s=(0,a.forwardRef)(({src:e,className:t=``,poster:i,priority:s=!1,showWatermark:c=!1,...l},u)=>{let[d,f]=(0,a.useState)(()=>!!(s||l.autoPlay)),[p,m]=(0,a.useState)(!0),[h,g]=(0,a.useState)(!1),[_,v]=(0,a.useState)(0),[y,b]=(0,a.useState)(!1),[x,S]=(0,a.useState)(null),C=(0,a.useRef)(null),w=(0,a.useRef)(null),T=n(e,i),E=T.webm&&_>0?`${T.webm}?retry=${_}`:T.webm,D=T.localWebm&&_>0?`${T.localWebm}?retry=${_}`:T.localWebm,O=T.mp4&&_>0?`${T.mp4}?retry=${_}`:T.mp4,k=T.localMp4&&_>0?`${T.localMp4}?retry=${_}`:T.localMp4,A=T.poster;(0,a.useImperativeHandle)(u,()=>w.current),(0,a.useEffect)(()=>{if(l.autoPlay){f(!0);return}let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(f(!0),e.disconnect())})},{rootMargin:`200px`});return C.current&&e.observe(C.current),()=>{e.disconnect()}},[l.autoPlay]),(0,a.useEffect)(()=>{b(!1),g(!1),m(!0),v(0)},[e]),(0,a.useEffect)(()=>{if(!p||!d||y)return;let t=setTimeout(()=>{p&&_<3&&(console.warn(`LazyVideo: Loading stalled on slow connection, auto-retrying...`,e),v(e=>e+1))},5e3);return()=>clearTimeout(t)},[p,d,_,e,y]),(0,a.useEffect)(()=>{if(!h||_>=3||y)return;let t=setTimeout(()=>{console.warn(`LazyVideo: Load error encountered, auto-retrying...`,e),g(!1),m(!0),v(e=>e+1)},2e3);return()=>clearTimeout(t)},[h,_,e,y]),(0,a.useEffect)(()=>{if(w.current&&d&&!y)try{w.current.load(),l.autoPlay&&w.current.play().catch(e=>{console.log(`[LazyVideo] Autoplay blocked by browser policy:`,e)})}catch(e){console.error(`[LazyVideo] reload failed:`,e)}},[e,d,_,y]);let j=()=>{m(!0),g(!1)},M=()=>{m(!1)},N=()=>{m(!0)},P=()=>{m(!1)},F=()=>{m(!1);let e=T.mp4||T.webm;e?(console.warn(`[LazyVideo] Error loading video, checking for 404 status: ${e}`),fetch(e,{method:`HEAD`}).then(t=>{t.status===404?(console.warn(`[LazyVideo] Video resource returned 404: ${e}`),b(!0)):g(!0)}).catch(()=>{fetch(e).then(t=>{t.status===404?(console.warn(`[LazyVideo] Video resource returned 404 (GET fallback): ${e}`),b(!0)):g(!0)}).catch(()=>{g(!0)})})):g(!0)},I=e=>{e.stopPropagation(),g(!1),m(!0),v(e=>e+1),setTimeout(()=>{w.current&&(w.current.load(),w.current.play().catch(()=>{}))},50)};return(0,o.jsxs)(`div`,{ref:C,className:`lazy-video-container ${t}`,children:[(0,o.jsx)(`style`,{children:`
        .lazy-video-container {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          border-radius: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0f172a;
        }
        .lazy-video-element {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .lazy-video-overlay-spinner {
          position: absolute;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.65);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          z-index: 10;
          pointer-events: none;
        }
        .lazy-video-spinner {
          width: 44px;
          height: 44px;
          border: 4px solid rgba(255, 255, 255, 0.25);
          border-top: 4px solid #3b82f6;
          border-radius: 50%;
          animation: lazy-video-spin 0.8s linear infinite;
        }
        .lazy-video-text {
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          letter-spacing: 0.5px;
        }
        .lazy-video-overlay-error {
          position: absolute;
          inset: 0;
          background-color: rgba(15, 23, 42, 0.88);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          z-index: 20;
          cursor: pointer;
          padding: 16px;
          text-align: center;
        }
        .lazy-video-error-icon {
          font-size: 36px;
          animation: lazy-video-bounce 1s ease-in-out infinite alternate;
        }
        .lazy-video-error-title {
          color: #fca5a5;
          font-size: 15px;
          font-weight: bold;
        }
        .lazy-video-retry-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 8px 18px;
          border-radius: 12px;
          font-weight: bold;
          font-size: 13px;
          cursor: pointer;
          margin-top: 6px;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.4);
          transition: transform 0.2s, background-color 0.2s;
        }
        .lazy-video-retry-btn:hover {
          background-color: #2563eb;
        }
        .lazy-video-retry-btn:active {
          transform: scale(0.95);
        }
        .lazy-video-placeholder {
          width: 100%;
          height: 100%;
          background-color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
        }
        .lazy-video-placeholder-poster {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.4;
          filter: blur(4px);
          transform: scale(0.9);
        }
        .lazy-video-pulse-spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: lazy-video-pulse 1.5s ease-in-out infinite;
        }
        @keyframes lazy-video-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes lazy-video-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes lazy-video-bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-4px); }
        }
        .lazy-video-overlay-404 {
          position: absolute;
          inset: 0;
          background-color: #0f172a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          z-index: 20;
          padding: 24px;
          text-align: center;
        }
        .lazy-video-404-icon {
          font-size: 48px;
          margin-bottom: 4px;
          animation: lazy-video-pulse 2s infinite ease-in-out;
        }
        .lazy-video-404-title {
          color: #ffcf5c;
          font-size: 18px;
          font-weight: bold;
          letter-spacing: 0.5px;
        }
        .lazy-video-404-subtitle {
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
          max-width: 280px;
          line-height: 1.4;
        }
      `}),y?(0,o.jsxs)(`div`,{className:`lazy-video-overlay-404`,children:[(0,o.jsx)(`span`,{className:`lazy-video-404-icon`,role:`img`,"aria-label":`coming soon`,children:`🎬`}),(0,o.jsx)(`span`,{className:`lazy-video-404-title`,children:`Video coming soon`}),(0,o.jsx)(`span`,{className:`lazy-video-404-subtitle`,children:`Tap sound to listen to the letter sound!`})]}):d?(0,o.jsxs)(`div`,{className:`lesson-video-shell ${x&&x<1?`is-portrait`:`is-landscape`}`,style:x?{aspectRatio:x}:{},children:[(0,o.jsxs)(`video`,{ref:w,poster:A,className:`lazy-video-element lesson-video ${t}`,onLoadStart:j,onCanPlay:M,onWaiting:N,onPlaying:P,onError:F,onLoadedMetadata:e=>{let{videoWidth:t,videoHeight:n}=e.target;t&&n&&S(t/n),l.onLoadedMetadata&&l.onLoadedMetadata(e)},...l,children:[E&&(0,o.jsx)(`source`,{src:E,type:`video/webm`,onError:e=>{console.warn(`[LazyVideo] CDN WebM video missing or failed to load: ${e.target.src}`)}}),D&&D!==E&&(0,o.jsx)(`source`,{src:D,type:`video/webm`,onError:e=>{console.warn(`[LazyVideo] Local WebM video fallback missing or failed to load: ${e.target.src}`)}}),O&&(0,o.jsx)(`source`,{src:O,type:`video/mp4`,onError:e=>{console.warn(`[LazyVideo] CDN MP4 video missing or failed to load: ${e.target.src}`)}}),k&&k!==O&&(0,o.jsx)(`source`,{src:k,type:`video/mp4`,onError:e=>{console.warn(`[LazyVideo] Local MP4 video fallback missing or failed to load: ${e.target.src}`)}})]}),c&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`img`,{src:r(`/logos/plg-long-logo.png`),alt:`PLG Kids`,className:`lesson-video-logo-top`}),(0,o.jsx)(`img`,{src:r(`/logos/plg-square-logo.png`),alt:`PLG Kids`,className:`lesson-video-logo-corner`})]}),p&&(0,o.jsxs)(`div`,{className:`lazy-video-overlay-spinner`,children:[(0,o.jsx)(`div`,{className:`lazy-video-spinner`}),(0,o.jsx)(`span`,{className:`lazy-video-text`,children:`Loading Video...`})]}),h&&(0,o.jsxs)(`div`,{className:`lazy-video-overlay-error`,onClick:I,children:[(0,o.jsx)(`span`,{className:`lazy-video-error-icon`,"aria-hidden":`true`,children:`⚠️`}),(0,o.jsx)(`span`,{className:`lazy-video-error-title`,children:`Poor Connection. Video stuck.`}),(0,o.jsx)(`button`,{type:`button`,className:`lazy-video-retry-btn`,children:`Tap to Retry`})]})]}):(0,o.jsx)(`div`,{className:`lazy-video-placeholder`,children:A?(0,o.jsx)(`img`,{src:A,className:`lazy-video-placeholder-poster`,alt:`Loading video...`,loading:s?`eager`:`lazy`,...s?{fetchPriority:`high`}:{},decoding:`async`}):(0,o.jsx)(`div`,{className:`lazy-video-pulse-spinner`,children:(0,o.jsx)(`div`,{className:`lazy-video-spinner`})})})]})});s.displayName=`LazyVideo`;export{s as t};