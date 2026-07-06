import type { Endpoint, Example, Observation } from "../types";

function createExample(observation: Observation): Example {
  return {
    capturedAt: observation.timestamp,
    request: observation.request,
    response: observation.response,
  };
}

export function mergeObservation(
  endpoint: Endpoint | null,
  observation: Observation,
): Endpoint {
  const example = createExample(observation);

  // First observation for this endpoint
  if (!endpoint) {
    return {
      id: `${observation.method}:${observation.route}`,

      method: observation.method,

      route: observation.route,

      path: observation.path,

      request: observation.request,

      response: observation.response,

      metadata: {},

      examples: {
        latest: example,

        success: observation.response.status < 400 ? example : undefined,

        errors: {
          examples:
            observation.response.status >= 400
              ? {
                  [observation.response.status]: example,
                }
              : {},
        },
      },

      stats: {
        hits: 1,

        firstSeen: observation.timestamp,

        lastSeen: observation.timestamp,

        responseTime: {
          average: observation.duration,
          minimum: observation.duration,
          maximum: observation.duration,
        },
      },
    };
  }

  const hits = endpoint.stats.hits + 1;

  const average =
    (endpoint.stats.responseTime.average * endpoint.stats.hits +
      observation.duration) /
    hits;

  const minimum = Math.min(
    endpoint.stats.responseTime.minimum,
    observation.duration,
  );

  const maximum = Math.max(
    endpoint.stats.responseTime.maximum,
    observation.duration,
  );

  const updatedExamples = {
    latest: example,

    success: endpoint.examples.success,

    errors: {
      examples: {
        ...endpoint.examples.errors.examples,
      },
    },
  };

  if (observation.response.status < 400) {
    updatedExamples.success = example;
  } else {
    updatedExamples.errors.examples[observation.response.status] = example;
  }

  return {
    ...endpoint,

    path: observation.path,

    request: observation.request,

    response: observation.response,

    examples: updatedExamples,

    stats: {
      hits,

      firstSeen: endpoint.stats.firstSeen,

      lastSeen: observation.timestamp,

      responseTime: {
        average,
        minimum,
        maximum,
      },
    },
  };
}
