import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <section nopadding id="project">
    <SectionDivider />
    <SectionTitle main>projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <div>
          <BlogCard key={id}>
            <Img src={image} />
            <titleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
              <CardInfo>{description}</CardInfo>
              <div>
                <TagList>
                  { tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
                <UtilityList>
                  <ExternalLinks href={visit}>Github</ExternalLinks>
                </UtilityList>
                <br />
              </div>
            </titleContent>
          </BlogCard>
        </div>
      ))}
    </GridContainer>
  </section>
);

export default Projects;