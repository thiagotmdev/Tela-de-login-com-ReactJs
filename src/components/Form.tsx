import { Envelope, Lock, Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';

export function Form(){
  return(
   <section>
      <form className="flex flex-col items-stretch mt-10" action="#">
            <label className="font-semibold gap-3" htmlFor="email">
            <p>Endereço de e-mail</p>
              <div className="w-96 h-8 text-gray-400 bg-gray-800 flex flex-row p-1 gap-1 focus-within:ring-2 ring-cyan-300 rounded" >
                <Envelope size="24"/>
                <input type="email" className="w-full h-6 bg-gray-800 flex outline-none"/>
              </div>
            </label>

            <label className="font-semibold mt-4 gap-3" htmlFor="email">
            <p>Sua senha</p>
              <div className="w-96 h-8 text-gray-400 bg-gray-800 flex flex-row p-1 gap-1 focus-within:ring-2 ring-cyan-300 rounded">
                <Lock size="24"/>
                <input type="password" className="w-full h-6 bg-gray-800 flex outline-none"/>
              </div>
            </label>

            <label htmlFor="remember" className="flex items-center gap-2 mt-4">
              <Checkbox.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
                <Checkbox.Indicator asChild>
                    <Check weight="bold" className="h-5 w-5 text-cyan-500"/>
                </Checkbox.Indicator>
              </Checkbox.Root>
              <p className="text-sm text-gray-200 ">Lembrar de min por 30 dias</p>
            </label>

            <button type="submit" className="mt-8 w-96 h-8 bg-cyan-500 rounded">Entrar na plataforma</button>
      </form>
   </section>
  );
}