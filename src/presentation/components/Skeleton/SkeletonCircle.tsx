import { Skeleton } from 'moti/skeleton';

type SkeletonCircleProps = {
    size?: number;
    colorMode: 'dark' | 'light' | undefined;
    radius?: number | 'round' | 'square' | undefined;
};

export const SkeletonCircle: React.FC<SkeletonCircleProps> = ({ size, colorMode, radius }) => {
    return <Skeleton colorMode={colorMode} width={size} height={size} radius={radius} />;
};
