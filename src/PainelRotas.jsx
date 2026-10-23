import { useEffect, useState } from "react";

export default function PainelRotas() {
  const [agora, setAgora] = useState(new Date());

  const [setorSelecionado, setSetorSelecionado] =
    useState("SEPARACAO");

  const setores = {
    SEPARACAO: [
    { numero: "788/789", nome: "BARREIRAS//IBOTIRAMA", limite: "18:30" },
    { numero: "039", nome: "TEIXEIRA DE FREITAS", limite: "20:00" },
    { numero: "030/086/787", nome: "GUANAMBI//BRUMADO//SEABRA", limite: "21:30" },
    { numero: "035/037", nome: "VDC//POÇÕES", limite: "22:30" },
    { numero: "043/049", nome: "ITABUNA//GANDU", limite: "23:20" },
    { numero: "771/786", nome: "SR.BOMFIM//JUAZEIRO", limite: "23:40" },
    { numero: "064/066", nome: "SERGIPE", limite: "00:30" },
    { numero: "784/791/778", nome: "IRECÊ//JACOBINA//JEQUIÉ", limite: "01:00" },
    { numero: "792", nome: "FPP", limite: "01:30" },
    { numero: "793/007", nome: "ITABERABA//RIBEIRA DO POMBAL", limite: "02:00" },
    { numero: "765", nome: "SANTO ANTÔNIO", limite: "03:10" },
    { numero: "038/033", nome: "FEIRA DE SANTANA", limite: "04:00" },
    { numero: "770/767", nome: "SERRINHA//ALAGOINHAS", limite: "04:20" },
    { numero: "034", nome: "SALVADOR REGIÃO MTP", limite: "06:50" },
  ],

    CONFERENCIA: [
    { numero: "788/789", nome: "BARREIRAS//IBOTIRAMA", limite: "18:50" },
    { numero: "039", nome: "TEIXEIRA DE FREITAS", limite: "20:20" },
    { numero: "030/086/787", nome: "GUANAMBI//BRUMADO//SEABRA", limite: "21:50" },
    { numero: "035/037", nome: "VDC//POÇÕES", limite: "22:50" },
    { numero: "043/049", nome: "ITABUNA//GANDU", limite: "23:40" },
    { numero: "771/786", nome: "SR.BOMFIM//JUAZEIRO", limite: "00:00" },
    { numero: "064/066", nome: "SERGIPE", limite: "00:50" },
    { numero: "784/791/778", nome: "IRECÊ//JACOBINA//JEQUIÉ", limite: "01:20" },
    { numero: "792", nome: "FPP", limite: "01:50" },
    { numero: "793/007", nome: "ITABERABA//RIBEIRA DO POMBAL", limite: "02:20" },
    { numero: "765", nome: "SANTO ANTÔNIO", limite: "03:30" },
    { numero: "038/033", nome: "FEIRA DE SANTANA", limite: "04:20" },
    { numero: "770/767", nome: "SERRINHA//ALAGOINHAS", limite: "04:40" },
    { numero: "034", nome: "SALVADOR REGIÃO MTP", limite: "07:10" },
  ],

    EXPEDICAO: [
   { numero: "788/789", nome: "BARREIRAS//IBOTIRAMA", limite: "19:10" },
    { numero: "039", nome: "TEIXEIRA DE FREITAS", limite: "20:40" },
    { numero: "030/086/787", nome: "GUANAMBI//BRUMADO//SEABRA", limite: "22:10" },
    { numero: "035/037", nome: "VDC//POÇÕES", limite: "23:10" },
    { numero: "043/049", nome: "ITABUNA//GANDU", limite: "00:00" },
    { numero: "771/786", nome: "SR.BOMFIM//JUAZEIRO", limite: "00:20" },
    { numero: "064/066", nome: "SERGIPE", limite: "01:10" },
    { numero: "784/791/778", nome: "IRECÊ//JACOBINA//JEQUIÉ", limite: "01:40" },
    { numero: "792", nome: "FPP", limite: "02:10" },
    { numero: "793/007", nome: "ITABERABA//RIBEIRA DO POMBAL", limite: "02:40" },
    { numero: "765", nome: "SANTO ANTÔNIO", limite: "03:50" },
    { numero: "038/033", nome: "FEIRA DE SANTANA", limite: "04:40" },
    { numero: "770/767", nome: "SERRINHA//ALAGOINHAS", limite: "05:00" },
    { numero: "034", nome: "SALVADOR REGIÃO MTP", limite: "07:30" },
  ],
  };

  const rotas = setores[setorSelecionado];

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutosRestantes = (horario) => {
    const [hora, minuto] = horario.split(":");

    const limite = new Date(agora);

    limite.setHours(Number(hora));
    limite.setMinutes(Number(minuto));
    limite.setSeconds(0);

    if (
      Number(hora) < 12 &&
      limite.getTime() < agora.getTime()
    ) {
      limite.setDate(limite.getDate() + 1);
    }

    return Math.floor(
      (limite.getTime() - agora.getTime()) /
        (1000 * 60)
    );
  };

  const corStatus = (minutos) => {
    if (minutos <= 0) return "#4b5563";

    if (minutos <= 30) return "#dc2626";

    if (minutos <= 60) return "#f59e0b";

    return "#16a34a";
  };

  const rotasAtivas = rotas
    .filter((rota) => {
      const minutos = minutosRestantes(
        rota.limite
      );

      return minutos > 0 && minutos <= 240;
    })
    .sort(
      (a, b) =>
        minutosRestantes(a.limite) -
        minutosRestantes(b.limite)
    );

  const rotasEncerradas = rotas.filter(
    (rota) => {
      const minutos = minutosRestantes(
        rota.limite
      );

      return minutos <= 0 && minutos >= -60;
    }
  );

  const rotaPrincipal = rotasAtivas[0];

  return (
    <div
      style={{
  width: "100%",
  minHeight: "100vh",
  background: "#0f172a",
  color: "white",
  display: "flex",
  flexDirection: "column",
}}
    >
      <div
        style={{
          height: "80px",
          background: "#111827",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          borderBottom: "2px solid #334155",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "2rem",
          }}
        >
          PAINEL DE ROTAS
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <select
            value={setorSelecionado}
            onChange={(e) =>
              setSetorSelecionado(
                e.target.value
              )
            }
            style={{
              padding: "10px",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
            }}
          >
            <option value="SEPARACAO">
              SEPARAÇÃO
            </option>

            <option value="CONFERENCIA">
              CONFERÊNCIA
            </option>

            <option value="EXPEDICAO">
              EXPEDIÇÃO
            </option>
          </select>

          <h2
            style={{
              margin: 0,
              fontSize: "2rem",
            }}
          >
            {agora.toLocaleTimeString()}
          </h2>
        </div>
      </div>

      {rotaPrincipal && (
  <div
    style={{
      flex: 1,
      minHeight: 0,
      margin: "10px",
            borderRadius: "20px",
            background: corStatus(
              minutosRestantes(
                rotaPrincipal.limite
              )
            ),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: "bold",
              maxWidth: "90%",
              lineHeight: "1",
            }}
          >
            {rotaPrincipal.nome}
          </h1>

          <h2
            style={{
              fontSize: "4rem",
              margin: "15px 0",
            }}
          >
            ROTA {rotaPrincipal.numero}
          </h2>

          <h3
            style={{
              fontSize: "2rem",
            }}
          >
            HORÁRIO LIMITE
          </h3>

          <h2
            style={{
              fontSize: "4rem",
            }}
          >
            {rotaPrincipal.limite}
          </h2>

          <h2
            style={{
              fontSize: "3rem",
            }}
          >
            {minutosRestantes(
              rotaPrincipal.limite
            )} MINUTOS RESTANTES
          </h2>
        </div>
      )}

      <div
  style={{
    background: "#111827",
    padding: "15px",
    display: "flex",
    gap: "15px",
    overflowX: "auto",
    flexShrink: 0,
  }}
>
        {rotasAtivas.slice(1).map((rota) => (
          <div
            key={`${rota.numero}-${rota.nome}`}
            style={{
              minWidth: "280px",
              background: corStatus(
                minutosRestantes(
                  rota.limite
                )
              ),
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <h3>{rota.nome}</h3>
            <p>ROTA {rota.numero}</p>
            <p>LIMITE {rota.limite}</p>
          </div>
        ))}

        {rotasEncerradas.map((rota) => (
          <div
            key={`enc-${rota.numero}-${rota.nome}`}
            style={{
              minWidth: "280px",
              background: "#374151",
              borderRadius: "10px",
              padding: "15px",
              opacity: 0.7,
            }}
          >
            <h3>{rota.nome}</h3>
            <p>ROTA {rota.numero}</p>
            <p>ENCERRADA</p>
          </div>
        ))}
      </div>
    </div>
  );
}