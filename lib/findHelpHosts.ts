export const findHelpHosts = [
  { name: "Asbury United Methodist Church", url: "https://linksi.impact-works.us/find-help/asbury-united-methodist-church" },
  { name: "Clay County Library — Fleming Island Branch", url: "https://linksi.impact-works.us/find-help/clay-county-government-fleming-island" },
  { name: "Clay County Library — Green Cove Springs Branch", url: "https://linksi.impact-works.us/find-help/clay-county-government-greencove-springs" },
  { name: "Clay County Library — Keystone Heights Branch", url: "https://linksi.impact-works.us/find-help/clay-county-government-keystone-heights" },
  { name: "Clay County Library — Orange Park Branch", url: "https://linksi.impact-works.us/find-help/clay-county-government-orange-park" },
  { name: "Clay County Library — Middleburg-Clay Hill Branch", url: "https://linksi.impact-works.us/find-help/clay-county-government-middleburg-clay-hill" },
  { name: "Clay Veterans, Inc.", url: "https://linksi.impact-works.us/find-help/clay-veterans-inc" },
  { name: "For The Least of These", url: "https://linksi.impact-works.us/find-help/for-the-least-of-these" },
  { name: "Mercy Support Services", url: "https://linksi.impact-works.us/find-help/mercy-support-services" },
  { name: "Mission of the Dirt Road", url: "https://linksi.impact-works.us/find-help/mission-of-the-dirt-road" },
  { name: "Quigley House", url: "https://linksi.impact-works.us/find-help/quigley-house" },
  { name: "River Christian Church", url: "https://linksi.impact-works.us/find-help/river-christian-church" },
  { name: "Seeds of Love Outreach", url: "https://linksi.impact-works.us/find-help/seeds-of-love-outreach" },
  { name: "St. Johns River State College", url: "https://linksi.impact-works.us/find-help/st-johns-river-state-college-st-johns-river-state-college-foundation" },
  { name: "The Clothes Closet and Food Pantry", url: "https://linksi.impact-works.us/find-help/the-clothes-closet-food-pantry" },
  { name: "The Way Free Medical Clinic", url: "https://linksi.impact-works.us/find-help/the-way-free-medical-clinic" },
];

export function getHostOfMonth(): { name: string; url: string } {
  const monthIndex = new Date().getMonth(); // 0 = January
  return findHelpHosts[monthIndex % findHelpHosts.length];
}
