import { Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm border-t mt-10 dark:text-white dark:border-neutral-700">
      <p>© 2025 Husnul Hapidah. All rights reserved.</p>
      <div className="flex justify-center mt-2 gap-4 text-xl">
        <a
          href="https://github.com/hhafidzaahh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5 hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://vercel.com/hhafidzaahh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe className="w-5 h-5 hover:scale-110 transition-transform" />
        </a>
      </div>
    </footer>
  );
}
