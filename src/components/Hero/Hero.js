import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hi There<br />
        I'm Mathew
      </SectionTitle>
      <SectionText>
        Engineering student at the University of Waterloo 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;