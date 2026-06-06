"use client";

import { PortalShell } from "@/components/portal/PortalShell";
import { PortalCard } from "@/components/portal/PortalUI";
import { PortalRoadmapPanel } from "@/components/portal/PortalDemo";
import { PortalSection } from "@/components/portal/PortalLayout";
import { usePortal } from "@/components/portal/PortalProvider";
import { getOnboardingData } from "@/lib/portal/auth";
import { cn } from "@/lib/utils";

const commLabels = {
  email: "Email",
  whatsapp: "WhatsApp",
  portal: "Portal notifications",
  calls: "Scheduled calls",
};

export function PortalSettings() {
  const { user, darkMode, toggleDarkMode, notifications } = usePortal();
  const onboarding = getOnboardingData();

  return (
    <PortalShell title="Settings" subtitle="Profile, preferences, and workspace configuration">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <PortalSection title="Profile">
            <PortalCard>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {user?.avatarInitials}
                </div>
                <div>
                  <p className="font-display font-semibold text-[var(--portal-text)]">{user?.name}</p>
                  <p className="text-sm text-[var(--portal-muted)]">{user?.email}</p>
                  <p className="text-sm text-[var(--portal-muted)]">{user?.company}</p>
                  <p className="mt-2 text-xs capitalize text-brand-400">{user?.role} account</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[var(--portal-muted)]">
                [Demo] Profile edits sync with your account team in production.
              </p>
            </PortalCard>
          </PortalSection>

          <PortalSection title="Appearance">
            <PortalCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-[var(--portal-text)]">Dark mode</p>
                  <p className="text-sm text-[var(--portal-muted)]">Navy workspace optimized for extended use</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={darkMode}
                  onClick={toggleDarkMode}
                  className={cn(
                    "relative h-7 w-12 rounded-full transition-colors",
                    darkMode ? "bg-brand-600" : "bg-[var(--portal-muted-bg)]",
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform",
                      darkMode ? "left-5" : "left-0.5",
                    )}
                  />
                </button>
              </div>
            </PortalCard>
          </PortalSection>

          <PortalSection title="Notifications">
            <PortalCard>
              <ul className="divide-y divide-[var(--portal-border)]">
                {notifications.map((n) => (
                  <li key={n.id} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
                    <div>
                      <p className="text-sm font-medium text-[var(--portal-text)]">{n.title}</p>
                      <p className="text-xs text-[var(--portal-muted)]">{n.message}</p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 text-[10px] font-semibold uppercase",
                        n.read ? "text-[var(--portal-muted)]" : "text-brand-400",
                      )}
                    >
                      {n.read ? "Read" : "New"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[var(--portal-muted)]">
                [Demo] Notification preferences (email digest, Slack) ship in production.
              </p>
            </PortalCard>
          </PortalSection>

          {onboarding && (
            <PortalSection title="Communication preferences">
              <PortalCard>
                <dl className="grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-[var(--portal-muted)]">Primary channel</dt>
                    <dd className="font-medium text-[var(--portal-text)]">
                      {commLabels[onboarding.communicationPreference]}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[var(--portal-muted)]">Timezone</dt>
                    <dd className="font-medium text-[var(--portal-text)]">{onboarding.timezone}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[var(--portal-muted)]">Business</dt>
                    <dd className="font-medium text-[var(--portal-text)]">
                      {onboarding.businessName} · {onboarding.industry}
                    </dd>
                  </div>
                </dl>
              </PortalCard>
            </PortalSection>
          )}
        </div>

        <div className="lg:col-span-1">
          <PortalRoadmapPanel />
        </div>
      </div>
    </PortalShell>
  );
}
