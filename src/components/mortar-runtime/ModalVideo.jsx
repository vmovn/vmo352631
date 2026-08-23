"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

// React 19-compatible local preservation of react-modal-video@2.0.2.
// Its public props, iframe URLs, class names, focus flow, and CSS geometry stay
// aligned with the original Mortar dependency.

const defaultClassNames = {
  modalVideoEffect: "modal-video-effect",
  modalVideo: "modal-video",
  modalVideoBody: "modal-video-body",
  modalVideoInner: "modal-video-inner",
  modalVideoIframeWrap: "modal-video-movie-wrap",
  modalVideoCloseBtn: "modal-video-close-btn",
};

const defaultAria = {
  openMessage: "You just opened the modal video",
  dismissBtnMessage: "Close the modal by clicking here",
};

const defaultYoutube = {
  autoplay: 1,
  cc_load_policy: 1,
  color: null,
  controls: 1,
  disablekb: 0,
  enablejsapi: 0,
  end: null,
  fs: 1,
  h1: null,
  iv_load_policy: 1,
  list: null,
  listType: null,
  loop: 0,
  modestbranding: null,
  origin: null,
  playlist: null,
  playsinline: null,
  rel: 0,
  showinfo: 1,
  start: 0,
  wmode: "transparent",
  theme: "dark",
  mute: 0,
};

const defaultVimeo = {
  api: false,
  autopause: true,
  autoplay: true,
  byline: true,
  callback: null,
  color: null,
  height: null,
  loop: false,
  maxheight: null,
  maxwidth: null,
  player_id: null,
  portrait: true,
  title: true,
  width: null,
  xhtml: false,
};

const defaultYouku = { autoplay: 1, show_related: 0 };

function getQueryString(values) {
  return Object.entries(values)
    .filter(([, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

function getVideoUrl({ channel, url, videoId, vimeo, youku, youtube }) {
  if (channel === "youtube") {
    return `//www.youtube.com/embed/${videoId}?${getQueryString(youtube)}`;
  }
  if (channel === "vimeo") {
    return `//player.vimeo.com/video/${videoId}?${getQueryString(vimeo)}`;
  }
  if (channel === "youku") {
    return `//player.youku.com/embed/${videoId}?${getQueryString(youku)}`;
  }
  return url;
}

function getPadding(ratio) {
  const [width, height] = ratio.split(":").map(Number);
  return `${(height * 100) / width}%`;
}

function getWidthForViewport(ratio) {
  const [width, height] = ratio.split(":").map(Number);
  const videoHeight = window.innerWidth * (height / width);

  return window.innerHeight < videoHeight
    ? Math.floor((width / height) * window.innerHeight)
    : "100%";
}

export default function ModalVideo({
  allowFullScreen = true,
  animationSpeed = 300,
  aria,
  channel = "youtube",
  children,
  classNames,
  isOpen = false,
  onClose,
  ratio = "16:9",
  url,
  videoId = "",
  vimeo,
  youku,
  youtube,
}) {
  const modalRef = useRef(null);
  const iframeRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [modalVideoWidth, setModalVideoWidth] = useState("100%");
  const names = useMemo(
    () => ({ ...defaultClassNames, ...classNames }),
    [classNames],
  );
  const ariaLabels = useMemo(() => ({ ...defaultAria, ...aria }), [aria]);

  useEffect(() => {
    let timeout;
    const updateWidth = () => {
      clearTimeout(timeout);
      timeout = setTimeout(
        () => setModalVideoWidth(getWidthForViewport(ratio)),
        10,
      );
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateWidth);
    };
  }, [ratio]);

  useEffect(() => {
    if (isOpen) modalRef.current?.focus();
  }, [isOpen]);

  const closeModal = () => {
    if (typeof onClose === "function") onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key !== "Tab") return;
    event.preventDefault();
    event.stopPropagation();

    if (document.activeElement === modalRef.current) {
      iframeRef.current?.focus();
    } else if (document.activeElement === closeButtonRef.current) {
      modalRef.current?.focus();
    }
  };

  const videoUrl = getVideoUrl({
    channel,
    url,
    videoId,
    vimeo: { ...defaultVimeo, ...vimeo },
    youku: { ...defaultYouku, ...youku },
    youtube: { ...defaultYoutube, ...youtube },
  });

  return (
    <CSSTransition
      classNames={names.modalVideoEffect}
      in={isOpen}
      nodeRef={modalRef}
      timeout={Number(animationSpeed)}
      unmountOnExit
    >
      <div
        ref={modalRef}
        className={names.modalVideo}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabels.openMessage}
        onClick={closeModal}
        onKeyDown={handleKeyDown}
      >
        <div className={names.modalVideoBody}>
          <div
            className={names.modalVideoInner}
            style={{ width: modalVideoWidth }}
          >
            <div
              className={names.modalVideoIframeWrap}
              style={{ paddingBottom: getPadding(ratio) }}
            >
              {children || (
                <iframe
                  ref={iframeRef}
                  width="460"
                  height="230"
                  src={videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={allowFullScreen}
                  onKeyDown={handleKeyDown}
                  tabIndex="-1"
                />
              )}
              <button
                ref={closeButtonRef}
                className={names.modalVideoCloseBtn}
                aria-label={ariaLabels.dismissBtnMessage}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
