import { Dispatch, SetStateAction, useEffect } from "react";

const useCloseOnOutsideClick = (id: string, setOpen: Dispatch<SetStateAction<boolean>>) => {
  useEffect(() => {
    const hideMenuOnOutsideClick = (e: MouseEvent) => {
      if (!document.getElementById(id)?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", hideMenuOnOutsideClick);

    return () => window.removeEventListener("click", hideMenuOnOutsideClick);
  }, [id, setOpen]);
};

export default useCloseOnOutsideClick;
