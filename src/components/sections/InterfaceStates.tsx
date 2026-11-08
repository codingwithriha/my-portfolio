import { useState } from "react";
import { AlertCircle, CheckCircle2, Inbox, LoaderCircle } from "lucide-react";

const STATES = [
  {
    id: "ready",
    label: "Ready",
    icon: CheckCircle2,
    title: "Invoice synced",
    description:
      "Your latest invoice is validated and ready for the next step.",
    detail: "Last checked just now",
    tone: "success",
    note: "A clear confirmation tells the user what happened and what they can do next.",
  },
  {
    id: "loading",
    label: "Loading",
    icon: LoaderCircle,
    title: "Checking invoice",
    description:
      "We're verifying the latest status. This usually takes a moment.",
    detail: "Please keep this page open",
    tone: "loading",
    note: "Progress feedback prevents uncertainty while an action is still in progress.",
  },
  {
    id: "empty",
    label: "Empty",
    icon: Inbox,
    title: "Nothing to show yet",
    description:
      "When an invoice is created, its status and history will appear here.",
    detail: "No records found",
    tone: "empty",
    note: "An empty state should explain why the space is empty and how to move forward.",
  },
  {
    id: "error",
    label: "Error",
    icon: AlertCircle,
    title: "Couldn't sync this invoice",
    description:
      "The service didn't respond. Your work is safe; try checking again.",
    detail: "Connection interrupted",
    tone: "error",
    note: "Useful errors explain the problem, protect the user's confidence and offer a recovery path.",
  },
] as const;

export function InterfaceStates() {
  const [activeState, setActiveState] =
    useState<(typeof STATES)[number]["id"]>("ready");
  const current = STATES.find((item) => item.id === activeState) ?? STATES[0];
  const Icon = current.icon;

  return (
    <section id="interface-states" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="section-kicker mb-3">A small engineering demo</p>
            <h2 className="section-heading">
              The details matter{" "}
              <span className="text-primary">when things change.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A good interface doesn't stop at the perfect scenario. Explore
              these states to see how I think about feedback, empty screens and
              recovery when a real product flow doesn't go exactly as planned.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Select a state. The example on the right updates instantly.
            </p>
            <div
              className="flex flex-wrap gap-2 mt-4"
              role="group"
              aria-label="Choose an interface state"
            >
              {STATES.map((state) => (
                <button
                  key={state.id}
                  type="button"
                  onClick={() => setActiveState(state.id)}
                  aria-pressed={activeState === state.id}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    activeState === state.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {state.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Workspace / Invoices
                </p>
                <h3 className="mt-1 font-semibold">Invoice activity</h3>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                Preview
              </span>
            </div>

            <div
              className="py-10 sm:py-12 text-center"
              aria-live="polite"
              aria-atomic="true"
            >
              <div
                className={`mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl ${
                  current.tone === "success"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                    : current.tone === "error"
                      ? "bg-destructive/10 text-destructive"
                      : current.tone === "loading"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                }`}
              >
                <Icon
                  size={26}
                  className={current.tone === "loading" ? "animate-spin" : ""}
                />
              </div>
              <h4 className="text-lg font-semibold">{current.title}</h4>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {current.description}
              </p>
              <p className="mt-5 text-xs text-muted-foreground">
                {current.detail}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2">
                Why this state matters
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {current.note}
              </p>
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground">
              Interactive concept demo · No real invoice data or external
              service is connected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
