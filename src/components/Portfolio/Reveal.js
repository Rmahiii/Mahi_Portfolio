import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Reveal({ children, className = "", delay = 0 }) {
  const nodeRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!node || reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={nodeRef}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      initial={{ opacity: 0, y: 22 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.52, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
