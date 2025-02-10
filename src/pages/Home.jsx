import { Button } from '@/components/ui/button';
import 'tailwindcss/tailwind.css';

const Home = () => (
  <div className="p-6 bg-[#EAE3EA] flex flex-col items-center text-center dark:bg-gray-900">
    <img
      src={`${import.meta.env.BASE_URL}profileportrait.jpg`} 
      className="w-48 h-48 rounded-full"
      alt="Profile Image"
    />
    <h1 className="text-4xl md:text-5xl font-bold mt-3 p-3">
      Corinne Haggerty
    </h1>
    <div className="my-4 border-t border-border"></div>
    <p className="text-xl leading-7 md:mx-80 p-3">
      Hi I'm Corinne, a web developer based in Scotland, UK. I enjoy creating
      functional and engaging websites and apps. Feel free to explore my
      portfolio and connect with me—I’d love to discuss opportunities to work
      together!
    </p>
    <div className="my-4 border-t border-border"></div>
    <Button
      className="bg-[#90B7B7] text-primary-foreground hover:bg-primary-500 p-3 mt-4"
      onClick={() => window.open('Corinne-Haggerty-Resume.pdf', '_blank')}
    >
      Download Resume
    </Button>
  </div>
);

export default Home;