export * from './types';

// Export all categorized course bundles
export * from './hce-core';
export * from './hce-backend';
export * from './hce-frontend';
export * from './hce-data';
export * from './hce-ai';
export * from './hce-devops';
export * from './hce-embed';
export * from './hce-cyber';
export * from './hce-game';
export * from './hce-block';
export * from './hce-ainative';
export * from './lce-foundations';
export * from './lce-data-modeling';
export * from './lce-logic-workflows';
export * from './lce-uiux';
export * from './lce-security';
export * from './lce-integration-apis';
export * from './lce-ai-services';
export * from './lce-mobile-dev';
export * from './lce-devops';
export * from './lce-advanced';
export * from './lce-capstone';

import {
    coreCs101, coreProgPy, coreProgJava, coreDsa
} from './hce-core';
import {
    hceBack101, hceBack201, hceBack301
} from './hce-backend';
import {
    hceFront101, hceFront201, hceFront301
} from './hce-frontend';
import {
    hceData101, hceData201
} from './hce-data';
import {
    hceAi101, hceAi201
} from './hce-ai';
import {
    hceDevops101, hceDevops201
} from './hce-devops';
import {
    hceEmbed101, hceEmbed201
} from './hce-embed';
import {
    hceCyber101, hceCyber201
} from './hce-cyber';
import {
    hceGame101, hceGame201
} from './hce-game';
import {
    hceBlock101, hceBlock201
} from './hce-block';
import {
    hceAiNative101
} from './hce-ainative';

// An array containing all generated CourseEnhanced objects
export const allHceCourses = [
    coreCs101, coreProgPy, coreProgJava, coreDsa,
    hceBack101, hceBack201, hceBack301,
    hceFront101, hceFront201, hceFront301,
    hceData101, hceData201,
    hceAi101, hceAi201,
    hceDevops101, hceDevops201,
    hceEmbed101, hceEmbed201,
    hceCyber101, hceCyber201,
    hceGame101, hceGame201,
    hceBlock101, hceBlock201,
    hceAiNative101
];
