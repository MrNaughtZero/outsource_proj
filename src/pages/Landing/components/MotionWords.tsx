import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';

// Keep the existing colour spans, line breaks and real text intact. Each word
// gets its own entrance, as in the MKS reference, without duplicating headings.
export default function MotionWords({ children }: { children: ReactNode }) {
  function split(nodes: ReactNode): ReactNode {
    return Children.map(nodes, node => {
      if (typeof node === 'string') {
        return node.split(/(\s+)/).map((word, index) =>
          /\S/.test(word) ? <span className="home-motion-word" key={index}>{word}</span> : word,
        );
      }
      if (isValidElement<{ children?: ReactNode }>(node) && node.props.children) {
        return cloneElement(node as ReactElement<{ children?: ReactNode }>, {}, split(node.props.children));
      }
      return node;
    });
  }

  return <>{split(children)}</>;
}
