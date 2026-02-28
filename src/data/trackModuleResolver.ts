// ============================================
// Track Module Resolver
// Converts CourseEnhanced data → Workspace Module[] format
// Maps each trackId to its actual curriculum content
// ============================================

import type { Module, Topic } from "./tracks";
import type { CourseEnhanced } from "./courses/types";

// Import all course data files
import { hceFront101 } from "./courses/hce-frontend-101";
import { hceBack101 } from "./courses/hce-backend-101";
import { hceAi101 } from "./courses/hce-ai-101";
import { hceData101 } from "./courses/hce-data-101";
import { hceDevops101 } from "./courses/hce-devops-101";
import { hceCyber101 } from "./courses/hce-cyber-101";
import { hceBlock101 } from "./courses/hce-block-101";
import { hceEmbed101 } from "./courses/hce-embed-101";
import { hceGame101 } from "./courses/hce-game-101";
import { hceAiNative101 } from "./courses/hce-ainative-101";
import { lceFoundations } from "./courses/lce-foundations";
import { nceFound } from "./courses/nce-found";

// ============================================
// Convert CourseEnhanced topics → Workspace Topic format
// ============================================
function convertTopic(t: any): Topic {
  return {
    id: t.id || "",
    title: t.title || "Untitled Topic",
    what: t.what || "",
    why: t.why || "",
    when: t.when || "",
    how: t.how || "",
    ecosystem: t.ecosystem || "",
    realWorld: t.realWorld || "",
    useCases: t.useCases || [],
    advantages: t.advantages || [],
    disadvantages: t.disadvantages || [],
    interviewTip: t.interviewTip || "",
    resumeBullet: t.resumeBullet || "",
    codeSnippet: t.codeSnippet,
    scenario: t.scenarios?.[0] ? {
      title: t.scenarios[0].title || "",
      context: t.scenarios[0].scenarioDescription || t.scenarios[0].context || "",
      constraints: t.scenarios[0].architectureLayers || t.scenarios[0].constraints || [],
      deliverable: t.scenarios[0].keyInsights || t.scenarios[0].deliverable || "",
    } : undefined,
  };
}

// ============================================
// Convert CourseEnhanced → Module[]
// ============================================
function courseToModules(course: CourseEnhanced): Module[] {
  if (!course.modules || !course.topics) return [];

  // Build a topic lookup by ID
  const topicLookup: Record<string, any> = {};
  course.topics.forEach((t: any) => {
    topicLookup[t.id] = t;
  });

  return course.modules.map((mod: any) => {
    // Resolve topic IDs to full topic objects
    const topicIds: string[] = mod.topics || [];
    const resolvedTopics: Topic[] = topicIds.map((tid: string) => {
      const topicData = topicLookup[tid];
      if (topicData) {
        return convertTopic(topicData);
      }
      // Generate placeholder if topic ID exists but data doesn't
      return {
        id: tid,
        title: tid.replace(/-/g, " ").replace(/^.*T(\d+)$/, "Topic $1"),
        what: `Content for ${tid} is being developed.`,
        why: "This topic is part of the structured curriculum.",
        when: "Study this in sequence with the module.",
        how: "Follow the guided learning path.",
        ecosystem: "",
        realWorld: "",
        useCases: [],
        advantages: [],
        disadvantages: [],
        interviewTip: "",
        resumeBullet: "",
      };
    });

    return {
      id: mod.id,
      title: mod.title || "Untitled Module",
      topics: resolvedTopics,
    };
  });
}

// ============================================
// Generate placeholder modules for tracks without course data
// ============================================
function generatePlaceholderModules(trackId: string, trackTitle: string, topicNames: string[][]): Module[] {
  return topicNames.map((topics, mi) => ({
    id: `${trackId}-m${mi + 1}`,
    title: `Module ${mi + 1}: ${topics[0]?.split(":")[0] || "Fundamentals"}`,
    topics: topics.map((name, ti) => ({
      id: `${trackId}-m${mi + 1}-t${ti + 1}`,
      title: name,
      what: `${name} is a core concept in ${trackTitle}. This topic covers the foundational principles and practical applications.`,
      why: `Understanding ${name} is essential for building production-grade systems and succeeding in industry roles.`,
      when: `Study this topic as part of the ${trackTitle} curriculum, in the sequence presented.`,
      how: `Follow the structured learning path: theory → examples → hands-on practice → assessment.`,
      ecosystem: `Related tools and technologies within the ${trackTitle} domain.`,
      realWorld: `This concept is actively used in production systems at major tech companies.`,
      useCases: [`Production ${trackTitle} systems`, `Enterprise applications`, `Scalable architectures`],
      advantages: [`Industry-standard approach`, `Proven at scale`, `Strong community support`],
      disadvantages: [`Requires dedicated practice`, `Complexity increases with scale`],
      interviewTip: `Be ready to explain ${name} with a real-world example from your projects.`,
      resumeBullet: `Implemented ${name} patterns in production ${trackTitle} systems.`,
    })),
  }));
}

// ============================================
// TRACK → MODULES MAPPING
// ============================================

// High-Code tracks with real course data
const frontendModules = courseToModules(hceFront101);
const backendCourseMods = courseToModules(hceBack101);
const aiModules = courseToModules(hceAi101);
const dataModules = courseToModules(hceData101);
const devopsModules = courseToModules(hceDevops101);
const cyberModules = courseToModules(hceCyber101);
const blockchainModules = courseToModules(hceBlock101);
const embedModules = courseToModules(hceEmbed101);
const gameModules = courseToModules(hceGame101);
const aiNativeModules = courseToModules(hceAiNative101);

