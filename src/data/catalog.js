export const catalog = [
  {
    id: 'ashball',
    kind: 'game',
    title: 'AshBall',
    summary:
      'Fast-paced minimalist co-op platformer. Two players pass a single ball to survive as lava rises. Tight physics, reactive arenas, black-and-red aesthetic.',
    policy: '',
    website: 'https://store.steampowered.com/app/3799920/AshBall'
  },
  {
    id: 'lunire',
    kind: 'application',
    title: 'Lunire',
    summary:
      'Reading and writing platform to discover stories, publish content, and earn rewards.',
    policy: `Lunire — Privacy Policy 
Last updated: [November 25, 2025] 

Lunire (“we”, “our”, “us”) is a reading and writing platform that allows users to discover stories, publish their own content, and earn rewards. We are committed to protecting your privacy and ensuring a safe user experience. This Privacy Policy explains how we collect, use, and protect your information. 

Information We Collect 
1.1. Information You Provide 
We may collect: 

Username, email address, and password during account creation. 
User-generated content (stories, comments, images, titles, etc.). 
Support requests. 
Redeem request information (e.g., the email address for Gift Card delivery). 
CRITICAL FINANCIAL COMPLIANCE STATEMENT: We DO NOT collect national IDs, passport numbers, bank details, or sensitive personal financial information. However, to comply with global Anti-Money Laundering (AML) and security regulations regarding high-value reward redemptions, we reserve the right to require mandatory identity verification (e.g., phone or email confirmation) before processing gift card payouts that exceed a set internal threshold. 

Automatically Collected Information When using Lunire, we automatically collect: 
Device information (model, OS version). 
App usage data. 
Country (for localization). 
Log data (crashes, errors). 
Advertising & Analytics We use trusted third-party services: 
Google AdMob (ads). 
Firebase Analytics / Crashlytics (performance & crash reports). 
These partners may collect: 

Device identifiers. 
General location. 
Ad interactions. We do not share your personal content or account data with advertisers. 
How We Use Your Information We use your information to: 
Provide and improve app features. 
Personalize the reading experience. 
Process diamond rewards. 
Handle redeem requests. 
Detect fraud or abuse. 
Maintain app security and performance. 
Reward System: Closed-Loop Gift Card Redemption 
Lunire allows users to redeem Diamonds, which are virtual points and hold no real-world monetary value or cash equivalence, for digital rewards. 

Strict Limitation: These rewards are strictly limited to closed-loop Gift Cards (e.g., Amazon, Google Play, or other third-party retailers). 
Closed-Loop System (AML Compliance): We do not offer cash-out options, bank transfers, or conversion to any fiat currency or digital asset. This closed system is implemented to ensure compliance with Google's policies and minimize Anti-Money Laundering (AML) risks. 
We collect only the email address needed to deliver the gift card. 
We do not request Government identification or Tax information (unless legally required in your country and only upon explicit notification). 
Data Sharing We do not sell your personal data. We only share data with: 
Service providers (Firebase, AdMob). 
Payment / gift card delivery partners. 
Legal authorities, only if required by law. 
Children’s Privacy 
Lunire is not intended for children under 13 years old (or the minimum age required in your region). 
We do not knowingly collect data from children. 

Data Security 
We use: 

Encrypted communication (HTTPS). 
Secure servers. 
Strict access controls. However, no system is 100% secure, and users should protect their login credentials. 
Your Rights You may: 
Request account deletion. 
Request data export. 
Edit or update your information. 
Opt-out of personalized ads. To exercise your rights, contact us at: 
📩 [8kyaoo@gmail.com] 

Changes to This Policy 
We may update this policy from time to time. Changes will be posted within the app and on this page. Continued use of Lunire means you agree to the updated policy. 

Contact Us 
If you have questions, contact us at: 

📩 [8kyaoo@gmail.com] `,
    website: ''
  },
  {
    id: 'qrift',
    kind: 'application',
    title: 'QRift',
    summary:
      'Fast QR scanner and generator with photo editor, history, and optional bulk creation.',
    policy: `QRift — Privacy & Acceptable Use Policy 
Last updated: [December 3, 2025]

Overview
QRift is a QR code utility that lets users scan QR codes instantly, generate new codes (single or bulk), and place codes onto photos. QRift is designed to be fast, private, and easy to use.

Data Handling
• Scans are processed locally on the device camera feed; we do not upload the raw camera stream.
• Generated codes are created on-device. History is stored locally unless the user clears it.
• When placing QR on photos, the app requires media storage access only to read or save the edited image.
• We do not collect the content of your QR codes.

Permissions
• Camera: required for scanning.
• Photos/Storage: optional, for saving or editing images with QR overlays.

Advertising & Analytics
• Google AdMob is used for in-app advertising.
• Lightweight crash diagnostics may be used to improve stability.
• No sale of personal data; partners may receive anonymized device identifiers to serve ads or measure performance.

Premium Features
• Bulk Generator enables creating multiple QR codes at once.
• Premium removes ads and may unlock extended history access.

Acceptable Use
• Users must not generate or share illegal, harmful, or offensive content.
• No harassment, impersonation, or exploitation.
• Use QRift within the legal framework of your region and at your own risk.

Security
• All network calls use HTTPS.
• Sensitive operations are performed locally when possible.

Liability
Kyaoo is not liable for damages arising directly or indirectly from the use of QRift. By using QRift, you accept responsibility for your usage and compliance with local laws.

Contact
For questions or requests (including data deletion): 8kyaoo@gmail.com`,
    website: 'https://play.google.com/store/apps/details?id=com.kyaoo.qrift'
  }
]

export function getByKind(kind) {
  return catalog.filter((c) => c.kind === kind)
}

export function getById(id) {
  return catalog.find((c) => c.id === id)
}
