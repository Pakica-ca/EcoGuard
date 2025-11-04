# EcoGuard Project Structure

```
src/
├── App.tsx                     # Main application component
├── main.tsx                   # Application entry point
├── components/
│   ├── common/                # Shared components
│   │   ├── index.ts          # Common component exports
│   │   ├── BottomNav.tsx     # Navigation component
│   │   └── ImageWithFallback.tsx
│   └── ui/                   # UI library components (Radix UI based)
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       └── tooltip.tsx
├── screens/                   # Application screens
│   ├── index.ts              # Screen exports
│   ├── SplashScreen.tsx
│   ├── OnboardingScreen.tsx
│   ├── LoginScreen.tsx
│   ├── RegisterScreen.tsx
│   ├── HomeScreen.tsx
│   ├── ChallengesScreen.tsx
│   ├── StatisticsScreen.tsx
│   ├── CommunityScreen.tsx
│   ├── ProfileScreen.tsx
│   ├── SettingsScreen.tsx
│   ├── NotificationsScreen.tsx
│   └── EcoTipsScreen.tsx
├── styles/                 
│   ├── globals.css          
│   ├── index.css            
│   ├── App.css              
│   ├── BottomNav.css       
│   ├── SplashScreen.css    
│   ├── HomeScreen.css     
│   ├── LoginScreen.css     
│   └── ChallengesScreen.css 
└── utils/                   # Utility functions
    ├── utils.ts            
    └── use-mobile.ts      
```


