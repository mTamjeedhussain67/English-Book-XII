import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// ─── Data ────────────────────────────────────────────────────
const units = [
  {
    id: '01',
    category: 'Prose',
    title: 'Trustworthiness & Tolerance',
    subtitle: '"The Devoted Friend" by Oscar Wilde',
    link: '/docs/unit-1-1',
  },
  {
    id: '02',
    category: 'Prose',
    title: 'Contribution of World Leaders',
    subtitle: '"I Have a Dream" by Dr. Martin Luther King Jr.',
    link: '/docs/unit-2-1',
  },
  {
    id: '03',
    category: 'Prose',
    title: 'Managing Stress, Anger & People',
    subtitle: '"Conquest of Happiness" by Bertrand Russell',
    link: '/docs/unit-3-1',
  },
  {
    id: '04',
    category: 'Prose',
    title: 'Self-Discipline',
    subtitle: '"Icarus and Daedalus" by Josephine Preston Peabody',
    link: '/docs/unit-4-1',
  },
  {
    id: '05',
    category: 'Prose',
    title: 'Character Building',
    subtitle: '"How Much Land Does a Man Need?" by Leo Tolstoy',
    link: '/docs/unit-5-1',
  },
  {
    id: '06',
    category: 'Prose',
    title: 'Civic Responsibilities',
    subtitle: '"The Day the Dam Broke" by James Groves Thurber',
    link: '/docs/unit-6-1',
  },
  {
    id: '07',
    category: 'Prose',
    title: 'Climate Change',
    subtitle: 'Climate Change: Its Causes and Effects',
    link: '/docs/unit-7-1',
  },
  {
    id: '08',
    category: 'Poetry',
    title: 'Poetry Section',
    subtitle: 'If · Allama Iqbal · Shakespeare · Neruda · Tennyson · Auden · Bhittai',
    link: '/docs/section-b',
  },
  {
    id: '09',
    category: 'Novel',
    title: 'Great Expectations',
    subtitle: 'Charles Dickens · Pip, Magwitch, Miss Havisham & Estella',
    link: '/docs/section-c',
  },
];


const stats = [
  { emoji: '📚', number: '9', label: 'Study Units' },

  { emoji: '🧪', number: '100', label: 'MCQs Included' },
  { emoji: '✍️', number: 'Sami Ul Huda', label: 'Prepared By' },
  { emoji: '🏢', number: 'Zee Collegiate', label: 'Coaching' },
];

// ─── Hero Section ─────────────────────────────────────────────
function HeroSection() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroInner}>
        <div className={styles.heroEyebrow}>
          📖 Class XII · English Notes
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          English Notes<br />
          <span>For Class XII</span>
        </Heading>
        <div className={styles.authorBadge}>
          <span>✍️ Prepared by: Sami Ul Huda</span>
          <span>Coaching: Zee Collegiate</span>
        </div>
        <p className={styles.heroSubtitle}>
          Comprehensive study notes with summaries, character analysis,
          key themes, practice questions, and MCQs — covering the complete curriculum.
        </p>

        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/unit-1-1"
          >
            Start Reading →
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/#all-units"
          >
            View All Units
          </Link>
        </div>
      </div>
    </header>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────
function StatsBar() {
  return (
    <div className={styles.statsBar}>
      <div className={styles.statsInner}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statEmoji}>{s.emoji}</span>
            <span className={styles.statText}>
              <span className={styles.statNumber}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Unit Card ────────────────────────────────────────────────
function UnitCard({ unit }) {
  return (
    <Link to={unit.link} className={styles.unitCard}>
      <div className={styles.cardTop}>
        <div className={styles.unitBadge}>{unit.id}</div>
        <span className={styles.cardCategory}>{unit.category}</span>
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {unit.title}
      </Heading>
      <p className={styles.cardSubtitle}>{unit.subtitle}</p>
      <div className={styles.cardArrow}>
        View Notes <span>→</span>
      </div>
    </Link>
  );
}

// ─── Units Grid ───────────────────────────────────────────────
function UnitsSection() {
  return (
    <section className={styles.unitsSection} id="all-units">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Complete Curriculum</span>
        <Heading as="h2" className={styles.sectionTitle}>
          All Study Units
        </Heading>
      </div>
      <div className={styles.cardsGrid}>
        {units.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="English Notes For Class XII"
      description="Comprehensive Class XII English study notes — Prepared by: Sami Ul Huda | Coaching: Zee Collegiate."
    >
      <HeroSection />
      <StatsBar />
      <UnitsSection />
    </Layout>
  );
}
