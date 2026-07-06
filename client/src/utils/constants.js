// Advisor identity & contact details — replace with real values before deploying.
export const ADVISOR = {
  name: 'Aniket Sharma',
  designation: 'LIC Senior Insurance Advisor',
  licCode: 'LIC Agent Code: 16745698',
  phone: '+919602338811',
  displayPhone: '+91 9602338811',
  email: 'aniluma217@gmail.com',
  whatsapp: '919602338811',
  address: 'Nanupuri, Jhotwara, Jaipur, Rajasthan, India',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114701.6!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c649fd7%3A0x328522f14a5640c!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000',
};

// Fallback data used if the backend API is unreachable, so the site always renders.
export const FALLBACK_PLANS = [
  {
    id: 1,
    name: 'LIC Jeevan Anand',
    description: 'A whole-life endowment plan offering savings plus lifelong life cover.',
    benefits: ['Maturity benefit + bonus', 'Life cover continues after maturity', 'Tax benefits under 80C'],
    eligibility: 'Age 18–50 years',
  },
  {
    id: 2,
    name: 'LIC Jeevan Umang',
    description: 'Whole life plan with guaranteed yearly income after the premium paying term.',
    benefits: ['Guaranteed annual income', 'Whole life risk cover', 'Loan facility available'],
    eligibility: 'Age 90 days–55 years',
  },
  {
    id: 3,
    name: 'LIC Jeevan Labh',
    description: 'Limited premium endowment plan combining savings and protection.',
    benefits: ['Limited premium payment', 'Attractive bonus additions', 'Ideal for goal-based savings'],
    eligibility: 'Age 8–59 years',
  },
  {
    id: 4,
    name: 'LIC Tech Term',
    description: 'A pure online term plan offering high life cover at affordable premiums.',
    benefits: ['High sum assured, low premium', 'Multiple payout options', 'Optional accidental rider'],
    eligibility: 'Age 18–65 years',
  },
  {
    id: 5,
    name: "LIC Children's Money Back",
    description: "Secures your child's education and future milestones with periodic payouts.",
    benefits: ['Payouts at key education milestones', 'Premium waiver on parent demise', 'Maturity lump sum'],
    eligibility: 'Child age 0–12 years',
  },
  {
    id: 6,
    name: 'LIC Pension Plus',
    description: 'A retirement-focused plan building a corpus for a worry-free post-retirement life.',
    benefits: ['Guaranteed pension income', 'Flexible vesting age', 'Death benefit for nominee'],
    eligibility: 'Age 25–75 years',
  },
];

export const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Anita Verma',
    role: 'Schoolteacher, Jaipur',
    rating: 5,
    message:
      'Rajesh ji explained every plan patiently and helped me choose the right policy for my daughter\'s education.',
  },
  {
    id: 2,
    name: 'Mohit Agarwal',
    role: 'Small Business Owner',
    rating: 5,
    message: 'Claim assistance was smooth and quick. He personally followed up until the claim was settled.',
  },
  {
    id: 3,
    name: 'Sunita Rathore',
    role: 'Homemaker',
    rating: 4,
    message: 'Very knowledgeable about tax-saving plans. Helped my whole family plan our policies properly.',
  },
  {
    id: 4,
    name: 'Deepak Chauhan',
    role: 'IT Professional',
    rating: 5,
    message: 'Started a SIP through him and the guidance on mutual funds has been excellent so far.',
  },
];

export const NAV_LINKS = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'LIC Plans', to: 'plans' },
  { label: 'Mutual Fund', to: 'mutual-fund' },
  { label: 'Calculator', to: 'calculator' },
  { label: 'Testimonials', to: 'testimonials' },
  { label: 'FAQ', to: 'faq' },
  { label: 'Contact', to: 'contact' },
];
