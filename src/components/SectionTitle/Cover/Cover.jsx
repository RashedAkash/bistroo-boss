
import { Parallax } from 'react-parallax';

const Cover = ({title,pra,img}) => {
  return (
    <div>

       <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="MenuItem"
        strength={-200}
    >
       <div className=" h-[500px] justify-center flex items-center text-center text-neutral-content">
    <div className=" py-16  bg-[#151515] bg-opacity-60 px-24">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{ pra}</p>
      
    </div>
  </div>
        <div style={{ height: '100px' }} />
    </Parallax>
     
      
    </div>
  );
};

export default Cover;