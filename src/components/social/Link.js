import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';
import ReactGA from 'react-ga';

import * as icons from './icons';


const Container = styled.div`
  display: table;
`;

const Content = styled.a`
  display: flex;
  text-decoration:none;
  color: white;
  align-items: center;
`;

const Svg = styled(Isvg)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: .5rem;
  fill: white;
`;


const Link = ({link, icon, text, ...props}) =>
  <Container>
    <Content href={link} target='_blank'
      onClick={() => {
        ReactGA.event({
          category: 'SocialLink',
          action: `Click${icon[0].toUpperCase()}${icon.slice(1)}`,
        });
      }} {...props}
    >
      <Svg src={icons[icon]} alt={`${icon}_icon`} />
      {text}
    </Content>
  </Container>;

Link.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

Link.defaultProps = {
  link: null,
};

export default Link;
