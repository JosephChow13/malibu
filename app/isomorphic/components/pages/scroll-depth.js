const BEACON_PATH = 'http://localhost:3000/beacon';

export default function measureScrollDepthLater(cssSelector, storyId, {wait = 1500, path = BEACON_PATH} = {}) {
  if('addEventListener' in global.window && 'onpagehide' in global.window && 'querySelector' in global.document && 'performance' in global.window && 'sendBeacon' in global.navigator) {
    global.setTimeout(measureScrollDepth, wait);
  }

  function measureScrollDepth() {
    const element = global.document.querySelector(cssSelector);
    if(!element) return;

    const { top, bottom } = element.getBoundingClientRect();
    let maxWindowTop = global.window.scrollY;
    const screenHeight = global.screen.height;

    const navigationStart = new Date(global.performance.timing.navigationStart);

    const staticProperties = {
      "story-id": storyId,
      "screen-width": global.screen.width,
      "screen-height": screenHeight,
      "story-start": maxWindowTop + top,
      "story-end": maxWindowTop + bottom,
      "localtime": `${navigationStart.getHours()}:${navigationStart.getMinutes()}`,
    }

    global.window.addEventListener('scroll', function() {
      if(global.screen.scrollY > maxWindowTop) {
        maxWindowTop = global.scrollY
      }
    });

    global.window.addEventListener('pagehide', function() {
      global.navigator.sendBeacon(path, JSON.stringify(Object.assign({
        "window-top": maxWindowTop,
        "window-bottom": maxWindowTop + screenHeight,
        "time-in-millis": new Date().getTime() - navigationStart.getTime()
      }, staticProperties)))
    });
  }
}
