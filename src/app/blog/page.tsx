import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: "Blogs",
  description:
    "A list of all my content related work published on various sites.",
};

const posts = [
  {
    title: "Mastering Next: A Comprehensive Guide to Next JS",
    thumbnail: "/blog/hashnode.png",
    icon: "📦",
    href: "https://hashnode.com/@devxMani",
    publishedAt: "2024-07-05",
    tags: ["Next", "Javascript", "Guide"],
    description:
      "A comprehensive guide to Next, covering everything from installation to publishing packages.",
    links: [
      {
        icon: "💻",
        type: " hashnode",
        href: "https://hashnode.com/@devxMani",
      },
    ],
  },
  {
    title: "JavaScript — Scope and Scope Chaining",
    thumbnail: "/blog/medium.png",
    icon: "📦",
    href: "https://javascript.plainenglish.io/javascript-scope-and-scope-chaining-e201572d6d7f",
    publishedAt: "2024-08-06",
    tags: ["Javascript", "Chaining", "guide"],
    description:
      "Introduction to Javascript scopes and how to use them to conditionally manage scope chaining in Javascript project.",
    links: [
      {
        icon: "🟩",
        type: " medium",
        href: "https://javascript.plainenglish.io/javascript-scope-and-scope-chaining-e201572d6d7f",
      },
    ],
  },
  {
    title: "Neon T3 Starter Kit: Supercharging Web Development with Serverless Postgres",
    thumbnail: "/blog/substack.png",
    icon: "💻",
    href: "https://substack.com/home/category/4",
    publishedAt: "2024-08-28",
    tags: ["React", "typescript", "guide"],
    description:
      "A starter kit that uses React to build a full-stack web application with TypeScript.",
    links: [
      {
        icon: "💻",
        type: " substack",
        href: "https://substack.com/@devxmani",
      },
    ],
  },
  {
    title: "ES6 Features Every Front-End Developer Should Know",
    thumbnail: "/blog/ES6.png",
    icon: "💻",
    href: "https://medium.com/javascript-in-plain-english/8-es6-features-every-front-end-developer-should-know-5207f807010b",
    publishedAt: "2024-07-30",
    tags: ["Javascript", "ES 6", "guide"],
    description:
      "New ES 6 features every Front-end developer show know of .",
    links: [
      {
        icon: "💻",
        type: " medium",
        href: "https://medium.com/javascript-in-plain-english/8-es6-features-every-front-end-developer-should-know-5207f807010b",
      },
    ],
  },
  {
    title: "My Journey in Authorization with OPAL",
    thumbnail: "/blog/NEXT.png",
    icon: "💻",
    href: "https://medium.com/gitconnected/mastering-dynamic-sitemaps-in-next-js-with-apis-a-step-by-step-guide-a41a09c2f5ca",
    publishedAt: "2024-06-23",
    tags: ["Next", "Sitemaps", "guide"],
    description:
      "Understanding the basics of Mastering the Sitemaps in NextJs.",
    links: [
      {
        icon: "💻",
        type: " medium",
        href: "https://medium.com/gitconnected/mastering-dynamic-sitemaps-in-next-js-with-apis-a-step-by-step-guide-a41a09c2f5ca",
      },
    ],
  },
];

const BLUR_FADE_DELAY = 0.04;

const timeToHowLongAgo = (date: string) => {
  const dateObject = new Date(date);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - dateObject.getTime();

  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);

  if(months > 12){
    return years === 1 ? `${years} year ago` : `${years} years ago`;
  }

  if(months > 0){
    return months === 1 ? `${months} month ago` : `${months} months ago`;
  }

  if(days > 0){
    return days === 1 ? `${days} day ago` : `${days} days ago`;
  }

  if(hours > 0){
    return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
  }

  if(minutes > 0){
    return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
  }

  return "few seconds ago";
};

export default async function BlogPage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-3xl font-semibold mb-8 tracking-tighter">
            Blogs ✏️
          </h1>
        <p className="mb-8">
          So... I not only like to read long and boring documentations, research
          papers and journals, I also like to write them! Here you can find some
          of my favourite content related work published on various sites.
        </p>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mx-auto">
        {posts
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={id}>
              <ProjectCard
                key={post.title}
                title={post.title}
                description={post.description}
                dates={timeToHowLongAgo(post.publishedAt)}
                tags={post.tags}
                href={post.href}
                image={post.thumbnail}
                links={post.links}
              />
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
