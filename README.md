# RN AES256 Dashboard

A React Native mobile application built with Expo that demonstrates AES-256 encryption/decryption functionality with a user dashboard interface.

## 📱 Features

- **User Management**: List and view user details
- **AES-256 Encryption**: Secure data handling using AES-256-GCM encryption
- **Clean Architecture**: Organized codebase following Clean Architecture principles
- **State Management**: Redux Toolkit for efficient state management
- **Modern UI**: Beautiful interface with loading skeletons and animations

## 🏗️ Architecture

The project follows **Clean Architecture** with three main layers:

```
src/
├── domain/           # Business logic layer
│   ├── entities/     # Business entities (User)
│   ├── repositories/ # Repository interfaces
│   └── usecases/     # Use cases (GetUsers, GetUserById)
├── data/             # Data layer
│   ├── http/         # HTTP client implementation
│   ├── mappers/      # Data mappers
│   ├── models/       # API models
│   ├── repositories/ # Repository implementations
│   ├── services/     # External services
│   ├── sources/      # Data sources
│   └── utils/        # Utility functions (crypto helpers)
├── presentation/     # Presentation layer
│   ├── components/   # Reusable UI components
│   ├── hooks/        # Custom hooks
│   ├── navigation/   # Navigation configuration
│   ├── screens/      # App screens
│   ├── store/        # Redux store and slices
│   └── theme/        # Theme configuration
└── main/             # Dependency injection container
```

## 🛠️ Tech Stack

- **Framework**: React Native with Expo SDK 54
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation 7
- **Testing**: Jest with React Native Testing Library
- **Encryption**: react-native-quick-crypto (AES-256-GCM)
- **Storage**: react-native-mmkv
- **Animations**: react-native-reanimated, Moti
- **UI Components**: @shopify/flash-list, expo-linear-gradient

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rn-aes256-dashboard
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Configure environment variables:
   Create a `.env` file in the root directory:

```env
API_URL=https://your-api-url.com
```

### Running the App

#### Development

```bash
# Start Metro bundler
yarn start

# Run on Android
yarn android

# Run on iOS
yarn ios

# Run on Web
yarn web
```

## 📁 Project Structure

### Components

| Component   | Description                               |
| ----------- | ----------------------------------------- |
| `Button`    | Custom button component                   |
| `List`      | FlashList wrapper for efficient rendering |
| `ListEmpty` | Empty state component                     |
| `ListItem`  | List item component                       |
| `Skeleton`  | Loading skeleton placeholder              |

### Screens

| Screen              | Description                   |
| ------------------- | ----------------------------- |
| `HomeScreen`        | Main dashboard with user list |
| `UserDetailsScreen` | Individual user details view  |

### Use Cases

| Use Case             | Description                 |
| -------------------- | --------------------------- |
| `GetUsersUseCase`    | Fetches all users           |
| `GetUserByIdUseCase` | Fetches a single user by ID |

## 🧪 Testing

The project follows **Clean Architecture** testing principles with a focus on testing business logic independently of external dependencies.

### Testing Philosophy

```
┌─────────────────────────────────────────────────────────────┐
│                    TEST PYRAMID                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                        ┌─────────┐                           │
│                       │  E2E    │  (Not implemented)         │
│                      └─────────┘                            │
│                   ┌───────────────┐                          │
│                  │  Integration  │  (Data layer tests)      │
│                 └───────────────┘                           │
│              ┌─────────────────────┐                         │
│             │     Unit Tests      │  (Domain use cases)     │
│            └─────────────────────┘                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Test Structure by Layer

| Layer            | Location                         | Description                              |
| ---------------- | -------------------------------- | ---------------------------------------- |
| **Domain**       | `src/domain/usecases/__tests__/` | Tests use cases with mocked repositories |
| **Data**         | `src/data/*/__tests__/`          | Tests HTTP clients, crypto utilities     |
| **Presentation** | `src/presentation/*/__tests__/`  | (Reserved for component tests)           |

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

### Example: Domain Layer Test

Tests use **dependency injection** to mock repository interfaces:

```typescript
describe('GetUserByIdUseCase', () => {
    it('should return user when found', async () => {
        const mockRepository = {
            getUsers: jest.fn().mockResolvedValue(mockUsers),
        };

        const useCase = new GetUserByIdUseCase(mockRepository);
        const result = await useCase.execute('1');

        expect(result).toEqual(mockUsers[0]);
    });
});
```

### Test Conventions

- **Naming**: `{feature}.test.ts` or `{feature}.spec.ts`
- **Mocking**: External dependencies are mocked, not real implementations
- **Isolation**: Each test is independent and can run in parallel
- **Coverage**: Aim for high coverage on domain and data layers

## 📝 Available Scripts

| Script          | Description                    |
| --------------- | ------------------------------ |
| `start`         | Start Expo development server  |
| `android`       | Run on Android device/emulator |
| `ios`           | Run on iOS simulator           |
| `web`           | Run in web browser             |
| `test`          | Run Jest tests                 |
| `test:watch`    | Run tests in watch mode        |
| `test:coverage` | Run tests with coverage        |

## 🔐 Encryption

The project uses AES-256-GCM encryption for secure data handling. The crypto utilities are located in `src/data/utils/`:

- `cryptoHelpers.ts` - Key import and conversion utilities
- `decryptAES256.ts` - Decryption logic

### Usage Example

```typescript
import { importKey, base64ToUint8Array } from '@data/utils/cryptoHelpers';
import { decryptAES256 } from '@data/utils/decryptAES256';

const encryptedData = 'base64-encoded-encrypted-data';
const key = 'your-encryption-key';

const decrypted = await decryptAES256(encryptedData, key);
```

## 📄 License

MIT License

## 👤 Author

Your Name
