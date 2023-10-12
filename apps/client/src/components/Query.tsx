import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

type QueryProps = {
  loading: boolean;
  error?: Error | string;
};

const defaultNumberOfLines = 4;
const mt = 16;
const spacing = 16;
const height = 8;
const divisible = mt + spacing + height;

export const Query = ({
  children,
  error,
  loading,
}: PropsWithChildren<QueryProps>) => {
  const [numberOfLines, setNumberOfLines] = useState(defaultNumberOfLines);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const child = elementRef.current;
    if (child) {
      const parent = child.parentElement;
      if (parent) {
        const parentHeight = parent.clientHeight;
        const numberOfLines = parentHeight
          ? Math.round(parentHeight / divisible)
          : 10;
        setNumberOfLines(numberOfLines);
      }
    }
  }, [loading]);

  if (loading) {
    return (
      <Box ref={elementRef} padding="6">
        <SkeletonCircle size="10" />
        <SkeletonText
          mt={`${mt}px`}
          noOfLines={numberOfLines}
          spacing={`${spacing}px`}
          skeletonHeight={`${height}px`}
        />
      </Box>
    );
  }
  if (error) {
    let err = '';
    if (error instanceof Error) {
      err = error.message;
    } else {
      err = error;
    }
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{err}</AlertDescription>
      </Alert>
    );
  }

  return <>{children}</>;
};
