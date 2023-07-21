type Faq = {
  question: string,
  answer: string[]
}
const faqs: Faq[] = [
  {
    question: 'Do you produce 2D or 3D animations?',
    answer: [
      'Both. We come from a traditional 2D school of animation where every single frame is drawn frame by frame. But modern-day tech allows us to seamlessly combine 3D rendering with 2D hand-drawing techniques to create something truly impactful. It\'s kinda like a collaboration between a software and an artist.',
      'But at the end of the day, our main goal is to harmonize with a brand\'s visual identity and fulfill the specific requirements of each project. So whether you prefer the never-boring charm of hand-drawn techniques or a contemporary spin on traditional animation, we will deliver.'
    ]
  },
  {
    question: 'What services does your animation studio provide?',
    answer: [
      'Our services include 2D and 3D animation, character design and development, storyboarding, concept art, motion graphics, visual effects, sound design, and post-production.'
    ]
  },
  {
    question: 'How long does it take to complete an animation project?',
    answer: [
      'The timeline depends on many different factors, including the complexity of the animation, the duration of the video, the level of detail required, and the scope of the project. We collaborate closely with our clients to set realistic timelines based on their specific requirements and provide regular updates on the progress of the project. CTA'
    ]
  },
  {
    question: 'What industries do you cater to with your animation services?',
    answer: [
      'We have experience working with clients in the entertainment industry, advertising and marketing agencies, gaming companies, and web3 projects. We can adapt our animation style to suit the unique needs of each industry and deliver the content that speaks to a target audience.'
    ]
  },
  {
    question: 'Do you provide voice-over services for animations?',
    answer: [
      'Yes, we offer voice-over services as part of our animation packages. Our voice actors specialize in both Japanese and English languages.',
      'Furthermore, we meticulously take care of sound design, crafting the perfect music that harmonizes flawlessly with the dynamics of every animation project.'
    ]
  },
  {
    question: 'How do you ensure the confidentiality of our animation projects?',
    answer: [
      'We have strict data protection protocols in place, including non-disclosure agreements (NDAs) if required.',
      'We understand successful collaborations with our clients often involve sharing of sensitive information, such as upcoming releases, marketing plans, and innovative ideas. We’ve been in the industry long enough to know that unwanted leaks can disrupt marketing momentum. Therefore, we take great care in safeguarding sensitive information to prevent any unauthorized disclosure.',
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
