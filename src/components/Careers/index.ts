type Job = {
  id: number
  slug: string
  name: string
  responsibilities: string[]
  qualifications: string[],
  offers: string[],
  time: string
}

const jobs: Job[] = [
  {
    id: 1,
    slug: 'animation-director',
    name: 'Animation Director',
    responsibilities: [
      'Lead and support the animation team to ensure that everyone has the necessary skills and resources to complete their tasks.',
      'Collaborate closely with the director, scriptwriter, and production team to establish the project\'s visual style and production plan.',
      'Create and refine animation scenes and movements that align with the project\'s vision.',
      'Oversee and manage the entire animation production process, from initiation to completion.',
      'Ensure high-quality animation by monitoring and meeting all project quality requirements within the designated timeline.'
    ],
    qualifications: [
      'At least 5 years of experience in the animation industry.',
      'Proficiency in animation software such as Maya, 3ds Max, and others.',
      'Strong leadership skills, with the ability to mentor and develop the animation team.',
      'Competency in reading and comprehending scripts, graphics, and other documents pertaining to animation production.',
      'Excellent communication skills, both verbal and written, and the ability to effectively convey ideas and concepts to team members.',
      'Highly responsible and skilled in time management.',
      'Willingness to learn, adapt, and embrace new ideas and techniques in the field.',
    ],
    offers: [
      'Competitive compensation.',
      'Beautiful working space located in the heart of the city, that includes free facilities, such as gym, swimming pool, library, and more',
      'An environment that fosters creativity and personal growth. Biannual salary reviews.',
      'Company-provided work equipment.',
      'Paid holidays, in accordance with legal requirements.',
      'Comprehensive benefits and insurance package.',
    ],
    time: 'Full-time  Ho Chi Minh, Vietnam'
  },
  {
    id: 2,
    slug: 'art-director',
    name: 'Art Director',
    responsibilities: [
      'Contribute to ideation and analysis sessions with the creative team to shape ideas as needed.',
      'Supervise and ensure that all visual and design content is produced professionally, on time, and consistent with the company\'s image and brand.',
      'Ensure that all project deliverables meet the company\'s quality standards and requirements.',
      'Manage and mentor the team of artists and designers.',
      'Foster and maintain relationships with partners, including producers, directors, artists, and designers.',
      'Ensure all produced materials comply with legal regulations and requirements related to copyright and intellectual property.',
      'Stay up to date with the latest trends in the industry and apply them effectively to the work.',
    ],
    qualifications: [
      'At least 5 years of experience as an Art Director.',
      'Strong leadership skills, with the ability to manage and mentor design department staff and artists.',
      'Proficiency in visual design tools, such as Adobe Photoshop, Illustrator, and other industry-standard software.',
      'Creative and innovative approach to developing visually compelling advertising strategies.',
      'Ability to analyze and evaluate data to inform effective advertising strategies.',
      'Knowledgeable about legal regulations and requirements related to copyright and intellectual property.',
    ],
    offers: [
      'Competitive compensation.',
      'Beautiful working space located in the heart of the city, that includes free facilities, such as gym, swimming pool, library, and more',
      'An environment that fosters creativity and personal growth. Biannual salary reviews.',
      'Company-provided work equipment.',
      'Paid holidays, in accordance with legal requirements.',
      'Comprehensive benefits and insurance package.',
    ],
    time: 'Full-time  Ho Chi Minh, Vietnam'
  },
  {
    id: 3,
    slug: '2d-artist',
    name: '2D Artist',
    responsibilities: [
      'Create 2D illustrations in the Manga and Anime style for digital and print media.',
      'Collaborate with various teams and groups to develop visual concepts and designs.',
      'Adhere to established art and brand guidelines.',
      'Maintain consistent design styles across all projects.',
      'Manage assigned work to meet project deadlines.',
      'Stay current with industry trends and best practices in 2D illustration art and design.',
    ],
    qualifications: [
      'At least 5 years of experience in the animation industry.',
      'Proficiency in animation software such as Maya, 3ds Max, and others.',
      'Strong leadership skills, with the ability to mentor and develop the animation team.',
      'Competency in reading and comprehending scripts, graphics, and other documents pertaining to animation production.',
      'Excellent communication skills, both verbal and written, and the ability to effectively convey ideas and concepts to team members.',
      'Highly responsible and skilled in time management.',
      'Willingness to learn, adapt, and embrace new ideas and techniques in the field.',
    ],
    offers: [
      'Competitive compensation.',
      'Beautiful working space located in the heart of the city, that includes free facilities, such as gym, swimming pool, library, and more',
      'An environment that fosters creativity and personal growth. Biannual salary reviews.',
      'Company-provided work equipment.',
      'Paid holidays, in accordance with legal requirements.',
      'Comprehensive benefits and insurance package.',
    ],
    time: 'Full-time  Ho Chi Minh, Vietnam'
  },
  {
    id: 4,
    slug: 'storyboard-artist',
    name: 'Storyboard Artist',
    responsibilities: [
      'Work closely with directors, writers, and screenwriters to determine the layout and pacing of the story.',
      'Develop detailed sketches that depict the content, layout, camera angles, and character movements for each scene.',
      'Collaborate with other production stages to ensure consistency and quality throughout the final product.',
      'Attend meetings and reviews, incorporate feedback from the director and production team, and make necessary revisions to ensure a consistent artistic vision and adherence to the production schedule.',
    ],
    qualifications: [
      'Bachelor\'s degree or equivalent in art, animation, or a related field.',
      'At least 2 years of professional experience as a Storyboard Artist for TV shows or Anime.',
      'Proficiency in using Wacom drawing board tools and devices, as well as software such as Photoshop, Sketchbook Pro, or Clip Studio Paint.',
      'Familiarity with traditional animation techniques and terminology.',
      'Ability to work collaboratively in a team environment and take direction from creative teams.',
      'Excellent communication skills, with the ability to effectively convey ideas and concepts to team members.',
      'Willingness to learn, grow, and embrace new techniques and approaches in the field.',
    ],
    offers: [
      'Competitive compensation.',
      'Beautiful working space located in the heart of the city, that includes free facilities, such as gym, swimming pool, library, and more',
      'An environment that fosters creativity and personal growth. Biannual salary reviews.',
      'Company-provided work equipment.',
      'Paid holidays, in accordance with legal requirements.',
      'Comprehensive benefits and insurance package.',
    ],
    time: 'Full-time  Ho Chi Minh, Vietnam'
  }
]
export * from './JoinUs'
export {
jobs
}
export type { Job }
