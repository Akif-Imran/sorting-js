# Sorting & Searching Algorithms in TypeScript

This repository implements common sorting and searching algorithms in **TypeScript**, leveraging **Bun** as the package manager and runtime.

## 🚀 Features

- **Sorting Algorithms**: Bubble Sort, Merge Sort, Selection Sort  
- **Searching Algorithms**: Binary Search  
- **Unit Tests**: Each algorithm is covered with corresponding test cases  
- **Modern Stack**: TypeScript + Bun for fast execution and efficient development  

## 📂 Directory Structure
```
SORTING/
├── node_modules/         # Node dependencies (managed by Bun)
├── src/                  # Source code directory
│   ├── binary-search.ts    # Binary Search implementation (likely related to sorting verification)
│   ├── bubble-sort.ts      # Bubble Sort algorithm
│   ├── merge-sort.ts       # Merge Sort algorithm
│   ├── selection-sort.ts   # Selection Sort algorithm
│   └── index.ts            # Entry point of the project (likely for exports or usage examples)\
├── test/                 # Test directory
│   ├── binary-search.spec.ts # Unit tests for Binary Search
│   ├── bubble-sort.spec.ts   # Unit tests for Bubble Sort
│   ├── merge-sort.spec.ts    # Unit tests for Merge Sort
│   └── selection-sort.spec.ts# Unit tests for Selection Sort
├── .gitignore            # Specifies intentionally untracked files that Git should ignore
├── bun.lockb             # Records the exact versions of dependencies used (Bun lockfile)
├── bunfig.toml           # Bun project configuration file
├── package.json          # Project metadata and dependencies
├── README.md             # This README file
└── tsconfig.json         # TypeScript compiler configuration
```

## 🛠 Setup & Installation

### 1️⃣ Install Dependencies
Make sure you have **Bun** installed. If not, install it first:
```sh
curl -fsSL https://bun.sh/install | bash
```

## Clone the Repository

```sh
git clone https://github.com/yourusername/sorting-algorithms.git
cd sorting-algorithms
```

## Install Dependencies

```sh 
bun install
```

## ▶️ Running the Code

To execute a sorting algorithm, use:

```sh
bun run src/bubble-sort.ts
```

### ✅ Running Tests

To run unit tests, execute:

```sh
bun test
```

📜 License

This project has no License