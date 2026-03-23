import { Main } from '../components/Main';
import { About } from '../components/About';
import { Timeline } from '../components/Timeline';
import { Offerts } from '../components/Offerts';
import { Sales } from '../components/Sales';
import { Carrousel } from '../components/Carrousel';

export default function Home() {
  return (
    <>
      <section id="main">
        <Main />
      </section>
      
      <section id="carrousel">
        <Carrousel />
      </section>

      <section id="offerts">
        <Offerts />
      </section>

      <section id="sales">
        <Sales />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="timeline">
        <Timeline />
      </section>
    </>
  );
}
