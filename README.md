# Simbrella Vault

Modular API-first architecture for Simbrella Vault challenge.
simbrella-vault/
├── frontend/ # Next.js + Tailwind
├── backend/
│ ├── src/
│ │ ├── modules/
│ │ │ ├── auth/ # Login, signup, JWT
│ │ │ ├── users/ # User profile, roles
│ │ │ ├── wallets/ # Create, switch, view wallets
│ │ │ ├── transactions/ # Send, receive, history
│ │ │ ├── services/ # Airtime, data, utility APIs
│ │ │ └── admin/ # Approvals, logs, system stats
│ │ ├── middlewares/ # Auth, logging, rate limiting
│ │ ├── utils/ # Helpers (e.g. currency, analytics)
│ │ ├── config/ # Environment, DB, constants
│ │ └── main.ts # Express app entry point
│ ├── prisma/ # Schema, migrations, seeders
│ └── Dockerfile
├── docker/
│ └── docker-compose.yml
├── ci-cd/
│ └── github-actions.yml
├── docs/
│ └── architecture-diagram.png
└── README.md

Structure for Frontend

app/
  ├── (auth)/login/page.tsx
  ├── (auth)/signup/page.tsx
  ├── dashboard/page.tsx
  ├── wallets/page.tsx
  ├── transactions/page.tsx
  ├── analytics/page.tsx
  ├── admin/(users|logs|services)/...
components/
  ├── Navbar.tsx
  ├── WalletCard.tsx
  ├── ServiceCard.tsx
lib/
  ├── api.ts           # axios base
  ├── auth.ts          # token utils
  ├── hooks/           # useUser, useWallet
  ├── validators/      # Zod schemas
