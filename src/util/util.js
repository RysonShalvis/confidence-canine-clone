import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const useTransitionOnce = (updateClass) => {
  const [addClassNames, setAddClassNames] = useState(updateClass);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) setAddClassNames(`${updateClass} transition`);
  }, [inView]);

  return [addClassNames, ref];
};

export { useTransitionOnce };
