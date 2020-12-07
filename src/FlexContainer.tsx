import * as React from "react";
import { useLayoutEffect, useRef } from "react";
import { createUseStyles } from "react-jss";

let FlexContainerStyles = createUseStyles(() => ({
  default: {
    display: "flex",
  },
  vertical: {
    composes: "$default",
    flexDirection: "column",
  },
  horizontal: {
    composes: "$default",
    flexDirection: "row",
  },
}));

interface FlexContainerProps {
  className?: string;
  width?: string;
  height?: string;
  flex?: string;
  type?: "horizontal" | "vertical";
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  alignItems?: "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  minWidth?: string;
  minHeight?: string;
  overflow?: string;
  padding?: number;
  margin?: number;
  gap?: number;
  style?: any;
  getsize?: any;
  children?: any;
}

export const FlexContainer = (props?: FlexContainerProps) => {
  const divRef: any = useRef(null);

  useLayoutEffect(() => {
    const width: number = divRef.current.offsetWidth;
    const height: number = divRef.current.offsetHeight;
    handleSize(width, height);
  }, [divRef]);

  const handleSize = (width: number, height: number) => {
    if (props.getsize) {
      window.addEventListener("resize", function () {
        updateSize();
      });
      updateSize(width, height);
    }
  };

  const updateSize = (width?: number, height?: number) => {
    width = width || divRef.current.offsetWidth;
    height = height || divRef.current.offsetHeight;
    props.getsize({ width: width, height: height });
  };

  let style = FlexContainerStyles();
  let customStyle = {
    width: props.width || "unset",
    height: props.height || "unset",
    flex: props.flex || "unset",
    alignSelf: props.alignSelf || "center",
    justifyContent: props.justifyContent || "flex-start",
    alignItems: props.alignItems || "baseline",
    minWidth: props.minWidth || 0,
    minHeight: props.minHeight || 0,
    padding: props.padding || 0,
    margin: props.margin || 0,
    overflow: props.overflow || "unset",
    wrap: props.wrap || "nowrap",
    ...props.style,
  };

  if (Array.isArray(props.children)) {
    // If there is more than 1 children, apply "gap"
    var mod_childrens = props.children.map((children, index) => {
      var lastIndex = props.children.length;
      var marginTop = index != 0 && props.type === "vertical" ? props.gap / 2 : "unset";
      var marginBottom = index != lastIndex - 1 && lastIndex != 1 && props.type === "vertical" ? props.gap / 2 : "unset";
      var marginLeft = index != 0 && props.type === "horizontal" ? props.gap / 2 : "unset";
      var marginRight = index != lastIndex - 1 && lastIndex != 1 && props.type === "horizontal" ? props.gap / 2 : "unset";

      return React.cloneElement(children, {
        key: index,
        style: {
          marginTop: marginTop + "px",
          marginBottom: marginBottom + "px",
          marginLeft: marginLeft + "px",
          marginRight: marginRight + "px",
        },
      });
    });
  } else {
    mod_childrens = props.children;
  }

  return (
    <div ref={divRef} style={customStyle} className={style[props.type || "horizontal"] + " " + props.className}>
      {mod_childrens}
    </div>
  );
};

export default FlexContainer;
