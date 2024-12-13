import React from 'react';
import ReactDOM from 'react-dom';

export type ContextMenuProps = {
  elementRef?: React.RefObject<any>;
  offsetX?: number;
  offsetY?: number;
  children?: React.ReactNode;
};

function ContextMenu(props: ContextMenuProps) {
  const appRoot = document.getElementById('contextmenu') as HTMLElement;
  const [showMenu, setShowMenu] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const close = React.useCallback(
    (ev: CustomEvent) => {
      if (props.elementRef == null || props.elementRef.current == null) return;

      if (ev.detail && ev.detail.ref === props.elementRef.current) return;

      setShowMenu(false);
      document.removeEventListener('click', close as EventListener);
      document.removeEventListener('contextmenu_close', close as EventListener);
    },
    [props.elementRef]
  );

  const closeOtherContextMenus = React.useCallback(() => {
    const event = new CustomEvent('contextmenu_close', {
      detail: {
        ref: props.elementRef?.current
      }
    });

    document.dispatchEvent(event);
  }, [props.elementRef]);

  const open = React.useCallback(
    (ev: React.MouseEvent) => {
      ev.preventDefault();
      ev.stopPropagation();

      const offsetX = ev.pageX;
      const offsetY = ev.pageY;

      setPosition({ x: offsetX - 50, y: offsetY - 50 });
      setShowMenu(true);

      closeOtherContextMenus();

      document.addEventListener('click', close as EventListener);
      document.addEventListener('contextmenu_close', close as EventListener);
    },
    [close, closeOtherContextMenus, props.offsetX, props.offsetY]
  );

  React.useEffect(() => {
    if (props.elementRef == null || props.elementRef.current == null) return;

    props.elementRef.current.addEventListener('contextmenu', open);

    return () => {
      document.removeEventListener('click', close as EventListener);
      document.removeEventListener('contextmenu_close', close as EventListener);
    };
  }, [close, open, props.elementRef]);

  if (!showMenu) return null;

  function handleOnMouseDown(event: React.MouseEvent<HTMLUListElement>) {
    event.stopPropagation();
  }

  return ReactDOM.createPortal(
    <ul
      className="dropdown-menu show"
      style={{ position: 'absolute', zIndex: 4, left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleOnMouseDown}
    >
      {props.children}
    </ul>,
    appRoot
  );
}

export default ContextMenu;
