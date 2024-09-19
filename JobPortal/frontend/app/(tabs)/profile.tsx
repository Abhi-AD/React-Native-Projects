import Images from "@/components/icon/Images";
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import tw from "twrnc";
import { Menu, PineTree } from "iconoir-react-native";

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={tw`flex-row px-6 justify-between bg-[#02C39A]`}>
        <View style={tw`flex-row my-10`}>
          <Text style={tw`font-title text-[25px]`}>Job Tree</Text>
          <PineTree width={30} height={30} color="black" />
        </View>
        <Menu width={30} height={30} color="#000" />
      </View>

      {/* Profile Information */}
      <View style={styles.profileContainer}>
        <Image source={Images.avatar} className="w-6 h-6" />

        <Text style={styles.name}>Marian Hart</Text>
        <Text style={styles.title}>
          Director of Project Management, GoldenPhase Solar
        </Text>
        <Text style={styles.university}>Syracuse University - New York</Text>
        <Text style={styles.location}>
          Greater San Diego Area / 500+ connections
        </Text>
      </View>

      {/* Highlights Section */}
      <View style={styles.highlightsContainer}>
        <Text style={styles.sectionTitle}>Highlights</Text>
        <View style={styles.highlightItem}>
          <PineTree width={30} height={30} color="black" />

          <View>
            <Text style={styles.highlightText}>
              Marian has received Google Certification
            </Text>
            <Text style={styles.highlightSubText}>
              Google Project Management Certificate
            </Text>
          </View>
        </View>
      </View>

      {/* Work Experience Section */}
      <View style={styles.workContainer}>
        <Text style={styles.sectionTitle}>Work Experiences</Text>

        {/* Experience Item */}
        <View style={styles.experienceItem}>
          <PineTree width={30} height={30} color="black" />
          <View>
            <Text style={styles.experienceTitle}>Project Manager</Text>
            <Text style={styles.experienceSubTitle}>Full-time • 10 months</Text>
          </View>
        </View>

        <View style={styles.experienceItem}>
          <PineTree width={30} height={30} color="black" />

          <View>
            <Text style={styles.experienceTitle}>Junior Project Manager</Text>
            <Text style={styles.experienceSubTitle}>Full-time • 8 months</Text>
          </View>
        </View>

        <View style={styles.experienceItem}>
          <PineTree width={30} height={30} color="black" />
          <View>
            <Text style={styles.experienceTitle}>Project Manager Intern</Text>
            <Text style={styles.experienceSubTitle}>Full-time • 10 months</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menuIcon: {
    padding: 5,
  },
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  university: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#888",
  },
  highlightsContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  highlightItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  iconStyle: {
    marginRight: 15,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: "500",
  },
  highlightSubText: {
    fontSize: 14,
    color: "#888",
  },
  workContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  experienceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  experienceSubTitle: {
    fontSize: 14,
    color: "#888",
  },
});

export default Profile;
