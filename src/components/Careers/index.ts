type Job = {
  id: number;
  slug: string;
  name: string;
  responsibilities: string[];
  qualifications: string[];
  offers: string[];
  time: string;
  location: string;
};

const jobsEN: Job[] = [
  {
    id: 1,
    slug: "2d-animation-director",
    name: "2D Animation Director",
    responsibilities: [
      "Lead and support the animation team to ensure that everyone has the necessary skills and resources to complete their tasks.",
      "Collaborate closely with the director, scriptwriter, and production team to establish the project's visual style and production plan.",
      "Create stunning visual storyboards, color scripts",
      "Create and refine animation scenes and movements that align with the project's vision.",
      "Oversee and manage the entire animation production process, from initiation to completion.",
      "Ensure high-quality animation by monitoring and meeting all project quality requirements within the designated timeline.",
    ],
    qualifications: [
      "At least 5-7 years of experience in the animation industry.",
      "Proficiency in animation software such as ClipStudio Paint Ex, Toon Boon",
      "Strong leadership skills, with the ability to mentor and develop the animation team.",
      "Competency in reading and comprehending scripts, graphics, and other documents pertaining to animation production.",
      "Excellent communication skills, both verbal and written, and the ability to effectively convey ideas and concepts to team members.",
      "Highly responsible and skilled in time management.",
      "Willingness to learn, adapt, and embrace new ideas and techniques in the field.",
    ],
    offers: [
      "Competitive compensation.",
      "Beautiful working space located in the heart of the city, that includes free facilities, such as gym, swimming pool, library, and more",
      "An environment that fosters creativity and personal growth. Biannual salary reviews.",
      "Company-provided work equipment.",
      "Paid holidays, in accordance with legal requirements.",
    ],
    time: "Full time",
    location: "Ho Chi Minh, Vietnam",
  },
  {
    id: 2,
    slug: "2d-concept-artist",
    name: "2D Concept Artist",
    responsibilities: [
      "Collaborate with the content team to understand the order's content, contribute ideas to develop and showcase the company's artwork products (Character, Flash art, Poster, Storyboard, etc.).",
      "Create and quickly sketch overall concept artwork, or detailed artwork based on agreed-upon requirements and ideas.",
      "Coordinate with other processes to ensure consistency and quality of the final product according to the set ideas and requirements.",
      "Enthusiastically and flexibly support the artist team to the best of one's ability when necessary.",
      "Propose and actively contribute opinions to develop and improve one's own skills, as well as the collective.",
    ],
    qualifications: [
      "Bachelor's degree or equivalent in graphic design, industrial art.",
      "Minimum 5 years of professional experience as a concept artist.",
      "Solid knowledge of anatomy, spatial composition, and understanding of animation.",
      "Ability to create blockouts, generate ideas, and design backgrounds, props, buildings, creatures, etc.",
      "Adaptability to various art styles (Anime, Manga, Comic, etc.)",
      "Proficiency in using Wacom drawing tablets and graphic design software such as Photoshop, Sketchbook Pro, Paint Tool Sai, Clip Studio Paint, or similar.",
      "Proactive attitude, self-learning, and open-mindedness.",
      "Ability to work well and collaborate in a team environment.",
      "Open to receiving feedback from superiors and colleagues.",
      "Interest in self-study through artbooks, anime, movies to apply, find references, analyze orders.",
    ],
    offers: [
      "Competitive salary",
      "Beautiful working space located in the heart of the city, that includes free facilities, such as gym, swimming pool, library, and more",
      "An environment that fosters creativity and personal growth. Biannual salary reviews.",
      "Company-provided work equipment.",
      "Paid holidays, in accordance with legal requirements.",
      "Comprehensive benefits and insurance package.",
    ],
    time: "Full time",
    location: "Ho Chi Minh, Vietnam",
  },
  {
    id: 3,
    slug: "2d-general-anime-artist",
    name: "2D General Anime Artist",
    responsibilities: [
      "Assist with line-based color rendering or design props for the company based on orders and existing concepts.",
      "Coordinate with other departments to ensure consistency and quality in the final product, according to the required ideas.",
      "Provide enthusiastic and flexible support to the artist team to the best of my abilities when necessary.",
      "Make proposals and actively contribute ideas to develop and improve my own skills as well as the team's.",
    ],
    qualifications: [
      "Minimum 2 years of experience in the 2D artist position.",
      "Have a rich imagination and diverse creativity, adaptable to various art styles.",
      "Use Wacom drawing tablets and graphic design software such as Photoshop, Sketchbook Pro, Paint Tool Sai, Clip Studio Paint, or similar.",
      "Have a progressive mindset, self-learning, and not being conservative.",
      "Good ability to work and collaborate in a team environment.",
      "Open to receiving feedback from superiors and colleagues.",
      "Have a preference for self-learning through artbooks, anime, movies to apply, find references, and analyze orders.",
    ],
    offers: [
      "Competitive compensation.",
      "Beautiful working space located in the heart of the city, that includes free facilities, such as gym, swimming pool, library, and more",
      "An environment that fosters creativity and personal growth. Biannual salary reviews.",
      "Company-provided work equipment.",
      "Paid holidays, in accordance with legal requirements.",
      "Comprehensive benefits and insurance package.",
    ],
    time: "Full time",
    location: "Ho Chi Minh, Vietnam",
  },
];
const jobsVN: Job[] = [
  {
    id: 1,
    slug: "2d-animation-director",
    name: "2D Animation Director",
    responsibilities: [
      "Dẫn dắt và hỗ trợ đội hoạt hình để đảm bảo mọi người có đủ kỹ năng và tài nguyên để hoàn thành nhiệm vụ của mình.",
      "Cộng tác chặt chẽ với đạo diễn, biên kịch và đội sản xuất để xác định phong cách hình ảnh và kế hoạch sản xuất của dự án.",
      "Tạo ra storyboard, color script hấp dẫn",
      "Tạo và hoàn thiện những cảnh hành động animatic",
      "Giám sát và quản lý toàn bộ quá trình sản xuất hoạt hình, từ khởi đầu đến hoàn thành.",
      "Đảm bảo chất lượng hoạt hình cao bằng cách theo dõi và đáp ứng tất cả các yêu cầu chất lượng dự án trong thời gian quy định.",
    ],
    qualifications: [
      "Ít nhất 5-7 năm kinh nghiệm trong ngành hoạt hình.",
      "Thạo kỹ năng sử dụng phần mềm hoạt hình như ClipStudio Paint Ex, Toon Boon",
      "Kỹ năng lãnh đạo mạnh mẽ, có khả năng đào tạo và phát triển đội hoạt hình.",
      "Có khả năng đọc và hiểu kịch bản, đồ họa và các tài liệu khác liên quan đến sản xuất hoạt hình.",
      "Kỹ năng giao tiếp xuất sắc, cả trong lời nói và viết, và có khả năng truyền đạt ý tưởng và khái niệm một cách hiệu quả đến các thành viên trong nhóm.",
      "Trách nhiệm cao và giỏi quản lý thời gian.",
      "Sẵn lòng học hỏi, thích ứng và chấp nhận ý tưởng và kỹ thuật mới trong lĩnh vực.",
    ],
    offers: [
      "Bồi dưỡng mức lương cạnh tranh.",
      "Không gian làm việc đẹp nằm ở trung tâm thành phố, bao gồm các tiện nghi miễn phí như phòng tập gym, bể bơi, thư viện và nhiều hơn nữa.",
      "Môi trường thúc đẩy sự sáng tạo và sự phát triển cá nhân. Đánh giá lương hàng năm hai lần.",
      "Cung cấp thiết bị làm việc do công ty cung cấp.",
      "Ngày nghỉ có lương, tuân theo yêu cầu pháp luật.",
    ],
    time: "Full time",
    location: "Ho Chi Minh, Vietnam",
  },
  {
    id: 2,
    slug: "2d-concept-artist",
    name: "2D Concept Artist",
    responsibilities: [
      "Hợp tác với team content để hiểu rõ nội dung order, đóng góp ý tưởng để phát triển và thể hiện tốt nhất các sản phẩm artwork của công ty (Character, Flash art, Poster, Storyboard v.v…)",
      "Sáng tạo và phác thảo nhanh cho ra các concept artwork tổng thể, hoặc chi tiết dựa vào yêu cầu và ý tưởng chung đã được thống nhất.",
      "Phối hợp với các khâu khác để đảm bảo tính nhất quán và chất lượng thành phẩm đúng với ý tưởng, yêu cầu đề ra.",
      "Nhiệt tình và linh hoạt hỗ trợ đội nhóm artist trong khả năng tốt nhất của mình khi cần thiết.",
      "Đề xuất và tích cực đóng góp ý kiến để phát triển hoàn thiện kỹ năng của bản thân, cũng như tập thể.",
    ],
    qualifications: [
      "Bằng Cử nhân hoặc tương đương về chuyên ngành đồ họa, mỹ thuật công nghiệp.",
      "Kinh nghiệm tối thiểu 5 năm chuyên nghiệp làm ở vị trí concept artist.",
      "Nắm vững kiến thức anatomy, phối cảnh không gian, và có hiểu biết về animation.",
      "Có khả năng dựng khối, lên ý tưởng và thiết kế background, props, tòa nhà, sinh vật,.v.v.",
      "Kỹ năng phác thảo nhanh, có trí tưởng tượng phong phú, sáng tạo đa dạng.",
      "Thích nghi được nhiều style art (Anime, Manga, Comic v.v…)",
      "Sử dụng thông tạo bảng vẽ Wacom và các phần mềm đồ họa Photoshop, Sketchbook Pro, Paint tool Sai, Clip Studio Paint, hoặc tương tự.",
      "Tinh thần cầu tiến, tự học hỏi, và không bảo thủ.",
      "Khả năng làm việc, phối hợp tốt trong môi trường đội nhóm.",
      "Cởi mở tiếp nhận phản hồi từ cấp trên và đồng đội.",
      "Có sở thích nghiên cứu tự học từ artbook,  anime, phim ảnh để áp dụng, tìm ref, phân tích order",
    ],
    offers: [
      "Mức lương cạnh tranh.",
      "Không gian làm việc đẹp nằm ở trung tâm thành phố, bao gồm các tiện ích miễn phí như phòng tập gym, hồ bơi, thư viện và nhiều hơn nữa.",
      "Môi trường thúc đẩy sáng tạo và phát triển cá nhân. Xem xét lương hàng năm hai lần.",
      "Trang thiết bị làm việc được công ty cung cấp.",
      "Ngày nghỉ có lương, tuân thủ theo yêu cầu pháp luật.",
    ],
    time: "Full time",
    location: "Ho Chi Minh, Vietnam",
  },
  {
    id: 3,
    slug: "2d-general-anime-artist",
    name: "2D General Anime Artist",
    responsibilities: [
      "Phụ làm từ line-base màu-render hoặc phụ thiết kế props bất kì của công ty theo order và concept có sẵn.",
      "Phối hợp với các khâu khác để đảm bảo tính nhất quán và chất lượng thành phẩm đúng với ý tưởng yêu cầu đề ra.",
      "Nhiệt tình và linh hoạt hỗ trợ đội nhóm artist trong khả năng tốt nhất của mình khi cần thiết.",
      "Đề xuất và tích cực đóng góp ý kiến để phát triển hoàn thiện kỹ năng của bản thân cũng như tập thể.",
    ],
    qualifications: [
      "Kinh nghiệm tối thiểu 2 năm ở vị trí 2d artist.",
      "Có trí tưởng tượng phong phú và sáng tạo đa dạng, thích nghi được nhiều style art.",
      "Sử dụng thông tạo bảng vẽ Wacom, và các phần mềm đồ họa Photoshop, Sketchbook Pro, Paint tool Sai, Clip Studio Paint, hoặc tương tự.",
      "Tinh thần cầu tiến, tự học hỏi, và không bảo thủ.",
      "Khả năng làm việc, phối hợp tốt trong môi trường đội nhóm.",
      "Cởi mở tiếp nhận phản hồi từ cấp trên và đồng đội.",
      "Có sở thích nghiên cứu tự học từ artbook, anime, phim ảnh để áp dụng, tìm ref, phân tích order.",
    ],
    offers: [
      "Mức lương cạnh tranh.",
      "Không gian làm việc đẹp nằm ở trung tâm thành phố, bao gồm các tiện ích miễn phí như phòng tập gym, hồ bơi, thư viện và nhiều hơn nữa.",
      "Môi trường thúc đẩy sáng tạo và phát triển cá nhân. Xem xét lương hàng năm hai lần.",
      "Trang thiết bị làm việc được công ty cung cấp.",
      "Ngày nghỉ có lương, tuân thủ theo yêu cầu pháp luật.",
    ],
    time: "Full time",
    location: "Ho Chi Minh, Vietnam",
  },
];
export * from "./JoinUs";
export { jobsEN, jobsVN };
export type { Job };
