const btnModule = () => {
  const sectionCustomers = document.querySelector(".customers");
  const sectionLeader= document.querySelector(".section_leader");
  const icon_25 = `<svg  width="25" height="25" viewBox="0 0 25 25" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5697" r="12" fill="#FF5E00"></circle>
              <path
                d="M13.2895 17.0595C13.2672 17.0372 13.2495 17.0108 13.2374 16.9816C13.2254 16.9525 13.2192 16.9213 13.2192 16.8897C13.2192 16.8582 13.2254 16.827 13.2374 16.7978C13.2495 16.7687 13.2672 16.7422 13.2895 16.7199L17.1997 12.8097L7.21934 12.8097C7.15569 12.8097 7.09465 12.7844 7.04964 12.7394C7.00463 12.6944 6.97934 12.6334 6.97934 12.5697C6.97934 12.5061 7.00463 12.445 7.04964 12.4C7.09465 12.355 7.15569 12.3297 7.21934 12.3297L17.1997 12.3297L13.2895 8.41953C13.2672 8.39723 13.2496 8.37076 13.2375 8.34163C13.2254 8.31249 13.2192 8.28127 13.2192 8.24973C13.2192 8.2182 13.2254 8.18697 13.2375 8.15784C13.2496 8.1287 13.2672 8.10223 13.2895 8.07993C13.3118 8.05763 13.3383 8.03994 13.3674 8.02788C13.3966 8.01581 13.4278 8.0096 13.4593 8.0096C13.4909 8.0096 13.5221 8.01581 13.5512 8.02788C13.5804 8.03994 13.6068 8.05763 13.6291 8.07993L17.9491 12.3999C17.9715 12.4222 17.9892 12.4487 18.0012 12.4778C18.0133 12.507 18.0195 12.5382 18.0195 12.5697C18.0195 12.6013 18.0133 12.6325 18.0012 12.6616C17.9892 12.6908 17.9715 12.7172 17.9491 12.7395L13.6291 17.0595C13.6069 17.0818 13.5804 17.0995 13.5512 17.1116C13.5221 17.1237 13.4909 17.1299 13.4593 17.1299C13.4278 17.1299 13.3966 17.1237 13.3674 17.1116C13.3383 17.0995 13.3118 17.0818 13.2895 17.0595Z"
                fill="white"></path>
            </svg>`;
            const icon_50 = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<circle cx="25" cy="25" r="25" fill="#FF5E00"/>
<path d="M26.6459 34.3537C26.5994 34.3073 26.5625 34.2521 26.5373 34.1914C26.5122 34.1307 26.4992 34.0657 26.4992 34C26.4992 33.9343 26.5122 33.8692 26.5373 33.8085C26.5625 33.7478 26.5994 33.6927 26.6459 33.6462L34.7921 25.5L13.9996 25.5C13.867 25.5 13.7398 25.4473 13.6461 25.3535C13.5523 25.2598 13.4996 25.1326 13.4996 25C13.4996 24.8674 13.5523 24.7402 13.6461 24.6464C13.7398 24.5527 13.867 24.5 13.9996 24.5L34.7921 24.5L26.6459 16.3537C26.5994 16.3073 26.5626 16.2521 26.5374 16.1914C26.5123 16.1307 26.4993 16.0657 26.4993 16C26.4993 15.9343 26.5123 15.8692 26.5374 15.8085C26.5626 15.7478 26.5994 15.6927 26.6459 15.6462C26.6923 15.5998 26.7475 15.5629 26.8082 15.5378C26.8689 15.5126 26.9339 15.4997 26.9996 15.4997C27.0653 15.4997 27.1304 15.5126 27.1911 15.5378C27.2518 15.5629 27.3069 15.5998 27.3534 15.6462L36.3534 24.6462C36.3998 24.6927 36.4367 24.7478 36.4619 24.8085C36.487 24.8692 36.5 24.9343 36.5 25C36.5 25.0657 36.487 25.1307 36.4619 25.1914C36.4367 25.2521 36.3998 25.3073 36.3534 25.3537L27.3534 34.3537C27.3069 34.4002 27.2518 34.4371 27.1911 34.4623C27.1304 34.4874 27.0653 34.5004 26.9996 34.5004C26.9339 34.5004 26.8688 34.4874 26.8081 34.4623C26.7474 34.4371 26.6923 34.4002 26.6459 34.3537Z" fill="white"/>
</svg>`;
  const hoverEffect = (Element, icon) => {
    Element.addEventListener("mouseover", (el) => {
      const div = document.createElement("div");
      div.classList.add("hover-icon");
      div.innerHTML = icon;
      const animate = ({ timing, draw, duration }) => {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
          let progress = timing(1, timeFraction);
          draw(progress);
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
        });
      };
      const svgToggleActive = () => {
        const svg = document.querySelector(".hover-icon svg");
        if (svg) {
          svg.style.opacity = "0";
          svg.style.transform = "rotate(0turn)";
          animate({
            duration: 200,
            timing(x, timeFraction) {
              return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
            },
            draw(progress) {
              svg.style.transform = `rotate(${progress * 1 + "turn"})`;
              svg.style.opacity = 1;
              svg.style.transition = "opacity .5s,transform .2s";
            },
          });
        }
      };

      if (el.target.closest(".item img") || el.target.closest(".item span")) {
        const link = el.target.parentNode;
        if (link && !link.closest(".btn_active")) {
          link.classList.add("btn_active");
          link.append(div);
          svgToggleActive();
        }
      } else if (
        el.target.closest(".item") &&
        !el.target.closest(".hover-icon")
      ) {
        el.target.classList.add("btn_active");
        el.target.append(div);
        svgToggleActive();
      }
      el.target.addEventListener("mouseleave", () => {
        
        el.target.classList.remove("btn_active");
        svgToggleActive();
        div.remove();
      });
    });
  };
  hoverEffect(sectionCustomers, icon_25);
  hoverEffect(sectionLeader, icon_50);
};
export default btnModule;
