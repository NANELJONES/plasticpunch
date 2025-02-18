import dynamic from "next/dynamic";

const Donate = dynamic(() => import("./components/Donate"));
const Header = dynamic(() => import("./components/Header"));
const Intro = dynamic(() => import("./components/Intro"));
const Layout1 = dynamic(() => import("./layout/Layout1"));
const AbstractCube = dynamic(() => import("./components/3D/AbstractCube"));
const EducationalContent = dynamic(() => import("./components/EducationalContent"));
const SampleProject = dynamic(() => import("./components/SampleProject"));
const TheSolution = dynamic(() => import("./components/TheSolution"));

const Society = dynamic(() => import("./components/Society"));
const Clients = dynamic(() => import("./components/Clients"));
const Testimonials = dynamic(() => import("./components/Testimonials"));

const IntroStats = dynamic(() => import("./components/IntroStats"));
const ChangeMakers = dynamic(() => import("./components/ChangeMakers"));
const SiteMap = dynamic(() => import("./components/SiteMap"));
const DailyContent = dynamic(() => import("./components/DailyContent"));
const BlogSample = dynamic(() => import("./components/BlogSample"));

const SampleEvents4 = dynamic(() => import("./components/SampleEvents").then(mod => mod.SampleEvents4));
const HomeContent = dynamic(() => import("./components/HomeContent"));

export default function Home() {
  return (
    <div className="bg-[#1E2D7D]">
      <AbstractCube></AbstractCube>
      <Layout1>

        <div className="flex flex-col lg:flex-row gap-4 relative h-auto bg-black-200 w-full">
          <div className="flex flex-col p-2 md:p-8 z-10 gap-10 w-full">
            <HomeContent />
            <IntroStats />
            <TheSolution />
            <Intro />
            <Society />
            <SampleProject />
            <BlogSample />
            <SampleEvents4 />
            <Donate />
            <DailyContent />
            <ChangeMakers />
            <Clients />
            <Testimonials></Testimonials>
          </div>
        </div>

      </Layout1>
    </div>
  );
}
