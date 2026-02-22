import React, { useMemo } from 'react';
import { View } from 'react-native';

import { SkeletonCircle } from './SkeletonCircle';
import { SkeletonText } from './SkeletonText';
import { createStyles } from './styles';

interface SkeletonCardProps {
    repeat?: number;
}

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ repeat }) => {
    const styles = useMemo(() => createStyles(), []);

    const renderCard = (key?: number) => (
        <View key={key} style={styles.container}>
            <SkeletonCircle colorMode="dark" radius="round" size={50} />
            <View style={styles.textContainer}>
                <SkeletonText width="60%" height={20} />
                <SkeletonText width="40%" height={16} />
            </View>
        </View>
    );

    if (!repeat) {
        return renderCard();
    }

    return <>{Array?.from({ length: repeat }).map((_, index) => renderCard(index))}</>;
};
