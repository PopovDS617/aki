import { forwardRef } from 'react';
import CatSpinner from '../ui/CatSpinner';

export const ModelSpinner = () => <CatSpinner duration="1s" />;

export const ModelContainer = forwardRef(({ children }, ref) => (
  <div ref={ref} className="model-container">
    {children}
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
