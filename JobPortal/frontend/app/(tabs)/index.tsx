import { Text, View, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Menu, PineTree, Search } from "iconoir-react-native";
import HeaderLayout from "@/components/ui/HeaderLayout";
import Container from "@/components/ui/Container";
import SearchBar from "@/components/ui/SearchBar";
import tw from "twrnc";
import JobList from "@/components/ui/JobList";
import { jobData } from "@/data/Jobs";

export default function HomeScreen() {
  const itemWidth = Dimensions.get("window").width - 40;
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView>
        <View style={tw`flex-row px-6 justify-between bg-[#02C39A]`}>
          <View style={tw`flex-row my-10`}>
            <Text style={tw`font-title text-[25px]`}>Job Tree</Text>
            <PineTree width={30} height={30} color="black" />
          </View>
          <Menu width={30} height={30} color="#000" />
        </View>
        <HeaderLayout
          title={undefined}
          description="Job Tree is the destination to find and list incredible remote jobs."
        />
        <View style={tw`mt-[-60px]`}>
          <Container>
            <SearchBar placeholder="Search jobs" Icon={Search} />
            <View style={tw`flex flex-col gap-1`}>
              <Text style={tw`text-md pl-6 font-sbold`}>Latest jobs</Text>
              <View>
                {jobData.map((job, index) => (
                  <JobList
                    key={index}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    isNew={job.isNew}
                  />
                ))}
              </View>
            </View>
          </Container>
        </View>
        <View style={tw`flex-row items-center`}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
