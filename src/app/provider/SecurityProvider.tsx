// src/app/providers/SecurityProvider.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { SecureShield, SecurityAuditReport } from "@secureshield/web";

interface SecurityContextType {
  isReady: boolean;
  isSecure: boolean;
  trustScore: number;
  report: (SecurityAuditReport & { trustScore?: number }) | null;
  runScan: () => SecurityAuditReport | null;
}

const SecurityContext = createContext<SecurityContextType>({
  isReady: false,
  isSecure: true,
  trustScore: 100,
  report: null,
  runScan: () => null,
});

export function SecurityProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<SecurityContextType>({
    isReady: false,
    isSecure: true,
    trustScore: 100,
    report: null,
    runScan: () => null,
  });

  useEffect(() => {
    // 🛡️ Strict SSR guard: Web SDK RASP detectors only execute in browser DOM
    if (typeof window === "undefined") return;

    let isMounted = true;

    async function init() {
      try {
        const sdk = await SecureShield.init({
          headerKey:
            "enc:v1:bf004452ea9f2170fa2f0d75:b0d33433ad98d9648c17bafe4a45cdde:07ff537a3441f0059e1134d902233f",
          encryptionKey: "U1MEOYmR2f9ZePypUKvFtCGC7xHuXcJKsukRKEeHjYQ=",
          initializationKey: "INIT_cCLO_IAengBXNoNLRpktg2TjsZlxrqkv",
          tenantId: "TEN-SAKSHI-8743",
          appId: "ast_web_981975",
          serverUrl:
            "https://radiator-waving-cahoots.ngrok-free.dev/api/v1/telemetry/ingest",
          environment: "production",
          skipHandshake: true,
          enableRuntimeIntegrityWatchdog: true,
          enableStorageLeakScrubber: true,
          enablePrototypeFreezing: false,
        });

        const report = await sdk.evaluateSecurityState();
        if (isMounted) {
          setState({
            isReady: true,
            isSecure: report.verdict === "SECURE",
            trustScore: report.trustScore,
            report,
            runScan: () => sdk.runScan(),
          });
        }
      } catch (e) {
        console.error(
          "[SecureShield] Next.js App Router initialization error:",
          e,
        );
      }
    }

    init();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SecurityContext.Provider value={state}>
      {children}
    </SecurityContext.Provider>
  );
}

export const useSecurity = () => useContext(SecurityContext);
