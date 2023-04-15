import { SectionAbout, LeftSideSection, RightSideSection } from './AboutStyle';
import aboutImage from './../../assets/about.jpg';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <SectionAbout id="about">
      <LeftSideSection
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div>
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </LeftSideSection>
      <RightSideSection
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <img
          src={aboutImage}
          alt="photo of a tattoo artist hold a tattoo machine"
        />
      </RightSideSection>
    </SectionAbout>
  );
};

export default About;
