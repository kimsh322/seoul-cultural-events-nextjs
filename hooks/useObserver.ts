import { RefObject, useEffect } from "react";

interface ObserverParameter {
  target: RefObject<HTMLDivElement>;
  callback: any;
  root?: Element | Document | null | undefined;
  rootMargin?: string;
  threshold?: number;
}

interface UseObserver {
  ({ target, callback, root, rootMargin, threshold }: ObserverParameter): void;
}

export const useObserver: UseObserver = ({
  target, // div Ref
  callback, // 감지시 실행될 callback
  root = null, // 교차할 부모 요소, 아무것도 넘기지 않으면 document가 기본이다.
  rootMargin = "0px", // root와 target이 감지하는 여백의 거리
  threshold = 1.0, // 임계점. 1.0이면 root내에서 target이 100% 보여질 때 callback이 실행된다.
}) => {
  useEffect(() => {
    let observer: IntersectionObserver;
    if (target && target.current) {
      observer = new IntersectionObserver(callback, { root, rootMargin, threshold });
      // element가 들어있는 current 관측
      observer.observe(target.current);
    }

    // observer를 사용하는 컴포넌트가 해제되면 observer 비활성화
    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold]);
};
