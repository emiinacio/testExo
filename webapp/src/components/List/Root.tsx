import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

type RootProps = React.ComponentProps<any> & {
  children?: ReactNode;
};

export default function Root(props: RootProps) {
  return (
    <>
      <Container
        className={`d-flex flex-column align-items-center justify-content-center gap-3 p-3 h-auto ${props.className}`}
        fluid={'fluid'}
      >
        {props.children}
      </Container>
      <menu id="contextmenu" />
    </>
  );
}
