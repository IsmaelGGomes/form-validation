'use client'
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';

import * as yup from 'yup';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function Home() {

  const Schema = yup.object().shape({
    nome: yup.string()
      .min(10, "Mínimo de 10 caracteres").
      required("Nome obrigatório"),
    data: yup.date()
      .typeError('Campo aceita apenas tipo Data')
      .required("Data obrigatória"),
    altura: yup.number()
      .typeError('Campo aceita apenas tipo Numero')
      .min(0.1, "Insira uma altura maior que 0.1")
      .max(3, "Insira umda altura menor que 3.0")
      .required("Altura é obrigatório"),
    idade: yup.number()
      .typeError('Campo aceita apenas tipo Numero')
      .positive("Insira um número positivo")
      .max(200, "Insira uma idade menor que 200")
      .required("Sobrenome é obrigatório"),
    email: yup.string()
      .email("Digite um email válido.")
      .required("Email é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmit = async (data) => {
    console.log(data);
    // toast.error(`${data.nome} - ${data.idade} - ${data.data.toLocaleDateString("pt-BR")}`);
    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">

            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-12 w-12 rounded-full"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {data.nome}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                <strong className=''>Altura:</strong> {data.altura}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                <strong>Data de nascimento:</strong> {data.data.toLocaleDateString("pt-BR")}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                <strong>Idade:</strong> {data.idade}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                <strong>Email:</strong> {data.email}
              </p>
            </div>
          </div>
        </div>
        <div className='px-2 py-2'>
          <img
            className="h-10 w-10 rounded-full"
            src="https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png"
            alt=""
          />
        </div>
        {/* <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div> */}
      </div>
    ))
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="flex items-center justify-center">
        <div className="px-9 pt-10 pb-10 flex flex-col gap-y-8 isolate aspect-video bg-white/10 shadow-xl ring-1 ring-black/5 aspect-video text-white rounded-xl min-w-[550px] max-w-[550px] ">

          <div>
            <div className="font-semibold text-2xl text-center pb-4">Cadastro de pessoas</div>
          </div>
          <div>
            <form method="POST" action="#" className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col    space-x-2 w-auto">
                <input type="text"
                  {...register("nome")}
                  className="bg-transparent border-2 border-gray-200 rounded-full transition duration-300 ease-in-out hover:scale-110 py-4 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-200  text-gray-200"
                  placeholder="Insira o nome"
                />
                {errors.nome && <p className="mt-2 text-sm text-red-500 ">{errors.nome.message}</p>}
              </div>
              <div className="flex flex-col space-x-2 w-auto">
                <input type="date"
                  {...register("data")}
                  className="bg-transparent border-2 border-gray-200 rounded-full transition duration-300 ease-in-out hover:scale-110 py-4 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-200 text-gray-200"
                />
                {errors.data && <p className="mt-2 text-sm text-red-500 ">{errors.data.message}</p>}
              </div>
              <div className="flex flex-col   space-x-2 w-auto">
                <input type=""
                  {...register("altura")}
                  className="bg-transparent border-2 border-gray-200 rounded-full transition duration-300 ease-in-out hover:scale-110 py-4 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-200 text-gray-200"
                  placeholder="Insira sua altura"
                />
                {errors.altura && <p className="mt-2 text-sm text-red-500 ">{errors.altura.message}</p>}
              </div>
              <div className="flex flex-col   space-x-2 w-auto">
                <input type=""
                  {...register("idade")}
                  className="bg-transparent border-2 border-gray-200 rounded-full transition duration-300 ease-in-out hover:scale-110 py-4 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-200 text-gray-200"
                  placeholder="Insira sua idade"
                />
                {errors.idade && <p className="mt-2 text-sm text-red-500 ">{errors.idade.message}</p>}
              </div>
              <div className="flex flex-col   space-x-2 w-auto">
                <input type="mail"
                  {...register("email")}
                  className="bg-transparent border-2 border-gray-200 rounded-full transition duration-300 ease-in-out hover:scale-110 py-4 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-gray-200 text-gray-200"
                  placeholder="Insira seu E-mail"
                />
                {errors.email && <p className="mt-2 text-sm text-red-500 ">{errors.email.message}</p>}
              </div>
              <div className="w-full flex justify-end mt-10">
                <button type="submit" className="rounded-full  bg-white text-black py-3 px-8 ">
                  <span className="text-teal-900 font-semibold">Enviar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
