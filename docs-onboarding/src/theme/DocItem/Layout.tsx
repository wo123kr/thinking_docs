import React from 'react';
import DocItemLayout from '@theme-original/DocItem/Layout';
import FeedbackButtons from '../../components/FeedbackButtons';
import TOC from '@theme/TOC';
import styles from './Layout.module.css';

export default function DocItemLayoutWithRightPanel(props) {
  // TOC가 있으면 TOC 아래에 FeedbackButtons, 없으면 FeedbackButtons만
  return (
    <div className={styles.docPageWithAside}>
      {/* 왼쪽/중앙/오른쪽 구조: DocItemLayout는 중앙 본문만 렌더 */}
      <div className={styles.docMainContent}>
        <DocItemLayout {...props} />
      </div>
      <aside className={styles.rightPanel}>
        <div className={styles.rightPanelInner}>
          <TOC {...props} />
          <div className={styles.feedbackBelowToc}>
            <FeedbackButtons />
          </div>
        </div>
      </aside>
    </div>
  );
} 