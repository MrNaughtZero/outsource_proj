import type { HTMLAttributes } from 'react';
import MotionWords from './MotionWords';

type Props = HTMLAttributes<HTMLHeadingElement> & { as?: 'h1' | 'h2' };

export default function MotionHeading({ as: Tag = 'h2', children, className = '', ...props }: Props) {
  // Gradient headings retain their full text mask. Flex headings (including
  // accordion controls) retain their original children and layout.
  const words = !/gradient|\bflex\b/.test(className);
  return <Tag data-motion-delay={Tag === 'h1' ? 60 : undefined} {...props} className={className} data-motion={words ? 'words' : 'down'}>
    {words ? <MotionWords>{children}</MotionWords> : children}
  </Tag>;
}
