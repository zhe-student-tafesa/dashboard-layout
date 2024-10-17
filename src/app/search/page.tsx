'use client'
import React, { useState } from 'react'
import styles from './search.module.css'

const TabPage = () => {
  const [toggle, setToggle] = useState(1)
  const handleToggle = (index: number) => {
    setToggle(index);
  }
  return (
    <div className={styles.container}>
      <div className={styles.blocTabs}>
        <button
          type='button'
          className={`${styles.tabs}  ${toggle === 1 && styles.activeTabs}`}
          onClick={() => handleToggle(1)}
        >
          Tab 1
        </button>
        <button
          type='button'
          className={`${styles.tabs}  ${toggle === 2 && styles.activeTabs}`}
          onClick={() => handleToggle(2)}
        >
          Tab 2
        </button>
        <button
          type='button'
          className={`${styles.tabs}  ${toggle === 3 && styles.activeTabs}`}
          onClick={() => handleToggle(3)}
        >
          Tab 3
        </button>
      </div>

      <div className={styles.contentTabs}>
        <div className={` ${styles.content}    ${toggle === 1 && styles.activeContent}  `}>
          <ComponentA />
        </div>
        <div className={` ${styles.content}    ${toggle === 2 && styles.activeContent}  `}>
          <ComponentB />
        </div>
        <div className={` ${styles.content}    ${toggle === 3 && styles.activeContent}  `}>
          <ComponentC />
        </div>
      </div>
    </div>
  )
}

export default TabPage


function ComponentA() {
  return (
    <>
      <h2>Content 1</h2>
      <hr />
      <p>
        111  111 Meta Box is a free Gutenberg and GDPR-compatible WordPress custom fields plugin and framework that makes quick work of customizing a website with—you guessed it—meta boxes and custom fields in WordPress. Follow the instruction below to get started!
      </p>
    </>
  );
}

function ComponentB() {
  return (
    <>
      <h2>Content 2</h2>
      <hr />
      <p>
        222  222 Meta Box is a free Gutenberg and GDPR-compatible WordPress custom fields plugin and framework that makes quick work of customizing a website with—you guessed it—meta boxes and custom fields in WordPress. Follow the instruction below to get started!
      </p>
    </>
  );
}

function ComponentC() {
  return (
    <>
      <h2>Content 3</h2>
      <hr />
      <p>
        333  333 Meta Box is a free Gutenberg and GDPR-compatible WordPress custom fields plugin and framework that makes quick work of customizing a website with—you guessed it—meta boxes and custom fields in WordPress. Follow the instruction below to get started!
      </p>
    </>
  );
}