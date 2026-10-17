const appJson = require("./app.json");

export default {
  expo: {
    ...appJson.expo,
    ios: {
      ...(appJson.expo?.ios || {}),
      infoPlist: {
        ...(appJson.expo?.ios?.infoPlist || {}),
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    extra: {
      ...(appJson.expo?.extra || {}),
      posthogProjectToken: process.env.EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN,
      posthogHost: process.env.EXPO_PUBLIC_POSTHOG_HOST,
      eas: {
        projectId: "d9606a99-2f04-4df4-9910-a362516875a3",
      },
    },
  },
};
