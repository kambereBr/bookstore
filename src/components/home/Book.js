import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/booksSlice';
import Button from './Button';
import styles from '../../styles/Book.module.css';

const Book = ({
  id, title, category, author,
}) => {
  const dispatch = useDispatch();

  const delBook = (id) => {
    dispatch(deleteBook(id));
  };

  const perc = Math.floor(Math.random() * 101);
  const chapters = ['Chapter 17', 'Chapter 3: A Lesson Learned', 'Chapter 18', 'Introduction', 'Chapter 9'];
  const chapter = chapters[Math.floor(Math.random() * chapters.length)];

  return (
    <div className={styles.bookItem}>
      <section className={styles.section}>
        <div className={styles.BooInfo}>
          <header className={styles.CardHeader}>
            <span className={styles.categoryBook}>{category}</span>
            <h2 className={styles.bookTitle}>{title}</h2>
            <span className={styles.bookAuthor}>{author}</span>
          </header>
          <div className={styles.actionContainer}>
            <ul className={styles.actionUl}>
              <li className={styles.actionLi}>
                <button type="button" className={styles.actionButtons}>
                  Comments
                </button>
              </li>
              <span className={styles.lilLine} />
              <li className={styles.actionLi}>
                <Button className={`delete-button ${styles.actionButtons}`} event={() => delBook(id)} label="Remove" />
              </li>
              <span className={styles.lilLine} />
              <li className={styles.actionLi}>
                <button type="button" className={styles.actionButtons}>
                  Edit
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.progressStatus}>
          <div className={styles.progressCircleContainer}>
            <span className={styles.progressCircle} />
          </div>
          <div className={styles.completedContainer}>
            <span className={styles.percentage}>{`${perc}%`}</span>
            <span>Completed</span>
          </div>
        </div>
        <span className={styles.bigLine} />
        <div className={styles.readerState}>
          <h4 className={styles.currentChapter}>Current chapter</h4>
          <p className={styles.chapiter}>{chapter}</p>
          <button type="button" className={styles.buttonUpdate}>Update progress</button>
        </div>
      </section>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
