import * as React from 'react';

const useBodyStyle = (className: string) => {
  const documentDefined = typeof document !== 'undefined';

  React.useEffect(() => {
    if (!documentDefined) return;

    document.body.classList.add(className);

    return () => {
      document.body.classList.remove(className);
    };
  }, []);
};

export default useBodyStyle;