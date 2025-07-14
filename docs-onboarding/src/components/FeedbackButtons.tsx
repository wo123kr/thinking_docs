import React, { useState } from 'react';
import styles from './FeedbackButtons.module.css';

const FEEDBACKS = [
  { emoji: '😊', label: '좋아요' },
  { emoji: '😐', label: '보통이에요' },
  { emoji: '😞', label: '아쉬워요' },
];

export default function FeedbackButtons() {
  const [selected, setSelected] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (idx: number) => {
    setSelected(idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: 이벤트 트래킹/서버 전송 등
  };

  return (
    <div className={styles.floatingFeedbackBox}>
      <div className={styles.feedbackInlineTitle}>Was this helpful?</div>
      <div className={styles.feedbackButtons}>
        {FEEDBACKS.map((item, idx) => (
          <button
            key={item.emoji}
            className={
              styles.feedbackButton + (selected === idx ? ' ' + styles.selected : '')
            }
            aria-label={item.label}
            onClick={() => handleClick(idx)}
            tabIndex={0}
            type="button"
          >
            <span className={styles.emoji}>{item.emoji}</span>
          </button>
        ))}
      </div>
      {selected !== null && !submitted && (
        <form className={styles.feedbackForm} onSubmit={handleSubmit}>
          <textarea
            className={styles.feedbackTextarea}
            placeholder="Anything you'd like to add?"
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows={3}
            maxLength={300}
          />
          <button className={styles.submitButton} type="submit">Submit</button>
        </form>
      )}
      {submitted && (
        <div className={styles.thankYouMsg}>Thank you!</div>
      )}
    </div>
  );
} 