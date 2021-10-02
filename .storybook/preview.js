import * as nextImage from "next/image";
import "@assets/main.css";
import "@assets/chrome-bug.css";
import "./preview.css";

// Replace next/image for Storybook
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    const { width, height, layout, objectFit } = props;

    if (layout === "fill" && objectFit === "cover") {
      return (
        <img
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          {...props}
        />
      );
    }
    if (layout === "fill" && objectFit === "contain") {
      return (
        <img
          style={{
            objectFit: "contain",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          {...props}
        />
      );
    }
    if (layout === "fill") {
      return (
        <img
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          {...props}
        />
      );
    }

    const ratio = (height / width) * 100;

    return (
      <div
        style={{
          paddingBottom: `${ratio}%`,
          position: "relative",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          {...props}
        />
      </div>
    );
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  darkMode: {
    darkClass: "dark",
    lightClass: "light",
    stylePreview: true,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
