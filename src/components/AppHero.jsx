import { PropTypes } from 'prop-types';
const AppHero = (props) => {
  return (
    <section className='center h-40 bg-gradient-to-r bg-gradient-to-r from-gray-900 to-gray-800' >
      <div className="container p-4">
        <h1 className='text-center font-bold text-4xl text-gray-300 p-4'>{props.title}</h1>
      </div>
    </section>
  );
};

AppHero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AppHero;