// Low-Code tracks with real course data
const lceFoundationModules = courseToModules(lceFoundations);

// No-Code tracks with real course data
const nceFoundModules = courseToModules(nceFound);

// Placeholder modules for tracks without detailed course data yet
const fullstackModules = generatePlaceholderModules("fullstack", "Full Stack Engineering", [
  ["Full Stack Architecture Overview", "Monolith vs Microservices", "API-First Design"],
  ["Frontend-Backend Integration", "REST & GraphQL from Both Sides", "Real-time Communication"],
  ["Database Design for Full Stack", "ORM Patterns", "Migration Strategies"],
  ["Authentication & Authorization", "Session Management", "OAuth2 Integration"],
  ["Deployment & DevOps for Full Stack", "CI/CD Pipelines", "Container Orchestration"],
]);

const systemDesignModules = generatePlaceholderModules("system-design", "System Design", [
  ["System Design Fundamentals", "Scalability Principles", "Load Balancing Strategies"],
  ["Database Scaling", "Sharding & Replication", "CAP Theorem in Practice"],
  ["Distributed Systems", "Consensus Algorithms", "Event-Driven Architecture"],
  ["Caching Strategies", "CDN Architecture", "Rate Limiting & Throttling"],
  ["Real-World System Design", "Designing Twitter/Uber/Netflix", "Design Review Patterns"],
]);

const automationModules = generatePlaceholderModules("automation", "Business Automation", [
  ["Automation Fundamentals", "Workflow Design Principles", "Process Mapping"],
  ["No-Code Automation Tools", "Zapier Advanced Workflows", "Make.com Scenarios"],
  ["Database-Driven Automation", "Triggers & Webhooks", "Scheduled Tasks"],
  ["Integration Patterns", "API Connectors", "Error Handling in Workflows"],
]);

const apiIntegrationModules = generatePlaceholderModules("api-integration", "API Integration", [
  ["Integration Architecture", "REST vs GraphQL vs gRPC", "API Gateway Patterns"],
  ["Authentication for APIs", "OAuth2 Flows", "API Key Management"],
  ["Data Transformation", "ETL Patterns", "Schema Mapping"],
  ["Monitoring & Reliability", "Rate Limiting", "Circuit Breakers"],
]);

const internalToolsModules = generatePlaceholderModules("internal-tools", "Internal Tools", [
  ["Admin Dashboard Design", "CRUD Operations at Scale", "Role-Based Access"],
  ["Data Visualization", "Charts & Reports", "Real-time Dashboards"],
  ["Workflow Builders", "Form Generators", "Approval Systems"],
]);

const productLaunchModules = generatePlaceholderModules("product-launch", "Product Launch", [
  ["MVP Strategy", "Lean Startup Methodology", "Product-Market Fit"],
  ["Landing Page Design", "Conversion Optimization", "A/B Testing"],
  ["Launch Execution", "Waitlist Management", "Growth Hacking Basics"],
]);

const aiWorkflowModules = generatePlaceholderModules("ai-workflows", "AI Workflow Design", [
  ["AI Fundamentals for Non-Coders", "Prompt Engineering Basics", "AI Tool Selection"],
  ["Building AI Workflows", "Chain of Thought Design", "Multi-step AI Pipelines"],
  ["AI in Business Processes", "Document Processing", "Customer Service Automation"],
]);

// ============================================
// MASTER MODULE MAP
// ============================================
export const trackModulesMap: Record<string, Module[]> = {
  // High-Code Engineering
  backend: backendCourseMods.length > 0 ? backendCourseMods : [],
  frontend: frontendModules.length > 0 ? frontendModules : [],
  fullstack: fullstackModules,
  ai: aiModules.length > 0 ? aiModules : [],
  data: dataModules.length > 0 ? dataModules : [],
  devops: devopsModules.length > 0 ? devopsModules : [],
  "system-design": systemDesignModules,
  
  // HCE umbrella — show backend as default entry
  hce: backendCourseMods.length > 0 ? backendCourseMods : [],
  
  // Specialized HCE tracks
  cyber: cyberModules.length > 0 ? cyberModules : [],
  blockchain: blockchainModules.length > 0 ? blockchainModules : [],
  embedded: embedModules.length > 0 ? embedModules : [],
  game: gameModules.length > 0 ? gameModules : [],
  "ai-native": aiNativeModules.length > 0 ? aiNativeModules : [],
  
  // Low-Code Engineering
  lce: lceFoundationModules.length > 0 ? lceFoundationModules : [],
  automation: automationModules,
  "api-integration": apiIntegrationModules,
  "internal-tools": internalToolsModules,
  
  // No-Code Engineering
  nce: nceFoundModules.length > 0 ? nceFoundModules : [],
  "product-launch": productLaunchModules,
  "ai-workflows": aiWorkflowModules,
};

// ============================================
// RESOLVER FUNCTION
// ============================================
export function getModulesForTrack(trackId: string): Module[] {
  const modules = trackModulesMap[trackId];
  if (modules && modules.length > 0) return modules;
  
  // Fallback: generate a minimal placeholder
  return generatePlaceholderModules(trackId, trackId.replace(/-/g, " "), [
    [`Introduction to ${trackId.replace(/-/g, " ")}`, "Getting Started", "Core Concepts"],
    [`Advanced ${trackId.replace(/-/g, " ")}`, "Best Practices", "Real-World Applications"],
  ]);
}
