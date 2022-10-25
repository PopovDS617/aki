import { forwardRef } from 'react';
import CatSpinner from '../ui/CatSpinner';

export const ModelSpinner = () => <CatSpinner duration="1s" />;

// eslint-disable-next-line react/display-name
export const ModelContainer = forwardRef((props, ref) => (
  <div ref={ref} className="model-container">
    {props.children}
  </div>
));

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};

export default Loader;
