
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 py-6 border-t mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Guia Turístico de Cristino Castro. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Desenvolvido com base no Inventário da Oferta Turística por Sebrae/PI.
        </p>
      </div>
    </footer>
  );
};
