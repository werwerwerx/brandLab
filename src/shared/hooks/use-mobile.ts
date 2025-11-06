import * as React from "react"

type BreakpointName = "sm" | "md" | "lg" | "xl" | "2xl"

const BREAKPOINTS: Record<BreakpointName, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

function getQuery(bp: BreakpointName | number, direction: "min" | "max") {
  const value = typeof bp === "number" ? bp : BREAKPOINTS[bp]
  return direction === "min"
    ? `(min-width: ${value}px)`
    : `(max-width: ${value - 1}px)`
}

export function useBreakpoint(params?: { bp?: BreakpointName | number; direction?: "min" | "max" }) {
  const bp = params?.bp ?? "md"
  const direction = params?.direction ?? "max"
  const [matches, setMatches] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const query = getQuery(bp, direction)
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    mql.addEventListener("change", onChange)
    setMatches(mql.matches)
    return () => mql.removeEventListener("change", onChange)
  }, [bp, direction])

  return !!matches
}

export function useIsMobile() {
  return useBreakpoint({ bp: "md", direction: "max" })
}

export function useIsLgUp() {
  return useBreakpoint({ bp: "lg", direction: "min" })
}

export function useIsXlUp() {
  return useBreakpoint({ bp: "xl", direction: "min" })
}
