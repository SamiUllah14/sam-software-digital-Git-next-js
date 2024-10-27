import Image from 'next/image';
import ImageSmiling from '@/app/Images/HandGestureLogo2.png';

const HandGestureFooter = () => {
  return (
    <div className="SmilingBackground bg-[#F0EC74] flex justify-center items-center h-[30vh] sm:h-[40vh] md:h-[70vh] lg:h-[60vh] xl:h-[60vh] relative">
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src={ImageSmiling.src}
          alt="Smiling Logo"
          layout="intrinsic"
          width={400} 
          height={400}
          className="object-contain max-w-full max-h-full sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[200px] lg:h-[200px] xl:w-[200px] xl:h-[200px]"
        />
      </div>
    </div>
  );
};

export default HandGestureFooter;
