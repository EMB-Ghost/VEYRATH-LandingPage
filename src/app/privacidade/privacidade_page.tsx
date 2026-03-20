import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — VEYRATH",
  description: "Política de privacidade e proteção de dados do site Veyrath, conforme a LGPD.",
};

export default function Privacidade() {
  return (
    <main style={{
      maxWidth: "800px", margin: "0 auto", padding: "80px 24px",
      fontFamily: "'Cormorant Garamond', serif", color: "#c8b9f0",
      lineHeight: "1.8",
    }}>
      <a href="/" style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#d4a017", textDecoration: "none", opacity: 0.7 }}>
        ← Voltar ao site
      </a>

      <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: "2rem", color: "#f0e6c8", letterSpacing: "4px", margin: "32px 0 8px" }}>
        POLÍTICA DE PRIVACIDADE
      </h1>
      <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#d4a017", opacity: 0.7, marginBottom: "40px" }}>
        VEYRATH GAMES · Última atualização: Março de 2026
      </p>

      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#f0e6c8", letterSpacing: "3px", margin: "32px 0 12px" }}>
        1. QUEM SOMOS
      </h2>
      <p>
        O site <strong>veyrath.com.br</strong> é operado pela Embrasa Games, estúdio independente
        com sede em Florianópolis, Santa Catarina, Brasil. Responsável: EMB-Ghost.
        Contato: <a href="mailto:marketing@veyrath.com.br" style={{ color: "#d4a017" }}>marketing@veyrath.com.br</a>
      </p>

      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#f0e6c8", letterSpacing: "3px", margin: "32px 0 12px" }}>
        2. QUAIS DADOS COLETAMOS
      </h2>
      <p>Coletamos apenas os dados que você nos fornece voluntariamente:</p>
      <ul style={{ marginTop: "12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <li><strong>Endereço de e-mail:</strong> quando você se registra pelo Quiz do Destino ou formulários do site.</li>
        <li><strong>Dados do quiz:</strong> Reino, Classe, Profissão e Linhagem escolhidos no Quiz do Destino — usados para personalizar nossa comunicação.</li>
      </ul>
      <p style={{ marginTop: "16px" }}>
        Não coletamos dados de pagamento — transações são processadas diretamente pela plataforma Catarse.
      </p>

      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#f0e6c8", letterSpacing: "3px", margin: "32px 0 12px" }}>
        3. COMO USAMOS SEUS DADOS
      </h2>
      <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <li>Envio de atualizações sobre o desenvolvimento de Veyrath</li>
        <li>Comunicação sobre o Alpha, Early Access e datas de lançamento</li>
        <li>Informações sobre benefícios de Fundador</li>
      </ul>
      <p style={{ marginTop: "16px" }}>
        <strong>Nunca venderemos, alugaremos ou compartilharemos seus dados com terceiros para fins comerciais.</strong>
      </p>

      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#f0e6c8", letterSpacing: "3px", margin: "32px 0 12px" }}>
        4. BASE LEGAL (LGPD)
      </h2>
      <p>
        Tratamos seus dados com base no seu <strong>consentimento expresso</strong> (Art. 7º, I da Lei 13.709/2018).
        Você pode retirar esse consentimento a qualquer momento entrando em contato pelo e-mail acima.
      </p>

      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#f0e6c8", letterSpacing: "3px", margin: "32px 0 12px" }}>
        5. SEUS DIREITOS
      </h2>
      <p>Conforme a LGPD, você tem direito a:</p>
      <ul style={{ marginTop: "12px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
        <li>Confirmar a existência de tratamento dos seus dados</li>
        <li>Acessar seus dados</li>
        <li>Corrigir dados incompletos ou incorretos</li>
        <li>Solicitar a exclusão dos seus dados</li>
        <li>Revogar o consentimento a qualquer momento</li>
      </ul>
      <p style={{ marginTop: "16px" }}>
        Para exercer qualquer direito, entre em contato: <a href="mailto:marketing@veyrath.com.br" style={{ color: "#d4a017" }}>marketing@veyrath.com.br</a>
      </p>

      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#f0e6c8", letterSpacing: "3px", margin: "32px 0 12px" }}>
        6. ARMAZENAMENTO E SEGURANÇA
      </h2>
      <p>
        Os e-mails coletados são armazenados na plataforma <strong>Formspree</strong> (formspree.io),
        que possui suas próprias políticas de segurança e privacidade. O site usa conexão HTTPS para
        proteger a transmissão de dados.
      </p>

      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#f0e6c8", letterSpacing: "3px", margin: "32px 0 12px" }}>
        7. COOKIES
      </h2>
      <p>
        Este site não utiliza cookies de rastreamento ou publicidade. Apenas cookies técnicos essenciais
        para o funcionamento do site podem estar presentes.
      </p>

      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", color: "#f0e6c8", letterSpacing: "3px", margin: "32px 0 12px" }}>
        8. ALTERAÇÕES
      </h2>
      <p>
        Esta política pode ser atualizada periodicamente. A data da última atualização sempre estará
        indicada no topo desta página. O uso continuado do site após alterações implica aceite das
        novas condições.
      </p>

      <div style={{ marginTop: "60px", padding: "20px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "11px", color: "rgba(200,185,255,0.3)", letterSpacing: "1px" }}>
        © 2026 VEYRATH GAMES · <a href="/" style={{ color: "#d4a017", textDecoration: "none", opacity: 0.7 }}>veyrath.com.br</a>
      </div>
    </main>
  );
}
