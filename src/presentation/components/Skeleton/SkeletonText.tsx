import { Skeleton } from 'moti/skeleton';
import { DimensionValue } from 'react-native';

export type SkeletonTextProps = {
    width?: DimensionValue;
    height: number;
};

export const SkeletonText = ({ width = '100%', height }: SkeletonTextProps) => {
    return <Skeleton colorMode="dark" width={width} height={height} />;
};
