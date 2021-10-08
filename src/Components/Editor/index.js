import React, { Suspense, lazy } from "react";

export default function index(props) {
  const QuillComponent = lazy(() => import("./QuillComponent"), {
    ssr: false,
  });
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <QuillComponent {...props} />
      </Suspense>
    </div>
  );
}
