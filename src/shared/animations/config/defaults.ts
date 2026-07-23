export const revealDefaults = {
  opacity: 0,
  y: 40,
  duration: 0.9,
  ease: "power3.out",
};

export const staggerDefaults = {
  opacity: 0,
  stagger: 0.15,
  y: 30,
  duration: 0.7,
  ease: "power3.out",
};

export const hoverDefaults = {
  y: -8,
  scale: 1.015,
  duration: 0.15,
  ease: "power2.out",
};

export const splitTextConfig = {
  type: "words" as const,
};

export const splitTextDefaults = {
  duration: 0.6,
  stagger: 0.04,
  y: 16,
  autoAlpha: 0,
  ease: "power2.out",
};
