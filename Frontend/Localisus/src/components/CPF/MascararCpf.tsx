import { useState } from 'react';

export default function InputCpf() {
  const [cpf, setCpf] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let valor = e.target.value.replace(/\D/g, ''); // Remove letras e símbolos
    if (valor.length > 11) valor = valor.slice(0, 11); // Limita a 11 dígitos

    // Aplica a formatação 000.000.000-00
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    setCpf(valor);
  };

  return (
    <input
      type="text"
      value={cpf}
      onChange={handleChange}
      placeholder="000.000.000-00"
      maxLength={14}
    />
  );
}
