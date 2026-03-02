// ============================================
// Track Module Resolver
// Converts CourseEnhanced data → Workspace Module[] format
// Maps each trackId to its actual curriculum content
// Resolves i18n keys to display strings
// ============================================

import i18next from "i18next";
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
// i18n key resolver helper
// ============================================
function resolveKey(key?: string, fallback?: string): string {
  if (fallback) return fallback;
  if (!key) return "";
  const resolved = i18next.t(key);
  // i18next returns the key itself if not found
  return resolved === key ? "" : resolved;
}

function resolveStr(plainValue?: string, keyValue?: string): string {
  if (plainValue) return plainValue;
  if (!keyValue) return "";
  const resolved = i18next.t(keyValue);
  return resolved === keyValue ? keyValue.split(".").pop() || "" : resolved;
}

function resolveArray(plain?: string[], keys?: string[]): string[] {
  if (plain && plain.length > 0) return plain;
  if (!keys) return [];
  return keys.map(k => {
    const r = i18next.t(k);
    return r === k ? "" : r;
  }).filter(Boolean);
}

// ============================================
// Convert CourseEnhanced topics → Workspace Topic format
// Now resolves i18n keys at call time
// ============================================
function convertTopic(t: any): Topic & Record<string, any> {
  return {
    id: t.id || "",
    title: resolveStr(t.title, t.titleKey),
    what: resolveStr(t.what, t.whatKey),
    why: resolveStr(t.why, t.whyKey),
    when: resolveStr(t.when, t.whenKey),
    how: resolveStr(t.how, t.howKey),
    ecosystem: resolveStr(t.ecosystem, t.ecosystemKey),
    realWorld: resolveStr(t.realWorld, t.realWorldKey),
    useCases: resolveArray(t.useCases, t.useCasesKeys),
    advantages: resolveArray(t.advantages, t.advantagesKeys),
    disadvantages: resolveArray(t.disadvantages, t.disadvantagesKeys),
    interviewTip: resolveStr(t.interviewTip, t.interviewTipKey),
    resumeBullet: resolveStr(t.resumeBullet, t.resumeBulletKey),
    codeSnippet: t.codeSnippet,
    scenario: t.scenarios?.[0] ? {
      title: resolveStr(t.scenarios[0].title, t.scenarios[0].titleKey),
      context: resolveStr(t.scenarios[0].scenarioDescription || t.scenarios[0].context, t.scenarios[0].scenarioDescriptionKey),
      constraints: resolveArray(t.scenarios[0].architectureLayers || t.scenarios[0].constraints, t.scenarios[0].architectureLayersKeys),
      deliverable: resolveStr(t.scenarios[0].keyInsights || t.scenarios[0].deliverable, t.scenarios[0].keyInsightsKey),
    } : undefined,
    // Pass through deep content fields for workspace panels
    videos: t.videos,
    moocs: t.moocs,
    blogs: t.blogs,
    scenarios: t.scenarios,
    playgrounds: t.playgrounds,
    gitSimulation: t.gitSimulation,
    community: t.community,
  };
}

// ============================================
// Convert CourseEnhanced → Module[]
// Resolves i18n keys lazily at call time
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
      title: resolveStr(mod.title, mod.titleKey),
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
// TRACK → MODULES MAPPING (lazy evaluation)
// ============================================

// Placeholder modules (static, no i18n needed)
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
// Course → Module mapping (keyed by course object ref)
// Resolved lazily so i18n is ready
// ============================================
const courseCache = new Map<CourseEnhanced, Module[]>();

function getCourseModules(course: CourseEnhanced): Module[] {
  // Always re-resolve to pick up language changes
  return courseToModules(course);
}

// ============================================
// RESOLVER FUNCTION
// ============================================
export function getModulesForTrack(trackId: string): Module[] {
  // Map trackIds to course data
  const trackToCourse: Record<string, CourseEnhanced> = {
    backend: hceBack101,
    frontend: hceFront101,
    ai: hceAi101,
    data: hceData101,
    devops: hceDevops101,
    cyber: hceCyber101,
    blockchain: hceBlock101,
    embedded: hceEmbed101,
    game: hceGame101,
    "ai-native": hceAiNative101,
    hce: hceBack101,
    lce: lceFoundations,
    nce: nceFound,
  };

  const course = trackToCourse[trackId];
  if (course) {
    const modules = getCourseModules(course);
    if (modules.length > 0) return modules;
  }

  // Check placeholder tracks
  const placeholderMap: Record<string, Module[]> = {
    fullstack: fullstackModules,
    "system-design": systemDesignModules,
    automation: automationModules,
    "api-integration": apiIntegrationModules,
    "internal-tools": internalToolsModules,
    "product-launch": productLaunchModules,
    "ai-workflows": aiWorkflowModules,
  };

  if (placeholderMap[trackId]) return placeholderMap[trackId];

  // Fallback: generate a minimal placeholder
  return generatePlaceholderModules(trackId, trackId.replace(/-/g, " "), [
    [`Introduction to ${trackId.replace(/-/g, " ")}`, "Getting Started", "Core Concepts"],
    [`Advanced ${trackId.replace(/-/g, " ")}`, "Best Practices", "Real-World Applications"],
  ]);
}

// Legacy export for backward compat
export const trackModulesMap: Record<string, Module[]> = new Proxy({} as Record<string, Module[]>, {
  get(_, prop: string) {
    return getModulesForTrack(prop);
  }
});
