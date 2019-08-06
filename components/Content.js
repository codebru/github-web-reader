import PropTypes from 'prop-types';

function Content(props) {
  const { content } = props;
  return (
    <div>
      {content}
    </div>
  );
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
