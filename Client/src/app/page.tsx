import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://ennekingsystemsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            src="/EnnekingSS_Logo_Full.png"
            alt="ESS Logo"
            width={300}
            height={136}
          />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>Angry Old She Dev</h1>
        &nbsp;
        <h3>An AI Inspired Blog</h3>
      </div>

      <div className={styles.grid}>
        <a
          href="/blogs"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Angry AI Blogs <span>-&gt;</span>
          </h2>
          <p>Complaints of a slightly mad woman.</p>
        </a>


      </div>
      <div className={styles.grid}>
        <a
          href="/blogs"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learning <span>-&gt;</span>
          </h2>
          <p>Walk through my learning journey with me.</p>
        </a>
      </div>
    </main>
  )
}
