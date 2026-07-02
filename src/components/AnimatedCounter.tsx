/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // duration in ms
}

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 1200 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let active = true;
    const start = 0;
    const end = target;
    if (start === end) {
      setCount(end);
      return;
    }

    const startTime = performance.now();

    const updateCount = (now: number) => {
      if (!active) return;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out quad interpolation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const currentVal = Math.floor(start + (end - start) * easedProgress);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);

    return () => {
      active = false;
    };
  }, [target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
