import React from 'react';
import { DiAngularSimple, DiFirebase, FiFigma, DiReact, DiCodeigniter } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I'm an aspiring software engineer with a wide range of experiences from two previous internships and design teams
  </SectionText>
  <List>
    <ListItem>
      <span>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <picture>
        <DiAngularSimple size="3rem" />
      </picture>
      </span>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiece with <br />
          React.js & Angular
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Toolkit</ListTitle>
        <ListParagraph>
          Experience with <br />
          tools like Firebase and postman
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiCodeigniter size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Web3</ListTitle>
        <ListParagraph>
          Aspiring to learn <br />
          various web3 technologies
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
