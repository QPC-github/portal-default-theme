import React from '@portal/react';
import { PageWrapper } from '@theme/Markdown/PageWrapper';
import { ContentWrapper } from '@theme/Markdown/ContentWrapper';

export function MarkdownLayout({ tableOfContent, markdownWrapper }) {
  return (
    <PageWrapper>
      <ContentWrapper withToc={true}>{markdownWrapper}</ContentWrapper>
      {tableOfContent}
    </PageWrapper>
  );
}