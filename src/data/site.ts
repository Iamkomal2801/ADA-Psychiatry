import avatarCarl from '../assets/figma/avatar-carl.png'
import founderImg from '../assets/figma/founder.png'
import heroImg from '../assets/figma/hero.png'
import stateArizona from '../assets/figma/state-arizona.png'
import stateColorado from '../assets/figma/state-colorado.png'
import stateKansas from '../assets/figma/state-kansas.png'
import stateNewMexico from '../assets/figma/state-new-mexico.png'
import stateOregon from '../assets/figma/state-oregon.png'
import stateWashington from '../assets/figma/state-washington.png'
import addictionImg from '../assets/figma/treatment-addiction.png'
import mentalHealthImg from '../assets/figma/treatment-mental-health.png'
import weightLossImg from '../assets/figma/treatment-weight-loss.png'
import whyImg from '../assets/figma/why-choose.png'

export const navItems = [
  {
    label: 'Who we are',
    href: '#founder',
    children: [
      { label: 'Meet the founder', href: '#founder' },
      { label: 'Why Ada Psychiatry', href: '#why' },
    ],
  },
  {
    label: 'Who we treat',
    href: '#treatment',
    children: [
      { label: 'Mental health', href: '#treatment' },
      { label: 'Addiction and recovery', href: '#treatment' },
      { label: 'Medical weight loss', href: '#treatment' },
    ],
  },
  { label: 'Services', href: '#services' },
  {
    label: 'Resources',
    href: '#faq',
    children: [
      { label: 'FAQs', href: '#faq' },
      { label: 'Fees and Insurance', href: '#contact' },
      { label: 'Blog', href: '#faq' },
    ],
  },
] as const

export const heroSlides = [
  {
    id: 'hero-1',
    image: heroImg,
    alt: 'Patient speaking with a mental health provider in a supportive setting',
  },
  {
    id: 'hero-2',
    image: heroImg,
    alt: 'Compassionate psychiatric consultation session',
  },
  {
    id: 'hero-3',
    image: heroImg,
    alt: 'Warm and comfortable mental health care environment',
  },
  {
    id: 'hero-4',
    image: heroImg,
    alt: 'Personalized psychiatric evaluation and care',
  },
  {
    id: 'hero-5',
    image: heroImg,
    alt: 'In-person and virtual mental health appointments',
  },
]

export const treatments = [
  {
    title: 'Mental health',
    image: mentalHealthImg,
    imageAlt: 'Woman holding a mug in a calm indoor setting',
    imageSide: 'left' as const,
    body: 'Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.',
  },
  {
    title: 'Addiction and recovery',
    image: addictionImg,
    imageAlt: 'Two people talking together during a recovery consultation',
    imageSide: 'right' as const,
    body: 'Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.',
  },
  {
    title: 'Supervised Medical Weight Loss',
    image: weightLossImg,
    imageAlt: 'Woman hydrating during a medically supervised fitness and weight loss plan',
    imageSide: 'left' as const,
    body: "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client's needs.",
  },
]

export const whyChoose = [
  {
    title: 'Convenient access',
    body: 'We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.',
  },
  {
    title: 'Concierge approach',
    body: 'Personalized care with attentive follow-up so you always know the next step in your treatment.',
  },
  {
    title: 'High quality service',
    body: 'Evidence-based psychiatry delivered by licensed, experienced providers.',
  },
  {
    title: 'Trusted and empathic providers',
    body: 'A warm, confidential space to talk openly about your mental health needs.',
  },
]

export const testimonials = [
  {
    id: 'testimonial-1',
    quote:
      'ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach',
    name: 'Carl Rowan',
    role: 'Aglets Inc',
    avatar: avatarCarl,
  },
  {
    id: 'testimonial-2',
    quote:
      'ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach',
    name: 'Carl Rowan',
    role: 'Aglets Inc',
    avatar: avatarCarl,
  },
  {
    id: 'testimonial-3',
    quote:
      'ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach',
    name: 'Carl Rowan',
    role: 'Aglets Inc',
    avatar: avatarCarl,
  },
]

export const steps = [
  { n: '01', title: 'Schedule an appointment', icon: 'calendar' },
  { n: '02', title: 'Connect with your provider', icon: 'handshake' },
  { n: '03', title: 'Discuss your comprehensive assessment', icon: 'chat' },
  { n: '04', title: 'Receive your individualized treatment plan', icon: 'clipboard' },
] as const

export const states = [
  {
    name: 'Arizona',
    status: 'Virtual Appointment',
    image: stateArizona,
  },
  {
    name: 'Washington',
    status: 'Virtual Appointment',
    image: stateWashington,
  },
  {
    name: 'Oregon',
    status: 'Coming Soon',
    image: stateOregon,
  },
  {
    name: 'New Mexico',
    status: 'Virtual Appointment',
    image: stateNewMexico,
  },
  {
    name: 'Colorado',
    status: 'Virtual Appointment',
    image: stateColorado,
  },
  {
    name: 'Kansas',
    status: 'Virtual Appointment',
    image: stateKansas,
  },
]

export const faqs = [
  {
    q: 'Is Ada psychiatry confidential?',
    a: 'We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.',
  },
  {
    q: 'What is the best way to schedule a appoinment?',
    a: 'Use Book an Appointment or Schedule a Call. Our team will match you with a provider licensed in your state.',
  },
  {
    q: 'Do you prescribe controlled substance medication?',
    a: 'Medication decisions are made after a comprehensive evaluation and follow state and federal guidelines.',
  },
  {
    q: 'How long does the initial appointment take?',
    a: 'The initial psychiatric evaluation is typically 45–60 minutes so we can understand your history and goals.',
  },
]

export const founder = {
  image: founderImg,
  quote:
    '“Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN.” — Matt Haig',
}

export const whyImage = whyImg
