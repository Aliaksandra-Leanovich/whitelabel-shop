import { useCallback, useState } from "react";
import { IUseShowModalReturnValues } from "./types";

export const useShowModal = (): IUseShowModalReturnValues => {
  const [show, setShow] = useState(false);

  const showModal = useCallback(() => {
    setShow(!show);

    document.body.style.overflow = show ? "auto" : "hidden";
  }, [show]);

  return { show, showModal };
};
