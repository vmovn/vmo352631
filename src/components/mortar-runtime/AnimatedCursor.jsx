"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// React 19-compatible local preservation of react-animated-cursor@2.11.2.
// The two-layer DOM, styles, pointer tracking, hover scaling, and mobile
// suppression intentionally match the Mortar baseline implementation.

const defaultClickables = [
  "a",
  'input[type="text"]',
  'input[type="email"]',
  'input[type="number"]',
  'input[type="submit"]',
  'input[type="image"]',
  "label[for]",
  "select",
  "textarea",
  "button",
  ".link",
];

function isMobileDevice() {
  const userAgent = navigator.userAgent;
  return Boolean(
    userAgent.match(/Android/i) ||
      userAgent.match(/BlackBerry/i) ||
      userAgent.match(/IEMobile/i) ||
      userAgent.match(/iPhone|iPad|iPod/i) ||
      userAgent.match(/Opera Mini/i) ||
      (userAgent.match(/Mac/) && navigator.maxTouchPoints > 2),
  );
}

function clickableTarget(clickable) {
  return typeof clickable === "object" ? clickable.target : clickable;
}

function CursorCore({
  children,
  clickables = defaultClickables,
  color = "220, 90, 90",
  innerScale = 0.6,
  innerSize = 8,
  innerStyle,
  outerAlpha = 0.4,
  outerScale = 6,
  outerSize = 8,
  outerStyle,
  showSystemCursor = false,
  trailingSpeed = 8,
}) {
  const defaultOptions = useMemo(
    () => ({
      children,
      color,
      innerScale,
      innerSize,
      innerStyle,
      outerAlpha,
      outerScale,
      outerSize,
      outerStyle,
    }),
    [
      children,
      color,
      innerScale,
      innerSize,
      innerStyle,
      outerAlpha,
      outerScale,
      outerSize,
      outerStyle,
    ],
  );

  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const requestRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const outerPositionRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => setOptions(defaultOptions), [defaultOptions]);

  const onMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    targetRef.current = { x: clientX, y: clientY };

    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
  }, []);

  useEffect(() => {
    const animateOuterCursor = () => {
      const position = outerPositionRef.current;
      const target = targetRef.current;
      position.x += (target.x - position.x) / trailingSpeed;
      position.y += (target.y - position.y) / trailingSpeed;

      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.top = `${position.y}px`;
        cursorOuterRef.current.style.left = `${position.x}px`;
      }

      requestRef.current = requestAnimationFrame(animateOuterCursor);
    };

    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [trailingSpeed]);

  useEffect(() => {
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseOver = () => setIsVisible(true);
    const onMouseOut = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, [onMouseMove]);

  const scaleBySize = useCallback((element, size, scale) => {
    if (!element) return;
    const scaledSize = `${parseInt(String(size * scale), 10)}px`;
    element.style.height = scaledSize;
    element.style.width = scaledSize;
  }, []);

  useEffect(() => {
    if (isActive) {
      scaleBySize(cursorInnerRef.current, options.innerSize, options.innerScale);
      scaleBySize(cursorOuterRef.current, options.outerSize, options.outerScale);
    } else {
      scaleBySize(cursorInnerRef.current, options.innerSize, 1);
      scaleBySize(cursorOuterRef.current, options.outerSize, 1);
    }
  }, [isActive, options, scaleBySize]);

  useEffect(() => {
    if (!isActiveClickable) return;
    scaleBySize(
      cursorInnerRef.current,
      options.innerSize,
      options.innerScale * 1.2,
    );
    scaleBySize(
      cursorOuterRef.current,
      options.outerSize,
      options.outerScale * 1.4,
    );
  }, [isActiveClickable, options, scaleBySize]);

  useEffect(() => {
    const selector = clickables.map(clickableTarget).filter(Boolean).join(",");
    const elements = selector ? document.querySelectorAll(selector) : [];
    const cleanups = [];

    elements.forEach((element) => {
      if (!showSystemCursor) element.style.cursor = "none";

      const clickableOptions = clickables.find(
        (clickable) =>
          typeof clickable === "object" && element.matches(clickable.target),
      );
      const elementOptions = { ...defaultOptions, ...clickableOptions };
      const handlers = {
        mouseover: () => {
          setIsActive(true);
          setOptions(elementOptions);
        },
        click: () => {
          setIsActive(true);
          setIsActiveClickable(false);
        },
        mousedown: () => setIsActiveClickable(true),
        mouseup: () => setIsActive(true),
        mouseout: () => {
          setIsActive(false);
          setIsActiveClickable(false);
          setOptions(defaultOptions);
        },
      };

      Object.entries(handlers).forEach(([type, handler]) =>
        element.addEventListener(type, handler),
      );
      cleanups.push(() => {
        Object.entries(handlers).forEach(([type, handler]) =>
          element.removeEventListener(type, handler),
        );
        if (!showSystemCursor) element.style.cursor = "";
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [clickables, defaultOptions, showSystemCursor]);

  useEffect(() => {
    const previousCursor = document.body.style.cursor;
    if (!showSystemCursor) document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = previousCursor;
    };
  }, [showSystemCursor]);

  const coreStyles = {
    zIndex: 999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition:
      "opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out",
    opacity: isVisible ? 1 : 0,
  };

  const cursorInnerStyles = {
    width: options.children ? "auto" : options.innerSize,
    height: options.children ? "auto" : options.innerSize,
    backgroundColor: options.children
      ? "transparent"
      : `rgba(${options.color}, 1)`,
    ...coreStyles,
    ...options.innerStyle,
  };

  const cursorOuterStyles = {
    width: options.outerSize,
    height: options.outerSize,
    backgroundColor: `rgba(${options.color}, ${options.outerAlpha})`,
    ...coreStyles,
    ...options.outerStyle,
  };

  return (
    <>
      <div ref={cursorOuterRef} style={cursorOuterStyles} />
      <div ref={cursorInnerRef} style={cursorInnerStyles}>
        <div
          style={{
            opacity: options.children ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {options.children}
        </div>
      </div>
    </>
  );
}

export default function AnimatedCursor(props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => setIsMobile(isMobileDevice()), []);

  if (isMobile) return null;
  return <CursorCore {...props} />;
}
