import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Filter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryRow}>
        <View style={styles.categoryCard}>
          <Image
            source={require('../../assets/images/food1.jpg')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Pizza</Text>
        </View>

        <View style={styles.categoryCard}>
          <Image
            source={require('../../assets/images/food2.jpg')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Burgers</Text>
        </View>

        <View style={styles.categoryCard}>
          <Image
            source={require('../../assets/images/food3.jpg')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Steak</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.link}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemCard}>
        <Image
          source={require('../../assets/images/food1.jpg')}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>Food 1</Text>
        <Text style={styles.itemSub}>By Viet Nam</Text>
        <Text style={styles.price}>1$</Text>
      </View>

      <View style={styles.itemCard}>
        <Image
          source={require('../../assets/images/food2.jpg')}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>Food 2</Text>
        <Text style={styles.itemSub}>By Viet Nam</Text>
        <Text style={styles.price}>3$</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended</Text>
        <TouchableOpacity>
          <Text style={styles.link}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemCard}>
        <Image
          source={require('../../assets/images/food3.jpg')}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>Food 3</Text>
        <Text style={styles.itemSub}>10% OFF</Text>
        <Text style={styles.price}>2$</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  searchRow: {
    marginBottom: 18,
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  link: {
    color: '#f0a000',
    fontWeight: '600',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 8,
  },
  categoryCard: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 70,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontWeight: '600',
    color: '#333',
  },
  itemCard: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  itemImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  itemSub: {
    color: '#666',
    marginBottom: 6,
  },
  price: {
    color: '#111',
    fontWeight: '700',
  },
});