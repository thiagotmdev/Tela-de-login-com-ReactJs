export function Heading(){
  return(
      <header className='flex flex-col items-center'>
        <img src="./images/logo.svg" alt="" />
        <p className="font-bold text-2xl mt-4 text-gray-100">Ignite React</p>
        <p className="text-lg mt-1 text-gray-400">Faça login e comece a usar</p>
      </header>
  );
}