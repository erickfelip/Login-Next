import React from "react";

export default function Register() {
  return (
    <div>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Inscrever-se</h1>
            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Nome"
            />

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Senha"
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirme sua senha"
            />

            <button
              type="submit"
              class="w-full text-center text-white py-3 rounded bg-indigo-500 focus:outline-none my-1"
            >
              Criar Conta
            </button>

            <div class="text-center text-sm text-grey-dark mt-4">
              Ao criar uma conta, você concodar com os
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                {" "}
                Termos de Serviço
              </a>{" "}
              e {" "}
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Política de Privacidade
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Já possui uma conta?
            <a class="no-underline border-b border-blue text-blue" href="/">
              {" "}
              Entrar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
