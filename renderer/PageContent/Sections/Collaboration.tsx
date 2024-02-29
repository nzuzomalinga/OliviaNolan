import { ImageGrid } from "./Components/ImageGrid";

export function Collaboration () {

  const SkeletonOne = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Marketing in Europe</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Crafting impactful marketing strategies to navigate the diverse market landscape in Europe.
        </p>
      </div>
    );
  };
  
  const SkeletonTwo = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Marketing in North America</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Elevating brands above the clouds in North America with strategic communication expertise.
        </p>
      </div>
    );
  };
  
  const SkeletonThree = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Marketing in Africa</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Nurturing brands amidst the greens of Africa, connecting with diverse audiences and cultures.
        </p>
      </div>
    );
  };
  
  const SkeletonFour = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Marketing in Asia</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Driving successful marketing campaigns along the vibrant rivers of Asia, bridging cultural gaps.
        </p>
      </div>
    );
  };
  
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail:
        "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];


  return (
    <div className="collaboration h-screen w-screen relative">
      <h2>Professional Highlights</h2>
       <ImageGrid cards={cards}/>
    </div>
  )
}
