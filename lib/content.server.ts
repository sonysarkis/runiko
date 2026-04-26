import "server-only";
import fs from "node:fs";
import path from "node:path";
import { AGENTS, type AgentId } from "./agents";

export function getAgentContent(agentId: AgentId): string {
  const agent = AGENTS.find((a) => a.id === agentId);
  if (!agent) throw new Error(`Unknown agent: ${agentId}`);
  const filePath = path.join(process.cwd(), "content", agent.fileName);
  return fs.readFileSync(filePath, "utf-8");
}

export function getAllAgentContents(): Record<AgentId, string> {
  return {
    researcher: getAgentContent("researcher"),
    strategist: getAgentContent("strategist"),
    "agent-builder": getAgentContent("agent-builder"),
  };
}
