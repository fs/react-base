import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'services/i18n';

const Article = ({ match: { params }}) => (
  <article dangerouslySetInnerHTML={{ __html: i18n.t('article:text', { articleId: params.id }) }} />
);

Article.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Article;
