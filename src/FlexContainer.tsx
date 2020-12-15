import * as React from "react";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
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
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
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
  const [modChildrens, setModChildrens] = useState<any>();
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
    width: props.width,
    height: props.height,
    flex: props.flex,
    alignSelf: props.alignSelf || "center",
    justifyContent: props.justifyContent || "flex-start",
    alignItems: props.alignItems || "baseline",
    minWidth: props.minWidth,
    minHeight: props.minHeight,
    padding: props.padding,
    margin: props.margin,
    overflow: props.overflow,
    flexWrap: props.flexWrap,
    ...props.style,
  };
  useEffect(() => {
    setModChildrens(
      React.Children.map(props.children, (children, index) => {
        var lastIndex = React.Children.count(props.children);
        var marginTop: number = index != 0 && props.type === "vertical" ? props.gap / 2 : 0;
        var marginBottom: number = index != lastIndex - 1 && lastIndex != 1 && props.type === "vertical" ? props.gap / 2 : 0;
        var marginLeft: number = index != 0 && props.type === "horizontal" ? props.gap / 2 : 0;
        var marginRight: number = index != lastIndex - 1 && lastIndex != 1 && props.type === "horizontal" ? props.gap / 2 : 0;
        const { style } = children.props;
        if (style !== undefined) {
          marginTop += parseInt(style.marginTop) || 0;
          marginBottom += parseInt(style.marginBottom) || 0;
          marginLeft += parseInt(style.marginLeft) || 0;
          marginRight += parseInt(style.marginRight) || 0;
        }
        return React.cloneElement(children, {
          key: index,
          style: {
            ...style,
            marginTop: marginTop + "px",
            marginBottom: marginBottom + "px",
            marginLeft: marginLeft + "px",
            marginRight: marginRight + "px",
          },
        });
      })
    );
  }, []);

  return (
    <div ref={divRef} style={customStyle} className={style[props.type || "horizontal"] + " " + props.className}>
      {modChildrens}
    </div>
  );
};

export default FlexContainer;
