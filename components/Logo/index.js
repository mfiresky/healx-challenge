import {AcademicCapIcon} from '@heroicons/react/outline';

export default function Logo({text}) {
  return (
    <div className="pl-4 flex items-center">
      <AcademicCapIcon className="h-10" />
      <span className="text-black text-base no-underline hover:no-underline font-extrabold">
        {text}
      </span>
    </div>
  );
}
