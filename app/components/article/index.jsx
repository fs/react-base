import React from 'react';
import PropTypes from 'prop-types';
import { Interpolate } from 'react-i18next';

const Article = ({ params }) => (
  <article>
    <Interpolate
      i18nKey="article:text"
      useDangerouslySetInnerHTML={ true }
      articleId={ params.id }
    />
  </article>
);

Article.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  })
};

export default Article;
