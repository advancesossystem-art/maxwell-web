import type { ComponentType } from "react";
import {
  IconAI,
  IconCloud,
  IconCode,
  IconCRM,
  IconDesign,
  IconERP,
  IconGlobe,
  IconMobile,
  IconSaaS,
} from "@/components/ui/Icons";

type IconProps = { className?: string };

const iconBySlug: Record<string, ComponentType<IconProps>> = {
  globe: IconGlobe,
  code: IconCode,
  mobile: IconMobile,
  ai: IconAI,
  erp: IconERP,
  crm: IconCRM,
  saas: IconSaaS,
  cloud: IconCloud,
  design: IconDesign,
  "website-development": IconGlobe,
  "custom-software-development": IconCode,
  "mobile-app-development": IconMobile,
  "ai-development": IconAI,
  "erp-development": IconERP,
  "crm-development": IconCRM,
  "saas-development": IconSaaS,
};

/** Resolve one service icon without importing the full `serviceIcons` map in client bundles. */
export function getServiceIcon(key: string): ComponentType<IconProps> {
  return iconBySlug[key] ?? IconCode;
}
