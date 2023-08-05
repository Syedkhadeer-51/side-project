import BarHorizontalStacked from "../components/BarHorizontalStacked";

function Analytics() {
  const greeting = 'Analytics';

  return(  
    <>
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-3xl lg:text-4xl">
        {greeting}
      </h1>
      <BarHorizontalStacked></BarHorizontalStacked>
    </> 
  );
}

export default Analytics;