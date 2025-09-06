import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Cabeçalho */}
      <header className="bg-orange-600 text-white p-6">
        <h1 className="text-3xl font-bold">NN & Luzes</h1>
        <p className="text-lg">Aulas particulares de Contabilidade e Finanças</p>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8 space-y-8">
        {/* Sobre */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Sobre mim</h2>
          <p>
            Olá! Sou Pedro Claver, explicador e formador em{" "}
            <strong>Técnicas Contabilísticas</strong>,{" "}
            <strong>Contabilidade Societária</strong> e{" "}
            <strong>Matemática Financeira</strong>. Ajudando alunos e
            profissionais a dominarem estas áreas com aulas práticas e
            personalizadas.
          </p>
        </section>

        {/* Serviços */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Serviços</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Aulas de Contabilidade Societária</li>
            <li>Técnicas e Práticas Contabilísticas</li>
            <li>Cálculo e Matemática Financeira</li>
            <li>Preparação para exames e testes</li>
          </ul>
        </section>

        {/* Agendamento */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-2">
            Agende sua aula
          </h2>
          <p>
            Escolha o horário que melhor se adapta a si e reserve sua aula
            personalizada.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            className="inline-block mt-3 bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700"
          >
            Agendar Aula
          </a>
        </section>

        {/* Contato */}
        <section>
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Contato</h2>
          <p>Email: pedroclaver2003@gmail.com</p>
          <p>WhatsApp: +244 944 087 180</p>
          <a
            href="https://wa.me/244944087180"
            target="_blank"
            className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
          >
            Falar no WhatsApp
          </a>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} NN & Luzes - Todos os direitos reservados
      </footer>
    </div>
  );
}
