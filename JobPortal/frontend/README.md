# JobPortal Frontend

JobPortal is a web application built with React and Tailwind CSS for managing job postings, applications, and employer profiles. It includes features for both job seekers and employers.

### Before Getting Started:

- Ensure that Node.js is installed on your system.
- Configure the backend server (make sure it is running) and create a `.env` file based on the `.env.example` file.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## File Structure

```shell
   api/
      data/
         index.ts
   app/
      (routeGroup)/
         _layout.tsx
         aScreen/
            index.tsx
   assets/
      fonts/
      images/
   components/
      navigation/
      ui/
      OtherMiscComponents/
   constants/
   context/
   hooks/
   mock/
   sections/
      SomeSection/
         components/
         layout/
   types/
   utils/

...other config files
```

## Associated Files

- [Figma Design Link](https://www.figma.com/design/Sk4DsZNv8UKzkYQmZH0b8T/React-Native-Projects%2FJobPortal%2Ffrontend?node-id=0-1&t=0ZMjbIYov8LDARFk-1)
