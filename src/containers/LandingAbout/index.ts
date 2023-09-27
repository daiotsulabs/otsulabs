type Faq = {
  question: string;
  answer: string[];
};
const faqs: Faq[] = [
  {
    question: "Do you produce 2D or 3D animations?",
    answer: [
      'We specialize in traditional 2D animation, where each second of animation is meticulously crafted frame by frame. While this is our primary focus, we have experience in both 2D and 3D animation, including full 3D animations.',
      'So whether you prefer the timeless appeal of hand-drawn techniques or a modern twist on traditional animation, we\'re here to deliver exactly what you need.'
    ]
  },
  {
    question: "What services does your animation studio provide?",
    answer: [
      "Our services include 2D and 3D animation, character design and development, storyboarding, concept art, motion graphics, visual effects, sound design, and post-production.",
    ],
  },
  {
    question: "How long does it take to complete an animation project?",
    answer: [
      'The timeline for a project can vary based on factors like animation complexity, duration of  a video, character count, etc. We collaborate closely with our clients to set a timeline that matches their requirements, and we provide regular updates on the project\'s progress.'
    ]
  },
  {
    question: "Do you provide voice-over services for animations?",
    answer: [
      'Yes, we offer voice-over services if required. Our voice actors specialize in both Japanese and English languages.',
      'Additionally, we take care of sound design, creating original soundtracks or songs that match perfectly with each animation project.'
    ]
  },
  {
    question:
      "How do you ensure the confidentiality of our animation projects?",
    answer: [
      'We have strict data protection protocols in place, including non-disclosure agreements (NDAs) if required.',
      'We understand successful collaborations with our clients often involve sharing of sensitive information, such as upcoming releases, marketing plans, and innovative ideas. We\`ve been in the industry long enough to know that unwanted leaks can disrupt marketing momentum. Therefore, we take great care in safeguarding sensitive information to prevent any unauthorized disclosure.',
      'Upon the completion of our collaboration, we kindly request our clients\' consent to include the work in our portfolio.'
    ]
  }
]
export {
  faqs
};
export * from "./LandingAbout";
export * from "./FAQ";
export * from "./Contact";
