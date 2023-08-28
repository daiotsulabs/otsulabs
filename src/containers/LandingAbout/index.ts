type Faq = {
  question: string;
  answer: string[];
};
const faqs: Faq[] = [
  {
    question: "Do you produce 2D or 3D animations?",
    answer: [
      "We come from a traditional 2D school of animation where every single sequence is drawn frame by frame. But the modern-day tech allows us to seamlessly combine 3D rendering with 2D hand-drawing techniques to create something truly impactful.",
      "Nevertheless our main goal is to synchronize with a brand's visual identity and a specific requirements for a project. So whether you prefer the never-boring charm of hand-drawn techniques or a contemporary spin on traditional animation, we will deliver.",
    ],
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
      "The timeline depends on many different factors, such as the complexity and style of an animation, the duration of a video, the amount of characters to be shown, and so on. We work closely with our clients to set a realistic timeline based on what they need, and we keep them updated on how the project is coming along.",
    ],
  },
  {
    question: "What industries do you cater to with your animation services?",
    answer: [
      "We have experience working with clients in the entertainment industry, advertising and marketing agencies, gaming companies, and web3 projects. We can adapt our animation style to suit the unique needs of each industry and deliver the content that speaks to a target audience.",
    ],
  },
  {
    question: "Do you provide voice-over services for animations?",
    answer: [
      "Yes, we offer voice-over services if required. Our voice actors specialize in both Japanese and English languages.",
      "Additionally, we take care of sound design, creating original soundtracks or songs that match perfectly with each animation project.",
    ],
  },
  {
    question:
      "How do you ensure the confidentiality of our animation projects?",
    answer: [
      "We have strict data protection protocols in place, including non-disclosure agreements (NDAs) if required.",
      "We understand successful collaborations with our clients often involve sharing of sensitive information, such as upcoming releases, marketing plans, and innovative ideas. We’ve been in the industry long enough to know that unwanted leaks can disrupt marketing momentum. Therefore, we take great care in safeguarding sensitive information to prevent any unauthorized disclosure.",
      "Upon the completion of our collaboration, we kindly request our clients' consent to include the work in our portfolio.",
    ],
  },
];
export { faqs };
export * from "./LandingAbout";
export * from "./FAQ";
export * from "./Contact";
