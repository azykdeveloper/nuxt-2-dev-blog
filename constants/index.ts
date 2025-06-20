import type { IBlog, INavLinks } from "~/types";

export const navLinks: INavLinks[] = [
  {
    label: "Home",
    route: "/",
    icon: "hugeicons:home-03",
  },
  {
    label: "About",
    route: "/about",
    icon: "hugeicons:license-draft",
  },
  {
    label: "Blogs",
    route: "/blogs",
    icon: "hugeicons:news",
  },
  {
    label: "Archive",
    route: "/archive",
    icon: "hugeicons:archive-02",
  },
  {
    label: "Contact",
    route: "/contact",
    icon: "hugeicons:contact",
  },
];

export const categories = [
  { name: "Frontend", slug: "front-end" },
  { name: "Backend", slug: "back-end" },
  { name: "Fullstack", slug: "full-stack" },
  { name: "Mobile", slug: "mobile" },
  { name: "DevOps", slug: "dev-ops" },
  { name: "Testing", slug: "testing" },
  { name: "Cloud", slug: "cloud" },
  { name: "Others", slug: "others" },
];

export const tags = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Vue", slug: "vue" },
  { name: "Nuxt", slug: "nuxt" },
  { name: "Node", slug: "node" },
  { name: "Python", slug: "python" },
  { name: "Django", slug: "django" },
  { name: "FastAPI", slug: "fastapi" },
];

export const blogs: IBlog[] = [
  {
    title: "The AGI hype train is running out of steam",
    description:
      "While futurists and fundraisers used to make bullish predictions about artificial general intelligence, they’ve become quieter lately. Peter Thiel.",
    author: {
      name: "Samar",
      img: "img/chris-impey.jpg",
    },
    date: "Dec 5, 2021",
    tags: ["Machine learning"],
    image: "img/01.jpg",
  },
  {
    title: "Creating an object that travels at 1% the speed of light?",
    description:
      "Light is fast. In fact, it is the fastest thing that exists, and a law of the universe is that nothing can move faster than light. Light travels.",
    author: {
      name: "Emma Hazel",
      img: "img/emma-hazel.jpg",
    },
    tags: ["Front End"],
    date: "Jan 12, 2021",
    image: "img/02.jpg",
  },
  {
    title: "Everything you wanted to know about the metaverse",
    description:
      "In the wake of Facebook rebranding as Meta, reflecting its focus on the “metaverse”, Microsoft has now announced it, too, will launch into this.",
    author: {
      name: "Azizbek",
      img: "img/thomas-macaulay.jpg",
    },
    tags: ["Backend"],
    date: "June 5, 2022",
    image: "img/03.jpg",
  },
  {
    title:
      "How to hire a developer straight out of bootcamp — without getting burned",
    description:
      "There’s a worldwide talent shortage in software development, and nearly one-third of hiring managers have hired someone from a coding bootcamp to.",
    author: {
      name: "Ozodbek",
    },
    tags: ["Full Stack"],
    date: "Dec 12, 2021",
    image: "img/04.jpg",
  },
];

export const authors = [
  {
    name: "Chris Impey",
    image: "/author/chris-impey.jpg",
  },
  {
    name: "Thomas Macaulay",
    image: "/author/thomas-macaulay.jpg",
  },
  {
    name: "Emma Hazel",
    image: "/author/emma-hazel.jpg",
  },
];

export const content = `<p></p>
        <table>
          <tbody>
            <tr>
              <td>
                <h5>
                  <em><strong>Segment</strong></em>
                </h5>
              </td>
              <td>
                <h5><strong>Long-fruited</strong></h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <em><strong>Purpose</strong></em>
                </h5>
              </td>
              <td>
                <h5><strong>For fresh consumption and processing</strong></h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <em><strong>Precocity</strong></em>
                </h5>
              </td>
              <td>
                <h5>
                  <strong
                    >Early ripening, 60-63 days after planting seedlings</strong
                  >
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <em><strong>Plant</strong></em>
                </h5>
              </td>
              <td>
                <h5><strong>Vigorous, open</strong></h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <em><strong>Fruit</strong></em>
                </h5>
              </td>
              <td>
                <h5>
                  <strong>Elongated teardrop-shaped, with dense pulp</strong>
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <em><strong>Color</strong></em>
                </h5>
              </td>
              <td>
                <h5><strong>Dark purple to black</strong></h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <em><strong>Weight</strong></em>
                </h5>
              </td>
              <td>
                <h5><strong>200-250 g</strong></h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>
                  <em><strong>Taste</strong></em>
                </h5>
              </td>
              <td>
                <h5><strong>Good</strong></h5>
              </td>
            </tr>
          </tbody>
        </table>
        <p></p>
        <blockquote><strong>ADVANTAGES</strong></blockquote>
        <ul>
          <li>
            <div><strong>Early ripeness</strong></div>
          </li>
          <li>
            <div><strong>Very high yield potential</strong></div>
          </li>
          <li>
            <div><strong>Attractive fruits</strong></div>
          </li>
          <li>
            <div><strong>Great for slicing</strong></div>
          </li>
        </ul>
        <blockquote><strong>RECOMMENDATIONS FOR GROWING</strong></blockquote>
        <ul>
          <li>
            <div><strong>Designed for cultivation in open ground,</strong></div>
            <div><strong>as well as in plastic greenhouses</strong></div>
          </li>
        </ul>
        <p></p>`;
