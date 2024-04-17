/**'это библиотека */
const videoModule = () => {
var ytLazyVideos = document.querySelectorAll(".lazy-youtube");
if (ytLazyVideos.length) {
  for (var i = 0; i < ytLazyVideos.length; i++) {
    ytLazyVideos[i].addEventListener("click", function () {
      var ytLazyChilds = this.querySelector(".lazy-loading-content");
      var ytVideoId = this.dataset.id;
      this.removeChild(ytLazyChilds);
      var ytVideoContainer = document.createElement("div");
      ytVideoContainer.classList.add(
        "embed-responsive",
        "embed-responsive-16by9"
      );
      var ytIframe = document.createElement("iframe");
      ytIframe.classList.add("embed-responsive-item");
      ytIframe.src = `https://www.youtube.com/embed/${ytVideoId}?autoplay=1&mute=1`;
      ytIframe.setAttribute("allow", "autoplay");
      ytVideoContainer.appendChild(ytIframe);
      this.appendChild(ytVideoContainer);
    });
  }
}
if ($(".page-id-3992").length) {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function videoLazyHandler() {
    if (window.screen.availWidth > 768) {
      var videos = document.querySelectorAll("video");
      for (let i = 0; i < videos.length; i++) {
        var video = videos[i];
        var visible = isElementInViewport(video);
        if (visible) {
          var dataSrc = video.querySelector("data-src");
          if (dataSrc) {
            var source = document.createElement("source");
            source.src = dataSrc.getAttribute("src");
            source.type = dataSrc.getAttribute("type");
            video.appendChild(source);
            video.removeChild(dataSrc);
          }
        }
      }
    }
  }
  window.addEventListener("load", videoLazyHandler, false);
  window.addEventListener("scroll", videoLazyHandler, false);
  window.addEventListener("resize", videoLazyHandler, false);
}
};
export default videoModule;
