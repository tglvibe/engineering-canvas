import { CourseEnhanced } from './types';

export const hceBlock101: CourseEnhanced = {
    id: "HCE BLOCK 101",
    titleKey: "courses.hceBlock101",
    descKey: "courses.hceBlock101Desc",
    icon: "🔗",
    duration: "6 weeks",
    languages: ["Solidity", "TypeScript", "JavaScript", "SQL", "Bash"],
    category: "high-code",
    programIds: ["HCE BLOCK", "HCE BACK"],
    trackId: "hce",
    level: "beginner",
    prerequisites: ["CORE CS 101", "HCE CYBER 101"],
    targetAudience: "Aspiring blockchain engineers and backend developers aiming to master the principles of decentralization, cryptographic consensus, and secure smart contract development on the Ethereum Virtual Machine (EVM).",
    learningOutcomes: [
        "Differentiate between various Consensus Architectures (PoW, PoS, pBFT) and their trade-offs",
        "Master the Cryptographic foundations of Web3 including Merkle Trees and Keccak-256 hashing",
        "Develop and deploy robust Smart Contracts using Solidity and the Hardhat development framework",
        "Implement core Token Standards including ERC-20 (Fungible) and ERC-721 (NFTs)",
        "Engineer Gas-Efficient code by understanding EVM storage layout and Opcode costs"
    ],
    modules: [
        {
            id: "HCE-BLOCK-101-M1",
            title: "Foundations: Hashing, Merkle Trees & Cryptography",
            description: "The mathematical backbone of immutable ledgers.",
            sequenceNumber: 1,
            estimatedHours: 10,
            topics: ["HCE-BLOCK-101-M1-T1", "HCE-BLOCK-101-M1-T2"],
            prerequisiteModuleIds: [],
            outcomes: [
                "Explain the Double Spending problem and how decentralized timestamps solve it",
                "Construct a Merkle Tree to verify data integrity in a distributed network",
                "Sign and verify transactions using Elliptic Curve Cryptography (ECDSA)"
            ]
        },
        {
            id: "HCE-BLOCK-101-M2",
            title: "Consensus Mechanisms: The Byzantine Generals",
            description: "How thousands of computers agree on a single truth.",
            sequenceNumber: 2,
            estimatedHours: 10,
            topics: ["HCE-BLOCK-101-M2-T1", "HCE-BLOCK-101-M2-T2"],
            prerequisiteModuleIds: ["HCE-BLOCK-101-M1"],
            outcomes: [
                "Contrast Proof of Work (PoW) security with Proof of Stake (PoS) energy efficiency",
                "Understand 'Finality' and 'Slashing' in modern dPoS networks",
                "Simulate a 51% attack and evaluate network resilience"
            ]
        },
        {
            id: "HCE-BLOCK-101-M3",
            title: "Solidity Programming: The Ethereum Virtual Machine (EVM)",
            description: "Writing code that is executed by the world.",
            sequenceNumber: 3,
            estimatedHours: 15,
            topics: ["HCE-BLOCK-101-M3-T1", "HCE-BLOCK-101-M3-T2"],
            prerequisiteModuleIds: ["HCE-BLOCK-101-M2"],
            outcomes: [
                "Write secure, state-managed Smart Contracts in Solidity",
                "Master the 'Gas' model: How the EVM charges for storage and logic",
                "Debug contracts using Hardhat and local blockchain forks"
            ]
        },
        {
            id: "HCE-BLOCK-101-M4",
            title: "Token Engineering & Asset Standards",
            description: "Programming value into digital primitives.",
            sequenceNumber: 4,
            estimatedHours: 15,
            topics: ["HCE-BLOCK-101-M4-T1", "HCE-BLOCK-101-M4-T2"],
            prerequisiteModuleIds: ["HCE-BLOCK-101-M3"],
            outcomes: [
                "Deploy a compliant ERC-20 token with custom minting and burning logic",
                "Mint on-chain and off-chain NFTs using the ERC-721 standard",
                "Architect decentralized governance using voting-locked tokens"
            ]
        },
        {
            id: "HCE-BLOCK-101-M5",
            title: "Distributed Interfacing: Ethers.js & RPCs",
            description: "Connecting the user to the decentralized web.",
            sequenceNumber: 5,
            estimatedHours: 10,
            topics: ["HCE-BLOCK-101-M5-T1", "HCE-BLOCK-101-M5-T2"],
            prerequisiteModuleIds: ["HCE-BLOCK-101-M4"],
            outcomes: [
                "Interface with decentralized nodes using Ethers.js and provider patterns",
                "Listen for and decode on-chain Events in a React frontend",
                "Implement secure MetaMask wallet connection and transaction signing"
            ]
        }
    ],
    topics: [
        {
            id: "HCE-BLOCK-101-M1-T1",
            moduleId: "HCE-BLOCK-101-M1",
            sequenceNumber: 1,
            title: "The Double Spending Problem & Decentralized Consensus",
            estimatedMinutes: 240,
            what: "Double Spending is the risk that a digital asset (like a $1 coin) could be spent more than once. Unlike physical cash, digital data can be copied perfectly at zero cost. Before blockchain, the only solution was a trusted central authority (like a Bank) that kept a private ledger of all balances.",
            why: "Blockchain solves this *without* a central authority. It uses a globally shared, immutable ledger. If a user tries to send the same coin to two different people, the network of thousands of nodes will reject the second transaction because the public ledger proves they no longer own the coin. This 'Trustless' system is the foundation of the entire Web3 economy.",
            when: "Every time you send a transaction, buy an NFT, or interact with a DeFi protocol.",
            how: "Transactions are grouped into 'Blocks'. Each block contains a 'Hash' of the previous block, creating a 'Chain'. Because everyone has a copy of the chain and agrees on the 'Longest Chain' rule (Consensus), no single person can change history or spend money they don't have.",
            ecosystem: "Bitcoin (The Origin), Ethereum (The Programmable Ledger), Solana (High-Performance), L2s (Scaling).",
            realWorld: "If a traditional bank's central database is hacked or corrupted, the system can lose track of who owns what money. In 2008, the global financial crisis proved that central authorities can fail. Bitcoin was launched as a direct response, providing a ledger that cannot be shut down by any single company or government.",
            useCases: [
                "Facilitating cross-border payments without a middleman (SWIFT alternative)",
                "Creating unique digital ownership for art and gaming assets (NFTs)",
                "Building decentralized insurance platforms where claims are paid by transparent code"
            ],
            advantages: [
                "Unstoppable: No central server to hack or shut down",
                "Transparent: Every transaction is public and auditable for all time",
                "Permissionless: Anyone with an internet connection can participate"
            ],
            disadvantages: [
                "Performance: Distributed consensus is much slower than a single SQL database",
                "Cost: Writing data to a decentralized network requires paying 'Gas' to the node operators"
            ],

            interviewTip: "If asked 'Why is a blockchain secure?', don't just say 'It's encrypted'. Say 'It's cryptographically linked and economically incentivized'. Explain that the cost to attack the network is higher than the reward for being honest.",
            resumeBullet: "Evaluated and implemented decentralized ledger architectures, successfully preventing double-spending vulnerabilities in an enterprise supply-chain pilot.",

            videos: [
                { type: "public", title: "But how does Bitcoin actually work?", author: "3Blue1Brown", views: "10M views", duration: "25:40", url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4" },
                { type: "public", title: "Merkle Trees Explained", author: "Codedamn", views: "100K views", duration: "12:15", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Coursera", rating: 4.8, title: "Blockchain Revolution Specialization", instructor: "INSEAD", enrolled: "200K+", duration: "40 hours", url: "https://www.coursera.org/specializations/blockchain-strategy-business-foundations" }
            ],
            blogs: [
                { type: "Core", title: "Bitcoin: A Peer-to-Peer Electronic Cash System", publisher: "Satoshi Nakamoto", readTime: "40 min", url: "https://bitcoin.org/bitcoin.pdf" }
            ],
            scenarios: [
                {
                    id: "1.1", difficulty: "Medium", title: "The Split Transaction", category: "Network Architecture", estimatedTime: "4 hours",
                    scenarioDescription: "A user tries to send their last 1.0 ETH to an exchange while simultaneously sending it to their friend's wallet. The network nodes receive both transactions at the exact same millisecond. How does the system decide which one is 'Real'?",
                    problemAnalysis: "In a centralized system, the server's CPU clock decide who hit 'Enter' first. In a decentralized system, there is no 'First'. Nodes might receive them in different orders. We need a way to 'Serialize' time without a central clock.",
                    architectureLayers: ["Network Gossip Layer", "Mempool (Transaction Pool)", "Consensus Layer"],
                    toolsAndTech: [{ name: "Probabilistic Finality (Nakamoto Consensus)", justification: "The transaction that gets into the 'Next Block' first becomes the truth. The other transaction becomes 'Invalid' because the sender now has 0 balance in the confirmed state. The 'Longest Chain' rule ensures that even if there is a temporary fork, the entire world eventually agrees on which transaction won." }],
                    tradeOffs: ["Users must wait for 'Confirmations' (additional blocks) to be 100% sure their money won't be reversed."],
                    nfrConsiderations: ["Consistency: 100% agreement on state across 10,000+ global nodes."],
                    kpis: ["Achieve zero double-spend success rate across 1 million transaction simulations."],
                    keyInsights: " Decentralization is the art of turning 'Truth' into a statistical majority."
                }
            ],
            playgrounds: [
                {
                    title: "The Hash Chain Lab",
                    description: "Visualizing a block hash.",
                    examples: [
                        {
                            language: "javascript",
                            code: "const crypto = require('crypto');\n\nconst block1 = { data: \"Tx1: 10 BTC\", prevHash: \"000000\" };\nconst hash1 = crypto.createHash('sha256').update(JSON.stringify(block1)).digest('hex');\n\nconst block2 = { data: \"Tx2: 5 BTC\", prevHash: hash1 };\nconst hash2 = crypto.createHash('sha256').update(JSON.stringify(block2)).digest('hex');\n\nconsole.log(hash2);"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "research/consensus-model",
                commitMessage: "docs: added architectural analysis of Nakamoto consensus vs pBFT for the new L2 scaling solution",
                files: [{ name: "docs/consensus.md", type: "file", content: "consensus analysis" }],
                activeFileSnippet: { filename: "consensus.md", code: "Finality: Probabilistic\nThroughput: 15 TPS\nNode Requirement: 10,000+" }
            },
            community: {
                aiSummary: "The blockchain is a machine that manufactures trust. It uses math as the raw material and electricity as the fuel.",
                solutions: []
            }
        },
        {
            id: "HCE-BLOCK-101-M3-T1",
            moduleId: "HCE-BLOCK-101-M3",
            sequenceNumber: 1,
            title: "Solidity & Gas-Efficient Storage",
            estimatedMinutes: 240,
            what: "Solidity is the primary language for writing Smart Contracts on the Ethereum Virtual Machine (EVM). 'Gas' is the unit of measurement for how much computational work a transaction requires. Because blockchain storage is permanent and replicated across thousands of nodes, it is the most expensive storage in the world.",
            why: "If you write inefficient code (like using a 100-item loop to find a user's balance), the user has to pay $50 in transaction fees. If you optimize that code (using a Mapping/HashMap), the fee drops to $1. A 'High Code' blockchain engineer is defined by their ability to save the user money through 'Gas Optimization'.",
            when: "Every time you write any code that will be deployed to a production blockchain (Ethereum, Polygon, Arbitrum).",
            how: "1. Use 'Mappings' instead of 'Arrays' for lookups. 2. Group small variables (`uint128`, `bool`) together to use 'Variable Packing' in the EVM's 256-bit slots. 3. Use `external` functions instead of `public` to reduce memory copying costs. 4. Cache frequently used values in `memory` instead of reading from `storage` multiple times.",
            ecosystem: "Hardhat (Development Framework), Foundry (High-speed testing), OpenZeppelin (Audited Libraries), Tenderly (Debugging).",
            realWorld: "During the 2021 bull market, unoptimized NFT contracts caused gas prices to spike so high that users were paying $200 just to 'Mint' a $10 asset. Top-tier engineers at projects like OpenSea and Uniswap use advanced gas optimization to keep their protocols usable even during high traffic.",
            useCases: [
                "Architecting a decentralized exchange (DEX) that is 50% cheaper to use than competitors",
                "Building an NFT project where users can 'AirDrop' to 1000 people in one transaction",
                "Writing a secure DAO voting contract that doesn't 'Timeout' due to high computational cost"
            ],
            advantages: [
                "Incredible Savings: Good variable packing can save 50% on every transaction forever",
                "User Experience: Low fees are the #1 reason users choose a specific app over another",
                "Safety: Simple, optimized code is easier to audit and harder to hack"
            ],
            disadvantages: [
                "Complexity: Gas optimization often requires writing 'Assembly' (Yul) which is highly dangerous if not done perfectly"
            ],

            interviewTip: "If asked 'How do you optimize a smart contract?', mention 'Struct Packing'. Explain that the EVM reads/writes memory in 32-byte chunks. If you put two 16-uints next to each other, they fit in one chunk (1 Write). If you put them apart, they take two chunks (2 Writes). This simple move saves $20-30 instantly.",
            resumeBullet: "Engineered and deployed gas-optimized Solidity smart contracts, reducing user transaction costs by 45% via advanced struct packing and memory-caching techniques.",

            videos: [
                { type: "public", title: "Solidity Gas Optimization", author: "Smart Contract Programmer", views: "200K views", duration: "18:25", url: "https://www.youtube.com/watch?v=0h09gC2pXos" },
                { type: "public", title: "Inside the Ethereum Virtual Machine", author: "Chainlink", views: "100K views", duration: "45:40", url: "https://www.youtube.com/watch?v=0h09gC2pXos" }
            ],
            moocs: [
                { platform: "Patrick Collins", rating: 4.9, title: "Solidity, Blockchain, and Smart Contract Course", instructor: "Patrick Collins", enrolled: "1M+", duration: "32 hours", url: "https://github.com/smartcontractkit/full-blockchain-solidity-course-py" }
            ],
            blogs: [
                { type: "Technical", title: "Gas Optimization Tips", publisher: "RareSkills", readTime: "60 min", url: "https://www.rareskills.io/post/gas-optimization" }
            ],
            scenarios: [
                {
                    id: "3.1", difficulty: "Hard", title: "The Out of Gas Disaster", category: "Incident Response", estimatedTime: "6 hours",
                    scenarioDescription: "A company launches a 'Profit Share' contract. It loops through 5,000 token holders to pay them. After 1,000 holders are paid, the transaction fails with 'Out of Gas'. No one can get paid anymore, and the money is stuck.",
                    problemAnalysis: "This is a classic 'Unbounded Loop' bug. The contract tried to do more work than the 'Block Gas Limit' allows. Since a blockchain transaction is 'Atomic', the whole thing reverts to the start, but the user still paid the fee. The contract is now a 'Zombie'—it can't be used.",
                    architectureLayers: ["EVM Runtime", "Transaction Atomicity Layer", "State Managed Storage"],
                    toolsAndTech: [{ name: "Pull-over-Push Paradigm", justification: "Instead of the contract 'Pushing' money to 5,000 people, it should allow 5,000 people to 'Pull' their own money. We store each person's balance in a mapping. This makes every transaction small, fast, and guaranteed to succeed. It also prevents one 'Bad' wallet from blocking everyone else's payments." }],
                    tradeOffs: ["The 'Pull' method requires the user to perform the transaction, but it is the ONLY safe way to handle large lists."],
                    nfrConsiderations: ["Robustness: Contracts must never reach the Block Gas Limit under any data volume."],
                    kpis: ["Reduce 'Loop Complexity' to O(1) for all dividend-paying functions."],
                    keyInsights: "Don't try to be the postman. Be the mailbox."
                }
            ],
            playgrounds: [
                {
                    title: "The Gas Optimizer",
                    description: "Packing variables to save money.",
                    examples: [
                        {
                            language: "solidity",
                            code: "// --- EXPENSIVE (Uses 3 separate 32-byte slots) ---\nuint256 a = 1;\nuint256 b = 2;\nuint128 c = 3;\n\n// --- CHEAP (Uses 1 slot! c and d fit into a's unused space) ---\nuint128 a = 1;\nuint128 b = 2; // Packed with 'a'\nuint256 c = 3; // New slot"
                        }
                    ]
                }
            ],
            gitSimulation: {
                branchName: "feature/gas-optimization",
                commitMessage: "feat: implemented struct packing and migrated data lookups to mappings, reducing mint cost by 40%",
                files: [{ name: "contracts/Token.sol", type: "file", content: "contract logic" }],
                activeFileSnippet: { filename: "Token.sol", code: "struct User { uint128 balance; uint64 lastLogin; bool isWhiteListed; } // Packed!" }
            },
            community: {
                aiSummary: "The EVM is a calculator that charges you for every single digit it adds. Write your code as if every line costs you a dollar—because in Web3, it usually does.",
                solutions: []
            }
        }
    ],
    videoCount: 310,
    articleCount: 185,
    problemCount: 120,
    capstoneProject: {
        title: "The Full-Stack Decentralized Economy",
        description: "You will build a professional-grade Decentralized Application (DApp). First, you'll author a gas-optimized Solidity Smart Contract that implements a custom ERC-20 token with a built-in 'Staking' mechanism. You will ensure the contract is secure by following OpenZeppelin's best practices. Next, you will use the Hardhat framework to deploy your contract to a testnet (Sepolia/Polygon) and automate your unit tests with 100% coverage. Finally, you will build a React-based frontend that uses Ethers.js to connect to the blockchain via MetaMask. Your frontend will allow users to 'Staking' their tokens and see their 'Interest' accumulate in real-time by listening to on-chain events. This project marks your transition from a Web2 developer to a full-fledged Web3 Engineer.",
        estimatedDays: 14,
        skillsFocused: [
            "Gas-Optimized Solidity",
            "Hardhat & Ethers.js Orchestration",
            "Web3 Wallet Integration (MetaMask)",
            "On-Chain Event Listening",
            "Smart Contract Security Patterns"
        ],
        steps: [
            {
                title: "Phase 1: The Smart Contract Engine",
                description: "Author the ERC-20 staking contract with a focus on variable packing and security."
            },
            {
                title: "Phase 2: The Automated Lab",
                description: "Set up Hardhat, write comprehensive tests in TypeScript, and deploy to a public testnet."
            },
            {
                title: "Phase 3: The Connected UI",
                description: "Build the React bridge to allow users to sign transactions and interact with the ledger."
            },
            {
                title: "Phase 4: The Event Stream",
                description: "Implement real-time UI updates by listening to the blockchain's emission logs."
            }
        ]
    },
    totalEstimatedHours: 65,
    estimatedCompletionDays: 60,
    moduleCount: 5,
    createdAt: "2026-02-27T00:00:00Z",
    updatedAt: "2026-02-27T00:00:00Z",
    version: "1.0",
    status: "published"
};
