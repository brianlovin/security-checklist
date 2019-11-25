// @flow
// $FlowIssue
import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import { ThemeProvider } from 'styled-components';
import { throttle } from 'throttle-debounce';
import Icon from '../Icon';
import Header from '../Header';
import Footer from '../Footer';
import { theme } from '../theme';
import {
  Container,
  SectionHeading,
  Heading,
  Subheading,
  InnerContainer,
  ScrollToTop,
} from './style';
import { getLocalStorageLength } from '../../lib/localStorage';
import data from '../../config/data';

export { SectionHeading, Heading, Subheading };

type Props = {
  children: Node,
  displayProgress: boolean,
};

const totalItemsCount = Object.keys(data).length;

export default function Page(props: Props) {
  const { children, displayProgress } = props;
  const [showHeaderShadow, setHeaderShadow] = useState(false);
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);

  function handleScroll() {
    const headerShadowState = window && window.pageYOffset > 0;
    const scrollToTopState = window && window.pageYOffset > 240;
    setHeaderShadow(headerShadowState);
    setScrollToTopVisible(scrollToTopState);
  }

  const throttledScroll = throttle(300, handleScroll);

  function updateProgress() {
    const checkedItemsCount = getLocalStorageLength();
    const progressPercentage = (checkedItemsCount * 100) / totalItemsCount;
    setProgress(progressPercentage);
    setCurrentCount(checkedItemsCount);
  }

  const scrollToTop = () => {
    if (window) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    updateProgress();

    if (window) {
      window.addEventListener('scroll', throttledScroll);
    }

    return () => {
      if (window) {
        window.removeEventListener('scroll', throttledScroll);
      }
    };
  }, [progress]);

  useEffect(() => {
    if (window && displayProgress) {
      window.addEventListener('storage:updated', updateProgress);
    }
    return () => {
      if (window && displayProgress) {
        window.removeEventListener('storage:updated', updateProgress);
      }
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <style>{`
          :root {
            --progress: ${progress ? 100 - progress : 100}%;
          }
        `}
        </style>

        <Header
          showHeaderShadow={showHeaderShadow}
          displayProgress={displayProgress}
          totalItemsCount={totalItemsCount}
          currentCount={currentCount}
        />
        <InnerContainer>{children}</InnerContainer>
        <Footer />
        <ScrollToTop
          isVisible={scrollToTopVisible}
          onClick={scrollToTop}
          type="button"
        >
          <Icon glyph="view-forward" size={32} />
        </ScrollToTop>
      </Container>
    </ThemeProvider>
  );
}
