import { ReactNode, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  selector: string;
}

export const Portal = ({ children, selector }: PortalProps) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    console.log(ref.current);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
};
