import React, { Children, forwardRef, isValidElement } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export interface ISliderProps {
  children: React.ReactNode;
}

export interface RefHandle {
  container: () => HTMLElement | null;
  anchor: () => HTMLAnchorElement | null;
}

export default function Slider({ children }: ISliderProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [progressWidth, setProgressWidth] = React.useState(0);
  const sliderContainerRef = React.useRef<HTMLDivElement>(null);
  const thumbsContainerRef = React.useRef<HTMLDivElement>(null);
  const nextBtnRef = React.useRef<HTMLButtonElement>(null);
  const prevBtnRef = React.useRef<HTMLButtonElement>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 5,
    mounted: () => setIsMounted(true),
    slideChanged(s) {
      let details = s.details();
      let current = details.relativeSlide + 1;
      setCurrentSlide(current);

      console.log("details: ", details);

      const x: any = current / details.size;
      setProgressWidth(x.toFixed(2) * 100);

      if (details.relativeSlide === 0) {
        console.log("removing class");
        prevBtnRef.current?.classList.add("hidden");
      }
      if (details.relativeSlide === 1) {
        console.log("removing class");
        prevBtnRef.current?.classList.remove("hidden");
      }

      if (details.relativeSlide === 3) {
        nextBtnRef.current?.classList.add("hidden");
      }
      if (details.relativeSlide === 2) {
        nextBtnRef.current?.classList.remove("hidden");
      }
    },
    breakpoints: {
      "(min-width: 1000px) and (max-width: 1280px)": {
        slidesPerView: 4,
      },
      "(min-width: 400px) and (max-width: 1000px)": {
        slidesPerView: 2,
      },
      "(min-width: 0px) and (max-width: 400px)": {
        slidesPerView: 1,
      },
    },
  });

  // Stop the history navigation gesture on touch devices
  React.useEffect(() => {
    const preventNavigation = (event: TouchEvent) => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX;
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0;

      // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault();
    };

    const slider = sliderContainerRef.current!;

    slider.addEventListener("touchstart", preventNavigation);

    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", preventNavigation);
      }
    };
  }, []);

  return (
    <>
      <div ref={sliderContainerRef} className="navigation-wrapper bg-white">
        <div
          ref={sliderRef}
          className="keen-slider -mx-3 mb-20 relative"
          style={{ opacity: isMounted ? 1 : 0 }}
        >
          {Children.map(children, (child) => {
            // Add the keen-slider__slide className to children
            if (isValidElement(child)) {
              return {
                ...child,
                props: {
                  ...child.props,
                  className: `${
                    child.props.className ? `${child.props.className} ` : ""
                  }keen-slider__slide`,
                },
              };
            }
            return child;
          })}
        </div>
      </div>
      {slider && (
        <div className="flex flex-row">
          <ArrowLeft
            ref={prevBtnRef}
            onClick={() => slider.prev()}
            disabled={currentSlide === 0}
          />
          <ArrowRight
            ref={nextBtnRef}
            onClick={() => slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </div>
      )}
    </>
  );
}

interface IButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

const ArrowLeft = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ disabled = false, onClick, ...props }: IButtonProps, ref) => {
    const disabeld = disabled ? " arrow--disabled" : "";
    return (
      <button
        className={
          "flex hidden items-center justify-center w-12 h-12 bg-black hover:bg-gray-900 rounded-md cursor-pointer" +
          disabeld
        }
        ref={ref}
        onClick={onClick}
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.02344 5.99748L7.14844 10.1225L5.97043 11.3008L0.66742 5.99748L5.97043 0.694179L7.14844 1.87248L3.02344 5.99748Z"
            fill="white"
          ></path>
        </svg>
      </button>
    );
  }
);

const ArrowRight = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ disabled = false, onClick, ...props }: IButtonProps, ref) => {
    const disabeld = disabled ? " arrow--disabled" : "";
    return (
      <button
        className={
          "flex items-center justify-center w-12 h-12 bg-black hover:bg-gray-900 rounded-md cursor-pointer" +
          disabeld
        }
        ref={ref}
        onClick={onClick}
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.97656 6.00252L0.851562 1.87752L2.02957 0.699219L7.33258 6.00252L2.02957 11.3058L0.851562 10.1275L4.97656 6.00252Z"
            fill="white"
          ></path>
        </svg>
      </button>
    );
  }
);
