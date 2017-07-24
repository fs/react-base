import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'services/i18n';

const Article = ({ params }) => (
  <article dangerouslySetInnerHTML={ i18n.tHtml('article:text', { articleId: params.id }) } />
);

Article.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  })
};

export default Article;
