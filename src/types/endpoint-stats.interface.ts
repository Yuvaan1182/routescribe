import { ResponseTimeStats } from "./response-time-stats.interface";

export interface EndpointStats {
  hits: number;
  firstSeen: string;
  lastSeen: string;

  responseTime: ResponseTimeStats;
}
