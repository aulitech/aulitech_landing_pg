const people = [
  {
    name: 'Spero Koulouras',
    role: 'Founder / Chairman',
    bio: 'My mom taught blind children. As an undergraduate in Computer Engineering at the University of Michigan, my first tech job was the implementation of assistive switches as keyboard alternatives on the Apple II computer in 1982. At Hewlett-Packard, the application of text-to-speech, voice recognition and telecom technologies over 14 years provided the training to spend the next 20+ years at startups developing security, automation and AI products, leading engineering teams and as CEO. My experience includes development of international telecom standards, patents in mobile signaling and mesh networking, managing multinational development and manufacturing, raising venture capital and growing teams. Diagnosed with ALS in 2019, my bucket list is short. With AULI.TECH, I’m returning to my roots and working to improve the quality of life for impaired individuals through affordable application of AI and Robotics.',
  },
  {
    name: 'Finn Biggs',
    role: 'Founder / Technologist',
    bio: 'I am a Physics student at UC San Diego. I love to play music, draw, and cook. I have been a math and science aficionado since I was young. Studying physics helps me to answer the questions I have about how this wild world fits together. I feel called to create something tangible, so AULI.TECH is my plan for making a direct contribution to the betterment of society. In the future, I would like to design software and hardware that makes the world a better place, and eases the struggles of humanity to achieve environmental and social goals.',
  },
  {
    name: 'Micheal Fierro',
    role: 'Technologist',
    bio: "I am a recent Maths/CS graduate from UC San Diego. I've always had a passion for finding unique and abstract ways to approach complex problems, which naturally drew me to the infinite versatility of computation and theory. But as the world becomes more and more inseparable from our quickly developing technologies, it becomes paramount that people of all abilities are able to interface with it reliably. As a member of the AULI.TECH team, I am able to apply the skills I've acquired to develop new ways of interacting with technology and help to bring about a more accessible world.",
  },
  {
    name: 'Allen Cantwell',
    role: 'Partnerships / Marketing',
    bio: 'A mathematics education set me on a career course of solving problems, using deep analysis of data to illuminate systematic solutions for complex business problems. As a Program Manager at HP, IBM Hybrid Cloud and HCL Technologies for over 20 years, my clients included Cisco, Nokia, Seimens, O2 (UK), Viasat, and Telmex as well as numerous clients in manufacturing, financial services and consumer products. In 2019 I reached my limit of unfulfilling data management transformations for large corporations, without tangible impact on quality of life for humanity. I began to focus on how to meaningfully apply data, analytics, AI and technology to impact the value of patient care. The opportunity to work with Spero (again!) and the AULI.TECH team to provide innovative solutions to improve quality of life for people battling health challenges brings renewed passion for solving problems that actually matter.',
  },
  {
    name: 'Thea Koulouras',
    role: 'Program Manager',
    bio: 'I am a 2022 graduate of UC San Diego with a degree in Urban Planning, passionate about creating solutions that make a positive impact on society, with a focus on sustainability and community engagement. I have worked on a variety of projects in academia, with a particular emphasis on disability in the built environment. In addition to my academic work, I have been involved in various volunteer and community initiatives. I have a deep commitment to giving back and have contributed my time and energy to causes such as CalPIRG. As I embark on my career, I am excited to continue pursuing my passion for creating positive change in the world. With a dedication to social responsibility, I hope to make a real difference with Assistive Technology.',
  },
  {
    name: 'Olivia Rose',
    role: 'UI / UX',
    bio: 'I am a sophmore Computer Science student at the Univesity of Oregon with an unrelenting love of technology. I am proud to be an employee at AULI.TECH and be a part of something aiming to give back the joys of technology to as many people as possible.',
  },
]

export default function TeamTest() {
  return (
    <>
        <div className="bg-gray-900 px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Learn more about the company, our products, and the team that make it all possible
        </p>
      </div>
    </div>
    
    <div className="bg-white py-24 md:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
      <div className="max-w-2xl xl:col-span-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About the team</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about giving a voice back to those with nueromuscular and vocal impairments, in the virtual world and real world.
        </p>
      </div>
      <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
        {people.map((person) => (
          <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
            <div className="max-w-xl flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-6 text-sm leading-7 text-gray-600">{person.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
    </>
  )
}
