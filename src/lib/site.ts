export const site = {
  name: "WakeApp",
  domain: "the-wakeapp.com",
  url: "https://the-wakeapp.com",
  shortDescription:
    "A personal execution system for attention, discipline, and focus.",
  longDescription:
    "Tasks, habits, calendar, focus, and screen time control — unified into one calm environment. Built for the people who refuse to drift.",
  appStore: "https://apps.apple.com/app/id6760942950",
  contactEmail: "contact@the-wakeapp.com",
  social: {
    twitter: "https://x.com/wakeapp",
    instagram: "https://instagram.com/wakeapp",
  },
} as const;

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Themes", href: "/#themes" },
  { label: "Focus", href: "/#focus" },
  { label: "Blackout", href: "/#blackout" },
  { label: "FAQ", href: "/#faq" },
] as const;
