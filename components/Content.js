import PropTypes from 'prop-types';

function Content(props) {
  const { content } = props;
  return (
    // eslint-disable-next-line react/no-danger
    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
  );
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
