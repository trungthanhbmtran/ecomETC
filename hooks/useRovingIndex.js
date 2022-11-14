import { useState,useRef } from "react";

const useRovingIndex = (options) => {
    const { initialActiveIndex = 0, vertical = false, handlers = {} } = options || {};
    
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

    const targetRefs = useRef([]);
    const targets = targetRefs.current;

    const focusNext = () => {
      let newIndex = activeIndex + 1;
      if (newIndex >= targets.length) {
        newIndex = 0;
      }
      targets[newIndex]?.focus();
      setActiveIndex(newIndex);
    };

    const focusPrevious = () => {
      let newIndex = activeIndex - 1;
      if (newIndex < 0) {
        newIndex = targets.length - 1;
      }
      targets[newIndex]?.focus();
      setActiveIndex(newIndex);
    };

    const getTargetProps = (index) => ({
      ref: (ref) => {
        if (ref) {
          targets[index] = ref;
        }
      },
      tabIndex: activeIndex === index ? 0 : -1,
      onKeyDown: (e) => {
        if (Number.isInteger(activeIndex)) {
          if (e.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
            focusNext();
          }
          if (e.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
            focusPrevious();
          }
          handlers.onKeyDown?.(e, { setActiveIndex });
        }
      },
      onClick: () => {
        setActiveIndex(index);
      },
    });
    return {
      activeIndex,
      setActiveIndex,
      targets,
      getTargetProps,
      focusNext,
      focusPrevious,
    };
  };

export default useRovingIndex