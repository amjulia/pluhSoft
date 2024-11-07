import { useEffect } from 'react';
import PropTypes from 'prop-types';
import mermaid from 'mermaid';

const MermaidDiagram = ({ chart }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className="mermaid">
      {chart}
    </div>
  );
};
MermaidDiagram.propTypes = {
  chart: PropTypes.string.isRequired, 
};
export default MermaidDiagram;


