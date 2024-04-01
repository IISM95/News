import { Skeleton } from "../ui/Skeleton/Skeleton";
import { DirectionType, SkeletonType } from "../interfaces";

interface withSkeletonProps {
  isLoading: boolean;
}

const withSkeleton = <P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) => {
  return function withSkeleton(props: withSkeletonProps & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }
    return <Component {...(restProps as P)} />;
  };
};

export default withSkeleton;
