import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'services/i18n';

const Article = ({ params }) => (
  <article dangerouslySetInnerHTML={{ __html: i18n.t('article:text', { articleId: params.id }) }} />
);

Article.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string
  })
};

export default Article;
