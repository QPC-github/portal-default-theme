import React from '@portal/react';
import styled from '@portal/styled-components';

interface PageLayoutProps {
  sidebar?: React.ReactNode;
}

export function PageLayout({ sidebar, children }: React.PropsWithChildren<PageLayoutProps>) {
  return (
    <Container>
      {sidebar}
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  flex: 1 0 0;
  /*
    flex-basis is ignored for nested flex in Chrome, need to set width
    See more here: https://stackoverflow.com/a/34355447
  */
  width: 0;
  max-width: 100%;
`;