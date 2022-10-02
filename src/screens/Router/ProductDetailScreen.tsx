import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import DetailCard from '@common/DetailCard';

const ProductDetailScreen = ({ route }: any) => {
    const { product } = route.params

    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            {
                product && (
                    <DetailCard
                        title={product?.name}
                        image={{ uri: product?.avatar }}
                        price={`$ ${product?.price} `}
                        detail={product?.description}
                    />
                )
            }
        </ScrollView>
    );
}

export default ProductDetailScreen;